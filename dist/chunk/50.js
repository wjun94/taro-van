(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"107":function(t,n,a){"use strict";a.r(n),a.d(n,"taro_textarea_core",(function(){return r}));var o=a(30);function fixControlledValue(t){return null!=t?t:""}var r=function(){function e(t){var n=this;Object(o.g)(this,t),this.onInput=Object(o.c)(this,"input",7),this.onFocus=Object(o.c)(this,"focus",7),this.onBlur=Object(o.c)(this,"blur",7),this.onChange=Object(o.c)(this,"change",7),this.disabled=!1,this.maxlength=140,this.autoFocus=!1,this.nativeProps={},this.hanldeInput=function(t){t.stopPropagation(),n.onInput.emit({"value":t.target.value,"cursor":t.target.value.length})},this.handleFocus=function(t){n.onFocus.emit({"value":t.target.value})},this.handleBlur=function(t){n.onBlur.emit({"value":t.target.value})},this.handleChange=function(t){t.stopPropagation(),n.onChange.emit({"value":t.target.value})}}return e.prototype.componentDidLoad=function(){var t=this;Object.defineProperty(this.el,"value",{"get":function(){return t.textareaRef.value},"set":function(n){return t.value=n},"configurable":!0}),this.autoFocus&&this.textareaRef.focus()},e.prototype.render=function(){var t=this,n=this,a=n.value,r=n.placeholder,u=n.disabled,i=n.maxlength,l=n.autoFocus,s=n.name,c=n.nativeProps,h=n.hanldeInput,p=n.handleFocus,d=n.handleBlur,f=n.handleChange;return Object(o.e)("textarea",Object.assign({"ref":function(n){n&&(t.textareaRef=n)},"class":"taro-textarea","value":fixControlledValue(a),"placeholder":r,"name":s,"disabled":u,"maxlength":i,"autofocus":l,"onInput":h,"onFocus":p,"onBlur":d,"onChange":f},c))},Object.defineProperty(e.prototype,"el",{"get":function(){return Object(o.d)(this)},"enumerable":!1,"configurable":!0}),e}();r.style="taro-textarea-core{display:block;width:300px;height:150px}.taro-textarea{-webkit-appearance:none;cursor:auto;width:100%;height:100%;border:0;display:block;position:relative}.taro-textarea:focus{outline:none}"}}]);