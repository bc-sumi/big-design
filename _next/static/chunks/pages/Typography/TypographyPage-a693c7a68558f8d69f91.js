_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[58],{KeDb:function(e,t,n){"use strict";var r=n("x3oR"),a=n("pONU");t.__esModule=!0,t.default=void 0;var o,i=a(n("ERkP")),l=n("L9lV"),s=n("7xIC"),c=new Map,u=window.IntersectionObserver,p={};var f=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(c.has(e.target)){var t=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),c.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),c.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}c.delete(e)}):function(){}};function d(e,t,n,r){(0,l.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),p[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=i.default.useState(),a=r(n,2),o=a[0],c=a[1],h=(0,s.useRouter)(),g=h&&h.pathname||"/",m=i.default.useMemo((function(){var t=(0,l.resolveHref)(g,e.href,!0),n=r(t,2),a=n[0],o=n[1];return{href:a,as:e.as?(0,l.resolveHref)(g,e.as):o||a}}),[g,e.href,e.as]),y=m.href,b=m.as;i.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,l.isLocalURL)(y)&&!p[y+"%"+b])return f(o,(function(){d(h,y,b)}))}),[t,o,y,b,h]);var x=e.children,v=e.replace,T=e.shallow,w=e.scroll;"string"===typeof x&&(x=i.default.createElement("a",null,x));var P=i.Children.only(x),E={ref:function(e){e&&c(e),P&&"object"===typeof P&&P.ref&&("function"===typeof P.ref?P.ref(e):"object"===typeof P.ref&&(P.ref.current=e))},onClick:function(e){P.props&&"function"===typeof P.props.onClick&&P.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,y,b,v,T,w)}};return t&&(E.onMouseEnter=function(e){(0,l.isLocalURL)(y)&&(P.props&&"function"===typeof P.props.onMouseEnter&&P.props.onMouseEnter(e),d(h,y,b,{priority:!0}))}),(e.passHref||"a"===P.type&&!("href"in P.props))&&(E.href=(0,l.addBasePath)(b)),i.default.cloneElement(P,E)};t.default=h},R5dR:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("Fhg5"),a=n("jvFD"),o=n.n(a),i=n("ERkP"),l=n.n(i).a.createElement;function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var t="/big-design";return t+e}}var c=function(e){var t=e.as,n=e.children,a=e.href;return l(o.a,{href:a,as:s(t),passHref:!0},"string"===typeof n?l(r.a,null,n):n)}},akZe:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("cxan"),a=n("ERkP"),o=n.n(a),i=n("R5dR"),l=n("nFRM"),s=o.a.createElement,c=[{name:"margin",types:s(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the margin to be applied."},{name:"marginTop",types:s(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top margin to be applied."},{name:"marginRight",types:s(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the right margin to be applied."},{name:"marginBottom",types:s(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the bottom margin to be applied."},{name:"marginLeft",types:s(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left margin to be applied."},{name:"marginVertical",types:s(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top and bottom margin to be applied."},{name:"marginHorizontal",types:s(i.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left and right margin to be applied."}],u=function(e){return s(l.a,Object(r.a)({title:"Margin",propList:c},e))}},c2K2:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n("lebv"),a=n("XPf/"),o=n("BtTX"),i=n("ERkP"),l=n.n(i),s=n("ZUh6"),c=n("j/s1"),u=Object(c.e)(s.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),p=l.a.createElement,f=function(e){var t=e.children,n=e.title,l=Object(i.useState)(!0),s=l[0],c=l[1],f=function(){return c(!s)};return p("div",null,p(u,{marginBottom:"xLarge",alignItems:"center",onClick:f,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||f()},tabIndex:0},s?p(a.a,{title:"Expand"}):p(o.a,{title:"Collapse"}),p(r.m,null,n)),!s&&t)}},jvFD:function(e,t,n){e.exports=n("KeDb")},lIm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("ERkP"),a=n.n(r),o=n("j/s1"),i=o.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var t=e.highlight,n=e.primary,r=e.theme;return t&&!n&&Object(o.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var t=e.primary,n=e.theme;return t&&Object(o.d)(["color:",";"],n.colors.primary70)})),l=a.a.createElement,s=function(e){return l(i,e)};s.defaultProps={highlight:!0}},nFRM:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("yGqs"),a=n("lebv"),o=n("Fhg5"),i=n("ERkP"),l=n.n(i),s=n("lIm4"),c=n("c2K2"),u=l.a.createElement,p=function(e){var t=e.collapsible,n=e.id,o=e.propList,i=e.title,p=function(){return u(r.b,{marginBottom:"xLarge"},u(r.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var t=e.name,n=e.required;return u(l.a.Fragment,null,u(s.a,{primary:!0},t),n?u("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var t=e.types;return u(f,{types:t})}},{header:"Default",hash:"default",render:function(e){var t=e.defaultValue;return u(s.a,{highlight:!1},t)}},{header:"Description",hash:"description",width:"50%",render:function(e){var t=e.description;return u(a.m,null,t)}}],items:o}),u(a.g,{marginTop:"xSmall"},"Props ending with * are required"))};return t?u(c.a,{title:"".concat(i," Props")},p()):u(l.a.Fragment,null,u(a.c,{id:n},i),p())},f=function(e){var t=e.types;return Array.isArray(t)?t.map((function(e,n){return u(l.a.Fragment,{key:e},e.type===o.a?u(s.a,{highlight:!1},e):u(s.a,null,e),n<t.length-1?" | ":null)})):t.type===o.a?u(s.a,{highlight:!1},t):u(s.a,null,t)}},yIVa:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Typography/TypographyPage",function(){return n("zAjc")}])},zAjc:function(e,t,n){"use strict";n.r(t);var r=n("lebv"),a=n("Fhg5"),o=n("ERkP"),i=n.n(o),l=n("GsAr"),s=n("R5dR"),c=n("lIm4"),u=n("cxan"),p=n("zjfJ"),f=n("nFRM"),d=i.a.createElement;function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(p.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=[{name:"color",types:d(s.a,{href:"/Colors/ColorsPage",as:"/colors"},"Color"),defaultValue:"secondary70",description:d(i.a.Fragment,null,"Sets the text color given a color name from our"," ",d(s.a,{href:"/Colors/ColorsPage",as:"/colors"},"palette"),".")},{name:"ellipsis",types:"boolean",description:"Controls whether the text will concat and display ellipse... on overflow."}],y=[{name:"as",types:["h1","h2","h3","h4","h5","h6"],description:"Changes the rendered tag for semantic purposes."}],b=[{name:"as",types:"string",description:"Changes the rendered tag for semantic purposes."},{name:"bold",types:"boolean",defaultValue:"false",description:"Changes text style to bold."},{name:"italic",types:"boolean",defaultValue:"false",description:"Changes text style to italic."},{name:"strikethrough",types:"boolean",defaultValue:"false",description:"Changes text style to strikethrough."},{name:"underline",types:"boolean",defaultValue:"false",description:"Changes text style to underline."},{name:"capitalize",types:"boolean",defaultValue:"false",description:"Changes text transform to capitalize."},{name:"lowercase",types:"boolean",defaultValue:"false",description:"Changes text transform to lowercase."},{name:"uppercase",types:"boolean",defaultValue:"false",description:"Changes text transform to uppercase."}],x=[g(g({},m[0]),{},{defaultValue:"secondary30"})],v=function(e){return d(f.a,Object(u.a)({title:"Typography",propList:m},e))},T=function(e){return d(f.a,Object(u.a)({title:"Heading",propList:y},e))},w=function(e){return d(f.a,Object(u.a)({title:"Text",propList:b},e))},P=function(e){return d(f.a,Object(u.a)({title:"HR",propList:x},e))},E=n("akZe"),M=i.a.createElement;t.default=function(){return M(i.a.Fragment,null,M(r.a,null,"Typography"),M(r.m,null,"BigDesign comes with a collection of predefined typography components."," ",M(a.a,{href:"https://design.bigcommerce.com/components/typography"},"Typography Design Guidelines"),"."),M(r.b,null,"Headings"),M(l.a,null,"<>\n  <H0>Hero header - h0</H0>\n  <H1>Page header - h1</H1>\n  <H2>Panel header - h2</H2>\n  <H3>Section header - h3</H3>\n  <H4>Group header - h4</H4>\n</>"),M(T,null),M(r.c,null,"Inherited Props"),M(v,{collapsible:!0}),M(E.a,{collapsible:!0}),M(r.b,null,"Texts"),M(l.a,null,"<>\n  <Text>Text - p</Text>\n  <Small>Small text - small</Small>\n</>"),M(w,null),M(r.c,null,"Inherited Props"),M(v,{collapsible:!0}),M(E.a,{collapsible:!0}),M(r.b,null,"HR"),M(l.a,null,'<HR marginVertical="large" />'),M(P,null),M(r.c,null,"Inherited Props"),M(E.a,{collapsible:!0}),M(r.b,null,"Examples"),M(r.c,null,"Color"),M(r.m,null,"Choose any color from our"," ",M(s.a,{href:"/Colors/ColorsPage",as:"/colors"},"color pallete")," ","to style your text color."),M(l.a,null,'<>\n  <Text color="primary40">This color is primary40</Text>\n  <Text color="danger70">This color is danger70</Text>\n  <Text color="success50">This color is success50</Text>\n</>'),M(r.c,null,"Text Modifiers"),M(l.a,null,"<>\n  <Text bold>This text is bold.</Text>\n  <Text italic>This text is italic.</Text>\n  <Text strikethrough>This text is strikethrough.</Text>\n  <Text underline>This text is underlined.</Text>\n  <Text uppercase>This text is uppercase.</Text>\n  <Text lowercase>This text is lowercase.</Text>\n  <Text capitalize>This text is capitalized.</Text>\n  <Text bold uppercase>\n    This text is bold and uppercase.\n  </Text>\n</>"),M(r.c,null,"Ellipse"),M(r.m,null,"Setting the ",M(c.a,null,"ellipsis")," prop, will allow text to overflow nicely."),M(l.a,null,"<Box style={{ maxWidth: '400px' }}>\n  <H0 ellipsis>Indexes start at 0 and so do our headers.</H0>\n</Box>"),M(r.c,null,"As a different tag"),M(l.a,null,'<Text as="span">This is a span.</Text>'))}}},[["yIVa",0,1,4,8,11,9,2,3,6,7,5,10,12]]]);