(()=>{var e={63927:function(e,t,n){var r={"./en":"46952","./en.json":"46952","./fr":"45413","./fr.json":"45413"};function o(e){return n(i(e))}function i(e){if(!n.o(r,e)){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=63927},74303:function(e,t,n){"use strict";var r=n(85893);n(78893),n(59507),n(98049),n(67294);var o=n(62330),i=n(16396),u=n.n(i),a=n(28802),c=n(22960),l=n(72339),d=n(96122);let f=e=>{let{client:t,lang:n,polyglot:u,children:f}=e;return(0,r.jsx)(c.WebviewIntentProvider,{children:(0,r.jsx)(i.CozyProvider,{client:t,children:(0,r.jsx)(a.DataProxyProvider,{children:(0,r.jsx)(o.BarProvider,{children:(0,r.jsx)(d.I18n,{lang:n,polyglot:u,children:(0,r.jsx)(l.BreakpointsProvider,{children:f})})})})})})};var s=n(20745),p=n(71400),v=n(72916),h=n(79233),g=JSON.parse('{"u2":"Twake Chat","i8":"0.1.0"}');let j={},y=e=>{let t=JSON.parse(e.dataset.cozy),n=window.location.protocol,r=`${n}//${t.domain}`;return new(u())({uri:r,token:t.token,appMetadata:{slug:g.u2,version:g.i8},schema:j,store:!0})},b=(e,t)=>/^\{\{\..*\}\}$/.test(e)?t:e,m=()=>{var e;let t=document.querySelector("[role=application]"),r=(0,s.createRoot)(t),o=y(t),i=b(null===(e=JSON.parse(t.dataset.cozy))||void 0===e?void 0:e.locale,"en"),u=(0,h.QE)(i,e=>n(63927)(`./${e}`));return o.registerPlugin(p.default.plugin),o.registerPlugin(v.RealtimePlugin),{root:r,client:o,lang:i,polyglot:u}};var O=n(79655),x=n(26335),w=n(62857),P=n(32692);let k=[{path:"*",element:(0,r.jsx)(()=>{let{isMobile:e}=(0,l.default)(),t=(0,i.useClient)();return(0,w.useExternalBridge)("https://chat.stg.lin-saas.com/"),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.BarComponent,{}),e&&(0,r.jsx)(o.BarCenter,{children:(0,r.jsx)(P.default,{variant:"h5",children:t.appMetadata.slug})})]})},{})}],E=()=>{let e=(0,O.createBrowserRouter)(k);return(0,r.jsx)(x.pG,{router:e})};document.getElementById("embeddedApp").onload=function(){let e=new Event("iframeLoaded");document.dispatchEvent(e)},setTimeout(()=>{let e=new Event("iframeLoaded");document.dispatchEvent(e)},1e3),document.addEventListener("iframeLoaded",()=>{S(),_=!0});let _=!1,S=()=>{if(_)return;let{root:e,client:t,lang:n,polyglot:o}=m();e.render((0,r.jsx)(f,{client:t,lang:n,polyglot:o,children:(0,r.jsx)(E,{})}))}},14061:function(){},71169:function(){},17770:function(){},47936:function(){},39322:function(){},46952:function(e){"use strict";e.exports={}},45413:function(e){"use strict";e.exports={}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o||"object"==typeof r&&r&&(4&o&&r.__esModule||16&o&&"function"==typeof r.then))return r;var i=Object.create(null);n.r(i);var u={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach(function(e){u[e]=function(){return r[e]}});return u.default=function(){return r},n.d(i,u),i}})(),n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},(()=>{var e=[];n.O=function(t,r,o,i){if(r){i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[r,o,i];return}for(var a=1/0,u=0;u<e.length;u++){for(var r=e[u][0],o=e[u][1],i=e[u][2],c=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(n.O).every(function(e){return n.O[e](r[l])})?r.splice(l--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var d=o();void 0!==d&&(t=d)}}return t}})(),n.p="/",n.rv=function(){return"1.2.5"},(()=>{var e={909:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],c=r[2],l=0;if(u.some(function(t){return 0!==e[t]})){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(c)var d=c(n)}for(t&&t(r);l<u.length;l++)i=u[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},r=self.webpackChunktwakechat=self.webpackChunktwakechat||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.ruid="bundler=rspack@1.2.5";var r=n.O(void 0,["465","361","118","937"],function(){return n(74303)});r=n.O(r)})();