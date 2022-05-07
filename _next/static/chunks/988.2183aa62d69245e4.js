"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[988],{1639:function(n,e,t){t.d(e,{z:function(){return h}});var r,i=t(5893),o=(t(7294),t(2125));function c(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n,e){if(null==n)return{};var t,r,i=function(n,e){if(null==n)return{};var t,r,i={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function l(){var n=a(["\n  display: block;\n  background: ",";\n  color: #ffffff;\n  padding: 8px 16px;\n  min-width: 60px;\n\n  :disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n\n  @media only screen and (max-width: 768px) {\n    font-size: 18px;\n  }\n"]);return l=function(){return n},n}function s(){var n=a(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n"]);return s=function(){return n},n}!function(n){n.PRIMARY="PRIMARY",n.SECONDARY="BLURPLE",n.DANGER="DANGER",n.SUCCESS="SEAGREEN",n.WARNING="ORANGE"}(r||(r={}));var f=o.ZP.button.withConfig({componentId:"sc-b7ecec2b-0"})(l(),(function(n){return function(n,e){return e[r[n]]}(n.status,n.theme)})),d=o.ZP.div.withConfig({componentId:"sc-b7ecec2b-1"})(s()),h=function(n){var e=n.children,t=n.status,r=u(n,["children","status"]);return(0,i.jsx)(f,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){c(n,e,t[e])}))}return n}({type:"button",status:null!==t&&void 0!==t?t:"PRIMARY"},r,{children:(0,i.jsx)(d,{children:e})}))}},5633:function(n,e,t){t.r(e),t.d(e,{default:function(){return pt}});var r=t(5893),i=t(7294),o=t(4931),c=t(1664),u=t.n(c),a=t(2125),l=t(9327),s=t(9352),f=t(471),d=t(8193);function h(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function p(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return h(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return h(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function m(){var n=b(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n"]);return m=function(){return n},n}function v(){var n=b(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  transform: translate(calc(100% + 15px), 20%);\n  z-index: 5;\n  background: ",";\n  color: ",";\n  border-radius: 5px;\n  padding: 4px 8px;\n  display: ",";\n  white-space: nowrap;\n  font-size: 16px;\n  user-select: none;\n  font-weight: 500;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),\n    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),\n    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);\n"]);return v=function(){return n},n}function g(){var n=b([""]);return g=function(){return n},n}var x=a.ZP.div.withConfig({componentId:"sc-5cff3129-0"})(m()),y=a.ZP.div.withConfig({componentId:"sc-5cff3129-1"})(v(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.visible?"initial":"none"})),j=a.ZP.div.withConfig({componentId:"sc-5cff3129-2"})(g()),w=function(n){var e=n.children,t=n.title,o=p(i.useState(!1),2),c=o[0],u=o[1];return(0,r.jsxs)(x,{children:[(0,r.jsx)(y,{visible:c,children:t}),(0,r.jsx)(j,{onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},children:e})]})},O=t(5623),C=t(6827),E=t(1163),I=t(1639);function A(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function S(){var n=A(["\n  from { transform: scale(0.6); opacity: 0; }\n  to { transform: scale(1); opacity: 1; };\n"]);return S=function(){return n},n}function P(){var n=A(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100%;\n  display: ",";\n  justify-content: center;\n  align-items: center;\n  background: rgba(0, 0, 0, 0.85);\n  z-index: 6;\n\n  * {\n    box-sizing: border-box;\n  }\n"]);return P=function(){return n},n}function R(){var n=A(["\n  min-width: 440px;\n  width: fit-content;\n  animation: "," 220ms ease-in-out;\n"]);return R=function(){return n},n}function N(){var n=A(["\n  color: ",";\n  font-size: 20px !important;\n  margin: 0;\n"]);return N=function(){return n},n}function T(){var n=A(["\n  background: ",";\n  padding: 16px;\n  border-radius: 5px 5px 0 0;\n"]);return T=function(){return n},n}function k(){var n=A(["\n  color: ",";\n  background: ",";\n  padding: 16px;\n  overflow: hidden scroll;\n"]);return k=function(){return n},n}function _(){var n=A(["\n  display: flex;\n  flex-direction: row-reverse;\n  background: ",";\n  padding: 16px;\n  border-radius: 0 0 5px 5px;\n  gap: 10px;\n"]);return _=function(){return n},n}var Z=(0,a.F4)(S()),z=a.ZP.div.withConfig({componentId:"sc-c390e89d-0"})(P(),(function(n){return n.visible?"flex":"none"})),D=a.ZP.div.withConfig({componentId:"sc-c390e89d-1"})(R(),Z),L=a.ZP.h2.withConfig({componentId:"sc-c390e89d-2"})(N(),(function(n){return n.theme.INTERACTIVE_ACTIVE})),G=a.ZP.div.withConfig({componentId:"sc-c390e89d-3"})(T(),(function(n){return n.theme.MODAL_BACKGROUND})),U=a.ZP.div.withConfig({componentId:"sc-c390e89d-4"})(k(),(function(n){return n.theme.TEXT_NORMAL}),(function(n){return n.theme.MODAL_BACKGROUND})),M=a.ZP.div.withConfig({componentId:"sc-c390e89d-5"})(_(),(function(n){return n.theme.BACKGROUND_SECONDARY})),V=function(n){var e=n.children,t=n.visible,i=n.setVisible;return(0,r.jsx)(z,{visible:t,onClick:function(n){n.currentTarget===n.target&&i((function(n){return!n}))},children:(0,r.jsx)(D,{children:e})})};function K(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function B(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return K(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return K(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Y(){var n=J(["\n  background: ",";\n  color: ",";\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  padding: 6px 8px;\n  width: 100%;\n  margin-bottom: 10px;\n"]);return Y=function(){return n},n}function H(){var n=J(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"]);return H=function(){return n},n}function F(){var n=J(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: ",";\n  border: 2px dashed ",';\n  border-radius: 5px;\n  width: 100%;\n  padding: 16px;\n  cursor: pointer;\n\n  input[type="file"] {\n    display: none;\n  }\n']);return F=function(){return n},n}function X(){var n=J(["\n  color: ",";\n"]);return X=function(){return n},n}function $(){var n=J(["\n  color: ",";\n  margin-bottom: 0;\n"]);return $=function(){return n},n}V.Header=function(n){var e=n.children;return(0,r.jsx)(G,{children:(0,r.jsx)(L,{children:e})})},V.Content=function(n){var e=n.children;return(0,r.jsx)(U,{children:e})},V.Controls=function(n){var e=n.children,t=n.setVisible;return(0,r.jsxs)(M,{children:[(0,r.jsx)(I.z,{onClick:function(){return t(!1)},children:"Close"}),e]})};var W=a.ZP.input.withConfig({componentId:"sc-d9cb2f1a-0"})(Y(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.INTERACTIVE_NORMAL})),q=(0,a.ZP)(V.Content).withConfig({componentId:"sc-d9cb2f1a-1"})(H()),Q=a.ZP.label.withConfig({componentId:"sc-d9cb2f1a-2"})(F(),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){return n.theme.BACKGROUND_TERTIARY})),nn=a.ZP.span.withConfig({componentId:"sc-d9cb2f1a-3"})(X(),(function(n){return n.theme.INTERACTIVE_NORMAL})),en=a.ZP.h3.withConfig({componentId:"sc-d9cb2f1a-4"})($(),(function(n){return n.theme.INTERACTIVE_ACTIVE})),tn=function(n){var e,t=n.visible,c=n.setVisible,u=(0,C.ZR)().dispatch,a=B(i.useState(""),2),l=a[0],s=a[1],f=B(i.useState(null),2),h=f[0],p=f[1];return i.useEffect((function(){return function(){p(null),s("")}}),[t]),(0,r.jsxs)(V,{visible:t,setVisible:c,children:[(0,r.jsx)(V.Header,{children:"Import JSON"}),(0,r.jsxs)(q,{children:[(0,r.jsx)(W,{value:l,onChange:function(n){return s(n.target.value)},type:"url",placeholder:"URL of JSON to fetch"}),(0,r.jsxs)(Q,{children:[(0,r.jsx)("input",{onChange:function(n){var e;n.target.files&&p(null===(e=n.target.files)||void 0===e?void 0:e.item(0))},type:"file",accept:"application/JSON"},null===h||void 0===h?void 0:h.name),(0,r.jsx)(d.aBR,{size:48}),(0,r.jsx)(en,{children:"Click Here to Upload JSON"}),(0,r.jsx)(nn,{children:null!==(e=null===h||void 0===h?void 0:h.name)&&void 0!==e?e:"None"})]})]}),(0,r.jsx)(V.Controls,{setVisible:c,children:(0,r.jsx)(I.z,{status:"SECONDARY",onClick:function(){if(l){p(null);var n=o.ZP.loading("Loading...");return fetch(l).then((function(n){return n.json()})).then((function(e){u({type:O.n.SET_JSON,payload:JSON.stringify(e)}),o.ZP.dismiss(n),c(!1)})).catch((function(){return o.ZP.error("Failed to fetch JSON!")}))}if(h){var e=new FileReader;e.readAsText(h,"UTF-8"),e.onload=function(n){var e;u({type:O.n.SET_JSON,payload:null===(e=n.target)||void 0===e?void 0:e.result}),c(!1)}}},disabled:!(h||l),children:"Import"})})]})},rn=function(n){var e=n.visible,t=n.setVisible,i=(0,C.ZR)().dispatch;return(0,r.jsxs)(V,{visible:e,setVisible:t,children:[(0,r.jsx)(V.Header,{children:"Clear JSON"}),(0,r.jsx)(V.Content,{children:"Are you sure you want to clear JSON?"}),(0,r.jsx)(V.Controls,{setVisible:t,children:(0,r.jsx)(I.z,{status:"DANGER",onClick:function(){i({type:O.n.SET_JSON,payload:"{}"}),localStorage.removeItem("json"),o.ZP.success("Cleared JSON and removed from memory."),t(!1)},children:"Confirm"})})]})};function on(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function cn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return on(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return on(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function un(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function an(){var n=un(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: fit-content;\n  background: ",";\n  padding: 4px;\n  border-right: 1px solid ",";\n"]);return an=function(){return n},n}function ln(){var n=un(["\n  display: flex;\n  justify-content: center;\n  text-align: center;\n  font-size: 28px;\n  font-weight: 600;\n  width: 100%;\n  color: ",";\n  cursor: pointer;\n\n  svg {\n    padding: 8px;\n    vertical-align: middle;\n  }\n\n  a {\n    display: flex;\n  }\n\n  &:hover :is(a, svg) {\n    color: ",";\n  }\n"]);return ln=function(){return n},n}function sn(){var n=un(["\n  color: ",";\n"]);return sn=function(){return n},n}function fn(){var n=un(["\n  transform: rotate(",");\n"]);return fn=function(){return n},n}function dn(){var n=un(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  & > div:nth-child(n + 1) {\n    border-bottom: 1px solid ",";\n  }\n"]);return dn=function(){return n},n}function hn(){var n=un(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  & > div,\n  a:nth-child(0) {\n    border-top: 1px solid ",";\n  }\n"]);return hn=function(){return n},n}function pn(){var n=un(["\n  color: ",";\n"]);return pn=function(){return n},n}var bn=a.ZP.div.withConfig({componentId:"sc-a776b688-0"})(an(),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),mn=a.ZP.div.withConfig({componentId:"sc-a776b688-1"})(ln(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){return n.theme.INTERACTIVE_HOVER})),vn=a.ZP.span.withConfig({componentId:"sc-a776b688-2"})(sn(),(function(n){var e=n.theme;return n.secondary?e.INTERACTIVE_NORMAL:e.ORANGE})),gn=(0,a.ZP)(l.S$H).withConfig({componentId:"sc-a776b688-3"})(fn(),(function(n){var e=n.rotate;return"".concat(e,"deg")})),xn=a.ZP.nav.withConfig({componentId:"sc-a776b688-4"})(dn(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),yn=a.ZP.nav.withConfig({componentId:"sc-a776b688-5"})(hn(),(function(n){return n.theme.BACKGROUND_MODIFIER_ACCENT})),jn=a.ZP.div.withConfig({componentId:"sc-a776b688-6"})(pn(),(function(n){return n.theme.FULL_WHITE}));var wn=function(){var n,e=(0,C.ZR)(),t=e.json,c=e.settings,a=e.dispatch,l=(0,E.useRouter)(),h=cn(i.useState(!1),2),p=h[0],b=h[1],m=cn(i.useState(!1),2),v=m[0],g=m[1];return(0,r.jsxs)(bn,{children:[(0,r.jsxs)(xn,{children:[(0,r.jsx)(u(),{passHref:!0,href:"/",children:(0,r.jsx)(mn,{onClick:function(){return l.push("/")},children:(0,r.jsxs)(jn,{children:[(0,r.jsx)(vn,{children:"J"}),(0,r.jsx)(vn,{secondary:!0,children:"V"})]})})}),(0,r.jsx)(w,{title:"Import File",children:(0,r.jsx)(mn,{onClick:function(){return b(!0)},children:(0,r.jsx)(d.O1u,{})})}),(0,r.jsx)(w,{title:"Rotate Layout",children:(0,r.jsx)(mn,{onClick:function(){return a({type:O.n.TOGGLE_LAYOUT})},children:(0,r.jsx)(gn,{rotate:(n=c.layout,"LEFT"===n?90:"UP"===n?180:"RIGHT"===n?270:360)})})}),(0,r.jsx)(w,{title:c.expand?"Shrink Nodes":"Expand Nodes",children:(0,r.jsx)(mn,{title:"Toggle Expand/Collapse",onClick:function(){a({type:O.n.TOGGLE_EXPAND}),(0,o.ZP)("".concat(c.expand?"Collapsed":"Expanded"," nodes."))},children:c.expand?(0,r.jsx)(f.DUJ,{}):(0,r.jsx)(f.q6J,{})})}),(0,r.jsx)(w,{title:"Clear JSON",children:(0,r.jsx)(mn,{onClick:function(){return g(!0)},children:(0,r.jsx)(d.VPh,{})})}),(0,r.jsx)(w,{title:"Save JSON",children:(0,r.jsx)(mn,{onClick:function(){localStorage.setItem("json",t),o.ZP.success("Saved JSON successfully!")},children:(0,r.jsx)(d.JMf,{})})})]}),(0,r.jsxs)(yn,{children:[(0,r.jsx)(mn,{children:(0,r.jsx)(u(),{href:"https://twitter.com/aykutsarach",children:(0,r.jsx)("a",{"aria-label":"Twitter",rel:"me",target:"_blank",children:(0,r.jsx)(d.h3E,{})})})}),(0,r.jsx)(mn,{children:(0,r.jsx)(u(),{href:"https://github.com/AykutSarac/jsonvisio.com",children:(0,r.jsx)("a",{"aria-label":"GitHub",rel:"me",target:"_blank",children:(0,r.jsx)(d.RrF,{})})})}),(0,r.jsx)(mn,{children:(0,r.jsx)(u(),{href:"https://www.patreon.com/aykutsarac",children:(0,r.jsx)("a",{"aria-label":"Patreon",rel:"me",target:"_blank",children:(0,r.jsx)(s.cu7,{})})})})]}),(0,r.jsx)(tn,{visible:p,setVisible:b}),(0,r.jsx)(rn,{visible:v,setVisible:g})]})},On=t(6126),Cn=t(7341),En=t(6893),In=t(3854),An=t(5434),Sn=t(155);function Pn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Rn(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Nn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return Pn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Pn(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Tn=function(){var n=Nn(i.useState(0),2),e=n[0],t=n[1],r=Nn(i.useState({value:"",debounced:""}),2),o=r[0],c=r[1],u=(0,C.ZR)().settings;return i.useEffect((function(){var n=setTimeout((function(){c((function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){Rn(n,e,t[e])}))}return n}({},n,{debounced:o.value})}))}),1500);return function(){return clearTimeout(n)}}),[o.value]),i.useEffect((function(){if(u.zoomPanPinch){var n,r=u.zoomPanPinch.instance.wrapperComponent,i=(n="span[data-key*='".concat(o.debounced,"' i]"),document.querySelectorAll("".concat(n))),c=i[e]||null;if(function(){var n=document.querySelectorAll("foreignObject.searched, .highlight");null===n||void 0===n||n.forEach((function(n){n.classList.remove("highlight"),n.classList.remove("searched")}))}(),r&&c&&c.parentElement){var a,l=Number(c.getAttribute("data-x")),s=Number(c.getAttribute("data-y")),f=1*(r.offsetLeft-l)+r.clientWidth/2-c.getBoundingClientRect().width/2,d=1*(r.offsetLeft-s)+r.clientHeight/2-c.getBoundingClientRect().height/2;!function(n,e){null===n||void 0===n||n.forEach((function(n){var e,t,r;null===(r=null===(e=n.parentElement)||void 0===e||null===(t=e.parentElement)||void 0===t?void 0:t.closest("foreignObject"))||void 0===r||r.classList.add("searched")})),n[e].classList.add("highlight")}(i,e),null===(a=u.zoomPanPinch)||void 0===a||a.setTransform(f,d,1)}else t(0);return function(){o.value||t(0)}}}),[o.debounced,u.zoomPanPinch,e,t]),[o,c,function(){return t((function(n){return n+1}))}]};function kn(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function _n(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Zn(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return kn(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return kn(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function zn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Dn(){var n=zn(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background: ",";\n  border-radius: 4px;\n  padding: 4px 6px;\n"]);return Dn=function(){return n},n}function Ln(){var n=zn(["\n  display: flex;\n"]);return Ln=function(){return n},n}function Gn(){var n=zn(["\n  background: none;\n  color: ",";\n  outline: none;\n  border: none;\n  width: 112px;\n  font-size: 14px;\n  font-weight: 500;\n  transition: width 0.3s;\n\n  &::-webkit-search-decoration,\n  &::-webkit-search-cancel-button,\n  &::-webkit-search-results-button,\n  &::-webkit-search-results-decoration {\n    display: none;\n  }\n\n  &:focus {\n    width: 208px;\n  }\n"]);return Gn=function(){return n},n}function Un(){var n=zn(["\n  display: grid;\n  background: none;\n  color: ",";\n  padding: 0;\n  min-height: unset;\n\n  &:hover {\n    box-shadow: none;\n  }\n"]);return Un=function(){return n},n}var Mn=a.ZP.div.withConfig({componentId:"sc-28d130cd-0"})(Dn(),(function(n){return n.theme.BACKGROUND_TERTIARY})),Vn=a.ZP.form.withConfig({componentId:"sc-28d130cd-1"})(Ln()),Kn=a.ZP.input.withConfig({componentId:"sc-28d130cd-2"})(Gn(),(function(n){return n.theme.TEXT_NORMAL})),Bn=a.ZP.button.withConfig({componentId:"sc-28d130cd-3"})(Un(),(function(n){return n.theme.INTERACTIVE_NORMAL})),Jn=function(){var n=Zn(Tn(),3),e=n[0],t=n[1],i=n[2];return(0,r.jsxs)(Mn,{children:[(0,r.jsx)(Vn,{onSubmit:function(n){n.preventDefault(),i()},children:(0,r.jsx)(Kn,{type:"text",value:e.value,onChange:function(n){return t((function(e){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){_n(n,e,t[e])}))}return n}({},e,{value:n.target.value})}))},placeholder:"Search Node"})}),(0,r.jsx)(Bn,{"aria-label":"search",onClick:function(){return t({value:"",debounced:""})},children:e.value?(0,r.jsx)(Sn.Lp2,{size:18}):(0,r.jsx)(d.RB5,{size:18})})]})};function Yn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Hn(){var n=Yn(["\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  flex-direction: row-reverse;\n  height: 28px;\n  padding: 4px 16px;\n  background: ",";\n  color: ",";\n\n  box-shadow: 0 1px 0px ",";\n"]);return Hn=function(){return n},n}function Fn(){var n=Yn(["\n  display: grid;\n  place-content: center;\n  font-size: 20px;\n  background: none;\n  color: ",";\n\n  &:hover {\n    color: ",";\n    opacity: 1;\n    box-shadow: none;\n  }\n"]);return Fn=function(){return n},n}var Xn=a.ZP.div.withConfig({componentId:"sc-4737be99-0"})(Hn(),(function(n){return n.theme.BACKGROUND_PRIMARY}),(function(n){return n.theme.SILVER}),(function(n){return n.theme.BACKGROUND_TERTIARY})),$n=a.ZP.button.withConfig({componentId:"sc-4737be99-1"})(Fn(),(function(n){return n.theme.INTERACTIVE_NORMAL}),(function(n){return n.theme.INTERACTIVE_HOVER})),Wn=function(){var n=(0,C.ZR)(),e=n.settings,t=n.dispatch;return(0,r.jsxs)(Xn,{children:[(0,r.jsx)($n,{"aria-label":"fullscreen",onClick:function(){return t({type:O.n.TOGGLE_DOCK})},children:(0,r.jsx)(d.vju,{})}),(0,r.jsx)($n,{"aria-label":"switch theme",onClick:function(){return t({type:O.n.TOGGLE_THEME})},children:e.lightmode?(0,r.jsx)(In.Fxr,{}):(0,r.jsx)(In.YGJ,{})}),(0,r.jsx)(Jn,{}),(0,r.jsx)($n,{"aria-label":"save",onClick:function(){(0,Cn.wu)(document.querySelector("svg[id*='ref']"),{filename:"jsonvisio.com",printDate:!0})},children:(0,r.jsx)(En._hL,{})}),(0,r.jsx)($n,{"aria-label":"center canvas",onClick:function(){return t({type:O.n.CENTER_VIEW})},children:(0,r.jsx)(An.XIv,{})}),(0,r.jsx)($n,{"aria-label":"zoom out",onClick:function(){return t({type:O.n.ZOOM_OUT})},children:(0,r.jsx)(d.ywL,{})}),(0,r.jsx)($n,{"aria-label":"zoom in",onClick:function(){return t({type:O.n.ZOOM_IN})},children:(0,r.jsx)(d.Lfi,{})})]})},qn=t(8188);function Qn(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function ne(){var n=Qn(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 12px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  cursor: pointer;\n"]);return ne=function(){return n},n}function ee(){var n=Qn(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  width: ",";\n  height: ",";\n  min-height: 50;\n  color: ",";\n"]);return ee=function(){return n},n}function te(){var n=Qn(['\n  pointer-events: none;\n\n  * {\n    font-family: "Roboto Mono", monospace;\n  }\n\n  &.searched {\n    border: 2px solid ',";\n    border-radius: 2px;\n  }\n\n  .highlight {\n    background-color: rgba(255, 0, 255, 0.5);\n    filter: hue-rotate();\n  }\n"]);return te=function(){return n},n}function re(){var n=Qn(["\n  font-weight: 500;\n  color: ",";\n"]);return re=function(){return n},n}function ie(){var n=Qn(["\n  height: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 auto;\n  width: ",";\n"]);return ie=function(){return n},n}var oe=a.ZP.div.withConfig({componentId:"sc-233a619e-0"})(ne()),ce=a.ZP.pre.withConfig({componentId:"sc-233a619e-1"})(ee(),(function(n){return n.width}),(function(n){return n.height}),(function(n){return n.theme.TEXT_NORMAL})),ue=a.ZP.foreignObject.withConfig({componentId:"sc-233a619e-2"})(te(),(function(n){return n.theme.TEXT_POSITIVE})),ae=a.ZP.span.withConfig({componentId:"sc-233a619e-3"})(re(),(function(n){var e=n.theme,t=n.objectKey;return n.parent?e.NODE_KEY:t?"#5c87ff":e.TEXT_POSITIVE})),le=a.ZP.span.withConfig({componentId:"sc-233a619e-4"})(ie(),(function(n){var e=n.width;return"".concat(e-20,"px")})),se=function(n){var e=n.width,t=n.height,i=n.value,o=n.x,c=n.y;return(0,r.jsx)(ue,{width:e,height:t,x:0,y:0,children:(0,r.jsx)(oe,{children:(0,r.jsx)(ce,{width:e,height:t,children:i.map((function(n,t){return n[1]&&(0,r.jsxs)(le,{"data-key":n[1],"data-x":o,"data-y":c,width:e,children:[(0,r.jsxs)(ae,{objectKey:!0,children:[n[0],": "]}),n[1]]},t)}))})})})},fe=function(n){var e=n.width,t=n.height,i=n.value,o=n.isParent,c=void 0!==o&&o,u=n.x,a=n.y;return(0,r.jsx)(ue,{width:e,height:t,x:0,y:0,children:(0,r.jsx)(oe,{children:(0,r.jsx)(ce,{width:e,height:t,children:(0,r.jsx)(ae,{"data-x":u,"data-y":a,"data-key":i,parent:c,children:i})})})})};function de(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var he={fill:"transparent",stroke:"transparent",strokeWidth:0},pe=function(n){var e=n.properties;return(0,r.jsx)(qn.Node,function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){de(n,e,t[e])}))}return n}({},n,{label:(0,r.jsx)(qn.Label,{style:he}),children:function(){var t,i,o=n.width,c=n.height;if(t=e.text,null!=(i=Object)&&"undefined"!==typeof Symbol&&i[Symbol.hasInstance]?i[Symbol.hasInstance](t):t instanceof i){var u=Object.entries(e.text);return(0,r.jsx)(se,{x:n.x,y:n.y,width:o,height:c,value:u})}return(0,r.jsx)(fe,{isParent:e.data.isParent,width:o,height:c,value:e.text,x:n.x,y:n.y})}}))},be=t(1676);function me(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function ve(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return me(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return me(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var ge=function(){var n=(0,C.ZR)(),e=n.json,t=n.settings,o=ve(i.useState([]),2),c=o[0],u=o[1],a=ve(i.useState([]),2),l=a[0],s=a[1],f=ve(i.useState({width:2e3,height:2e3}),2),d=f[0],h=f[1];i.useEffect((function(){var n=(0,be.h)(e,t.expand),r=n.nodes,i=n.edges;u(r),s(i)}),[e,t.expand]);return(0,r.jsx)(qn.Canvas,{nodes:c,edges:l,maxWidth:d.width,maxHeight:d.height,direction:t.layout,onCanvasClick:function(){var n=document.querySelector("input:focus");n&&n.blur()},onLayoutChange:function(n){n.width&&n.height&&h({width:n.width,height:n.height})},node:pe,zoomable:!1,readonly:!0},t.layout)};function xe(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function ye(){var n=xe(["\n  position: relative;\n"]);return ye=function(){return n},n}function je(){var n=xe(["\n  position: absolute;\n  width: 100%;\n  height: calc(100vh - 36px);\n\n  :active {\n    cursor: move;\n  }\n\n  rect {\n    fill: ",";\n  }\n"]);return je=function(){return n},n}var we=a.ZP.div.withConfig({componentId:"sc-457442d4-0"})(ye()),Oe=a.ZP.div.withConfig({componentId:"sc-457442d4-1"})(je(),(function(n){return n.theme.BACKGROUND_NODE})),Ce={step:.05},Ee=i.memo((function(){var n=(0,C.ZR)().dispatch;return(0,r.jsxs)(we,{children:[(0,r.jsx)(Wn,{}),(0,r.jsx)(Oe,{children:(0,r.jsx)(On.d$,{maxScale:1.8,minScale:.4,initialScale:.9,wheel:Ce,onInit:function(e){n({type:O.n.SET_ZOOM_PAN_PICNH_REF,payload:e})},children:(0,r.jsx)(On.Uv,{wrapperStyle:{width:"100%",height:"100%",overflow:"hidden"},children:(0,r.jsx)(ge,{})})})})]})})),Ie=t(9604),Ae=t(8485);function Se(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Pe(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Re(){var n=Pe(["\n  z-index: 5;\n"]);return Re=function(){return n},n}function Ne(){var n=Pe(["\n  display: flex;\n  width: 100%;\n  padding: 4px 16px;\n  height: 36px;\n  border-radius: 0;\n  justify-content: space-between;\n  align-items: center;\n  color: ",";\n  pointer-events: ",";\n  background: ",";\n  box-shadow: 0 1px 0px ",";\n  cursor: pointer;\n\n  &:hover {\n    color: ",";\n    box-shadow: none;\n  }\n"]);return Ne=function(){return n},n}function Te(){var n=Pe(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 500;\n  gap: 10px;\n  font-size: 16px;\n"]);return Te=function(){return n},n}function ke(){var n=Pe(["\n  color: ",";\n  border-bottom: 1px solid ",";\n  font-size: 12px;\n  padding: 12px;\n  margin: 0;\n  word-wrap: break-word;\n  white-space: pre-line;\n"]);return ke=function(){return n},n}var _e=a.ZP.div.withConfig({componentId:"sc-ac28434b-0"})(Re()),Ze=a.ZP.button.withConfig({componentId:"sc-ac28434b-1"})(Ne(),(function(n){var e=n.theme;return n.error?e.TEXT_DANGER:e.TEXT_POSITIVE}),(function(n){return!n.error&&"none"}),(function(n){return n.theme.BACKGROUND_SECONDARY}),(function(n){return n.theme.BACKGROUND_TERTIARY}),(function(n){return n.theme.TEXT_DANGER})),ze=a.ZP.span.withConfig({componentId:"sc-ac28434b-2"})(Te()),De=a.ZP.pre.withConfig({componentId:"sc-ac28434b-3"})(ke(),(function(n){return n.theme.TEXT_DANGER}),(function(n){return n.theme.SILVER_DARK})),Le=function(n){var e=n.error,t=n.setError;return(0,r.jsxs)(_e,{children:[(0,r.jsxs)(Ze,{error:!!e.message,onClick:function(){return t((function(n){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){Se(n,e,t[e])}))}return n}({},n,{isExpanded:!n.isExpanded})}))},children:[(0,r.jsxs)(ze,{children:[e.message?(0,r.jsx)(An.pKf,{size:20}):(0,r.jsx)(An.S5G,{size:20}),e.message?"Error":"JSON Valid"]}),e.message&&(e.isExpanded?(0,r.jsx)(An.Faw,{size:22}):(0,r.jsx)(An.Yc6,{size:22}))]}),e.isExpanded&&e.message&&(0,r.jsx)(De,{children:e.message})]})};function Ge(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function Ue(){var n=Ge(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: grid;\n  place-content: center;\n  width: 100%;\n  height: 100vh;\n  text-align: center;\n  background: ",";\n  z-index: 10;\n"]);return Ue=function(){return n},n}function Me(){var n=Ge(["\n  font-weight: 600;\n  font-size: 56px;\n  pointer-events: none;\n  margin-bottom: 10px;\n"]);return Me=function(){return n},n}function Ve(){var n=Ge(["\n  color: #faa81a;\n"]);return Ve=function(){return n},n}function Ke(){var n=Ge(["\n  color: #b9bbbe;\n  font-size: 24px;\n  font-weight: 500;\n"]);return Ke=function(){return n},n}var Be=a.ZP.div.withConfig({componentId:"sc-40c9a20d-0"})(Ue(),(function(n){return n.theme.BLACK_DARK})),Je=a.ZP.h2.withConfig({componentId:"sc-40c9a20d-1"})(Me()),Ye=a.ZP.span.withConfig({componentId:"sc-40c9a20d-2"})(Ve()),He=a.ZP.div.withConfig({componentId:"sc-40c9a20d-3"})(Ke()),Fe=function(n){var e=n.message;return(0,r.jsxs)(Be,{children:[(0,r.jsxs)(Je,{children:[(0,r.jsx)(Ye,{children:"JSON"})," Visio"]}),(0,r.jsx)(He,{children:null!==e&&void 0!==e?e:"Preparing the environment for you..."})]})};function Xe(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function $e(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function We(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})))),r.forEach((function(e){$e(n,e,t[e])}))}return n}function qe(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,i,o=[],c=!0,u=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(a){u=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(u)throw i}}return o}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return Xe(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Xe(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Qe(){var n,e,t=(n=["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n  user-select: none;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return Qe=function(){return t},t}var nt=a.ZP.div.withConfig({componentId:"sc-c24f997-0"})(Qe()),et={formatOnPaste:!0,minimap:{enabled:!1}},tt=function(){var n=(0,C.ZR)(),e=n.json,t=n.settings,o=n.dispatch,c=qe(i.useState(""),2),u=c[0],a=c[1],l=qe(i.useState({message:"",isExpanded:!0}),2),s=l[0],f=l[1],d=i.useMemo((function(){return t.lightmode?"light":"vs-dark"}),[t.lightmode]);return i.useEffect((function(){a(JSON.stringify(JSON.parse(e),null,2))}),[e]),i.useEffect((function(){var n=setTimeout((function(){try{if(!u)return f((function(n){return We({},n,{message:""})})),o({type:O.n.SET_JSON,payload:"[]"});(0,Ae.Z)(u),o({type:O.n.SET_JSON,payload:u}),f((function(n){return We({},n,{message:""})}))}catch(n){f((function(e){return We({},e,{message:n.message})}))}}),1500);return function(){return clearTimeout(n)}}),[u,o]),(0,r.jsxs)(nt,{children:[(0,r.jsx)(Le,{error:s,setError:f}),(0,r.jsx)(Ie.ZP,{height:"100%",defaultLanguage:"json",value:u,theme:d,options:et,loading:(0,r.jsx)(Fe,{message:"Loading Editor..."}),onChange:function(n){return a(n)}})]})};function rt(){var n,e,t=(n=["\n  display: none;\n\n  @media only screen and (max-width: 568px) {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    background: ",";\n    color: ",';\n    width: 100%;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n\n    button {\n      margin-top: 60px;\n    }\n\n    &::before {\n      content: "Uh, oh!";\n      font-weight: 600;\n      font-size: 60px;\n      opacity: 0.6;\n    }\n  }\n'],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return rt=function(){return t},t}var it=a.ZP.div.withConfig({componentId:"sc-132d618-0"})(rt(),(function(n){return n.theme.BLACK_LIGHT}),(function(n){return n.theme.SILVER})),ot=function(){var n=(0,E.useRouter)();return(0,r.jsxs)(it,{children:["This app is not compatible with your device!",(0,r.jsx)(I.z,{className:"incompatible",onClick:function(){return n.push("/")},children:"Go Back"})]})},ct=t(524);t(7786);function ut(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function at(){var n=ut(["\n  display: flex;\n  height: 100vh;\n"]);return at=function(){return n},n}function lt(){var n=ut(["\n  width: 100%;\n  overflow: hidden;\n\n  @media only screen and (max-width: 568px) {\n    display: none;\n  }\n"]);return lt=function(){return n},n}function st(){var n=ut(["\n  position: relative !important;\n  display: flex;\n  background: ",";\n"]);return st=function(){return n},n}var ft=a.ZP.div.withConfig({componentId:"sc-dba5e242-0"})(at()),dt=a.ZP.div.withConfig({componentId:"sc-dba5e242-1"})(lt()),ht=(0,a.ZP)(ct.o).withConfig({componentId:"sc-dba5e242-2"})(st(),(function(n){return n.theme.BACKGROUND_SECONDARY})),pt=function(){var n=(0,C.ZR)().settings;return(0,r.jsxs)(ft,{children:[(0,r.jsx)(wn,{}),(0,r.jsx)(dt,{children:(0,r.jsxs)(ht,{children:[(0,r.jsx)(ct.o.Pane,{preferredSize:400,minSize:300,maxSize:600,visible:!n.hideEditor,children:(0,r.jsx)(tt,{})}),(0,r.jsx)(ct.o.Pane,{children:(0,r.jsx)(Ee,{})})]})}),(0,r.jsx)(ot,{})]})}}}]);