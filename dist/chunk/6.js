/*! For license information please see 6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"115":function(e,t,r){"use strict";e.exports=r(124)},"116":function(e,t,r){"use strict";r.d(t,"j",(function(){return k})),r.d(t,"h",(function(){return S})),r.d(t,"a",(function(){return N})),r.d(t,"b",(function(){return T})),r.d(t,"d",(function(){return E})),r.d(t,"e",(function(){return C})),r.d(t,"f",(function(){return A})),r.d(t,"i",(function(){return I})),r.d(t,"g",(function(){return M})),r.d(t,"c",(function(){return R}));var o=r(32),n=r.n(o),c=r(125),a=r.n(c),i=r(17),s=r.n(i),l=r(33),u=r.n(l),p=r(34),f=r.n(p),d=r(129),b=r.n(d),y=r(131),j=r.n(y),v=r(133),m=r.n(v),x=r(134),O=r.n(x),h=r(20),_=r.n(h);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=m()(e);if(t){var n=m()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return j()(this,r)}}_.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var c=e.ref.current,a=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var s=r.substr(2).toLowerCase(),l=a;return"taro-scroll-view-core"===t&&"scroll"===s&&(l=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,l]),c.addEventListener(s,l)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(o)if("string"==typeof i)c.style.cssText="";else for(var u in i)updateStyle(c,u,"");for(var p in a)updateStyle(c,p,a[p])}else c.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return o.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&a.push(e)})),(a=[].concat(O()(a),O()(c))).join(" ")}(c,o,n):a}var w=function reactifyWebComponent(e){var t=function(t){b()(Index,t);var r=_createSuper(Index);function Index(e){var t;return u()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(h.createRef)(),t}return f()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===s()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=a()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),Object(h.createElement)(e,n,r)}}]),Index}(_.a.Component);return _.a.forwardRef((function(e,r){return _.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=w("taro-input-core"),P=(_.a.createElement,_.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),_.a.createElement(g,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),k=w("taro-view-core"),S=(w("taro-icon-core"),w("taro-progress-core"),w("taro-rich-text-core"),w("taro-text-core")),N=w("taro-button-core"),T=(w("taro-checkbox-core"),w("taro-checkbox-group-core"),w("taro-editor-core"),w("taro-form-core")),E=P,C=(w("taro-label-core"),w("taro-picker-core"),w("taro-picker-view-core"),w("taro-picker-view-column-core"),w("taro-radio-core")),A=w("taro-radio-group-core"),I=(w("taro-slider-core"),w("taro-switch-core"),w("taro-cover-image-core"),w("taro-textarea-core")),M=(w("taro-cover-view-core"),w("taro-movable-area-core"),w("taro-movable-view-core"),w("taro-scroll-view-core")),R=(w("taro-swiper-core"),w("taro-swiper-item-core"),w("taro-functional-page-navigator-core"),w("taro-navigator-core"),w("taro-audio-core"),w("taro-camera-core"),w("taro-image-core"));w("taro-live-player-core"),w("taro-video-core"),w("taro-map-core"),w("taro-canvas-core"),w("taro-ad-core"),w("taro-official-account-core"),w("taro-open-data-core"),w("taro-web-view-core"),w("taro-navigation-bar-core"),w("taro-block-core"),w("taro-custom-wrapper-core")},"117":function(e,t,r){var o,n=r(17);!function(){"use strict";var c={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=n(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=classNames.apply(null,r);a&&e.push(a)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)c.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):"object"===n(r(120))&&r(120)?void 0===(o=function(){return classNames}.apply(t,[]))||(e.exports=o):window.classNames=classNames}()},"118":function(e,t,r){"use strict";function _objectWithoutProperties(e,t){if(null==e)return{};var r,o,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,"a",(function(){return _objectWithoutProperties}))},"119":function(e,t,r){"use strict";var o=r(5),n=r(8),c=r(118),a=r(116),i=r(31),s=r(117),l=r.n(s),u=r(115),p=["children","type","weight","size","block","align","ellipsis","copyable","className","onClick"],f=function TextComp(e){var t,r=e.children,s=e.type,f=void 0===s?"default":s,d=e.weight,b=void 0===d?"normal":d,y=e.size,j=e.block,v=e.align,m=e.ellipsis,x=e.copyable,O=e.className,h=e.onClick,_=Object(c.a)(e,p),w=l()("tv-text",(t={},Object(n.a)(t,"".concat("tv-text","-").concat(m),m),Object(n.a)(t,"".concat("tv-text","-").concat(b),b),Object(n.a)(t,"".concat("tv-text","-").concat(v),v),Object(n.a)(t,"".concat("tv-text","--").concat(f),f),Object(n.a)(t,"".concat("tv-text","--").concat(y),y),Object(n.a)(t,"".concat("tv-text","--copy"),x),Object(n.a)(t,"".concat("tv-text","--ellipsis"),m),Object(n.a)(t,"".concat("tv-text","--block"),j),t),O);return Object(u.jsx)(a.h,Object(o.a)(Object(o.a)({"className":w,"onClick":function onClick(e){x&&x.text&&(Object(i.setClipboardData)({"data":x.text}),Object(i.showToast)({"title":x.info||"复制成功","icon":"success"})),h&&h(e)}},_),{},{"children":r}))},d=["children","className","href","onClick"],b=function TextComp(e){var t=e.children,r=e.className,n=e.href,s=e.onClick,p=Object(c.a)(e,d),f=l()("tv-link",r);return Object(u.jsx)(a.h,Object(o.a)(Object(o.a)({"className":f,"onClick":function onClick(e){n&&i.default.navigateTo({"url":n}),s&&s(e)}},p),{},{"children":t}))},y=["children","className","level","align"],j=function TextComp(e){var t,r=e.children,i=e.className,s=e.level,p=void 0===s?1:s,f=e.align,d=Object(c.a)(e,y),b=l()("tv-title",(t={},Object(n.a)(t,"".concat("tv-title","-").concat(p),p),Object(n.a)(t,"".concat("tv-title","-").concat(f),f),t),i);return Object(u.jsx)(a.h,Object(o.a)(Object(o.a)({"className":b},d),{},{"children":r}))};t.a={"Text":f,"Link":b,"Title":j}},"120":function(e,t){(function(t){e.exports=t}).call(this,{})},"121":function(e,t,r){var o=r(122);e.exports=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},"122":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},"124":function(e,t,r){"use strict";r(36);var o=r(20),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,c={},l=null,u=null;for(o in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,o)&&!s.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{"$$typeof":n,"type":e,"key":l,"ref":u,"props":c,"_owner":a.current}}t.jsx=q,t.jsxs=q},"125":function(e,t,r){var o=r(126),n=r(127),c=r(121),a=r(128);e.exports=function _slicedToArray(e,t){return o(e)||n(e,t)||c(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},"126":function(e,t){e.exports=function _arrayWithHoles(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},"127":function(e,t){e.exports=function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,c=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(o=r.next()).done)&&(c.push(o.value),!t||c.length!==t);a=!0);}catch(e){i=!0,n=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw n}}return c}},e.exports.__esModule=!0,e.exports.default=e.exports},"128":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"129":function(e,t,r){var o=r(130);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"130":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"131":function(e,t,r){var o=r(17).default,n=r(132);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"132":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"133":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"134":function(e,t,r){var o=r(135),n=r(136),c=r(121),a=r(137);e.exports=function _toConsumableArray(e){return o(e)||n(e)||c(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},"135":function(e,t,r){var o=r(122);e.exports=function _arrayWithoutHoles(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"136":function(e,t){e.exports=function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"137":function(e,t){e.exports=function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"139":function(e,t,r){"use strict";var o=r(5),n=r(8),c=r(118),a=r(116),i=r(117),s=r.n(i),l=r(115),u=["children","size","block","round","plain","type","loading","className","noStyle","onClick"];t.a=function TvButton(e){var t,r,i=e.children,p=e.size,f=void 0===p?"normal":p,d=e.block,b=e.round,y=e.plain,j=e.type,v=void 0===j?"default":j,m=e.loading,x=e.className,O=e.noStyle,h=e.onClick,_=Object(c.a)(e,u),w=s()((t={},Object(n.a)(t,"".concat("tv-button","-view"),!0),Object(n.a)(t,"".concat("tv-button","-block"),d),t),x),g=s()("tv-button",(r={},Object(n.a)(r,"".concat("tv-button","-").concat(f),f),Object(n.a)(r,"".concat("tv-button","--").concat(v),v),Object(n.a)(r,"".concat("tv-button","--").concat(v,"__round"),v&&b),Object(n.a)(r,"".concat("tv-button","--").concat(v,"__plain"),v&&y),Object(n.a)(r,"".concat("tv-button","-round"),b),Object(n.a)(r,"".concat("tv-button","-nostyle"),O),r));return Object(l.jsx)(a.j,{"className":w,"children":Object(l.jsx)(a.a,Object(o.a)(Object(o.a)({"loading":m,"className":g,"plain":y,"size":["large","normal"].includes(f)||d?"default":"mini","disabled":m||_.disabled},_),{},{"onClick":function onClick(e){m||_.disabled||h&&h(e)},"children":i}))})}},"148":function(e,t,r){},"164":function(e,t,r){"use strict";r.r(t);var o=r(116),n=r(139),c=r(119),a=(r(148),r(115));t.default=function Index(){var e=[{"label":"主要按钮","type":"primary"},{"label":"信息按钮","type":"info"},{"label":"危险按钮","type":"danger"},{"label":"默认按钮","type":"default"},{"label":"警告按钮","type":"warning"}];return Object(a.jsxs)(o.j,{"className":"p-20","children":[Object(a.jsx)(c.a.Text,{"type":"secondary","className":"my-title","children":"基础用法"}),Object(a.jsx)(o.j,{"children":e.map((function(e){return Object(a.jsx)(n.a,{"className":"mr-32","type":e.type,"children":e.label},e.type)}))}),Object(a.jsx)(c.a.Text,{"type":"secondary","className":"my-title","children":"朴素按钮"}),Object(a.jsx)(o.j,{"children":e.map((function(e){return Object(a.jsx)(n.a,{"className":"mr-32","plain":!0,"type":e.type,"children":e.label},e.type)}))}),Object(a.jsx)(c.a.Text,{"type":"secondary","className":"my-title","children":"圆形按钮"}),Object(a.jsx)(o.j,{"children":e.map((function(e){return Object(a.jsx)(n.a,{"className":"mr-32","round":!0,"type":e.type,"children":e.label},e.type)}))}),Object(a.jsx)(c.a.Text,{"type":"secondary","className":"my-title","children":"禁用按钮"}),Object(a.jsx)(o.j,{"children":e.map((function(e){return Object(a.jsx)(n.a,{"className":"mr-32","round":!0,"disabled":!0,"type":e.type,"children":e.label},e.type)}))}),Object(a.jsx)(c.a.Text,{"type":"secondary","className":"my-title","children":"加载状态"}),Object(a.jsx)(o.j,{"children":e.map((function(e){return Object(a.jsx)(n.a,{"className":"mr-32","loading":!0,"type":e.type,"children":"warning"===e.type?"":e.label},e.type)}))}),Object(a.jsx)(c.a.Text,{"type":"secondary","className":"my-title","children":"按钮尺寸"}),Object(a.jsx)(o.j,{"children":[{"label":"大号按钮","size":"large"},{"label":"普通按钮","size":"normal"},{"label":"小型按钮","size":"small"},{"label":"迷你按钮","size":"mini"}].map((function(e){return Object(a.jsx)(n.a,{"className":"mr-32","size":e.size,"children":"warning"===e.size?"":e.label},e.size)}))}),Object(a.jsx)(c.a.Text,{"type":"secondary","className":"my-title","children":"块级元素"}),Object(a.jsx)(o.j,{"children":[{"label":"块级按钮"}].map((function(e){return Object(a.jsx)(n.a,{"className":"mr-32","type":"primary","block":!0,"children":e.label},e.label)}))})]})}}}]);