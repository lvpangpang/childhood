!function(e){function t(t){for(var r,i,u=t[0],l=t[1],c=t[2],s=0,d=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(f&&f(t);d.length;)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,u=1;u<n.length;u++){var l=n[u];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./";var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var f=l;a.push([21,1]),n()}({18:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),a=r(n(27));t.default=function(){return o.default.createElement(o.default.Fragment,null,o.default.createElement(a.default,null))}},19:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=i(n(0)),l=[{path:"/",component:u.default.lazy((function(){return Promise.resolve().then((function(){return a(n(30))}))}))},{path:"/about",component:u.default.lazy((function(){return Promise.resolve().then((function(){return a(n(36))}))}))},{path:"/detail",component:u.default.lazy((function(){return Promise.resolve().then((function(){return a(n(37))}))}))}];t.default=l},21:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(8),i=n.n(a),u=n(18),l=n.n(u);n(38);i.a.render(o.a.createElement(l.a,null),document.querySelector("#root"))},27:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n(0),o=n.n(r),a=n(1),i=n(10),u=n(41),l=n(40),c=(n(28),n(19)),f=n.n(c),s={PUSH:"forward",POP:"back"},d=Object(a.o)((function(e){var t=e.location,n=e.history;return o.a.createElement(r.Suspense,{fallback:""},o.a.createElement(u.a,{className:"router-wrapper-box",childFactory:function(e){return o.a.cloneElement(e,{classNames:s[n.action]})}},o.a.createElement(l.a,{timeout:500,key:t.pathname},o.a.createElement(a.g,{location:t},f.a.map((function(e){return o.a.createElement(a.d,{key:e.path,exact:!0,path:e.path,component:e.component})}))))))}));function p(){return o.a.createElement(i.BrowserRouter,null,o.a.createElement(d,null))}},28:function(e,t,n){var r=n(15),o=n(29);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},29:function(e,t,n){(t=n(16)(!1)).push([e.i,".router-wrapper-box {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n  background: #fff;\n  overflow: hidden;\n}\n.router-wrapper-box .forward-enter {\n  opacity: 0;\n  transform: translateX(100%);\n}\n.router-wrapper-box .forward-enter-active {\n  opacity: 1;\n  transform: translateX(0);\n  transition: all 500ms;\n}\n.router-wrapper-box .forward-exit {\n  opacity: 1;\n  transform: translateX(0);\n}\n.router-wrapper-box .forward-exit-active {\n  opacity: 0;\n  transform: translateX(-100%);\n  transition: all 500ms;\n}\n.router-wrapper-box .back-enter {\n  opacity: 0;\n  transform: translateX(-100%);\n}\n.router-wrapper-box .back-enter-active {\n  opacity: 1;\n  transform: translateX(0);\n  transition: all 500ms;\n}\n.router-wrapper-box .back-exit {\n  opacity: 1;\n  transform: translateX(0);\n}\n.router-wrapper-box .back-exit-active {\n  opacity: 0;\n  transform: translate(100%);\n  transition: all 500ms;\n}\n",""]),e.exports=t},30:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),a=n(10);t.default=function(){return o.default.createElement("div",{style:i.container},o.default.createElement("h1",{style:i.titleText},"This is HomePage"),o.default.createElement("div",{style:i.btnGroup},o.default.createElement(a.Link,{to:"/about"},"About")))};var i={container:{height:"100%",backgroundColor:"#6d6d12"},titleText:{textAlign:"center"},btnGroup:{display:"flex",flexDirection:"row",justifyContent:"space-around"}}},36:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0)),a=n(10);t.default=function(e){return o.default.createElement("div",{style:i.container},o.default.createElement("h1",{style:i.titleText},"This is AboutPage"),o.default.createElement("div",{style:i.btnGroup},o.default.createElement(a.Link,{to:"detail"},"Detail"),o.default.createElement("div",{onClick:function(){e.history.goBack()}},"返回Index")))};var i={container:{height:"100%",backgroundColor:"#6D4DC2"},titleText:{color:"#FFF",textAlign:"center"},btnGroup:{display:"flex",flexDirection:"row",justifyContent:"center"}}},37:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(0));t.default=function(e){return o.default.createElement("div",{style:a.container},o.default.createElement("h1",{style:a.titleText},"This is DetailPage"),o.default.createElement("div",{style:a.btnGroup},o.default.createElement("div",{onClick:function(){e.history.goBack()}},"返回About")))};var a={container:{height:"100%",backgroundColor:"#80D4AC"},titleText:{color:"#FFF",textAlign:"center"},btnGroup:{display:"flex",flexDirection:"row",justifyContent:"center"}}},38:function(e,t,n){var r=n(15),o=n(39);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1};r(o,a);e.exports=o.locals||{}},39:function(e,t,n){(t=n(16)(!1)).push([e.i,"* {\n  padding: 0;\n  margin: 0;\n}\n",""]),e.exports=t}});