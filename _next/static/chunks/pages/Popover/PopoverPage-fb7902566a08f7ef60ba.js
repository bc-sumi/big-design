_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[44],{AZJX:function(e,t,n){"use strict";n.r(t);var o=n("lebv"),r=n("ERkP"),a=n.n(r),i=n("GsAr"),s=n("cxan"),l=n("lIm4"),d=n("nFRM"),p=a.a.createElement,c=[{name:"anchorElement",required:!0,types:["Element","null"],description:"Element to be used as an anchor for the Popover."},{name:"isOpen",required:!0,types:"boolean",description:"Specifies if the Popover is open or closed."},{name:"label",required:!0,types:"string",description:"Label used for accessibility purposes, this label will be set as an aria-label on the popover."},{name:"closeOnClickOutside",types:"boolean",defaultValue:"true",description:p(a.a.Fragment,null,"Determines if ",p(l.a,null,"onClose")," gets called when clicking outside of the popover.")},{name:"closeOnEscKey",types:"boolean",defaultValue:"true",description:p(a.a.Fragment,null,"Determines if ",p(l.a,null,"onClose")," gets called when pressing the Esc key.")},{name:"matchAnchorElementWidth",types:"boolean",defaultValue:"false",description:"If set to true, the Popover will have the same width as its anchor element."},{name:"skidding",types:"number",defaultValue:"0",description:"Determines the offset along the anchorElement."},{name:"distance",types:"number",defaultValue:"4",description:"Determines the offset away from the anchorElement."},{name:"onClose",types:"() => void",description:"Callback that runs when the popover should close."},{name:"placement",defaultValue:"auto",types:["auto","auto-end","auto-start","bottom","bottom-end","bottom-start","left","left-end","left-start","right","right-end","right-start","top","top-end","top-start"],description:"Sets the position of the Popover."}],u=function(e){return p(d.a,Object(s.a)({title:"Popover",propList:c},e))},f=n("osqn"),m=n("aw6n"),h=a.a.createElement;t.default=function(){return h(a.a.Fragment,null,h(o.a,null,"Popover"),h(o.m,null,"Popover is a component that floats around its anchor element. It's commonly used for building other components such as dropdowns, tooltips, combobox, etc."),h(i.a,null,'function Example() {\n  const [isOpen, setIsOpen] = useState(false);\n  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);\n\n  return (\n    <>\n      <Button ref={setButtonRef} onClick={() => setIsOpen(true)}>\n        Open Popover\n      </Button>\n      <Popover anchorElement={buttonRef} isOpen={isOpen} label="Example Popover" onClose={() => setIsOpen(false)}>\n        <Text>This is the popover content!</Text>\n      </Popover>\n    </>\n  );\n}'),h(o.b,null,"API"),h(u,null),h(o.c,null,"Inherited Props"),h(f.a,{collapsible:!0}),h(m.a,{collapsible:!0}))}},KeDb:function(e,t,n){"use strict";var o=n("x3oR"),r=n("pONU");t.__esModule=!0,t.default=void 0;var a,i=r(n("ERkP")),s=n("L9lV"),l=n("7xIC"),d=new Map,p=window.IntersectionObserver,c={};var u=function(e,t){var n=a||(p?a=new p((function(e){e.forEach((function(e){if(d.has(e.target)){var t=d.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),d.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),d.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}d.delete(e)}):function(){}};function f(e,t,n,o){(0,s.isLocalURL)(t)&&(e.prefetch(t,n,o).catch((function(e){0})),c[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=i.default.useState(),r=o(n,2),a=r[0],d=r[1],m=(0,l.useRouter)(),h=m&&m.pathname||"/",g=i.default.useMemo((function(){var t=(0,s.resolveHref)(h,e.href,!0),n=o(t,2),r=n[0],a=n[1];return{href:r,as:e.as?(0,s.resolveHref)(h,e.as):a||r}}),[h,e.href,e.as]),b=g.href,y=g.as;i.default.useEffect((function(){if(t&&p&&a&&a.tagName&&(0,s.isLocalURL)(b)&&!c[b+"%"+y])return u(a,(function(){f(m,b,y)}))}),[t,a,b,y,m]);var v=e.children,P=e.replace,E=e.shallow,x=e.scroll;"string"===typeof v&&(v=i.default.createElement("a",null,v));var w=i.Children.only(v),R={ref:function(e){e&&d(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,a,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,b,y,P,E,x)}};return t&&(R.onMouseEnter=function(e){(0,s.isLocalURL)(b)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),f(m,b,y,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(R.href=(0,s.addBasePath)(y)),i.default.cloneElement(w,R)};t.default=m},R5dR:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var o=n("Fhg5"),r=n("jvFD"),a=n.n(r),i=n("ERkP"),s=n.n(i).a.createElement;function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var t="/big-design";return t+e}}var d=function(e){var t=e.as,n=e.children,r=e.href;return s(a.a,{href:r,as:l(t),passHref:!0},"string"===typeof n?s(o.a,null,n):n)}},Yu64:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Popover/PopoverPage",function(){return n("AZJX")}])},aw6n:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n("cxan"),r=n("ERkP"),a=n.n(r),i=n("R5dR"),s=n("nFRM"),l=a.a.createElement,d=[{name:"padding",types:l(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the padding to be applied."},{name:"paddingTop",types:l(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the top padding to be applied."},{name:"paddingRight",types:l(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the right padding to be applied."},{name:"paddingBottom",types:l(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the bottom padding to be applied."},{name:"paddingLeft",types:l(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the left padding to be applied."},{name:"paddingVertical",types:l(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the top and bottom padding to be applied."},{name:"paddingHorizontal",types:l(i.a,{href:"/Padding/PaddingPage",as:"/padding"},"Padding"),description:"Determines the left and right padding to be applied."}],p=function(e){return l(s.a,Object(o.a)({title:"Padding",propList:d},e))}},c2K2:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n("lebv"),r=n("XPf/"),a=n("BtTX"),i=n("ERkP"),s=n.n(i),l=n("ZUh6"),d=n("j/s1"),p=Object(d.e)(l.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),c=s.a.createElement,u=function(e){var t=e.children,n=e.title,s=Object(i.useState)(!0),l=s[0],d=s[1],u=function(){return d(!l)};return c("div",null,c(p,{marginBottom:"xLarge",alignItems:"center",onClick:u,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||u()},tabIndex:0},l?c(r.a,{title:"Expand"}):c(a.a,{title:"Collapse"}),c(o.m,null,n)),!l&&t)}},jvFD:function(e,t,n){e.exports=n("KeDb")},lIm4:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("ERkP"),r=n.n(o),a=n("j/s1"),i=a.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var t=e.highlight,n=e.primary,o=e.theme;return t&&!n&&Object(a.d)(["background-color:",";padding:",";"],o.colors.warning10,o.spacing.xxSmall)}),(function(e){var t=e.primary,n=e.theme;return t&&Object(a.d)(["color:",";"],n.colors.primary70)})),s=r.a.createElement,l=function(e){return s(i,e)};l.defaultProps={highlight:!0}},nFRM:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("yGqs"),r=n("lebv"),a=n("Fhg5"),i=n("ERkP"),s=n.n(i),l=n("lIm4"),d=n("c2K2"),p=s.a.createElement,c=function(e){var t=e.collapsible,n=e.id,a=e.propList,i=e.title,c=function(){return p(o.b,{marginBottom:"xLarge"},p(o.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var t=e.name,n=e.required;return p(s.a.Fragment,null,p(l.a,{primary:!0},t),n?p("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var t=e.types;return p(u,{types:t})}},{header:"Default",hash:"default",render:function(e){var t=e.defaultValue;return p(l.a,{highlight:!1},t)}},{header:"Description",hash:"description",width:"50%",render:function(e){var t=e.description;return p(r.m,null,t)}}],items:a}),p(r.g,{marginTop:"xSmall"},"Props ending with * are required"))};return t?p(d.a,{title:"".concat(i," Props")},c()):p(s.a.Fragment,null,p(r.c,{id:n},i),c())},u=function(e){var t=e.types;return Array.isArray(t)?t.map((function(e,n){return p(s.a.Fragment,{key:e},e.type===a.a?p(l.a,{highlight:!1},e):p(l.a,null,e),n<t.length-1?" | ":null)})):t.type===a.a?p(l.a,{highlight:!1},t):p(l.a,null,t)}},osqn:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n("cxan"),r=n("lebv"),a=n("ERkP"),i=n.n(a),s=n("R5dR"),l=n("nFRM"),d=i.a.createElement,p=[{name:"as",types:["string","React.ComponentType<any>"],description:"Use a different HTML tag or a different custom component"},{name:"backgroundColor",types:d(s.a,{href:"/Colors/ColorsPage",as:"/colors"},"Color"),description:d(i.a.Fragment,null,"Sets the background color given a color name from our"," ",d(s.a,{href:"/Colors/ColorsPage",as:"/colors"},"palette"),".")},{name:"shadow",types:["floating","raised"],description:"Determines the type of shadow to be applied."},{name:"border",types:["box","boxError","none"],description:"Determines type of border to be applied."},{name:"borderBottom",types:["box","boxError","none"],description:"Determines type of bottom border to be applied."},{name:"borderLeft",types:["box","boxError","none"],description:"Determines type of left border to be applied."},{name:"borderRight",types:["box","boxError","none"],description:"Determines type of right border to be applied."},{name:"borderTop",types:["box","boxError","none"],description:"Determines type of top border to be applied."},{name:"borderRadius",types:["normal","circle","none"],description:"Determines type of border radius to be applied."},{name:"clearfix",types:["boolean"],description:"Adds a clearfix for floating internal elements."},{name:"zIndex",types:["sticky","fixed","modalBackdrop","modal","tooltip","popover"],description:d(i.a.Fragment,null,d(r.m,null,"Determines type of z-index to be applied."),d(r.g,null,"Types are in order (sticky is low, popover is high)."))}],c=function(e){return d(l.a,Object(o.a)({title:"Box",propList:p},e))}}},[["Yu64",0,1,4,8,11,9,2,3,6,7,5,10,12]]]);