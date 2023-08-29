(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>o});var a=t(81),s=t.n(a),i=t(645),r=t.n(i)()(s());r.push([n.id,'body {\n  background-color: #ffebcd;\n}\n\nh1 {\n  color: #ff4742;\n}\n\nh2 {\n  text-align: center;\n}\n.list-menu {\n  list-style-type: none;\n  display: flex;\n  gap: 5px;\n}\n.list-menu img {\n  width: 32px;\n  height: 32px;\n}\n\n.cts {\n  font-weight: 700;\n}\n.box {\n  width: 70%;\n  background: rgba(255, 68, 68, 0.28);\n  padding: calc(2rem + 2vw);\n  border-radius: 1.2rem;\n  margin: 5rem auto;\n}\n\n.hidden {\n  display: none;\n}\n\n.navbar {\n  background-color: green;\n  display: flex;\n  justify-content: space-around;\n}\n\n.navbar-2 {\n  display: flex;\n  justify-content: space-between;\n  gap: 15px;\n}\n\n/* CSS */\n.btns {\n  background: #ff4742;\n  border: 1px solid #ff4742;\n  border-radius: 6px;\n  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;\n  box-sizing: border-box;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 16px;\n  min-height: 40px;\n  outline: 0;\n  padding: 12px 14px;\n  text-align: center;\n  text-rendering: geometricprecision;\n  text-transform: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n}\n\n.btns:hover,\n.btns:active {\n  background-color: initial;\n  background-position: 0 0;\n  color: #ff4742;\n}\n\n.btns:active {\n  opacity: 0.5;\n}\n',""]);const o=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,s,i){"string"==typeof n&&(n=[[null,n,void 0]]);var r={};if(a)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(r[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);a&&r[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),s&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=s):p[4]="".concat(s)),e.push(p))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var i={},r=[],o=0;o<n.length;o++){var c=n[o],l=a.base?c[0]+a.base:c[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=t(d),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=s(m,a);a.byIndex=o,e.splice(o,0,{identifier:d,updater:f,references:1})}r.push(d)}return r}function s(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,s){var i=a(n=n||[],s=s||{});return function(n){n=n||[];for(var r=0;r<i.length;r++){var o=t(i[r]);e[o].references--}for(var c=a(n,s),l=0;l<i.length;l++){var p=t(i[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var s=void 0!==t.layer;s&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,s&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var s=e[a];if(void 0!==s)return s.exports;var i=e[a]={id:a,exports:{}};return n[a](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n=document.createElement("div");document.getElementById("content");const e=document.createElement("div"),a=document.createElement("div");var s=t(379),i=t.n(s),r=t(795),o=t.n(r),c=t(569),l=t.n(c),p=t(565),d=t.n(p),u=t(216),m=t.n(u),f=t(589),g=t.n(f),h=t(426),v={};let b;v.styleTagTransform=g(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=o(),v.insertStyleElement=m(),i()(h.Z,v),h.Z&&h.Z.locals&&h.Z.locals;const y=document.getElementById("content"),x=document.createElement("div"),L=document.createElement("ul"),E=document.createElement("h1"),T=document.createElement("button"),C=document.createElement("button"),M=document.createElement("button");T.textContent="Home",C.textContent="Menu",M.textContent="Contact",T.classList.add("btns"),C.classList.add("btns"),M.classList.add("btns"),E.textContent="Tasty Food",x.classList.add("navbar"),L.classList.add("navbar-2"),y.append(x),x.append(E),x.append(L),L.append(T),L.append(C),L.append(M),document.querySelectorAll(".btns").forEach((t=>t.addEventListener("click",(function(t){b=t.target.innerText,"Home"===b?(e.innerHTML='\n  <h2>Welcome</h2>\n  <div class="box">\n  <h4>Hot fast food. Enjoy.</h4>\n  <ul><span class="cts">Timings:</span></ul>\n  <li><span class="cts">Sunday:</span> 8am - 8pm</li>\n  <li><span class="cts">Monday:</span> 6am - 6pm</li>\n  <li><span class="cts">Tuesday:</span> 6am - 6pm</li>\n    <li><span class="cts">Wednesday:</span> 6am - 6pm</li>\n  <li><span class="cts">Thursday:</span> 6am - 10pm</li>\n  <li><span class="cts">Friday:</span> 6am - 10pm</li>\n  <li><span class="cts">Saturday:</span> 8am - 10pm</li>\n  </ul>  </div>\n  ',e.classList.add("hidden"),y.append(e),e.classList.remove("hidden"),a.classList.add("hidden"),n.classList.add("hidden")):"Menu"===b?(n.innerHTML='\n      <h2>Here\'s Our Menu:</h2>\n      <div class ="box">\n      <ul>\n        <li class="list-menu"><img src="./imgs/cheeseburger.png" alt="Burger">\n        <p>Cheeseburger: $5</p></li>\n        <li class="list-menu"><img src="./imgs/pizza.png" alt="pizza"><p>Pepperoni Pizza: $10</p></li>\n        <li class="list-menu"><img src="./imgs/wine.png" alt="">\n        <p>Alcohol: $10</p></li>\n        <li class="list-menu"><img src="./imgs/water.png" alt="">\n        <p>Water: $20</p></li>\n        <li class="list-menu"><img src="./imgs/milkshake.png" alt="">\n        <p>Milkshake : $25</p></li>\n        <li class="list-menu"><img src="./imgs/spaguetti.png" alt="spaguetti">\n        <p>Pasta : $30</p></li>\n        <li class="list-menu"><img src="./imgs/ramen.png" alt="ramen">\n        <p>Ramen : $25</p></li>\n        <li class="list-menu"><img src="./imgs/cocoa.png" alt="cocoa">\n        <p>Hot chocolate: $15</p></li>\n        <li class="list-menu"><img src="./imgs/coffee.png" alt="coffee">\n        <p>Hot Tea/Coffee: $15</p></li>\n        <li class="list-menu"><img src="./imgs/coffee.png" alt="coffee">\n        <p>Black coffee: $20</p></li>\n      </ul></div>\n    ',n.classList.add("hidden"),y.append(n),n.classList.remove("hidden"),a.classList.add("hidden"),e.classList.add("hidden")):"Contact"===b&&(a.innerHTML='\n  <h2>Contact us</h2>\n  <div class="box">\n  <p><span class="cts">Address:</span> 711-2880 Nulla St.Mankato Mississippi 96522</p>\n  <p><span class="cts">Timimgs:</span> 7 a.m. to 9 p.m.</p>\n  <p><span class="cts">Telephone:</span>(257) 563-7401</p>\n  <p><span class="cts">Email:</span> tastyfood@bla.com</p>\n  </div>\n  ',a.classList.add("hidden"),y.append(a),n.classList.add("hidden"),a.classList.remove("hidden"),e.classList.add("hidden"))}))))})()})();