import * as React from "react";
import * as THREE from "three";
import { BufferGeometryUtils } from "three/examples/jsm/utils/BufferGeometryUtils";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const d3Interpolate = require("d3-interpolate");
const mapPoints = require("./mapPoints.json");
const globeRadius = 100;
const globeSegments = 64;
const globeWidth = 4098 / 2;
const globeHeight = 1968 / 2;

interface EarthProps {
  barData: { lat: number; lng: number; value: number }[];
}

export default class Earth extends React.PureComponent<EarthProps> {
  canvasRef = React.createRef<HTMLCanvasElement>();
  divRef = React.createRef<HTMLDivElement>();

  glRender: THREE.WebGLRenderer;
  scene: THREE.Scene; // 场景
  camera: THREE.PerspectiveCamera; // 相机
  earthMesh: THREE.Mesh; // 地球模型
  earthMapPoints: THREE.Mesh; // 点状图
  clock = new THREE.Clock();
  pivot = new THREE.Group();
  controls: OrbitControls;

  requestAnimationFrameNum: number;
  isControling = false;
  controlTimer: any;
  barMeshs:THREE.Object3D[] = [];

  canvasRenderFun = this.canvasRender.bind(this);
  mousedownHandlerFun = this.mousedownHandler.bind(this);
  mouseupHandlerFun = this.mouseupHandler.bind(this);

  componentDidMount() {
    this.initCanvas();
  }

  componentDidUpdate(prevProps: EarthProps) {
    const { barData } = this.props;
    if (prevProps.barData !== barData) {
      this.pivot.remove(...this.barMeshs);
      this.createBar();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.controlTimer);
    cancelAnimationFrame(this.requestAnimationFrameNum);
    this.canvasRenderFun = null;
    this.controls.removeEventListener("mousedown", this.mousedownHandlerFun);
    this.controls.removeEventListener("mouseup", this.mouseupHandlerFun);
  }

  mousedownHandler() {
    clearTimeout(this.controlTimer);
    this.isControling = true;
  }

  mouseupHandler() {
    this.controlTimer = setTimeout(() => {
      this.isControling = false;
    }, 500);
  }

  initCanvas() {
    const canvas = this.canvasRef.current;
    // 渲染器
    this.glRender = new THREE.WebGLRenderer({ canvas, alpha: true });
    this.glRender.setClearColor(0x000000, 0);
    // 场景
    this.scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xAAAAAA);

    console.log(canvas.clientWidth, canvas.clientHeight);

    // 相机
    const fov = 45;
    const aspect = canvas.clientWidth / canvas.clientHeight; // the canvas default
    const near = 1;
    const far = 4000;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.z = 400;

    this.controls = new OrbitControls(this.camera, canvas);
    this.controls.target.set(0, 0, 0);
    this.controls.addEventListener("start", this.mousedownHandlerFun);
    this.controls.addEventListener("end", this.mouseupHandlerFun);

    // 创建一个球体
    const geometry = new THREE.SphereGeometry(
      globeRadius,
      globeSegments,
      globeSegments
    );
    // 创建材质
    const material = new THREE.MeshBasicMaterial({
      // map: texture,
      transparent: true,
      opacity: 0.8,
      color: 0x333333,
    });

    // 地球
    this.earthMesh = new THREE.Mesh(geometry, material);
    this.earthMesh.name = "EarthMesh";
    this.pivot.add(this.earthMesh);
    // 生成点状图
    this.createMapPoints();
    // 生成柱状图
    this.createBar();

