/*! For license information please see 10.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"115":function(e,t,r){"use strict";e.exports=r(124)},"116":function(e,t,r){"use strict";r.d(t,"j",(function(){return S})),r.d(t,"h",(function(){return P})),r.d(t,"a",(function(){return k})),r.d(t,"b",(function(){return N})),r.d(t,"d",(function(){return C})),r.d(t,"e",(function(){return E})),r.d(t,"f",(function(){return A})),r.d(t,"i",(function(){return I})),r.d(t,"g",(function(){return M})),r.d(t,"c",(function(){return R}));var o=r(32),n=r.n(o),c=r(125),a=r.n(c),i=r(17),s=r.n(i),l=r(33),u=r.n(l),f=r(34),p=r.n(f),b=r(129),d=r.n(b),j=r(131),v=r.n(j),O=r(133),y=r.n(O),x=r(134),h=r.n(x),m=r(20),_=r.n(m);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=y()(e);if(t){var n=y()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return v()(this,r)}}_.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var c=e.ref.current,a=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var s=r.substr(2).toLowerCase(),l=a;return"taro-scroll-view-core"===t&&"scroll"===s&&(l=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,l]),c.addEventListener(s,l)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(o)if("string"==typeof i)c.style.cssText="";else for(var u in i)updateStyle(c,u,"");for(var f in a)updateStyle(c,f,a[f])}else c.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return o.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&a.push(e)})),(a=[].concat(h()(a),h()(c))).join(" ")}(c,o,n):a}var w=function reactifyWebComponent(e){var t=function(t){d()(Index,t);var r=_createSuper(Index);function Index(e){var t;return u()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(m.createRef)(),t}return p()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===s()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=a()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),Object(m.createElement)(e,n,r)}}]),Index}(_.a.Component);return _.a.forwardRef((function(e,r){return _.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=w("taro-input-core"),T=(_.a.createElement,_.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),_.a.createElement(g,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),S=w("taro-view-core"),P=(w("taro-icon-core"),w("taro-progress-core"),w("taro-rich-text-core"),w("taro-text-core")),k=w("taro-button-core"),N=(w("taro-checkbox-core"),w("taro-checkbox-group-core"),w("taro-editor-core"),w("taro-form-core")),C=T,E=(w("taro-label-core"),w("taro-picker-core"),w("taro-picker-view-core"),w("taro-picker-view-column-core"),w("taro-radio-core")),A=w("taro-radio-group-core"),I=(w("taro-slider-core"),w("taro-switch-core"),w("taro-cover-image-core"),w("taro-textarea-core")),M=(w("taro-cover-view-core"),w("taro-movable-area-core"),w("taro-movable-view-core"),w("taro-scroll-view-core")),R=(w("taro-swiper-core"),w("taro-swiper-item-core"),w("taro-functional-page-navigator-core"),w("taro-navigator-core"),w("taro-audio-core"),w("taro-camera-core"),w("taro-image-core"));w("taro-live-player-core"),w("taro-video-core"),w("taro-map-core"),w("taro-canvas-core"),w("taro-ad-core"),w("taro-official-account-core"),w("taro-open-data-core"),w("taro-web-view-core"),w("taro-navigation-bar-core"),w("taro-block-core"),w("taro-custom-wrapper-core")},"117":function(e,t,r){var o,n=r(17);!function(){"use strict";var c={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=n(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=classNames.apply(null,r);a&&e.push(a)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)c.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):"object"===n(r(120))&&r(120)?void 0===(o=function(){return classNames}.apply(t,[]))||(e.exports=o):window.classNames=classNames}()},"118":function(e,t,r){"use strict";function _objectWithoutProperties(e,t){if(null==e)return{};var r,o,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,"a",(function(){return _objectWithoutProperties}))},"119":function(e,t,r){"use strict";var o=r(5),n=r(8),c=r(118),a=r(116),i=r(31),s=r(117),l=r.n(s),u=r(115),f=["children","type","weight","size","block","align","ellipsis","copyable","className","onClick"],p=function TextComp(e){var t,r=e.children,s=e.type,p=void 0===s?"default":s,b=e.weight,d=void 0===b?"normal":b,j=e.size,v=e.block,O=e.align,y=e.ellipsis,x=e.copyable,h=e.className,m=e.onClick,_=Object(c.a)(e,f),w=l()("tv-text",(t={},Object(n.a)(t,"".concat("tv-text","-").concat(y),y),Object(n.a)(t,"".concat("tv-text","-").concat(d),d),Object(n.a)(t,"".concat("tv-text","-").concat(O),O),Object(n.a)(t,"".concat("tv-text","--").concat(p),p),Object(n.a)(t,"".concat("tv-text","--").concat(j),j),Object(n.a)(t,"".concat("tv-text","--copy"),x),Object(n.a)(t,"".concat("tv-text","--ellipsis"),y),Object(n.a)(t,"".concat("tv-text","--block"),v),t),h);return Object(u.jsx)(a.h,Object(o.a)(Object(o.a)({"className":w,"onClick":function onClick(e){x&&x.text&&(Object(i.setClipboardData)({"data":x.text}),Object(i.showToast)({"title":x.info||"复制成功","icon":"success"})),m&&m(e)}},_),{},{"children":r}))},b=["children","className","href","onClick"],d=function TextComp(e){var t=e.children,r=e.className,n=e.href,s=e.onClick,f=Object(c.a)(e,b),p=l()("tv-link",r);return Object(u.jsx)(a.h,Object(o.a)(Object(o.a)({"className":p,"onClick":function onClick(e){n&&i.default.navigateTo({"url":n}),s&&s(e)}},f),{},{"children":t}))},j=["children","className","level","align"],v=function TextComp(e){var t,r=e.children,i=e.className,s=e.level,f=void 0===s?1:s,p=e.align,b=Object(c.a)(e,j),d=l()("tv-title",(t={},Object(n.a)(t,"".concat("tv-title","-").concat(f),f),Object(n.a)(t,"".concat("tv-title","-").concat(p),p),t),i);return Object(u.jsx)(a.h,Object(o.a)(Object(o.a)({"className":d},b),{},{"children":r}))};t.a={"Text":p,"Link":d,"Title":v}},"120":function(e,t){(function(t){e.exports=t}).call(this,{})},"121":function(e,t,r){var o=r(122);e.exports=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},"122":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},"124":function(e,t,r){"use strict";r(36);var o=r(20),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,c={},l=null,u=null;for(o in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,o)&&!s.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{"$$typeof":n,"type":e,"key":l,"ref":u,"props":c,"_owner":a.current}}t.jsx=q,t.jsxs=q},"125":function(e,t,r){var o=r(126),n=r(127),c=r(121),a=r(128);e.exports=function _slicedToArray(e,t){return o(e)||n(e,t)||c(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},"126":function(e,t){e.exports=function _arrayWithHoles(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},"127":function(e,t){e.exports=function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,c=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(o=r.next()).done)&&(c.push(o.value),!t||c.length!==t);a=!0);}catch(e){i=!0,n=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw n}}return c}},e.exports.__esModule=!0,e.exports.default=e.exports},"128":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"129":function(e,t,r){var o=r(130);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"130":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"131":function(e,t,r){var o=r(17).default,n=r(132);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"132":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"133":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"134":function(e,t,r){var o=r(135),n=r(136),c=r(121),a=r(137);e.exports=function _toConsumableArray(e){return o(e)||n(e)||c(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},"135":function(e,t,r){var o=r(122);e.exports=function _arrayWithoutHoles(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"136":function(e,t){e.exports=function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"137":function(e,t){e.exports=function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"138":function(e,t,r){"use strict";var o=r(5),n=r(8),c=r(118),a=r(116),i=r(117),s=r.n(i),l=r(115),u=["align","justify","direction","wrap","children","className"];t.a=function Flex(e){var t,r=e.align,i=void 0===r?"start":r,f=e.justify,p=void 0===f?"start":f,b=e.direction,d=void 0===b?"row":b,j=e.wrap,v=void 0===j?"wrap":j,O=e.children,y=e.className,x=Object(c.a)(e,u),h=s()("tv-flex",(t={},Object(n.a)(t,"".concat("tv-flex","-").concat(d),d),Object(n.a)(t,"".concat("tv-flex","-").concat(v),v),Object(n.a)(t,"".concat("tv-flex","-justify-").concat(p),p),Object(n.a)(t,"".concat("tv-flex","-align-").concat(i),i),t),y);return Object(l.jsx)(a.j,Object(o.a)(Object(o.a)({"className":h},x),{},{"children":O}))}},"160":function(e,t,r){},"177":function(e,t,r){"use strict";r.r(t);var o=r(116),n=r(5),c=r(9),a=r(8),i=r(118),s=r(20),l=r(117),u=r.n(l),f=r(31),p=r(119),b=r(115),d=function TvTab(e){var t,r=e.title,n=e.value,c=e.disabled,i=e.className,l=e.onTitle,f=Object(s.useContext)(O),d=u()("tv-tab",Object(a.a)({},"".concat("tv-tab","__actived"),n===f),i),j=u()((t={},Object(a.a)(t,"".concat("tv-tab","__title"),!0),Object(a.a)(t,"".concat("tv-tab","__disabled"),c),t));return Object(b.jsx)(o.j,{"className":d,"children":Object(b.jsx)(o.j,{"onClick":function onClick(){l&&l(n)},"className":"".concat("tv-tab","__head"),"children":Object(b.jsx)(p.a.Title,{"level":2,"className":j,"children":r})})})},j=r(138),v=["name","children","className","active","onChange"],O=Object(s.createContext)(""),y=function TvTabs(e){var t=e.name,r=e.children,l=e.className,p=e.active,d=e.onChange,y=Object(i.a)(e,v),x=u()("tv-tabs",Object(a.a)({},"tv-tabs-".concat(t),!0),l),h=Object(s.useState)(0),m=Object(c.a)(h,2),_=m[0],w=m[1],g=Object(s.useState)(p||(r&&r[0]?r[0].props.value:"")),T=Object(c.a)(g,2),S=T[0],P=T[1],k=Object(s.useState)({"all":[],"left":0,"width":40}),N=Object(c.a)(k,2),C=N[0],E=N[1],A=function getQuery(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;setTimeout((function(){Object(f.createSelectorQuery)().select(".".concat("tv-tabs","-").concat(t," .tv-tab__actived .tv-tab__title")).boundingClientRect().exec((function(t){E((function(r){for(var o=14,c=0;c<e;c++)o+=r.all[c].width;return setTimeout((function(){t[0].left>160?w(50*Math.ceil(o/160)):t[0].left<100&&w(-30*Math.ceil(o/160))}),30),Object(n.a)(Object(n.a)({},r),{},{"width":t[0].width,"left":o})}))}))}),120)};Object(s.useEffect)((function(){p&&P(p)}),[p]),Object(s.useEffect)((function(){setTimeout((function(){Object(f.createSelectorQuery)().selectAll(".".concat("tv-tabs","-").concat(t," .tv-tab__head")).boundingClientRect().exec((function(e){E((function(t){return Object(n.a)(Object(n.a)({},t),{},{"all":e[0]})}))}))}),100);var e=r?r.findIndex((function(e){return e.props.value===S})):0;A(e)}),[]);var I=function ChildRender(){var e=r&&"[object Array]"===Object.prototype.toString.call(r)&&r.find((function(e){return e.props.value===S}));return e.props.children?Object(b.jsx)(b.Fragment,{"children":e.props.children}):Object(b.jsx)(b.Fragment,{})};return Object(b.jsxs)(O.Provider,{"value":S,"children":[Object(b.jsx)(o.g,Object(n.a)(Object(n.a)({"scrollWithAnimation":!0,"showScrollbar":!1,"scrollX":!0,"enhanced":!0,"scrollLeft":_,"className":x},y),{},{"children":Object(b.jsxs)(j.a,{"wrap":"nowrap","className":"".concat("tv-tabs","__container"),"children":[s.Children.map(r,(function(e,t){return Object(s.cloneElement)(e,{"onTitle":function onTitle(r){e.props.disabled||(P(r),A(t),d&&d(r,t))}})})),Object(b.jsx)(o.j,{"style":{"transform":"translate3d(".concat(C.left,"px, 0px, 0px)"),"width":C.width+"px"},"className":"tv-tabs__line"})]})})),Object(b.jsx)(I,{})]})};y.Tab=d;var x=y;r(160),t.default=function Index(){return Object(b.jsxs)(b.Fragment,{"children":[Object(b.jsx)(p.a.Text,{"type":"secondary","block":!0,"className":"my-title p-20","children":"基础用法"}),Object(b.jsxs)(x,{"name":"one","onChange":function onChange(e,t){return console.log(e,t)},"active":"fruits2","children":[Object(b.jsx)(x.Tab,{"title":"水果","value":"fruits1","children":Object(b.jsx)(o.j,{"className":"bg-white","children":Object(b.jsx)(p.a.Text,{"children":"苹果"})})}),Object(b.jsx)(x.Tab,{"title":"蔬菜","value":"fruits2","children":Object(b.jsx)(o.j,{"className":"bg-white","children":Object(b.jsx)(p.a.Text,{"children":"青菜"})})}),Object(b.jsx)(x.Tab,{"title":"动物","value":"fruits3","children":Object(b.jsx)(o.j,{"className":"bg-white","children":Object(b.jsx)(p.a.Text,{"children":"小狗"})})})]}),Object(b.jsx)(p.a.Text,{"type":"secondary","block":!0,"className":"my-title p-20","children":"禁用"}),Object(b.jsxs)(x,{"name":"two","children":[Object(b.jsx)(x.Tab,{"title":"水果","value":"fruits1"}),Object(b.jsx)(x.Tab,{"title":"蔬菜","value":"fruits2"}),Object(b.jsx)(x.Tab,{"title":"动物","value":"fruits3","disabled":!0})]}),Object(b.jsx)(p.a.Text,{"type":"secondary","block":!0,"className":"my-title p-20","children":"超长"}),Object(b.jsxs)(x,{"name":"three","children":[Object(b.jsx)(x.Tab,{"title":"水果","value":"fruits1"}),Object(b.jsx)(x.Tab,{"title":"蔬菜","value":"fruits2"}),Object(b.jsx)(x.Tab,{"title":"动物","value":"fruits3"}),Object(b.jsx)(x.Tab,{"title":"芒果","value":"fruits4"}),Object(b.jsx)(x.Tab,{"title":"香蕉","value":"fruits5"}),Object(b.jsx)(x.Tab,{"title":"苹果","value":"fruits6"}),Object(b.jsx)(x.Tab,{"title":"菠萝","value":"fruits7"}),Object(b.jsx)(x.Tab,{"title":"柠檬","value":"fruits8"})]})]})}}}]);