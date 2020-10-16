_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[45],{c2K2:function(e,n,r){"use strict";r.d(n,"a",(function(){return p}));var t=r("lebv"),a=r("XPf/"),i=r("BtTX"),o=r("ERkP"),l=r.n(o),s=r("ZUh6"),c=r("j/s1"),u=Object(c.e)(s.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),m=l.a.createElement,p=function(e){var n=e.children,r=e.title,l=Object(o.useState)(!0),s=l[0],c=l[1],p=function(){return c(!s)};return m("div",null,m(u,{marginBottom:"xLarge",alignItems:"center",onClick:p,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||p()},tabIndex:0},s?m(a.a,{title:"Expand"}):m(i.a,{title:"Collapse"}),m(t.m,null,r)),!s&&n)}},lIm4:function(e,n,r){"use strict";r.d(n,"a",(function(){return s}));var t=r("ERkP"),a=r.n(t),i=r("j/s1"),o=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,r=e.primary,t=e.theme;return n&&!r&&Object(i.d)(["background-color:",";padding:",";"],t.colors.warning10,t.spacing.xxSmall)}),(function(e){var n=e.primary,r=e.theme;return n&&Object(i.d)(["color:",";"],r.colors.primary70)})),l=a.a.createElement,s=function(e){return l(o,e)};s.defaultProps={highlight:!0}},nFRM:function(e,n,r){"use strict";r.d(n,"a",(function(){return m}));var t=r("yGqs"),a=r("lebv"),i=r("Fhg5"),o=r("ERkP"),l=r.n(o),s=r("lIm4"),c=r("c2K2"),u=l.a.createElement,m=function(e){var n=e.collapsible,r=e.id,i=e.propList,o=e.title,m=function(){return u(t.b,{marginBottom:"xLarge"},u(t.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,r=e.required;return u(l.a.Fragment,null,u(s.a,{primary:!0},n),r?u("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return u(p,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return u(s.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return u(a.m,null,n)}}],items:i}),u(a.g,{marginTop:"xSmall"},"Props ending with * are required"))};return n?u(c.a,{title:"".concat(o," Props")},m()):u(l.a.Fragment,null,u(a.c,{id:r},o),m())},p=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,r){return u(l.a.Fragment,{key:e},e.type===i.a?u(s.a,{highlight:!1},e):u(s.a,null,e),r<n.length-1?" | ":null)})):n.type===i.a?u(s.a,{highlight:!1},n):u(s.a,null,n)}},wn1L:function(e,n,r){"use strict";r.r(n);var t=r("lebv"),a=r("Fhg5"),i=r("ERkP"),o=r.n(i),l=r("lIm4"),s=r("GsAr"),c=r("cxan"),u=r("nFRM"),m=o.a.createElement,p=[{name:"percent",types:"number",description:"Sets the fill length from 0 to 100."}],d=function(e){return m(u.a,Object(c.a)({title:"ProgressBar",propList:p},e))},g=o.a.createElement;n.default=function(){return g(o.a.Fragment,null,g(t.a,null,"Progress Bar"),g(t.m,null,g(a.a,{href:"https://design.bigcommerce.com/components/progress-indicators",target:"_blank"},"Progress Indicator Design Guidelines"),"."),g(t.b,null,"Determinant"),g(t.m,null,"Determinant Progress represents a known amount of time or completeness for a task. A ",g(l.a,{primary:!0},"percent")," ","prop needs to be passed to render a determinate progress."),g(s.a,null,'<Box marginVertical="large">\n  <ProgressBar percent={50} />\n</Box>'),g(t.b,null,"Indeterminant"),g(t.m,null,"Indeterminant Progress represents an unknown amount of time for a task to complete. Component will render an indeterminant progress when missing a ",g(l.a,{primary:!0},"percent")," prop."),g(s.a,null,'<Box marginVertical="large">\n  <ProgressBar />\n</Box>'),g(t.b,null,"API"),g(d,null))}},x4c5:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Progress/ProgressBarPage",function(){return r("wn1L")}])}},[["x4c5",0,1,4,8,11,9,2,3,6,7,5,10]]]);