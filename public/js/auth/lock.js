(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"C5X/":function(t,e,r){"use strict";r.r(e);var n=r("kUDz"),o=r("l7An"),i=r("CJTH"),s=r("L2JU"),a=r("m/Fr"),c=r.n(a),u=r("SokU"),l=r.n(u);function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d={components:{Box:n.a,GuestHeader:o.a,GuestFooter:i.a,Avatar:l.a},data:function(){return{formData:{password:""},ProfileImageMale:c.a,formErrors:{},isLoading:!1}},computed:p(p({},Object(s.c)("config",["configs","uiConfigs","vars"])),Object(s.c)("user",["profile"])),methods:p(p({},Object(s.b)("user",["Logout","Unlock","SetLock","SetLastActivity"])),{},{submit:function(){var t=this;this.isLoading=!0;var e=this.$route.query;this.$gaEvent("engagement","unlock"),this.Unlock(this.formData).then((function(r){t.SetLastActivity(),t.SetLock(!1),t.$gaEvent("activity","unlocked");var n={name:"appDashboard"};e&&e.ref&&t.$router.resolve(e.ref)&&(n=t.$router.resolve(e.ref).route),t.$router.push(n)})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)}))},logout:function(){var t=this;this.isLoading=!0;var e=this.$route.query;this.$ga.event("engagement","logout","LockScreen"),this.Logout().then((function(){t.$ga.event("activity","loggedout");var r={name:"login"};e&&e.ref&&t.$router.resolve(e.ref)&&(r=t.$router.resolve(e.ref).route),t.$router.push(r)}))}})},h=(r("JSmg"),r("KHd+")),b=Object(h.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"guest-page"},[r("box",[r("animated-loader",{attrs:{"is-loading":t.isLoading,"loader-color":t.vars.loaderColor}}),t._v(" "),r("guest-header",[r("div",{staticClass:"d-flex flex-column justify-content-start align-items-center"},[r("avatar",{staticClass:"avatar-shadow",attrs:{username:t.profile.name?t.profile.name:null,src:t.profile.userThumb?t.profile.userThumb:t.profile.name?null:t.ProfileImageMale,"background-color":t.vars.colors.primary,color:t.vars.colors.white,size:100}}),t._v(" "),r("h4",{staticClass:"username mt-4"},[t._v("\n                    "+t._s(t.$t("general.greeting")+", "+t.profile.name)+"\n                ")])],1)]),t._v(" "),r("section",{attrs:{role:"main"}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("base-input",{staticClass:"mb-3",attrs:{"auto-focus":"",label:t.$t("auth.lock.props.password"),type:"password",name:"password","addon-left-icon":"fas fa-key",error:t.formErrors.password},on:{"update:error":function(e){return t.$set(t.formErrors,"password",e)}},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}}),t._v(" "),r("div",{staticClass:"text-center"},[r("base-button",{staticClass:"my-4 text-lg",attrs:{type:"submit",design:"primary",block:""}},[t._v(t._s(t.$t("general.unlock")))])],1),t._v(" "),r("div",{staticClass:"form-group m-b-0"},[r("div",{staticClass:"col-sm-12 text-center"},[r("h6",{staticClass:"text-uppercase"},[t._v(t._s(t.$t("general.or")))]),t._v(" "),r("p",[r("base-button",{attrs:{type:"button",design:"link"},on:{click:t.logout}},[r("i",{staticClass:"fas fa-power-off"}),r("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("auth.logout")))])])],1)])])],1)])],1),t._v(" "),t.configs.system?r("guest-footer",{attrs:{"footer-credit":t.configs.system.footerCredit,version:t.configs.system.version}}):t._e()],1)}),[],!1,null,null,null);e.default=b.exports},CJTH:function(t,e,r){"use strict";var n={props:["footerCredit","version"]},o=(r("b9rR"),r("KHd+")),i=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"guest-footer mt-2"},[e("p",{staticClass:"text-center text-white mb-0 py-3"},[this._v(this._s(this.footerCredit)+" "+this._s(this.$t("product.version"))+" "+this._s(this.version))])])}),[],!1,null,"739170b9",null);e.a=i.exports},DyxR:function(t,e,r){var n=r("J465");"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,o);n.locals&&(t.exports=n.locals)},DzPO:function(t,e,r){(e=t.exports=r("I1BE")(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Muli:300,400,600,700,800,900);",""]),e.push([t.i,".centered-box[data-v-7eb15e32]{flex-direction:column;width:90vw;margin:0 auto}.centered-box[data-v-7eb15e32],.powered-logo[data-v-7eb15e32]{display:flex;justify-content:center}.powered-logo[data-v-7eb15e32]{align-items:center;font-size:.8rem}.powered-logo span[data-v-7eb15e32]{line-height:10px}.powered-logo img[data-v-7eb15e32]{width:80px;margin-left:8px}@media (min-width:768px){.centered-box[data-v-7eb15e32]{width:400px}.centered-box.width-sm[data-v-7eb15e32]{width:350px}.centered-box.width-md[data-v-7eb15e32]{width:450px}.centered-box.width-xl[data-v-7eb15e32]{width:500px}.centered-box.width-xxl[data-v-7eb15e32]{width:550px}.centered-box.width-xxxl[data-v-7eb15e32]{width:600px}}",""])},J465:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,".avatar-shadow{box-shadow:0 3px 1px 1px rgba(0,0,0,.15),inset 0 2px 8px 0 rgba(0,0,0,.15)}",""])},JSmg:function(t,e,r){"use strict";var n=r("DyxR");r.n(n).a},SokU:function(t,e,r){t.exports=function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=9)}([function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){t.exports=!r(3)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var r=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=r)},function(t,e,r){var n=r(6),o=r(7);t.exports=function(t){return n(o(t))}},function(t,e,r){var n=r(30);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Avatar=void 0;var n=function(t){return t&&t.__esModule?t:{default:t}}(r(10));e.Avatar=n.default,e.default=n.default},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(12),o=r.n(n),i=r(41),s=r(11)(o.a,i.a,!1,null,null,null);e.default=s.exports},function(t,e){t.exports=function(t,e,r,n,o,i){var s,a=t=t||{},c=typeof t.default;"object"!==c&&"function"!==c||(s=t,a=t.default);var u,l="function"==typeof a?a.options:a;if(e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),r&&(l.functional=!0),o&&(l._scopeId=o),i?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},l._ssrRegister=u):n&&(u=n),u){var f=l.functional,p=f?l.render:l.beforeCreate;f?(l._injectStyles=u,l.render=function(t,e){return u.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,u):[u]}return{esModule:s,exports:a,options:l}}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(r(13));e.default={name:"avatar",props:{username:{type:String},initials:{type:String},backgroundColor:{type:String},color:{type:String},customStyle:{type:Object},inline:{type:Boolean},size:{type:Number,default:50},src:{type:String},rounded:{type:Boolean,default:!0},lighten:{type:Number,default:80}},data:function(){return{backgroundColors:["#F44336","#FF4081","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B"],imgError:!1}},mounted:function(){this.isImage||this.$emit("avatar-initials",this.username,this.userInitial)},computed:{background:function(){if(!this.isImage)return this.backgroundColor||this.randomBackgroundColor(this.username.length,this.backgroundColors)},fontColor:function(){if(!this.isImage)return this.color||this.lightenColor(this.background,this.lighten)},isImage:function(){return!this.imgError&&Boolean(this.src)},style:function(){var t={display:this.inline?"inline-flex":"flex",width:this.size+"px",height:this.size+"px",borderRadius:this.rounded?"50%":0,lineHeight:this.size+Math.floor(this.size/20)+"px",fontWeight:"bold",alignItems:"center",justifyContent:"center",textAlign:"center",userSelect:"none"},e={background:"transparent url('"+this.src+"') no-repeat scroll 0% 0% / "+this.size+"px "+this.size+"px content-box border-box"},r={backgroundColor:this.background,font:Math.floor(this.size/2.5)+"px/"+this.size+"px Helvetica, Arial, sans-serif",color:this.fontColor},o=this.isImage?e:r;return(0,n.default)(t,o),t},userInitial:function(){return this.isImage?"":this.initials||this.initial(this.username)}},methods:{initial:function(t){for(var e=t.split(/[ -]/),r="",n=0;n<e.length;n++)r+=e[n].charAt(0);return r.length>3&&-1!==r.search(/[A-Z]/)&&(r=r.replace(/[a-z]+/g,"")),r.substr(0,3).toUpperCase()},onImgError:function(t){this.imgError=!0},randomBackgroundColor:function(t,e){return e[t%e.length]},lightenColor:function(t,e){var r=!1;"#"===t[0]&&(t=t.slice(1),r=!0);var n=parseInt(t,16),o=(n>>16)+e;o>255?o=255:o<0&&(o=0);var i=(n>>8&255)+e;i>255?i=255:i<0&&(i=0);var s=(255&n)+e;return s>255?s=255:s<0&&(s=0),(r?"#":"")+(s|i<<8|o<<16).toString(16)}}}},function(t,e,r){t.exports={default:r(14),__esModule:!0}},function(t,e,r){r(15),t.exports=r(4).Object.assign},function(t,e,r){var n=r(16);n(n.S+n.F,"Object",{assign:r(26)})},function(t,e,r){var n=r(0),o=r(4),i=r(17),s=r(19),a=function(t,e,r){var c,u,l,f=t&a.F,p=t&a.G,g=t&a.S,d=t&a.P,h=t&a.B,b=t&a.W,v=p?o:o[e]||(o[e]={}),m=v.prototype,y=p?n:g?n[e]:(n[e]||{}).prototype;for(c in p&&(r=e),r)(u=!f&&y&&void 0!==y[c])&&c in v||(l=u?y[c]:r[c],v[c]=p&&"function"!=typeof y[c]?r[c]:h&&u?i(l,n):b&&y[c]==l?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):d&&"function"==typeof l?i(Function.call,l):l,d&&((v.virtual||(v.virtual={}))[c]=l,t&a.R&&m&&!m[c]&&s(m,c,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,e,r){var n=r(18);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){var n=r(20),o=r(25);t.exports=r(2)?function(t,e,r){return n.f(t,e,o(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(21),o=r(22),i=r(24),s=Object.defineProperty;e.f=r(2)?Object.defineProperty:function(t,e,r){if(n(t),e=i(e,!0),n(r),o)try{return s(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(1);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e,r){t.exports=!r(2)&&!r(3)((function(){return 7!=Object.defineProperty(r(23)("div"),"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(1),o=r(0).document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,r){var n=r(1);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){"use strict";var n=r(27),o=r(38),i=r(39),s=r(40),a=r(6),c=Object.assign;t.exports=!c||r(3)((function(){var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach((function(t){e[t]=t})),7!=c({},t)[r]||Object.keys(c({},e)).join("")!=n}))?function(t,e){for(var r=s(t),c=arguments.length,u=1,l=o.f,f=i.f;c>u;)for(var p,g=a(arguments[u++]),d=l?n(g).concat(l(g)):n(g),h=d.length,b=0;h>b;)f.call(g,p=d[b++])&&(r[p]=g[p]);return r}:c},function(t,e,r){var n=r(28),o=r(37);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){var n=r(29),o=r(5),i=r(31)(!1),s=r(34)("IE_PROTO");t.exports=function(t,e){var r,a=o(t),c=0,u=[];for(r in a)r!=s&&n(a,r)&&u.push(r);for(;e.length>c;)n(a,r=e[c++])&&(~i(u,r)||u.push(r));return u}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){var n=r(5),o=r(32),i=r(33);t.exports=function(t){return function(e,r,s){var a,c=n(e),u=o(c.length),l=i(s,u);if(t&&r!=r){for(;u>l;)if((a=c[l++])!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===r)return t||l||0;return!t&&-1}}},function(t,e,r){var n=r(8),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,r){var n=r(8),o=Math.max,i=Math.min;t.exports=function(t,e){return(t=n(t))<0?o(t+e,0):i(t,e)}},function(t,e,r){var n=r(35)("keys"),o=r(36);t.exports=function(t){return n[t]||(n[t]=o(t))}},function(t,e,r){var n=r(0),o=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e){e.f={}.propertyIsEnumerable},function(t,e,r){var n=r(7);t.exports=function(t){return Object(n(t))}},function(t,e,r){"use strict";var n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vue-avatar--wrapper",style:[t.style,t.customStyle],attrs:{"aria-hidden":"true"}},[this.isImage?r("img",{staticStyle:{display:"none"},attrs:{src:this.src},on:{error:t.onImgError}}):t._e(),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:!this.isImage,expression:"!this.isImage"}]},[t._v(t._s(t.userInitial))])])},staticRenderFns:[]};e.a=n}])},b9rR:function(t,e,r){"use strict";var n=r("pk0X");r.n(n).a},bdEB:function(t,e,r){"use strict";var n=r("L2JU");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a={props:{place:{type:String,default:"normal"},size:{type:String,default:"normal"},appLogo:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},assets:{type:Object}},data:function(){return{appLogoText:window.kmenv.name}},computed:i(i({},Object(n.c)("config",["configs","uiConfigs"])),{},{orgLogo:function(){if(this.appLogo||!this.configs.assets&&!this.assets)return"navbar"===this.place||"sidebar"===this.place||"dark"===this.place?"/images/logo-light.png":"/images/logo.png";var t=this.assets&&this.assets.logo?this.assets.logo:this.configs.assets.logo?this.configs.assets.logo:"/images/logo.png";return(this.assets&&this.assets.logoLight||this.configs.assets.logoLight)&&("navbar"===this.place&&this.uiConfigs.topNavbarLogoLight||"sidebar"===this.place&&this.uiConfigs.leftSidebarLogoLight||"dark"===this.place)&&(t=this.assets&&this.assets.logoLight?this.assets.logoLight:this.configs.assets.logoLight),t},appTitle:function(){return this.configs.basic?this.configs.basic.orgName:window.kmenv.name}})},c=r("KHd+"),u=Object(c.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{class:["logo",t.place+"-logo",t.size+"-logo",t.orgLogo?"org-logo":"app-logo",t.inline?"inline-logo":""],attrs:{href:"/"}},[t.orgLogo?r("img",{staticClass:"logo-icon",attrs:{src:t.orgLogo,alt:t.appTitle}}):[r("span",{staticClass:"logo-text",attrs:{title:t.appTitle}},[t._v(t._s(t.appLogoText))])]],2)}),[],!1,null,null,null);e.a=u.exports},fOGa:function(t,e,r){"use strict";var n=r("j/38");r.n(n).a},"j/38":function(t,e,r){var n=r("DzPO");"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,o);n.locals&&(t.exports=n.locals)},kUDz:function(t,e,r){"use strict";var n=r("bdEB"),o=r("L2JU");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var c={props:{width:{type:String,default:"normal"}},components:{AppLogo:n.a},data:function(){return{}},computed:s(s({},Object(o.c)("config",["configs"])),{},{orgLogo:function(){return this.configs.image&&this.configs.image.logo?this.configs.image.logo:null}})},u=(r("fOGa"),r("KHd+")),l=Object(u.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:["centered-box justify-content-center mt-4","width-"+t.width]},[r("card",{staticClass:"border-0",attrs:{type:"white",shadow:"","header-classes":"bg-white","body-classes":"px-lg-4 py-lg-4"}},[t._t("default"),t._v(" "),this.orgLogo?r("div",{staticClass:"powered-logo text-center"},[r("span",{staticClass:"text-muted mr-1"},[t._v(t._s(t.$t("general.powered_by"))+" ")]),t._v(" "),r("app-logo",{attrs:{"app-logo":"",inline:""}})],1):t._e()],2)],1)}),[],!1,null,"7eb15e32",null).exports,f={props:{name:{type:String,default:"CenteredBox"},width:{type:String,default:"normal"}},components:{CenteredBox:l}},p=Object(u.a)(f,(function(){var t=this.$createElement;return(this._self._c||t)(this.name,{tag:"component",attrs:{width:this.width}},[this._t("default")],2)}),[],!1,null,"ebb852f4",null);e.a=p.exports},l7An:function(t,e,r){"use strict";var n=r("bdEB"),o=r("L2JU");function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a={components:{AppLogo:n.a},data:function(){return{}},computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},Object(o.c)("config",["configs"]))},c=r("KHd+"),u=Object(c.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"guest-header text-center mb-4"},[e("div",{staticClass:"logo-wrapper text-center mb-4 pb-2"},[e("app-logo")],1),this._v(" "),this._t("default")],2)}),[],!1,null,null,null);e.a=u.exports},"m/Fr":function(t,e){t.exports="/images/default-profile-image-male.png?82fe52757240e0913ffeb5c5ab65b953"},pk0X:function(t,e,r){var n=r("x134");"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r("aET+")(n,o);n.locals&&(t.exports=n.locals)},x134:function(t,e,r){(t.exports=r("I1BE")(!1)).push([t.i,".guest-footer p[data-v-739170b9]{opacity:.3}",""])}}]);
//# sourceMappingURL=lock.js.map?id=68306d72704dad18a70b