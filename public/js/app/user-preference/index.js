(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"3HR4":function(t,e,a){"use strict";var o=a("o0o1"),i=a.n(o),n=a("L2JU"),r=a("8BOd");a("i8R7");function s(t,e,a,o,i,n,r){try{var s=t[n](r),c=s.value}catch(t){return void a(t)}s.done?e(c):Promise.resolve(c).then(o,i)}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){m(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function m(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}e.a={components:{},data:function(){return{formData:{},formErrors:{},initialFormData:null,initianLength:0,emptyFormData:null,entity:null,preRequisite:{},isLoading:!0,dataType:null,configType:""}},computed:l({},Object(n.c)("config",["configs","vars"])),methods:l(l(l({},Object(n.b)("config",["GetConfig"])),Object(n.b)("navigation",["Generate"])),{},{findActualValue:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"uuid";return e.find((function(e){return e[a]===t}))||null},submit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.isLoading=!0,this.formData.type=this.formData.type.snakeCase();var a=!0===e?r.e:"module"===this.configType?r.d:r.c;"function"==typeof this.beforeSubmit&&this.beforeSubmit(),a(this.formData).then((function(e){t.GetConfig().then((function(){t.$toasted.success(e.message,t.$toastConfig),t.initialFormData=_.cloneDeep(t.formData),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)})),"function"==typeof t.afterSubmit&&t.afterSubmit(),"function"==typeof t.afterSubmitSuccess&&t.afterSubmitSuccess()})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e),"function"==typeof t.afterSubmit&&t.afterSubmit(),"function"==typeof t.afterSubmitError&&t.afterSubmitError()}))},reset:function(){var t=this;formUtil.confirmAction().then((function(e){e.value&&(t.formData=Object.assign({},t.formData,_.cloneDeep(t.initialFormData)))}))},unsavedCheck:function(t){formUtil.unsavedCheckAlert(this.initialFormData,this.formData,t)},fillPreRequisite:function(t){var e=this;this.preRequisite.objForEach((function(a,o){e.preRequisite[o]=t[o]||a})),this.isLoading=!1},fillFormData:function(){var t=this;this.isLoading=!0,this.formData.type&&this.configs[this.formData.type]&&(this.formData=formUtil.assignValues(this.formData,this.configs[this.formData.type])),this.formData.types&&Array.isArray(this.formData.types)&&this.formData.types.forEach((function(e){t.formData=formUtil.assignValues(t.formData,t.configs[e])})),"function"==typeof this.addNewRow&&"function"==typeof this.addNewRowIfNone&&this.addNewRowIfNone(),this.isLoading=!1},getInitialData:function(t){var e,a=this;return(e=i.a.mark((function e(){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.isLoading=!0,e.prev=1,e.next=4,r.b(Object.keys(a.preRequisite).join(","));case 4:return o=e.sent,a.fillPreRequisite(o),t&&a.$nextTick((function(){t()})),e.abrupt("return",o);case 10:throw e.prev=10,e.t0=e.catch(1),a.isLoading=!1,a.formErrors=formUtil.handleErrors(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,10]])})),function(){var t=this,a=arguments;return new Promise((function(o,i){var n=e.apply(t,a);function r(t){s(n,o,i,r,c,"next",t)}function c(t){s(n,o,i,r,c,"throw",t)}r(void 0)}))})()}}),mounted:function(){this.fillFormData(),this.initialFormData=_.cloneDeep(this.formData)},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.preRequisite},beforeRouteLeave:function(t,e,a){this.unsavedCheck(a)}}},fMN5:function(t,e,a){"use strict";a.r(e);var o={extends:a("3HR4").a,data:function(){return{now:moment(),formData:{dateFormat:"",timeFormat:"",timezone:"",perPage:10,locale:"",autoOpen:!1,enterToSubmit:!1,muteSoundNotification:!1,types:["system","chat"]},preRequisite:{dateFormats:[],timeFormats:[],timezones:[],locales:[],paginations:[]}}},mounted:function(){this.getInitialData()}},i=a("KHd+"),n=Object(i.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(!0)}}},[a("h4",{staticClass:"pb-2 mb-4 border-bottom"},[t._v(t._s(t.$t("config.system.system")))]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 mb-4"},[a("base-select",{attrs:{options:t.preRequisite.dateFormats,label:t.$t("config.system.date_format"),"allow-empty":!1,simple:"",disabled:t.isLoading,required:""},scopedSlots:t._u([{key:"selectedOption",fn:function(e){var o=e.option;return[t._v(t._s(t._f("moment")(t.now,o.uuid))+" "),a("small",{staticClass:"bracketed text-muted"},[t._v(t._s(o.name))])]}},{key:"listOption",fn:function(e){var o=e.option;return[t._v("\n                            "+t._s(t._f("moment")(t.now,o.uuid))+" "),a("small",{staticClass:"bracketed text-muted"},[t._v(t._s(o.name))])]}}]),model:{value:t.formData.dateFormat,callback:function(e){t.$set(t.formData,"dateFormat",e)},expression:"formData.dateFormat"}})],1),t._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-4"},[a("base-select",{attrs:{options:t.preRequisite.timeFormats,label:t.$t("config.system.time_format"),"allow-empty":!1,simple:"",disabled:t.isLoading,required:""},scopedSlots:t._u([{key:"selectedOption",fn:function(e){var o=e.option;return[t._v(t._s(t._f("moment")(t.now,o.uuid))+" "),a("small",{staticClass:"bracketed text-muted"},[t._v(t._s(o.name))])]}},{key:"listOption",fn:function(e){var o=e.option;return[t._v("\n                            "+t._s(t._f("moment")(t.now,o.uuid))+" "),a("small",{staticClass:"bracketed text-muted"},[t._v(t._s(o.name))])]}}]),model:{value:t.formData.timeFormat,callback:function(e){t.$set(t.formData,"timeFormat",e)},expression:"formData.timeFormat"}})],1),t._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-4"},[a("base-select",{attrs:{options:t.preRequisite.timezones,label:t.$t("config.system.timezone"),"allow-empty":!1,simple:"",disabled:t.isLoading,required:""},model:{value:t.formData.timezone,callback:function(e){t.$set(t.formData,"timezone",e)},expression:"formData.timezone"}})],1),t._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-4"},[a("base-select",{attrs:{options:t.preRequisite.locales,label:t.$t("config.system.locale"),"allow-empty":!1,simple:"",disabled:t.isLoading,required:""},model:{value:t.formData.locale,callback:function(e){t.$set(t.formData,"locale",e)},expression:"formData.locale"}})],1)]),t._v(" "),a("h4",{staticClass:"pb-2 mb-4 mt-4 border-bottom"},[t._v(t._s(t.$t("config.chat.chat")))]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 mb-4"},[a("switch-wrapper",{attrs:{label:t.$t("config.chat.auto_open")}},[a("base-switch",{model:{value:t.formData.autoOpen,callback:function(e){t.$set(t.formData,"autoOpen",e)},expression:"formData.autoOpen"}})],1)],1),t._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-4"},[a("switch-wrapper",{attrs:{label:t.$t("config.chat.enter_to_submit")}},[a("base-switch",{model:{value:t.formData.enterToSubmit,callback:function(e){t.$set(t.formData,"enterToSubmit",e)},expression:"formData.enterToSubmit"}})],1)],1),t._v(" "),a("div",{staticClass:"col-12 col-md-4 mb-4"},[a("switch-wrapper",{attrs:{label:t.$t("config.chat.mute_sound_notification")}},[a("base-switch",{model:{value:t.formData.muteSoundNotification,callback:function(e){t.$set(t.formData,"muteSoundNotification",e)},expression:"formData.muteSoundNotification"}})],1)],1)]),t._v(" "),a("div",{staticClass:"text-right mt-5"},[a("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),t._v(" "),a("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("general.save")))])],1)])])}),[],!1,null,"8b0882fc",null);e.default=n.exports}}]);
//# sourceMappingURL=index.js.map?id=24bbdf33e84cc20ac07d