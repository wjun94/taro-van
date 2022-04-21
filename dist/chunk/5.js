/*! For license information please see 5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"114":function(e,t,r){"use strict";e.exports=r(123)},"115":function(e,t,r){"use strict";r.d(t,"j",(function(){return S})),r.d(t,"h",(function(){return k})),r.d(t,"a",(function(){return N})),r.d(t,"b",(function(){return E})),r.d(t,"d",(function(){return T})),r.d(t,"e",(function(){return A})),r.d(t,"f",(function(){return I})),r.d(t,"i",(function(){return C})),r.d(t,"g",(function(){return M})),r.d(t,"c",(function(){return z}));var o=r(32),n=r.n(o),c=r(124),a=r.n(c),s=r(17),i=r.n(s),l=r(33),u=r.n(l),p=r(34),f=r.n(p),d=r(128),b=r.n(d),y=r(130),x=r.n(y),v=r(132),j=r.n(v),O=r(133),m=r.n(O),_=r(20),h=r.n(_);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=j()(e);if(t){var n=j()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return x()(this,r)}}h.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var c=e.ref.current,a=n[r],s=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var i=r.substr(2).toLowerCase(),l=a;return"taro-scroll-view-core"===t&&"scroll"===i&&(l=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([i,l]),c.addEventListener(i,l)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(o)if("string"==typeof s)c.style.cssText="";else for(var u in s)updateStyle(c,u,"");for(var p in a)updateStyle(c,p,a[p])}else c.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return o.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&a.push(e)})),(a=[].concat(m()(a),m()(c))).join(" ")}(c,o,n):a}var g=function reactifyWebComponent(e){var t=function(t){b()(Index,t);var r=_createSuper(Index);function Index(e){var t;return u()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(_.createRef)(),t}return f()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===i()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=a()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),Object(_.createElement)(e,n,r)}}]),Index}(h.a.Component);return h.a.forwardRef((function(e,r){return h.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=g("taro-input-core"),P=(h.a.createElement,h.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),h.a.createElement(w,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),S=g("taro-view-core"),k=(g("taro-icon-core"),g("taro-progress-core"),g("taro-rich-text-core"),g("taro-text-core")),N=g("taro-button-core"),E=(g("taro-checkbox-core"),g("taro-checkbox-group-core"),g("taro-editor-core"),g("taro-form-core")),T=P,A=(g("taro-label-core"),g("taro-picker-core"),g("taro-picker-view-core"),g("taro-picker-view-column-core"),g("taro-radio-core")),I=g("taro-radio-group-core"),C=(g("taro-slider-core"),g("taro-switch-core"),g("taro-cover-image-core"),g("taro-textarea-core")),M=(g("taro-cover-view-core"),g("taro-movable-area-core"),g("taro-movable-view-core"),g("taro-scroll-view-core")),z=(g("taro-swiper-core"),g("taro-swiper-item-core"),g("taro-functional-page-navigator-core"),g("taro-navigator-core"),g("taro-audio-core"),g("taro-camera-core"),g("taro-image-core"));g("taro-live-player-core"),g("taro-video-core"),g("taro-map-core"),g("taro-canvas-core"),g("taro-ad-core"),g("taro-official-account-core"),g("taro-open-data-core"),g("taro-web-view-core"),g("taro-navigation-bar-core"),g("taro-block-core"),g("taro-custom-wrapper-core")},"116":function(e,t,r){var o,n=r(17);!function(){"use strict";var c={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=n(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=classNames.apply(null,r);a&&e.push(a)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var s in r)c.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):"object"===n(r(119))&&r(119)?void 0===(o=function(){return classNames}.apply(t,[]))||(e.exports=o):window.classNames=classNames}()},"117":function(e,t,r){"use strict";function _objectWithoutProperties(e,t){if(null==e)return{};var r,o,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,"a",(function(){return _objectWithoutProperties}))},"118":function(e,t,r){"use strict";var o=r(5),n=r(8),c=r(117),a=r(115),s=r(31),i=r(116),l=r.n(i),u=r(114),p=["children","type","weight","size","block","align","ellipsis","copyable","className","onClick"],f=function TextComp(e){var t,r=e.children,i=e.type,f=void 0===i?"default":i,d=e.weight,b=void 0===d?"normal":d,y=e.size,x=e.block,v=e.align,j=e.ellipsis,O=e.copyable,m=e.className,_=e.onClick,h=Object(c.a)(e,p),g=l()("tv-text",(t={},Object(n.a)(t,"".concat("tv-text","-").concat(j),j),Object(n.a)(t,"".concat("tv-text","-").concat(b),b),Object(n.a)(t,"".concat("tv-text","-").concat(v),v),Object(n.a)(t,"".concat("tv-text","--").concat(f),f),Object(n.a)(t,"".concat("tv-text","--").concat(y),y),Object(n.a)(t,"".concat("tv-text","--copy"),O),Object(n.a)(t,"".concat("tv-text","--ellipsis"),j),Object(n.a)(t,"".concat("tv-text","--block"),x),t),m);return Object(u.jsx)(a.h,Object(o.a)(Object(o.a)({"className":g,"onClick":function onClick(e){O&&O.text&&(Object(s.setClipboardData)({"data":O.text}),Object(s.showToast)({"title":O.info||"复制成功","icon":"success"})),_&&_(e)}},h),{},{"children":r}))},d=["children","className","href","onClick"],b=function TextComp(e){var t=e.children,r=e.className,n=e.href,i=e.onClick,p=Object(c.a)(e,d),f=l()("tv-link",r);return Object(u.jsx)(a.h,Object(o.a)(Object(o.a)({"className":f,"onClick":function onClick(e){n&&s.default.navigateTo({"url":n}),i&&i(e)}},p),{},{"children":t}))},y=["children","className","level","align"],x=function TextComp(e){var t,r=e.children,s=e.className,i=e.level,p=void 0===i?1:i,f=e.align,d=Object(c.a)(e,y),b=l()("tv-title",(t={},Object(n.a)(t,"".concat("tv-title","-").concat(p),p),Object(n.a)(t,"".concat("tv-title","-").concat(f),f),t),s);return Object(u.jsx)(a.h,Object(o.a)(Object(o.a)({"className":b},d),{},{"children":r}))};t.a={"Text":f,"Link":b,"Title":x}},"119":function(e,t){(function(t){e.exports=t}).call(this,{})},"120":function(e,t,r){var o=r(121);e.exports=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},"121":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},"123":function(e,t,r){"use strict";r(36);var o=r(20),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,i={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,c={},l=null,u=null;for(o in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,o)&&!i.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{"$$typeof":n,"type":e,"key":l,"ref":u,"props":c,"_owner":a.current}}t.jsx=q,t.jsxs=q},"124":function(e,t,r){var o=r(125),n=r(126),c=r(120),a=r(127);e.exports=function _slicedToArray(e,t){return o(e)||n(e,t)||c(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},"125":function(e,t){e.exports=function _arrayWithHoles(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},"126":function(e,t){e.exports=function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,c=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(o=r.next()).done)&&(c.push(o.value),!t||c.length!==t);a=!0);}catch(e){s=!0,n=e}finally{try{a||null==r.return||r.return()}finally{if(s)throw n}}return c}},e.exports.__esModule=!0,e.exports.default=e.exports},"127":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"128":function(e,t,r){var o=r(129);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"129":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"130":function(e,t,r){var o=r(17).default,n=r(131);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"131":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"132":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"133":function(e,t,r){var o=r(134),n=r(135),c=r(120),a=r(136);e.exports=function _toConsumableArray(e){return o(e)||n(e)||c(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},"134":function(e,t,r){var o=r(121);e.exports=function _arrayWithoutHoles(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"135":function(e,t){e.exports=function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"136":function(e,t){e.exports=function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"137":function(e,t,r){"use strict";var o=r(5),n=r(8),c=r(117),a=r(115),s=r(116),i=r.n(s),l=r(114),u=["align","justify","direction","wrap","children","className"];t.a=function Flex(e){var t,r=e.align,s=void 0===r?"start":r,p=e.justify,f=void 0===p?"start":p,d=e.direction,b=void 0===d?"row":d,y=e.wrap,x=void 0===y?"wrap":y,v=e.children,j=e.className,O=Object(c.a)(e,u),m=i()("tv-flex",(t={},Object(n.a)(t,"".concat("tv-flex","-").concat(b),b),Object(n.a)(t,"".concat("tv-flex","-").concat(x),x),Object(n.a)(t,"".concat("tv-flex","-justify-").concat(f),f),Object(n.a)(t,"".concat("tv-flex","-align-").concat(s),s),t),j);return Object(l.jsx)(a.j,Object(o.a)(Object(o.a)({"className":m},O),{},{"children":v}))}},"140":function(e,t,r){"use strict";var o=r(5),n=r(8),c=r(117),a=r(115),s=r(116),i=r.n(s),l=r(114),u=["className","size"];t.a=function Loading(e){var t=e.className,r=e.size,s=void 0===r?"base":r,p=Object(c.a)(e,u),f=i()("tv-loading",Object(n.a)({},"".concat("tv-loading","__").concat(s),s)),d=i()("tv-loading__body",Object(n.a)({},"".concat("tv-loading","__body__").concat(s),s),t);return Object(l.jsx)(a.j,{"className":f,"children":Object(l.jsx)(a.j,Object(o.a)({"className":d},p))})}},"156":function(e,t,r){},"171":function(e,t,r){"use strict";r.r(t);var o=r(115),n=r(118),c=r(140),a=r(137),s=(r(156),r(114));t.default=function Index(){return Object(s.jsx)(o.j,{"className":"p-20","children":Object(s.jsxs)(o.j,{"children":[Object(s.jsx)(n.a.Text,{"type":"secondary","block":!0,"className":"my-title","children":"基本图标"}),Object(s.jsx)(n.a.Text,{"type":"secondary","block":!0,"className":"my-title","children":"图标大小"}),Object(s.jsxs)(a.a,{"align":"end","children":[Object(s.jsxs)(a.a,{"className":"example-loading__box__size","direction":"col","align":"center","children":[Object(s.jsx)(c.a,{"size":"sm"}),Object(s.jsx)(n.a.Text,{"type":"secondary","size":"sm","children":"sm"})]}),Object(s.jsxs)(a.a,{"className":"example-loading__box__size","direction":"col","align":"center","children":[Object(s.jsx)(c.a,{"size":"base"}),Object(s.jsx)(n.a.Text,{"type":"secondary","size":"sm","children":"base"})]}),Object(s.jsxs)(a.a,{"className":"example-loading__box__size","direction":"col","align":"center","children":[Object(s.jsx)(c.a,{"size":"lg"}),Object(s.jsx)(n.a.Text,{"type":"secondary","size":"sm","children":"lg"})]}),Object(s.jsxs)(a.a,{"className":"example-loading__box__size","direction":"col","align":"center","children":[Object(s.jsx)(c.a,{"size":"xl"}),Object(s.jsx)(n.a.Text,{"type":"secondary","size":"sm","children":"xl"})]}),Object(s.jsxs)(a.a,{"className":"example-loading__box__size","direction":"col","align":"center","children":[Object(s.jsx)(c.a,{"size":"xxl"}),Object(s.jsx)(n.a.Text,{"type":"secondary","size":"sm","children":"xxl"})]})]})]})})}}}]);