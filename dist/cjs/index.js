"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("styled-components"),t=require("react");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var n=r(e),o=r(t),a=function(){return a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)};var i,u,c,l=n.default.button(c||(i=["\n  background: ",";\n"],u=["\n  background: ",";\n"],Object.defineProperty?Object.defineProperty(i,"raw",{value:u}):i.raw=u,c=i),(function(e){return e.primary?"hotpink":"none"}));exports.Button=function(e){var t=e.text,r=e.primary,n=void 0===r||r,i=e.disabled,u=e.onClick,c=e.size,p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["text","primary","disabled","onClick","size"]);return o.default.createElement(l,a({type:"button",primary:n,disabled:i,size:c,onClick:u},p),t)};
//# sourceMappingURL=index.js.map