    this.scene.add(this.pivot);
    // 渲染场景
    this.glRender.render(this.scene, this.camera);
    this.pivot.rotation.y = 90;
    this.canvasRender();
  }

  /**
   * 渲染场景
   * @param time
   */
  canvasRender(time?: number) {
    if (!this.canvasRenderFun) return;

    if (!this.isControling) {
      this.pivot.rotation.y += 0.001;
    }
    this.controls.update();
    // 更新
    if (this.resizeRendererToDisplaySize()) {
      const canvas = this.glRender.domElement;
      this.camera.aspect = canvas.clientWidth / canvas.clientHeight;
      this.camera.updateProjectionMatrix();
    }

    this.glRender.render(this.scene, this.camera);
    this.requestAnimationFrameNum = requestAnimationFrame(this.canvasRenderFun);
  }

  /**
   * canvas自适应
   * @param renderer
   */
  resizeRendererToDisplaySize() {
    const canvas = this.glRender.domElement;

    // 兼容视网膜屏
    const pixelRatio = window.devicePixelRatio;
    const width = (this.divRef.current.offsetWidth * pixelRatio) | 0;
    const height = (this.divRef.current.offsetHeight * pixelRatio) | 0;

    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      this.glRender.setSize(width, height, false);
    }
    return needResize;
  }

  /**
   * 生成点状世界地图
   */
  createMapPoints() {
    // The material that our ping will be created from.
    const material = new THREE.MeshBasicMaterial({
      color: "#AAA",
    });

    const sphere = [];
    for (let point of mapPoints.points) {
      // Transform our latitude and longitude values to points on the sphere.
      const pos = this.convertFlatCoordsToSphereCoords(point.x, point.y);
      if (pos.x && pos.y && pos.z) {
        // The geometry that will contain all of our points.
        const pingGeometry = new THREE.SphereGeometry(0.4, 5, 5);
        pingGeometry.translate(pos.x, pos.y, pos.z);
        sphere.push(pingGeometry);
      }
    }
    // We end up with 1 mesh to add to the scene rather than our (n) number of points.
    this.earthMapPoints = new THREE.Mesh(
      BufferGeometryUtils.mergeBufferGeometries(sphere),
      material
    );
    this.earthMapPoints.name = "Globe Points";
    this.pivot.add(this.earthMapPoints);
  }

  /**
   * 生成柱状图
   */
  createBar() {
    this.barMeshs = [];
    const { barData } = this.props;
    if (!barData || barData.length === 0) return;

    barData.sort((a, b) => {
      return b.value - a.value;
    });

    const maxValue = barData[0].value / 10000;
    const interpolate = d3Interpolate.interpolate("#FF0000", "#000066");
    let color;

    barData.forEach(({ lat, lng, value: size }) => {
      size = size / 10000;
      color = interpolate(size / maxValue);
      const pos = this.convertLatLngToSphereCoords(lat, lng, globeRadius);

      if (pos.x && pos.y && pos.z) {
        // 柱状图
        const geometry = new THREE.BoxGeometry(2, 2, 1);
        geometry.applyMatrix4(new THREE.Matrix4().makeTranslation(0, 0, -0.5));
        const barMesh = new THREE.Mesh(
          geometry,
          new THREE.MeshBasicMaterial({
            color,
          })
        );
        barMesh.position.set(pos.x, pos.y, pos.z);
        barMesh.lookAt(this.earthMesh.position);

        barMesh.scale.z = Math.max(size, 0.1); // avoid non-invertible matrix
        barMesh.updateMatrix();
        this.pivot.add(barMesh);
        this.barMeshs.push(barMesh);
      }
    });
  }

  /**
   * 生成颜色
   * @param x
   */
  colorFn(x: number) {
    var c = new THREE.Color();
    c.setHSL(0.6 - x * 0.5, 1.0, 0.5);
    return c;
  }

  // 经纬度转成球体坐标
  convertLatLngToSphereCoords(
    latitude: number,
    longitude: number,
    radius: number
  ) {
    const phi = (latitude * Math.PI) / 180;
    const theta = ((longitude - 180) * Math.PI) / 180;
    const x = -(radius + -1) * Math.cos(phi) * Math.cos(theta);
    const y = (radius + -1) * Math.sin(phi);
    const z = (radius + -1) * Math.cos(phi) * Math.sin(theta);
    return new THREE.Vector3(x, y, z);
  }

  /**
   * 2d的地图坐标转为球体3d坐标
   * @param x
   * @param y
   */
  convertFlatCoordsToSphereCoords(x: number, y: number) {
    // Calculate the relative 3d coordinates using Mercator projection relative to the radius of the globe.
    // Convert latitude and longitude on the 90/180 degree axis.
    let latitude = ((x - globeWidth) / globeWidth) * -180;
    let longitude = ((y - globeHeight) / globeHeight) * -90;
    latitude = (latitude * Math.PI) / 180; //(latitude / 180) * Math.PI
    longitude = (longitude * Math.PI) / 180; //(longitude / 180) * Math.PI // Calculate the projected starting point
    const radius = Math.cos(longitude) * globeRadius;
    const targetX = Math.cos(latitude) * radius;
    const targetY = Math.sin(longitude) * globeRadius;
    const targetZ = Math.sin(latitude) * radius;
    return {
      x: targetX,
      y: targetY,
      z: targetZ,
    };
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }} ref={this.divRef}>
        <canvas
          style={{
            width: "100%",
            height: "100%",
          }}
          ref={this.canvasRef}
        ></canvas>
      </div>
    );
  }
}
