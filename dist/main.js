(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(81),a=t.n(o),r=t(645),i=t.n(r),c=t(667),d=t.n(c),s=new URL(t(791),t.b),l=i()(a()),p=d()(s);l.push([n.id,"body {\n    display: flex;\n    flex-direction: column;\n    margin: 0px;\n}\n\n.header-container {\n    background-color: rgba(0,0,0,0.6);\n    height: 300px;\n    display: flex;\n    align-items: flex-end;\n}\n\n.hero-container {\n    background-image: url("+p+");\n    height: 300px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.header {\n    font-family: sans-serif;\n    color: #fff1e1;\n    font-size: 60px;\n    font-weight: 700;\n    padding-left: 80px;\n}\n\n.text-container {\n    background-color:#fff1e1;\n    padding-bottom: 80px;\n}\n\n.main-text {\n    font-family: sans-serif;\n    font-size: 24px;\n    text-align: center;\n    padding-top: 80px;\n    padding-bottom: 80px;\n    margin-top: 0px;\n    padding-left: 50px;\n    padding-right: 50px;\n    color: #1d3c45\n}\n\n.tabs-container {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color:#fff1e1;\n}\n\nbutton {\n    background-color: #fff1e1;\n    padding-left: 100px;\n    padding-right: 100px;\n    border: none;\n    height: 50px;\n    font-family: sans-serif;\n    font-size: 20px;\n    font-weight: bold;\n    color: #1d3c45;\n    border-radius: 0px;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: #1d3c45;\n    color: #fff1e1;\n}\n\n.content-container {\n    padding-left: 200px;\n    padding-right: 200px;\n    background-color: #d2601a;\n    padding-bottom: 40px;\n}\n\n.site-header {\n    padding-left: 200px;\n    padding-right: 200px;\n    background-color: #d2601a;\n    padding-top: 20px;\n}\n\n.hours-header {\n    font-family: sans-serif;\n    font-size: 22px;\n    color: #1d3c45;\n}\n\n.location-header {\n    font-family: sans-serif;\n    font-size: 22px;\n    color: #1d3c45;\n    text-align: start;\n}\n\n.details-container {\n    display: flex;\n    margin-left: 50px;\n    margin-right: 50px;\n    justify-content: center;\n    align-items: flex-start;\n    gap: 100px;\n}\n\n.location-container,\n    .hours-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: solid 5px #1d3c45;\n    width: 320px;\n    height: 250px;\n}\n\nli {\n    list-style-type: none;\n    font-family: sans-serif;\n    font-size: 18px;\n    color: #1d3c45;\n}\n\nul {\n    padding-left: 0px;\n}\n\n.location-details {\n    font-family: sans-serif;\n    font-size: 18px;\n    color: #1d3c45;\n    padding-left: 15px;\n    padding: 15px;\n    text-align: center;\n}\n\n.footer-text {\n    text-align: center;\n    margin: 0px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    color: #1d3c45;\n    font-family: sans-serif;\n    font-weight: bold;\n}\n\n.site-footer {\n    background-color: #fff1e1;\n}\n\n.home-page {\n    display: flex;\n}",""]);const u=l},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,a,r){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},i=[],c=0;c<n.length;c++){var d=n[c],s=o.base?d[0]+o.base:d[0],l=r[s]||0,p="".concat(s," ").concat(l);r[s]=l+1;var u=t(p),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=a(f,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,a){var r=o(n=n||[],a=a||{});return function(n){n=n||[];for(var i=0;i<r.length;i++){var c=t(r[i]);e[c].references--}for(var d=o(n,a),s=0;s<r.length;s++){var l=t(r[s]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}r=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},791:(n,e,t)=>{n.exports=t.p+"256c64bd55c44073d523.jpg"}},e={};function t(o){var a=e[o];if(void 0!==a)return a.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),o=t(795),a=t.n(o),r=t(569),i=t.n(r),c=t(565),d=t.n(c),s=t(216),l=t.n(s),p=t(589),u=t.n(p),f=t(426),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=(()=>{const n=document.querySelector("#content"),e=document.createElement("div"),t=document.createElement("div");e.classList.add("site-header"),n.appendChild(e),e.appendChild(t),t.classList.add("tabs-container");const o=document.createElement("button");t.appendChild(o);const a=document.createElement("button");t.appendChild(a);const r=document.createElement("button");return t.appendChild(r),o.textContent="Home",a.textContent="Menu",r.textContent="Contact",{content:n,tab1:o,tab2:a,tab3:r}})(),g=(()=>{const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("home-page"),n.appendChild(e);const t=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div");return e.appendChild(t),t.appendChild(a),a.appendChild(o),t.appendChild(r),t.classList.add("content-container"),o.classList.add("header-container"),a.classList.add("hero-container"),r.classList.add("text-container"),{content:n,homePage:e,contentContainer:t,headerContainer:o,heroContainer:a,textContainer:r}})(),x=((()=>{const n=document.createElement("h1");g.headerContainer.appendChild(n),n.classList.add("header"),n.textContent="Pancakes galore"})(),(()=>{const n=document.createElement("h2");g.textContainer.appendChild(n),n.classList.add("main-text"),n.textContent="This is the best pancake restaurant in town. All the best pancakes at the lowest price! We freshly make our pancakes on site, so they always taste fresh."})(),(()=>{const n=document.createElement("div");n.classList.add("details-container"),g.textContainer.appendChild(n);const e=document.createElement("div");n.appendChild(e),e.classList.add("hours-container");const t=document.createElement("h3");e.appendChild(t),t.classList.add("hours-header"),t.textContent="Open hours";const o=document.createElement("ul");e.appendChild(o),o.classList.add("hours");const a=["Monday: 9-5","Tuesday: 9-5","Wednesday: 9-5","Thursday: 9-5","Friday: 9-5","Saturday: 8-6","Sunday: 8-6"];for(let n=0;n<=a.length-1;n++){const e=document.createElement("li");e.innerHTML=a[n],o.appendChild(e)}return{hoursContainer:e,detailsContainer:n}})()),v=((()=>{const n=document.createElement("div");x.detailsContainer.appendChild(n),n.classList.add("location-container");const e=document.createElement("h3");n.appendChild(e),e.classList.add("location-header"),e.textContent="Location";const t=document.createElement("p");t.textContent={address:"8 Example Street",city:"Example City",state:"QLD",fullAddress:function(){return this.address+", "+this.city+", "+this.state}}.fullAddress(),t.classList.add("location-details"),n.appendChild(t)})(),(()=>{const n=document.querySelector("#content"),e=document.createElement("div"),t=document.createElement("div");e.classList.add("site-footer"),n.appendChild(e),e.appendChild(t),t.classList.add("footer-content");const o=document.createElement("p");o.classList.add("footer-text"),o.textContent="Copyright © 2021",t.appendChild(o)})(),(()=>{const n=document.querySelector("#content"),e=document.createElement("div");e.classList.add("menu-page"),n.appendChild(e);const t=document.createElement("div"),o=document.createElement("div");return e.appendChild(t),t.classList.add("content-container"),o.classList.add("header-container"),{menuPage:e,contentContainer:t,headerContainer:o,content:n}})());m.tab1.addEventListener("click",(()=>{g.content.removeChild(g.homePage)})),addEventListener("load",(()=>{g.homePage.style.display="flex",v.content.removeChild(v.menuPage)}))})()})();