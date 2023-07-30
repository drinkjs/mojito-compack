"use strict";(self.webpackChunkmojito_echarts=self.webpackChunkmojito_echarts||[]).push([[309],{620:(I,v,s)=>{s.d(v,{Z:()=>E});var h=s(32),u=s(963),m=s(40),D=Object.defineProperty,j=Object.defineProperties,g=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,P=(o,n,r)=>n in o?D(o,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[n]=r,i=(o,n)=>{for(var r in n||(n={}))l.call(n,r)&&P(o,r,n[r]);if(c)for(var r of c(n))f.call(n,r)&&P(o,r,n[r]);return o},p=(o,n)=>j(o,g(n)),d=(o,n)=>{var r={};for(var t in o)l.call(o,t)&&n.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&c)for(var t of c(o))n.indexOf(t)<0&&f.call(o,t)&&(r[t]=o[t]);return r};function E(o){var n=o,{option:r,style:t,className:e,theme:_,$style:a}=n,M=d(n,["option","style","className","theme","$style"]);const y=(0,u.useRef)(null),O=(0,u.useRef)(null);return(0,u.useEffect)(()=>{y.current&&(O.current=m.init(y.current,_||"dark"),r&&O.current.setOption(r))},[]),(0,u.useEffect)(()=>{var C;r&&((C=O.current)==null||C.setOption(r))},[r]),(0,u.useEffect)(()=>{var C;(C=O.current)==null||C.resize()},[t,a?.width,a?.height,e]),(0,h.jsx)("div",p(i({},M),{className:e,style:i({width:"100%",height:"100%"},t),ref:y}))}},309:(I,v,s)=>{s.r(v),s.d(v,{default:()=>r});var h=s(32),u=s(620),m=s(294),D=s(963),j=s(229),g=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,p=(t,e,_)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:_}):t[e]=_,d=(t,e)=>{for(var _ in e||(e={}))P.call(e,_)&&p(t,_,e[_]);if(f)for(var _ of f(e))i.call(e,_)&&p(t,_,e[_]);return t},E=(t,e)=>c(t,l(e)),o=(t,e)=>{var _={};for(var a in t)P.call(t,a)&&e.indexOf(a)<0&&(_[a]=t[a]);if(t!=null&&f)for(var a of f(t))e.indexOf(a)<0&&i.call(t,a)&&(_[a]=t[a]);return _};function n(t){var e=t,{data:_=[],option:a}=e,M=o(e,["data","option"]);const y=(0,D.useMemo)(()=>{const O={backgroundColor:"transparent",xAxis:{},yAxis:{},series:[{symbolSize:20,data:[[10,8.04],[8.07,6.95],[13,7.58],[9.05,8.81],[11,8.33],[14,7.66],[13.4,6.81],[10,6.33],[14,8.96],[12.5,6.82],[9.15,7.2],[11.5,7.2],[3.03,4.23],[12.2,7.83],[2.02,4.47],[1.05,3.33],[4.05,4.96],[6.03,7.24],[12,6.26],[12,8.84],[7.08,5.82],[5.02,5.68]],type:"scatter"}]};return a?(0,m.Z)(O,a):O},[_,a]);return(0,h.jsx)(u.Z,E(d({},M),{option:y}))}const r=(0,j.P)(n,{name:"\u57FA\u7840\u6563\u70B9\u56FE",props:{data:{name:"\u6570\u636E",description:'\u56FE\u8868\u6570\u636E[{name:"\u7C7B\u578B", value:100}, ...]',type:"array",default:[[10,8.04],[8.07,6.95],[13,7.58],[9.05,8.81],[11,8.33],[14,7.66],[13.4,6.81],[10,6.33],[14,8.96],[12.5,6.82],[9.15,7.2],[11.5,7.2],[3.03,4.23],[12.2,7.83],[2.02,4.47],[1.05,3.33],[4.05,4.96],[6.03,7.24],[12,6.26],[12,8.84],[7.08,5.82],[5.02,5.68]]},options:{name:"\u914D\u7F6E",type:"object",description:"Echarts\u914D\u7F6E\uFF0C\u5177\u4F53\u53C2\u8003echarts\u5B98\u7F51"}}})},229:(I,v,s)=>{s.d(v,{P:()=>g});var h=s(32),u=s(963),m=s(253),D=s(334);const j=({component:c,props:l,appRef:f,onMount:P})=>{const[i,p]=(0,u.useState)(l);return(0,u.useImperativeHandle)(f,()=>({updateProps:d=>{p(d)}}),[i]),(0,u.useEffect)(()=>{P&&P(l)},[]),(0,h.jsx)(c,Object.assign({},i))};function g(c,l){const f=(0,D.x0)();return class{constructor(){this.__component=c,this.__info=l,this.__root=null,this.__props=void 0,this.__id=f,this.__ref={current:void 0},this.framework={name:"react",version:u.version}}get component(){return this.__component}get componentInfo(){return this.__info}get componentId(){return this.__id}mount(i,p,d){const E=m.createRoot(i);this.__root=E,this.__props=Object.assign(Object.assign({},this.getDefaultProps()),p),E.render((0,h.jsx)(j,{component:this.__component,props:this.__props,onMount:d,appRef:this.__ref}))}unmount(){this.__root&&(this.__root.unmount(),this.__root=null,this.__ref.current=void 0)}setProps(i){if(this.__ref.current){const p=this.__props;this.__props=Object.assign(Object.assign({},p),i),this.__ref.current.updateProps(this.__props)}}getProps(){return this.__props}getDefaultProps(){let i;if(this.componentInfo.props)for(const p in this.componentInfo.props)this.componentInfo.props[p].default&&(i||(i={}),i[p]=this.componentInfo.props[p].default);return i}}}}}]);
