/*! For license information please see 4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"100":function(e,t,r){var o,n=r(19);!function(){"use strict";var a={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=n(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var c=classNames.apply(null,r);c&&e.push(c)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)a.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):"object"===n(r(105))&&r(105)?void 0===(o=function(){return classNames}.apply(t,[]))||(e.exports=o):window.classNames=classNames}()},"101":function(e,t,r){"use strict";function _objectWithoutProperties(e,t){if(null==e)return{};var r,o,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,"a",(function(){return _objectWithoutProperties}))},"102":function(e,t){e.exports=function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{"value":r,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},"103":function(e,t,r){var o=r(104);e.exports=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},"104":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},"105":function(e,t){(function(t){e.exports=t}).call(this,{})},"106":function(e,t,r){"use strict";var o=r(15),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var a=Symbol.for;n=a("react.element"),t.Fragment=a("react.fragment")}var c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,a={},l=null,u=null;for(o in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,o)&&!s.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{"$$typeof":n,"type":e,"key":l,"ref":u,"props":a,"_owner":c.current}}t.jsx=q,t.jsxs=q},"107":function(e,t,r){var o=r(108),n=r(109),a=r(103),c=r(110);e.exports=function _slicedToArray(e,t){return o(e)||n(e,t)||a(e,t)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},"108":function(e,t){e.exports=function _arrayWithHoles(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},"109":function(e,t){e.exports=function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,a=[],c=!0,i=!1;try{for(r=r.call(e);!(c=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);c=!0);}catch(e){i=!0,n=e}finally{try{c||null==r.return||r.return()}finally{if(i)throw n}}return a}},e.exports.__esModule=!0,e.exports.default=e.exports},"110":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"111":function(e,t){e.exports=function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.__esModule=!0,e.exports.default=e.exports},"112":function(e,t){function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{"writable":!1}),e},e.exports.__esModule=!0,e.exports.default=e.exports},"113":function(e,t,r){var o=r(114);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"114":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"115":function(e,t,r){var o=r(19).default,n=r(116);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"116":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"117":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"118":function(e,t,r){var o=r(119),n=r(120),a=r(103),c=r(121);e.exports=function _toConsumableArray(e){return o(e)||n(e)||a(e)||c()},e.exports.__esModule=!0,e.exports.default=e.exports},"119":function(e,t,r){var o=r(104);e.exports=function _arrayWithoutHoles(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"120":function(e,t){e.exports=function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"121":function(e,t){e.exports=function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"122":function(e,t,r){"use strict";var o=r(2),n=r(6),a=r(101),c=r(98),i=r(27),s=r(100),l=r.n(s),u=r(97),p=["children","type","weight","align","ellipsis","copyable","className","onClick"],f=function TextComp(e){var t,r=e.children,s=e.type,f=void 0===s?"default":s,d=e.weight,b=void 0===d?"normal":d,y=e.align,x=e.ellipsis,m=e.copyable,v=e.className,j=e.onClick,O=Object(a.a)(e,p),h=l()("tv-text",(t={},Object(n.a)(t,"".concat("tv-text","-").concat(x),x),Object(n.a)(t,"".concat("tv-text","-").concat(b),b),Object(n.a)(t,"".concat("tv-text","-").concat(y),y),Object(n.a)(t,"".concat("tv-text","--").concat(f),f),Object(n.a)(t,"".concat("tv-text","--copy"),m),Object(n.a)(t,"".concat("tv-text","--ellipsis"),x),t),v);return Object(u.jsx)(c.b,Object(o.a)(Object(o.a)({"className":h,"onClick":function onClick(e){m&&m.text&&(Object(i.setClipboardData)({"data":m.text}),Object(i.showToast)({"title":m.info||"复制成功","icon":"success"})),j&&j(e)}},O),{},{"children":r}))},d=["children","className","href","onClick"],b=function TextComp(e){var t=e.children,r=e.className,n=e.href,s=e.onClick,p=Object(a.a)(e,d),f=l()("tv-link",r);return Object(u.jsx)(c.b,Object(o.a)(Object(o.a)({"className":f,"onClick":function onClick(e){n&&i.default.navigateTo({"url":n}),s&&s(e)}},p),{},{"children":t}))},y=["children","className","level","align"],x=function TextComp(e){var t,r=e.children,i=e.className,s=e.level,p=void 0===s?1:s,f=e.align,d=Object(a.a)(e,y),b=l()("tv-title",(t={},Object(n.a)(t,"".concat("tv-title","-").concat(p),p),Object(n.a)(t,"".concat("tv-title","-").concat(f),f),t),i);return Object(u.jsx)(c.b,Object(o.a)(Object(o.a)({"className":b},d),{},{"children":r}))};t.a={"Text":f,"Link":b,"Title":x}},"123":function(e,t,r){"use strict";var o=r(2),n=r(6),a=r(101),c=r(98),i=r(100),s=r.n(i),l=r(97),u=["children","size","block","round","plain","type","loading","className","noStyle","onClick"];t.a=function TvButton(e){var t,r,i=e.children,p=e.size,f=void 0===p?"normal":p,d=e.block,b=e.round,y=e.plain,x=e.type,m=void 0===x?"default":x,v=e.loading,j=e.className,O=e.noStyle,h=e.onClick,_=Object(a.a)(e,u),w=s()((t={},Object(n.a)(t,"".concat("tv-button","-view"),!0),Object(n.a)(t,"".concat("tv-button","-block"),d),t),j),g=s()("tv-button",(r={},Object(n.a)(r,"".concat("tv-button","-").concat(f),f),Object(n.a)(r,"".concat("tv-button","--").concat(m),m),Object(n.a)(r,"".concat("tv-button","--").concat(m,"__round"),m&&b),Object(n.a)(r,"".concat("tv-button","--").concat(m,"__plain"),m&&y),Object(n.a)(r,"".concat("tv-button","-round"),b),Object(n.a)(r,"".concat("tv-button","-nostyle"),O),r));return Object(l.jsx)(c.c,{"className":w,"children":Object(l.jsx)(c.a,Object(o.a)(Object(o.a)({"loading":v,"className":g,"plain":y,"size":["large","normal"].includes(f)||d?"default":"mini","disabled":v||_.disabled},_),{},{"onClick":function onClick(e){v||_.disabled||h&&h(e)},"children":i}))})}},"127":function(e,t,r){},"133":function(e,t,r){"use strict";r.r(t);var o=r(98),n=r(123),a=r(122),c=(r(127),r(97));t.default=function Index(){var e=[{"label":"主要按钮","type":"primary"},{"label":"信息按钮","type":"info"},{"label":"危险按钮","type":"danger"},{"label":"默认按钮","type":"default"},{"label":"警告按钮","type":"warning"}];return Object(c.jsxs)(o.c,{"className":"p-20","children":[Object(c.jsx)(a.a.Text,{"type":"secondary","className":"my-title","children":"普通用法"}),Object(c.jsx)(o.c,{"children":e.map((function(e){return Object(c.jsx)(n.a,{"className":"mr-32","type":e.type,"children":e.label},e.type)}))}),Object(c.jsx)(a.a.Text,{"type":"secondary","className":"my-title","children":"朴素按钮"}),Object(c.jsx)(o.c,{"children":e.map((function(e){return Object(c.jsx)(n.a,{"className":"mr-32","plain":!0,"type":e.type,"children":e.label},e.type)}))}),Object(c.jsx)(a.a.Text,{"type":"secondary","className":"my-title","children":"圆形按钮"}),Object(c.jsx)(o.c,{"children":e.map((function(e){return Object(c.jsx)(n.a,{"className":"mr-32","round":!0,"type":e.type,"children":e.label},e.type)}))}),Object(c.jsx)(a.a.Text,{"type":"secondary","className":"my-title","children":"禁用按钮"}),Object(c.jsx)(o.c,{"children":e.map((function(e){return Object(c.jsx)(n.a,{"className":"mr-32","round":!0,"disabled":!0,"type":e.type,"children":e.label},e.type)}))}),Object(c.jsx)(a.a.Text,{"type":"secondary","className":"my-title","children":"加载状态"}),Object(c.jsx)(o.c,{"children":e.map((function(e){return Object(c.jsx)(n.a,{"className":"mr-32","loading":!0,"type":e.type,"children":"warning"===e.type?"":e.label},e.type)}))}),Object(c.jsx)(a.a.Text,{"type":"secondary","className":"my-title","children":"按钮尺寸"}),Object(c.jsx)(o.c,{"children":[{"label":"大号按钮","size":"large"},{"label":"普通按钮","size":"normal"},{"label":"小型按钮","size":"small"},{"label":"迷你按钮","size":"mini"}].map((function(e){return Object(c.jsx)(n.a,{"className":"mr-32","size":e.size,"children":"warning"===e.size?"":e.label},e.size)}))}),Object(c.jsx)(a.a.Text,{"type":"secondary","className":"my-title","children":"块级元素"}),Object(c.jsx)(o.c,{"children":[{"label":"块级按钮"}].map((function(e){return Object(c.jsx)(n.a,{"className":"mr-32","type":"primary","block":!0,"children":e.label},e.label)}))})]})}},"97":function(e,t,r){"use strict";e.exports=r(106)},"98":function(e,t,r){"use strict";r.d(t,"c",(function(){return g})),r.d(t,"b",(function(){return N})),r.d(t,"a",(function(){return P}));var o=r(102),n=r.n(o),a=r(19),c=r.n(a),i=r(107),s=r.n(i),l=r(111),u=r.n(l),p=r(112),f=r.n(p),d=r(113),b=r.n(d),y=r(115),x=r.n(y),m=r(117),v=r.n(m),j=r(118),O=r.n(j),h=r(15),_=r.n(h);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=v()(e);if(t){var n=v()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return x()(this,r)}}_.a.createElement;var w=function reactifyWebComponent(e){var t=function(t){b()(Index,t);var r=_createSuper(Index);function Index(e){var t;return u()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(h.createRef)(),t}return f()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),Object.entries(this.props).forEach((function(o){var n=s()(o,2),a=n[0],i=n[1];if(r.ref.current&&"children"!==a)if("classname"!==a.toLowerCase())if("style"!==a){if("taro-scroll-view-core"===e){if("scrollTop"===a)return void(r.ref.current.mpScrollTop=i);if("scrollLeft"===a)return void(r.ref.current.mpScrollLeft=i);if("scrollIntoView"===a)return void(r.ref.current.mpScrollIntoView=i)}if("function"==typeof i&&a.match(/^on[A-Z]/)){var l=a.substr(2).toLowerCase(),u=i;return"taro-scroll-view-core"===e&&"scroll"===l&&(u=function fn(e){e instanceof CustomEvent&&i.apply(null,Array.from(arguments))}),r.eventHandlers.push([l,u]),r.ref.current.addEventListener(l,u)}if("string"!=typeof i&&"number"!=typeof i)return"boolean"==typeof i?i?(r.ref.current[a]=!0,r.ref.current.setAttribute(a,i)):(r.ref.current[a]=!1,r.ref.current.removeAttribute(a)):void(r.ref.current[a]=i);r.ref.current[a]=i}else{if("string"==typeof i)return r.ref.current.setAttribute(a,i);if(i&&"object"===c()(i)){for(var p in i)r.ref.current.style[p]=i[p];return}}else r.ref.current.className=t?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),a=(r.className||r.class||"").split(" "),c=[];return o.forEach((function(e){a.indexOf(e)>-1?(c.push(e),a=a.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&c.push(e)})),(c=[].concat(O()(c),O()(a))).join(" ")}(r.ref.current,t,r.props):i}))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===c()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=s()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),Object(h.createElement)(e,n,r)}}]),Index}(_.a.Component);return _.a.forwardRef((function(e,r){return _.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};w("taro-input-core"),_.a.createElement;var g=w("taro-view-core"),N=(w("taro-icon-core"),w("taro-progress-core"),w("taro-rich-text-core"),w("taro-text-core")),P=w("taro-button-core");w("taro-checkbox-core"),w("taro-checkbox-group-core"),w("taro-editor-core"),w("taro-form-core"),w("taro-label-core"),w("taro-picker-core"),w("taro-picker-view-core"),w("taro-picker-view-column-core"),w("taro-radio-core"),w("taro-radio-group-core"),w("taro-slider-core"),w("taro-switch-core"),w("taro-cover-image-core"),w("taro-textarea-core"),w("taro-cover-view-core"),w("taro-movable-area-core"),w("taro-movable-view-core"),w("taro-scroll-view-core"),w("taro-swiper-core"),w("taro-swiper-item-core"),w("taro-functional-page-navigator-core"),w("taro-navigator-core"),w("taro-audio-core"),w("taro-camera-core"),w("taro-image-core"),w("taro-live-player-core"),w("taro-video-core"),w("taro-map-core"),w("taro-canvas-core"),w("taro-ad-core"),w("taro-official-account-core"),w("taro-open-data-core"),w("taro-web-view-core"),w("taro-navigation-bar-core"),w("taro-block-core"),w("taro-custom-wrapper-core")}}]);