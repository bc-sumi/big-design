_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[51],{KeDb:function(e,n,t){"use strict";var a=t("x3oR"),r=t("pONU");n.__esModule=!0,n.default=void 0;var s,o=r(t("ERkP")),i=t("L9lV"),l=(t("fvxO"),t("7xIC")),c=new Map,u=window.IntersectionObserver,m={};var d=function(e,n){var t=s||(u?s=new u((function(e){e.forEach((function(e){if(c.has(e.target)){var n=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(e.target),c.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),c.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}c.delete(e)}):function(){}};function p(e,n,t,a){(0,i.isLocalURL)(n)&&(e.prefetch(n,t,a).catch((function(e){0})),m[n+"%"+t]=!0)}var h=function(e){var n=!1!==e.prefetch,t=o.default.useState(),r=a(t,2),s=r[0],c=r[1],h=(0,l.useRouter)(),f=h&&h.pathname||"/",g=o.default.useMemo((function(){var n=(0,i.resolveHref)(f,e.href);return{href:n,as:e.as?(0,i.resolveHref)(f,e.as):n}}),[f,e.href,e.as]),b=g.href,y=g.as;o.default.useEffect((function(){if(n&&u&&s&&s.tagName&&(0,i.isLocalURL)(b)&&!m[b+"%"+y])return d(s,(function(){p(h,b,y)}))}),[n,s,b,y,h]);var k=e.children,S=e.replace,C=e.shallow,v=e.scroll;"string"===typeof k&&(k=o.default.createElement("a",null,k));var P=o.Children.only(k),w={ref:function(e){e&&c(e),P&&"object"===typeof P&&P.ref&&("function"===typeof P.ref?P.ref(e):"object"===typeof P.ref&&(P.ref.current=e))},onClick:function(e){P.props&&"function"===typeof P.props.onClick&&P.props.onClick(e),e.defaultPrevented||function(e,n,t,a,r,s,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(t))&&(e.preventDefault(),null==o&&(o=a.indexOf("#")<0),n[r?"replace":"push"](t,a,{shallow:s}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,b,y,S,C,v)}};return n&&(w.onMouseEnter=function(e){(0,i.isLocalURL)(b)&&(P.props&&"function"===typeof P.props.onMouseEnter&&P.props.onMouseEnter(e),p(h,b,y,{priority:!0}))}),!e.passHref&&("a"!==P.type||"href"in P.props)||(w.href=(0,i.addBasePath)(y)),o.default.cloneElement(P,w)};n.default=h},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t("Fhg5"),r=t("jvFD"),s=t.n(r),o=t("ERkP"),i=t.n(o).a.createElement;function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){return"/big-design"+e}}var c=function(e){var n=e.as,t=e.children,r=e.href;return i(s.a,{href:r,as:l(n),passHref:!0},"string"===typeof t?i(a.a,null,t):t)}},Uim9:function(e,n,t){"use strict";t.r(n);var a=t("lebv"),r=t("ERkP"),s=t.n(r),o=t("GsAr"),i=t("cxan"),l=t("R5dR"),c=t("nFRM"),u=s.a.createElement,m=[{name:"columns",types:u(l.a,{href:"#table-columns-prop-table"},"Columns[]"),description:u(s.a.Fragment,null,"See ",u(l.a,{href:"#table-columns-prop-table"},"below")," for usage."),required:!0},{name:"items",types:"any[]",description:"The array of items to display.",required:!0},{name:"itemName",types:"string",description:"Item name displayed on the table actions section."},{name:"keyField",types:"string",defaultValue:"id",description:"Unique property identifier for items."},{name:"pagination",types:u(l.a,{href:"/Pagination/PaginationPage",as:"/pagination"},"Pagination"),description:"See pagination component for details."},{name:"selectable",types:u(l.a,{href:"#table-selectable-prop-table"},"Selectable"),description:u(s.a.Fragment,null,"See ",u(l.a,{href:"#table-selectable-prop-table"},"below")," for usage.")},{name:"sortable",types:u(l.a,{href:"#table-sortable-prop-table"},"Sortable"),description:u(s.a.Fragment,null,"See ",u(l.a,{href:"#table-sortable-prop-table"},"below")," for usage.")},{name:"stickyHeader",types:"boolean",description:"Makes the table header and actions fixed."},{name:"headerless",types:"boolean",defaultValue:"false",description:"Hides header row with all table headers. Headers are only visually hidden to keep with accessibility best practices."},{name:"actions",types:"React.ComponentType<any>",description:"Component to render custom actions."},{name:"emptyComponent",types:"React.ReactElement",description:"Component to render when there are no items."}],d=[{name:"render",types:"React.ComponentType<Item>",required:!0,description:"Component used to render a column."},{name:"header",types:"string",required:!0,description:"Header title."},{name:"hideHeader",types:"boolean",defaultValue:"false",description:"Hides individual header values in the header row. Header is only visually hidden to keep with accessibility best practices."},{name:"align",types:["left","center","right"],defaultValue:"left",description:"Sets alignment for column."},{name:"hash",types:"string",required:!0,description:"Unique identifier for column."},{name:"isSortable",types:"boolean",defaultValue:"false",description:"Defines if the column is sortable."},{name:"verticalAlign",types:["top","middle"],defaultValue:"top",description:"Sets vertical alignment for column (td only)."},{name:"width",types:["string","number"],description:"Sets column width."},{name:"withPadding",types:"boolean",defaultValue:!0,description:"Toggles padding on td elements."}],p=[{name:"selectedItems",types:"Item[]",description:"Defines which items are selected.",required:!0},{name:"onSelectionChange",types:"(selectedItems: Item[]) => void",description:"Function to be called when item selection changes.",required:!0}],h=[{name:"direction",types:["ASC","DESC"],required:!0,description:"Defines sort direction."},{name:"columnHash",types:"string",description:"Defines which column is currently sorted."},{name:"onSort",types:"(columnHash: string, direction: TableSortDirection, column: TableColumn<T>): void;",description:"Function to be called when a sortable header is clicked.",required:!0}],f=function(e){return u(c.a,Object(i.a)({title:"Table",propList:m},e))},g=function(e){return u(c.a,Object(i.a)({title:"Table[Columns]",propList:d},e))},b=function(e){return u(c.a,Object(i.a)({title:"Table[Selectable]",propList:p},e))},y=function(e){return u(c.a,Object(i.a)({title:"Table[Sortable]",propList:h},e))},k=s.a.createElement,S=[{sku:"ABS",name:"[Sample] Able Brewing System",stock:225},{sku:"CC3C",name:"[Sample] Chemex Coffeemaker 3 cup",stock:49},{sku:"CGLD",name:"[Sample] Laundry Detergent",stock:29},{sku:"CLC",name:"[Sample] Canvas Laundry Cart",stock:2},{sku:"DPB",name:"[Sample] Dustpan & Brush",stock:34},{sku:"OCG",name:"[Sample] Oak Cheese Grater",stock:34},{sku:"OFSUC",name:"[Sample] Utility Caddy",stock:45}],C=[{header:"Sku",hash:"sku",render:function(e){return e.sku}},{header:"Name",hash:"name",render:function(e){return e.name}},{header:"Stock",hash:"stock",render:function(e){return e.stock}}],v=function(e,n,t){return e.concat().sort((function(e,a){return"ASC"===t?e[n]>=a[n]?1:-1:e[n]<=a[n]?1:-1}))};n.default=function(){return k(s.a.Fragment,null,k(a.a,null,"Table"),k(o.a,null,"<Table\n  columns={[\n    { header: 'Sku', hash: 'sku', render: ({ sku }) => sku },\n    { header: 'Name', hash: 'name', render: ({ name }) => name },\n    { header: 'Stock', hash: 'stock', render: ({ stock }) => stock },\n  ]}\n  items={[\n    { sku: 'SM13', name: '[Sample] Smith Journal 13', stock: 25 },\n    { sku: 'DPB', name: '[Sample] Dustpan & Brush', stock: 34 },\n    { sku: 'OFSUC', name: '[Sample] Utility Caddy', stock: 45 },\n    { sku: 'CLC', name: '[Sample] Canvas Laundry Cart', stock: 2 },\n    { sku: 'CGLD', name: '[Sample] Laundry Detergent', stock: 29 },\n  ]}\n  stickyHeader\n/>"),k(a.b,null,"API"),k(f,null),k(g,{id:"table-columns-prop-table"}),k(b,{id:"table-selectable-prop-table"}),k(y,{id:"table-sortable-prop-table"}),k(a.b,null,"Usage with selectable"),k(o.a,{scope:{data:S,columns:C}},'function Example() {\n  const [selectedItems, setSelectedItems] = useState<Item[]>([]);\n\n  return (\n    <Table\n      keyField="sku"\n      columns={columns}\n      items={data}\n      itemName="Products"\n      selectable={{\n        selectedItems,\n        onSelectionChange: setSelectedItems,\n      }}\n    />\n  );\n}'),k(a.b,null,"Usage with pagination"),k(o.a,{scope:{data:S,columns:C}},'function Example() {\n  const [currentPage, setCurrentPage] = useState(1);\n  const [itemsPerPageOptions] = useState([5, 10, 20, 30]);\n  const [itemsPerPage, setItemsPerPage] = useState(5);\n  const [currentItems, setCurrentItems] = useState<Item[]>([]);\n\n  const onItemsPerPageChange = (newRange) => {\n    setCurrentPage(1);\n    setItemsPerPage(newRange);\n  };\n\n  useEffect(() => {\n    const maxItems = currentPage * itemsPerPage;\n    const lastItem = Math.min(maxItems, data.length);\n    const firstItem = Math.max(0, maxItems - itemsPerPage);\n\n    setCurrentItems(data.slice(firstItem, lastItem));\n  }, [currentPage, itemsPerPage]);\n\n  return (\n    <Table\n      keyField="sku"\n      columns={columns}\n      items={currentItems}\n      itemName="Products"\n      pagination={{\n        currentPage,\n        totalItems: data.length,\n        onPageChange: setCurrentPage,\n        itemsPerPageOptions,\n        onItemsPerPageChange,\n        itemsPerPage,\n      }}\n      stickyHeader\n    />\n  );\n}'),k(a.b,null,"Usage with sortable"),k(o.a,{scope:{data:S,columns:C,sort:v}},"function Example() {\n  const [items, setItems] = useState(data);\n  const [columnHash, setColumnHash] = useState('');\n  const [direction, setDirection] = useState<'ASC' | 'DESC'>('ASC');\n\n  const onSort = (newColumnHash, newDirection) => {\n    setColumnHash(newColumnHash);\n    setDirection(newDirection);\n    setItems((currentItems) => sort(currentItems, newColumnHash, newDirection));\n  };\n\n  return (\n    <Table\n      keyField=\"sku\"\n      columns={[\n        { header: 'Sku', hash: 'sku', render: ({ sku }) => sku, isSortable: true },\n        { header: 'Name', hash: 'name', render: ({ name }) => name, isSortable: true },\n        { header: 'Stock', hash: 'stock', render: ({ stock }) => stock, isSortable: true },\n      ]}\n      items={items}\n      itemName=\"Products\"\n      sortable={{\n        columnHash,\n        direction,\n        onSort,\n      }}\n    />\n  );\n}"),k(a.b,null,"Customization Example"),k(o.a,null,"<Table\n  columns={[\n    { header: 'Sku', hash: 'sku', render: ({ sku }) => sku },\n    {\n      header: 'Name',\n      hash: 'name',\n      render: ({ name }) => name,\n      align: 'center',\n    },\n    {\n      header: 'Stock',\n      hash: 'stock',\n      render: ({ stock }) =>\n        stock > 5 ? <Text color=\"success\">{stock}</Text> : <Text color=\"danger\">{stock}</Text>,\n    },\n  ]}\n  items={[\n    { sku: 'SM13', name: '[Sample] Smith Journal 13', stock: 25 },\n    { sku: 'DPB', name: '[Sample] Dustpan & Brush', stock: 34 },\n    { sku: 'OFSUC', name: '[Sample] Utility Caddy', stock: 45 },\n    { sku: 'CLC', name: '[Sample] Canvas Laundry Cart', stock: 2 },\n    { sku: 'CGLD', name: '[Sample] Laundry Detergent', stock: 29 },\n  ]}\n/>"))}},ZHx6:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Table/TablePage",function(){return t("Uim9")}])},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("lebv"),r=t("XPf/"),s=t("BtTX"),o=t("ERkP"),i=t.n(o),l=t("ZUh6"),c=t("j/s1"),u=Object(c.e)(l.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),m=i.a.createElement,d=function(e){var n=e.children,t=e.title,i=Object(o.useState)(!0),l=i[0],c=i[1],d=function(){return c(!l)};return m("div",null,m(u,{marginBottom:"xLarge",alignItems:"center",onClick:d,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||d()},tabIndex:0},l?m(r.a,{title:"Expand"}):m(s.a,{title:"Collapse"}),m(a.m,null,t)),!l&&n)}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var a=t("ERkP"),r=t.n(a),s=t("j/s1"),o=s.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,a=e.theme;return n&&!t&&Object(s.d)(["background-color:",";padding:",";"],a.colors.warning10,a.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(s.d)(["color:",";"],t.colors.primary70)})),i=r.a.createElement,l=function(e){return i(o,e)};l.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return m}));var a=t("yGqs"),r=t("lebv"),s=t("Fhg5"),o=t("ERkP"),i=t.n(o),l=t("lIm4"),c=t("c2K2"),u=i.a.createElement,m=function(e){var n=e.collapsible,t=e.id,s=e.propList,o=e.title,m=function(){return u(a.b,{marginBottom:"xLarge"},u(a.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return u(i.a.Fragment,null,u(l.a,{primary:!0},n),t?u("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return u(d,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return u(l.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return u(r.m,null,n)}}],items:s}),u(r.g,{marginTop:"xSmall"},"Props ending with * are required"))};return n?u(c.a,{title:"".concat(o," Props")},m()):u(i.a.Fragment,null,u(r.c,{id:t},o),m())},d=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return u(i.a.Fragment,{key:e},e.type===s.a?u(l.a,{highlight:!1},e):u(l.a,null,e),t<n.length-1?" | ":null)})):n.type===s.a?u(l.a,{highlight:!1},n):u(l.a,null,n)}}},[["ZHx6",0,1,4,8,11,9,2,3,6,7,5,10,12]]]);