parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"HJD/":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setMain=void 0;var e=a(require("../main.html")),t=require("popmotion");function a(e){return e&&e.__esModule?e:{default:e}}var r=[!1,!1,!1,!1,!1],i=function(){var a=document.querySelector(".main-scene");a.style.display="flex",a.innerHTML=e.default;var r=document.querySelector(".buttons");(0,t.listen)(r,"click").start(c)};function c(e){var t;try{t=e.target.closest(".button").id}catch(i){return}switch(t){case"button1":r[1]=!r[1],r[2]=!r[2];break;case"button2":r[1]=!r[1],r[4]=!r[4];break;case"button3":r[0]=!r[0],r[2]=!r[2],r[4]=!r[4];break;case"button4":r[1]=!r[1],r[3]=!r[3],r[4]=!r[4];break;case"button5":r[0]=!r[0],r[4]=!r[4],r[3]=!r[3];break;default:return}var a=document.querySelectorAll(".bulb");r.forEach(function(e,t){a[t].style.opacity=e?1:.1}),n()}function n(){var e=document.querySelector(".test");switch(r.filter(function(e){return e}).length){case 5:e.style["-webkit-mask-image"]="radial-gradient(circle at 50% 10%, rgba(0,0,0,0.0) 0%, rgba(0,0,0,1) 100%)";var t=document.querySelector(".capoo");t.style["pointer-events"]="all",t.querySelector("img").onclick=function(){return alert("恭喜你成功惹，請用截圖換獎品XD")};break;case 4:e.style["-webkit-mask-image"]="radial-gradient(circle at 50% 10%, rgba(0,0,0,0.64) 0%, rgba(0,0,0,1) 36%)";break;case 3:e.style["-webkit-mask-image"]="radial-gradient(circle at 50% 10%, rgba(0,0,0,0.72) 0%, rgba(0,0,0,1) 28%)";break;case 2:e.style["-webkit-mask-image"]="radial-gradient(circle at 50% 10%, rgba(0,0,0,0.8) 0%, rgba(0,0,0,1) 20%)";break;case 1:e.style["-webkit-mask-image"]="radial-gradient(circle at 50% 10%, rgba(0,0,0,0.88) 0%, rgba(0,0,0,1) 12%)";break;default:e.style["-webkit-mask-image"]="radial-gradient(circle at 50% 10%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,1) 5%)"}}exports.setMain=i;
},{"../main.html":"TR9t","popmotion":"DEEp"}]},{},[], null)
//# sourceMappingURL=/main.c0f87f46.map