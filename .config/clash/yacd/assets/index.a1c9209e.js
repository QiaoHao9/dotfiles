var e,t,n=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,o)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,i=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(a)for(var n of a(t))l.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>o(e,r(t)),p=(e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&a)for(var o of a(e))t.indexOf(o)<0&&l.call(e,o)&&(n[o]=e[o]);return n};import{i as d,B as m,a as h,b as f,R as g,s as x,f as E,u as b,r as v,G as _,Q as w,c as y,d as C,e as k,g as N,X as L,E as P,h as I,j as R,k as A,T as S,M as T,l as O,y as U,F as j,m as B,n as z,o as M,p as D,q as $,H as F,I as W,S as q,t as V,v as J,x as G,w as H,z as K}from"./vendor.9b251249.js";let Q;const Y={},Z=function(e,t){if(!t)return e();if(void 0===Q){const e=document.createElement("link").relList;Q=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in Y)return;Y[e]=!0;const t=e.endsWith(".css"),n=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":Q,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))},X={zh:Z((()=>import("./zh.d85002f6.js")),void 0),en:Z((()=>import("./en.41adc249.js")),void 0)};d.use(m).use(h).use(f).init({debug:!1,backend:{loadPath:"/__{{lng}}/{{ns}}.json",request:function(e,t,n,o){let r;switch(t){case"/__zh/translation.json":case"/__zh-CN/translation.json":r=X.zh;break;case"/__en/translation.json":default:r=X.en}r&&r.then((e=>{o(null,{status:200,data:e.data})}))}},supportedLngs:["en","zh"],fallbackLng:"en",interpolation:{escapeValue:!1}});function ee(e){return e.replace(/\/$/,"")}function te(e,t){let n=String(e);for(;n.length<t;)n="0"+n;return n}const ne={"Content-Type":"application/json"};function oe(e,t,n){const o="?"+t.toString(),r=new URL(e);return"https:"===r.protocol?r.protocol="wss:":r.protocol="ws:",`${ee(r.href)}${n}${o}`}function re({baseURL:e,secret:t}){return{url:e,init:{headers:function({secret:e}){const t=i({},ne);return e&&(t.Authorization=`Bearer ${e}`),t}({secret:t})}}}function ae(e,t){const{baseURL:n,secret:o}=e;return oe(n,new URLSearchParams({token:o}),t)}function se(e,t){const{baseURL:n,secret:o,logLevel:r}=e;return oe(n,new URLSearchParams({token:o,level:r}),t)}var le="_root_1o14m_1",ce="_h1_1o14m_7";var ie=g.memo((function({title:e}){return g.createElement("div",{className:le},g.createElement("h1",{className:ce},e))}));x(!1);const{createContext:ue,memo:pe,useMemo:de,useRef:me,useEffect:he,useCallback:fe,useContext:ge,useState:xe}=g,Ee=ue(null),be=ue(null),ve=ue(null);function _e(){return ge(ve)}function we({initialState:e,actions:t={},children:n}){const o=me(e),[r,a]=xe(e),s=fe((()=>o.current),[]);he((()=>{}),[s]);const l=fe(((e,t)=>{if("function"==typeof e)return e(l,s);const n=E(s(),t);n!==o.current&&(o.current=n,a(n))}),[s]),c=de((()=>ke(t,l)),[t,l]);return g.createElement(Ee.Provider,{value:r},g.createElement(be.Provider,{value:l},g.createElement(ve.Provider,{value:c},n)))}function ye(e){return t=>{const n=pe(t);return function(t){const o=ge(Ee),r=ge(be),a=e(o,t),s=i(i({dispatch:r},t),a);return g.createElement(n,i({},s))}}}function Ce(e,t){return function(...n){return t(e.apply(this,n))}}function ke(e,t){const n={};for(const o in e){const r=e[o];"function"==typeof r?n[o]=Ce(r,t):"object"==typeof r&&(n[o]=ke(r,t))}return n}function Ne(e){try{const t=JSON.stringify(e);localStorage.setItem("yacd.haishan.me",t)}catch(t){}}async function Le(e){const{url:t,init:n}=re(e);return await fetch(t+"/configs",n)}const Pe=new TextDecoder("utf-8"),Ie={labels:Array(150),up:Array(150),down:Array(150),size:150,subscribers:[],appendData(e){this.up.push(e.up),this.down.push(e.down);const t=new Date,n=""+t.getMinutes()+t.getSeconds();this.labels.push(n),this.up.length>this.size&&this.up.shift(),this.down.length>this.size&&this.down.shift(),this.labels.length>this.size&&this.labels.shift(),this.subscribers.forEach((t=>t(e)))},subscribe(e){return this.subscribers.push(e),()=>{const t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}}};let Re,Ae=!1,Se="";function Te(e){Ie.appendData(JSON.parse(e))}function Oe(e){return e.read().then((({done:t,value:n})=>{const o=Pe.decode(n,{stream:!t});Se+=o;const r=Se.split("\n"),a=r[r.length-1];for(let e=0;e<r.length-1;e++)Te(r[e]);return t?(Te(a),Se="",console.log("GET /traffic streaming done"),void(Ae=!1)):(Se=a,Oe(e))}))}function Ue(e){if(Ae||1===Re)return Ie;Re=1;const t=ae(e,"/traffic"),n=new WebSocket(t);return n.addEventListener("error",(function(e){Re=3})),n.addEventListener("close",(function(t){Re=3,function(e){if(Ae)return Ie;Ae=!0;const{url:t,init:n}=re(e);fetch(t+"/traffic",n).then((e=>{if(e.ok){Oe(e.body.getReader())}else Ae=!1}),(e=>{console.log("fetch /traffic error",e),Ae=!1}))}(e)})),n.addEventListener("message",(function(e){Te(e.data)})),Ie}function je(e){return t=>{t(`openModal:${e}`,(t=>{t.modals[e]=!0}))}}const Be=e=>e.configs.configs,ze=e=>e.configs.configs["log-level"];function Me(e){return async(t,n)=>{let o;try{o=await Le(e)}catch(a){return void t(je("apiConfig"))}if(!o.ok)return console.log("Error fetch configs",o.statusText),void t(je("apiConfig"));const r=await o.json();t("store/configs#fetchConfigs",(e=>{e.configs.configs=r}));n().configs.haveFetchedConfig?Ue(e):t((e=>{e("store/configs#markHaveFetchedConfig",(e=>{e.configs.haveFetchedConfig=!0}))}))}}function De(e,t){return async n=>{(async function(e,t){const{url:n,init:o}=re(e),r=JSON.stringify(function(e){return"socks-port"in e&&(e["socket-port"]=e["socks-port"]),e}(t));return await fetch(n+"/configs",u(i({},o),{body:r,method:"PATCH"}))})(e,t).then((e=>{!1===e.ok&&console.log("Error update configs",e.statusText)}),(e=>{throw console.log("Error update configs",e),e})).then((()=>{n(Me(e))})),n("storeConfigsOptimisticUpdateConfigs",(e=>{e.configs.configs=i(i({},e.configs.configs),t)}))}}const $e=e=>{const t=e.app.selectedClashAPIConfigIndex;return e.app.clashAPIConfigs[t]},Fe=e=>e.app.selectedClashAPIConfigIndex,We=e=>e.app.clashAPIConfigs,qe=e=>e.app.theme,Ve=e=>e.app.selectedChartStyleIndex,Je=e=>e.app.latencyTestUrl,Ge=e=>e.app.collapsibleIsOpen,He=e=>e.app.proxySortBy,Ke=e=>e.app.hideUnavailableProxies,Qe=e=>e.app.autoCloseOldConns,Ye=function(e,t){let n;return(...o)=>{n&&clearTimeout(n),n=setTimeout((()=>{e(...o)}),t)}}(Ne,600);function Ze(e,{baseURL:t,secret:n}){const o=We(e());for(let r=0;r<o.length;r++){const e=o[r];if(e.baseURL===t&&e.secret===n)return r}}const Xe=document.querySelector("html"),et=document.querySelector('meta[name="theme-color"]');function tt(e="dark"){"dark"===e?(Xe.setAttribute("data-theme","dark"),et.setAttribute("content","#202020")):(Xe.setAttribute("data-theme","light"),et.setAttribute("content","#eeeeee"))}function nt(e,t){return(n,o)=>{n("appUpdateAppConfig",(n=>{n.app[e]=t})),Ne(o().app)}}const ot={selectedClashAPIConfigIndex:0,clashAPIConfigs:[{baseURL:null!=(t=null==(e=document.getElementById("app"))?void 0:e.getAttribute("data-base-url"))?t:"http://127.0.0.1:9090",secret:"",addedAt:0}],latencyTestUrl:"http://www.gstatic.com/generate_204",selectedChartStyleIndex:0,theme:"dark",collapsibleIsOpen:{},proxySortBy:"Natural",hideUnavailableProxies:!1,autoCloseOldConns:!1};var rt="_root_dn70c_1",at="_mono_dn70c_10",st="_link_dn70c_14";function lt({name:e,link:t,version:n}){return v.exports.createElement("div",{className:rt},v.exports.createElement("h2",null,e),v.exports.createElement("p",null,v.exports.createElement("span",null,"Version "),v.exports.createElement("span",{className:at},n)),v.exports.createElement("p",null,v.exports.createElement("a",{className:st,href:t,target:"_blank",rel:"noopener noreferrer"},v.exports.createElement(_,{size:20}),v.exports.createElement("span",null,"Source"))))}const ct=ye((e=>({apiConfig:$e(e)})))((function(e){const{data:t}=b(["/version",e.apiConfig],(()=>async function(e,t){let n={};try{const{url:o,init:r}=re(t),a=await fetch(o+e,r);a.ok&&(n=await a.json())}catch(o){console.log(`failed to fetch ${e}`,o)}return n}("/version",e.apiConfig)));return v.exports.createElement(v.exports.Fragment,null,v.exports.createElement(ie,{title:"About"}),t&&t.version?v.exports.createElement(lt,{name:"Clash",version:t.version,link:"https://github.com/Dreamacro/clash"}):null,v.exports.createElement(lt,{name:"Yacd",version:"0.3.2",link:"https://github.com/haishanh/yacd"}))}));var it="_loading_74j3j_1",ut="_spinner_74j3j_9";const pt=({height:e})=>{const t=e?{height:e}:{};return g.createElement("div",{className:it,style:t},g.createElement("div",{className:ut}))};const dt=ye((e=>({apiConfig:$e(e),apiConfigs:We(e)})))((function({apiConfig:e,apiConfigs:t}){return v.exports.useEffect((()=>{let n="yacd";if(t.length>1)try{n=`${new URL(e.baseURL).host} - yacd`}catch(o){}document.title=n})),v.exports.createElement(v.exports.Fragment,null)})),mt=new y({queryCache:new w,defaultOptions:{queries:{suspense:!0}}}),ht=e=>e.logs.logs,ft=e=>e.logs.tail,gt=e=>e.logs.searchText,xt=C(ht,ft,gt,((e,t,n)=>{const o=[];for(let r=t;r>=0;r--)o.push(e[r]);if(300===e.length)for(let r=299;r>t;r--)o.push(e[r]);return""===n?o:o.filter((e=>e.payload.toLowerCase().indexOf(n)>=0))}));function Et(e){return t=>{t("logsUpdateSearchText",(t=>{t.logs.searchText=e.toLowerCase()}))}}function bt(e){return(t,n)=>{const o=n(),r=ht(o),a=ft(o),s=a>=299?0:a+1;r[s]=e,t("logsAppendLog",(e=>{e.logs.tail=s}))}}const vt=[];let _t;function wt(e,t){if(1===_t&&t)return yt(t);_t=1;const n=ae(e,"/connections"),o=new WebSocket(n);return o.addEventListener("error",(()=>_t=3)),o.addEventListener("message",(e=>function(e){let t;try{t=JSON.parse(e)}catch(n){console.log("JSON.parse error",JSON.parse(e))}vt.forEach((e=>e(t)))}(e.data))),t?yt(t):void 0}function yt(e){return vt.push(e),function(){const t=vt.indexOf(e);vt.splice(t,1)}}async function Ct(e){const{url:t,init:n}=re(e);return await fetch(t+"/connections",u(i({},n),{method:"DELETE"}))}async function kt(e){const{url:t,init:n}=re(e),o=await fetch(t+"/proxies",n);return await o.json()}async function Nt(e){const{url:t,init:n}=re(e),o=await fetch(t+"/providers/proxies",n);return 404===o.status?{providers:{}}:await o.json()}async function Lt(e,t){const{url:n,init:o}=re(e),r=u(i({},o),{method:"PUT"});return await fetch(n+"/providers/proxies/"+t,r)}const Pt=()=>null,It=["Direct","Fallback","Reject","Selector","URLTest","LoadBalance","Unknown"],Rt=e=>e.proxies.proxies,At=e=>e.proxies.delay,St=e=>e.proxies.groupNames,Tt=e=>e.proxies.proxyProviders||[],Ot=e=>e.proxies.dangleProxyNames,Ut=e=>e.proxies.showModalClosePrevConns;function jt(e){return async(t,n)=>{const[o,r]=await Promise.all([kt(e),Nt(e)]),{providers:a,proxies:s}=function(e){const t=Object.keys(e),n=[],o={};for(let r=0;r<t.length;r++){const a=e[t[r]];if("default"===a.name||"Compatible"===a.vehicleType)continue;const s=a.proxies,l=[];for(let e=0;e<s.length;e++){const t=s[e];o[t.name]=t,l.push(t.name)}a.proxies=l,n.push(a)}return{providers:n,proxies:o}}(r.providers),l=i(i({},s),o.proxies),[c,u]=function(e){let t,n=[];const o=[];for(const r in e){const a=e[r];a.all&&Array.isArray(a.all)?(n.push(r),"GLOBAL"===r&&(t=a.all)):It.indexOf(a.type)<0&&o.push(r)}t&&(t.push("GLOBAL"),n=n.map((e=>[t.indexOf(e),e])).sort(((e,t)=>e[0]-t[0])).map((e=>e[1])));return[n,o]}(l),p=At(n()),d=i({},p);for(let e=0;e<u.length;e++){const t=u[e],{history:n}=l[t]||{history:[]},o=n[n.length-1];o&&"number"==typeof o.delay&&(d[t]={number:o.delay})}const m=[];for(const e of u)s[e]||m.push(e);t("store/proxies#fetchProxies",(e=>{e.proxies.proxies=l,e.proxies.groupNames=c,e.proxies.delay=d,e.proxies.proxyProviders=a,e.proxies.dangleProxyNames=m}))}}function Bt(e,t){return async n=>{try{await Lt(e,t)}catch(o){}n(jt(e))}}function zt(e,t){return async n=>{for(let r=0;r<t.length;r++)try{await Lt(e,t[r])}catch(o){}n(jt(e))}}async function Mt(e,t){try{await async function(e,t){const{url:n,init:o}=re(e),r=u(i({},o),{method:"GET"});return await fetch(n+"/providers/proxies/"+t+"/healthcheck",r)}(e,t)}catch(n){}}function Dt(e,t){return async n=>{await Mt(e,t),await n(jt(e))}}async function $t(e,t,n){const o=await async function(e){const{url:t,init:n}=re(e);return await fetch(t+"/connections",i({},n))}(e);o.ok||console.log("unable to fetch all connections",o.statusText);const r=(await o.json()).connections,a=[];for(const s of r)s.chains.indexOf(t)>-1&&s.chains.indexOf(n)<0&&a.push(s.id);await Promise.all(a.map((t=>async function(e,t){const{url:n,init:o}=re(e),r=`${n}/connections/${t}`;return await fetch(r,u(i({},o),{method:"DELETE"}))}(e,t).catch(Pt))))}async function Ft(e,t,n,o,r){try{if(!1===(await async function(e,t,n){const o={name:n},{url:r,init:a}=re(e),s=`${r}/proxies/${t}`;return await fetch(s,u(i({},a),{method:"PUT",body:JSON.stringify(o)}))}(n,o,r)).ok)throw new Error("failed to switch proxy: res.statusText")}catch(a){throw console.log(a,"failed to swith proxy"),a}e(jt(n));if(Qe(t())){qt(n,Rt(t()),{groupName:o,itemName:r})}}function Wt(){return e=>{e("closeModalClosePrevConns",(e=>{e.proxies.showModalClosePrevConns=!1}))}}function qt(e,t,n){const o=function(e,t,n){const o=[n,t];let r,a=n;for(;(r=e[a])&&r.now;)o.unshift(r.now),a=r.now;return o}(t,n.groupName,n.itemName);$t(e,n.groupName,o[0])}function Vt(e,t,n){return async(o,r)=>{Ft(o,r,e,t,n).catch(Pt),o("store/proxies#switchProxy",(e=>{const o=e.proxies.proxies;o[t]&&o[t].now&&(o[t].now=n)}))}}function Jt(e,t){return async(n,o)=>{const r=Je(o()),a=await async function(e,t,n="http://www.gstatic.com/generate_204"){const{url:o,init:r}=re(e),a=`timeout=5000&url=${n}`,s=`${o}/proxies/${encodeURIComponent(t)}/delay?${a}`;return await fetch(s,r)}(e,t,r);let s="";!1===a.ok&&(s=a.statusText);const{delay:l}=await a.json(),c=At(o()),p=u(i({},c),{[t]:{error:s,number:l}});n("requestDelayForProxyOnce",(e=>{e.proxies.delay=p}))}}function Gt(e,t){return async n=>{await n(Jt(e,t))}}function Ht(e){return async(t,n)=>{const o=Ot(n());await Promise.all(o.map((n=>t(Gt(e,n)))));const r=Tt(n());for(const a of r)await Mt(e,a.name);await t(jt(e))}}const Kt={requestDelayForProxies:function(e,t){return async(n,o)=>{const r=Ot(o()),a=t.filter((e=>r.indexOf(e)>-1)).map((t=>n(Gt(e,t))));await Promise.all(a),await n(jt(e))}},closeModalClosePrevConns:Wt,closePrevConnsAndTheModal:function(e){return async(t,n)=>{var o;const r=n(),a=null==(o=r.proxies.switchProxyCtx)?void 0:o.to;if(!a)return void t((e=>{e("closeModalClosePrevConns",(e=>{e.proxies.showModalClosePrevConns=!1}))}));const s=r.proxies.proxies;qt(e,s,a),t("closePrevConnsAndTheModal",(e=>{e.proxies.showModalClosePrevConns=!1,e.proxies.switchProxyCtx=void 0}))}}},Qt=k({key:"proxyFilterText",default:""}),Yt={app:function(){let e=function(){try{const e=localStorage.getItem("yacd.haishan.me");if(!e)return;return JSON.parse(e)}catch(e){return}}();e=i(i({},ot),e);const t=function(){const{search:e}=window.location,t={};if("string"!=typeof e||""===e)return t;const n=e.replace(/^\?/,"").split("&");for(let o=0;o<n.length;o++){const[e,r]=n[o].split("=");t[e]=encodeURIComponent(r)}return t}(),n=e.clashAPIConfigs[e.selectedClashAPIConfigIndex];if(n){const e=new URL(n.baseURL);t.hostname&&(e.hostname=t.hostname),t.port&&(e.port=t.port),n.baseURL=ee(e.href),t.secret&&(n.secret=t.secret)}return"dark"!==t.theme&&"light"!==t.theme||(e.theme=t.theme),tt(e.theme),e}(),modals:{apiConfig:!1},configs:{configs:{port:7890,"socks-port":7891,"redir-port":0,"allow-lan":!1,mode:"Rule","log-level":"uninit"},haveFetchedConfig:!1},proxies:{proxies:{},delay:{},groupNames:[],showModalClosePrevConns:!1},logs:{searchText:"",logs:[],tail:-1}},Zt={selectChartStyleIndex:function(e){return(t,n)=>{t("appSelectChartStyleIndex",(t=>{t.app.selectedChartStyleIndex=Number(e)})),Ne(n().app)}},updateAppConfig:nt,app:{updateCollapsibleIsOpen:function(e,t,n){return(o,r)=>{o("updateCollapsibleIsOpen",(o=>{o.app.collapsibleIsOpen[`${e}:${t}`]=n})),Ye(r().app)}},updateAppConfig:nt,removeClashAPIConfig:function({baseURL:e,secret:t}){return async(n,o)=>{const r=Ze(o,{baseURL:e,secret:t});n("removeClashAPIConfig",(e=>{e.app.clashAPIConfigs.splice(r,1)})),Ne(o().app)}},selectClashAPIConfig:function({baseURL:e,secret:t}){return async(n,o)=>{const r=Ze(o,{baseURL:e,secret:t});Fe(o())!==r&&n("selectClashAPIConfig",(e=>{e.app.selectedClashAPIConfigIndex=r})),Ne(o().app);try{window.location.reload()}catch(a){}}}},proxies:Kt},{useState:Xt,useCallback:en}=g;var tn={ul:"_ul_1d6f2_1",li:"_li_1d6f2_10",close:"_close_1d6f2_28",eye:"_eye_1d6f2_36",hasSecret:"_hasSecret_1d6f2_45",url:"_url_1d6f2_50",secret:"_secret_1d6f2_54",btn:"_btn_1d6f2_72"};const nn=ye((e=>({apiConfigs:We(e),selectedClashAPIConfigIndex:Fe(e)})))((function({apiConfigs:e,selectedClashAPIConfigIndex:t}){const{app:{removeClashAPIConfig:n,selectClashAPIConfig:o}}=_e(),r=v.exports.useCallback((e=>{n(e)}),[n]),a=v.exports.useCallback((e=>{o(e)}),[o]);return v.exports.createElement(v.exports.Fragment,null,v.exports.createElement("ul",{className:tn.ul},e.map(((e,n)=>v.exports.createElement("li",{className:N(tn.li,{[tn.hasSecret]:e.secret,[tn.isSelected]:n===t}),key:e.baseURL+e.secret},v.exports.createElement(on,{disableRemove:n===t,baseURL:e.baseURL,secret:e.secret,onRemove:r,onSelect:a}))))))}));function on({baseURL:e,secret:t,disableRemove:n,onRemove:o,onSelect:r}){const[a,s]=function(e=!1){const[t,n]=Xt(e);return[t,en((()=>n((e=>!e))),[])]}(),l=a?P:I,c=v.exports.useCallback((e=>{e.stopPropagation()}),[]);return v.exports.createElement(v.exports.Fragment,null,v.exports.createElement(rn,{disabled:n,onClick:()=>o({baseURL:e,secret:t}),className:tn.close},v.exports.createElement(L,{size:20})),v.exports.createElement("span",{className:tn.url,tabIndex:0,role:"button",onClick:()=>r({baseURL:e,secret:t}),onKeyUp:c},e),v.exports.createElement("span",null),t?v.exports.createElement(v.exports.Fragment,null,v.exports.createElement("span",{className:tn.secret},a?t:"***"),v.exports.createElement(rn,{onClick:s,className:tn.eye},v.exports.createElement(l,{size:20}))):null)}function rn({children:e,onClick:t,className:n,disabled:o}){return v.exports.createElement("button",{disabled:o,className:N(n,tn.btn),onClick:t},e)}var an="_root_zwtea_1",sn="_header_zwtea_5",ln="_icon_zwtea_10",cn="_body_zwtea_20",un="_hostnamePort_zwtea_24",pn="_error_zwtea_36",dn="_footer_zwtea_42";var mn="_btn_1h2nv_1",hn="_minimal_1h2nv_34",fn="_btnStart_1h2nv_51",gn="_loadingContainer_1h2nv_58";var xn="_sectionNameType_1w5id_1",En="_loadingDot_1w5id_65";function bn({name:e,type:t}){return g.createElement("h2",{className:xn},g.createElement("span",null,e),g.createElement("span",null,t))}function vn(){return g.createElement("span",{className:En})}const{forwardRef:_n,useCallback:wn}=R;function yn({children:e,label:t,text:n,start:o}){return v.exports.createElement(v.exports.Fragment,null,o?v.exports.createElement("span",{className:fn},"function"==typeof o?o():o):null,e||t||n)}var Cn=_n((function(e,t){const n=e,{onClick:o,disabled:r=!1,isLoading:a,kind:s="primary",className:l,children:c,label:u,text:d,start:m}=n,h=p(n,["onClick","disabled","isLoading","kind","className","children","label","text","start"]),f={children:c,label:u,text:d,start:m},g=wn((e=>{a||o&&o(e)}),[a,o]),x=N(mn,{[hn]:"minimal"===s},l);return v.exports.createElement("button",i({className:x,ref:t,onClick:g,disabled:r},h),a?v.exports.createElement(v.exports.Fragment,null,v.exports.createElement("span",{style:{display:"inline-flex",opacity:0}},v.exports.createElement(yn,i({},f))),v.exports.createElement("span",{className:gn},v.exports.createElement(vn,null))):v.exports.createElement(yn,i({},f)))}));var kn="_root_1or8t_1",Nn="_floatAbove_1or8t_32";const{useCallback:Ln}=R;function Pn(e){var t=e,{id:n,label:o,value:r,onChange:a}=t,s=p(t,["id","label","value","onChange"]);const l=Ln((e=>a(e)),[a]);return v.exports.createElement("div",{className:kn},v.exports.createElement("input",i({id:n,value:r,onChange:l},s)),v.exports.createElement("label",{htmlFor:n,className:Nn},o))}var In="_path_r8pm3_1";function Rn({width:e=320,height:t=320,animate:n=!1,c0:o="currentColor",stroke:r="#eee",eye:a="#eee",mouth:s="#eee"}){const l=N({[In]:n});return v.exports.createElement("svg",{width:e,height:t,viewBox:"0 0 320 320",xmlns:"http://www.w3.org/2000/svg"},v.exports.createElement("g",{fill:"none",fillRule:"evenodd"},v.exports.createElement("path",{d:"M71.689 53.055c9.23-1.487 25.684 27.263 41.411 56.663 18.572-8.017 71.708-7.717 93.775 0 4.714-15.612 31.96-57.405 41.626-56.663 3.992.088 13.07 31.705 23.309 94.96 2.743 16.949 7.537 47.492 14.38 91.63-42.339 17.834-84.37 26.751-126.095 26.751-41.724 0-83.756-8.917-126.095-26.751C52.973 116.244 65.536 54.047 71.689 53.055z",stroke:r,strokeWidth:"4",strokeLinecap:"round",fill:o,className:l}),v.exports.createElement("circle",{fill:a,cx:"216.5",cy:"181.5",r:"14.5"}),v.exports.createElement("circle",{fill:a,cx:"104.5",cy:"181.5",r:"14.5"}),v.exports.createElement("g",{stroke:s,strokeLinecap:"round",strokeWidth:"4"},v.exports.createElement("path",{d:"M175.568 218.694c-2.494 1.582-5.534 2.207-8.563 1.508-3.029-.7-5.487-2.594-7.035-5.11M143.981 218.694c2.494 1.582 5.534 2.207 8.563 1.508 3.03-.7 5.488-2.594 7.036-5.11"}))))}const{useState:An,useRef:Sn,useCallback:Tn}=R;var On=ye((e=>({apiConfig:$e(e)})))((function({dispatch:e}){const[t,n]=An(""),[o,r]=An(""),[a,s]=An(""),l=Sn(!1),c=Sn(null),i=Tn((e=>{l.current=!0,s("");const t=e.target,{name:o}=t,a=t.value;switch(o){case"baseURL":n(a);break;case"secret":r(a);break;default:throw new Error(`unknown input name ${o}`)}}),[]),u=Tn((()=>{(async function(e){try{new URL(e.baseURL)}catch(t){if(e.baseURL){const t=e.baseURL.substring(0,7);if("http://"!==t&&"https:/"!==t)return[1,"Must starts with http:// or https://"]}return[1,"Invalid URL"]}try{const t=await Le(e);return t.status>399?[1,t.statusText]:[0]}catch(t){return[1,"Failed to connect"]}})({baseURL:t,secret:o}).then((n=>{0!==n[0]?s(n[1]):e(function({baseURL:e,secret:t}){return async(n,o)=>{if(Ze(o,{baseURL:e,secret:t}))return;const r={baseURL:e,secret:t,addedAt:Date.now()};n("addClashAPIConfig",(e=>{e.app.clashAPIConfigs.push(r)})),Ne(o().app)}}({baseURL:t,secret:o}))}))}),[t,o,e]),p=Tn((e=>{e.target instanceof Element&&(!e.target.tagName||"INPUT"!==e.target.tagName.toUpperCase())||"Enter"===e.key&&u()}),[u]);return v.exports.createElement("div",{className:an,ref:c,onKeyDown:p},v.exports.createElement("div",{className:sn},v.exports.createElement("div",{className:ln},v.exports.createElement(Rn,{width:160,height:160,stroke:"var(--stroke)"}))),v.exports.createElement("div",{className:cn},v.exports.createElement("div",{className:un},v.exports.createElement(Pn,{id:"baseURL",name:"baseURL",label:"API Base URL",type:"text",placeholder:"http://127.0.0.1:9090",value:t,onChange:i}),v.exports.createElement(Pn,{id:"secret",name:"secret",label:"Secret(optional)",value:o,type:"text",onChange:i}))),v.exports.createElement("div",{className:pn},a||null),v.exports.createElement("div",{className:dn},v.exports.createElement(Cn,{label:"Add",onClick:u})),v.exports.createElement("div",{style:{height:20}}),v.exports.createElement(nn,null))}));const Un=function(e){let t={};const n={},o={};function r(r="default"){return n[r]=e(r).then((e=>{delete n[r],t[r]=e})).catch((e=>{o[r]=e})),n[r]}return{preload:function(e="default"){void 0!==t[e]||n[e]||r(e)},read:function(e="default"){if(void 0!==t[e])return t[e];throw o[e]?o[e]:n[e]?n[e]:r(e)},clear:function(e){e?delete t[e]:t={}}}}((()=>Z((()=>import("./index.c96d1d83.js")),["./assets/index.c96d1d83.js","./assets/vendor.9b251249.js"])));var jn="_iconWrapper_5pz1j_1",Bn="_themeSwitchContainer_5pz1j_23";function zn(){const e=Un.read().motion;return v.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},v.exports.createElement(e.path,{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",initial:{rotate:-30},animate:{rotate:0},transition:{duration:.7}}))}function Mn(){const e=Un.read().motion;return v.exports.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},v.exports.createElement("circle",{cx:"12",cy:"12",r:"5"}),v.exports.createElement(e.g,{initial:{scale:.8},animate:{scale:1},transition:{duration:.7}},v.exports.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),v.exports.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),v.exports.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),v.exports.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),v.exports.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),v.exports.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),v.exports.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),v.exports.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})))}const Dn=ye((e=>({theme:qe(e)})))((function({theme:e,dispatch:t}){const{t:n}=A(),o=v.exports.useCallback((()=>{t(((e,t)=>{const n="light"===qe(t())?"dark":"light";tt(n),e("storeSwitchTheme",(e=>{e.app.theme=n})),Ne(t().app)}))}),[t]);return v.exports.createElement(S,{label:n("theme"),"aria-label":"switch to "+("light"===e?"dark":"light")+" theme"},v.exports.createElement("button",{className:N(jn,Bn),onClick:o},"light"===e?v.exports.createElement(zn,null):v.exports.createElement(Mn,null)))})),$n={0:{message:"Browser not supported!",detail:'This browser does not support "fetch", please choose another one.'},default:{message:"Oops, something went wrong!"}};var Fn="_content_b98hm_1",Wn="_container_b98hm_16",qn="_overlay_b98hm_22",Vn="_fixed_b98hm_26";var Jn={overlay:"_overlay_85t19_1",content:"_content_85t19_11"};var Gn=v.exports.memo((function(e){var t=e,{isOpen:n,onRequestClose:o,className:r,overlayClassName:a,children:s}=t,l=p(t,["isOpen","onRequestClose","className","overlayClassName","children"]);const c=N(r,Jn.content),u=N(a,Jn.overlay);return v.exports.createElement(T,i({isOpen:n,onRequestClose:o,className:c,overlayClassName:u},l),s)}));const{useCallback:Hn,useEffect:Kn}=R;var Qn=ye((e=>({modals:e.modals,apiConfig:$e(e)})))((function({dispatch:e,apiConfig:t,modals:n}){if(!window.fetch){const{detail:e}=$n[0],t=new Error(e);throw t.code=0,t}const o=Hn((()=>{var t;e((t="apiConfig",e=>{e(`closeModal:${t}`,(e=>{e.modals[t]=!1}))}))}),[e]);return Kn((()=>{e(Me(t))}),[e,t]),v.exports.createElement(Gn,{isOpen:n.apiConfig,className:Fn,overlayClassName:qn,shouldCloseOnOverlayClick:!1,shouldCloseOnEsc:!1,onRequestClose:o},v.exports.createElement("div",{className:Wn},v.exports.createElement(On,null)),v.exports.createElement("div",{className:Vn},v.exports.createElement(Dn,null)))}));var Yn="_root_4m2cd_1",Zn="_yacd_4m2cd_14",Xn="_link_4m2cd_23";function eo({width:e=24,height:t=24}={}){return g.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e,height:t,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},g.createElement("path",{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}))}function to({message:e,detail:t}){return g.createElement("div",{className:Yn},g.createElement("div",{className:Zn},g.createElement(Rn,{width:150,height:150})),e?g.createElement("h1",null,e):null,t?g.createElement("p",null,t):null,g.createElement("p",null,g.createElement("a",{className:Xn,href:"https://github.com/haishanh/yacd/issues"},g.createElement(eo,{width:16,height:16}),"haishanh/yacd")))}class no extends v.exports.Component{constructor(){super(...arguments),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){if(this.state.error){const{message:e,detail:t}=function(e){const{code:t}=e;return"number"==typeof t?$n[t]:$n.default}(this.state.error);return v.exports.createElement(to,{message:e,detail:t})}return this.props.children}}var oo={root:"_root_ecp08_1"};const ro=["B","KB","MB","GB","TB","PB","EB","ZB","YB"];function ao(e){if(e<1e3)return e+" B";const t=Math.min(Math.floor(Math.log10(e)/3),ro.length-1);return(e=Number((e/Math.pow(1e3,t)).toPrecision(3)))+" "+ro[t]}const so=O.exports.unstable_createResource((()=>Z((()=>import("./Chart.min.17a0c5b8.js").then((function(e){return e.C}))),["./assets/Chart.min.17a0c5b8.js","./assets/vendor.9b251249.js"]).then((e=>e.default)))),lo={borderWidth:1,lineTension:0,pointRadius:0},co={responsive:!0,maintainAspectRatio:!0,title:{display:!1},legend:{display:!0,position:"top",labels:{fontColor:"#ccc",boxWidth:20}},tooltips:{enabled:!1,mode:"index",intersect:!1,animationDuration:100},hover:{mode:"nearest",intersect:!0},scales:{xAxes:[{display:!1,gridLines:{display:!1}}],yAxes:[{display:!0,gridLines:{display:!0,color:"#555",borderDash:[3,6],drawBorder:!1},ticks:{callback:e=>ao(e)+"/s "}}]}},io=[{down:{backgroundColor:"rgba(176, 209, 132, 0.8)",borderColor:"rgb(176, 209, 132)"},up:{backgroundColor:"rgba(181, 220, 231, 0.8)",borderColor:"rgb(181, 220, 231)"}},{up:{backgroundColor:"rgb(98, 190, 100)",borderColor:"rgb(78,146,79)"},down:{backgroundColor:"rgb(160, 230, 66)",borderColor:"rgb(110, 156, 44)"}},{up:{backgroundColor:"rgba(94, 175, 223, 0.3)",borderColor:"rgb(94, 175, 223)"},down:{backgroundColor:"rgba(139, 227, 195, 0.3)",borderColor:"rgb(139, 227, 195)"}},{up:{backgroundColor:"rgba(242, 174, 62, 0.3)",borderColor:"rgb(242, 174, 62)"},down:{backgroundColor:"rgba(69, 154, 248, 0.3)",borderColor:"rgb(69, 154, 248)"}}],{useEffect:uo}=g,po=co;function mo(e,t,n,o,r={}){uo((()=>{const a=document.getElementById(t).getContext("2d"),s=new e(a,{type:"line",data:n,options:i(i({},po),r)}),l=o&&o.subscribe((()=>s.update()));return()=>{l&&l(),s.destroy()}}),[e,t,n,o,r])}const{useMemo:ho}=R,fo={position:"relative",maxWidth:1e3};var go=ye((e=>({apiConfig:$e(e),selectedChartStyleIndex:Ve(e)})))((function({apiConfig:e,selectedChartStyleIndex:t}){const n=so.read(),o=Ue(e),{t:r}=A(),a=ho((()=>({labels:o.labels,datasets:[u(i(i({},lo),io[t].up),{label:r("Up"),data:o.up}),u(i(i({},lo),io[t].down),{label:r("Down"),data:o.down})]})),[o,t,r]);return mo(n,"trafficChart",a,o),v.exports.createElement("div",{style:fo},v.exports.createElement("canvas",{id:"trafficChart"}))}));var xo="_TrafficNow_1wdp6_1",Eo="_sec_1wdp6_7";const{useState:bo,useEffect:vo,useCallback:_o}=R;var wo=ye((e=>({apiConfig:$e(e)})))((function({apiConfig:e}){const{t:t}=A(),{upStr:n,downStr:o}=function(e){const[t,n]=bo({upStr:"0 B/s",downStr:"0 B/s"});return vo((()=>Ue(e).subscribe((e=>n({upStr:ao(e.up)+"/s",downStr:ao(e.down)+"/s"})))),[e]),t}(e),{upTotal:r,dlTotal:a,connNumber:s}=function(e){const[t,n]=bo({upTotal:"0 B",dlTotal:"0 B",connNumber:0}),o=_o((({downloadTotal:e,uploadTotal:t,connections:o})=>{n({upTotal:ao(t),dlTotal:ao(e),connNumber:o.length})}),[n]);return vo((()=>wt(e,o)),[e,o]),t}(e);return v.exports.createElement("div",{className:xo},v.exports.createElement("div",{className:Eo},v.exports.createElement("div",null,t("Upload")),v.exports.createElement("div",null,n)),v.exports.createElement("div",{className:Eo},v.exports.createElement("div",null,t("Download")),v.exports.createElement("div",null,o)),v.exports.createElement("div",{className:Eo},v.exports.createElement("div",null,t("Upload Total")),v.exports.createElement("div",null,r)),v.exports.createElement("div",{className:Eo},v.exports.createElement("div",null,t("Download Total")),v.exports.createElement("div",null,a)),v.exports.createElement("div",{className:Eo},v.exports.createElement("div",null,t("Active Connections")),v.exports.createElement("div",null,s)))}));function yo(){const{t:e}=A();return g.createElement("div",null,g.createElement(ie,{title:e("Overview")}),g.createElement("div",{className:oo.root},g.createElement("div",null,g.createElement(wo,null)),g.createElement("div",{className:oo.chart},g.createElement(v.exports.Suspense,{fallback:g.createElement(pt,{height:"200px"})},g.createElement(go,null)))))}var Co="_lo_pmly2_1";function ko(){return g.createElement("div",{className:Co},g.createElement(Rn,{width:280,height:280,animate:!0,c0:"transparent",c1:"#646464"}))}var No="_app_1q2jw_1",Lo="_content_1q2jw_17";var Po="_root_6b66n_1",Io="_logoPlaceholder_6b66n_7",Ro="_rows_6b66n_17",Ao="_row_6b66n_17",So="_rowActive_6b66n_54",To="_label_6b66n_64",Oo="_footer_6b66n_80",Uo="_iconWrapper_6b66n_92";const jo={activity:j,globe:B,command:z,file:M,settings:D,link:$},Bo=v.exports.memo((function({isActive:e,to:t,iconId:n,labelText:o}){const r=jo[n],a=N(Ao,e?So:null);return v.exports.createElement(U,{to:t,className:a},v.exports.createElement(r,null),v.exports.createElement("div",{className:To},o))})),zo=[{to:"/",iconId:"activity",labelText:"Overview"},{to:"/proxies",iconId:"globe",labelText:"Proxies"},{to:"/rules",iconId:"command",labelText:"Rules"},{to:"/connections",iconId:"link",labelText:"Conns"},{to:"/configs",iconId:"settings",labelText:"Config"},{to:"/logs",iconId:"file",labelText:"Logs"}];function Mo(){const{t:e}=A(),t=F();return v.exports.createElement("div",{className:Po},v.exports.createElement("div",{className:Io}),v.exports.createElement("div",{className:Ro},zo.map((({to:n,iconId:o,labelText:r})=>v.exports.createElement(Bo,{key:n,to:n,isActive:t.pathname===n,iconId:o,labelText:e(r)})))),v.exports.createElement("div",{className:Oo},v.exports.createElement(Dn,null),v.exports.createElement(S,{label:e("about")},v.exports.createElement(U,{to:"/about",className:Uo},v.exports.createElement(W,{size:20})))))}var Do={input:"_input_4ejw0_1"};const $o=q.default?q.default:q;var Fo=ye((e=>({theme:qe(e)})))((function({checked:e=!1,onChange:t,theme:n,name:o}){const r="dark"===n?"#393939":"#e9e9e9";return g.createElement($o,{onChange:t,checked:e,uncheckedIcon:!1,checkedIcon:!1,offColor:r,onColor:"#047aff",offHandleColor:"#fff",onHandleColor:"#fff",handleDiameter:24,height:28,width:44,className:"rs",name:o})}));var Wo="_ToggleSwitch_10mtp_1",qo="_slider_10mtp_28";g.memo((function({options:e,value:t,name:n,onChange:o}){const r=v.exports.useMemo((()=>e.map((e=>e.value)).indexOf(t)),[e,t]),a=v.exports.useCallback((t=>{const n=Math.floor(100/e.length);return t===e.length-1?100-e.length*n+n:t>-1?n:void 0}),[e]),s=v.exports.useMemo((()=>({width:a(r)+"%",left:r*a(0)+"%"})),[r,a]);return g.createElement("div",{className:Wo},g.createElement("div",{className:qo,style:s}),e.map(((e,r)=>{const s=`${n}-${e.label}`,l=0===r?"":"border-left";return g.createElement("label",{htmlFor:s,key:s,className:l,style:{width:a(r)+"%"}},g.createElement("input",{id:s,name:n,type:"radio",value:e.value,checked:t===e.value,onChange:o}),g.createElement("div",null,e.label))})))}));const Vo=v.exports.lazy((()=>Z((()=>import("./Connections.178701f2.js")),["./assets/Connections.178701f2.js","./assets/Connections.8531d9a7.css","./assets/vendor.9b251249.js","./assets/useRemainingViewPortHeight.06dbbdd2.js","./assets/Fab.d0f46426.js","./assets/Fab.8bae649c.css"]))),Jo=v.exports.lazy((()=>Z((()=>import("./Config.6e167337.js")),["./assets/Config.6e167337.js","./assets/Config.c65424c9.css","./assets/vendor.9b251249.js","./assets/logs.c6a57077.js","./assets/Select.0aa63001.js","./assets/Select.34bef176.css"]))),Go=v.exports.lazy((()=>Z((()=>import("./Logs.76ad5e42.js")),["./assets/Logs.76ad5e42.js","./assets/Logs.0df23f28.css","./assets/vendor.9b251249.js","./assets/index.esm.d9c12dbd.js","./assets/logs.c6a57077.js","./assets/debounce.cc85a806.js","./assets/useRemainingViewPortHeight.06dbbdd2.js"]))),Ho=v.exports.lazy((()=>Z((()=>import("./Proxies.3f81276c.js")),["./assets/Proxies.3f81276c.js","./assets/Proxies.f906f5da.css","./assets/vendor.9b251249.js","./assets/Fab.d0f46426.js","./assets/Fab.8bae649c.css","./assets/TextFitler.265b5a0b.js","./assets/TextFitler.16f19920.css","./assets/debounce.cc85a806.js","./assets/Select.0aa63001.js","./assets/Select.34bef176.css"]))),Ko=v.exports.lazy((()=>Z((()=>import("./Rules.7b8a9f67.js")),["./assets/Rules.7b8a9f67.js","./assets/Rules.6cf13f46.css","./assets/vendor.9b251249.js","./assets/index.esm.d9c12dbd.js","./assets/TextFitler.265b5a0b.js","./assets/TextFitler.16f19920.css","./assets/debounce.cc85a806.js","./assets/Fab.d0f46426.js","./assets/Fab.8bae649c.css","./assets/useRemainingViewPortHeight.06dbbdd2.js"]))),Qo=[{path:"/",element:g.createElement(yo,null)},{path:"/connections",element:g.createElement(Vo,null)},{path:"/configs",element:g.createElement(Jo,null)},{path:"/logs",element:g.createElement(Go,null)},{path:"/proxies",element:g.createElement(Ho,null)},{path:"/rules",element:g.createElement(Ko,null)},{path:"/about",element:g.createElement(ct,null)},!1].filter(Boolean);function Yo(){return H(Qo)}function Zo(){return g.createElement(g.Fragment,null,g.createElement(Qn,null),g.createElement(Mo,null),g.createElement("div",{className:Lo},g.createElement(v.exports.Suspense,{fallback:g.createElement(ko,null)},g.createElement(Yo,null))))}function Xo(){return H([{path:"/backend",element:g.createElement(On,null)},{path:"*",element:g.createElement(Zo,null)}])}const er=()=>g.createElement(no,null,g.createElement(V,null,g.createElement(we,{initialState:Yt,actions:Zt},g.createElement(J,{client:mt},g.createElement(G,null,g.createElement("div",{className:No},g.createElement(dt,null),g.createElement(v.exports.Suspense,{fallback:g.createElement(pt,null)},g.createElement(Xo,null)))))))),tr=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function nr(e,t){navigator.serviceWorker.register(e).then((e=>{e.onupdatefound=()=>{const n=e.installing;null!=n&&(n.onstatechange=()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((e=>{console.error("Error during service worker registration:",e)}))}const or=document.getElementById("app");T.setAppElement(or),K.render(g.createElement(g.StrictMode,null,g.createElement(er,null)),or),function(e){if("serviceWorker"in navigator){if(new URL("./",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(()=>{const t=".//sw.js";tr?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((n=>{const o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((e=>{e.unregister().then((()=>{window.location.reload()}))})):nr(e,t)})).catch((()=>{console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((()=>{console.log("This web app is being served cache-first by a service worker")}))):nr(t,e)}))}}(),console.log("Checkout the repo: https://github.com/haishanh/yacd"),console.log("Version:","0.3.2");export{ze as A,Cn as B,ie as C,bn as D,Qt as E,Rt as F,At as G,Vt as H,Ge as I,He as J,Ke as K,Bt as L,zt as M,It as N,Ht as O,Un as P,Dt as Q,Qe as R,Rn as S,jt as T,St as U,Tt as V,Ut as W,Ct as a,so as b,ye as c,lo as d,io as e,wt as f,$e as g,Me as h,De as i,_e as j,Fo as k,Be as l,Jn as m,Ve as n,je as o,ao as p,Je as q,se as r,Do as s,re as t,mo as u,te as v,gt as w,Et as x,bt as y,xt as z};
