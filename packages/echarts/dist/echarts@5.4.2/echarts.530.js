(()=>{(self.webpackChunkecharts=self.webpackChunkecharts||[]).push([[530],{577:(f,_,t)=>{"use strict";t.r(_),t.d(_,{default:()=>m});var s=t(166),e=t.n(s),p=t(861),h=t.n(p),u=h()(e());u.push([f.id,`.CoACW9wnen9a3Prux34L{width:100%;height:100%}
`,""]),u.locals={root:"CoACW9wnen9a3Prux34L"};const m=u},620:(f,_,t)=>{"use strict";t.d(_,{Z:()=>m});var s=t(32),e=t(963),p=t(40),h=t(207),u=t.n(h);function m({option:n,style:i,className:a,theme:l,__style:o,...r}){const c=(0,e.useRef)(null),d=(0,e.useRef)(null);return(0,e.useEffect)(()=>{c.current&&(d.current=p.init(c.current,l||"dark"),n&&d.current.setOption(n))},[]),(0,e.useEffect)(()=>{n&&d.current?.setOption(n)},[n]),(0,e.useEffect)(()=>{d.current?.resize()},[i,o?.width,o?.height,a]),(0,s.jsx)("div",{...r,className:`${u().root} ${a}`,style:{...i},ref:c})}},868:(f,_,t)=>{"use strict";t.r(_),t.d(_,{default:()=>i});var s=t(32),e=t(294),p=t(963),h=t(229),u=t(620);const m=t.p+"e4e3bb7a81299a37197b.webp";function n({data:a,option:l,...o}){const r=(0,p.useMemo)(()=>{const c={backgroundColor:"transparent",tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},xAxis:{type:"value",splitLine:{show:!1},axisLine:{show:!0},axisTick:{show:!0}},yAxis:{type:"category",data:a?.category,splitLine:{show:!1},axisLine:{show:!0},axisTick:{show:!0}},series:a?.values.map(({name:d,data:E})=>({type:"bar",name:d,data:E}))};return(0,e.Z)(c,l)},[a,l]);return(0,s.jsx)(u.Z,{...o,option:r})}const i=(0,h.P)(n,{name:"\u5206\u7C7B\u6761\u5F62\u56FE",category:"\u67F1\u72B6\u56FE",cover:m,props:{data:{name:"\u6570\u636E",description:`{
          category:string[],
          values: Array<{
            name:string,
            data:number[]
          }>
        }
        `,type:"object",default:{category:["Brazil","Indonesia","USA","India","China"],values:[{name:"2011",data:[18203,23489,29034,104970,131744]},{name:"2012",data:[19325,23438,31e3,121594,134141]}]}},options:{name:"\u914D\u7F6E",type:"object",description:"Echarts\u914D\u7F6E\uFF0C\u5177\u4F53\u53C2\u8003echarts\u5B98\u7F51"}}})},229:(f,_,t)=>{"use strict";t.d(_,{P:()=>m});var s=t(32),e=t(963),p=t(253),h=t(334);const u=({component:n,props:i,appRef:a,onMount:l})=>{const[o,r]=(0,e.useState)(i);return(0,e.useImperativeHandle)(a,()=>({updateProps:c=>{r(c)}}),[o]),(0,e.useLayoutEffect)(()=>{l&&l(i)},[]),(0,s.jsx)(n,Object.assign({},o))};function m(n,i){const a=(0,h.x0)();return class{constructor(){this.__component=n,this.__info=i,this.__root=null,this.__props=void 0,this.__id=a,this.__ref={current:void 0},this.framework={name:"react",version:e.version}}get component(){return this.__component}get componentInfo(){return this.__info}get componentId(){return this.__id}mount(o,r,c){const d=p.createRoot(o);this.__root=d,this.__props=Object.assign(Object.assign({},this.getDefaultProps()),r),d.render((0,s.jsx)(u,{component:this.__component,props:this.__props,onMount:c,appRef:this.__ref}))}unmount(){this.__root&&(this.__root.unmount(),this.__root=null,this.__ref.current=void 0)}setProps(o){this.__ref.current&&(this.__props=Object.assign(Object.assign({},this.__props),o),this.__ref.current.updateProps(this.__props))}getProps(){return this.__props}getDefaultProps(){let o;if(this.componentInfo.props)for(const r in this.componentInfo.props)this.componentInfo.props[r].default&&(o||(o={}),o[r]=this.componentInfo.props[r].default);return o}}}},207:(f,_,t)=>{var s=t(577);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[f.id,s,""]]),s.locals&&(f.exports=s.locals);var e=t(396).Z,p=e("64be7c76",s,"echarts","5.4.2")}}]);})();