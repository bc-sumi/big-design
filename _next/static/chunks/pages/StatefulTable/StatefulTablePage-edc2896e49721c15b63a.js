_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[49],{KeDb:function(e,n,a){"use strict";var t=a("x3oR"),s=a("pONU");n.__esModule=!0,n.default=void 0;var o,r=s(a("ERkP")),i=a("L9lV"),c=(a("fvxO"),a("7xIC")),u=new Map,l=window.IntersectionObserver,m={};var d=function(e,n){var a=o||(l?o=new l((function(e){e.forEach((function(e){if(u.has(e.target)){var n=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),u.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return a?(a.observe(e),u.set(e,n),function(){try{a.unobserve(e)}catch(n){console.error(n)}u.delete(e)}):function(){}};function k(e,n,a,t){(0,i.isLocalURL)(n)&&(e.prefetch(n,a,t).catch((function(e){0})),m[n+"%"+a]=!0)}var f=function(e){var n=!1!==e.prefetch,a=r.default.useState(),s=t(a,2),o=s[0],u=s[1],f=(0,c.useRouter)(),p=f&&f.pathname||"/",h=r.default.useMemo((function(){var n=(0,i.resolveHref)(p,e.href);return{href:n,as:e.as?(0,i.resolveHref)(p,e.as):n}}),[p,e.href,e.as]),b=h.href,g=h.as;r.default.useEffect((function(){if(n&&l&&o&&o.tagName&&(0,i.isLocalURL)(b)&&!m[b+"%"+g])return d(o,(function(){k(f,b,g)}))}),[n,o,b,g,f]);var y=e.children,C=e.replace,v=e.shallow,S=e.scroll;"string"===typeof y&&(y=r.default.createElement("a",null,y));var w=r.Children.only(y),P={ref:function(e){e&&u(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,n,a,t,s,o,r){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(a))&&(e.preventDefault(),null==r&&(r=t.indexOf("#")<0),n[s?"replace":"push"](a,t,{shallow:o}).then((function(e){e&&r&&(window.scrollTo(0,0),document.body.focus())})))}(e,f,b,g,C,v,S)}};return n&&(P.onMouseEnter=function(e){(0,i.isLocalURL)(b)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),k(f,b,g,{priority:!0}))}),!e.passHref&&("a"!==w.type||"href"in w.props)||(P.href=(0,i.addBasePath)(g)),r.default.cloneElement(w,P)};n.default=f},R5dR:function(e,n,a){"use strict";a.d(n,"a",(function(){return u}));var t=a("Fhg5"),s=a("jvFD"),o=a.n(s),r=a("ERkP"),i=a.n(r).a.createElement;function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){return"/big-design"+e}}var u=function(e){var n=e.as,a=e.children,s=e.href;return i(o.a,{href:s,as:c(n),passHref:!0},"string"===typeof a?i(t.a,null,a):a)}},c2K2:function(e,n,a){"use strict";a.d(n,"a",(function(){return d}));var t=a("lebv"),s=a("XPf/"),o=a("BtTX"),r=a("ERkP"),i=a.n(r),c=a("ZUh6"),u=a("j/s1"),l=Object(u.e)(c.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),m=i.a.createElement,d=function(e){var n=e.children,a=e.title,i=Object(r.useState)(!0),c=i[0],u=i[1],d=function(){return u(!c)};return m("div",null,m(l,{marginBottom:"xLarge",alignItems:"center",onClick:d,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||d()},tabIndex:0},c?m(s.a,{title:"Expand"}):m(o.a,{title:"Collapse"}),m(t.m,null,a)),!c&&n)}},dpCp:function(e,n,a){"use strict";a.r(n);var t=a("lebv"),s=a("ERkP"),o=a.n(s),r=a("R5dR"),i=a("GsAr"),c=a("cxan"),u=a("nFRM"),l=o.a.createElement,m=[{name:"columns",types:l(r.a,{href:"#stateful-table-columns-prop-table"},"Columns[]"),description:l(o.a.Fragment,null,"See ",l(r.a,{href:"#stateful-table-columns-prop-table"},"below")," for usage."),required:!0},{name:"items",types:"any[]",description:"The array of items to display.",required:!0},{name:"itemName",types:"string",description:"Item name displayed on the table actions section."},{name:"keyField",types:"string",defaultValue:"id",description:"Unique property identifier for items."},{name:"pagination",types:"boolean",defaultValue:"false",description:"Defines if table should be paginated."},{name:"selectable",types:"boolean",defaultValue:"false",description:"Defines if table should be selectable."},{name:"stickyHeader",types:"boolean",description:"Makes the table header fixed."},{name:"headerless",types:"boolean",defaultValue:"false",description:"Hides header row with all table headers. Headers are only visually hidden to keep with accessibility best practices."},{name:"defaultSelected",types:"Item[]",description:"Defines which items are selected by default on initial render."},{name:"onSelectionChange",types:"(selectedItems: Item[]) => void",description:"Function to be called when item selection changes."},{name:"actions",types:"React.ComponentType<any>",description:"Component to render custom actions."},{name:"emptyComponent",types:"React.ReactElement",description:"Component to render when there are no items."}],d=[{name:"render",types:"React.ComponentType<Item>",required:!0,description:"Component used to render a column."},{name:"header",types:"string",required:!0,description:"Header title."},{name:"hideHeader",types:"boolean",defaultValue:"false",description:"Hides individual header values in the header row. Header is only visually hidden to keep with accessibility best practices."},{name:"align",types:["left","center","right"],defaultValue:"left",description:"Sets alignment for column."},{name:"hash",types:"string",required:!0,description:"Unique identifier for column."},{name:"sortFn",types:"(a: Item, b: Item, dir: 'ASC' | 'DESC') => number",description:"Enables sorting on the column using a custom sort function."},{name:"sortKey",types:"string",description:"Enables sorting on the column using item[sortKey]."},{name:"verticalAlign",types:["top","middle"],defaultValue:"top",description:"Sets vertical alignment for column (td only)."},{name:"width",types:["string","number"],description:"Sets column width."},{name:"withPadding",types:"boolean",defaultValue:!0,description:"Toggles padding on td elements."}],k=function(e){return l(u.a,Object(c.a)({title:"StatefulTable",propList:m},e))},f=function(e){return l(u.a,Object(c.a)({title:"StatefulTable[Columns]",propList:d},e))},p=o.a.createElement,h=[{sku:"3137737c",name:"Rice - Wild",stock:29},{sku:"d23bfc4c",name:"Wine - Rioja Campo Viejo",stock:5},{sku:"cb8ca0f9",name:"Wine - Baron De Rothschild",stock:17},{sku:"3951a57f",name:"Steampan - Foil",stock:30},{sku:"04f48630",name:"Nut - Walnut, Pieces",stock:11},{sku:"38392ba4",name:"Wine - Conde De Valdemar",stock:8},{sku:"134b820c",name:"Pepper - Chili Powder",stock:35},{sku:"b0aeabb4",name:"Broom And Brush Rack Black",stock:16},{sku:"70e8a5a7",name:"Cardamon Ground",stock:26},{sku:"8371ad15",name:"Tamarillo",stock:10},{sku:"3ddfe9d4",name:"Sardines",stock:19},{sku:"64bb2c0d",name:"Steam Pan - Half Size Deep",stock:30},{sku:"5d63640f",name:"Yeast - Fresh, Fleischman",stock:26},{sku:"1c7f113e",name:"Table Cloth 81x81 Colour",stock:24},{sku:"5d18a49a",name:"Baking Soda",stock:24},{sku:"b1ac58c4",name:"Red Snapper - Fresh, Whole",stock:23},{sku:"358a6371",name:"Chips Potato All Dressed - 43g",stock:18},{sku:"964d3d8c",name:"Cream Of Tartar",stock:3},{sku:"673f56ca",name:"Muffin Batt - Blueberry Passion",stock:28},{sku:"a358ab58",name:"Puree - Kiwi",stock:25},{sku:"e17535d0",name:"Beer - Creemore",stock:26},{sku:"6b3d83b1",name:"Goulash Seasoning",stock:30},{sku:"4e7a378d",name:"Beef - Striploin Aa",stock:9},{sku:"5ed9e628",name:"Beer - Maudite",stock:21},{sku:"147728a2",name:"Beans - Kidney, Red Dry",stock:31},{sku:"f8690bd1",name:"Cheese - Brick With Onion",stock:19},{sku:"45a4878d",name:"Grenadillo",stock:1},{sku:"4ed3bbfd",name:"Stock - Beef, Brown",stock:16},{sku:"b229deb6",name:"Soup Campbells Turkey Veg.",stock:2},{sku:"b0b10316",name:"Juice - Happy Planet",stock:16},{sku:"38e8b7e8",name:"Tofu - Soft",stock:13},{sku:"8030a286",name:"Cake - Lemon Chiffon",stock:19},{sku:"3b7a1aa1",name:"Appetizer - Escargot Puff",stock:15},{sku:"12dc80f4",name:"Grenadine",stock:1},{sku:"762803b1",name:"Sauce - Bernaise, Mix",stock:1},{sku:"202df318",name:"Steam Pan - Half Size Deep",stock:14},{sku:"2096e4e3",name:"Tequila - Sauza Silver",stock:33},{sku:"7401e1fd",name:"Coffee - Flavoured",stock:21},{sku:"e16260a8",name:"Veal - Slab Bacon",stock:1},{sku:"2cdbe616",name:"Wonton Wrappers",stock:14},{sku:"2fb211e8",name:"Bread - Malt",stock:33},{sku:"88c3cfe7",name:"Sugar - Cubes",stock:17},{sku:"0c7de951",name:"Cookie Trail Mix",stock:5},{sku:"915867e1",name:"Chinese Foods - Chicken Wing",stock:31},{sku:"a72f791f",name:"Buffalo - Tenderloin",stock:23},{sku:"a0dd1467",name:"Pastry - French Mini Assorted",stock:24},{sku:"fac53a91",name:"Wine - Stoneliegh Sauvignon",stock:25},{sku:"4bb2916d",name:"Sugar - Palm",stock:20},{sku:"573bf5e3",name:"Beer - Camerons Auburn",stock:21},{sku:"b16e6a30",name:"Cucumber - Pickling Ontario",stock:10},{sku:"9a9313d3",name:"Beef - Short Ribs",stock:16},{sku:"267cc895",name:"Beer - Fruli",stock:8},{sku:"2ea62a23",name:"Octopus",stock:8},{sku:"67b803a4",name:"Cherries - Maraschino,jar",stock:17},{sku:"5ae8f844",name:"Sherbet - Raspberry",stock:11},{sku:"be06efaa",name:"Rice Pilaf, Dry,package",stock:5},{sku:"8f56d3e1",name:"Foil Cont Round",stock:27},{sku:"2be4e147",name:"Milk - Chocolate 500ml",stock:7},{sku:"afba0e3a",name:"Veal - Inside",stock:3},{sku:"bee8a490",name:"Jolt Cola",stock:36},{sku:"f95c3876",name:"Coffee - Hazelnut Cream",stock:28},{sku:"c9c10646",name:"Brandy Apricot",stock:15},{sku:"910c9f96",name:"Peppercorns - Green",stock:20},{sku:"593507e5",name:"Browning Caramel Glace",stock:24},{sku:"3a0bbebf",name:"Halibut - Fletches",stock:35},{sku:"7d811897",name:"Lid Coffeecup 12oz D9542b",stock:33},{sku:"43a128ca",name:"Oil - Hazelnut",stock:18},{sku:"bbcab107",name:"Saskatoon Berries - Frozen",stock:24},{sku:"d046d959",name:"Soup - Campbells, Chix Gumbo",stock:16},{sku:"b2b0531c",name:"Rum - Spiced, Captain Morgan",stock:1},{sku:"5425fd56",name:"Wine - Riesling Dr. Pauly",stock:35},{sku:"046d807e",name:"Skirt - 29 Foot",stock:27},{sku:"d109ada7",name:"Ham - Virginia",stock:22},{sku:"ddd11eee",name:"Pomegranates",stock:9},{sku:"8a7f119d",name:"Lidsoupcont Rp12dn",stock:25},{sku:"85559c3a",name:"Quail - Jumbo",stock:20},{sku:"f2e1dafc",name:"Cheese - Brie Roitelet",stock:26},{sku:"ac35dd42",name:"Tomatoes - Roma",stock:35},{sku:"2806465d",name:"Oven Mitt - 13 Inch",stock:21},{sku:"f1dc1d8f",name:"Samosa - Veg",stock:13},{sku:"61c4fba7",name:"Loquat",stock:20},{sku:"a0865469",name:"Ice Cream Bar - Rolo Cone",stock:32},{sku:"3d84f8b3",name:"Cherries - Bing, Canned",stock:18},{sku:"592e5f21",name:"Juice - Apple, 500 Ml",stock:11},{sku:"8d345eea",name:"Chinese Lemon Pork",stock:26},{sku:"2947c625",name:"Bread - Frozen Basket Variety",stock:33},{sku:"8d8144ce",name:"Paper Towel Touchless",stock:14},{sku:"543a0480",name:"Onions - Cooking",stock:36},{sku:"24a5c0bc",name:"Lettuce - Romaine",stock:17},{sku:"8e8b22bf",name:"Spinach - Frozen",stock:19},{sku:"1477f081",name:"Zucchini - Yellow",stock:13},{sku:"f3d638f6",name:"Wild Boar - Tenderloin",stock:3},{sku:"90f71f26",name:"Rice - Wild",stock:26},{sku:"3c275810",name:"Wine - Fino Tio Pepe Gonzalez",stock:2},{sku:"2e11de76",name:"Petit Baguette",stock:5},{sku:"8e6cb56a",name:"Clams - Littleneck, Whole",stock:28},{sku:"5450b12a",name:"Squid - U 5",stock:12},{sku:"96043b83",name:"Wine - Red, Wolf Blass, Yellow",stock:20},{sku:"87c85429",name:"Cheese - Cambozola",stock:36},{sku:"be1652e5",name:"Wine - Cahors Ac 2000, Clos",stock:21}];n.default=function(){return p(o.a.Fragment,null,p(t.a,null,"StatefulTable"),p(t.m,null,"StatefulTable is a wrapper of"," ",p(r.a,{href:"/Table/TablePage",as:"/table"},"Table")," ","that simplifies it's usage when having the full list of items in memory. It supports pagination, row selection, and sorting out of the box."),p(i.a,null,"<StatefulTable\n  columns={[\n    { header: 'Sku', hash: 'sku', render: ({ sku }) => sku },\n    { header: 'Name', hash: 'name', render: ({ name }) => name },\n    { header: 'Stock', hash: 'stock', render: ({ stock }) => stock },\n  ]}\n  items={[\n    { sku: 'SM13', name: '[Sample] Smith Journal 13', stock: 25 },\n    { sku: 'DPB', name: '[Sample] Dustpan & Brush', stock: 34 },\n    { sku: 'OFSUC', name: '[Sample] Utility Caddy', stock: 45 },\n    { sku: 'CLC', name: '[Sample] Canvas Laundry Cart', stock: 2 },\n    { sku: 'CGLD', name: '[Sample] Laundry Detergent', stock: 29 },\n  ]}\n/>"),p(t.b,null,"API"),p(k,null),p(f,{id:"stateful-table-columns-prop-table"}),p(t.b,null,"Examples"),p(t.c,null,"Usage with pagination, selection, and sorting."),p(i.a,{scope:{items:h}},"<StatefulTable\n  itemName=\"Products\"\n  columns={[\n    { header: 'Sku', hash: 'sku', render: ({ sku }) => sku },\n    { header: 'Name', hash: 'name', render: ({ name }) => name },\n    { header: 'Stock', hash: 'stock', render: ({ stock }) => stock, sortKey: 'stock' },\n  ]}\n  items={items}\n  pagination\n  selectable\n  stickyHeader\n/>"))}},jvFD:function(e,n,a){e.exports=a("KeDb")},lIm4:function(e,n,a){"use strict";a.d(n,"a",(function(){return c}));var t=a("ERkP"),s=a.n(t),o=a("j/s1"),r=o.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,a=e.primary,t=e.theme;return n&&!a&&Object(o.d)(["background-color:",";padding:",";"],t.colors.warning10,t.spacing.xxSmall)}),(function(e){var n=e.primary,a=e.theme;return n&&Object(o.d)(["color:",";"],a.colors.primary70)})),i=s.a.createElement,c=function(e){return i(r,e)};c.defaultProps={highlight:!0}},nFRM:function(e,n,a){"use strict";a.d(n,"a",(function(){return m}));var t=a("yGqs"),s=a("lebv"),o=a("Fhg5"),r=a("ERkP"),i=a.n(r),c=a("lIm4"),u=a("c2K2"),l=i.a.createElement,m=function(e){var n=e.collapsible,a=e.id,o=e.propList,r=e.title,m=function(){return l(t.b,{marginBottom:"xLarge"},l(t.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,a=e.required;return l(i.a.Fragment,null,l(c.a,{primary:!0},n),a?l("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return l(d,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return l(c.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return l(s.m,null,n)}}],items:o}),l(s.g,{marginTop:"xSmall"},"Props ending with * are required"))};return n?l(u.a,{title:"".concat(r," Props")},m()):l(i.a.Fragment,null,l(s.c,{id:a},r),m())},d=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,a){return l(i.a.Fragment,{key:e},e.type===o.a?l(c.a,{highlight:!1},e):l(c.a,null,e),a<n.length-1?" | ":null)})):n.type===o.a?l(c.a,{highlight:!1},n):l(c.a,null,n)}},x4z0:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/StatefulTable/StatefulTablePage",function(){return a("dpCp")}])}},[["x4z0",0,1,4,8,11,9,2,3,6,7,5,10,12]]]);