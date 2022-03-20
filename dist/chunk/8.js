/*! For license information please see 8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"114":function(e,t,r){"use strict";e.exports=r(123)},"115":function(e,t,r){"use strict";r.d(t,"j",(function(){return P})),r.d(t,"h",(function(){return S})),r.d(t,"a",(function(){return k})),r.d(t,"b",(function(){return T})),r.d(t,"d",(function(){return E})),r.d(t,"e",(function(){return A})),r.d(t,"f",(function(){return I})),r.d(t,"i",(function(){return C})),r.d(t,"g",(function(){return M})),r.d(t,"c",(function(){return R}));var o=r(32),n=r.n(o),a=r(124),c=r.n(a),s=r(17),i=r.n(s),l=r(33),u=r.n(l),p=r(34),f=r.n(p),d=r(128),x=r.n(d),b=r(130),j=r.n(b),m=r(132),y=r.n(m),v=r(133),O=r.n(v),_=r(20),h=r.n(_);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=y()(e);if(t){var n=y()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return j()(this,r)}}h.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var a=e.ref.current,c=n[r],s=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&a.setAttribute(r,c),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(a.mpScrollTop=c);if("scrollLeft"===r)return void(a.mpScrollLeft=c);if("scrollIntoView"===r)return void(a.mpScrollIntoView=c)}if("function"==typeof c&&r.match(/^on[A-Z]/)){var i=r.substr(2).toLowerCase(),l=c;return"taro-scroll-view-core"===t&&"scroll"===i&&(l=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([i,l]),a.addEventListener(i,l)}return"string"==typeof c||"number"==typeof c?(a.setAttribute(r,c),void(a[r]=c)):"boolean"==typeof c?c?(a[r]=!0,a.setAttribute(r,c)):(a[r]=!1,a.removeAttribute(r)):void(a[r]=c)}if("string"==typeof c)return void a.setAttribute(r,c);if(!c)return void a.removeAttribute(r);if(o)if("string"==typeof s)a.style.cssText="";else for(var u in s)updateStyle(a,u,"");for(var p in c)updateStyle(a,p,c[p])}else a.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),a=(r.className||r.class||"").split(" "),c=[];return o.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat(O()(c),O()(a))).join(" ")}(a,o,n):c}var w=function reactifyWebComponent(e){var t=function(t){x()(Index,t);var r=_createSuper(Index);function Index(e){var t;return u()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(_.createRef)(),t}return f()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===i()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=c()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),Object(_.createElement)(e,n,r)}}]),Index}(h.a.Component);return h.a.forwardRef((function(e,r){return h.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=w("taro-input-core"),N=(h.a.createElement,h.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),h.a.createElement(g,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),P=w("taro-view-core"),S=(w("taro-icon-core"),w("taro-progress-core"),w("taro-rich-text-core"),w("taro-text-core")),k=w("taro-button-core"),T=(w("taro-checkbox-core"),w("taro-checkbox-group-core"),w("taro-editor-core"),w("taro-form-core")),E=N,A=(w("taro-label-core"),w("taro-picker-core"),w("taro-picker-view-core"),w("taro-picker-view-column-core"),w("taro-radio-core")),I=w("taro-radio-group-core"),C=(w("taro-slider-core"),w("taro-switch-core"),w("taro-cover-image-core"),w("taro-textarea-core")),M=(w("taro-cover-view-core"),w("taro-movable-area-core"),w("taro-movable-view-core"),w("taro-scroll-view-core")),R=(w("taro-swiper-core"),w("taro-swiper-item-core"),w("taro-functional-page-navigator-core"),w("taro-navigator-core"),w("taro-audio-core"),w("taro-camera-core"),w("taro-image-core"));w("taro-live-player-core"),w("taro-video-core"),w("taro-map-core"),w("taro-canvas-core"),w("taro-ad-core"),w("taro-official-account-core"),w("taro-open-data-core"),w("taro-web-view-core"),w("taro-navigation-bar-core"),w("taro-block-core"),w("taro-custom-wrapper-core")},"116":function(e,t,r){var o,n=r(17);!function(){"use strict";var a={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=n(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var c=classNames.apply(null,r);c&&e.push(c)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var s in r)a.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):"object"===n(r(118))&&r(118)?void 0===(o=function(){return classNames}.apply(t,[]))||(e.exports=o):window.classNames=classNames}()},"117":function(e,t,r){"use strict";function _objectWithoutProperties(e,t){if(null==e)return{};var r,o,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,"a",(function(){return _objectWithoutProperties}))},"118":function(e,t){(function(t){e.exports=t}).call(this,{})},"119":function(e,t,r){var o=r(120);e.exports=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},"120":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},"121":function(e,t,r){"use strict";var o=r(5),n=r(8),a=r(117),c=r(115),s=r(31),i=r(116),l=r.n(i),u=r(114),p=["children","type","weight","size","block","align","ellipsis","copyable","className","onClick"],f=function TextComp(e){var t,r=e.children,i=e.type,f=void 0===i?"default":i,d=e.weight,x=void 0===d?"normal":d,b=e.size,j=e.block,m=e.align,y=e.ellipsis,v=e.copyable,O=e.className,_=e.onClick,h=Object(a.a)(e,p),w=l()("tv-text",(t={},Object(n.a)(t,"".concat("tv-text","-").concat(y),y),Object(n.a)(t,"".concat("tv-text","-").concat(x),x),Object(n.a)(t,"".concat("tv-text","-").concat(m),m),Object(n.a)(t,"".concat("tv-text","--").concat(f),f),Object(n.a)(t,"".concat("tv-text","--").concat(b),b),Object(n.a)(t,"".concat("tv-text","--copy"),v),Object(n.a)(t,"".concat("tv-text","--ellipsis"),y),Object(n.a)(t,"".concat("tv-text","--block"),j),t),O);return Object(u.jsx)(c.h,Object(o.a)(Object(o.a)({"className":w,"onClick":function onClick(e){v&&v.text&&(Object(s.setClipboardData)({"data":v.text}),Object(s.showToast)({"title":v.info||"复制成功","icon":"success"})),_&&_(e)}},h),{},{"children":r}))},d=["children","className","href","onClick"],x=function TextComp(e){var t=e.children,r=e.className,n=e.href,i=e.onClick,p=Object(a.a)(e,d),f=l()("tv-link",r);return Object(u.jsx)(c.h,Object(o.a)(Object(o.a)({"className":f,"onClick":function onClick(e){n&&s.default.navigateTo({"url":n}),i&&i(e)}},p),{},{"children":t}))},b=["children","className","level","align"],j=function TextComp(e){var t,r=e.children,s=e.className,i=e.level,p=void 0===i?1:i,f=e.align,d=Object(a.a)(e,b),x=l()("tv-title",(t={},Object(n.a)(t,"".concat("tv-title","-").concat(p),p),Object(n.a)(t,"".concat("tv-title","-").concat(f),f),t),s);return Object(u.jsx)(c.h,Object(o.a)(Object(o.a)({"className":x},d),{},{"children":r}))};t.a={"Text":f,"Link":x,"Title":j}},"123":function(e,t,r){"use strict";r(36);var o=r(20),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),t.Fragment=a("react.fragment")}var c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,a={},l=null,u=null;for(o in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,o)&&!i.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{"$$typeof":n,"type":e,"key":l,"ref":u,"props":a,"_owner":c.current}}t.jsx=q,t.jsxs=q},"124":function(e,t,r){var o=r(125),n=r(126),a=r(119),c=r(127);e.exports=function _slicedToArray(e,t){return o(e)||n(e,t)||a(e,t)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},"125":function(e,t){e.exports=function _arrayWithHoles(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},"126":function(e,t){e.exports=function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,a=[],c=!0,s=!1;try{for(r=r.call(e);!(c=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);c=!0);}catch(e){s=!0,n=e}finally{try{c||null==r.return||r.return()}finally{if(s)throw n}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},"127":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"128":function(e,t,r){var o=r(129);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"129":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"130":function(e,t,r){var o=r(17).default,n=r(131);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"131":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"132":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"133":function(e,t,r){var o=r(134),n=r(135),a=r(119),c=r(136);e.exports=function _toConsumableArray(e){return o(e)||n(e)||a(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},"134":function(e,t,r){var o=r(120);e.exports=function _arrayWithoutHoles(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"135":function(e,t){e.exports=function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"136":function(e,t){e.exports=function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"137":function(e,t,r){"use strict";var o=r(5),n=r(8),a=r(117),c=r(115),s=r(116),i=r.n(s),l=r(114),u=["align","justify","direction","wrap","children","className"];t.a=function Flex(e){var t,r=e.align,s=void 0===r?"start":r,p=e.justify,f=void 0===p?"start":p,d=e.direction,x=void 0===d?"row":d,b=e.wrap,j=void 0===b?"wrap":b,m=e.children,y=e.className,v=Object(a.a)(e,u),O=i()("tv-flex",(t={},Object(n.a)(t,"".concat("tv-flex","-").concat(x),x),Object(n.a)(t,"".concat("tv-flex","-").concat(j),j),Object(n.a)(t,"".concat("tv-flex","-justify-").concat(f),f),Object(n.a)(t,"".concat("tv-flex","-align-").concat(s),s),t),y);return Object(l.jsx)(c.j,Object(o.a)(Object(o.a)({"className":O},v),{},{"children":m}))}},"148":function(e,t,r){},"163":function(e,t,r){"use strict";r.r(t);var o=r(115),n=r(20),a=r(137),c=r(121),s=(r(148),r(114));t.default=function Index(){return Object(s.jsxs)(o.j,{"className":"pt-20","children":[Object(s.jsx)(c.a.Title,{"className":"pl-20 pt-20","level":3,"children":"Align"}),["start","end","center","baseline","stretch"].map((function(e){return Object(s.jsxs)(n.Fragment,{"children":[Object(s.jsx)(c.a.Text,{"type":"secondary","className":"block pl-20 pt-20 my-title","children":e}),Object(s.jsx)(o.j,{"className":"example-flex example-align-".concat(e),"children":Object(s.jsxs)(a.a,{"align":e,"className":"example-align_container example-align-".concat(e,"_container"),"children":[Object(s.jsx)(o.j,{"className":"example-box example-align-".concat(e,"_box")}),Object(s.jsx)(o.j,{"className":"example-box__1 example-align-".concat(e,"_box")}),Object(s.jsx)(o.j,{"className":"example-box__2 example-align-".concat(e,"_box")})]})})]},e)})),Object(s.jsx)(c.a.Title,{"className":"pl-20 pt-20","level":3,"children":"Justify"}),["start","center","end","between","around","evenly"].map((function(e){return Object(s.jsxs)(n.Fragment,{"children":[Object(s.jsx)(c.a.Text,{"type":"secondary","className":"block pl-20 pt-20 my-title","children":e}),Object(s.jsx)(o.j,{"className":"example-flex example-justify-".concat(e),"children":Object(s.jsxs)(a.a,{"justify":e,"className":"example-justify_container example-justify-".concat(e,"_container"),"children":[Object(s.jsx)(o.j,{"className":"example-box example-justify-".concat(e,"_box")}),Object(s.jsx)(o.j,{"className":"example-box__2 example-justify-".concat(e,"_box")})]})})]},e)})),Object(s.jsx)(c.a.Title,{"className":"pl-20 pt-20","level":3,"children":"Direction"}),["row","row-reverse","col","col-reverse"].map((function(e){return Object(s.jsxs)(n.Fragment,{"children":[Object(s.jsx)(c.a.Text,{"type":"secondary","className":"block pl-20 pt-20 my-title","children":e}),Object(s.jsx)(o.j,{"className":"example-flex example-direction-".concat(e),"children":Object(s.jsxs)(a.a,{"direction":e,"className":"example-direction_container example-direction-".concat(e,"_container"),"children":[Object(s.jsx)(o.j,{"className":"example-box example-direction-".concat(e,"_box")}),Object(s.jsx)(o.j,{"className":"example-box__2 example-direction-".concat(e,"_box")})]})})]},e)})),Object(s.jsx)(c.a.Title,{"className":"pl-20 pt-20","level":3,"children":"Wrap"}),["wrap","wrap-reverse","nowrap"].map((function(e){return Object(s.jsxs)(n.Fragment,{"children":[Object(s.jsx)(c.a.Text,{"type":"secondary","className":"block pl-20 pt-20 my-title","children":e}),Object(s.jsx)(o.j,{"className":"example-flex example-wrap-".concat(e),"children":Object(s.jsxs)(a.a,{"wrap":e,"className":"example-wrap_container example-wrap-".concat(e,"_container"),"children":[Object(s.jsx)(o.j,{"className":"example-box example-wrap-".concat(e,"_box")}),Object(s.jsx)(o.j,{"className":"example-box__1 example-wrap-".concat(e,"_box")}),Object(s.jsx)(o.j,{"className":"example-box__2 example-wrap-".concat(e,"_box")}),Object(s.jsx)(o.j,{"className":"example-box__3 example-wrap-".concat(e,"_box")})]})})]},e)}))]})}}}]);