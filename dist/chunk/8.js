/*! For license information please see 8.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"105":function(e,t,r){"use strict";e.exports=r(113)},"106":function(e,t,r){"use strict";r.d(t,"d",(function(){return S})),r.d(t,"c",(function(){return E})),r.d(t,"a",(function(){return k})),r.d(t,"b",(function(){return A}));var o=r(31),n=r.n(o),a=r(114),c=r.n(a),i=r(17),u=r.n(i),s=r(33),l=r.n(s),p=r(34),f=r.n(p),d=r(118),y=r.n(d),b=r(120),v=r.n(b),x=r(122),_=r.n(x),m=r(123),h=r.n(m),O=r(20),w=r.n(O);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=_()(e);if(t){var n=_()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return v()(this,r)}}w.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var a=e.ref.current,c=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&a.setAttribute(r,c),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(a.mpScrollTop=c);if("scrollLeft"===r)return void(a.mpScrollLeft=c);if("scrollIntoView"===r)return void(a.mpScrollIntoView=c)}if("function"==typeof c&&r.match(/^on[A-Z]/)){var u=r.substr(2).toLowerCase(),s=c;return"taro-scroll-view-core"===t&&"scroll"===u&&(s=function fn(e){e instanceof CustomEvent&&c.apply(null,Array.from(arguments))}),e.eventHandlers.push([u,s]),a.addEventListener(u,s)}return"string"==typeof c||"number"==typeof c?(a.setAttribute(r,c),void(a[r]=c)):"boolean"==typeof c?c?(a[r]=!0,a.setAttribute(r,c)):(a[r]=!1,a.removeAttribute(r)):void(a[r]=c)}if("string"==typeof c)return void a.setAttribute(r,c);if(!c)return void a.removeAttribute(r);if(o)if("string"==typeof i)a.style.cssText="";else for(var l in i)updateStyle(a,l,"");for(var p in c)updateStyle(a,p,c[p])}else a.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),a=(r.className||r.class||"").split(" "),c=[];return o.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat(h()(c),h()(a))).join(" ")}(a,o,n):c}var g=function reactifyWebComponent(e){var t=function(t){y()(Index,t);var r=_createSuper(Index);function Index(e){var t;return l()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(O.createRef)(),t}return f()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===u()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=c()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),Object(O.createElement)(e,n,r)}}]),Index}(w.a.Component);return w.a.forwardRef((function(e,r){return w.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=g("taro-input-core"),P=(w.a.createElement,w.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),w.a.createElement(j,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),S=g("taro-view-core"),E=(g("taro-icon-core"),g("taro-progress-core"),g("taro-rich-text-core"),g("taro-text-core")),k=g("taro-button-core"),A=(g("taro-checkbox-core"),g("taro-checkbox-group-core"),g("taro-editor-core"),g("taro-form-core"),P);g("taro-label-core"),g("taro-picker-core"),g("taro-picker-view-core"),g("taro-picker-view-column-core"),g("taro-radio-core"),g("taro-radio-group-core"),g("taro-slider-core"),g("taro-switch-core"),g("taro-cover-image-core"),g("taro-textarea-core"),g("taro-cover-view-core"),g("taro-movable-area-core"),g("taro-movable-view-core"),g("taro-scroll-view-core"),g("taro-swiper-core"),g("taro-swiper-item-core"),g("taro-functional-page-navigator-core"),g("taro-navigator-core"),g("taro-audio-core"),g("taro-camera-core"),g("taro-image-core"),g("taro-live-player-core"),g("taro-video-core"),g("taro-map-core"),g("taro-canvas-core"),g("taro-ad-core"),g("taro-official-account-core"),g("taro-open-data-core"),g("taro-web-view-core"),g("taro-navigation-bar-core"),g("taro-block-core"),g("taro-custom-wrapper-core")},"110":function(e,t,r){var o=r(111);e.exports=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},"111":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},"113":function(e,t,r){"use strict";r(36);var o=r(20),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),t.Fragment=a("react.fragment")}var c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,u={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,a={},s=null,l=null;for(o in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!u.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{"$$typeof":n,"type":e,"key":s,"ref":l,"props":a,"_owner":c.current}}t.jsx=q,t.jsxs=q},"114":function(e,t,r){var o=r(115),n=r(116),a=r(110),c=r(117);e.exports=function _slicedToArray(e,t){return o(e)||n(e,t)||a(e,t)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},"115":function(e,t){e.exports=function _arrayWithHoles(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},"116":function(e,t){e.exports=function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);c=!0);}catch(e){i=!0,n=e}finally{try{c||null==r.return||r.return()}finally{if(i)throw n}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},"117":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"118":function(e,t,r){var o=r(119);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"119":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"120":function(e,t,r){var o=r(17).default,n=r(121);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"121":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"122":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"123":function(e,t,r){var o=r(124),n=r(125),a=r(110),c=r(126);e.exports=function _toConsumableArray(e){return o(e)||n(e)||a(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},"124":function(e,t,r){var o=r(111);e.exports=function _arrayWithoutHoles(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"125":function(e,t){e.exports=function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"126":function(e,t){e.exports=function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"131":function(e,t,r){},"137":function(e,t,r){"use strict";r.r(t);var o=r(106),n=r(32),a=(r(131),r(105));t.default=function Index(){return Object(a.jsx)(o.d,{"className":"example-index","children":[{"label":"Button 按钮","url":"/pages/button/index"},{"label":"Flex 布局","url":"/pages/flex/index"},{"label":"Typography排版","url":"/pages/typography/index"},{"label":"Overlay遮罩层","url":"/pages/overlay/index"},{"label":"Dialog弹出框","url":"/pages/dialog/index"},{"label":"Field按钮","url":"/pages/field/index"}].map((function(e){return Object(a.jsx)(o.c,{"onClick":function onClick(){return n.default.navigateTo({"url":e.url})},"children":e.label},e.url)}))})}}}]);