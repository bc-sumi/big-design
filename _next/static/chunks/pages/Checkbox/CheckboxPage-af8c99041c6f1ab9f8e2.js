_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[21],{GMks:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Checkbox/CheckboxPage",function(){return t("o6rH")}])},Ggzw:function(e,n,t){"use strict";t.d(n,"d",(function(){return u})),t.d(n,"c",(function(){return d})),t.d(n,"a",(function(){return h})),t.d(n,"b",(function(){return f}));var r=t("cxan"),a=t("ERkP"),o=t.n(a),i=t("R5dR"),c=t("lIm4"),s=t("nFRM"),l=o.a.createElement,u=[{name:"header",types:"string",description:"Optional header to display in message."},{name:"messages",types:l(i.a,{href:"#message-item-prop-table"},"MessageItem"),description:l(o.a.Fragment,null,"See ",l(i.a,{href:"#message-item-prop-table"},"below")," for usage."),required:!0},{name:"type",types:["success","error","warning","info"],description:"Determines the style of message to display.",defaultValue:"success"},{name:"onClose",types:"() => void",description:"Function that will be called on close events."}],p=[{name:"text",types:"string",description:"Message to be displayed.",required:!0},{name:"link",types:l(i.a,{href:"#message-link-item-prop-table"},"MessageLinkItem"),description:l(o.a.Fragment,null,"See ",l(i.a,{href:"#message-link-item-prop-table"},"below")," for usage.")}],d=[{name:"external",types:"boolean",description:l(o.a.Fragment,null,"Shows an external icons when the ",l(c.a,{primary:!0},"external"),' flag is set and target="_blank".')},{name:"href",types:"string",description:"Same as a HTML anchor href attribute."},{name:"text",types:"string",description:"Link text to display."},{name:"target",types:"string",description:"Same as a HTML anchor target attribute."}],h=function(e){return l(s.a,Object(r.a)({title:"",propList:p},e,{id:"message-item-prop-table"}))},f=function(e){return l(s.a,Object(r.a)({title:"",propList:d},e,{id:"message-link-item-prop-table"}))}},KeDb:function(e,n,t){"use strict";var r=t("x3oR"),a=t("pONU");n.__esModule=!0,n.default=void 0;var o,i=a(t("ERkP")),c=t("L9lV"),s=t("7xIC"),l=new Map,u=window.IntersectionObserver,p={};var d=function(e,n){var t=o||(u?o=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var n=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),l.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}l.delete(e)}):function(){}};function h(e,n,t,r){(0,c.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),p[n+"%"+t]=!0)}var f=function(e){var n=!1!==e.prefetch,t=i.default.useState(),a=r(t,2),o=a[0],l=a[1],f=(0,s.useRouter)(),m=f&&f.pathname||"/",b=i.default.useMemo((function(){var n=(0,c.resolveHref)(m,e.href,!0),t=r(n,2),a=t[0],o=t[1];return{href:a,as:e.as?(0,c.resolveHref)(m,e.as):o||a}}),[m,e.href,e.as]),g=b.href,k=b.as;i.default.useEffect((function(){if(n&&u&&o&&o.tagName&&(0,c.isLocalURL)(g)&&!p[g+"%"+k])return d(o,(function(){h(f,g,k)}))}),[n,o,g,k,f]);var y=e.children,x=e.replace,v=e.shallow,C=e.scroll;"string"===typeof y&&(y=i.default.createElement("a",null,y));var w=i.Children.only(y),F={ref:function(e){e&&l(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,o,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:o}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,f,g,k,x,v,C)}};return n&&(F.onMouseEnter=function(e){(0,c.isLocalURL)(g)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),h(f,g,k,{priority:!0}))}),(e.passHref||"a"===w.type&&!("href"in w.props))&&(F.href=(0,c.addBasePath)(k)),i.default.cloneElement(w,F)};n.default=f},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("Fhg5"),a=t("jvFD"),o=t.n(a),i=t("ERkP"),c=t.n(i).a.createElement;function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var n="/big-design";return n+e}}var l=function(e){var n=e.as,t=e.children,a=e.href;return c(o.a,{href:a,as:s(n),passHref:!0},"string"===typeof t?c(r.a,null,t):t)}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("lebv"),a=t("XPf/"),o=t("BtTX"),i=t("ERkP"),c=t.n(i),s=t("ZUh6"),l=t("j/s1"),u=Object(l.e)(s.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),p=c.a.createElement,d=function(e){var n=e.children,t=e.title,c=Object(i.useState)(!0),s=c[0],l=c[1],d=function(){return l(!s)};return p("div",null,p(u,{marginBottom:"xLarge",alignItems:"center",onClick:d,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||d()},tabIndex:0},s?p(a.a,{title:"Expand"}):p(o.a,{title:"Collapse"}),p(r.m,null,t)),!s&&n)}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t("ERkP"),a=t.n(r),o=t("j/s1"),i=o.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(o.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(o.d)(["color:",";"],t.colors.primary70)})),c=a.a.createElement,s=function(e){return c(i,e)};s.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t("yGqs"),a=t("lebv"),o=t("Fhg5"),i=t("ERkP"),c=t.n(i),s=t("lIm4"),l=t("c2K2"),u=c.a.createElement,p=function(e){var n=e.collapsible,t=e.id,o=e.propList,i=e.title,p=function(){return u(r.b,{marginBottom:"xLarge"},u(r.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return u(c.a.Fragment,null,u(s.a,{primary:!0},n),t?u("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return u(d,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return u(s.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return u(a.m,null,n)}}],items:o}),u(a.g,{marginTop:"xSmall"},"Props ending with * are required"))};return n?u(l.a,{title:"".concat(i," Props")},p()):u(c.a.Fragment,null,u(a.c,{id:t},i),p())},d=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return u(c.a.Fragment,{key:e},e.type===o.a?u(s.a,{highlight:!1},e):u(s.a,null,e),t<n.length-1?" | ":null)})):n.type===o.a?u(s.a,{highlight:!1},n):u(s.a,null,n)}},o6rH:function(e,n,t){"use strict";t.r(n);var r=t("lebv"),a=t("Fhg5"),o=t("ERkP"),i=t.n(o),c=t("lIm4"),s=t("GsAr"),l=t("cxan"),u=t("R5dR"),p=t("nFRM"),d=t("Ggzw"),h=i.a.createElement,f=[{name:"label",types:["string","CheckboxLabel"],required:!0,description:"Label to display next to a <Code>Checkbox</Code> component."},{name:"hiddenLabel",types:"boolean",description:h(i.a.Fragment,null,"Renders ",h(c.a,{primary:!0},"Checkbox")," with a visually hidden label, retains accessibility for screen readers.")},{name:"isIndeterminate",types:"boolean",description:h(i.a.Fragment,null,"Styles and sets the checkbox into a indeterminate state. Note that the ",h(c.a,{primary:!0},"checked")," prop will take precedence over ",h(c.a,{primary:!0},"isIndeterminate"),".")},{name:"description",types:["string","CheckboxDescription"],description:h(i.a.Fragment,null,"See ",h(u.a,{href:"#checkbox-description-prop-table"},"below")," for usage.")}],m=[{name:"text",types:["string"],required:!0,description:h(i.a.Fragment,null,"Description to display below ",h(c.a,null,"Label"))},{name:"link",types:["CheckboxDescriptionLink"],description:h(i.a.Fragment,null,"See ",h(u.a,{href:"#checkbox-description-link-prop-table"},"below")," for usage.")}],b=function(e){return h(i.a.Fragment,null,h(r.m,null,"Supports all native ",h(c.a,null,"<input />")," element attributes."),h(p.a,Object(l.a)({title:"Checkbox",propList:f},e)))},g=function(e){return h(p.a,Object(l.a)({title:"Checkbox[CheckboxDescription]",propList:m},e,{id:"checkbox-description-prop-table"}))},k=function(e){return h(p.a,Object(l.a)({title:"Checkbox[CheckboxDescriptionLink]",propList:d.c},e,{id:"checkbox-description-link-prop-table"}))},y=i.a.createElement;n.default=function(){return y(i.a.Fragment,null,y(r.a,null,"Checkbox"),y(r.m,null,"Checkboxes are a stylized ",y(c.a,null,'input[type="checkbox"]')," with controllable checked/unchecked states."," ",y(a.a,{href:"https://design.bigcommerce.com/components/checkboxes",target:"_blank"},"Checkbox Design Guidelines"),"."),y(s.a,null,"function Example() {\n  const [checked, setChecked] = useState(false);\n  const handleChange = () => setChecked(!checked);\n\n  return (\n    <Form>\n      <FormGroup>\n        <Checkbox label={checked ? 'Checked' : 'Unchecked'} checked={checked} onChange={handleChange} />\n        <Checkbox label=\"Disabled\" disabled={true} />\n      </FormGroup>\n    </Form>\n  );\n}"),y(r.b,null,"API"),y(b,null),y(g,null),y(k,null),y(r.b,null,"Indeterminate"),y(r.m,null,"Checkboxes support ",y(c.a,{primary:!0},"isIndeterminate")," passed as a prop to show a combined state of partially selected checkboxes."),y(s.a,null,'<Form>\n  <FormGroup>\n    <Checkbox label="Indeterminate" isIndeterminate />\n  </FormGroup>\n</Form>'),y(r.b,null,"Description"),y(r.m,null,"Checkboxes support ",y(c.a,{primary:!0},"description")," passed as a prop, which contains a text and an optional link."),y(s.a,null,"function Example() {\n  const [checkedA, setChangeA] = useState(false);\n  const [checkedB, setChangeB] = useState(false);\n  const handleChangeA = () => setChangeA(!checkedA);\n  const handleChangeB = () => setChangeB(!checkedB);\n\n  return (\n    <Form>\n      <FormGroup>\n        <Checkbox\n          onChange={handleChangeA}\n          checked={checkedA}\n          label=\"Checkbox with description and link\"\n          description={{\n            text: 'I am a CheckboxDescription.',\n            link: {\n              text: 'Learn more',\n              href: 'http://www.bigcommerce.com',\n            },\n          }}\n        />\n        <Checkbox\n          onChange={handleChangeB}\n          checked={checkedB}\n          label=\"Checkbox with description\"\n          description=\"I am a string description.\"\n        />\n      </FormGroup>\n    </Form>\n  );\n}"))}}},[["GMks",0,1,4,8,11,9,2,3,6,7,5,10,12]]]);