/*! For license information please see forum.js.LICENSE.txt */
(()=>{var t={524:function(t){t.exports=function(){"use strict";function t(r){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(r)}function r(t){return function(t){if(Array.isArray(t)){for(var r=0,e=new Array(t.length);r<t.length;r++)e[r]=t[r];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var e=/^[a-z]{2}$/i;return function(n){if(!e.test(n)){var o=t(n);throw new TypeError("cc argument must be an ISO 3166-1 alpha-2 string, but got '".concat("string"===o?n:o,"' instead."))}var a=r(n.toUpperCase()).map((function(t){return t.charCodeAt()+127397}));return String.fromCodePoint.apply(String,r(a))}}()},696:t=>{t.exports=function(t){for(var r=[],e=0,n=0,o=0,a=t.length;o<a;)e=t.charCodeAt(o++),n?(r.push((65536+(n-55296<<10)+(e-56320)).toString(16)),n=0):55296<=e&&e<=56319?n=e:r.push(e.toString(16));return r.join("-")}},260:(t,r,e)=>{var n=e(896).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var r,e={},a=Object.prototype,i=a.hasOwnProperty,c=Object.defineProperty||function(t,r,e){t[r]=e.value},u="function"==typeof Symbol?Symbol:{},l=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function p(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{p({},"")}catch(r){p=function(t,r,e){return t[r]=e}}function d(t,r,e,n){var o=r&&r.prototype instanceof w?r:w,a=Object.create(o.prototype),i=new P(n||[]);return c(a,"_invoke",{value:O(t,e,i)}),a}function m(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var h="suspendedStart",y="suspendedYield",v="executing",g="completed",b={};function w(){}function x(){}function _(){}var L={};p(L,l,(function(){return this}));var I=Object.getPrototypeOf,j=I&&I(I(z([])));j&&j!==a&&i.call(j,l)&&(L=j);var S=_.prototype=w.prototype=Object.create(L);function A(t){["next","throw","return"].forEach((function(r){p(t,r,(function(t){return this._invoke(r,t)}))}))}function C(t,r){function e(o,a,c,u){var l=m(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==n(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):r.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return e("throw",t,c,u)}))}u(l.arg)}var o;c(this,"_invoke",{value:function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}})}function O(t,e,n){var o=h;return function(a,i){if(o===v)throw new Error("Generator is already running");if(o===g){if("throw"===a)throw i;return{value:r,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=E(c,n);if(u){if(u===b)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=m(t,e,n);if("normal"===l.type){if(o=n.done?g:y,l.arg===b)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=g,n.method="throw",n.arg=l.arg)}}}function E(t,e){var n=e.method,o=t.iterator[n];if(o===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=r,E(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var a=m(o,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,b;var i=a.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,b):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function k(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function T(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function z(t){if(t||""===t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(i.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}throw new TypeError(n(t)+" is not iterable")}return x.prototype=_,c(S,"constructor",{value:_,configurable:!0}),c(_,"constructor",{value:x,configurable:!0}),x.displayName=p(_,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===x||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,p(t,f,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},A(C.prototype),p(C.prototype,s,(function(){return this})),e.AsyncIterator=C,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new C(d(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},A(S),p(S,f,"Generator"),p(S,l,(function(){return this})),p(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=z,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),b},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),b}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;T(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:z(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),b}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},896:t=>{function r(e){return t.exports=r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,r(e)}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports},496:(t,r,e)=>{var n=e(260)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return t[n].call(a.exports,a,a.exports,e),a.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";e.r(n),e.d(n,{extend:()=>K});const t=flarum.core.compat["forum/app"];var r=e.n(t);const o=flarum.core.compat["common/extend"],a=flarum.core.compat["common/components/PostMeta"];var i=e.n(a);const c=flarum.core.compat["common/components/Tooltip"];var u=e.n(c),l=e(524),s=e.n(l),f=e(696),p=e.n(f),d=function(t){if(t.countryCode()){var r=function(t){var r=s()(t);if(!r)return null;var e=p()(r);return e?"https://cdn.jsdelivr.net/gh/twitter/twemoji@14/assets/72x72/"+e+".png":null}(t.countryCode());if(r)return m(u(),{text:t.countryCode()},m("img",{src:r,alt:t.countryCode(),height:"16",loading:"lazy"}))}return null},h=function(t){var r=function(t){return t.organization()||t.isp()||t.error()||""}(t),e=function(t){return t.threatTypes()&&t.threatTypes().join(", ")}(t);return{description:r,threat:e,image:d(t),zip:t.zipCode(),country:t.countryCode()}},y=function(t){return function(){!function(t){if(navigator.clipboard)navigator.clipboard.writeText(t).then((function(){}));else{var r=document.createElement("textarea");r.value=t,r.setAttribute("readonly",""),r.style.position="absolute",r.style.left="-9999px",document.body.appendChild(r);var e=document.getSelection(),n=e&&e.rangeCount>0?e.getRangeAt(0):null;r.select(),document.execCommand("copy"),document.body.removeChild(r),n&&e&&(e.removeAllRanges(),e.addRange(n))}}(t),r().alerts.show({type:"success"},r().translator.trans("fof-geoip.forum.alerts.ip_copied"))}};const v=flarum.core.compat["common/utils/ItemList"];var g=e.n(v);const b=flarum.core.compat["common/components/Button"];var w=e.n(b);function x(t,r){return x=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},x(t,r)}function _(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,x(t,r)}const I=flarum.core.compat["common/components/Modal"];var j=e.n(I);function S(t,r,e,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}var A=e(496),C=e.n(A);const O=flarum.core.compat["common/Component"];var E=e.n(O);const k=flarum.core.compat["common/components/LoadingIndicator"];var T=e.n(k);const P=function(){function t(t){return function(r){return new Promise((function(e,n){var o=document.createElement(t),a="body",i="src";switch(o.onload=function(){e(r)},o.onerror=function(){n(r)},t){case"script":o.async=!0;break;case"link":o.type="text/css",o.rel="stylesheet",i="href",a="head"}o[i]=r,document[a].appendChild(o)}))}}return{css:t("link"),js:t("script"),img:t("img")}}();var z=!1,N=function(){var t,r=(t=C().mark((function t(){return C().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!z){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,P.css("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css");case 4:return t.next=6,P.js("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js");case 6:z=!0;case 7:case"end":return t.stop()}}),t)})),function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function i(t){S(a,n,o,i,c,"next",t)}function c(t){S(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(){return r.apply(this,arguments)}}(),M=function(t){function e(){return t.apply(this,arguments)||this}_(e,t);var n=e.prototype;return n.oninit=function(r){t.prototype.oninit.call(this,r),this.ipInfo=this.attrs.ipInfo,this.data=null,this.ipInfo.latitude()&&this.ipInfo.longitude()?this.searchLatLon():this.ipInfo.zipCode()?this.searchZip():this.data={unknown:!0}},n.view=function(){return this.loading?m(T(),{size:"medium"}):this.data&&this.data.unknown?m("div",{className:"helpText"},r().translator.trans("fof-geoip.forum.map_modal.not_enough_data")):this.data?m("div",{id:"geoip-map",oncreate:this.configMap.bind(this)}):m("div",null)},n.searchLatLon=function(){var t=this;if(!this.loading)return this.loading=!0,N().then(r().request({url:"https://nominatim.openstreetmap.org/reverse",method:"GET",params:{lat:this.ipInfo.latitude(),lon:this.ipInfo.longitude(),format:"json"}}).then((function(r){t.data=r,t.loading=!1,m.redraw()})))},n.searchZip=function(){var t=this;if(!this.loading)return this.loading=!0,N().then(r().request({url:"https://nominatim.openstreetmap.org/search",method:"GET",params:{q:this.ipInfo.zipCode(),countrycodes:this.ipInfo.countryCode(),limit:1,format:"json"}}).then((function(r){t.data=r[0],t.loading=!1,m.redraw()})))},n.configMap=function(t){if(this.data){var r=this.data,e=r.boundingbox;r.display_name,this.map=L.map(t.dom).setView([51.505,-.09],5),L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map),L.marker([e[0],e[2]]).addTo(this.map).openPopup()}},e}(E());const G=flarum.core.compat["common/components/LabelValue"];var F=e.n(G),B=function(t){function e(){for(var r,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return(r=t.call.apply(t,[this].concat(n))||this).ipInfo=void 0,r}_(e,t);var n=e.prototype;return n.oninit=function(r){t.prototype.oninit.call(this,r),this.ipInfo=this.attrs.ipInfo,void 0===this.ipInfo&&this.loadIpInfo()},n.className=function(){return"MapModal Modal--medium"},n.loadIpInfo=function(){var t=this;r().store.find("ip_info",encodeURIComponent(this.attrs.ipAddr)).then((function(r){t.ipInfo=r,m.redraw()})).catch((function(t){console.error("Failed to load IP information from the store",t)}))},n.title=function(){return r().translator.trans("fof-geoip.forum.map_modal.title")},n.content=function(){var t=this.ipInfo;return t?m("div",{className:"Modal-body"},m("div",{className:"IPDetails"},m(F(),{label:r().translator.trans("fof-geoip.forum.map_modal.ip_address"),value:m("span",{className:"clickable-ip",onclick:y(this.attrs.ipAddr)},this.attrs.ipAddr)}),t.countryCode()&&m(F(),{label:r().translator.trans("fof-geoip.forum.map_modal.country_code"),value:t.countryCode()}),t.zipCode()&&m(F(),{label:r().translator.trans("fof-geoip.forum.map_modal.zip_code"),value:t.zipCode()}),t.isp()&&m(F(),{label:r().translator.trans("fof-geoip.forum.map_modal.isp"),value:t.isp()}),t.organization()&&m(F(),{label:r().translator.trans("fof-geoip.forum.map_modal.organization"),value:t.organization()}),t.as()&&m(F(),{label:r().translator.trans("fof-geoip.forum.map_modal.as"),value:t.as()}),m(F(),{label:r().translator.trans("fof-geoip.forum.map_modal.mobile"),value:t.mobile()?"yes":"no"}),t.threatLevel()&&m(F(),{label:r().translator.trans("fof-geoip.forum.map_modal.threat_level"),value:t.threatLevel()}),t.threatTypes().length>0&&m(F(),{label:r().translator.trans("fof-geoip.forum.map_modal.threat_types"),value:t.threatTypes().join(", ")}),t.error()&&m(F(),{label:r().translator.trans("fof-geoip.forum.map_modal.error"),value:t.error()})),m("hr",null),m("div",{id:"mapContainer"},m(M,{ipInfo:t}))):m("div",{className:"Modal-body"},m(T(),null))},e}(j());function R(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}const q=flarum.core.compat["forum/components/AccessTokensList"];var D=e.n(q);const U=flarum.core.compat["common/extenders"];var V=e.n(U);const Y=flarum.core.compat["common/Model"];var Z=e.n(Y),$=function(t){function r(){return t.apply(this,arguments)||this}_(r,t);var e=r.prototype;return e.id=function(){return Z().attribute("id").call(this)},e.countryCode=function(){return Z().attribute("countryCode").call(this)},e.zipCode=function(){return Z().attribute("zipCode").call(this)},e.latitude=function(){return Z().attribute("latitude").call(this)},e.longitude=function(){return Z().attribute("longitude").call(this)},e.isp=function(){return Z().attribute("isp").call(this)},e.organization=function(){return Z().attribute("organization").call(this)},e.as=function(){return Z().attribute("as").call(this)},e.mobile=function(){return Z().attribute("mobile").call(this)},e.threatLevel=function(){return Z().attribute("threatLevel").call(this)},e.threatTypes=function(){var t=Z().attribute("threatTypes").call(this);if(!t)return[];try{return JSON.parse(t)}catch(t){return[]}},e.error=function(){return Z().attribute("error").call(this)},e.dataProvider=function(){return Z().attribute("dataProvider").call(this)},e.createdAt=function(){return Z().attribute("createdAt",Z().transformDate).call(this)},e.updatedAt=function(){return Z().attribute("updatedAt",Z().transformDate).call(this)},r}(Z());const J=flarum.core.compat["common/models/Post"];var H=e.n(J);const K=[(new(V().Store)).add("ip_info",$),new(V().Model)(H()).hasOne("ip_info")];r().initializers.add("fof/geoip",(function(){var t;(0,o.extend)(i().prototype,"view",(function(t){var r=this.attrs.post;if(r){var e=r.ip_info();if(e){var n=t.children.find((function(t){var r;return null==(r=t.attrs)||null==(r=r.className)?void 0:r.includes("dropdown-menu")})).children.find((function(t){var r;return"span"===t.tag&&"PostMeta-ip"===(null==(r=t.attrs)?void 0:r.className)}));delete n.text,n.children=[m("div",{className:"ip-container"},this.ipItems().toArray())],e.threatLevel&&(n.attrs["data-threat-level"]=e.threatLevel())}}})),i().prototype.ipItems=function(){var t=new(g()),e=this.attrs.post,n=e.ip_info(),o=e.data.attributes.ipAddress;if(n&&o){var a=h(n),i=a.description,c=a.threat,l=a.image;t.add("ipInfo",m("div",{className:"ip-info"},l,m(u(),{text:i+" "+(c?"("+c+")":"")},m("span",{onclick:y(o)},o))),100),t.add("mapButton",m(u(),{text:r().translator.trans("fof-geoip.forum.map_button_label")},m(w(),{icon:"fas fa-map-marker-alt",className:"Button Button--icon Button--link",onclick:function(){return r().modal.show(B,{ipInfo:n,ipAddr:o})},"aria-label":r().translator.trans("fof-geoip.forum.map_button_label")})),90)}return t},(t=flarum.core.compat["fof/ban-ips/components/BanIPModal"])&&(0,o.extend)(t.prototype,"content",(function(t){if(this.post&&this.post.ipAddress()){var r=this.post.ip_info(),e=t.children.find((function(t){var r,e;return(null==t||null==(r=t.attrs)||null==(r=r.className)?void 0:r.includes("Form-group"))&&(null==(e=t.children)||null==e.find?void 0:e.find((function(t){return"div"===t.tag})))}));if(r&&e){for(var n,o=function(t,r){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,r){if(t){if("string"==typeof t)return R(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?R(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){e&&(t=e);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(e.children);!(n=o()).done;){var a=n.value.children.find((function(t){return"label"===(null==t?void 0:t.tag)})),i=a&&a.children.find((function(t){return"code"===(null==t?void 0:t.tag)})),c=i&&a.children.indexOf(i);if(i){var l=h(r),s=l.description,f=l.threat,p=l.image;i.attrs||(i.attrs={}),i.attrs["data-threat-level"]=r.threatLevel(),i.children[1]=m(u(),{text:s+(f?" ("+f+")":"")},m("span",null,i.children[1])),p&&a.children.splice(c,0,p)}}r.zipCode()&&r.countryCode()&&t.children.splice(2,0,m("div",{className:"Form-group"},m(M,{zip:r.zipCode(),country:r.countryCode()})))}}})),(0,o.extend)(D().prototype,"tokenActionItems",(function(t,e){var n=e.lastIpAddress();n&&t.add("geoip-info",m(w(),{className:"Button",onclick:function(){return r().modal.show(B,{ipAddr:n})},"aria-label":r().translator.trans("fof-geoip.forum.map_button_label")},r().translator.trans("fof-geoip.forum.map_button_label")),10)}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map