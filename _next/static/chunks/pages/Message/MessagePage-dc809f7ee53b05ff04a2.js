_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[38],{Ggzw:function(e,n,t){"use strict";t.d(n,"d",(function(){return u})),t.d(n,"c",(function(){return g})),t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return m}));var a=t("cxan"),r=t("ERkP"),i=t.n(r),s=t("R5dR"),o=t("lIm4"),l=t("nFRM"),c=i.a.createElement,u=[{name:"header",types:"string",description:"Optional header to display in message."},{name:"messages",types:c(s.a,{href:"#message-item-prop-table"},"MessageItem"),description:c(i.a.Fragment,null,"See ",c(s.a,{href:"#message-item-prop-table"},"below")," for usage."),required:!0},{name:"type",types:["success","error","warning","info"],description:"Determines the style of message to display.",defaultValue:"success"},{name:"onClose",types:"() => void",description:"Function that will be called on close events."}],p=[{name:"text",types:"string",description:"Message to be displayed.",required:!0},{name:"link",types:c(s.a,{href:"#message-link-item-prop-table"},"MessageLinkItem"),description:c(i.a.Fragment,null,"See ",c(s.a,{href:"#message-link-item-prop-table"},"below")," for usage.")}],g=[{name:"external",types:"boolean",description:c(i.a.Fragment,null,"Shows an external icons when the ",c(o.a,{primary:!0},"external"),' flag is set and target="_blank".')},{name:"href",types:"string",description:"Same as a HTML anchor href attribute."},{name:"text",types:"string",description:"Link text to display."},{name:"target",types:"string",description:"Same as a HTML anchor target attribute."}],d=function(e){return c(l.a,Object(a.a)({title:"",propList:p},e,{id:"message-item-prop-table"}))},m=function(e){return c(l.a,Object(a.a)({title:"",propList:g},e,{id:"message-link-item-prop-table"}))}},KeDb:function(e,n,t){"use strict";var a=t("x3oR"),r=t("pONU");n.__esModule=!0,n.default=void 0;var i,s=r(t("ERkP")),o=t("L9lV"),l=t("7xIC"),c=new Map,u=window.IntersectionObserver,p={};var g=function(e,n){var t=i||(u?i=new u((function(e){e.forEach((function(e){if(c.has(e.target)){var n=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),c.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),c.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}c.delete(e)}):function(){}};function d(e,n,t,a){(0,o.isLocalURL)(n)&&(e.prefetch(n,t,a).catch((function(e){0})),p[n+"%"+t]=!0)}var m=function(e){var n=!1!==e.prefetch,t=s.default.useState(),r=a(t,2),i=r[0],c=r[1],m=(0,l.useRouter)(),f=m&&m.pathname||"/",h=s.default.useMemo((function(){var n=(0,o.resolveHref)(f,e.href,!0),t=a(n,2),r=t[0],i=t[1];return{href:r,as:e.as?(0,o.resolveHref)(f,e.as):i||r}}),[f,e.href,e.as]),y=h.href,b=h.as;s.default.useEffect((function(){if(n&&u&&i&&i.tagName&&(0,o.isLocalURL)(y)&&!p[y+"%"+b])return g(i,(function(){d(m,y,b)}))}),[n,i,y,b,m]);var v=e.children,M=e.replace,x=e.shallow,w=e.scroll;"string"===typeof v&&(v=s.default.createElement("a",null,v));var R=s.Children.only(v),k={ref:function(e){e&&c(e),R&&"object"===typeof R&&R.ref&&("function"===typeof R.ref?R.ref(e):"object"===typeof R.ref&&(R.ref.current=e))},onClick:function(e){R.props&&"function"===typeof R.props.onClick&&R.props.onClick(e),e.defaultPrevented||function(e,n,t,a,r,i,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(t))&&(e.preventDefault(),null==s&&(s=a.indexOf("#")<0),n[r?"replace":"push"](t,a,{shallow:i}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,y,b,M,x,w)}};return n&&(k.onMouseEnter=function(e){(0,o.isLocalURL)(y)&&(R.props&&"function"===typeof R.props.onMouseEnter&&R.props.onMouseEnter(e),d(m,y,b,{priority:!0}))}),(e.passHref||"a"===R.type&&!("href"in R.props))&&(k.href=(0,o.addBasePath)(b)),s.default.cloneElement(R,k)};n.default=m},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t("Fhg5"),r=t("jvFD"),i=t.n(r),s=t("ERkP"),o=t.n(s).a.createElement;function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var n="/big-design";return n+e}}var c=function(e){var n=e.as,t=e.children,r=e.href;return o(i.a,{href:r,as:l(n),passHref:!0},"string"===typeof t?o(a.a,null,t):t)}},UeVn:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Message/MessagePage",function(){return t("pkIY")}])},akZe:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("cxan"),r=t("ERkP"),i=t.n(r),s=t("R5dR"),o=t("nFRM"),l=i.a.createElement,c=[{name:"margin",types:l(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the margin to be applied."},{name:"marginTop",types:l(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top margin to be applied."},{name:"marginRight",types:l(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the right margin to be applied."},{name:"marginBottom",types:l(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the bottom margin to be applied."},{name:"marginLeft",types:l(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left margin to be applied."},{name:"marginVertical",types:l(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top and bottom margin to be applied."},{name:"marginHorizontal",types:l(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left and right margin to be applied."}],u=function(e){return l(o.a,Object(a.a)({title:"Margin",propList:c},e))}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var a=t("lebv"),r=t("XPf/"),i=t("BtTX"),s=t("ERkP"),o=t.n(s),l=t("ZUh6"),c=t("j/s1"),u=Object(c.e)(l.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),p=o.a.createElement,g=function(e){var n=e.children,t=e.title,o=Object(s.useState)(!0),l=o[0],c=o[1],g=function(){return c(!l)};return p("div",null,p(u,{marginBottom:"xLarge",alignItems:"center",onClick:g,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||g()},tabIndex:0},l?p(r.a,{title:"Expand"}):p(i.a,{title:"Collapse"}),p(a.m,null,t)),!l&&n)}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("ERkP"),r=t.n(a),i=t("j/s1"),s=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,a=e.theme;return n&&!t&&Object(i.d)(["background-color:",";padding:",";"],a.colors.warning10,a.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(i.d)(["color:",";"],t.colors.primary70)})),o=r.a.createElement,l=function(e){return o(s,e)};l.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var a=t("yGqs"),r=t("lebv"),i=t("Fhg5"),s=t("ERkP"),o=t.n(s),l=t("lIm4"),c=t("c2K2"),u=o.a.createElement,p=function(e){var n=e.collapsible,t=e.id,i=e.propList,s=e.title,p=function(){return u(a.b,{marginBottom:"xLarge"},u(a.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return u(o.a.Fragment,null,u(l.a,{primary:!0},n),t?u("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return u(g,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return u(l.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return u(r.m,null,n)}}],items:i}),u(r.g,{marginTop:"xSmall"},"Props ending with * are required"))};return n?u(c.a,{title:"".concat(s," Props")},p()):u(o.a.Fragment,null,u(r.c,{id:t},s),p())},g=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return u(o.a.Fragment,{key:e},e.type===i.a?u(l.a,{highlight:!1},e):u(l.a,null,e),t<n.length-1?" | ":null)})):n.type===i.a?u(l.a,{highlight:!1},n):u(l.a,null,n)}},pkIY:function(e,n,t){"use strict";t.r(n);var a=t("lebv"),r=t("ERkP"),i=t.n(r),s=t("GsAr"),o=t("c2K2"),l=t("lIm4"),c=t("akZe"),u=t("cxan"),p=t("fGyu"),g=t("R5dR"),d=t("nFRM"),m=t("Ggzw"),f=i.a.createElement,h=[{name:"actions",types:"object[]",description:f(i.a.Fragment,null,"Accepts an array of objects with"," ",f(g.a,{href:"/Button/ButtonPage",as:"/button"},"Button")," ","props and an additional ",f(l.a,null,"text"),' prop. Also, only two variants will be available to use: "secondary" and "subtle". See example for usage.')}].concat(Object(p.a)(m.d)),y=function(e){return f(d.a,Object(u.a)({title:"Message",propList:h},e))},b=i.a.createElement;n.default=function(){return b(i.a.Fragment,null,b(a.a,null,"Messages"),b(a.m,null,"A message primarily used for displaying page/table messaging, feature/discover/system level messages, or even non-critical messaging."),b(s.a,null,"<Message\n  header=\"Header\"\n  messages={[\n    {\n      text: 'Required description copy.',\n      link: {\n        text: 'Optional Link',\n        href: '#',\n      },\n    },\n  ]}\n  onClose={() => null}\n/>"),b(a.b,null,"API"),b(y,null),b(m.a,{title:"Message[MessageItem]"}),b(m.b,{title:"Message[MessageLinkItem]"}),b(a.c,null,"Inherited Props"),b(o.a,{title:"Inherited Props"},b(c.a,null)),b(a.b,null,"Examples"),b(a.c,null,"Types"),b(a.m,null,"There are four types of ",b(l.a,{primary:!0},"Messages")," based on the level of message you want to display."),b(s.a,null,'<>\n  <Message type="error" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n  <Message type="success" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n  <Message type="warning" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n  <Message type="info" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n</>'),b(a.c,null,"Header"),b(a.m,null,b(l.a,{primary:!0},"Message"),"'s allow you to pass an optional ",b(l.a,{primary:!0},"header")," prop."),b(s.a,null,'<>\n  <Message type="success" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n  <Message\n    header="Header"\n    type="success"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n</>'),b(a.c,null,"onClose"),b(a.m,null,"Toggles the visibility of the close button, and provides an on click callback."),b(s.a,null,'<>\n  <Message type="info" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n  <Message\n    onClose={() => null}\n    type="info"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n</>'),b(a.c,null,"Actions"),b(a.m,null,b(l.a,{primary:!0},"Message"),"'s allow you to pass an optional ",b(l.a,{primary:!0},"actions")," prop."),b(s.a,null,'<>\n  <Message\n    header="header"\n    type="info"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n  <Message\n    actions={[\n      { text: \'First Action\', onClick: () => null },\n      { text: \'Second Action\', variant: \'subtle\', onClick: () => null },\n    ]}\n    header="header"\n    type="info"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n</>'))}}},[["UeVn",0,1,4,8,11,9,2,3,6,7,5,10,12]]]);