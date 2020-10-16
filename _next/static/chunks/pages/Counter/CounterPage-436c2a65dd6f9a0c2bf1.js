_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{M0Fq:function(e,n,t){"use strict";t.r(n);var r=t("lebv"),a=t("Fhg5"),o=t("ERkP"),l=t.n(o),u=t("GsAr"),i=t("lIm4"),s=t("cxan"),c=t("nFRM"),m=l.a.createElement,p=[{name:"label",types:["string","FormControlLabel"],description:m(l.a.Fragment,null,"Label element for counters. Component with auto generate ",m(i.a,null,"id"),"'s for the accessibility API.")},{name:"labelId",types:"string",description:m(l.a.Fragment,null,"Appends an ",m(i.a,null,"id")," to the generated label element.")},{name:"description",types:["string","FormControlDescription"],description:"Append a description to the input field."},{name:"error",types:["string","string[]","FormControlError","FormControlError[]"],description:m(l.a.Fragment,null,"Displays an error message for the field. Error message will be passed to the ",m(i.a,null,"FormGroup")," for display purposes.")},{name:"value",types:"number",required:!0,description:m(l.a.Fragment,null,"Value for the ",m(i.a,null,"Counter"),". Only accepts whole numbers.")},{name:"min",types:"number",defaultValue:0,description:m(l.a.Fragment,null,"The minimum ",m(i.a,null,"value")," allowed.")},{name:"max",types:"number",defaultValue:100,description:m(l.a.Fragment,null,"The maximum ",m(i.a,null,"value")," allowed.")},{name:"step",types:"number",defaultValue:1,description:m(l.a.Fragment,null,"The amount beetween one ",m(i.a,null,"value")," and the next when incrementing or decrementing the"," ",m(i.a,null,"Counter"),".")},{name:"onCountChange",types:"(count: number) => void",description:"Function to be called that changes counter value. Receives the new count from the component.",required:!0}],d=function(e){return m(c.a,Object(s.a)({title:"Counter",propList:p},e))},h=l.a.createElement;n.default=function(){return h(l.a.Fragment,null,h(r.a,null,"Counter"),h(r.m,null,"Counters are stylized numerical form controls with the ability to control validation."," ",h(a.a,{href:"https://design.bigcommerce.com/components/text-field",target:"_blank"},"Text Field Design Guidelines"),"."),h(u.a,null,'function Example() {\n  const [counterValue, setCounterValue] = useState(5);\n  const handleChange = (value: number) => {\n    setCounterValue(value);\n  };\n\n  return (\n    <Form>\n      <FormGroup>\n        <Counter\n          label="Label"\n          description="Description for the counter."\n          value={counterValue}\n          min={0}\n          max={10}\n          onCountChange={handleChange}\n        />\n      </FormGroup>\n    </Form>\n  );\n}'),h(r.b,null,"API"),h(r.m,null,"Supports most native ",h(i.a,null,"<input />")," element attributes."),h(d,null),h(r.b,null,"Error State"),h(r.m,null,"Counters allow you to pass in an ",h(i.a,{primary:!0},"error")," message that will control the styles of a counter. The logic on the counter can be controlled with the ",h(i.a,{primary:!0},"onCountChange")," prop."),h(u.a,null,"function Example() {\n  const [counterValue, setCounterValue] = useState(0);\n  const [errors, setErrors] = useState('Number of items must be at least 1.');\n  const handleChange = (value: number) => {\n    setCounterValue(value);\n\n    if (value >= 1) {\n      setErrors('');\n    } else {\n      setErrors('Number of items must be at least 1.');\n    }\n  };\n\n  return (\n    <Form>\n      <FormGroup>\n        <Counter\n          label=\"Products\"\n          required\n          description=\"Select at least one item.\"\n          error={errors}\n          onCountChange={handleChange}\n          value={counterValue}\n        />\n      </FormGroup>\n    </Form>\n  );\n}"))}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t("lebv"),a=t("XPf/"),o=t("BtTX"),l=t("ERkP"),u=t.n(l),i=t("ZUh6"),s=t("j/s1"),c=Object(s.e)(i.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),m=u.a.createElement,p=function(e){var n=e.children,t=e.title,u=Object(l.useState)(!0),i=u[0],s=u[1],p=function(){return s(!i)};return m("div",null,m(c,{marginBottom:"xLarge",alignItems:"center",onClick:p,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||p()},tabIndex:0},i?m(a.a,{title:"Expand"}):m(o.a,{title:"Collapse"}),m(r.m,null,t)),!i&&n)}},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("ERkP"),a=t.n(r),o=t("j/s1"),l=o.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(o.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(o.d)(["color:",";"],t.colors.primary70)})),u=a.a.createElement,i=function(e){return u(l,e)};i.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var r=t("yGqs"),a=t("lebv"),o=t("Fhg5"),l=t("ERkP"),u=t.n(l),i=t("lIm4"),s=t("c2K2"),c=u.a.createElement,m=function(e){var n=e.collapsible,t=e.id,o=e.propList,l=e.title,m=function(){return c(r.b,{marginBottom:"xLarge"},c(r.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return c(u.a.Fragment,null,c(i.a,{primary:!0},n),t?c("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return c(p,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return c(i.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return c(a.m,null,n)}}],items:o}),c(a.g,{marginTop:"xSmall"},"Props ending with * are required"))};return n?c(s.a,{title:"".concat(l," Props")},m()):c(u.a.Fragment,null,c(a.c,{id:t},l),m())},p=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return c(u.a.Fragment,{key:e},e.type===o.a?c(i.a,{highlight:!1},e):c(i.a,null,e),t<n.length-1?" | ":null)})):n.type===o.a?c(i.a,{highlight:!1},n):c(i.a,null,n)}},"q/6U":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Counter/CounterPage",function(){return t("M0Fq")}])}},[["q/6U",0,1,4,8,11,9,2,3,6,7,5,10]]]);