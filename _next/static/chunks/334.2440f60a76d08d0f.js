"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[334],{3334:function(n,e,t){t.r(e),t.d(e,{default:function(){return Ln}});var r=t(5893),o=t(7294),i=t(2125),u=t(6126),c=t(8193),a=t(9647),l=t(3854),s=t(5434),f=t(155),d=t(9896);function h(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function p(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function b(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],u=!0,c=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return h(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var g=function(){var n=b(o.useState(0),2),e=n[0],t=n[1],r=b(o.useState({value:"",debounced:""}),2),i=r[0],u=r[1],c=(0,d.Z)((function(n){return n.settings.zoomPanPinch}));return o.useEffect((function(){var n=setTimeout((function(){u((function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){p(n,e,t[e])}))}return n}({},n,{debounced:i.value})}))}),1500);return function(){return clearTimeout(n)}}),[i.value]),o.useEffect((function(){if(c){var n,r=c.instance.wrapperComponent,o=(n="span[data-key*='".concat(i.debounced,"' i]"),document.querySelectorAll("".concat(n))),u=o[e]||null;if(function(){var n=document.querySelectorAll("foreignObject.searched, .highlight");null===n||void 0===n||n.forEach((function(n){n.classList.remove("highlight"),n.classList.remove("searched")}))}(),r&&u&&u.parentElement){var a=Number(u.getAttribute("data-x")),l=Number(u.getAttribute("data-y")),s=1*(r.offsetLeft-a)+r.clientWidth/2-u.getBoundingClientRect().width/2,f=1*(r.offsetLeft-l)+r.clientHeight/2-u.getBoundingClientRect().height/2;!function(n,e){null===n||void 0===n||n.forEach((function(n){var e,t,r;null===(r=null===(e=n.parentElement)||void 0===e||null===(t=e.parentElement)||void 0===t?void 0:t.closest("foreignObject"))||void 0===r||r.classList.add("searched")})),n[e].classList.add("highlight")}(o,e),null===c||void 0===c||c.setTransform(s,f,1)}else t(0);return function(){i.value||t(0)}}}),[i.debounced,c,e,t]),[i,u,function(){return t((function(n){return n+1}))}]};function v(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function y(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function m(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],u=!0,c=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return v(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function w(){var n=x(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  border-radius: 4px;\n  padding: 4px 6px;\n"]);return w=function(){return n},n}function j(){var n=x(["\n  display: flex;\n"]);return j=function(){return n},n}function C(){var n=x(["\n  background: none;\n  color: ",";\n  outline: none;\n  border: none;\n  width: 112px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: width 0.3s;\n\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    display: none;\n  }\n\n  &:focus {\n    width: 208px;\n  }\n"]);return C=function(){return n},n}function O(){var n=x(["\n  display: grid;\n  background: none;\n  color: ",";\n  padding: 0;\n  min-height: unset;\n\n  &:hover {\n    box-shadow: none;\n  }\n"]);return O=function(){return n},n}var S=i.ZP.div.withConfig({componentId:"sc-28d130cd-0"})(w(),(function(n){return n.theme.BACKGROUND_TERTIARY})),E=i.ZP.form.withConfig({componentId:"sc-28d130cd-1"})(j()),I=i.ZP.input.withConfig({componentId:"sc-28d130cd-2"})(C(),(function(n){return n.theme.TEXT_NORMAL})),P=i.ZP.button.withConfig({componentId:"sc-28d130cd-3"})(O(),(function(n){return n.theme.INTERACTIVE_NORMAL})),A=function(){var n=m(g(),3),e=n[0],t=n[1],o=n[2];return(0,r.jsxs)(S,{children:[(0,r.jsx)(E,{onSubmit:function(n){n.preventDefault(),o()},children:(0,r.jsx)(I,{type:"text",value:e.value,onChange:function(n){return t((function(e){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){y(n,e,t[e])}))}return n}({},e,{value:n.target.value})}))},placeholder:"Search Node"})}),(0,r.jsx)(P,{"aria-label":"search",onClick:function(){return t({value:"",debounced:""})},children:e.value?(0,r.jsx)(f.Lp2,{size:18}):(0,r.jsx)(c.RB5,{size:18})})]})},k=t(374),Z=t(4051),T=t.n(Z),D=t(4842),z=t(1639),R=t(705),N=t(3887),_=t(713),B=t(4931);function L(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function V(n,e,t,r,o,i,u){try{var c=n[i](u),a=c.value}catch(l){return void t(l)}c.done?e(a):Promise.resolve(a).then(r,o)}function F(n){return function(){var e=this,t=arguments;return new Promise((function(r,o){var i=n.apply(e,t);function u(n){V(i,r,o,u,c,"next",n)}function c(n){V(i,r,o,u,c,"throw",n)}u(void 0)}))}}function M(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function U(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],u=!0,c=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return L(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return L(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function K(){var n=q(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  padding: 12px 0;\n  border-top: 1px solid ",";\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: ",";\n\n  &:first-of-type {\n    padding-top: 0;\n    border: none;\n  }\n"]);return K=function(){return n},n}function Y(){var n=q(["\n  display: flex;\n  justify-content: space-between;\n"]);return Y=function(){return n},n}function G(){var n=q(["\n  flex: 1;\n  width: 100%;\n  height: auto;\n  border-radius: 6px;\n  background: ",";\n  border: 1px solid;\n  border-color: rgba(0, 0, 0, 0.1);\n"]);return G=function(){return n},n}var $={card:{background:"transparent",boxShadow:"none"},body:{padding:0},input:{background:"rgba(0, 0, 0, 0.2)",boxShadow:"none",textTransform:"none",whiteSpace:"nowrap",textOverflow:"ellipsis"},hash:{background:"rgba(180, 180, 180, 0.3)"}},X=["#B80000","#DB3E00","#FCCB00","#008B02","#006B76","#1273DE","#004DCF","#5300EB","#EB9694","#FAD0C3","#FEF3BD","#C1E1C5","#BEDADC","#C4DEF6","#BED3F3","#D4C4FB","transparent"];function H(n,e){var t=document.createElement("a");t.download=e,t.href=n,document.body.appendChild(t),t.click(),document.body.removeChild(t)}var W=i.ZP.div.withConfig({componentId:"sc-1fbc7e21-0"})(K(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT}),(function(n){return n.theme.INTERACTIVE_NORMAL})),J=i.ZP.div.withConfig({componentId:"sc-1fbc7e21-1"})(Y()),Q=i.ZP.div.withConfig({componentId:"sc-1fbc7e21-2"})(G(),(function(n){return n.color})),nn=function(n){var e=n.visible,t=n.setVisible,i=U(o.useState({filename:"jsonvisio.com",backgroundColor:"transparent",quality:1}),2),u=i[0],c=i[1],l=function(){var n=F(T().mark((function n(){var e,r;return T().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,B.ZP.loading("Copying to clipboard...",{id:"toastClipboard"}),e=document.querySelector("svg[id*='ref']"),n.next=5,(0,D.SE)(e,{quality:u.quality,backgroundColor:u.backgroundColor});case 5:if(r=n.sent){n.next=8;break}return n.abrupt("return");case 8:navigator.clipboard.write([new ClipboardItem(M({},r.type,r))]),B.ZP.success("Copied to clipboard"),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),B.ZP.error("Failed to copy to clipboard");case 15:return n.prev=15,B.ZP.dismiss("toastClipboard"),t(!1),n.finish(15);case 19:case"end":return n.stop()}}),n,null,[[0,12,15,19]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=F(T().mark((function n(){var e;return T().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,B.ZP.loading("Downloading...",{id:"toastDownload"}),e=document.querySelector("svg[id*='ref']"),n.next=5,(0,D.YM)(e,{quality:u.quality,backgroundColor:u.backgroundColor});case 5:H(n.sent,"".concat(u.filename,".png")),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),B.ZP.error("Failed to download image!");case 12:return n.prev=12,B.ZP.dismiss("toastDownload"),t(!1),n.finish(12);case 16:case"end":return n.stop()}}),n,null,[[0,9,12,16]])})));return function(){return n.apply(this,arguments)}}(),f=function(n,e){return c(function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){M(n,e,t[e])}))}return n}({},u,M({},n,e)))};return(0,r.jsxs)(N.u,{visible:e,setVisible:t,children:[(0,r.jsx)(N.u.Header,{children:"Download Image"}),(0,r.jsxs)(N.u.Content,{children:[(0,r.jsxs)(W,{children:["File Name",(0,r.jsx)(J,{children:(0,r.jsx)(R.I,{placeholder:"File Name",value:u.filename,onChange:function(n){return f("filename",n.target.value)}})})]}),(0,r.jsxs)(W,{children:["Background Color",(0,r.jsxs)(J,{children:[(0,r.jsx)(_.e8,{triangle:"hide",colors:X,color:u.backgroundColor,onChange:function(n){return f("backgroundColor",n.hex)},styles:{default:$}}),(0,r.jsx)(Q,{color:u.backgroundColor})]})]})]}),(0,r.jsxs)(N.u.Controls,{setVisible:t,children:[(0,r.jsxs)(z.z,{status:"SECONDARY",onClick:l,children:[(0,r.jsx)(a.C3L,{size:18})," Clipboard"]}),(0,r.jsxs)(z.z,{status:"SUCCESS",onClick:s,children:[(0,r.jsx)(a._hL,{size:18}),"Download"]})]})]})};function en(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function tn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],u=!0,c=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return en(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return en(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function rn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function on(){var n=rn(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-direction: row-reverse;\n  height: 28px;\n  padding: 4px 16px;\n  background: ",";\n  color: ",";\n\n  box-shadow: 0 1px 0px ",";\n"]);return on=function(){return n},n}function un(){var n=rn(["\n  display: grid;\n  place-content: center;\n  font-size: 20px;\n  background: none;\n  color: ",";\n\n  &:hover {\n    color: ",";\n    opacity: 1;\n    box-shadow: none;\n  }\n"]);return un=function(){return n},n}var cn=i.ZP.div.withConfig({componentId:"sc-1efb0d42-0"})(on(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.SILVER}),(function(n){return n.theme.BACKGROUND_TERTIARY})),an=i.ZP.button.withConfig({componentId:"sc-1efb0d42-1"})(un(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){return n.theme.INTERACTIVE_HOVER})),ln=function(){var n=tn(o.useState(!1),2),e=n[0],t=n[1],i=tn((0,d.Z)((function(n){return[n.settings.lightmode,n.settings.performance,n.settings.hideEditor]}),k.Z),3),u=i[0],f=i[1],h=i[2],p=(0,d.Z)((function(n){return n.updateSetting})),b=(0,d.Z)((function(n){return n.zoomIn})),g=(0,d.Z)((function(n){return n.zoomOut})),v=(0,d.Z)((function(n){return n.centerView}));return(0,r.jsxs)(cn,{children:[(0,r.jsx)(an,{"aria-label":"fullscreen",onClick:function(){return p("hideEditor",!h)},children:(0,r.jsx)(c.vju,{})}),(0,r.jsx)(an,{"aria-label":"switch theme",onClick:function(){return p("lightmode",!u)},children:u?(0,r.jsx)(l.Fxr,{}):(0,r.jsx)(l.YGJ,{})}),!f&&(0,r.jsx)(A,{}),!f&&(0,r.jsx)(an,{"aria-label":"save",onClick:function(){return t(!0)},children:(0,r.jsx)(a._hL,{})}),(0,r.jsx)(an,{"aria-label":"center canvas",onClick:v,children:(0,r.jsx)(s.XIv,{})}),(0,r.jsx)(an,{"aria-label":"zoom out",onClick:g,children:(0,r.jsx)(c.ywL,{})}),(0,r.jsx)(an,{"aria-label":"zoom in",onClick:b,children:(0,r.jsx)(c.Lfi,{})}),(0,r.jsx)(nn,{visible:e,setVisible:t})]})},sn=t(8188),fn=t(4159);function dn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function hn(){var n=dn(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: pointer;\n"]);return hn=function(){return n},n}function pn(){var n=dn(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: ",";\n  height: ",";\n  min-height: 50;\n  color: ",";\n"]);return pn=function(){return n},n}function bn(){var n=dn(['\n  pointer-events: none;\n\n  * {\n    font-family: "Roboto Mono", monospace;\n  }\n\n  &.searched {\n    border: 2px solid ',";\n    border-radius: 2px;\n  }\n\n  .highlight {\n    background-color: rgba(255, 0, 255, 0.5);\n    filter: hue-rotate();\n  }\n\n  .renderVisible {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 12px;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    cursor: pointer;\n  }\n"]);return bn=function(){return n},n}function gn(){var n=dn(["\n  font-weight: 500;\n  color: ",";\n"]);return gn=function(){return n},n}function vn(){var n=dn(["\n  height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 auto;\n  width: ",";\n"]);return vn=function(){return n},n}var yn=i.ZP.div.withConfig({componentId:"sc-8fe9debd-0"})(hn()),mn=i.ZP.pre.withConfig({componentId:"sc-8fe9debd-1"})(pn(),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.theme.TEXT_NORMAL})),xn=i.ZP.foreignObject.withConfig({componentId:"sc-8fe9debd-2"})(bn(),(function(n){return n.theme.TEXT_POSITIVE})),wn=i.ZP.span.withConfig({componentId:"sc-8fe9debd-3"})(gn(),(function(n){var e=n.theme,t=n.objectKey;return n.parent?e.NODE_KEY:t?"#5c87ff":e.TEXT_POSITIVE})),jn=i.ZP.span.withConfig({componentId:"sc-8fe9debd-4"})(vn(),(function(n){var e=n.width;return"".concat(e-20,"px")})),Cn=function(n){var e=n.width,t=n.height,o=n.value,i=n.x,u=n.y,c=(0,d.Z)((function(n){return n.settings.performance}));return(0,r.jsx)(xn,{width:e,height:t,x:0,y:0,children:(0,r.jsx)(In,{condition:c,children:(0,r.jsx)(mn,{width:e,height:t,children:o.map((function(n,t){return n[1]&&(0,r.jsxs)(jn,{"data-key":n[1],"data-x":i,"data-y":u,width:e,children:[(0,r.jsxs)(wn,{objectKey:!0,children:[n[0],": "]}),n[1]]},t)}))})})})},On=function(n){var e=n.width,t=n.height,o=n.value,i=n.isParent,u=void 0!==i&&i,c=n.x,a=n.y,l=(0,d.Z)((function(n){return n.settings.performance}));return(0,r.jsx)(xn,{width:e,height:t,x:0,y:0,children:(0,r.jsx)(In,{condition:l,children:(0,r.jsx)(mn,{width:e,height:t,children:(0,r.jsx)(wn,{"data-x":c,"data-y":a,"data-key":o,parent:u,children:o})})})})};function Sn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var En={fill:"transparent",stroke:"transparent",strokeWidth:0},In=function(n){var e=n.condition,t=n.children;return e?(0,r.jsx)(fn.Z,{rootElementClass:"renderVisible",children:t}):(0,r.jsx)(yn,{children:t})},Pn=function(n){var e=n.properties;return(0,r.jsx)(sn.Node,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){Sn(n,e,t[e])}))}return n}({},n,{label:(0,r.jsx)(sn.Label,{style:En}),children:function(n){var t,o,i=n.width,u=n.height,c=n.x,a=n.y;if(t=e.text,null!=(o=Object)&&"undefined"!==typeof Symbol&&o[Symbol.hasInstance]?o[Symbol.hasInstance](t):t instanceof o){var l=Object.entries(e.text);return(0,r.jsx)(Cn,{value:l,width:i,height:u,x:c,y:a})}return(0,r.jsx)(On,{isParent:e.data.isParent,value:e.text,width:i,height:u,x:c,y:a})}}))},An=t(4585);function kn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Zn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,i=[],u=!0,c=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw o}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return kn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return kn(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Tn=function(){var n=(0,d.Z)((function(n){return n.json})),e=Zn((0,d.Z)((function(n){return[n.settings.expand,n.settings.layout]}),k.Z),2),t=e[0],i=e[1],u=Zn(o.useState([]),2),c=u[0],a=u[1],l=Zn(o.useState([]),2),s=l[0],f=l[1],h=Zn(o.useState({width:2e3,height:2e3}),2),p=h[0],b=h[1];o.useEffect((function(){var e=(0,An.h)(n,t),r=e.nodes,o=e.edges;a(r),f(o)}),[n,t]);return(0,r.jsx)(sn.Canvas,{nodes:c,edges:s,maxWidth:p.width,maxHeight:p.height,direction:i,onCanvasClick:function(){var n=document.querySelector("input:focus");n&&n.blur()},onLayoutChange:function(n){n.width&&n.height&&b({width:n.width,height:n.height})},node:Pn,zoomable:!1,readonly:!0},i)};function Dn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function zn(){var n=Dn(["\n  position: relative;\n"]);return zn=function(){return n},n}function Rn(){var n=Dn(["\n  position: absolute;\n  width: 100%;\n  height: calc(100vh - 36px);\n\n  :active {\n    cursor: move;\n  }\n\n  rect {\n    fill: ",";\n  }\n"]);return Rn=function(){return n},n}var Nn=i.ZP.div.withConfig({componentId:"sc-a0d71090-0"})(zn()),_n=i.ZP.div.withConfig({componentId:"sc-a0d71090-1"})(Rn(),(function(n){return n.theme.BACKGROUND_NODE})),Bn={step:.05},Ln=function(){var n=(0,d.Z)((function(n){return n.updateSetting}));return(0,r.jsxs)(Nn,{children:[(0,r.jsx)(ln,{}),(0,r.jsx)(_n,{children:(0,r.jsx)(u.d$,{maxScale:1.8,minScale:.4,initialScale:.9,wheel:Bn,onInit:function(e){n("zoomPanPinch",e)},children:(0,r.jsx)(u.Uv,{wrapperStyle:{width:"100%",height:"100%",overflow:"hidden"},children:(0,r.jsx)(Tn,{})})})})]})}}}]);