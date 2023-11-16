"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[9624],{3905:(e,a,t)=>{t.d(a,{Zo:()=>s,kt:()=>m});var l=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);a&&(l=l.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,l,n=function(e,a){if(null==e)return{};var t,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=l.createContext({}),p=function(e){var a=l.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},s=function(e){var a=p(e.components);return l.createElement(u.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return l.createElement(l.Fragment,{},a)}},k=l.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=p(t),m=n,c=k["".concat(u,".").concat(m)]||k[m]||d[m]||o;return t?l.createElement(c,r(r({ref:a},s),{},{components:t})):l.createElement(c,r({ref:a},s))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,r=new Array(o);r[0]=k;var i={};for(var u in a)hasOwnProperty.call(a,u)&&(i[u]=a[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var p=2;p<o;p++)r[p]=t[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}k.displayName="MDXCreateElement"},85162:(e,a,t)=>{t.d(a,{Z:()=>r});var l=t(67294),n=t(34334);const o="tabItem_Ymn6";function r(e){let{children:a,hidden:t,className:r}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,r),hidden:t},a)}},65488:(e,a,t)=>{t.d(a,{Z:()=>m});var l=t(83117),n=t(67294),o=t(34334),r=t(72389),i=t(67392),u=t(7094),p=t(12466);const s="tabList__CuJ",d="tabItem_LNqP";function k(e){var a;const{lazy:t,block:r,defaultValue:k,values:m,groupId:c,className:b}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??v.map((e=>{let{props:{value:a,label:t,attributes:l}}=e;return{value:a,label:t,attributes:l}})),g=(0,i.l)(y,((e,a)=>e.value===a.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===k?k:k??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??v[0].props.value;if(null!==f&&!y.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:T}=(0,u.U)(),[h,I]=(0,n.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=c){const e=N[c];null!=e&&e!==h&&y.some((a=>a.value===e))&&I(e)}const x=e=>{const a=e.currentTarget,t=O.indexOf(a),l=y[t].value;l!==h&&(j(a),I(l),null!=c&&T(c,String(l)))},Z=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=O.indexOf(e.currentTarget)+1;t=O[a]??O[0];break}case"ArrowLeft":{const a=O.indexOf(e.currentTarget)-1;t=O[a]??O[O.length-1];break}}null==(a=t)||a.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",s)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},b)},y.map((e=>{let{value:a,label:t,attributes:r}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:h===a?0:-1,"aria-selected":h===a,key:a,ref:e=>O.push(e),onKeyDown:Z,onFocus:x,onClick:x},r,{className:(0,o.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":h===a})}),t??a)}))),t?(0,n.cloneElement)(v.filter((e=>e.props.value===h))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==h})))))}function m(e){const a=(0,r.Z)();return n.createElement(k,(0,l.Z)({key:String(a)},e))}},52565:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var l=t(83117),n=(t(67294),t(3905)),o=t(65488),r=t(85162);const i={sidebar_position:7,title:"\u5de5\u5177\u65b9\u6cd5"},u=void 0,p={unversionedId:"object/tool",id:"object/tool",title:"\u5de5\u5177\u65b9\u6cd5",description:"Jimmer\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u9759\u6001\u5de5\u5177\u65b9\u6cd5\uff0c\u7528\u4e8e\u64cd\u4f5c\u52a8\u6001\u5bf9\u8c61\u6216\u5176Draft\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/object/tool.mdx",sourceDirName:"object",slug:"/object/tool",permalink:"/jimmer/zh/docs/object/tool",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/object/tool.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"\u5de5\u5177\u65b9\u6cd5"},sidebar:"tutorialSidebar",previous:{title:"\u53ef\u89c1\u6027",permalink:"/jimmer/zh/docs/object/visibility"},next:{title:"\u8d44\u6e90\u7bc7",permalink:"/jimmer/zh/docs/resource/"}},s={},d=[{value:"\u64cd\u4f5c\u4e0d\u53ef\u53d8\u5bf9\u8c61",id:"\u64cd\u4f5c\u4e0d\u53ef\u53d8\u5bf9\u8c61",level:2},{value:"isLoaded",id:"isloaded",level:3},{value:"get",id:"get",level:3},{value:"isIdOnly",id:"isidonly",level:3},{value:"makeIdOnly",id:"makeidonly",level:3},{value:"isLonely",id:"islonely",level:3},{value:"toLonely",id:"tolonely",level:3},{value:"toIdOnly",id:"toidonly",level:3},{value:"fromString",id:"fromstring",level:3},{value:"\u64cd\u4f5c\u53ef\u53d8Draft",id:"\u64cd\u4f5c\u53ef\u53d8draft",level:2},{value:"set",id:"set",level:3},{value:"unload",id:"unload",level:3},{value:"show",id:"show",level:3},{value:"hide",id:"hide",level:3}],k={toc:d};function m(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Jimmer\u63d0\u4f9b\u4e86\u4e00\u7cfb\u5217\u9759\u6001\u5de5\u5177\u65b9\u6cd5\uff0c\u7528\u4e8e\u64cd\u4f5c\u52a8\u6001\u5bf9\u8c61\u6216\u5176Draft\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u8fd9\u4e9b\u65b9\u6cd5\u65e2\u6709\u5f3a\u7c7b\u578b\u91cd\u6784\u7248\u672c\uff0c\u4e5f\u6709\u5f31\u7c7b\u578b\u7684\u91cd\u6784\u7248\u672c\u3002\u4e3a\u8282\u7701\u7bc7\u5e45\uff0c\u672c\u6587\u4ec5\u5217\u4e3e\u5f3a\u7c7b\u578b\u7528\u6cd5\u3002")),(0,n.kt)("h2",{id:"\u64cd\u4f5c\u4e0d\u53ef\u53d8\u5bf9\u8c61"},"\u64cd\u4f5c\u4e0d\u53ef\u53d8\u5bf9\u8c61"),(0,n.kt)("h3",{id:"isloaded"},"isLoaded"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u7528\uff1a\u5224\u65ad\u52a8\u6001\u5bf9\u8c61\u7684\u67d0\u4e2a\u5c5e\u6027\u662f\u5426\u88ab\u52a0\u8f7d")),(0,n.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"if (ImmutableObjects.isLoaded(book, BookProps.AUTHORS)) {\n    ...\n}\n"))),(0,n.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"if (isLoaded(book, Book::authors)) {\n    ...\n}\n")))),(0,n.kt)("h3",{id:"get"},"get"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u52a8\u6001\u83b7\u53d6\u5bf9\u8c61\u7684\u67d0\u4e2a\u5c5e\u6027")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5f02\u5e38\uff1a\u5bf9\u8c61\u7684\u8be5\u5c5e\u6027\u5904\u4e8e\u672a\u52a0\u8f7d\u72b6\u6001"))),(0,n.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"List<Author> authors = \n    ImmutableObjects.get(book, BookProps.AUTHORS);\n"))),(0,n.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val authors = get(book, Book::authors)\n")))),(0,n.kt)("h3",{id:"isidonly"},"isIdOnly"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u662f\u5426\u662f\u53ea\u88ab\u8bbe\u7f6e\u4e86id\u5c5e\u6027\u7684\u52a8\u6001\u5bf9\u8c61")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u524d\u63d0\uff1a\u5bf9\u8c61\u7c7b\u578b\u88ab",(0,n.kt)("inlineCode",{parentName:"p"},"@Entity"),"\u4fee\u9970\uff0c\u662fORM\u5b9e\u4f53\uff0c\u5177\u5907id"))),(0,n.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"if (ImmutableObjects.isIdOnly(book)) {\n    ...\n}\n"))),(0,n.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"if (isIdOnly(book)) {\n    ...\n}\n")))),(0,n.kt)("h3",{id:"makeidonly"},"makeIdOnly"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u7528\u6307\u5b9a\u7c7b\u578b\u6784\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5e76\u8bbe\u7f6e\u5176id\u5c5e\u6027")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u524d\u63d0\uff1a\u5bf9\u8c61\u7c7b\u578b\u88ab",(0,n.kt)("inlineCode",{parentName:"p"},"@Entity"),"\u4fee\u9970\uff0c\u662fORM\u5b9e\u4f53\uff0c\u5177\u5907id"))),(0,n.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Book book = ImmutableObjects.makeIdOnly(Book.class, 1L);\n"))),(0,n.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"Book book = makeIdOnly(Book::class, 1L)\n")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5bf9\u4e8ekotlin\u800c\u8a00\uff0c\u53c2\u6570id\u4e0d\u5f97\u4e3anull\uff0c\u8fd4\u56de\u503c\u4e5f\u4e0d\u4e3anull\u3002"),(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u8981\u63a5\u53d7\u53ef\u80fd\u4e3anull\u7684id\uff0c\u5e76\u5728id\u771f\u4e3anull\u65f6\u76f4\u63a5\u8fd4\u56denull\uff0c\u8bf7\u8c03\u7528",(0,n.kt)("inlineCode",{parentName:"p"},"makeNullableIdOnly"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Java\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"makeIdOnly"),"\uff0c\u5176\u5b9e\u548cKotlin\u7684",(0,n.kt)("inlineCode",{parentName:"p"},"makeNullableIdOnly"),"\u7b49\u4ef7\u3002")))),(0,n.kt)("h3",{id:"islonely"},"isLonely"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u662f\u5426\u662f\u53ea\u88ab\u8bbe\u7f6e\u4e86id\u5c5e\u6027\u7684\u5b64\u5355\u5bf9\u8c61\u3002\u5373\uff0c\u662f\u5426\u6ca1\u6709\u4efb\u4f55\u5173\u8054\u5c5e\u6027\u88ab\u8bbe\u7f6e\u4e3a\u975enull ",(0,n.kt)("em",{parentName:"p"},"(\u5305\u542b\u672a\u8bbe\u7f6e\u548c\u8bbe\u7f6e\u4e3anull)"),"\u3002"),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5bf9\u8c61\u662f\u4e00\u4e2aORM\u5b9e\u4f53\uff0c\u82e5\u76f4\u63a5\u57fa\u4e8e\u5916\u952e\u7684\u4e00\u5bf9\u4e00\u6216\u591a\u5bf9\u4e00\u5c5e\u6027\u88ab\u8bbe\u7f6e\u4e3a\u53ea\u6709id\u7684\u5173\u8054\u5bf9\u8c61\uff0c\u5219\u4f8b\u5916\u3002")))),(0,n.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"if (ImmutableObjects.isLonely(book)) {\n    ...\n}\n"))),(0,n.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"if (isLonely(book)) {\n    ...\n}\n")))),(0,n.kt)("h3",{id:"tolonely"},"toLonely"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u6839\u636e\u4e00\u4e2a\u5df2\u6709\u7684\u5bf9\u8c61\uff0c\u521b\u5efa\u65b0\u5bf9\u8c61\u3002\u65b0\u5bf9\u8c61\u4ece\u65e7\u5bf9\u8c61\u590d\u5236\u6240\u6709\u975e\u5173\u8054\u5c5e\u6027\uff0c\u4f46\u6240\u6709\u5173\u8054\u5c5e\u6027\u4fdd\u6301\u672a\u8bbe\u7f6e\u72b6\u6001"),(0,n.kt)("admonition",{parentName:"li",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5bf9\u8c61\u662f\u4e00\u4e2aORM\u5b9e\u4f53\uff0c\u5bf9\u4e8e\u76f4\u63a5\u5916\u952e\u7684\u4e00\u5bf9\u4e00\u6216\u591a\u5bf9\u4e00\u5c5e\u6027\u800c\u8a00\uff0c\u8fdb\u884c\u7279\u6b8a\u5904\u7406\uff0c\u5c06\u5176\u8bbe\u7f6e\u4e3a\u53ea\u6709id\u7684\u5173\u8054\u5bf9\u8c61\u6216null")))),(0,n.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Book lonelyBook = ImmutableObjects.toLonely(book);\n"))),(0,n.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val lonelyBook = toLonely(book)\n")))),(0,n.kt)("h3",{id:"toidonly"},"toIdOnly"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f5c\u7528\uff1a\u6839\u636e\u4e00\u4e2a\u5df2\u6709\u7684\u5bf9\u8c61\uff0c\u521b\u5efa\u65b0\u5bf9\u8c61\u3002\u65b0\u5bf9\u8c61\u4ec5\u4ece\u65e7\u5bf9\u8c61\u590d\u5236id\u5c5e\u6027")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u524d\u63d0\uff1a\u5bf9\u8c61\u7c7b\u578b\u88ab",(0,n.kt)("inlineCode",{parentName:"p"},"@Entity"),"\u4fee\u9970\uff0c\u662fORM\u5b9e\u4f53\uff0c\u5177\u5907id"))),(0,n.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Book lonelyBook = ImmutableObjects.toIdOnly(book);\n"))),(0,n.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val lonelyBook = toIdOnly(book)\n")))),(0,n.kt)("p",null,"\u6216"),(0,n.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"List<Book> lonelyBooks = ImmutableObjects.toIdOnly(books);\n"))),(0,n.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val lonelyBooks = toIdOnly(books)\n")))),(0,n.kt)("h3",{id:"fromstring"},"fromString"),(0,n.kt)("p",null,"\u4f5c\u7528\uff1aJSON\u53cd\u5e8f\u5217\u5316\u7684\u5feb\u6377\u65b9\u5f0f"),(0,n.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'Book book = ImmutableObjects.fromObject(\n    Book.class,\n    "{\\"id\\":1,\\"name\\":\\"Learning GraphQL\\",\\"authorIds\\":[2,1]}"  \n);\n'))),(0,n.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = fromString(\n    Book::class,\n    """{"id":1,"name":"Learning GraphQL","authorIds":[2,1]}"""\n)\n')))),(0,n.kt)("h2",{id:"\u64cd\u4f5c\u53ef\u53d8draft"},"\u64cd\u4f5c\u53ef\u53d8Draft"),(0,n.kt)("h3",{id:"set"},"set"),(0,n.kt)("p",null,"\u4f5c\u7528\uff1a\u52a8\u6001\u8bbe\u7f6eDraft\u5c5e\u6027"),(0,n.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Book newBook = BookDraft.$.produce(book, draft -> {\n    DraftObjects.set(draft, BookProps.AUTHOR_IDS, Arrays.asList(1L, 3L));\n});\n"))),(0,n.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val newBook = new(Book::class).by(book) {\n    set(draft, Book::authorIds, listOf(1L, 3L))\n}\n")))),(0,n.kt)("h3",{id:"unload"},"unload"),(0,n.kt)("p",null,"\u4f5c\u7528\uff1a\u5378\u8f7dDraft\u5c5e\u6027\uff0c\u5373\uff0c\u5c06\u67d0\u4e2a\u5c5e\u6027\u6807\u8bb0\u6210\u672a\u52a0\u8f7d\u72b6\u6001"),(0,n.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Book newBook = BookDraft.$.produce(book, draft -> {\n    DraftObjects.unload(draft, BookProps.AUTHOR_IDS);\n});\n"))),(0,n.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val newBook = new(Book::class).by(book) {\n    unload(draft, Book::authorIds)\n}\n")))),(0,n.kt)("h3",{id:"show"},"show"),(0,n.kt)("p",null,"\u4f5c\u7528\uff1a\u663e\u793a\u67d0\u5c5e\u6027"),(0,n.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Book newBook = BookDraft.$.produce(book, draft -> {\n    DraftObjects.show(draft, BookProps.AUTHOR_IDS);\n});\n"))),(0,n.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val newBook = new(Book::class).by(book) {\n    show(draft, Book::authorIds)\n}\n")))),(0,n.kt)("h3",{id:"hide"},"hide"),(0,n.kt)("p",null,"\u4f5c\u7528\uff1a\u9690\u85cf\u67d0\u5c5e\u6027"),(0,n.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,n.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Book newBook = BookDraft.$.produce(book, draft -> {\n    DraftObjects.hide(draft, BookProps.AUTHOR_IDS);\n});\n"))),(0,n.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-kotlin"},"val newBook = new(Book::class).by(book) {\n    hide(draft, Book::authorIds)\n}\n")))))}m.isMDXComponent=!0}}]);