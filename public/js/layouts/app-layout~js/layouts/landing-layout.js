(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"4qCA":function(e,t){e.exports="/images/default-profile-image-male-kid.png?db33f81a8becd3256ed9d97fe79d62a9"},"7RU4":function(e,t){e.exports="/images/default-profile-image-female-teen.png?08f8f40c141d4d9130622bed6ce75020"},KLsy:function(e,t){e.exports="/images/default-profile-image-male-teen.png?54adcbaedc1c7db829c01303f13b3441"},QNWA:function(e,t,a){"use strict";var n=a("XuX8"),r=a.n(n),i=a("/MoV"),s=a("4qCA"),o=a.n(s),l=a("aX5J"),u=a.n(l),c=a("KLsy"),p=a.n(c),d=a("7RU4"),f=a.n(d),m=a("m/Fr"),g=a.n(m),b=a("hyU+"),v=a.n(b),y=a("L2JU");function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){w(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function w(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var C={name:"search-user",props:{value:{type:[Object,Array,String]},label:{type:String,default:"Select Contact"},trackBy:{type:String,default:"uuid"},showBy:{type:String,default:"name"},error:{type:String,default:null},searchable:{type:Boolean,default:!0},allowEmpty:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},wrapperClasses:{type:String},inputClasses:{type:String,default:"mb-4"},groupValues:{type:String,default:null},groupLabel:{type:String,default:null},groupSelect:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1},simple:{type:Boolean,default:!1},commaSeparatedMultiple:{type:Boolean,default:!1},addNew:{type:String},autoFocus:{type:Boolean,default:!1},optionsLimit:{type:Number,deafult:5},url:{type:String,default:"users/search"},method:{type:String,default:"get"},params:{type:Object,default:function(){return{}}}},data:function(){return{cbId:"",users:[],formErrors:{},isLoading:!1}},computed:{user:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:O(O({},Object(y.b)("common",["Custom"])),{},{computedSubtitle:function(e){var t=e.vendor?e.vendor.name:e.brand?e.brand.name:e.company?e.company:"";return t?"(".concat(t,")"):""},computedImage:function(e,t){if("male"===e.uuid){if(t){if(t.years<13)return o.a;if(t.years<18)return p.a}return g.a}if(t){if(t.years<13)return u.a;if(t.years<18)return f.a}return v.a},searchContact:_.debounce((function(e){var t=this;if(e.length<3)return!1;this.isLoading=!0,this.Custom({url:this.url,method:this.method,params:O({q:e},this.params)}).then((function(e){t.users=e,t.isLoading=!1})).catch((function(e){t.users=[],t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)}))}),500),clearSelectedContact:function(){this.user=null,this.users=[]}}),mounted:function(){var e=this;this.autoFocus&&setTimeout((function(){e.$refs["multiselect".concat(e.cbId)].activate()}),500)},created:function(){this.cbId=Math.random().toString(16).slice(2)}},S=a("KHd+"),j=Object(S.a)(C,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["multiselect-wrapper",{"not-empty":!!e.user},{required:e.required},e.wrapperClasses]},[a("label",{staticClass:"input-group-material-label"},[e._v(e._s(e.label)+" "),e.required?a("span",{staticClass:"required-asterix"},[e._v("*")]):e._e()]),e._v(" "),e._t("addNew",[e.addNew?a("div",{staticClass:"add-new-link"},[a("base-button",{attrs:{type:"button",design:"link",size:"sm"},on:{click:function(t){return e.$router.push({name:e.addNew})}}},[e._v(e._s(e.$t("general.add_new")))])],1):e._e()]),e._v(" "),a("multiselect",{ref:"multiselect"+e.cbId,class:["input-group-material",e.inputClasses],attrs:{options:e.users,placeholder:e.label,"track-by":e.trackBy,label:e.showBy,searchable:e.searchable,"show-labels":!1,"allow-empty":e.allowEmpty,"group-values":e.groupValues,"group-label":e.groupLabel,"group-select":e.groupSelect,multiple:e.multiple,"close-on-select":e.closeOnSelect,disabled:e.disabled,loading:e.loading||e.isLoading,"preselect-first":e.preselectFirst,"internal-search":!1,"options-limit":e.optionsLimit},on:{"search-change":e.searchContact},scopedSlots:e._u([{key:"singleLabel",fn:function(t){var n=t.option;return[a("div",{staticClass:"person-option selected"},[a("div",{staticClass:"person-image-wrapper"},[n.image?a("img",{staticClass:"person-image",attrs:{src:n.image}}):a("img",{staticClass:"person-image",attrs:{src:e.computedImage(n.gender,n.age)}})]),e._v(" "),a("div",{staticClass:"person-details"},[a("span",{staticClass:"title"},[e._v(e._s(n.name))]),e._v(" "),a("span",{staticClass:"subtitle"},[e._v(e._s(e.computedSubtitle(n)))])])])]}},{key:"option",fn:function(t){var n=t.option;return[a("div",{staticClass:"person-option"},[a("div",{staticClass:"person-image-wrapper"},[n.image?a("img",{staticClass:"person-image",attrs:{src:n.image}}):a("img",{staticClass:"person-image",attrs:{src:e.computedImage(n.gender,n.age)}})]),e._v(" "),a("div",{staticClass:"person-details"},[a("span",{staticClass:"title"},[e._v(e._s(n.name))]),e._v(" "),a("span",{staticClass:"subtitle"},[e._v(e._s(e.computedSubtitle(n)))])])])]}},{key:"clear",fn:function(t){return[e.user?a("div",{staticClass:"multiselect__clear",on:{mousedown:function(a){return a.preventDefault(),a.stopPropagation(),e.clearSelectedContact(t.search)}}}):e._e()]}},{key:"noResult",fn:function(){return[a("span",{staticClass:"text-muted"},[e._v(e._s(e.$t("global.could_not_find_any",{attribute:e.$t("user.user")})))])]},proxy:!0},{key:"noOptions",fn:function(){return[a("span",{staticClass:"text-muted"},[e._v(e._s(e.$t("general.search_helper_text")))])]},proxy:!0}]),model:{value:e.user,callback:function(t){e.user=t},expression:"user"}}),e._v(" "),e._t("errorBlock",[e.error?a("div",{staticClass:"text-danger invalid-feedback",staticStyle:{display:"block","margin-top":"-0.5rem"}},[e._v("\n            "+e._s(e.error)+"\n        ")]):e._e()])],2)}),[],!1,null,null,null).exports,k=a("BcCH");function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(Object(a),!0).forEach((function(t){I(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function I(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var x={name:"profile-buttons",props:{link:{type:Object,default:null},user:{type:Object,required:!0}},data:function(){return{}},computed:B(B({},Object(y.c)("config",["configs"])),Object(y.c)("chat",["chatBoxLoaded"])),methods:B(B({},Object(y.b)("chat",["SetActiveChatUser"])),{},{startChat:function(){this.$gaEvent("engagement","startChat","ProfileButtons"),this.SetActiveChatUser(this.user),k.a.$emit("START_CHAT_WITH",this.user)}}),mounted:function(){},created:function(){window.Echo&&window.EchoOpts&&(this.subscriptions={users:window.EchoOpts.subscriptions.users})},beforeDestroy:function(){},destroyed:function(){}},$=Object(S.a)(x,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"buttons-container"},[a("div",{staticClass:"buttons-wrapper"},[a("div",{staticClass:"btn-group buttons",attrs:{role:"group"}},[e.link?a("router-link",{staticClass:"btn btn-sm btn-light flex-grow-2",attrs:{tag:"a",to:e.link}},[e._v("\n                "+e._s(e.$t("user.profile"))+"\n            ")]):e._e(),e._v(" "),e.configs.chat&&e.configs.chat.enabled&&e.chatBoxLoaded?[a("button",{staticClass:"btn btn-sm btn-light",on:{click:e.startChat}},[a("i",{staticClass:"fas fa-comment"})])]:e._e()],2)])])}),[],!1,null,null,null).exports,z={name:"profile-card",components:{},props:{options:{type:Object,default:function(){return{imageType:"adult"}}},to:{type:Object,default:null},name:{required:!0},subHeading:{type:String,default:""},gender:{type:Object,default:function(){return{uuid:"male",name:"Male"}}},age:{type:Object,default:function(){return{years:18,months:0,days:0}}},image:{type:String,default:""},horizontal:{type:Boolean,default:!0},showButtons:{type:Boolean,default:!1},userStatus:{type:Boolean,default:!1},user:{type:Object}},computed:{computedImage:function(){if(!this.gender)return g.a;if("male"===this.gender.uuid){if(this.age){if(this.age.years<13)return o.a;if(this.age.years<18)return p.a}return g.a}if(this.age){if(this.age.years<13)return u.a;if(this.age.years<18)return f.a}return v.a}}},E=Object(S.a)(z,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["profile-card",{"horizontal-layout":e.horizontal}]},[a("div",{staticClass:"profile-image-background"}),e._v(" "),a("div",{staticClass:"profile-details-wrapper"},[a("div",{staticClass:"profile-image-wrapper",class:{placeholder:!e.image}},[e.to?[e.image?a("router-link",{staticClass:"profile-image pointer",attrs:{to:e.to}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"image"}],staticClass:"img-fluid"})]):a("router-link",{staticClass:"profile-image pointer",attrs:{to:e.to}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.computedImage,expression:"computedImage"}],staticClass:"img-fluid"})])]:[e.image?a("div",{staticClass:"profile-image"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"image"}],staticClass:"img-fluid"})]):a("div",{staticClass:"profile-image"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.computedImage,expression:"computedImage"}],staticClass:"img-fluid"})])]],2),e._v(" "),a("div",{staticClass:"profile-details"},[e.to?a("router-link",{staticClass:"profile-heading pointer",attrs:{to:e.to,tag:"h5"}},[e._v(e._s(e.name))]):a("h5",{staticClass:"profile-heading"},[e._v(e._s(e.name))]),e._v(" "),a("p",{staticClass:"profile-sub-heading text-muted"},[e._v(e._s(e.subHeading))]),e._v(" "),e.$slots.extras?a("div",{staticClass:"profile-extras has-slot"},[e._t("extras")],2):a("p",{staticClass:"profile-extras text-muted comma-list"},[e.gender?a("span",[e._v(e._s(e.gender.name))]):e._e(),e._v(" "),e.age?a("span",[e._v(e._s(e.$t("global.years_old",{attribute:e.age.years})))]):e._e()])],1)]),e._v(" "),e.showButtons?a("profile-buttons",{attrs:{link:e.to,user:e.user},on:{buttonClicked:function(t){return e.$emit("buttonClicked")}}}):e._e()],1)}),[],!1,null,null,null).exports,A={name:"small-profile-card",components:{},props:{options:{type:Object,default:function(){return{imageType:"adult"}}},to:{type:Object,default:null},name:{required:!0},subHeading:{type:String,default:""},gender:{type:Object,default:function(){return{uuid:"male",name:"Male"}}},age:{type:Object,default:function(){return{years:18,months:0,days:0}}},image:{type:String,default:""},horizontal:{type:Boolean,default:!0},userStatus:{type:Boolean,default:!1},user:{type:Object}},computed:{computedImage:function(){if(!this.gender)return g.a;if("male"===this.gender.uuid){if(this.age){if(this.age.years<13)return o.a;if(this.age.years<18)return p.a}return g.a}if(this.age){if(this.age.years<13)return u.a;if(this.age.years<18)return f.a}return v.a}}},L=Object(S.a)(A,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:["small-profile-card",{"horizontal-layout":e.horizontal}]},[a("div",{staticClass:"profile-details-wrapper"},[a("div",{staticClass:"profile-image-wrapper",class:{placeholder:!e.image}},[e.to?[e.image?a("router-link",{staticClass:"profile-image pointer",attrs:{to:e.to}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"image"}],staticClass:"img-fluid"})]):a("router-link",{staticClass:"profile-image pointer",attrs:{to:e.to}},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.computedImage,expression:"computedImage"}],staticClass:"img-fluid"})])]:[e.image?a("div",{staticClass:"profile-image"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.image,expression:"image"}],staticClass:"img-fluid"})]):a("div",{staticClass:"profile-image"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.computedImage,expression:"computedImage"}],staticClass:"img-fluid"})])]],2),e._v(" "),a("div",{staticClass:"profile-details"},[e.to?a("router-link",{staticClass:"profile-heading pointer",attrs:{to:e.to,tag:"h5"}},[e._v(e._s(e.name))]):a("h5",{staticClass:"profile-heading"},[e._v(e._s(e.name))]),e._v(" "),e.subHeading?a("p",{staticClass:"profile-sub-heading text-muted"},[e._v(e._s(e.subHeading))]):e._e()],1)])])}),[],!1,null,null,null).exports;function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function T(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){U(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function U(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var K={name:"view-user",components:{BPopover:a("OCip").a},props:{label:{type:String,description:"View label (text before input)"},labelClasses:{type:[String,Array],description:"View label css classes",default:"d-block"},dataClasses:{type:[String,Array],description:"View css classes"},value:{type:[String,Number,Boolean,Object],description:"View value"},tag:{type:String,description:"Tag value",default:"h6"},subtitleKey:{type:String,default:"username"},subtitleSecondaryKey:{type:String,default:"email"},subArr:{type:Array},showSub:{type:Boolean,default:!0},showImage:{type:Boolean,default:!0},size:{type:String,default:"md"},showStatus:{type:Boolean,default:!0},showStatusIfOnline:{type:Boolean,default:!0},showButtons:{type:Boolean,default:!1},showPopoverButtons:{type:Boolean,default:!0},focusable:{type:Boolean,default:!1},hidePopover:{type:Boolean,default:!1},inlineSub:{type:Boolean,default:!1},inline:{type:Boolean,default:!1},link:{type:Object,default:null},linkSecond:{type:Object,default:null}},data:function(){return{elementId:"",renderPopover:!1,showPopup:!1,timer:"",isInInfo:!1}},computed:T(T({},Object(y.c)("user",["liveUsers","liveLoggedInUser"])),{},{isLoggedIn:function(){return this.value&&this.liveLoggedInUser&&this.value.uuid===this.liveLoggedInUser.uuid},liveUser:function(){var e=this;return this.value&&this.liveUsers.find((function(t){return t.uuid===e.value.uuid}))},isOnline:function(){return!!this.liveUser},isUserBusy:function(){return this.isOnline&&!!this.liveUser.busy},computedLink:function(){return this.link?this.link:this.profileLink?this.profileLink:null},computedLinkSecond:function(){return this.linkSecond?this.linkSecond:this.ledgerLink?this.ledgerLink:null},profileLink:function(){return this.value?{name:"appUserView",params:{uuid:this.value.uuid,slug:this.value.slug}}:null}}),methods:{getSubValue:function(e,t){e=e.split(".");var a=t;return e.forEach((function(e){a=a[e]})),a},computedImage:function(){if(!this.value.profile||!this.value.profile.gender)return g.a;var e=this.value.profile.gender,t=this.value.profile.age;if("male"===e||"male"===e.uuid){if(t){if(t.years<13)return o.a;if(t.years<18)return p.a}return g.a}if(t){if(t.years<13)return u.a;if(t.years<18)return f.a}return v.a},hover:function(){var e=this;this.timer=setTimeout((function(){e.showPopover()}),300)},hoverOut:function(){var e=this;clearTimeout(e.timer),this.timer=setTimeout((function(){e.isInInfo||e.closePopover()}),200)},hoverInfo:function(){this.isInInfo=!0},hoverOutInfo:function(){this.isInInfo=!1,this.hoverOut()},showPopover:function(){this.showPopup=!0},closePopover:function(){this.showPopup=!1},onShow:function(){},onShown:function(){},onHidden:function(){},focusRef:function(e){var t=this;this.$nextTick((function(){t.$nextTick((function(){(e.$el||e).focus()}))}))}},mounted:function(){var e=this;this.$nextTick((function(){e.renderPopover=!0}))},created:function(){this.elementId=Math.random().toString(16).slice(2)}},N=Object(S.a)(K,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"base-view view-user"},[a("div",{staticClass:"view-group",class:[{"has-label":e.label||e.$slots.label},{"not-empty":e.value||0===e.value},{"d-inline":e.inline},"size-"+e.size]},[e._t("label",[e.label?a("label",{class:e.labelClasses},[e._v("\n                "+e._s(e.label)+"\n            ")]):e._e()]),e._v(" "),e._t("main",[e.value&&e.elementId?[a("div",{class:["popover-parent user-popover-parent",{"show-buttons":e.showButtons&&e.hidePopover}],attrs:{id:"Container"+e.elementId}},[a("router-link",{ref:"Button"+e.elementId,staticClass:"btn-popover-link",class:[{focusable:e.focusable}],attrs:{to:e.computedLink,tag:"button",disabled:!e.hidePopover&&e.showPopup,id:"Button"+e.elementId}},[a("div",{staticClass:"popover-element",on:{mouseover:e.hover,mouseout:e.hoverOut}},[e.showImage?a("div",{staticClass:"user-image-wrapper"},[e.value.profile&&e.value.profile.avatar?a("img",{staticClass:"user-image",attrs:{src:e.value.profile.avatar}}):a("img",{staticClass:"user-image",attrs:{src:e.computedImage()}})]):e._e(),e._v(" "),a("div",{staticClass:"user-details"},[a(e.tag,{tag:"component",class:["view-data",{"inline-sub":e.inlineSub},{"user-status":!e.isLoggedIn&&e.showStatus&&(!e.showStatusIfOnline||e.showStatusIfOnline&&e.isOnline)},{"is-online":e.isOnline},{"is-offline":!e.isOnline},{"is-busy":e.isUserBusy},e.dataClasses]},[a("span",{staticClass:"title"},[e._v(e._s(e.value.profile.name))]),e._v(" "),e.showSub&&e.inlineSub?a("small",{staticClass:"subtitle"},[e.subtitleKey?a("span",{staticClass:"bracketed"},[e._v(e._s(e.getSubValue(e.subtitleKey,e.value)))]):e._e()]):e._e()]),e._v(" "),e._t("sub",[e._t("submain",[e.showSub&&!e.inlineSub?a("div",{staticClass:"subtitle comma-list"},[e.subtitleKey?a("span",{staticClass:"bracketed"},[e._v(e._s(e.getSubValue(e.subtitleKey,e.value)))]):e._e(),e._v(" "),e.subtitleSecondaryKey?a("span",{staticClass:"bracketed"},[e._v(e._s(e.getSubValue(e.subtitleSecondaryKey,e.value)))]):e._e()]):e._e()]),e._v(" "),e._t("subextra")])],2)])]),e._v(" "),e.showButtons&&e.hidePopover?a("profile-buttons",{attrs:{link:e.link,user:e.value}}):e._e(),e._v(" "),!e.hidePopover&&e.renderPopover?[a("b-popover",{ref:"Popover"+e.elementId,attrs:{target:"Button"+e.elementId,show:e.showPopup,placement:"auto",container:"Container"+e.elementId},on:{"update:show":function(t){e.showPopup=t},show:e.onShow,shown:e.onShown,hidden:e.onHidden}},[a("div",{staticClass:"user-popover dark-bg",on:{mouseover:e.hoverInfo,mouseout:e.hoverOutInfo}},[a("profile-card",{attrs:{name:e.value.profile.name,"sub-heading":e.value.username||"-",gender:e.value.profile.gender,image:e.value.profile.avatar,age:e.value.profile.age,"data-card-color":"whitish",to:e.profileLink,"show-buttons":e.showPopoverButtons,"user-status":e.isOnline,user:e.value},on:{buttonClicked:function(t){return e.$root.$emit("bv::hide::popover","Button"+e.elementId)}}})],1)])]:e._e()],2)]:a("span",[e._v("-")])])],2)])}),[],!1,null,null,null).exports,F=a("SokU"),q=a.n(F),V=a("nFxi"),H={name:"user-avatar",components:{Avatar:q.a},props:{user:{type:Object,required:!0},backgroundColor:{type:String,default:V.a.colors.white},foregroundColor:{type:String,default:V.a.colors.primary},size:{type:Number,default:40}}},M=Object(S.a)(H,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.user?a("div",[e.user.profile&&e.user.profile.name?a("avatar",{attrs:{username:e.user.profile.name,src:e.user.profile.avatar,"background-color":e.backgroundColor,color:e.foregroundColor,size:e.size}}):!e.user.profile&&e.user.name?a("avatar",{attrs:{username:e.user.name,src:e.user.avatar,"background-color":e.backgroundColor,color:e.foregroundColor,size:e.size}}):e._e()],1):e._e()}),[],!1,null,null,null).exports;function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(Object(a),!0).forEach((function(t){X(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function X(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var W={name:"search-tag",props:{value:{type:Array},label:{type:String,default:"Enter a tag"},selectTrackBy:{type:String,default:"slug"},selectName:{type:String,default:"name"},options:{type:Array,default:function(){return[]}},error:{type:String,default:null},allowEmpty:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},multiple:{type:Boolean,default:!0},loading:{type:Boolean,default:!1},autoFocus:{type:Boolean,default:!1},tabindex:{type:Number,default:0},wrapperClasses:{type:String},inputClasses:{type:String,default:"mb-4"}},data:function(){return{cbId:""}},computed:{tags:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},tagError:{get:function(){return this.error},set:function(e){this.$emit("update:error",e)}}},methods:R(R({},Object(y.b)("common",["Custom"])),{},{addTag:function(e){this.$emit("tag",e)}}),mounted:function(){this.autoFocus&&this.$refs["multiselect".concat(this.cbId)].activate()},created:function(){this.cbId=Math.random().toString(16).slice(2)}},Q=Object(S.a)(W,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("multiselect-wrapper",{class:[e.wrapperClasses],attrs:{"is-selected":!!e.tags,label:e.label,value:e.tags,error:e.tagError,required:e.required},on:{"update:error":function(t){e.tagError=t}}},[a("multiselect",{ref:"multiselect"+e.cbId,class:["input-group-material",e.inputClasses],attrs:{options:e.options,placeholder:e.label,"track-by":e.selectTrackBy,label:e.selectName,searchable:!0,"show-labels":!1,"allow-empty":e.allowEmpty,multiple:e.multiple,"close-on-select":!1,taggable:!0,"tag-placeholder":e.$t("general.enter_a_tag"),disabled:e.disabled,loading:e.loading},on:{tag:e.addTag},model:{value:e.tags,callback:function(t){e.tags=t},expression:"tags"}})],1)}),[],!1,null,null,null).exports,G={name:"table-row-actions",props:{btnIcon:{type:String,default:"fas fa-ellipsis-v"}},data:function(){return{}},computed:{}},Y=Object(S.a)(G,(function(){var e=this.$createElement,t=this._self._c||e;return t("base-dropdown",{staticClass:"table-row-actions",attrs:{tag:"div",direction:"down","menu-classes":"show-dropdown-up",position:"right"}},[t("base-button",{attrs:{slot:"title",type:"button","data-toggle":"dropdown",role:"button",size:"md"},slot:"title"},[t("i",{class:this.btnIcon})]),this._v(" "),this._t("default")],2)}),[],!1,null,null,null).exports;function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach((function(t){te(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function te(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var ae={name:"keep-adding-form",props:{isLoading:{type:Boolean,default:!1},keepAddingOption:{type:String},keepAddingSelectedFields:{type:Array,default:function(){return[]}},keepAddingFields:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:ee(ee({},Object(y.c)("config",["vars"])),{},{localKeepAddingOption:{get:function(){return this.keepAddingOption},set:function(e){this.$emit("optionUpdated",e)}},localKeepAddingSelectedFields:{get:function(){return this.keepAddingSelectedFields},set:function(e){this.$emit("fieldsUpdated",e)}}})},ne=Object(S.a)(ae,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-12 col-md-3"},[a("base-select",{attrs:{options:e.vars.keepAddingOptions,label:e.$t("general.select_keep_adding_option"),"allow-empty":!1,"track-by":"uuid",simple:!0,disabled:e.isLoading},on:{input:function(t){return e.$emit("fieldsUpdated")}},scopedSlots:e._u([{key:"selectedOption",fn:function(t){var n=t.option;return[a("span",{staticClass:"title"},[e._v(e._s(e.$t("general."+n.name)))])]}},{key:"listOption",fn:function(t){var n=t.option;return[a("span",{staticClass:"title"},[e._v(e._s(e.$t("general."+n.name)))])]}}]),model:{value:e.localKeepAddingOption,callback:function(t){e.localKeepAddingOption=t},expression:"localKeepAddingOption"}})],1),e._v(" "),a("div",{staticClass:"col-12 col-md-9"},[a("base-select",{attrs:{options:e.keepAddingFields,label:e.$t("general.select_keep_adding_fields"),"allow-empty":!0,multiple:!0,"track-by":"uuid","show-by":"value","close-on-select":!1,disabled:e.isLoading},model:{value:e.localKeepAddingSelectedFields,callback:function(t){e.localKeepAddingSelectedFields=t},expression:"localKeepAddingSelectedFields"}})],1)])}),[],!1,null,null,null).exports;r.a.component(j.name,j),r.a.component($.name,$),r.a.component(E.name,E),r.a.component(L.name,L),r.a.component(N.name,N),r.a.component(M.name,M),r.a.component(Q.name,Q),r.a.component(ne.name,ne),r.a.component(Y.name,Y),r.a.filter("momentDate",i.c),r.a.filter("momentTime",i.f),r.a.filter("momentDateTime",i.d),r.a.filter("momentTimeTz",i.g),r.a.filter("momentDateTimeTz",i.e),r.a.filter("momentCalendar",i.a),r.a.filter("momentCalendarTz",i.b)},aX5J:function(e,t){e.exports="/images/default-profile-image-female-kid.png?a698c120d375307de1ec9bc66eb39a68"},"hyU+":function(e,t){e.exports="/images/default-profile-image-female.png?f06ec6078fcc441923987bf158202c95"},"m/Fr":function(e,t){e.exports="/images/default-profile-image-male.png?82fe52757240e0913ffeb5c5ab65b953"}}]);
//# sourceMappingURL=landing-layout.js.map?id=bd3fa4a0b3737f49a0f2