/*! For license information please see 7749.js.LICENSE.txt */
(self.webpackJsonp=self.webpackJsonp||[]).push([[7749],{"4474":function(e,r,t){"use strict";t.d(r,{"ub":function(){return n},"Gt":function(){return c},"pf":function(){return a},"G7":function(){return i},"xv":function(){return s},"zx":function(){return u},"l0":function(){return l},"Nf":function(){return f},"$o":function(){return p},"Y8":function(){return d},"FX":function(){return v},"rs":function(){return y},"gx":function(){return m},"Ee":function(){return Z}});t(9212);var o=t(4177),n=((0,o.Z)("taro-cover-image-core"),(0,o.Z)("taro-cover-view-core"),(0,o.Z)("taro-match-media-core"),(0,o.Z)("taro-movable-area-core")),c=(0,o.Z)("taro-movable-view-core"),a=((0,o.Z)("taro-page-container-core"),(0,o.Z)("taro-root-portal-core"),(0,o.Z)("taro-scroll-view-core")),i=((0,o.Z)("taro-share-element-core"),(0,o.Z)("taro-swiper-core"),(0,o.Z)("taro-swiper-item-core"),(0,o.Z)("taro-view-core")),s=((0,o.Z)("taro-icon-core"),(0,o.Z)("taro-progress-core"),(0,o.Z)("taro-rich-text-core"),(0,o.Z)("taro-text-core")),u=(0,o.Z)("taro-button-core"),l=((0,o.Z)("taro-checkbox-core"),(0,o.Z)("taro-checkbox-group-core"),(0,o.Z)("taro-editor-core"),(0,o.Z)("taro-form-core")),f=((0,o.Z)("taro-keyboard-accessory-core"),(0,o.Z)("taro-label-core"),(0,o.Z)("taro-picker-core"),(0,o.Z)("taro-picker-view-core")),p=(0,o.Z)("taro-picker-view-column-core"),d=(0,o.Z)("taro-radio-core"),v=(0,o.Z)("taro-radio-group-core"),y=((0,o.Z)("taro-slider-core"),(0,o.Z)("taro-switch-core")),m=(0,o.Z)("taro-textarea-core"),Z=((0,o.Z)("taro-functional-page-navigator-core"),(0,o.Z)("taro-navigator-core"),(0,o.Z)("taro-audio-core"),(0,o.Z)("taro-camera-core"),(0,o.Z)("taro-image-core"));(0,o.Z)("taro-live-player-core"),(0,o.Z)("taro-video-core"),(0,o.Z)("taro-voip-room-core"),(0,o.Z)("taro-map-core"),(0,o.Z)("taro-canvas-core"),(0,o.Z)("taro-web-view-core"),(0,o.Z)("taro-ad-core"),(0,o.Z)("taro-ad-custom-core"),(0,o.Z)("taro-official-account-core"),(0,o.Z)("taro-open-data-core"),(0,o.Z)("taro-navigation-bar-core"),(0,o.Z)("taro-page-meta-core"),(0,o.Z)("taro-custom-wrapper-core")},"4177":function(e,r,t){"use strict";var o=t(2678),n=t(7602),c=t(9907),a=t(2196),i=t(2710),s=t(9903),u=t(6325),l=t(5143),f=t(910),p=t(9212);function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _createSuper(e){var r=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var t,o=(0,l.Z)(e);if(r){var n=(0,l.Z)(this).constructor;t=Reflect.construct(o,arguments,n)}else t=o.apply(this,arguments);return(0,u.Z)(this,t)}}p.createElement;var d="taro-scroll-view-core",v=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,r,t){/^--/.test(r)?e.style.setProperty(r,t):"number"!=typeof t||v.test(r)?e.style[r]=t:e.style[r]=t+"px"}function updateProp(e,r,t,o,n){var c=e.ref.current,a=n[t],i=o?o[t]:void 0;if("children"!==t)if("classname"!==t.toLowerCase()){if("style"!==t){if(/^data-.+/.test(t)&&c.setAttribute(t,a),r===d){if("scrollTop"===t)return void(c.mpScrollTop=a);if("scrollLeft"===t)return void(c.mpScrollLeft=a);if("scrollIntoView"===t)return void(c.mpScrollIntoView=a)}if("function"==typeof a&&t.match(/^on[A-Z]/)){var s=t.substr(2).toLowerCase(),u=a;return r===d&&"scroll"===s&&(u=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,u]),c.addEventListener(s,u)}return"string"==typeof a||"number"==typeof a?(c.setAttribute(t,a),void(c[t]=a)):"boolean"==typeof a?a?(c[t]=!0,c.setAttribute(t,a)):(c[t]=!1,c.removeAttribute(t)):void(c[t]=a)}if("string"==typeof a)return void c.setAttribute(t,a);if(!a)return void c.removeAttribute(t);if(o)if("string"==typeof i)c.style.cssText="";else for(var l in i)updateStyle(c,l,"");for(var p in a)updateStyle(c,p,a[p])}else c.className=o?function getClassName(e,r,t){var o=Array.from(e.classList),n=(r.className||r.class||"").split(" "),c=(t.className||t.class||"").split(" "),a=[];return o.forEach((function(e){c.indexOf(e)>-1?(a.push(e),c=c.filter((function(r){return r!==e}))):-1===n.indexOf(e)&&a.push(e)})),(a=[].concat((0,f.Z)(a),(0,f.Z)(c))).join(" ")}(c,o,n):a}r.Z=function reactifyWebComponent(e){var r=function(r){(0,s.Z)(Index,r);var t=_createSuper(Index);function Index(e){var r;return(0,a.Z)(this,Index),(r=t.call(this,e)).eventHandlers=[],r.ref=(0,p.createRef)(),r}return(0,i.Z)(Index,[{"key":"update","value":function update(r){var t=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(r||{}).forEach((function(o){"children"===o||"key"===o||o in t.props||updateProp(t,e,o,r,t.props)})),Object.keys(this.props).forEach((function(o){updateProp(t,e,o,r,t.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===(0,c.Z)(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(r){var t=(0,n.Z)(r,2),o=t[0],c=t[1];e.ref.current&&e.ref.current.removeEventListener(o,c)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var r=this.props,t=r.children,o=r.dangerouslySetInnerHTML,n={"ref":this.ref};return o&&(n.dangerouslySetInnerHTML=o),(0,p.createElement)(e,n,t)}}]),Index}(p.Component);return p.forwardRef((function(e,t){return p.createElement(r,_objectSpread(_objectSpread({},e),{},{"forwardRef":t}))}))}},"6973":function(e,r,t){var o,n=t(8352).default;!function(){"use strict";var c={}.hasOwnProperty;function classNames(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var o=n(t);if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)){if(t.length){var a=classNames.apply(null,t);a&&e.push(a)}}else if("object"===o)if(t.toString===Object.prototype.toString)for(var i in t)c.call(t,i)&&t[i]&&e.push(i);else e.push(t.toString())}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):"object"===n(t.amdO)&&t.amdO?void 0===(o=function(){return classNames}.apply(r,[]))||(e.exports=o):window.classNames=classNames}()},"7817":function(e,r,t){"use strict";var o=t(9212),n=Symbol.for("react.element"),c=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,t){var o,c={},u=null,l=null;for(o in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,o)&&!s.hasOwnProperty(o)&&(c[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===c[o]&&(c[o]=r[o]);return{"$$typeof":n,"type":e,"key":u,"ref":l,"props":c,"_owner":i.current}}r.Fragment=c,r.jsx=q,r.jsxs=q},"6721":function(e,r,t){"use strict";e.exports=t(7817)},"5329":function(e,r,t){"use strict";var o=t(5247),n=t(2678),c=t(4176),a=t(4474),i=t(6973),s=t.n(i),u=t(6721),l=["children","size","block","round","plain","type","loading","className","noStyle","onClick"];r.Z=function TvButton(e){var r,t,i=e.children,f=e.size,p=void 0===f?"normal":f,d=e.block,v=e.round,y=e.plain,m=e.type,Z=void 0===m?"default":m,h=e.loading,b=e.className,x=e.noStyle,w=e.onClick,g=(0,c.Z)(e,l),j="tv-button",O=s()((r={},(0,n.Z)(r,"".concat(j,"-view"),!0),(0,n.Z)(r,"".concat(j,"-block"),d),r),b),k=s()(j,(t={},(0,n.Z)(t,"".concat(j,"-").concat(p),p),(0,n.Z)(t,"".concat(j,"--").concat(Z),Z),(0,n.Z)(t,"".concat(j,"--").concat(Z,"__round"),Z&&v),(0,n.Z)(t,"".concat(j,"--").concat(Z,"__plain"),Z&&y),(0,n.Z)(t,"".concat(j,"-round"),v),(0,n.Z)(t,"".concat(j,"-nostyle"),x),t));return(0,u.jsx)(a.G7,{"className":O,"children":(0,u.jsx)(a.zx,(0,o.Z)((0,o.Z)({"loading":h,"className":k,"plain":y,"size":["large","normal"].includes(p)||d?"default":"mini","disabled":h||g.disabled},g),{},{"onClick":function onClick(e){h||g.disabled||w&&w(e)},"children":i}))})}},"1863":function(e,r,t){"use strict";var o=t(5247),n=t(2678),c=t(4176),a=t(4474),i=t(6973),s=t.n(i),u=t(6721),l=["children","visible","animate","zIndex","className"];r.Z=function(e){var r,t=e.children,i=e.visible,f=e.animate,p=e.zIndex,d=void 0===p?50:p,v=e.className,y=(0,c.Z)(e,l),m="tv-overlay",Z=s()(m,(r={},(0,n.Z)(r,"".concat(m,"--open"),i),(0,n.Z)(r,"".concat(m,"--open__animate"),i&&f),(0,n.Z)(r,"".concat(m,"--close__animate"),!i&&f),r),v);return(0,u.jsx)(a.G7,(0,o.Z)((0,o.Z)({"style":{"zIndex":d},"className":Z},y),{},{"children":t}))}},"7749":function(e,r,t){"use strict";t.r(r);var o=t(7602),n=t(4474),c=t(9212),a=t(1863),i=t(5329),s=t(6721);r.default=function Index(){var e=(0,c.useState)(!1),r=(0,o.Z)(e,2),t=r[0],u=r[1],l=(0,c.useState)(!1),f=(0,o.Z)(l,2),p=f[0],d=f[1];return(0,s.jsxs)(n.G7,{"className":"p-20","children":[(0,s.jsxs)(n.G7,{"children":[(0,s.jsx)(i.Z,{"type":"primary","onClick":function onClick(){return u(!0)},"children":"显示遮罩"}),(0,s.jsx)(a.Z,{"visible":t,"onClick":function onClick(){return u(!1)}})]}),(0,s.jsxs)(n.G7,{"children":[(0,s.jsx)(i.Z,{"type":"primary","onClick":function onClick(){return d(!0)},"children":"嵌入内容"}),(0,s.jsx)(a.Z,{"visible":p,"onClick":function onClick(){return d(!1)},"children":(0,s.jsx)(n.G7,{"className":"example-overlay-container","children":(0,s.jsx)(n.G7,{"className":"example-overlay-container_box"})})})]})]})}},"4176":function(e,r,t){"use strict";function _objectWithoutProperties(e,r){if(null==e)return{};var t,o,n=function _objectWithoutPropertiesLoose(e,r){if(null==e)return{};var t,o,n={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}t.d(r,{"Z":function(){return _objectWithoutProperties}})}}]);