var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&o(e,a,t[a]);if(r)for(var a of r(t))l.call(t,a)&&o(e,a,t[a]);return e};import{r as n,R as i,J as m,k as p,j as d,g}from"./vendor.9b251249.js";import{a as _,F as u}from"./index.esm.d9c12dbd.js";import{f as v}from"./logs.c6a57077.js";import{c as x,w as f,x as E,y as h,C as b,S as y,z as j,A as N,g as z}from"./index.a1c9209e.js";import{d as w}from"./debounce.cc85a806.js";import{u as C}from"./useRemainingViewPortHeight.06dbbdd2.js";var O="_RuleSearch_1gcst_1",P="_RuleSearchContainer_1gcst_5",S="_inputWrapper_1gcst_10",T="_input_1gcst_10",k="_iconWrapper_1gcst_35";var L=x((e=>({searchText:f(e),updateSearchText:E})))((function({dispatch:e,searchText:t,updateSearchText:a}){const[r,s]=n.exports.useState(t),l=n.exports.useCallback((t=>{e(a(t))}),[e,a]),o=n.exports.useMemo((()=>w(l,300)),[l]);return i.createElement("div",{className:O},i.createElement("div",{className:P},i.createElement("div",{className:S},i.createElement("input",{type:"text",value:r,onChange:e=>{s(e.target.value),o(e.target.value)},className:T})),i.createElement("div",{className:k},i.createElement(m,{size:20}))))}));var R="_logMeta_zl5cd_1",W="_logType_zl5cd_8",D="_logTime_zl5cd_18",I="_logText_zl5cd_24",M="_logsWrapper_zl5cd_37",A="_log_zl5cd_1",B="_logPlaceholder_zl5cd_54",F="_logPlaceholderIcon_zl5cd_67";const{useCallback:H,memo:J,useEffect:K}=d,V={debug:"#28792c",info:"var(--bg-log-info-tag)",warning:"#b99105",error:"#c11c1c"};function q({time:e,even:t,payload:a,type:r}){const s=g({even:t},A);return n.exports.createElement("div",{className:s},n.exports.createElement("div",{className:R},n.exports.createElement("div",{className:D},e),n.exports.createElement("div",{className:W,style:{backgroundColor:V[r]}},r),n.exports.createElement("div",{className:I},a)))}function G(e,t){return t[e].id}const Q=J((({index:e,style:t,data:a})=>{const r=a[e];return n.exports.createElement("div",{style:t},n.exports.createElement(q,c({},r)))}),_);var U=x((e=>({logs:j(e),logLevel:N(e),apiConfig:z(e)})))((function({dispatch:e,logLevel:r,apiConfig:s,logs:l}){const o=H((t=>e(h(t))),[e]);K((()=>{var e;v((e=c({},s),t(e,a({logLevel:r}))),o)}),[s,r,o]);const[i,m]=C(),{t:d}=p();return n.exports.createElement("div",null,n.exports.createElement(b,{title:d("Logs")}),n.exports.createElement(L,null),n.exports.createElement("div",{ref:i,style:{paddingBottom:30}},0===l.length?n.exports.createElement("div",{className:B,style:{height:m-30}},n.exports.createElement("div",{className:F},n.exports.createElement(y,{width:200,height:200})),n.exports.createElement("div",null,d("no_logs"))):n.exports.createElement("div",{className:M},n.exports.createElement(u,{height:m-30,width:"100%",itemCount:l.length,itemSize:80,itemData:l,itemKey:G},Q))))}));export default U;
