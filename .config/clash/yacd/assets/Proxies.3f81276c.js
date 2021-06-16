import{r as e,j as t,g as n,C as r,K as o,Z as s,k as a,R as i,N as c,M as l,T as p}from"./vendor.9b251249.js";import{B as u,D as d,E as m,N as h,c as f,F as _,G as v,j as y,H as x,I as b,J as E,K as g,L as w,M as C,O as k,P as O,Q as N,g as M,C as S,k as A,R as T,m as P,T as q,U as j,V as D,W as R}from"./index.a1c9209e.js";import{F as L,p as z,A as B,I as F,f as U}from"./Fab.d0f46426.js";import{R as W,T as I}from"./TextFitler.265b5a0b.js";import{S as H}from"./Select.0aa63001.js";import"./debounce.cc85a806.js";var G="_FlexCenter_1380a_1";function K({children:t}){return e.exports.createElement("div",{className:G},t)}const{useRef:V,useEffect:Y}=t;function $({onClickPrimaryButton:t,onClickSecondaryButton:n}){const r=V(null),o=V(null);Y((()=>{r.current.focus()}),[]);return e.exports.createElement("div",{onKeyDown:e=>{39===e.keyCode?o.current.focus():37===e.keyCode&&r.current.focus()}},e.exports.createElement("h2",null,"Close Connections?"),e.exports.createElement("p",null,'Click "Yes" to close those connections that are still using the old selected proxy in this group'),e.exports.createElement("div",{style:{height:30}}),e.exports.createElement(K,null,e.exports.createElement(u,{onClick:t,ref:r},"Yes"),e.exports.createElement("div",{style:{width:20}}),e.exports.createElement(u,{onClick:n,ref:o},"No")))}var J="_header_1y9js_1",Q="_arrow_1y9js_8",Z="_isOpen_1y9js_13",X="_btn_1y9js_20",ee="_qty_1y9js_25";function te({name:t,type:o,toggle:s,isOpen:a,qty:i}){const c=e.exports.useCallback((e=>{e.preventDefault(),"Enter"!==e.key&&" "!==e.key||s()}),[s]);return e.exports.createElement("div",{className:J,onClick:s,style:{cursor:"pointer"},tabIndex:0,onKeyDown:c,role:"button"},e.exports.createElement("div",null,e.exports.createElement(d,{name:t,type:o})),"number"==typeof i?e.exports.createElement("span",{className:ee},i):null,e.exports.createElement(u,{kind:"minimal",onClick:s,className:X,title:"Toggle collapsible section"},e.exports.createElement("span",{className:n(Q,{[Z]:a})},e.exports.createElement(r,{size:20}))))}const{useMemo:ne}=t;const re=(e,t)=>{if(e&&"number"==typeof e.number&&e.number>0)return e.number;const n=t&&t.type;return n&&h.indexOf(n)>-1?-1:999999},oe={Natural:e=>e,LatencyAsc:(e,t,n)=>e.sort(((e,r)=>re(t[e],n&&n[e])-re(t[r],n&&n[r]))),LatencyDesc:(e,t,n)=>e.sort(((e,r)=>{const o=re(t[e],n&&n[e]);return re(t[r],n&&n[r])-o})),NameAsc:e=>e.sort(),NameDesc:e=>e.sort(((e,t)=>e>t?-1:e<t?1:0))};function se(e,t,n,r,s){const[a]=o(m);return ne((()=>function(e,t,n,r,o,s){let a=[...e];return n&&(a=function(e,t){return e.filter((e=>{const n=t[e];return void 0===n||0!==n.number}))}(e,t)),"string"==typeof r&&""!==r&&(a=function(e,t){const n=t.toLowerCase().split(" ").map((e=>e.trim())).filter((e=>!!e));return 0===n.length?e:e.filter((e=>{let t=0;for(;t<n.length;t++){const r=n[t];if(e.toLowerCase().indexOf(r)>-1)return!0}return!1}))}(a,r)),oe[o](a,t,s)}(e,t,n,a,r,s)),[e,t,n,a,r,s])}var ae={header:"_header_1g0y5_1",zapWrapper:"_zapWrapper_1g0y5_5"};const ie=13;var ce="_proxy_sq0tg_1",le="_now_sq0tg_25",pe="_error_sq0tg_29",ue="_selectable_sq0tg_32",de="_proxyType_sq0tg_40",me="_row_sq0tg_51",he="_proxyName_sq0tg_57",fe="_proxySmall_sq0tg_68";var _e="_proxyLatency_15kyb_1";function ve({number:t,color:n}){return e.exports.createElement("span",{className:_e,style:{color:n}},e.exports.createElement("span",null,t," ms"))}const{useMemo:ye}=t,xe="#67c23a",be="#d4b75c",Ee="#e67f3c",ge="#909399";function we({number:e}={}){return 0===e?ge:e<200?xe:e<400?be:"number"==typeof e?Ee:ge}const Ce=(e,{name:t})=>{const n=_(e),r=v(e);return{proxy:n[t],latency:r[t]}},ke=f(Ce)((function({now:t,name:r,proxy:o,latency:s,isSelectable:a,onClick:i}){const c=ye((()=>we(s)),[s]),l=e.exports.useCallback((()=>{a&&i&&i(r)}),[r,i,a]),p=e.exports.useCallback((e=>{e.keyCode===ie&&l()}),[l]),u=ye((()=>n(ce,{[le]:t,[pe]:s&&s.error,[ue]:a})),[a,t,s]);return e.exports.createElement("div",{tabIndex:0,className:u,onClick:l,onKeyDown:p,role:a?"menuitem":""},e.exports.createElement("div",{className:he},r),e.exports.createElement("div",{className:me},e.exports.createElement("span",{className:de,style:{opacity:t?.6:.2}},"Shadowsocks"===(d=o.type)?"SS":d),s&&s.number?e.exports.createElement(ve,{number:s.number,color:c}):null));var d})),Oe=f(Ce)((function({now:t,name:r,proxy:o,latency:s,isSelectable:a,onClick:i}){const c=ye((()=>function(e,t){return h.indexOf(t)>-1?"linear-gradient(135deg, white 15%, #999 15% 30%, white 30% 45%, #999 45% 60%, white 60% 75%, #999 75% 90%, white 90% 100%)":we(e)}(s,o.type)),[s,o]),l=ye((()=>{let e=r;return s&&"number"==typeof s.number&&(e+=" "+s.number+" ms"),e}),[r,s]),p=e.exports.useCallback((()=>{a&&i&&i(r)}),[r,i,a]),u=ye((()=>n(fe,{[le]:t,[ue]:a})),[a,t]),d=e.exports.useCallback((e=>{e.keyCode===ie&&p()}),[p]);return e.exports.createElement("div",{title:l,className:u,style:{background:c},onClick:p,onKeyDown:d,role:a?"menuitem":""})}));var Ne="_list_10y5m_1",Me="_listSummaryView_10y5m_8";function Se({all:t,now:n,isSelectable:r,itemOnTapCallback:o}){const s=t;return e.exports.createElement("div",{className:Ne},s.map((t=>e.exports.createElement(ke,{key:t,onClick:o,isSelectable:r,name:t,now:t===n}))))}function Ae({all:t,now:n,isSelectable:r,itemOnTapCallback:o}){return e.exports.createElement("div",{className:Me},t.map((t=>e.exports.createElement(Oe,{key:t,onClick:o,isSelectable:r,name:t,now:t===n}))))}const{createElement:Te,useCallback:Pe,useMemo:qe,useState:je}=t;function De(){return e.exports.createElement("div",{className:ae.zapWrapper},e.exports.createElement(s,{size:16}))}const Re=f(((e,{name:t,delay:n})=>{const r=_(e),o=b(e),s=E(e),a=g(e),i=r[t],{all:c,type:l,now:p}=i;return{all:c,delay:n,hideUnavailableProxies:a,proxySortBy:s,proxies:r,type:l,now:p,isOpen:o[`proxyGroup:${t}`]}}))((function({name:t,all:n,delay:r,hideUnavailableProxies:o,proxySortBy:s,proxies:a,type:i,now:c,isOpen:l,apiConfig:p,dispatch:d}){const m=se(n,r,o,s,a),h=qe((()=>"Selector"===i),[i]),{app:{updateCollapsibleIsOpen:f},proxies:{requestDelayForProxies:_}}=y(),v=Pe((()=>{f("proxyGroup",t,!l)}),[l,f,t]),b=Pe((e=>{h&&d(x(p,t,e))}),[p,d,t,h]),[E,g]=je(!1),w=Pe((async()=>{g(!0);try{await _(p,m)}catch(e){}g(!1)}),[m,p,_]);return e.exports.createElement("div",{className:ae.group},e.exports.createElement("div",{style:{display:"flex",alignItems:"center"}},e.exports.createElement(te,{name:t,type:i,toggle:v,qty:m.length,isOpen:l}),e.exports.createElement(u,{title:"Test latency",kind:"minimal",onClick:w,isLoading:E},e.exports.createElement(De,null))),Te(l?Se:Ae,{all:m,now:c,isSelectable:h,itemOnTapCallback:b}))})),{useCallback:Le,useState:ze}=t;const{useState:Be,useCallback:Fe}=t;function Ue({isLoading:t}){return t?e.exports.createElement(F,null,e.exports.createElement(s,{width:16,height:16})):e.exports.createElement(s,{width:16,height:16})}function We({dispatch:t,apiConfig:n,proxyProviders:r}){const{t:o}=a(),[s,i]=function({dispatch:e,apiConfig:t}){const[n,r]=Be(!1);return[Fe((()=>{n||(r(!0),e(k(t)).then((()=>r(!1)),(()=>r(!1))))}),[t,e,n]),n]}({dispatch:t,apiConfig:n}),[c,l]=function({dispatch:e,apiConfig:t,names:n}){const[r,o]=ze(!1);return[Le((async()=>{if(!r){o(!0);try{await e(C(t,n))}catch(s){}o(!1)}}),[t,e,n,r]),r]}({apiConfig:n,dispatch:t,names:r.map((e=>e.name))});return e.exports.createElement(L,{icon:e.exports.createElement(Ue,{isLoading:i}),onClick:s,text:o("Test Latency"),style:z},r.length>0?e.exports.createElement(B,{text:o("update_all_proxy_provider"),onClick:c},e.exports.createElement(W,{isRotating:l})):null)}var Ie=function(){if("undefined"!=typeof Map)return Map;function e(e,t){var n=-1;return e.some((function(e,r){return e[0]===t&&(n=r,!0)})),n}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(t){var n=e(this.__entries__,t),r=this.__entries__[n];return r&&r[1]},t.prototype.set=function(t,n){var r=e(this.__entries__,t);~r?this.__entries__[r][1]=n:this.__entries__.push([t,n])},t.prototype.delete=function(t){var n=this.__entries__,r=e(n,t);~r&&n.splice(r,1)},t.prototype.has=function(t){return!!~e(this.__entries__,t)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(e,t){void 0===t&&(t=null);for(var n=0,r=this.__entries__;n<r.length;n++){var o=r[n];e.call(t,o[1],o[0])}},t}()}(),He="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,Ge="undefined"!=typeof global&&global.Math===Math?global:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),Ke="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(Ge):function(e){return setTimeout((function(){return e(Date.now())}),1e3/60)};var Ve=["top","right","bottom","left","width","height","size","weight"],Ye="undefined"!=typeof MutationObserver,$e=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(e,t){var n=!1,r=!1,o=0;function s(){n&&(n=!1,e()),r&&i()}function a(){Ke(s)}function i(){var e=Date.now();if(n){if(e-o<2)return;r=!0}else n=!0,r=!1,setTimeout(a,t);o=e}return i}(this.refresh.bind(this),20)}return e.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},e.prototype.removeObserver=function(e){var t=this.observers_,n=t.indexOf(e);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},e.prototype.updateObservers_=function(){var e=this.observers_.filter((function(e){return e.gatherActive(),e.hasActive()}));return e.forEach((function(e){return e.broadcastActive()})),e.length>0},e.prototype.connect_=function(){He&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Ye?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){He&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(e){var t=e.propertyName,n=void 0===t?"":t;Ve.some((function(e){return!!~n.indexOf(e)}))&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),Je=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];Object.defineProperty(e,o,{value:t[o],enumerable:!1,writable:!1,configurable:!0})}return e},Qe=function(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView||Ge},Ze=ot(0,0,0,0);function Xe(e){return parseFloat(e)||0}function et(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce((function(t,n){return t+Xe(e["border-"+n+"-width"])}),0)}function tt(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return Ze;var r=Qe(e).getComputedStyle(e),o=function(e){for(var t={},n=0,r=["top","right","bottom","left"];n<r.length;n++){var o=r[n],s=e["padding-"+o];t[o]=Xe(s)}return t}(r),s=o.left+o.right,a=o.top+o.bottom,i=Xe(r.width),c=Xe(r.height);if("border-box"===r.boxSizing&&(Math.round(i+s)!==t&&(i-=et(r,"left","right")+s),Math.round(c+a)!==n&&(c-=et(r,"top","bottom")+a)),!function(e){return e===Qe(e).document.documentElement}(e)){var l=Math.round(i+s)-t,p=Math.round(c+a)-n;1!==Math.abs(l)&&(i-=l),1!==Math.abs(p)&&(c-=p)}return ot(o.left,o.top,i,c)}var nt="undefined"!=typeof SVGGraphicsElement?function(e){return e instanceof Qe(e).SVGGraphicsElement}:function(e){return e instanceof Qe(e).SVGElement&&"function"==typeof e.getBBox};function rt(e){return He?nt(e)?function(e){var t=e.getBBox();return ot(0,0,t.width,t.height)}(e):tt(e):Ze}function ot(e,t,n,r){return{x:e,y:t,width:n,height:r}}var st=function(){function e(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=ot(0,0,0,0),this.target=e}return e.prototype.isActive=function(){var e=rt(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},e}(),at=function(e,t){var n,r,o,s,a,i,c,l=(r=(n=t).x,o=n.y,s=n.width,a=n.height,i="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,c=Object.create(i.prototype),Je(c,{x:r,y:o,width:s,height:a,top:o,right:r+s,bottom:a+o,left:r}),c);Je(this,{target:e,contentRect:l})},it=function(){function e(e,t,n){if(this.activeObservations_=[],this.observations_=new Ie,"function"!=typeof e)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof Qe(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)||(t.set(e,new st(e)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(e instanceof Qe(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(e)&&(t.delete(e),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach((function(t){t.isActive()&&e.activeObservations_.push(t)}))},e.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,t=this.activeObservations_.map((function(e){return new at(e.target,e.broadcastRect())}));this.callback_.call(e,t,e),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),ct="undefined"!=typeof WeakMap?new WeakMap:new Ie,lt=function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=$e.getInstance(),r=new it(t,n,this);ct.set(this,r)};["observe","unobserve","disconnect"].forEach((function(e){lt.prototype[e]=function(){var t;return(t=ct.get(this))[e].apply(t,arguments)}}));var pt=void 0!==Ge.ResizeObserver?Ge.ResizeObserver:lt;const{memo:ut,useState:dt,useRef:mt,useEffect:ht}=i;const ft={initialOpen:{height:"auto",transition:{duration:0}},open:e=>({height:e,opacity:1,visibility:"visible",transition:{duration:.3}}),closed:{height:0,opacity:0,visibility:"hidden",transition:{duration:.3}}},_t={open:{x:0},closed:{x:20}},vt=ut((({children:e,isOpen:t})=>{const n=O.read().motion,r=function(e){const t=mt();return ht((()=>{t.current=e}),[e]),t.current}(t),[o,{height:s}]=function(){const e=mt(),[t,n]=dt({height:0});return ht((()=>{const t=new pt((([e])=>n(e.contentRect)));return e.current&&t.observe(e.current),()=>t.disconnect()}),[]),[e,t]}();return i.createElement("div",null,i.createElement(n.div,{animate:t&&r===t?"initialOpen":t?"open":"closed",custom:s,variants:ft},i.createElement(n.div,{variants:_t,ref:o},e)))}));var yt="_updatedAt_1ql33_1",xt="_body_1ql33_8",bt="_actionFooter_1ql33_17",Et="_refresh_1ql33_27";const{useState:gt,useCallback:wt}=t;const Ct={rest:{scale:1},pressed:{scale:.95}},kt={rest:{rotate:0},hover:{rotate:360,transition:{duration:.3}}};function Ot(){const t=O.read().motion;return e.exports.createElement(t.div,{className:Et,variants:Ct,initial:"rest",whileHover:"hover",whileTap:"pressed"},e.exports.createElement(t.div,{className:"flexCenter",variants:kt},e.exports.createElement(c,{size:16})))}const Nt=f(((e,{proxies:t,name:n})=>{const r=g(e),o=v(e),s=b(e);return{apiConfig:M(e),proxies:t,delay:o,hideUnavailableProxies:r,proxySortBy:E(e),isOpen:s[`proxyProvider:${n}`]}}))((function({name:t,proxies:n,delay:r,hideUnavailableProxies:o,proxySortBy:a,vehicleType:i,updatedAt:c,isOpen:l,dispatch:p,apiConfig:d}){const m=se(n,r,o,a),[h,f]=gt(!1),_=function({dispatch:e,apiConfig:t,name:n}){return Le((()=>e(w(t,n))),[t,e,n])}({dispatch:p,apiConfig:d,name:t}),v=wt((async()=>{f(!0),await p(N(d,t)),f(!1)}),[d,p,t,f]),{app:{updateCollapsibleIsOpen:x}}=y(),b=wt((()=>{x("proxyProvider",t,!l)}),[l,x,t]),E=U(new Date(c),new Date);return e.exports.createElement("div",{className:xt},e.exports.createElement(te,{name:t,toggle:b,type:i,isOpen:l,qty:m.length}),e.exports.createElement("div",{className:yt},e.exports.createElement("small",null,"Updated ",E," ago")),e.exports.createElement(vt,{isOpen:l},e.exports.createElement(Se,{all:m}),e.exports.createElement("div",{className:bt},e.exports.createElement(u,{text:"Update",start:e.exports.createElement(Ot,null),onClick:_}),e.exports.createElement(u,{text:"Health Check",start:e.exports.createElement(s,{size:16}),onClick:v,isLoading:h}))),e.exports.createElement(vt,{isOpen:!l},e.exports.createElement(Ae,{all:m})))}));function Mt({items:t}){return 0===t.length?null:e.exports.createElement(e.exports.Fragment,null,e.exports.createElement(S,{title:"Proxy Provider"}),e.exports.createElement("div",null,t.map((t=>e.exports.createElement(Nt,{key:t.name,name:t.name,proxies:t.proxies,type:t.type,vehicleType:t.vehicleType,updatedAt:t.updatedAt})))))}var St="_labeledInput_cmki0_1";const At=[["Natural","order_natural"],["LatencyAsc","order_latency_asc"],["LatencyDesc","order_latency_desc"],["NameAsc","order_name_asc"],["NameDesc","order_name_desc"]],{useCallback:Tt}=t;var Pt=f((e=>({appConfig:{proxySortBy:E(e),hideUnavailableProxies:g(e),autoCloseOldConns:T(e)}})))((function({appConfig:t}){const{app:{updateAppConfig:n}}=y(),r=Tt((e=>{n("proxySortBy",e.target.value)}),[n]),o=Tt((e=>{n("hideUnavailableProxies",e)}),[n]),{t:s}=a();return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement("div",{className:St},e.exports.createElement("span",null,s("sort_in_grp")),e.exports.createElement("div",null,e.exports.createElement(H,{options:At.map((e=>[e[0],s(e[1])])),selected:t.proxySortBy,onChange:r}))),e.exports.createElement("hr",null),e.exports.createElement("div",{className:St},e.exports.createElement("span",null,s("hide_unavail_proxies")),e.exports.createElement("div",null,e.exports.createElement(A,{name:"hideUnavailableProxies",checked:t.hideUnavailableProxies,onChange:o}))),e.exports.createElement("div",{className:St},e.exports.createElement("span",null,s("auto_close_conns")),e.exports.createElement("div",null,e.exports.createElement(A,{name:"autoCloseOldConns",checked:t.autoCloseOldConns,onChange:e=>n("autoCloseOldConns",e)}))))}));var qt="_overlay_uuk3b_1",jt="_cnt_uuk3b_5",Dt="_afterOpen_uuk3b_16";const{useMemo:Rt}=t;function Lt({isOpen:t,onRequestClose:r,children:o}){const s=Rt((()=>({base:n(P.content,jt),afterOpen:Dt,beforeClose:""})),[]);return e.exports.createElement(l,{isOpen:t,onRequestClose:r,className:s,overlayClassName:n(P.overlay,qt)},o)}function zt({color:t="currentColor",size:n=24}){return e.exports.createElement("svg",{fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:n,height:n,stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.exports.createElement("path",{d:"M2 6h9M18.5 6H22"}),e.exports.createElement("circle",{cx:"16",cy:"6",r:"2"}),e.exports.createElement("path",{d:"M22 18h-9M6 18H2"}),e.exports.createElement("circle",{r:"2",transform:"matrix(-1 0 0 1 8 18)"}))}var Bt="_topBar_jgy4z_1",Ft="_topBarRight_jgy4z_13",Ut="_textFilterContainer_jgy4z_22",Wt="_group_jgy4z_29";const{useState:It,useEffect:Ht,useCallback:Gt,useRef:Kt}=t;var Vt=f((e=>({apiConfig:M(e),groupNames:j(e),proxyProviders:D(e),delay:v(e),showModalClosePrevConns:R(e)})))((function({dispatch:t,groupNames:n,delay:r,proxyProviders:o,apiConfig:s,showModalClosePrevConns:i}){const c=Kt({}),l=Gt((()=>{c.current.startAt=Date.now(),t(q(s)).then((()=>{c.current.completeAt=Date.now()}))}),[s,t]);Ht((()=>{l();const e=()=>{c.current.startAt&&Date.now()-c.current.startAt>3e4&&l()};return window.addEventListener("focus",e,!1),()=>window.removeEventListener("focus",e,!1)}),[l]);const[d,h]=It(!1),f=Gt((()=>{h(!1)}),[]),{proxies:{closeModalClosePrevConns:_,closePrevConnsAndTheModal:v}}=y(),{t:x}=a();return e.exports.createElement(e.exports.Fragment,null,e.exports.createElement(Lt,{isOpen:d,onRequestClose:f},e.exports.createElement(Pt,null)),e.exports.createElement("div",{className:Bt},e.exports.createElement(S,{title:x("Proxies")}),e.exports.createElement("div",{className:Ft},e.exports.createElement("div",{className:Ut},e.exports.createElement(I,{textAtom:m})),e.exports.createElement(p,{label:x("settings")},e.exports.createElement(u,{kind:"minimal",onClick:()=>h(!0)},e.exports.createElement(zt,{size:16}))))),e.exports.createElement("div",null,n.map((n=>e.exports.createElement("div",{className:Wt,key:n},e.exports.createElement(Re,{name:n,delay:r,apiConfig:s,dispatch:t}))))),e.exports.createElement(Mt,{items:o}),e.exports.createElement("div",{style:{height:60}}),e.exports.createElement(We,{dispatch:t,apiConfig:s,proxyProviders:o}),e.exports.createElement(Lt,{isOpen:i,onRequestClose:_},e.exports.createElement($,{onClickPrimaryButton:()=>v(s),onClickSecondaryButton:_})))}));export default Vt;
