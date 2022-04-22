/*! For license information please see 4.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"115":function(e,t,r){"use strict";e.exports=r(124)},"116":function(e,t,r){"use strict";r.d(t,"j",(function(){return k})),r.d(t,"h",(function(){return S})),r.d(t,"a",(function(){return N})),r.d(t,"b",(function(){return E})),r.d(t,"d",(function(){return A})),r.d(t,"e",(function(){return C})),r.d(t,"f",(function(){return T})),r.d(t,"i",(function(){return I})),r.d(t,"g",(function(){return M})),r.d(t,"c",(function(){return R}));var o=r(32),n=r.n(o),c=r(125),a=r.n(c),i=r(17),s=r.n(i),l=r(33),u=r.n(l),p=r(34),f=r.n(p),d=r(129),b=r.n(d),y=r(131),j=r.n(y),v=r(133),O=r.n(v),x=r(134),h=r.n(x),_=r(20),m=r.n(_);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,o=O()(e);if(t){var n=O()(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return j()(this,r)}}m.a.createElement;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):e.style[t]=r}function updateProp(e,t,r,o,n){var c=e.ref.current,a=n[r],i=o?o[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&c.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(c.mpScrollTop=a);if("scrollLeft"===r)return void(c.mpScrollLeft=a);if("scrollIntoView"===r)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var s=r.substr(2).toLowerCase(),l=a;return"taro-scroll-view-core"===t&&"scroll"===s&&(l=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,l]),c.addEventListener(s,l)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(r,a),void(c[r]=a)):"boolean"==typeof a?a?(c[r]=!0,c.setAttribute(r,a)):(c[r]=!1,c.removeAttribute(r)):void(c[r]=a)}if("string"==typeof a)return void c.setAttribute(r,a);if(!a)return void c.removeAttribute(r);if(o)if("string"==typeof i)c.style.cssText="";else for(var u in i)updateStyle(c,u,"");for(var p in a)updateStyle(c,p,a[p])}else c.className=o?function getClassName(e,t,r){var o=Array.from(e.classList),n=(t.className||t.class||"").split(" "),c=(r.className||r.class||"").split(" "),a=[];return o.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(t){return t!==e}))):-1===n.indexOf(e)&&a.push(e)})),(a=[].concat(h()(a),h()(c))).join(" ")}(c,o,n):a}var g=function reactifyWebComponent(e){var t=function(t){b()(Index,t);var r=_createSuper(Index);function Index(e){var t;return u()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(_.createRef)(),t}return f()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(o){"children"===o||"key"===o||o in r.props||updateProp(r,e,o,t,r.props)})),Object.keys(this.props).forEach((function(o){updateProp(r,e,o,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===s()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=a()(t,2),o=r[0],n=r[1];e.ref.current&&e.ref.current.removeEventListener(o,n)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),Object(_.createElement)(e,n,r)}}]),Index}(m.a.Component);return m.a.forwardRef((function(e,r){return m.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))};function input_ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function input_objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?input_ownKeys(Object(r),!0).forEach((function(t){n()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):input_ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=g("taro-input-core"),P=(m.a.createElement,m.a.forwardRef((function(e,t){var r=input_objectSpread({},e);return r.hasOwnProperty("focus")&&(r.autoFocus=Boolean(r.focus),delete r.focus),m.a.createElement(w,input_objectSpread(input_objectSpread({},r),{},{"ref":t}))}))),k=g("taro-view-core"),S=(g("taro-icon-core"),g("taro-progress-core"),g("taro-rich-text-core"),g("taro-text-core")),N=g("taro-button-core"),E=(g("taro-checkbox-core"),g("taro-checkbox-group-core"),g("taro-editor-core"),g("taro-form-core")),A=P,C=(g("taro-label-core"),g("taro-picker-core"),g("taro-picker-view-core"),g("taro-picker-view-column-core"),g("taro-radio-core")),T=g("taro-radio-group-core"),I=(g("taro-slider-core"),g("taro-switch-core"),g("taro-cover-image-core"),g("taro-textarea-core")),M=(g("taro-cover-view-core"),g("taro-movable-area-core"),g("taro-movable-view-core"),g("taro-scroll-view-core")),R=(g("taro-swiper-core"),g("taro-swiper-item-core"),g("taro-functional-page-navigator-core"),g("taro-navigator-core"),g("taro-audio-core"),g("taro-camera-core"),g("taro-image-core"));g("taro-live-player-core"),g("taro-video-core"),g("taro-map-core"),g("taro-canvas-core"),g("taro-ad-core"),g("taro-official-account-core"),g("taro-open-data-core"),g("taro-web-view-core"),g("taro-navigation-bar-core"),g("taro-block-core"),g("taro-custom-wrapper-core")},"117":function(e,t,r){var o,n=r(17);!function(){"use strict";var c={}.hasOwnProperty;function classNames(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=n(r);if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=classNames.apply(null,r);a&&e.push(a)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)c.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):"object"===n(r(120))&&r(120)?void 0===(o=function(){return classNames}.apply(t,[]))||(e.exports=o):window.classNames=classNames}()},"118":function(e,t,r){"use strict";function _objectWithoutProperties(e,t){if(null==e)return{};var r,o,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)r=c[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}r.d(t,"a",(function(){return _objectWithoutProperties}))},"119":function(e,t,r){"use strict";var o=r(5),n=r(8),c=r(118),a=r(116),i=r(31),s=r(117),l=r.n(s),u=r(115),p=["children","type","weight","size","block","align","ellipsis","copyable","className","onClick"],f=function TextComp(e){var t,r=e.children,s=e.type,f=void 0===s?"default":s,d=e.weight,b=void 0===d?"normal":d,y=e.size,j=e.block,v=e.align,O=e.ellipsis,x=e.copyable,h=e.className,_=e.onClick,m=Object(c.a)(e,p),g=l()("tv-text",(t={},Object(n.a)(t,"".concat("tv-text","-").concat(O),O),Object(n.a)(t,"".concat("tv-text","-").concat(b),b),Object(n.a)(t,"".concat("tv-text","-").concat(v),v),Object(n.a)(t,"".concat("tv-text","--").concat(f),f),Object(n.a)(t,"".concat("tv-text","--").concat(y),y),Object(n.a)(t,"".concat("tv-text","--copy"),x),Object(n.a)(t,"".concat("tv-text","--ellipsis"),O),Object(n.a)(t,"".concat("tv-text","--block"),j),t),h);return Object(u.jsx)(a.h,Object(o.a)(Object(o.a)({"className":g,"onClick":function onClick(e){x&&x.text&&(Object(i.setClipboardData)({"data":x.text}),Object(i.showToast)({"title":x.info||"复制成功","icon":"success"})),_&&_(e)}},m),{},{"children":r}))},d=["children","className","href","onClick"],b=function TextComp(e){var t=e.children,r=e.className,n=e.href,s=e.onClick,p=Object(c.a)(e,d),f=l()("tv-link",r);return Object(u.jsx)(a.h,Object(o.a)(Object(o.a)({"className":f,"onClick":function onClick(e){n&&i.default.navigateTo({"url":n}),s&&s(e)}},p),{},{"children":t}))},y=["children","className","level","align"],j=function TextComp(e){var t,r=e.children,i=e.className,s=e.level,p=void 0===s?1:s,f=e.align,d=Object(c.a)(e,y),b=l()("tv-title",(t={},Object(n.a)(t,"".concat("tv-title","-").concat(p),p),Object(n.a)(t,"".concat("tv-title","-").concat(f),f),t),i);return Object(u.jsx)(a.h,Object(o.a)(Object(o.a)({"className":b},d),{},{"children":r}))};t.a={"Text":f,"Link":b,"Title":j}},"120":function(e,t){(function(t){e.exports=t}).call(this,{})},"121":function(e,t,r){var o=r(122);e.exports=function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},"122":function(e,t){e.exports=function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},"124":function(e,t,r){"use strict";r(36);var o=r(20),n=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var c=Symbol.for;n=c("react.element"),t.Fragment=c("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,t,r){var o,c={},l=null,u=null;for(o in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,o)&&!s.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{"$$typeof":n,"type":e,"key":l,"ref":u,"props":c,"_owner":a.current}}t.jsx=q,t.jsxs=q},"125":function(e,t,r){var o=r(126),n=r(127),c=r(121),a=r(128);e.exports=function _slicedToArray(e,t){return o(e)||n(e,t)||c(e,t)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},"126":function(e,t){e.exports=function _arrayWithHoles(e){if(Array.isArray(e))return e},e.exports.__esModule=!0,e.exports.default=e.exports},"127":function(e,t){e.exports=function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,c=[],a=!0,i=!1;try{for(r=r.call(e);!(a=(o=r.next()).done)&&(c.push(o.value),!t||c.length!==t);a=!0);}catch(e){i=!0,n=e}finally{try{a||null==r.return||r.return()}finally{if(i)throw n}}return c}},e.exports.__esModule=!0,e.exports.default=e.exports},"128":function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"129":function(e,t,r){var o=r(130);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&o(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"130":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"131":function(e,t,r){var o=r(17).default,n=r(132);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"132":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"133":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"134":function(e,t,r){var o=r(135),n=r(136),c=r(121),a=r(137);e.exports=function _toConsumableArray(e){return o(e)||n(e)||c(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},"135":function(e,t,r){var o=r(122);e.exports=function _arrayWithoutHoles(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"136":function(e,t){e.exports=function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"137":function(e,t){e.exports=function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},"139":function(e,t,r){"use strict";var o=r(5),n=r(8),c=r(118),a=r(116),i=r(117),s=r.n(i),l=r(115),u=["children","size","block","round","plain","type","loading","className","noStyle","onClick"];t.a=function TvButton(e){var t,r,i=e.children,p=e.size,f=void 0===p?"normal":p,d=e.block,b=e.round,y=e.plain,j=e.type,v=void 0===j?"default":j,O=e.loading,x=e.className,h=e.noStyle,_=e.onClick,m=Object(c.a)(e,u),g=s()((t={},Object(n.a)(t,"".concat("tv-button","-view"),!0),Object(n.a)(t,"".concat("tv-button","-block"),d),t),x),w=s()("tv-button",(r={},Object(n.a)(r,"".concat("tv-button","-").concat(f),f),Object(n.a)(r,"".concat("tv-button","--").concat(v),v),Object(n.a)(r,"".concat("tv-button","--").concat(v,"__round"),v&&b),Object(n.a)(r,"".concat("tv-button","--").concat(v,"__plain"),v&&y),Object(n.a)(r,"".concat("tv-button","-round"),b),Object(n.a)(r,"".concat("tv-button","-nostyle"),h),r));return Object(l.jsx)(a.j,{"className":g,"children":Object(l.jsx)(a.a,Object(o.a)(Object(o.a)({"loading":O,"className":w,"plain":y,"size":["large","normal"].includes(f)||d?"default":"mini","disabled":O||m.disabled},m),{},{"onClick":function onClick(e){O||m.disabled||_&&_(e)},"children":i}))})}},"144":function(e,t,r){"use strict";var o=r(5),n=r(8),c=r(118),a=r(116),i=r(117),s=r.n(i),l=r(119),u=r(115),p=["label","className","error","errorMsg","rightItem","intro","required","type","inputAlign"];t.a=function Field(e){var t,r,i=e.label,f=e.className,d=e.error,b=e.errorMsg,y=e.rightItem,j=e.intro,v=e.required,O=e.type,x=e.inputAlign,h=Object(c.a)(e,p),_=s()("tv-field","tv-cell--border",f),m=s()("".concat("tv-field","-container"),Object(n.a)({},"".concat("tv-field","-container__start"),j||b||"textarea"===O)),g=s()("".concat("tv-field","-container__label"),(t={},Object(n.a)(t,"".concat("tv-field","-container__label--required"),v),Object(n.a)(t,"".concat("tv-field","-container__label--disabled"),h.disabled),t)),w=s()("".concat("tv-field","-container__input"),(r={},Object(n.a)(r,"".concat("tv-field","-container__input--").concat(x),x),Object(n.a)(r,"".concat("tv-field","-container__input__pl"),!i),Object(n.a)(r,"".concat("tv-field","-container__input--disabled"),h.disabled),Object(n.a)(r,"".concat("tv-field","-container__input--error"),d),r)),P=s()("".concat("tv-field","-ph"),Object(n.a)({},"".concat("tv-field","-ph--error"),d));return Object(u.jsx)(a.j,{"className":_,"children":Object(u.jsxs)(a.j,{"className":"".concat(m),"children":[i&&Object(u.jsx)(a.j,{"className":g,"children":Object(u.jsx)(l.a.Text,{"type":"secondary","children":i})}),Object(u.jsxs)(a.j,{"className":w,"children":[Object(u.jsxs)(a.j,{"className":"".concat("tv-field","-container__input--body"),"children":[Object(u.jsx)(a.j,{"className":"".concat("tv-field","-container__input--body__inp pr-14"),"children":"textarea"===O?Object(u.jsx)(a.i,Object(o.a)({"className":"".concat("tv-field","-container__input--body__textarea"),"placeholderClass":P},h)):Object(u.jsx)(a.d,Object(o.a)({"placeholderClass":P,"type":O},h))}),y&&y]}),j&&Object(u.jsx)(l.a.Text,{"block":!0,"size":"sm","type":"secondary","children":j}),b&&Object(u.jsx)(l.a.Text,{"block":!0,"size":"xs","type":"danger","children":b})]})]})})}},"152":function(e,t,r){},"168":function(e,t,r){"use strict";r.r(t);var o=r(116),n=r(119),c=r(139),a=r(144),i=(r(152),r(115));t.default=function Index(){return Object(i.jsxs)(o.j,{"children":[Object(i.jsx)(n.a.Text,{"type":"secondary","className":"my-title","children":"基础用法"}),Object(i.jsx)(a.a,{"type":"digit","placeholder":"请输入"}),Object(i.jsx)(a.a,{"label":"手机号","type":"number","maxlength":11,"required":!0,"placeholder":"请输入"}),Object(i.jsx)(a.a,{"label":"艺名","disabled":!0,"value":"禁止输入","placeholder":"请输入"}),Object(i.jsx)(a.a,{"label":"数字","type":"number","placeholder":"请输入"}),Object(i.jsx)(a.a,{"label":"身份证","type":"idcard","placeholder":"请输入"}),Object(i.jsx)(a.a,{"label":"密码","type":"password","placeholder":"请输入"}),Object(i.jsx)(a.a,{"label":"验证码","rightItem":Object(i.jsx)(c.a,{"type":"primary","size":"mini","children":"发送"}),"placeholder":"请输入"}),Object(i.jsx)(a.a,{"label":"文本","intro":"表单中的输入框组件。","placeholder":"请输入"}),Object(i.jsx)(a.a,{"label":"账号","error":!0,"placeholder":"请输入账号"}),Object(i.jsx)(a.a,{"label":"手机号","errorMsg":"手机号格式错误","placeholder":"请输入"}),Object(i.jsx)(a.a,{"label":"对齐","inputAlign":"right","placeholder":"请输入"}),Object(i.jsx)(a.a,{"label":"留言","placeholder":"请输入留言","type":"textarea"})]})}}}]);