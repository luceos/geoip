module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=18)}([function(t,e){t.exports=flarum.core.compat["common/Model"]},,function(t,e,r){"use strict";function n(t,e){return(n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,n(t,e)}r.d(e,"a",(function(){return o}))},function(t,e){t.exports=flarum.core.compat["common/components/Tooltip"]},function(t,e){t.exports=flarum.core.compat["common/extend"]},function(t,e,r){t.exports=r(17)},,function(t,e){t.exports=flarum.core.compat["common/components/PostMeta"]},function(t,e,r){t.exports=function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var r=/^[a-z]{2}$/i;return function(n){if(!r.test(n)){var o=t(n);throw new TypeError("cc argument must be an ISO 3166-1 alpha-2 string, but got '".concat("string"===o?n:o,"' instead."))}var i=e(n.toUpperCase()).map((function(t){return t.charCodeAt()+127397}));return String.fromCodePoint.apply(String,e(i))}}()},function(t,e){
/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
t.exports=function(t){for(var e=[],r=0,n=0,o=0,i=t.length;o<i;)r=t.charCodeAt(o++),n?(e.push((65536+(n-55296<<10)+(r-56320)).toString(16)),n=0):55296<=r&&r<=56319?n=r:e.push(r.toString(16));return e.join("-")}},function(t,e){t.exports=flarum.core.compat["common/Component"]},function(t,e){t.exports=flarum.core.compat["common/components/LoadingIndicator"]},function(t,e){t.exports=flarum.core.compat["common/utils/mixin"]},,,,,function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function f(){}function p(){}function h(){}var d={};c(d,o,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(O([])));y&&y!==e&&r.call(y,o)&&(d=y);var v=h.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=h,c(v,"constructor",h),c(h,"constructor",p),p.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,a,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},g(b.prototype),c(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},g(v),c(v,a,"Generator"),c(v,o,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){"use strict";r.r(e);var n=r(4),o=r(7),i=r.n(o),a=r(0),c=r.n(a),u=r(3),s=r.n(u),l=r(8),f=r.n(l),p=r(9),h=r.n(p),d=r(2);function y(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}var v=r(5),g=r.n(v),b=r(10),w=r.n(b),x=r(11),j=r.n(x),O=function(){function t(t){return function(e){return new Promise((function(r,n){var o=document.createElement(t),i="body",a="src";switch(o.onload=function(){r(e)},o.onerror=function(){n(e)},t){case"script":o.async=!0;break;case"link":o.type="text/css",o.rel="stylesheet",a="href",i="head"}o[a]=e,document[i].appendChild(o)}))}}return{css:t("link"),js:t("script"),img:t("img")}}(),S=!1,_=function(){var t,e=(t=g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!S){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,O.css("https://unpkg.com/leaflet@1.5.1/dist/leaflet.css");case 4:return t.next=6,O.js("https://unpkg.com/leaflet@1.5.1/dist/leaflet.js");case 6:S=!0;case 7:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){y(i,n,o,a,c,"next",t)}function c(t){y(i,n,o,a,c,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}(),E=function(t){function e(){return t.apply(this,arguments)||this}Object(d.a)(e,t);var r=e.prototype;return r.oninit=function(e){t.prototype.oninit.call(this,e),this.data=null,this.search()},r.view=function(){return this.loading?m(j.a,{size:"medium"}):this.data?m("div",{id:"geoip-map",oncreate:this.configMap.bind(this)}):m("div",null)},r.search=function(){var t=this;if(!this.loading)return this.loading=!0,_().then(app.request({url:"https://nominatim.openstreetmap.org/search",method:"GET",params:{q:this.attrs.zip,countrycodes:this.attrs.country,limit:1,format:"json"}}).then((function(e){t.data=e[0],t.loading=!1,m.redraw()})))},r.configMap=function(t){if(this.data){var e=this.data,r=e.boundingbox,n=e.display_name;this.map=L.map(t.dom).setView([51.505,-.09],5),L.control.scale().addTo(this.map),L.tileLayer("https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}{r}.png?lang="+app.data.locale,{attribution:'<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',minZoom:1,maxZoom:19}).addTo(this.map),L.marker([r[0],r[2]]).addTo(this.map).bindPopup(n).openPopup()}},e}(w.a),A=r(12),C=function(t){function e(){return t.apply(this,arguments)||this}return Object(d.a)(e,t),e}(r.n(A)()(c.a,{countryCode:c.a.attribute("countryCode"),zipCode:c.a.attribute("zipCode"),isp:c.a.attribute("isp"),organization:c.a.attribute("organization"),threatLevel:c.a.attribute("threatLevel"),threatTypes:c.a.attribute("threatTypes",(function(t){return t&&JSON.parse(t)||Array.wrap})),error:c.a.attribute("error")}));function T(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return k(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var P=function(t){var e,r,n,o={description:t.organization()||t.isp()||t.error()||"",threat:t.threatTypes()&&t.threatTypes().join(", ")};if(t.countryCode()){var i=(e=t.countryCode(),r=f()(e),(n=h()(r))&&"https://twemoji.maxcdn.com/2/72x72/"+n+".png");o.image=i&&m(s.a,{text:t.countryCode()},m("img",{src:i,alt:t.countryCode(),height:"16",loading:"lazy"}))}return o},N=function(t){return function(){!function(t){var e=document.createElement("textarea");e.value=t,e.setAttribute("readonly",""),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e);var r=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);e.select(),document.execCommand("copy"),document.body.removeChild(e),r&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(r))}(t),app.alerts.show({type:"success"},app.translator.trans("fof-geoip.forum.alerts.ip_copied"))}};app.initializers.add("fof/geoip",(function(){app.store.models.ip_info=C,app.store.models.posts.prototype.ipInfo=c.a.hasOne("ip_info"),Object(n.extend)(i.a.prototype,"view",(function(t){if(this.attrs.post){var e=this.attrs.post.ipInfo(),r=this.attrs.post.data.attributes.ipAddress;if(e){var n=t.children.find((function(t){return t.attrs&&t.attrs.className&&t.attrs.className.includes("dropdown-menu")})).children.find((function(t){return"span"===t.tag&&t.attrs&&"PostMeta-ip"===t.attrs.className})),o=P(e),i=o.description,a=o.threat,c=o.image;delete n.text,n.children=[m(s.a,{text:i+(a?" ("+a+")":"")},m("span",{onclick:r&&N(r)},r))],c&&n.children.unshift(c),e.threatLevel&&(n.attrs["data-threat-level"]=e.threatLevel())}}}));var t=flarum.core.compat["fof/ban-ips/components/BanIPModal"];t&&Object(n.extend)(t.prototype,"content",(function(t){if(this.post&&this.post.ipAddress()){var e=this.post.ipInfo(),r=t.children.find((function(t){return t&&t.attrs&&t.attrs.className&&t.attrs.className.includes("Form-group")&&t.children&&Array.isArray(t.children)&&t.children.find((function(t){return"div"===t.tag}))}));if(e&&r){for(var n,o=T(r.children);!(n=o()).done;){var i=n.value.children.find((function(t){return t&&"label"===t.tag})),a=i&&i.children.find((function(t){return t&&"code"===t.tag})),c=a&&i.children.indexOf(a);if(a){var u=P(e),l=u.description,f=u.threat,p=u.image;a.attrs||(a.attrs={}),a.attrs["data-threat-level"]=e.threatLevel(),a.children[1]=m(s.a,{text:l+(f?" ("+f+")":"")},m("span",null,a.children[1])),p&&i.children.splice(c,0,p)}}e.zipCode()&&e.countryCode()&&t.children.splice(2,0,m("div",{className:"Form-group"},m(E,{zip:e.zipCode(),country:e.countryCode()})))}}}))}))}]);
//# sourceMappingURL=forum.js.map