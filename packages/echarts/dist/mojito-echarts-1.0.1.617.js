"use strict";(self.webpackChunkmojito_echarts=self.webpackChunkmojito_echarts||[]).push([[617],{672:(t,e,n)=>{n.d(e,{Z:()=>c});var r=n(458),s=n(954),o=n(40),a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]])}return n};function c(t){var{option:e,style:n,className:c,theme:i}=t,u=a(t,["option","style","className","theme"]);const l=(0,s.useRef)(null),p=(0,s.useRef)(null);return(0,s.useEffect)((()=>{l.current&&(p.current=o.init(l.current,i||"dark"),e&&p.current.setOption(e))}),[]),(0,s.useEffect)((()=>{var t;e&&(null===(t=p.current)||void 0===t||t.setOption(e))}),[e]),(0,s.useEffect)((()=>{var t;null===(t=p.current)||void 0===t||t.resize()}),[n,c]),(0,r.jsx)("div",Object.assign({},u,{className:c,style:Object.assign({width:"100%",height:"100%"},n),ref:l}))}},617:(t,e,n)=>{n.r(e),n.d(e,{default:()=>i});var r=n(458),s=n(672),o=n(745),a=n(954),c=n(232);const i=(0,c.P)((function(t){var{data:e=[],option:n}=t,c=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]])}return n}(t,["data","option"]);const i=(0,a.useMemo)((()=>{const t={xAxis:{},yAxis:{},series:[{symbolSize:20,data:[[10,8.04],[8.07,6.95],[13,7.58],[9.05,8.81],[11,8.33],[14,7.66],[13.4,6.81],[10,6.33],[14,8.96],[12.5,6.82],[9.15,7.2],[11.5,7.2],[3.03,4.23],[12.2,7.83],[2.02,4.47],[1.05,3.33],[4.05,4.96],[6.03,7.24],[12,6.26],[12,8.84],[7.08,5.82],[5.02,5.68]],type:"scatter"}]};return n?(0,o.Z)(t,n):t}),[e,n]);return(0,r.jsx)(s.Z,Object.assign({},c,{option:i}))}),{name:"基础散点图",props:{data:{name:"数据",description:'图表数据[{name:"类型", value:100}, ...]',type:"array",default:[[10,8.04],[8.07,6.95],[13,7.58],[9.05,8.81],[11,8.33],[14,7.66],[13.4,6.81],[10,6.33],[14,8.96],[12.5,6.82],[9.15,7.2],[11.5,7.2],[3.03,4.23],[12.2,7.83],[2.02,4.47],[1.05,3.33],[4.05,4.96],[6.03,7.24],[12,6.26],[12,8.84],[7.08,5.82],[5.02,5.68]]},options:{name:"配置",type:"object",description:"Echarts配置，具体参考echarts官网"}}})},232:(t,e,n)=>{n.d(e,{P:()=>f});var r=n(458),s=n(954),o=n(520),a=n(471);const c=Symbol(),i=Symbol(),u=Symbol(),l=Symbol(),p="__UPDATE_PROPS__";function f(t,e){return{component:t,componentInfo:e,framework:{name:"react",version:s.default.version},[c]:null,[i]:null,[l]:(0,a.x0)(),mount(t,e){const n=new EventTarget,s=o.createRoot(t);this[c]=s,this[i]=n,this[u]=e,s.render((0,r.jsx)(h,{component:this.component,props:e,evener:this[i]}))},unmount(){this[c]&&(this[c].unmount(),this[c]=null,this[i]=null)},setProps(t){this[i]&&(this[u]=t,this[i].dispatchEvent(new m(p,t)))},getProps(){return this[u]},getId(){return this[l]}}}class m extends Event{constructor(t,e){super(t),this.data=e}}const h=({component:t,props:e,evener:n})=>{const[o,a]=(0,s.useState)(e);return(0,s.useEffect)((()=>{const t=({data:t})=>{a(Object.assign({},t))};return n.addEventListener(p,t),()=>n.removeEventListener(p,t)}),[n]),(0,r.jsx)(t,Object.assign({},o))}}}]);