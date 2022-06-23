(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"140":function(e,t,c){"use strict";var n=c(5),i=c(8),o=c(117),l=c(115),s=c(116),a=c.n(s),r=c(118),j=c(139),b=c(137),u=c(114),O=["title","value","isLink","className","intro"];t.a=function Cell(e){var t=e.title,c=e.value,s=e.isLink,d=e.className,x=e.intro,h=Object(o.a)(e,O),p=a()("tv-cell","".concat("tv-cell","--border"),Object(i.a)({},"".concat("tv-cell","--link"),s),d);return Object(u.jsxs)(b.a,Object(n.a)(Object(n.a)({"className":p,"justify":"between","align":x?"start":"center"},h),{},{"children":[Object(u.jsxs)(l.l,{"className":"".concat("tv-cell","-title"),"children":[Object(u.jsx)(r.a.Text,{"children":t}),Object(u.jsx)(r.a.Text,{"type":"secondary","children":x})]}),Object(u.jsxs)(b.a,{"align":"center","className":"".concat("tv-cell","-right"),"children":[Object(u.jsx)(r.a.Text,{"type":"secondary","children":c}),s&&Object(u.jsx)(j.a,{"size":"lg","icon":"icon-arrow"})]})]}))}},"141":function(e,t,c){"use strict";var n=c(5),i=c(8),o=c(117),l=c(115),s=c(116),a=c.n(s),r=c(114),j=["children","visible","animate","zIndex","className"];t.a=function(e){var t,c=e.children,s=e.visible,b=e.animate,u=e.zIndex,O=void 0===u?50:u,d=e.className,x=Object(o.a)(e,j),h=a()("tv-overlay",(t={},Object(i.a)(t,"".concat("tv-overlay","--open"),s),Object(i.a)(t,"".concat("tv-overlay","--open__animate"),s&&b),Object(i.a)(t,"".concat("tv-overlay","--close__animate"),!s&&b),t),d);return Object(r.jsx)(l.l,Object(n.a)(Object(n.a)({"style":{"zIndex":O},"className":h},x),{},{"children":c}))}},"160":function(e,t,c){},"182":function(e,t,c){"use strict";c.r(t);var n=c(9),i=c(115),o=c(20),l=c(5),s=c(8),a=c(117),r=c(116),j=c.n(r),b=c(137),u=c(139),O=c(141),d=c(118),x=c(114),h=["className","children","style","closeOnMaskClick","position","round","closeIcon","title","onClose"],p=function TvPopup(e){var t,c=e.className,n=e.children,o=e.style,r=e.closeOnMaskClick,p=void 0===r||r,v=e.position,k=void 0===v?"bottom":v,C=e.round,y=e.closeIcon,f=e.title,m=e.onClose,N=Object(a.a)(e,h),g=j()("tv-popup",(t={},Object(s.a)(t,"".concat("tv-popup","--").concat(k),k),Object(s.a)(t,"".concat("tv-popup","--round"),C),Object(s.a)(t,"".concat("tv-popup","--").concat(k,"__open"),N.visible),Object(s.a)(t,"".concat("tv-popup","--").concat(k,"__close"),!N.visible),t),c);return Object(x.jsx)(O.a,Object(l.a)(Object(l.a)({"onClick":function onClick(){return p&&m&&m()},"animate":!0},N),{},{"children":Object(x.jsx)(i.l,{"style":o,"onClick":function onClick(e){return e.stopPropagation()},"className":g,"children":Object(x.jsxs)(i.l,{"className":"".concat("tv-popup","--body"),"children":[f&&Object(x.jsx)(b.a,{"align":"center","justify":"center","className":"".concat("tv-popup","--head"),"children":f&&Object(x.jsx)(d.a.Title,{"level":2,"children":f})}),y&&Object(x.jsx)(u.a,{"onClick":function onClick(){return m&&m()},"icon":"icon-cross"}),n]})})}))},v=c(140);c(160),t.default=function Index(){var e=Object(o.useState)(!1),t=Object(n.a)(e,2),c=t[0],l=t[1],s=Object(o.useState)(!1),a=Object(n.a)(s,2),r=a[0],j=a[1],b=Object(o.useState)(!1),u=Object(n.a)(b,2),O=u[0],h=u[1],k=Object(o.useState)(!1),C=Object(n.a)(k,2),y=C[0],f=C[1],m=Object(o.useState)(""),N=Object(n.a)(m,2),g=N[0],T=N[1];return Object(x.jsxs)(i.l,{"children":[Object(x.jsx)(d.a.Text,{"type":"secondary","block":!0,"className":"my-title","children":"基本用法"}),Object(x.jsx)(i.l,{"children":Object(x.jsx)(v.a,{"title":"基本用法","isLink":!0,"onClick":function onClick(){return l(!0)}})}),Object(x.jsx)(p,{"style":{"height":"30%"},"visible":c,"onClose":function onClose(){return l(!1)}}),Object(x.jsx)(d.a.Text,{"type":"secondary","block":!0,"className":"my-title","children":"弹出位置"}),Object(x.jsxs)(i.l,{"children":[Object(x.jsx)(v.a,{"title":"顶部弹出","isLink":!0,"onClick":function onClick(){return T("top")}}),Object(x.jsx)(v.a,{"title":"底部弹出","isLink":!0,"onClick":function onClick(){return T("bottom")}}),Object(x.jsx)(v.a,{"title":"左侧弹出","isLink":!0,"onClick":function onClick(){return T("left")}}),Object(x.jsx)(v.a,{"title":"右侧弹出","isLink":!0,"onClick":function onClick(){return T("right")}})]}),Object(x.jsx)(p,{"style":{"height":"30%"},"position":"top","visible":"top"===g,"onClose":function onClose(){return T("")}}),Object(x.jsx)(p,{"style":{"height":"30%"},"position":"bottom","visible":"bottom"===g,"onClose":function onClose(){return T("")}}),Object(x.jsx)(p,{"style":{"width":"30%"},"position":"left","visible":"left"===g,"onClose":function onClose(){return T("")}}),Object(x.jsx)(p,{"style":{"width":"30%"},"position":"right","visible":"right"===g,"onClose":function onClose(){return T("")}}),Object(x.jsx)(d.a.Text,{"type":"secondary","block":!0,"className":"my-title","children":"圆角弹窗"}),Object(x.jsx)(i.l,{"children":Object(x.jsx)(v.a,{"title":"圆角弹窗","isLink":!0,"onClick":function onClick(){return j(!0)}})}),Object(x.jsx)(p,{"style":{"height":"30%"},"round":!0,"visible":r,"onClose":function onClose(){return j(!1)}}),Object(x.jsx)(d.a.Text,{"type":"secondary","block":!0,"className":"my-title","children":"关闭图标"}),Object(x.jsx)(i.l,{"children":Object(x.jsx)(v.a,{"title":"关闭图标","isLink":!0,"onClick":function onClick(){return h(!0)}})}),Object(x.jsx)(p,{"style":{"height":"30%"},"visible":O,"closeIcon":!0,"closeOnMaskClick":!1,"onClose":function onClose(){return h(!1)}}),Object(x.jsx)(d.a.Text,{"type":"secondary","block":!0,"className":"my-title","children":"标题弹窗"}),Object(x.jsx)(i.l,{"children":Object(x.jsx)(v.a,{"title":"标题弹窗","isLink":!0,"onClick":function onClick(){return f(!0)}})}),Object(x.jsx)(p,{"style":{"height":"30%"},"visible":y,"closeIcon":!0,"title":"测试","onClose":function onClose(){return f(!1)},"children":Object(x.jsx)(i.l,{"style":{"height":"80%","overflow":"auto"},"children":Object(x.jsx)(d.a.Text,{"children":"React 从诞生之初就是可被逐步采用的，因而你可以按需引入或多或少的 React 特性。不管你是想体验下 React，用它给简单的 HTML 页面增加一点交互，还是要开始一个完全由 React 驱动的复杂应用，该章节内容里的链接都能帮你快速开始。无论你现在使用什么技术栈，在无需重写现有代码的前提下，通过引入 React 来开发新功能。React 还可以使用 Node 进行服务器渲染，或使用 React Native 开发原生移动应用。"})})})]})}}}]);