(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{135:function(t,e,n){"use strict";n.r(e);var r=n(136),o=n.n(r);for(var c in r)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(c);e.default=o.a},136:function(t,e){},168:function(t,e,n){"use strict";n.r(e);var r=n(178),o=n(135);for(var c in o)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(c);n(319);var f=n(58),l=n(132),d=n.n(l),h=n(360),v=n(176),m=n(144),y=n(361),w=n(145),x=n(171),component=Object(f.a)(o.default,r.a,r.b,!1,null,"02edb922",null);e.default=component.exports,d()(component,{VAppBarNavIcon:h.a,VBtn:v.a,VIcon:m.a,VSpacer:y.a,VToolbar:w.a,VToolbarTitle:x.a})},172:function(t,e,n){"use strict";n(18);var r={};r.search=n(286),r.search=r.search.default||r.search,e.a=r},178:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{dark:"",color:"blue"}},[n("v-app-bar-nav-icon"),t._v(" "),n("v-toolbar-title",{staticClass:"white--text"},[n("nuxt-link",{staticClass:"title",attrs:{to:"/"}},[t._v("iTunes Search")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{to:"/",icon:""}},[n("v-icon",[t._v("refresh")])],1)],1)},o=[]},231:function(t,e,n){var content=n(314);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("dc093880",content,!0,{sourceMap:!1})},233:function(t,e,n){var content=n(320);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("620a68cf",content,!0,{sourceMap:!1})},244:function(t,e,n){var content=n(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("56b15182",content,!0,{sourceMap:!1})},251:function(t,e,n){"use strict";var r=n(28),o=(n(108),n(8),n(69),n(0)),c=n(4),f=window.__NUXT__;function l(){if(!this._hydrated)return this.$fetch()}function d(){if((t=this).$vnode&&t.$vnode.elm&&t.$vnode.elm.dataset&&t.$vnode.elm.dataset.fetchKey){var t;this._hydrated=!0,this._fetchKey=this.$vnode.elm.dataset.fetchKey;var data=f.fetch[this._fetchKey];if(data&&data._error)this.$fetchState.error=data._error;else for(var e in data)o.a.set(this.$data,e,data[e])}}function h(){var t=this;return this._fetchPromise||(this._fetchPromise=v.call(this).then((function(){delete t._fetchPromise}))),this._fetchPromise}function v(){return m.apply(this,arguments)}function m(){return(m=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n,r,o=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.$nuxt.nbFetching++,this.$fetchState.pending=!0,this.$fetchState.error=null,this._hydrated=!1,e=null,n=Date.now(),t.prev=6,t.next=9,this.$options.fetch.call(this);case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(6),e=Object(c.p)(t.t0);case 15:if(!((r=this._fetchDelay-(Date.now()-n))>0)){t.next=19;break}return t.next=19,new Promise((function(t){return setTimeout(t,r)}));case 19:this.$fetchState.error=e,this.$fetchState.pending=!1,this.$fetchState.timestamp=Date.now(),this.$nextTick((function(){return o.$nuxt.nbFetching--}));case 23:case"end":return t.stop()}}),t,this,[[6,11]])})))).apply(this,arguments)}e.a={beforeCreate:function(){Object(c.l)(this)&&(this._fetchDelay="number"==typeof this.$options.fetchDelay?this.$options.fetchDelay:200,o.a.util.defineReactive(this,"$fetchState",{pending:!1,error:null,timestamp:Date.now()}),this.$fetch=h.bind(this),Object(c.a)(this,"created",d),Object(c.a)(this,"beforeMount",l))}}},252:function(t,e,n){"use strict";var r={components:{Bar:n(168).default}},o=(n(357),n(58)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",[n("Bar"),t._v(" "),n("nuxt")],1)])}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Bar:n(168).default})},286:function(t,e,n){"use strict";n.r(e);var r=n(216),o=n.n(r);e.default=function(t){var e=t.params,n=t.store;return o.a.get("https://itunes.apple.com/search?term=".concat(e.id,"&entity=album")).then((function(t){n.commit("add",t.data.results)}))}},313:function(t,e,n){"use strict";n(231)},314:function(t,e,n){var r=n(32)(!1);r.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=r},319:function(t,e,n){"use strict";n(233)},320:function(t,e,n){var r=n(32)(!1);r.push([t.i,".title[data-v-02edb922]{text-decoration:none!important}.title[data-v-02edb922]:visited{color:#fff}",""]),t.exports=r},357:function(t,e,n){"use strict";n(244)},358:function(t,e,n){var r=n(32)(!1);r.push([t.i,'html{font-family:"Source Sans Pro",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box}*,:after,:before{box-sizing:border-box;margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}',""]),t.exports=r},359:function(t,e,n){"use strict";n.r(e);var r=n(83);e.default=function(){return new r.a.Store({state:{albums:[]},mutations:{add:function(t,e){t.albums=e}}})}},368:function(t,e,n){n(262),t.exports=n(263)},4:function(t,e,n){"use strict";n.d(e,"k",(function(){return w})),n.d(e,"m",(function(){return x})),n.d(e,"l",(function(){return O})),n.d(e,"e",(function(){return j})),n.d(e,"b",(function(){return _})),n.d(e,"s",(function(){return $})),n.d(e,"g",(function(){return S})),n.d(e,"h",(function(){return P})),n.d(e,"d",(function(){return k})),n.d(e,"r",(function(){return C})),n.d(e,"j",(function(){return E})),n.d(e,"t",(function(){return D})),n.d(e,"o",(function(){return A})),n.d(e,"q",(function(){return N})),n.d(e,"f",(function(){return I})),n.d(e,"c",(function(){return M})),n.d(e,"i",(function(){return F})),n.d(e,"p",(function(){return U})),n.d(e,"a",(function(){return L})),n.d(e,"v",(function(){return X})),n.d(e,"n",(function(){return W})),n.d(e,"u",(function(){return Y}));n(66),n(13),n(67),n(80),n(29),n(14),n(30);var r=n(21),o=n(28),c=n(3),f=n(9),l=(n(108),n(8),n(22),n(304),n(36),n(35),n(54),n(17),n(51),n(52),n(49),n(18),n(55),n(74),n(180),n(307),n(90),n(84),n(131),n(68),n(81),n(0)),d=n(56);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function m(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,f=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){f=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(f)throw o}}}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function w(t){l.a.config.errorHandler&&l.a.config.errorHandler(t)}function x(t){return t.then((function(t){return t.default||t}))}function O(t){return t.$options&&"function"==typeof t.$options.fetch&&!t.$options.fetch.length}function j(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=t.$children||[],o=m(r);try{for(o.s();!(e=o.n()).done;){var c=e.value;c.$fetch?n.push(c):c.$children&&j(c,n)}}catch(t){o.e(t)}finally{o.f()}return n}function _(t,e){if(e||!t.options.__hasNuxtData){var n=t.options._originDataFn||t.options.data||function(){return{}};t.options._originDataFn=n,t.options.data=function(){var data=n.call(this,this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),v(v({},data),e)},t.options.__hasNuxtData=!0,t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data)}}function $(t){return t.options&&t._Ctor===t||(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=l.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file)),t}function S(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"components";return Array.prototype.concat.apply([],t.matched.map((function(t,r){return Object.keys(t[n]).map((function(o){return e&&e.push(r),t[n][o]}))})))}function P(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return S(t,e,"instances")}function k(t,e){return Array.prototype.concat.apply([],t.matched.map((function(t,n){return Object.keys(t.components).reduce((function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r}),[])})))}function C(t,e){return Promise.all(k(t,function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(n,r,o,c){var f,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof n||n.options){t.next=11;break}return t.prev=1,t.next=4,n();case 4:n=t.sent,t.next=11;break;case 7:throw t.prev=7,t.t0=t.catch(1),t.t0&&"ChunkLoadError"===t.t0.name&&"undefined"!=typeof window&&window.sessionStorage&&(f=Date.now(),(!(l=parseInt(window.sessionStorage.getItem("nuxt-reload")))||l+6e4<f)&&(window.sessionStorage.setItem("nuxt-reload",f),window.location.reload(!0))),t.t0;case 11:return o.components[c]=n=$(n),t.abrupt("return","function"==typeof e?e(n,r,o,c):n);case 13:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function E(t){return R.apply(this,arguments)}function R(){return(R=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,C(e);case 4:return t.abrupt("return",v(v({},e),{},{meta:S(e).map((function(t,n){return v(v({},t.options.meta),(e.matched[n]||{}).meta)}))}));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function D(t,e){return T.apply(this,arguments)}function T(){return(T=Object(o.a)(regeneratorRuntime.mark((function t(e,n){var o,c,l,h;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:e.router.options.base,env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),n.ssrContext&&(e.context.ssrContext=n.ssrContext),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var o=Object(r.a)(path);if("number"==typeof t||"undefined"!==o&&"object"!==o||(n=path||{},path=t,o=Object(r.a)(path),t=302),"object"===o&&(path=e.router.resolve(path).route.fullPath),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=Object(d.d)(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),t.next=3,Promise.all([E(n.route),E(n.from)]);case 3:o=t.sent,c=Object(f.a)(o,2),l=c[0],h=c[1],n.route&&(e.context.route=l),n.from&&(e.context.from=h),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!1,e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{};case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function A(t,e){return!t.length||e._redirected||e._errored?Promise.resolve():N(t[0],e).then((function(){return A(t.slice(1),e)}))}function N(t,e){var n;return(n=2===t.length?new Promise((function(n){t(e,(function(t,data){t&&e.error(t),n(data=data||{})}))})):t(e))&&n instanceof Promise&&"function"==typeof n.then?n:Promise.resolve(n)}function I(base,t){if("hash"===t)return window.location.hash.replace(/^#\//,"");base=decodeURI(base).slice(0,-1);var path=decodeURI(window.location.pathname);base&&path.startsWith(base)&&(path=path.slice(base.length));var e=(path||"/")+window.location.search+window.location.hash;return Object(d.c)(e)}function M(t,e){return function(t,e){for(var n=new Array(t.length),i=0;i<t.length;i++)"object"===Object(r.a)(t[i])&&(n[i]=new RegExp("^(?:"+t[i].pattern+")$",K(e)));return function(e,r){for(var path="",data=e||{},o=(r||{}).pretty?V:encodeURIComponent,c=0;c<t.length;c++){var f=t[c];if("string"!=typeof f){var l=data[f.name||"pathMatch"],d=void 0;if(null==l){if(f.optional){f.partial&&(path+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(Array.isArray(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var h=0;h<l.length;h++){if(d=o(l[h]),!n[c].test(d))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(d)+"`");path+=(0===h?f.prefix:f.delimiter)+d}}else{if(d=f.asterisk?z(l):o(l),!n[c].test(d))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+d+'"');path+=f.prefix+d}}else path+=f}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",f=e&&e.delimiter||"/";for(;null!=(n=B.exec(t));){var l=n[0],d=n[1],h=n.index;if(path+=t.slice(c,h),c=h+l.length,d)path+=d[1];else{var v=t[c],m=n[2],y=n[3],w=n[4],x=n[5],O=n[6],j=n[7];path&&(r.push(path),path="");var _=null!=m&&null!=v&&v!==m,$="+"===O||"*"===O,S="?"===O||"*"===O,P=n[2]||f,pattern=w||x;r.push({name:y||o++,prefix:m||"",delimiter:P,optional:S,repeat:$,partial:_,asterisk:Boolean(j),pattern:pattern?J(pattern):j?".*":"[^"+H(P)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e),e)}function F(t,e){var n={},r=v(v({},t),e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function U(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return v(v({},t),{},{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var B=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function V(t,e){var n=e?/[?#]/g:/[/?#]/g;return encodeURI(t).replace(n,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function z(t){return V(t,!0)}function H(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function J(t){return t.replace(/([=!:$/()])/g,"\\$1")}function K(t){return t&&t.sensitive?"":"i"}function L(t,e,n){t.$options[e]||(t.$options[e]=[]),t.$options[e].includes(n)||t.$options[e].push(n)}var X=d.b,W=(d.e,d.a);function Y(t){try{window.history.scrollRestoration=t}catch(t){}}},57:function(t,e,n){"use strict";n.d(e,"b",(function(){return z})),n.d(e,"a",(function(){return k.a}));n(17),n(13),n(22),n(29),n(14),n(30);var r=n(28),o=n(3),c=(n(108),n(36),n(8),n(54),n(18),n(55),n(0)),f=n(83),l=n(246),d=n(173),h=n.n(d),v=n(94),m=n.n(v),y=(n(51),n(52),n(174)),w=n(56),x=n(4);"scrollRestoration"in window.history&&(Object(x.u)("manual"),window.addEventListener("beforeunload",(function(){Object(x.u)("auto")})),window.addEventListener("load",(function(){Object(x.u)("manual")})));function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=function(){};c.a.use(y.a);var $={mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:function(t,e,n){var r=!1,o=t!==e;n?r=n:o&&function(t){var e=Object(x.g)(t);if(1===e.length){var n=e[0].options;return!1!==(void 0===n?{}:n).scrollToTop}return e.some((function(t){var e=t.options;return e&&e.scrollToTop}))}(t)&&(r={x:0,y:0});var c=window.$nuxt;return(!o||t.path===e.path&&t.hash!==e.hash)&&c.$nextTick((function(){return c.$emit("triggerScroll")})),new Promise((function(e){c.$once("triggerScroll",(function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)}))}))},routes:[{path:"/results/:id?",component:function(){return Object(x.m)(Promise.all([n.e(0),n.e(19)]).then(n.bind(null,404)))},name:"results-id"},{path:"/",component:function(){return Object(x.m)(n.e(18).then(n.bind(null,403)))},name:"index"}],fallback:!1};function S(t,e){var base=e._app&&e._app.basePath||$.base,n=new y.a(j(j({},$),{},{base:base})),r=n.push;n.push=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_,n=arguments.length>2?arguments[2]:void 0;return r.call(this,t,e,n)};var o=n.resolve.bind(n);return n.resolve=function(t,e,n){return"string"==typeof t&&(t=Object(w.c)(t)),o(t,e,n)},n}var P=n(93),k=n(72),C=n(175),E=n(253);c.a.use(f.a);var R={};(R=function(t,e){if((t=t.default||t).commit)throw new Error("[nuxt] ".concat(e," should export a method that returns a Vuex instance."));return"function"!=typeof t&&(t=Object.assign({},t)),function(t,e){if(t.state&&"function"!=typeof t.state){console.warn("'state' should be a method that returns an object in ".concat(e));var n=Object.assign({},t.state);t=Object.assign({},t,{state:function(){return n}})}return t}(t,e)}(n(359),"store/index.js")).modules=R.modules||{};var D=R instanceof Function?R:function(){return new f.a.Store(Object.assign({strict:!1},R))};var T=n(179),A=n(109),N={theme:{dark:!0,themes:{dark:{primary:"#1976d2",accent:"#424242",secondary:"#ff8f00",info:"#26a69a",warning:"#ffc107",error:"#dd2c00",success:"#00e676"}}}};c.a.use(A.a,{});var I=function(t){var e="function"==typeof N?N(t):N;e.icons=e.icons||{},e.icons.iconfont="mdi";var n=new A.a(e);t.app.vuetify=n,t.$vuetify=n.framework};function M(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function F(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}c.a.component(h.a.name,h.a),c.a.component(m.a.name,F(F({},m.a),{},{render:function(t,e){return m.a._warned||(m.a._warned=!0,console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")),m.a.render(t,e)}})),c.a.component(P.a.name,P.a),c.a.component("NChild",P.a),c.a.component(C.a.name,C.a),Object.defineProperty(c.a.prototype,"$nuxt",{get:function(){var t=this.$root.$options.$nuxt;return t||"undefined"==typeof window?t:window.$nuxt},configurable:!0}),c.a.use(l.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var U={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"},B=f.a.Store.prototype.registerModule;function V(path,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=Array.isArray(path)?!!path.reduce((function(t,path){return t&&t[path]}),this.state):path in this.state;return B.call(this,path,t,F({preserveState:n},e))}function z(t){return H.apply(this,arguments)}function H(){return H=Object(r.a)(regeneratorRuntime.mark((function t(e){var n,o,f,l,d,h,path,v,m=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject('".concat(t,"', value) has no value provided"));l[t="$"+t]=e,l.context[t]||(l.context[t]=e),f[t]=l[t];var n="__nuxt_"+t+"_installed__";c.a[n]||(c.a[n]=!0,c.a.use((function(){Object.prototype.hasOwnProperty.call(c.a.prototype,t)||Object.defineProperty(c.a.prototype,t,{get:function(){return this.$root.$options[t]}})})))},n=m.length>1&&void 0!==m[1]?m[1]:{},t.next=4,S(0,n);case 4:return o=t.sent,(f=D(e)).$router=o,f.registerModule=V,l=F({head:{titleTemplate:"%s - ITunes",title:"ITunes",htmlAttrs:{lang:"en"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:""},{name:"format-detection",content:"telephone=no"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"},{rel:"stylesheet",type:"text/css",href:"https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap"},{rel:"stylesheet",type:"text/css",href:"https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"}],style:[],script:[]},store:f,router:o,nuxt:{defaultTransition:U,transitions:[U],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map((function(t){return t=t?"string"==typeof t?Object.assign({},U,{name:t}):Object.assign({},U,t):U})),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,l.context._errored=Boolean(t),t=t?Object(x.p)(t):null;var n=l.nuxt;return this&&(n=this.nuxt||this.$options.nuxt),n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},E.a),f.app=l,d=e?e.next:function(t){return l.router.push(t)},e?h=o.resolve(e.url).route:(path=Object(x.f)(o.options.base,o.options.mode),h=o.resolve(path).route),t.next=14,Object(x.t)(l,{store:f,route:h,next:d,error:l.nuxt.error.bind(l),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});case 14:if(v("config",n),window.__NUXT__&&window.__NUXT__.state&&f.replaceState(window.__NUXT__.state),l.context.enablePreview=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l.previewData=Object.assign({},t),v("preview",t)},"function"!=typeof T.default){t.next=20;break}return t.next=20,Object(T.default)(l.context,v);case 20:return t.next=23,I(l.context);case 23:return l.context.enablePreview=function(){console.warn("You cannot call enablePreview() outside a plugin.")},t.next=26,new Promise((function(t,e){if(!o.resolve(l.context.route.fullPath).route.matched.length)return t();o.replace(l.context.route.fullPath,t,(function(n){if(!n._isRouter)return e(n);if(2!==n.type)return t();var c=o.afterEach(function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(n,r){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(x.j)(n);case 3:l.context.route=e.sent,l.context.params=n.params||{},l.context.query=n.query||{},c(),t();case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())}))}));case 26:return t.abrupt("return",{store:f,app:l,router:o});case 27:case"end":return t.stop()}}),t)}))),H.apply(this,arguments)}},72:function(t,e,n){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(313),n(58)),c=n(132),f=n.n(c),l=n(369),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports;f()(component,{VApp:l.a})}}]);