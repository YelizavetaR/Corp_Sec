(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3HR4":function(t,e,i){"use strict";var a=i("o0o1"),o=i.n(a),n=i("L2JU"),r=i("8BOd");i("i8R7");function s(t,e,i,a,o,n,r){try{var s=t[n](r),c=s.value}catch(t){return void i(t)}s.done?e(c):Promise.resolve(c).then(a,o)}function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function f(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}e.a={components:{},data:function(){return{formData:{},formErrors:{},initialFormData:null,initianLength:0,emptyFormData:null,entity:null,preRequisite:{},isLoading:!0,dataType:null,configType:""}},computed:f({},Object(n.c)("config",["configs","vars"])),methods:f(f(f({},Object(n.b)("config",["GetConfig"])),Object(n.b)("navigation",["Generate"])),{},{findActualValue:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"uuid";return e.find((function(e){return e[i]===t}))||null},submit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.isLoading=!0,this.formData.type=this.formData.type.snakeCase();var i=!0===e?r.e:"module"===this.configType?r.d:r.c;"function"==typeof this.beforeSubmit&&this.beforeSubmit(),i(this.formData).then((function(e){t.GetConfig().then((function(){t.$toasted.success(e.message,t.$toastConfig),t.initialFormData=_.cloneDeep(t.formData),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)})),"function"==typeof t.afterSubmit&&t.afterSubmit(),"function"==typeof t.afterSubmitSuccess&&t.afterSubmitSuccess()})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e),"function"==typeof t.afterSubmit&&t.afterSubmit(),"function"==typeof t.afterSubmitError&&t.afterSubmitError()}))},reset:function(){var t=this;formUtil.confirmAction().then((function(e){e.value&&(t.formData=Object.assign({},t.formData,_.cloneDeep(t.initialFormData)))}))},unsavedCheck:function(t){formUtil.unsavedCheckAlert(this.initialFormData,this.formData,t)},fillPreRequisite:function(t){var e=this;this.preRequisite.objForEach((function(i,a){e.preRequisite[a]=t[a]||i})),this.isLoading=!1},fillFormData:function(){var t=this;this.isLoading=!0,this.formData.type&&this.configs[this.formData.type]&&(this.formData=formUtil.assignValues(this.formData,this.configs[this.formData.type])),this.formData.types&&Array.isArray(this.formData.types)&&this.formData.types.forEach((function(e){t.formData=formUtil.assignValues(t.formData,t.configs[e])})),"function"==typeof this.addNewRow&&"function"==typeof this.addNewRowIfNone&&this.addNewRowIfNone(),this.isLoading=!1},getInitialData:function(t){var e,i=this;return(e=o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i.isLoading=!0,e.prev=1,e.next=4,r.b(Object.keys(i.preRequisite).join(","));case 4:return a=e.sent,i.fillPreRequisite(a),t&&i.$nextTick((function(){t()})),e.abrupt("return",a);case 10:throw e.prev=10,e.t0=e.catch(1),i.isLoading=!1,i.formErrors=formUtil.handleErrors(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,10]])})),function(){var t=this,i=arguments;return new Promise((function(a,o){var n=e.apply(t,i);function r(t){s(n,a,o,r,c,"next",t)}function c(t){s(n,a,o,r,c,"throw",t)}r(void 0)}))})()}}),mounted:function(){this.fillFormData(),this.initialFormData=_.cloneDeep(this.formData)},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.preRequisite},beforeRouteLeave:function(t,e,i){this.unsavedCheck(i)}}},sp1o:function(t,e,i){"use strict";i.r(e);var a={extends:i("3HR4").a,data:function(){return{formData:{enabled:!0,autoOpen:!0,enterToSubmit:!1,separateWindow:!1,muteSoundNotification:!1,type:"chat"}}}},o=i("KHd+"),n=Object(o.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[i("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-4 mb-4"},[i("switch-wrapper",{attrs:{label:t.$t("general.enabled")}},[i("base-switch",{model:{value:t.formData.enabled,callback:function(e){t.$set(t.formData,"enabled",e)},expression:"formData.enabled"}})],1)],1),t._v(" "),t.formData.enabled?[i("div",{staticClass:"col-12 col-md-4 mb-4"},[i("switch-wrapper",{attrs:{label:t.$t("config.chat.auto_open")}},[i("base-switch",{model:{value:t.formData.autoOpen,callback:function(e){t.$set(t.formData,"autoOpen",e)},expression:"formData.autoOpen"}})],1)],1),t._v(" "),i("div",{staticClass:"col-12 col-md-4 mb-4"},[i("switch-wrapper",{attrs:{label:t.$t("config.chat.enter_to_submit")}},[i("base-switch",{model:{value:t.formData.enterToSubmit,callback:function(e){t.$set(t.formData,"enterToSubmit",e)},expression:"formData.enterToSubmit"}})],1)],1),t._v(" "),i("div",{staticClass:"col-12 col-md-4 mb-4"},[i("switch-wrapper",{attrs:{label:t.$t("config.chat.mute_sound_notification")}},[i("base-switch",{model:{value:t.formData.muteSoundNotification,callback:function(e){t.$set(t.formData,"muteSoundNotification",e)},expression:"formData.muteSoundNotification"}})],1)],1)]:t._e()],2),t._v(" "),i("div",{staticClass:"text-right mt-5"},[i("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),t._v(" "),i("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("general.save")))])],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);
//# sourceMappingURL=index.js.map?id=4062abaf87353cb746e1