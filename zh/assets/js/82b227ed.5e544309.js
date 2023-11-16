"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),m=u(n),k=a,c=m["".concat(p,".").concat(k)]||m[k]||d[k]||o;return n?l.createElement(c,i(i({ref:t},s),{},{components:n})):l.createElement(c,i({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,i[1]=r;for(var u=2;u<o;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(67294),a=n(34334);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>k});var l=n(83117),a=n(67294),o=n(34334),i=n(72389),r=n(67392),p=n(7094),u=n(12466);const s="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:k,groupId:c,className:N}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=k??f.map((e=>{let{props:{value:t,label:n,attributes:l}}=e;return{value:t,label:n,attributes:l}})),b=(0,r.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:h}=(0,p.U)(),[C,A]=(0,a.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=c){const e=y[c];null!=e&&e!==C&&g.some((t=>t.value===e))&&A(e)}const B=e=>{const t=e.currentTarget,n=O.indexOf(t),l=g[n].value;l!==C&&(T(t),A(l),null!=c&&h(c,String(l)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},N)},g.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>O.push(e),onKeyDown:I,onFocus:B,onClick:B},i,{className:(0,o.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function k(e){const t=(0,i.Z)();return a.createElement(m,(0,l.Z)({key:String(t)},e))}},18599:(e,t,n)=>{n.d(t,{ZP:()=>i});var l=n(83117),a=(n(67294),n(3905));n(65488),n(85162);const o={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5b50\u5bf9\u8c61\u8131\u52fe\u64cd\u4f5c\u67095\u79cd\u6a21\u5f0f"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u6a21\u5f0f"),(0,a.kt)("th",null,"\u63cf\u8ff0"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("p",null,"NONE"),(0,a.kt)("p",null,"(\u9ed8\u8ba4)")),(0,a.kt)("td",null,(0,a.kt)("p",null,"\u89c6\u5168\u5c40\u914d\u7f6e",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration/dissociate-action-checking"},"jimmer.default-dissociate-action-checking"),"\u800c\u5b9a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration/dissociate-action-checking"},"jimmer.default-dissociate-action-checking"),"\u4e3atrue ",(0,a.kt)("em",{parentName:"p"},"(\u9ed8\u8ba4)")," \u6216 \u5f53\u524d\u5173\u8054\u6240\u57fa\u4e8e\u7684\u5916\u952e\u662f\u771f\u7684 ",(0,a.kt)("em",{parentName:"p"},"(\u6570\u636e\u5e93\u4e2d\u5b58\u5728\u76f8\u5e94\u7684\u5916\u952e\u7ea6\u675f\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"em",href:"/docs/mapping/base/foreignkey"},"\u771f\u5047\u5916\u952e"),")"),"\uff0c\u89c6\u4e3aCHECK\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration/dissociate-action-checking"},"jimmer.default-dissociate-action-checking"),"\u4e3afalse\u4e14\u5f53\u524d\u5173\u8054\u6240\u57fa\u4e8e\u7684\u5916\u952e\u662f\u5047\u7684 ",(0,a.kt)("em",{parentName:"p"},"(\u6570\u636e\u5e93\u4e2d\u6ca1\u6709\u76f8\u5e94\u7684\u5916\u952e\u7ea6\u675f\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"em",href:"/docs/mapping/base/foreignkey"},"\u771f\u5047\u5916\u952e"),")"),"\uff0c\u89c6\u4e3aLAX\u3002"))))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"LAX"),(0,a.kt)("td",null,(0,a.kt)("p",null,"\u8be5\u9009\u9879\u53ea\u5bf9\u4f2a\u5916\u952e\u6709\u6548 ",(0,a.kt)("em",{parentName:"p"},"(\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"em",href:"/docs/mapping/base/foreignkey"},"\u771f\u5047\u5916\u952e"),")"),"\uff0c\u5426\u5219\uff0c\u4f1a\u88ab\u5ffd\u7565\uff0c\u540cCHECK\u3002"),(0,a.kt)("p",null,"\u5373\u4fbf\u5b58\u5728\u5b50\u5bf9\u8c61\uff0c\u4e5f\u652f\u6301\u8131\u94a9\u64cd\u4f5c\u3002\u5373\u4f7f\u53d1\u751f\u7236\u5bf9\u8c61\u88ab\u5220\u9664\u7684\u60c5\u51b5 ",(0,a.kt)("em",{parentName:"p"},"(\u8131\u94a9\u6a21\u5f0f\u4e5f\u88ab\u5220\u9664\u6307\u4ee4\u91c7\u7528)"),"\uff0c\u4e5f\u4efb\u7531\u5b50\u5bf9\u8c61\u7684\u4f2a\u5916\u952e\u53d1\u751f\u60ac\u6302\u95ee\u9898 ",(0,a.kt)("em",{parentName:"p"},"(\u5373\u4fbf\u4f2a\u5916\u952e\u53d1\u751f\u60ac\u6302\uff0c\u67e5\u8be2\u7cfb\u7edf\u4e5f\u53ef\u4ee5\u6b63\u5e38\u5de5\u4f5c)"),"\u3002"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"CHECK"),(0,a.kt)("td",null,"\u5982\u679c\u5b58\u5728\u5b50\u5bf9\u8c61\uff0c\u5219\u4e0d\u652f\u6301\u8131\u52fe\u64cd\u4f5c\uff0c\u901a\u8fc7\u629b\u51fa\u5f02\u5e38\u963b\u6b62\u64cd\u4f5c\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"SET_NULL"),(0,a.kt)("td",null,"\u628a\u88ab\u8131\u52fe\u7684\u5b50\u5bf9\u8c61\u7684\u5916\u952e\u8bbe\u7f6e\u4e3anull\u3002\u524d\u63d0\u662f\u5b50\u5bf9\u8c61\u7684\u591a\u5bf9\u4e00\u5173\u8054\u5c5e\u6027\u662fnullable\u7684\uff1b\u5426\u5219\u5c1d\u8bd5\u6b64\u914d\u7f6e\u5c06\u4f1a\u5bfc\u81f4\u5f02\u5e38\u3002")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"DELETE"),(0,a.kt)("td",null,"\u5c06\u88ab\u8131\u52fe\u7684\u5b50\u5bf9\u8c61\u5220\u9664\u3002")))))}i.isMDXComponent=!0},60673:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>c,frontMatter:()=>p,metadata:()=>s,toc:()=>m});var l=n(83117),a=(n(67294),n(3905)),o=n(65488),i=n(85162),r=n(18599);const p={sidebar_position:4,title:"\u5220\u9664\u6307\u4ee4"},u=void 0,s={unversionedId:"mutation/delete-command",id:"mutation/delete-command",title:"\u5220\u9664\u6307\u4ee4",description:"\u57fa\u672c\u6982\u5ff5",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/mutation/delete-command.mdx",sourceDirName:"mutation",slug:"/mutation/delete-command",permalink:"/jimmer/zh/docs/mutation/delete-command",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/mutation/delete-command.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u5220\u9664\u6307\u4ee4"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528MapStruct",permalink:"/jimmer/zh/docs/mutation/save-command/input-dto/mapstruct"},next:{title:"\u76f4\u63a5\u4fee\u6539\u4e2d\u95f4\u8868",permalink:"/jimmer/zh/docs/mutation/associations"}},d={},m=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",level:2},{value:"\u903b\u8f91\u5220\u9664",id:"\u903b\u8f91\u5220\u9664",level:2},{value:"\u7269\u7406\u5220\u9664",id:"\u7269\u7406\u5220\u9664",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:3},{value:"\u8131\u52fe\u6a21\u5f0f",id:"\u8131\u52fe\u6a21\u5f0f",level:3},{value:"\u8131\u94a9\u793a\u8303",id:"\u8131\u94a9\u793a\u8303",level:3}],k={toc:m};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),(0,a.kt)("p",null,"\u5220\u9664\u6307\u4ee4\uff0c\u5373\u6309id\u6216id\u96c6\u5408\u5220\u9664\u5bf9\u8c61\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"API\u7c7b\u522b"),(0,a.kt)("th",null,"\u8bed\u8a00"),(0,a.kt)("th",null,"\u6309id\u5220\u9664"),(0,a.kt)("th",null,"\u6309id\u96c6\u5408\u5220\u9664"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{rowspan:"2"},"\u5e95\u5c42API"),(0,a.kt)("td",null,"Java"),(0,a.kt)("td",null,"\u5b8c\u6574API",(0,a.kt)("ul",null,(0,a.kt)("li",null,"JSqlClient.getEntities().delete"),(0,a.kt)("li",null,"JSqlClient.getEntities().deleteCommand")),"\u5feb\u6377API",(0,a.kt)("ul",null,(0,a.kt)("li",null,"JSqlClient.deleteById"))),(0,a.kt)("td",null,"\u5b8c\u6574API",(0,a.kt)("ul",null,(0,a.kt)("li",null,"JSqlClient.getEntities().deleteAll"),(0,a.kt)("li",null,"JSqlClient.getEntities().deleteAllCommand")),"\u5feb\u6377API",(0,a.kt)("ul",null,(0,a.kt)("li",null,"JSqlClient.deleteByIds")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Kotlin"),(0,a.kt)("td",null,"\u5b8c\u6574API",(0,a.kt)("ul",null,(0,a.kt)("li",null,"KSqlClient.entities.delete")),"\u5feb\u6377API",(0,a.kt)("ul",null,(0,a.kt)("li",null,"KSqlClient.deleteById"))),(0,a.kt)("td",null,"\u5b8c\u6574API",(0,a.kt)("ul",null,(0,a.kt)("li",null,"KSqlClient.entities.deleteAll")),"\u5feb\u6377API",(0,a.kt)("ul",null,(0,a.kt)("li",null,"KSqlClient.deleteByIds")))),(0,a.kt)("tr",null,(0,a.kt)("td",{rowspan:"2"},"Spring Data API"),(0,a.kt)("td",null,"Java"),(0,a.kt)("td",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"JRepository.deleteById"))),(0,a.kt)("td",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"JRepository.deleteByIds"),(0,a.kt)("li",null,"JRepository.deleteAllById")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Kotlin"),(0,a.kt)("td",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"KRepository.deleteById"))),(0,a.kt)("td",null,(0,a.kt)("ul",null,(0,a.kt)("li",null,"KRepository.deleteByIds"),(0,a.kt)("li",null,"KRepository.deleteAllById")))))),(0,a.kt)("p",null,"\u5fc5\u8981\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728Java\u5e95\u5c42API\u4e2d\uff0c\u5177\u5907\u4e24\u4e2a\u65b9\u6cd5\u4ee5Command\u7ed3\u5c3e\u7684\u65b9\u6cd5: ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteCommand"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"deleteAllCommand"),"\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8fd9\u4e24\u4e2a\u65b9\u6cd5\u521b\u5efa\u6307\u4ee4\u4f46\u4e0d\u7acb\u5373\u6267\u884c\uff0c\u7528\u6237\u5bf9\u6307\u4ee4\u505a\u51fa\u66f4\u591a\u914d\u7f6e\u540e\uff0c\u5728\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"execute"),"\u6267\u884c\u3002"),(0,a.kt)("p",{parentName:"li"},"\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"deleteCommand"),"\u4e3a\u4f8b"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-java"},"DeleteResult result = sqlClient\n    .getEntities()\n    .deleteCommand(BookStore.class, 1L) \u2776\n    .setDissociateAction(BookProps.STORE, DissociateAction.SET_NULL) \u2777\n    .execute(); \u2778\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2776 \u521b\u5efa\u6307\u4ee4\uff0c\u4f46\u4e0d\u6267\u884c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2777 \u914d\u7f6e\u6307\u4ee4\uff0c\u53ef\u4ee5\u7528\u94fe\u5f0fAPI\u8fdb\u884c\u591a\u4e2a\u914d\u7f6e ",(0,a.kt)("em",{parentName:"p"},"(\u8fd9\u91cc\u4ec5\u4ec5\u793a\u8303\u4e86\u4e00\u4e2a\u914d\u7f6e)")),(0,a.kt)("admonition",{parentName:"li",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u7684\u4f5c\u7528\u4f1a\u5728\u540e\u6587\u9610\u8ff0\uff0c\u8bfb\u8005\u53ef\u4ee5\u5148\u5ffd\u7565\u5b83"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u2778\u6700\u7ec8\u6267\u884c"))),(0,a.kt)("p",{parentName:"li"},"kotlin\u4e0d\u9700\u8981\u5982\u6b64\u8bbe\u8ba1\uff0c\u56e0\u4e3a\u5176delete\u65b9\u6cd5\u652f\u6301\u4e00\u4e2a\u53ef\u9009\u7684Lambda\u53c2\u6570\u7528\u4e8e\u914d\u7f6e\uff0c\u76f4\u63a5\u6267\u884c\u5e76\u9644\u5e26\u4e0a\u5fc5\u8981\u914d\u7f6e\u5373\u53ef\u3002"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val result = sqlClient\n    .entities\n    .delete(BookStore.class, 1L) {\n        setDissociateAction(Book::store, DissociateAction.SET_NULL)\n    }\n"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5728Spring Data API\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u627e\u5230\u4e24\u4e2a\u529f\u80fd\u76f8\u540c\u4f46\u540d\u79f0\u4e0d\u540c\u7684\u65b9\u6cd5\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"deleteByIds"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"deleteAllById"),"\u3002"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"deleteByIds"),"\uff1a \u548cJimmer\u5e95\u5c42\u5feb\u6377API\u98ce\u683c\u4e00\u81f4\u7684\u65b9\u6cd5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"deleteAllById"),"\uff1a\u7ee7\u627f",(0,a.kt)("inlineCode",{parentName:"p"},"org.springframework.data.repository.CrudRepository"),"\u540e\u5fc5\u9700\u62e5\u6709\u65b9\u6cd5\uff0c\u53ef\u4ee5\u7406\u89e3\u6210",(0,a.kt)("inlineCode",{parentName:"p"},"deleteByIds"),"\u7684\u522b\u540d\u3002")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5220\u9664\u6307\u4ee4\u652f\u6301\u4e24\u79cd\u64cd\u4f5c"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u903b\u8f91\u5220\u9664\uff1a\u5e76\u975e\u771f\u6b63\u5220\u9664\u6570\u636e\uff0c\u4ec5\u628a\u5bf9\u8c61\u7684\u903b\u8f91\u5220\u9664\u5b57\u6bb5\u6807\u8bb0\u6210\u201c\u5df2\u7ecf\u5220\u9664\u201d\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7269\u7406\u5220\u9664\uff1a\u771f\u6b63\u5220\u9664\u6570\u636e\u3002"))),(0,a.kt)("p",{parentName:"li"},"\u4e0a\u8ff0\u6240\u6709API\uff0c\u90fd\u901a\u8fc7Java\u65b9\u6cd5\u91cd\u8f7d\u6216Kotlin\u9ed8\u8ba4\u53c2\u6570\u652f\u6301\u4e00\u4e2a\u53ef\u9009\u7684\u53c2\u6570\uff0c\u5176\u7c7b\u578b\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"DeleteMode"),"\uff0c\u8be5\u53c2\u6570\u7c7b\u578b\u4e3a\u679a\u4e3e\uff0c\u5177\u6709\u4e09\u4e2a\u53d6\u503c"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"AUTO"),": \u4e0d\u660e\u786e\u6307\u5b9a\u5f53\u524d\u64cd\u4f5c\u662f\u903b\u8f91\u5220\u9664\u8fd8\u662f\u7269\u7406\u5220\u9664"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u88ab\u5220\u9664\u7684\u5b9e\u4f53\u7c7b\u578b\u5177\u5907",(0,a.kt)("a",{parentName:"p",href:"../mapping/advanced/logical-deleted"},"\u903b\u8f91\u5220\u9664\u5b57\u6bb5"),"\uff0c\u5219\u6267\u884c\u903b\u8f91\u5220\u9664")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5426\u5219\uff0c\u6267\u884c\u7269\u7406\u5220\u9664")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"LOGICAL"),": \u660e\u786e\u6307\u5b9a\u5f53\u524d\u64cd\u4f5c\u662f\u903b\u8f91\u5220\u9664"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u88ab\u5220\u9664\u7684\u5b9e\u4f53\u7c7b\u578b\u5177\u5907",(0,a.kt)("a",{parentName:"p",href:"../mapping/advanced/logical-deleted"},"\u903b\u8f91\u5220\u9664\u5b57\u6bb5"),"\uff0c\u5219\u6267\u884c\u903b\u8f91\u5220\u9664")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5426\u5219\uff0c\u629b\u51fa\u5f02\u5e38\uff0c\u8bf4\u660e\u5f53\u524d\u5b9e\u4f53\u4e0d\u652f\u6301\u903b\u8f91\u5220\u9664")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"PHYSICAL"),": \u660e\u786e\u6307\u5b9a\u5f53\u524d\u64cd\u4f5c\u662f\u7269\u7406\u5220\u9664"),(0,a.kt)("p",{parentName:"li"},"\u65e0\u8bba\u88ab\u5220\u9664\u7684\u5b9e\u4f53\u7c7b\u578b\u662f\u5426\u5177\u5907",(0,a.kt)("a",{parentName:"p",href:"../mapping/advanced/logical-deleted"},"\u903b\u8f91\u5220\u9664\u5b57\u6bb5"),"\uff0c\u90fd\u6267\u884c\u7269\u7406\u5220\u9664"))))),(0,a.kt)("h2",{id:"\u903b\u8f91\u5220\u9664"},"\u903b\u8f91\u5220\u9664"),(0,a.kt)("p",null,"\u5047\u8bbe\u5b9e\u4f53\u5177\u5907",(0,a.kt)("a",{parentName:"p",href:"../mapping/advanced/logical-deleted"},"\u903b\u8f91\u5220\u9664\u5b57\u6bb5"),"\uff0c\u4f8b\u5982"),(0,a.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Book.java"',title:'"Book.java"'},'@Entity\npublic interface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("true")\n    boolean isDeleted();\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n'))),(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="Book.kt"',title:'"Book.kt"'},'@Entity\ninterface Book {\n\n    // highlight-next-line\n    @LogicalDeleted("true")\n    val isDeleted: Boolean\n\n    ...\u7701\u7565\u5176\u4ed6\u4ee3\u7801...\n}\n')))),(0,a.kt)("p",null,"\u90a3\u4e48\u4ee5\u4e0b\u4e09\u79cd\u884c\u4e3a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sqlClient.deleteById(Book.class, 1L)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sqlClient.deleteById(Book.class, 1L, DeleteMode.AUTO)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sqlClient.deleteById(Book.class, 1L, DeleteMode.LOGICAL)"))),(0,a.kt)("p",null,"\u7684\u529f\u80fd\u4e00\u6837\uff0c\u90fd\u8868\u793a\u903b\u8f91\u5220\u9664\uff0c\u751f\u6210\u7684sql\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK \nset DELETED = ? /* true */\nwhere ID in(?/* 1L*/)\n")),(0,a.kt)("h2",{id:"\u7269\u7406\u5220\u9664"},"\u7269\u7406\u5220\u9664"),(0,a.kt)("p",null,"\u5982\u679c\u5b9e\u4f53\u4e0d\u5177\u5907",(0,a.kt)("a",{parentName:"p",href:"../mapping/advanced/logical-deleted"},"\u903b\u8f91\u5220\u9664\u5b57\u6bb5"),"\uff0c\u6216\u5220\u9664\u6a21\u5f0f\u88ab\u62a2\u884c\u6307\u5b9a\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"DeleteMode.PHYSICAL"),"\uff0c\u5219\u6267\u884c\u7269\u7406\u5220\u9664\u3002"),(0,a.kt)("h3",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,a.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'DeleteResult result = sqlClient\n    .getEntities()\n    .deleteAll(Book.class, Arrays.asList(1L, 2L, 3L, 4L));\n\nSystem.out.println(\n    \n    "Affected row count: " + \n    result.getTotalAffectedRowCount() +\n\n    "\\nAffected row count of table \'BOOK\': " +\n    result.getAffectedRowCount(AffectedTable.of(Book.class)) +\n    \n    "\\nAffected row count of middle table \'BOOK_AUTHOR_MAPPING\': " +\n    result.getAffectedRowCount(AffectedTable.of(BookProps.AUTHORS))\n);\n'))),(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val result = sqlClient\n    .entities\n    .deleteAll(Book::class, listOf(1L, 2L, 3L, 4L))\nprintln(\n    """Affected row count: \n        |${result.totalAffectedRowCount}\n        |Affected row count of table \'BOOK\': \n        |${result.affectedRowCount(Book::class)}\n        |Affected row count of middle table \'BOOK_AUTHOR_MAPPING\': \n        |${result.affectedRowCount(Book::authors)}\n    """.trimMargin()\n)\n')))),(0,a.kt)("p",null,"\u6700\u7ec8\u751f\u6210\u7684SQL\u5982\u4e0b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK_AUTHOR_MAPPING \nwhere BOOK_ID in(?, ?, ?, ?)\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"delete from BOOK \nwhere ID in(?, ?, ?, ?)\n")))),(0,a.kt)("h3",{id:"\u8131\u52fe\u6a21\u5f0f"},"\u8131\u52fe\u6a21\u5f0f"),(0,a.kt)("p",null,"\u4ece\u4e0a\u9762\u7684\u8bba\u8ff0\u53ef\u4ee5\u770b\u5230\uff0cdelete\u6307\u4ee4\u6709\u53ef\u80fd\u5bfc\u81f4\u591a\u5bf9\u591a\u5173\u8054\u4e2d\u95f4\u8868\u7684\u6570\u636e\u7684\u88ab\u5220\u9664\uff0c\u8fd9\u662f\u6bd4\u8f83\u7b80\u5355\u7684\u60c5\u51b5\u3002"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u76f4\u63a5\u57fa\u4e8e\u5916\u952e\u7684\u4e00\u5bf9\u4e00\u6216\u4e00\u5bf9\u591a\u5173\u8054\u800c\u8a00\uff0c\u9700\u8981\u5904\u7406\u7684\u60c5\u51b5\u66f4\u590d\u6742\u4e00\u4e9b\u3002"),(0,a.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'DeleteResult result = sqlClient\n    .getEntities()\n    .delete(BookStore.class, 1L);\n\nSystem.out.println(\n\n    "Affected row count: " +\n            result.getTotalAffectedRowCount() +\n\n            "\\nAffected row count of table \'BOOK_STORE\': " +\n            result.getAffectedRowCount(AffectedTable.of(BookStore.class)) +\n\n            "\\nAffected row count of table \'BOOK\': " +\n            result.getAffectedRowCount(AffectedTable.of(Book.class)) +\n\n            "\\nAffected row count of middle table \'BOOK_AUTHOR_MAPPING\': " +\n            result.getAffectedRowCount(AffectedTable.of(BookProps.AUTHORS))\n);\n'))),(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val result = sqlClient\n    .entities\n    .delete(BookStore::class, 1L)\nprintln(\n    \"\"\"Affected row count: \n        |${result.totalAffectedRowCount}\n        |Affected row count of table 'BOOK_STORE': \n        |${result.affectedRowCount(BookStore::class)}\n        |Affected row count of table 'BOOK': \n        |${result.affectedRowCount(Book::class)}\n        |Affected row count of middle table 'BOOK_AUTHOR_MAPPING': \n        |${result.affectedRowCount(Book::authors)}\n    \"\"\".trimMargin()\n)\n")))),(0,a.kt)("p",null,"\u8fd9\u6bb5\u4ee3\u7801\u5220\u9664\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u5bf9\u8c61\u5b58\u5728\u4e00\u5bf9\u591a\u5173\u8054",(0,a.kt)("inlineCode",{parentName:"p"},"BookStore.books"),"\uff0c\u5982\u679c\u88ab\u5220\u9664\u7684\u5bf9\u8c61\u5728\u6570\u636e\u5e93\u4e2d\u5df2\u7ecf\u5b58\u5728\u4e00\u4e9b\u5173\u8054\u5bf9\u8c61\uff0cJimmer\u5c06\u629b\u5f03\u8fd9\u4e9b\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u4e00\u5bf9\u591a\u5173\u8054",(0,a.kt)("inlineCode",{parentName:"p"},"BookStore.books"),"\u4e0d\u662f\u57fa\u4e8e\u4e2d\u95f4\u8868\u7684\u6620\u5c04\uff0c\u800c\u662f\u57fa\u4e8e\u5916\u952e\u6620\u5c04\u3002Jimmer\u5c06\u5982\u4f55\u629b\u5f03\u8fd9\u4e9b",(0,a.kt)("inlineCode",{parentName:"p"},"Book"),"\u5bf9\u8c61\u5462\uff1f"),(0,a.kt)("p",null,"\u548cJPA\u4e0d\u540c\uff0cJimmer\u4e0d\u5141\u8bb8\u76f4\u63a5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"@OneToMany"),"\u8fdb\u884c\u5173\u8054\u6620\u5c04\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"@OneToMany"),"\u5fc5\u987b\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"mappedBy"),"\u5c5e\u6027\u3002\u53ef\u4ee5\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"../mapping/base/association/one-to-many"},"@OneToMany"),"\u4ee5\u4e86\u89e3\u66f4\u591a\u3002"),(0,a.kt)("p",null,"\u8fd9\u8868\u793a\uff0c\u901a\u8fc7\u4e00\u5bf9\u591a\u5173\u8054",(0,a.kt)("inlineCode",{parentName:"p"},"BookStore.books"),"\u4e00\u5b9a\u80fd\u627e\u5230\u4e0e\u4e4b\u5bf9\u5e94\u7684\u591a\u5bf9\u4e00\u5173\u8054",(0,a.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0cJimmer\u4f1a\u53c2\u8003\u591a\u5bf9\u4e00\u5173\u8054\u5c5e\u6027",(0,a.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u4e0a\u7684",(0,a.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate"),"\u6ce8\u89e3\u3002"),(0,a.kt)(r.ZP,{mdxType:"DissociateMode"}),(0,a.kt)("h3",{id:"\u8131\u94a9\u793a\u8303"},"\u8131\u94a9\u793a\u8303"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u6240\u5bf9\u5e94\u7684\u5916\u952e\u88ab",(0,a.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate"),"\u6ce8\u89e3\u914d\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"SET_NULL"),"\uff0c\u5219\uff0c\u6267\u884c\u5982\u4e0bSQL"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"update BOOK set STORE_ID = null where STORE_ID in(?)\n")),(0,a.kt)("p",{parentName:"li"},"\u5176\u4e2d\u53c2\u6570\u4e3a\u88ab\u5220\u9664\u5bf9\u8c61\u7684id\u3002\u8fd9\u6837\uff0c\u8fd9\u4e9b\u88ab\u629b\u5f03\u5bf9\u8c61\u7684\u5916\u952e\u5c31\u88ab\u8bbe\u7f6e\u4e3anull\u4e86\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5426\u5219\uff0c\u5219\u5148\u6267\u884c"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"select ID from BOOK where STORE_ID in(?)\n")),(0,a.kt)("p",{parentName:"li"},"\u5176\u4e2d\u53c2\u6570\u4e3a\u88ab\u5220\u9664\u5bf9\u8c61\u7684id\u3002\u8fd9\u6837\uff0c\u5c31\u5f97\u5230\u8fd9\u4e9b\u88ab\u629b\u5f03\u5bf9\u8c61\u7684id\u4e86\u3002"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u67e5\u8be2\u6ca1\u6709\u8fd4\u56de\u4efb\u4f55\u6570\u636e\uff0c\u5c31\u5ffd\u7565\u540e\u7eed\u6b65\u9aa4\u3002")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u6240\u5bf9\u5e94\u7684\u5916\u952e\u88ab",(0,a.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate"),"\u6ce8\u89e3\u914d\u7f6e\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE"),"\uff0c\n\u8fd0\u7528\u65b0\u7684delete\u6307\u4ee4\u5220\u9664\u8fd9\u4e9b\u88ab\u629b\u5f03\u5bf9\u8c61\uff0c\u5176\u5b9e\u8fd9\u5c31\u662fdelete\u6307\u4ee4\u7684\u81ea\u52a8\u9012\u5f52\u6267\u884c\u80fd\u529b\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5426\u5219\uff0c\u629b\u51fa\u5f02\u5e38\u3002"))))),(0,a.kt)("p",null,"\u4e0a\u9762\u6240\u8ba8\u8bba\u7684\u8fd9\u4e9b\u60c5\u51b5\uff0c\u90fd\u9700\u8981\u5f00\u53d1\u4eba\u5458\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u5c5e\u6027\u4e0a\u4f7f\u7528\u6ce8\u89e3",(0,a.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate"),"\u3002"),(0,a.kt)("p",null,"\u7136\u800c\uff0c\u4f60\u4e5f\u53ef\u4ee5\u9009\u62e9\u4e0d\u4f7f\u7528",(0,a.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate"),"\u6ce8\u89e3\uff0c\u800c\u52a8\u6001\u5730\u4e3adelete\u6307\u4ee4\u6307\u5b9adissociateAction\u914d\u7f6e\u3002"),(0,a.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"DeleteResult result = sqlClient\n    .getEntities()\n    .deleteCommand(BookStore.class, 1L)\n    .configure(it ->\n            it\n                // highlight-next-line\n                .setDissociateAction(\n                    BookProps.STORE,\n                    DissociateAction.SET_NULL\n                )\n    )\n    .execute();\n"))),(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"val result = sqlClient\n    .entities\n    .delete(BookStore::class, 1L) {\n        // highlight-next-line\n        setDissociateAction(\n            Book::store, \n            DissociateAction.SET_NULL\n        )\n    }\n")))),(0,a.kt)("p",null,"\u8fd9\u91cc\uff0c\u52a8\u6001\u5730\u8c03\u7528\u6307\u4ee4\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"setDissociateAction"),"\u65b9\u6cd5\uff0c\u76f8\u6bd4\u4e8e\u9759\u6001\u5730\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Book.store"),"\u5c5e\u6027\u4e0a\u4f7f\u7528\u6ce8\u89e3",(0,a.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate"),"\u5e76\u6307\u5b9a\u7ea7\u8054\u5220\u9664\uff0c\u6548\u679c\u5b8c\u5168\u4e00\u6837\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"setDissociateAction"),"\u65b9\u6cd5\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"DissociateAction.SET_NULL"),"\uff0c\u5219\u88ab\u8bbe\u7f6e\u5173\u8054\u5c5e\u6027\u5fc5\u987b\u53ef\u7a7a\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u5f02\u5e38\u3002")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"\u5982\u679c\u65e2\u52a8\u6001\u5730\u4e3asave\u6307\u4ee4\u914d\u7f6e\u4e86\u5220\u9664\u89c4\u5219\uff0c\u53c8\u9759\u6001\u5730\u5728\u5b9e\u4f53\u63a5\u53e3\u4e2d\u901a\u8fc7\u6ce8\u89e3",(0,a.kt)("a",{parentName:"p",href:"../mapping/advanced/on-dissociate"},"@OnDissociate"),"\u914d\u7f6e\u4e86\u5220\u9664\u89c4\u5219\uff0c\u5219\u52a8\u6001\u914d\u7f6e\u4f18\u5148\u3002")))))}c.isMDXComponent=!0}}]);