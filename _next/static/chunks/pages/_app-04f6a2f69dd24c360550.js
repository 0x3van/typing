_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,i=void 0!==a&&a;return n||o&&i}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),a=(r=n("Xuae"))&&r.__esModule?r:{default:r},i=n("lwAK"),u=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var u=0,c=p.length;u<c;u++){var s=p[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?a=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?a=!1:(l.add(f),r[s]=l)}}}return a}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function v(e){var t=e.children,n=(0,o.useContext)(i.AmpStateContext),r=(0,o.useContext)(u.HeadManagerContext);return o.default.createElement(a.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}v.rewind=function(){};var h=v;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},QkDe:function(e,t,n){(function(r){var o,a;void 0===(a="function"===typeof(o=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?c(e):t}function f(e){var t=u();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function l(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}function p(e,t,n){return(p="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=l(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}var d=function(){function t(){e(this,t),Object.defineProperty(this,"listeners",{value:{},writable:!0,configurable:!0})}return n(t,[{key:"addEventListener",value:function(e,t){e in this.listeners||(this.listeners[e]=[]),this.listeners[e].push(t)}},{key:"removeEventListener",value:function(e,t){if(e in this.listeners)for(var n=this.listeners[e],r=0,o=n.length;r<o;r++)if(n[r]===t)return void n.splice(r,1)}},{key:"dispatchEvent",value:function(e){var t=this;if(e.type in this.listeners){for(var n=function(n){setTimeout((function(){return n.call(t,e)}))},r=this.listeners[e.type],o=0,a=r.length;o<a;o++)n(r[o]);return!e.defaultPrevented}}}]),t}(),v=function(t){o(i,t);var r=f(i);function i(){var t;return e(this,i),(t=r.call(this)).listeners||d.call(c(t)),Object.defineProperty(c(t),"aborted",{value:!1,writable:!0,configurable:!0}),Object.defineProperty(c(t),"onabort",{value:null,writable:!0,configurable:!0}),t}return n(i,[{key:"toString",value:function(){return"[object AbortSignal]"}},{key:"dispatchEvent",value:function(e){"abort"===e.type&&(this.aborted=!0,"function"===typeof this.onabort&&this.onabort.call(this,e)),p(a(i.prototype),"dispatchEvent",this).call(this,e)}}]),i}(d),h=function(){function t(){e(this,t),Object.defineProperty(this,"signal",{value:new v,writable:!0,configurable:!0})}return n(t,[{key:"abort",value:function(){var e;try{e=new Event("abort")}catch(t){"undefined"!==typeof document?document.createEvent?(e=document.createEvent("Event")).initEvent("abort",!1,!1):(e=document.createEventObject()).type="abort":e={type:"abort",bubbles:!1,cancelable:!1}}this.signal.dispatchEvent(e)}},{key:"toString",value:function(){return"[object AbortController]"}}]),t}();function y(e){return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL?(console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"),!0):"function"===typeof e.Request&&!e.Request.prototype.hasOwnProperty("signal")||!e.AbortController}function b(e){"function"===typeof e&&(e={fetch:e});var t=e,n=t.fetch,r=t.Request,o=void 0===r?n.Request:r,a=t.AbortController,i=t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL,u=void 0!==i&&i;if(!y({fetch:n,Request:o,AbortController:a,__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL:u}))return{fetch:n,Request:c};var c=o;(c&&!c.prototype.hasOwnProperty("signal")||u)&&((c=function(e,t){var n;t&&t.signal&&(n=t.signal,delete t.signal);var r=new o(e,t);return n&&Object.defineProperty(r,"signal",{writable:!1,enumerable:!1,configurable:!0,value:n}),r}).prototype=o.prototype);var s=n;return{fetch:function(e,t){var n=c&&c.prototype.isPrototypeOf(e)?e.signal:t?t.signal:void 0;if(n){var r;try{r=new DOMException("Aborted","AbortError")}catch(a){(r=new Error("Aborted")).name="AbortError"}if(n.aborted)return Promise.reject(r);var o=new Promise((function(e,t){n.addEventListener("abort",(function(){return t(r)}),{once:!0})}));return t&&t.signal&&delete t.signal,Promise.race([o,s(e,t)])}return s(e,t)},Request:c}}"undefined"!==typeof Symbol&&Symbol.toStringTag&&(h.prototype[Symbol.toStringTag]="AbortController",v.prototype[Symbol.toStringTag]="AbortSignal"),function(e){if(y(e))if(e.fetch){var t=b(e),n=t.fetch,r=t.Request;e.fetch=n,e.Request=r,Object.defineProperty(e,"AbortController",{writable:!0,enumerable:!1,configurable:!0,value:h}),Object.defineProperty(e,"AbortSignal",{writable:!0,enumerable:!1,configurable:!0,value:v})}else console.warn("fetch() is not available, cannot install abortcontroller-polyfill")}("undefined"!==typeof self?self:r)})?o.call(t,n,t,e):o)||(e.exports=a)}).call(this,n("3r9c"))},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||i()}},RwhY:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return _}));var r=n("ODXe"),o=n("o0o1"),a=n.n(o);function i(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void n(s)}u.done?t(c):Promise.resolve(c).then(r,o)}var u=n("rePB"),c=n("q1tI"),s=n.n(c),f=n("Ztiw"),l=n("Ls3p"),p=s.a.createElement;function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={correct:0,wrong:0,total:0,loading:!1},y=function(e,t){switch(t.type){case"incrementCorrect":return v(v({},e),{},{correct:e.correct+1,total:e.total+1});case"incrementWrong":return v(v({},e),{},{wrong:e.wrong+1,total:e.total+1});case"reset":return v({},h);case"START_SUBMIT_STATS":return v(v({},e),{},{loading:!0});case"FINISH_SUBMIT_STATS":case"ERROR_SUBMIT_STATS":return v(v({},e),{},{loading:!1});default:throw new Error("Unhandled action type")}},b={SUBMIT_STATS:function(e){var t=e.dispatch,n=e.signal,r=e.getState;return function(){var e,o=(e=a.a.mark((function e(o){var i,u,c,s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"START_SUBMIT_STATS"}),e.prev=1,i=r(),u=i.correct,c=i.wrong,s=i.total,e.next=5,l.b.collection("results").add({stats:{correct:u,wrong:c,total:s},timestamp:+new Date,user:o.payload.uid});case 5:n.aborted||t({type:"FINISH_SUBMIT_STATS"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n.aborted||t({type:"ERROR_SUBMIT_STATS"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function u(e){i(a,r,o,u,c,"next",e)}function c(e){i(a,r,o,u,c,"throw",e)}u(void 0)}))});return function(e){return o.apply(this,arguments)}}()}},g=s.a.createContext(void 0),w=s.a.createContext(void 0);g.displayName="Stats";g.Consumer;function O(){var e=Object(c.useContext)(g);if(void 0===e)throw new Error("useStatsState must be used within a StatsProvider");return e}function m(){var e=Object(c.useContext)(w);if(void 0===e)throw new Error("useStatsDispatch must be used within a StatsProvider");return e}function _(){return[O(),m()]}var S=function(e){var t=e.children,n=e.initialState,o=void 0===n?h:n,a=Object(f.useReducerAsync)(y,o,b),i=Object(r.a)(a,2),u=i[0],c=i[1];return p(g.Provider,{value:u},p(w.Provider,{value:c},t))}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),u=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){i(n,e);var t=s(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},Ztiw:function(e,t,n){!function(e,t){var n="undefined"==typeof window||/ServerSideRendering/.test(window.navigator&&window.navigator.userAgent)?t.useEffect:t.useLayoutEffect;e.useReducerAsync=function(e,r,o,a){var i,u=((i=t.useRef()).current||(i.current=new AbortController),t.useEffect((function(){return function(){i.current.abort()}}),[]),i.current.signal),c=a||o,s=t.useReducer(e,r,a&&o),f=s[0],l=s[1],p=t.useRef(f);n((function(){p.current=f}),[f]);var d=t.useCallback((function(){return p.current}),[]),v=t.useCallback((function(e){var t=(e||{}).type,n=t&&c[t]||null;n?n({dispatch:l,getState:d,signal:u})(e):l(e)}),[c,d,u]);return[f,v]}}(t,n("q1tI"))},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},c473:function(e,t,n){},cha2:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("8Kt/"),o=n.n(r),a=(n("c473"),n("vD2L")),i=n("RwhY"),u=n("CjxU"),c=n("uDoD"),s=n("q1tI"),f=n.n(s),l=(n("QkDe"),f.a.createElement);function p(e){var t=e.Component,n=e.pageProps;return l(f.a.StrictMode,null,l(o.a,null,l("title",null,"evan's typing test thing"),l("link",{rel:"icon",href:"/favicon.ico"})),l(a.a,null,l(i.a,null,l(u.a,{theme:c.a},l(t,n)))))}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o}},[[0,1,2,4,5,0,3,6]]]);