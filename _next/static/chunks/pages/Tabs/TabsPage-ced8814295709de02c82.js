_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[53],{KeDb:function(e,t,n){"use strict";var r=n("x3oR"),a=n("pONU");t.__esModule=!0,t.default=void 0;var i,o=a(n("ERkP")),l=n("L9lV"),c=n("7xIC"),s=new Map,u=window.IntersectionObserver,f={};var p=function(e,t){var n=i||(u?i=new u((function(e){e.forEach((function(e){if(s.has(e.target)){var t=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),s.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),s.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}s.delete(e)}):function(){}};function d(e,t,n,r){(0,l.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=o.default.useState(),a=r(n,2),i=a[0],s=a[1],h=(0,c.useRouter)(),b=h&&h.pathname||"/",m=o.default.useMemo((function(){var t=(0,l.resolveHref)(b,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,l.resolveHref)(b,e.as):i||a}}),[b,e.href,e.as]),v=m.href,g=m.as;o.default.useEffect((function(){if(t&&u&&i&&i.tagName&&(0,l.isLocalURL)(v)&&!f[v+"%"+g])return p(i,(function(){d(h,v,g)}))}),[t,i,v,g,h]);var y=e.children,T=e.replace,E=e.shallow,x=e.scroll;"string"===typeof y&&(y=o.default.createElement("a",null,y));var w=o.Children.only(y),k={ref:function(e){e&&s(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:i}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,v,g,T,E,x)}};return t&&(k.onMouseEnter=function(e){(0,l.isLocalURL)(v)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),d(h,v,g,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(k.href=(0,l.addBasePath)(g)),o.default.cloneElement(w,k)};t.default=h},R5dR:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("Fhg5"),a=n("jvFD"),i=n.n(a),o=n("ERkP"),l=n.n(o).a.createElement;function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var t="/big-design";return t+e}}var s=function(e){var t=e.as,n=e.children,a=e.href;return l(i.a,{href:a,as:c(t),passHref:!0},"string"===typeof n?l(r.a,null,n):n)}},TNpL:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Tabs/TabsPage",function(){return n("wWHF")}])},c2K2:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("lebv"),a=n("XPf/"),i=n("BtTX"),o=n("ERkP"),l=n.n(o),c=n("ZUh6"),s=n("j/s1"),u=Object(s.e)(c.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),f=l.a.createElement,p=function(e){var t=e.children,n=e.title,l=Object(o.useState)(!0),c=l[0],s=l[1],p=function(){return s(!c)};return f("div",null,f(u,{marginBottom:"xLarge",alignItems:"center",onClick:p,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||p()},tabIndex:0},c?f(a.a,{title:"Expand"}):f(i.a,{title:"Collapse"}),f(r.m,null,n)),!c&&t)}},jvFD:function(e,t,n){e.exports=n("KeDb")},lIm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ERkP"),a=n.n(r),i=n("j/s1"),o=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var t=e.highlight,n=e.primary,r=e.theme;return t&&!n&&Object(i.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var t=e.primary,n=e.theme;return t&&Object(i.d)(["color:",";"],n.colors.primary70)})),l=a.a.createElement,c=function(e){return l(o,e)};c.defaultProps={highlight:!0}},nFRM:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("yGqs"),a=n("lebv"),i=n("Fhg5"),o=n("ERkP"),l=n.n(o),c=n("lIm4"),s=n("c2K2"),u=l.a.createElement,f=function(e){var t=e.collapsible,n=e.id,i=e.propList,o=e.title,f=function(){return u(r.b,{marginBottom:"xLarge"},u(r.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var t=e.name,n=e.required;return u(l.a.Fragment,null,u(c.a,{primary:!0},t),n?u("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var t=e.types;return u(p,{types:t})}},{header:"Default",hash:"default",render:function(e){var t=e.defaultValue;return u(c.a,{highlight:!1},t)}},{header:"Description",hash:"description",width:"50%",render:function(e){var t=e.description;return u(a.m,null,t)}}],items:i}),u(a.g,{marginTop:"xSmall"},"Props ending with * are required"))};return t?u(s.a,{title:"".concat(o," Props")},f()):u(l.a.Fragment,null,u(a.c,{id:n},o),f())},p=function(e){var t=e.types;return Array.isArray(t)?t.map((function(e,n){return u(l.a.Fragment,{key:e},e.type===i.a?u(c.a,{highlight:!1},e):u(c.a,null,e),n<t.length-1?" | ":null)})):t.type===i.a?u(c.a,{highlight:!1},t):u(c.a,null,t)}},wWHF:function(e,t,n){"use strict";n.r(t);var r=n("lebv"),a=n("Fhg5"),i=n("ERkP"),o=n.n(i),l=n("lIm4"),c=n("GsAr"),s=n("cxan"),u=n("R5dR"),f=n("nFRM"),p=o.a.createElement,d=[{name:"activeTab",types:"string",description:"Determines the active tab by tab id."},{name:"items",types:p(u.a,{href:"#tabs-items-prop-table"},"TabItem[]"),description:p(o.a.Fragment,null,"See ",p(u.a,{href:"#tabs-items-prop-table"},"below")," for usage.")},{name:"onTabClick",types:"(tabId: string) => void",description:"Function that will get called when a tab is clicked."}],h=function(e){return p(f.a,Object(s.a)({title:"Tabs",propList:d},e))},b=[{name:"id",types:"string",description:"Tab identifier, must be unique.",required:!0},{name:"title",types:"string",description:"Title for the tab.",required:!0},{name:"disabled",types:"boolean",description:"Determines if the Tab is disabled."}],m=function(e){return p(f.a,Object(s.a)({title:"Tabs[TabItem]",propList:b},e))},v=o.a.createElement;t.default=function(){return v(o.a.Fragment,null,v(r.a,null,"Tabs"),v(r.m,null,"The ",v(l.a,{primary:!0},"Tabs")," component is used to organize and navigate between content types that are related and at the same level of information architecture heirarchy."," ",v(a.a,{href:"https://design.bigcommerce.com/components/tabs",target:"_blank"},"Tabs Design Guidelines"),"."),v(c.a,null,"function Example() {\n  const [activeTab, setActiveTab] = useState('tab1');\n\n  const items = [\n    { id: 'tab1', title: 'Example 1' },\n    { id: 'tab2', title: 'Example 2' },\n    { id: 'tab3', title: 'Example 3' },\n    { id: 'tab4', title: 'Example 4', disabled: true },\n  ];\n\n  return (\n    <>\n      <Tabs activeTab={activeTab} items={items} onTabClick={setActiveTab} />\n      <Box marginTop=\"large\">\n        {activeTab === 'tab1' && <Text>Content 1</Text>}\n        {activeTab === 'tab2' && <Text>Content 2</Text>}\n        {activeTab === 'tab3' && <Text>Content 3</Text>}\n        {activeTab === 'tab4' && <Text>Content 4</Text>}\n      </Box>\n    </>\n  );\n}"),v(r.b,null,"API"),v(h,null),v(m,{id:"tabs-items-prop-table"}))}}},[["TNpL",0,1,4,8,11,9,2,3,6,7,5,10,12]]]);