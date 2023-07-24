"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[7646],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(67294),r=n(34334),l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},65488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(83117),r=n(67294),l=n(34334),i=n(72389),p=n(67392),o=n(7094),u=n(12466),s="tabList__CuJ",c="tabItem_LNqP";function m(e){var t,n,i=e.lazy,m=e.block,d=e.defaultValue,k=e.values,v=e.groupId,b=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=k?k:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,p.l)(f,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:g[0].props.value;if(null!==N&&!f.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,o.U)(),T=h.tabGroupChoices,S=h.setTabGroupChoices,j=(0,r.useState)(N),O=j[0],C=j[1],x=[],z=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var M=T[v];null!=M&&M!==O&&f.some((function(e){return e.value===M}))&&C(M)}var w=function(e){var t=e.currentTarget,n=x.indexOf(t),a=f[n].value;a!==O&&(z(t),C(a),null!=v&&S(v,String(a)))},J=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=x.indexOf(e.currentTarget)+1;n=null!=(a=x[r])?a:x[0];break;case"ArrowLeft":var l,i=x.indexOf(e.currentTarget)-1;n=null!=(l=x[i])?l:x[x.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},b)},f.map((function(e){var t=e.value,n=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:J,onFocus:w,onClick:w},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function d(e){var t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},37023:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(83117),r=n(80102),l=(n(67294),n(3905)),i=n(65488),p=n(85162),o=["components"],u={sidebar_position:7,title:"JSON\u6620\u5c04"},s=void 0,c={unversionedId:"team-work/mapping/advanced/json",id:"team-work/mapping/advanced/json",title:"JSON\u6620\u5c04",description:"Jimmer\u652f\u6301JSON\u5c5e\u6027\u3002\u5728Java/Kotin\u5b9e\u4f53\u7c7b\u578b\u4e2d\uff0c\u8fd9\u79cd\u5c5e\u6027\u53ef\u4ee5\u88ab\u58f0\u660e\u4e3a\u4efb\u4f55\u975eObject\u7684JVM\u7c7b\u578b\uff0c\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u5bf9\u5e94\u5217\u7684\u5b58\u50a8\u7684\u4fe1\u606f\u662fJSON\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/mapping/advanced/json.mdx",sourceDirName:"team-work/mapping/advanced",slug:"/team-work/mapping/advanced/json",permalink:"/jimmer/zh/docs/team-work/mapping/advanced/json",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/mapping/advanced/json.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"JSON\u6620\u5c04"},sidebar:"tutorialSidebar",previous:{title:"Enum\u6620\u5c04",permalink:"/jimmer/zh/docs/team-work/mapping/advanced/enum"},next:{title:"\u975e\u7ed3\u6784\u5316\u6620\u5c04",permalink:"/jimmer/zh/docs/team-work/mapping/advanced/join-sql"}},m={},d=[{value:"\u5168\u5c40JSON\u6620\u5c04",id:"\u5168\u5c40json\u6620\u5c04",level:2},{value:"\u5c5e\u6027\u7ea7JSON\u6620\u5c04",id:"\u5c5e\u6027\u7ea7json\u6620\u5c04",level:2},{value:"ObjectMapper\u914d\u7f6e",id:"objectmapper\u914d\u7f6e",level:2},{value:"\u4f7f\u7528\u5e95\u5c42API",id:"\u4f7f\u7528\u5e95\u5c42api",level:3},{value:"\u4f7f\u7528Spring Boot Starter",id:"\u4f7f\u7528spring-boot-starter",level:3}],k={toc:d};function v(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Jimmer\u652f\u6301JSON\u5c5e\u6027\u3002\u5728Java/Kotin\u5b9e\u4f53\u7c7b\u578b\u4e2d\uff0c\u8fd9\u79cd\u5c5e\u6027\u53ef\u4ee5\u88ab\u58f0\u660e\u4e3a\u4efb\u4f55\u975eObject\u7684JVM\u7c7b\u578b\uff0c\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u5bf9\u5e94\u5217\u7684\u5b58\u50a8\u7684\u4fe1\u606f\u662fJSON\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"JSON\u5c5e\u6027\u662f\u7b80\u5355\u5c5e\u6027\uff0c\u800c\u975e\u5173\u8054\u5c5e\u6027\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u6309\u76ee\u524d\u5b9e\u73b0\uff0cPostgres\u4e2d\u5bf9\u5e94\u5217\u7684\u7c7b\u578b\u5e94\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"jsonb"),"\uff0c\u5176\u4ed6\u6570\u636e\u5e93\u4e2d\u5bf9\u5e94\u5217\u7684\u7c7b\u578b\u5e94\u4e3a\u5b57\u7b26\u4e32\u3002")))),(0,l.kt)("p",null,"Jimmer\u63d0\u4f9b",(0,l.kt)("inlineCode",{parentName:"p"},"org.babyfish.jimmer.sql.Serialized"),"\uff0c\u6709\u4e24\u79cd\u4f7f\u7528JSON\u6620\u5c04\u7684\u65b9\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5168\u5c40JSON\u6620\u5c04"),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u5c5e\u6027\u7684\u7c7b\u578b\u662f\u81ea\u5b9a\u4e49\u7c7b\uff0c\u800c\u975e\u6570\u7ec4\u3001\u96c6\u5408\u6216Map\u3002\u53ef\u4ee5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@Serialized"),"\u4fee\u9970\u8fd9\u4e2a\u7c7b\u3002\u8fd9\u6837\uff0c\u4e0d\u4ec5\u4ec5\u662f\u5f53\u524d\u5c5e\u6027\uff0c\u4efb\u4f55\u5b9e\u4f53\u4e2d\u76f8\u540c\u7c7b\u578b\u7684\u5c5e\u6027\u90fd\u4f1a\u6210\u4e3aJSON\u5c5e\u6027\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5c5e\u6027\u7ea7JSON\u6620\u5c04"),(0,l.kt)("p",{parentName:"li"},"\u65e0\u8bba\u5c5e\u6027\u662f\u4ec0\u4e48\u7c7b\u578b\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@Serialized"),"\u4fee\u9970\u5f53\u524d\u5c5e\u6027\u3002"),(0,l.kt)("p",{parentName:"li"},"\u4e00\u822c\u800c\u8a00\uff0c\u5e94\u8be5\u4fee\u9970\u7c7b\u578b\u4e3a\u6570\u7ec4\u3001\u96c6\u5408\u6216Map\u7c7b\u578b\u7684\u5c5e\u6027\uff0c\u56e0\u4e3a\u7c7b\u578b\u4e3a\u81ea\u5b9a\u4e49\u7c7b\u7684\u5c5e\u6027\u91c7\u7528\u5168\u5c40JSON\u6620\u5c04\u66f4\u597d\u3002"))),(0,l.kt)("h2",{id:"\u5168\u5c40json\u6620\u5c04"},"\u5168\u5c40JSON\u6620\u5c04"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u5b9a\u4e49\u81ea\u5b9a\u4e49\u7c7b\uff0c\u5e76\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@Serialized"),"\u4fee\u9970"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="UserType.java"',title:'"UserType.java"'},"// highlight-next-line\n@Serialized\npublic class UserType {\n\n    ...\u7701\u7565\u6210\u5458\uff0c\u53ef\u5305\u542b\u4efb\u610f\u4fe1\u606f...\n    ...\u53ea\u8981\u652f\u6301Json\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u5373\u53ef...\n}\n"))),(0,l.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="UserType.kt"',title:'"UserType.kt"'},"// highlight-next-line\n@Serialized\ndata class UserType(\n\n    ...\u7701\u7565\u53c2\u6570\uff0c\u53ef\u5305\u542b\u4efb\u4f55\u4fe1\u606f...\n    ...\u53ea\u8981\u652f\u6301Json\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u5373\u53ef...\n)\n")))),(0,l.kt)("p",null,"\u7136\u540e\uff0c\u5c31\u53ef\u4ee5\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"UserType"),"\u7c7b\u578b\u5b9a\u4e49\u4efb\u4f55\u5b9e\u4f53\u5c5e\u6027\u4e86"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    // highlight-next-line\n    UserType userData();\n\n    ...\u7701\u7565\u5176\u4ed6\u7c7b\u578b...\n}\n"))),(0,l.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n\n    // highlight-next-line\n    val userData: UserType\n    \n    ...\u7701\u7565\u5176\u4ed6\u7c7b\u578b...\n}\n")))),(0,l.kt)("h2",{id:"\u5c5e\u6027\u7ea7json\u6620\u5c04"},"\u5c5e\u6027\u7ea7JSON\u6620\u5c04"),(0,l.kt)("p",null,"\u76f4\u63a5\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"@Serialized"),"\u4fee\u9970\u5c5e\u6027\u5373\u53ef"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},"@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @Serialized\n    List<Map<String, SomeType1>> userData1();\n\n    // highlight-next-line\n    @Serialized\n    Map<String, List<SomeType2>> userData2();\n\n    ...\u7701\u7565\u5176\u4ed6\u7c7b\u578b...\n}\n"))),(0,l.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},"@Entity\ninterface Book {\n\n    // highlight-next-line\n    @Serialized\n    val userData1: List<Map<String, SomeType1>>\n    \n    // highlight-next-line\n    @Serialized\n    val userData2: Map<String, List<SomeType2>>\n    \n    ...\u7701\u7565\u5176\u4ed6\u7c7b\u578b...\n}\n")))),(0,l.kt)("h2",{id:"objectmapper\u914d\u7f6e"},"ObjectMapper\u914d\u7f6e"),(0,l.kt)("h3",{id:"\u4f7f\u7528\u5e95\u5c42api"},"\u4f7f\u7528\u5e95\u5c42API"),(0,l.kt)("p",null,"\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u4e3a\u88ab",(0,l.kt)("inlineCode",{parentName:"p"},"@Seralized"),"\u4fee\u9970\u7684\u5c5e\u6027\u914d\u7f6eJSON\u5e8f\u5217\u5316/\u53cd\u5e8f\u5217\u5316\u7684ObjectMapper\u3002"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"ObjectMapper mapper1 = ...\u7565...;\nObjectMapper mapper2 = ...\u7565...;\nObjectMapper mapper3 = ...\u7565...;\nJSqlClient sqlClient = JSqlClient\n    .newBuilder()\n    .setDefaultSerializedTypeObjectMapper(mapper1) \u2776\n    .setSerializedTypeObjectMapper(MetaConfig.class, mapper2) \u2777\n    .setSerializedTypePropMapper(TopicProps.TAGS, mapper3) \u2778\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n    .build();\n"))),(0,l.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"val mapper1: ObjectMapper = ...\u7565...\nval mapper2: ObjectMapper = ...\u7565...\nval mapper3: ObjectMapper = ...\u7565...\nval sqlClient = newKSqlClient {\n    setDefaultSerializedTypeObjectMapper(mapper1) \u2776\n    setSerializedTypeObjectMapper(MetaConfig::class, mapper2) \u2777\n    setSerializedTypePropMapper(Topic::tags, mapper3) \u2778\n    ...\u7701\u7565\u5176\u4ed6\u914d\u7f6e...\n}\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2776 \u5c06\u9ed8\u8ba4\u7684ObjectMapper\u8bbe\u7f6e\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"mapper1")),(0,l.kt)("p",{parentName:"li"},"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"setSerializedTypeObjectMapper(Object.class, mapper1)"),"\u7b49\u4ef7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2777 \u4efb\u4f55\u5c5e\u6027\uff0c\u53ea\u8981\u5176\u8fd4\u56de\u7c7b\u578b\u4e3aMetaConfig\u6216\u5176\u6d3e\u751f\u7c7b\u578b\uff0c\u90fd\u91c7\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"mapper2"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u2778 \u660e\u786e\u8bbe\u7f6e",(0,l.kt)("inlineCode",{parentName:"p"},"Topic.tags"),"\u7684ObjectMapper",(0,l.kt)("inlineCode",{parentName:"p"},"mapper3")),(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u88ab\u8bbe\u7f6e\u7684\u5c5e\u6027\u672a\u88ab",(0,l.kt)("inlineCode",{parentName:"p"},"@Serialized"),"\u4fee\u9970\uff0c\u5c06\u4f1a\u629b\u51fa\u5f02\u5e38"))),(0,l.kt)("p",null,"\u914d\u7f6e\u4f18\u5148\u7ea7\uff1a\u2778 > \u2777 > \u2776"),(0,l.kt)("h3",{id:"\u4f7f\u7528spring-boot-starter"},"\u4f7f\u7528Spring Boot Starter"),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528Spring Boot Starter\uff0cSqlClient\u662f\u81ea\u52a8\u521b\u5efa\u7684\uff0c\u4f46\u662f\u7528\u6237\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"Customizer/KCoustomizer"),"\u6765\u6539\u53d8SqlClient\u88ab\u521b\u5efa\u524d\u7684\u914d\u7f6e"),(0,l.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"// highlight-next-line\n@Component\npublic class SerializationCustomizer implements Customizer {\n\n    @Override\n    public void customize(JSqlClient.Builder builder) {\n        builder\n            .setDefaultSerializedTypeObjectMapper(...\u7565...)\n            .setSerializedTypeObjectMapper(MetaConfig.class, ...\u7565...)\n            .setSerializedTypePropMapper(TopicProps.TAGS, ...\u7565...);\n    }\n}\n"))),(0,l.kt)(p.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},"// highlight-next-line\n@Component\nclass SerializationCustomizer : KCustomizer {\n    \n    override fun customize(dsl: KSqlClientDsl) {\n        dsl\n            .setDefaultSerializedTypeObjectMapper(...\u7565...)\n            .setSerializedTypeObjectMapper(MetaConfig::class, ...\u7565...)\n            .setSerializedTypePropMapper(Topic::tags, ...\u7565...);\n    }\n}\n")))))}v.isMDXComponent=!0}}]);