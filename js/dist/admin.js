module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=18)}([,function(t,e,n){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return r}))},function(t,e){t.exports=flarum.core.compat["components/Alert"]},,,function(t,e,n){"use strict";var r=/(?:https?:)?\/\/(?:(?:[\w-]+\.)+[\w/#@~.-]*)(?:\?(?:[\w&=.!,;$#%-]+)?)?/gi;t.exports=function(t){return(t||"").replace(r,(function(t){return'<a href="'+t+'">'+t+"</a>"}))}},,,,,,,function(t,e){t.exports=flarum.core.compat["components/ExtensionPage"]},function(t,e){t.exports=flarum.core.compat["helpers/humanTime"]},function(t,e){t.exports=flarum.core.compat["utils/extractText"]},function(t,e){t.exports=flarum.extensions["fof-components"]},,,function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(2),i=n.n(o),s=n(12),a=n.n(s),p=n(13),c=n.n(p),u=n(14),f=n.n(u),l=n(5),g=n.n(l),d=n(15).settings.items,b=d.BooleanItem,v=d.SelectItem,y=d.StringItem,_=function(t){function e(){return t.apply(this,arguments)||this}Object(r.a)(e,t);var n=e.prototype;return n.oninit=function(e){t.prototype.oninit.call(this,e)},n.content=function(){var t=this.setting("fof-geoip.service")(),e=1e3*Number(app.data.settings["fof-geoip.services."+t+".last_error_time"]),n=app.data.settings["fof-geoip.services."+t+".error"];return n&&(n=g()(n)),[m("div",{className:"container"},m("div",{className:"geopage"},m("div",{className:"Form-group"},m("label",null,app.translator.trans("fof-geoip.admin.settings.service_label")),v.component({options:app.data["fof-geoip.services"].reduce((function(t,e){return t[e]=app.translator.trans("fof-geoip.admin.settings.service_"+e+"_label"),t}),{}),name:"fof-geoip.service",setting:this.setting.bind(this),required:!0}),m("br",null),m("br",null),m("p",{className:"helpText"},t&&m.trust(g()(f()(app.translator.trans("fof-geoip.admin.settings.service_"+t+"_description")))))),n?i.a.component({className:"Form-group",dismissible:!1},[m("b",{style:{textTransform:"uppercase",marginRight:"5px"}},c()(e)),m.trust(n)]):"",["ipdata","ipstack"].includes(t)?[m(y,{name:"fof-geoip.services."+t+".access_key",setting:this.setting.bind(this),required:!0},app.translator.trans("fof-geoip.admin.settings.access_key_label"))]:[],"ipstack"===t?m("div",{className:"Form-group"},m(b,{name:"fof-geoip.services.ipstack.security",setting:this.setting.bind(this)},app.translator.trans("fof-geoip.admin.settings.security_label"))):[],this.submitButton()))]},e}(a.a);app.initializers.add("fof/geoip",(function(){app.extensionData.for("fof-geoip").registerPage(_)}))}]);
//# sourceMappingURL=admin.js.map