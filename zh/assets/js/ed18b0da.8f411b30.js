"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[3704],{86153:function(e,t,n){n.d(t,{_:function(){return L}});var a=n(37872),i=n(67294),l=n(87357),r=n(83321),o=n(61903),m=n(23599),d=n(86886),u=n(67720),c=n(90629),p=n(7906),s=n(295),k=n(53252),N=n(72882),h=n(53184),v=n(53816),g=n(24661),f=n(96540),y=n(93946),b=n(41733),I=n(50657),Z=n(31425),C=n(6514),E=n(58951),T=n(37645),x=n(52263),w=n(59457),L=(0,i.memo)((function(){var e=(0,x.Z)().i18n,t=(0,i.useMemo)((function(){return"zh"==e.currentLocale||"zh_cn"==e.currentLocale||"zh_CN"==e.currentLocale}),[e.currentLocale]),n=(0,i.useMemo)((function(){return B}),[t]),L=(0,i.useMemo)((function(){for(var e,t=new Map,i=(0,a.Z)(n);!(e=i()).done;){var l=e.value;t.set(l.id,l)}return t}),[n]),q=(0,i.useMemo)((function(){return"zh"==e.currentLocale||"zh_cn"==e.currentLocale||e.currentLocale,A}),[e.currentLocale]),S=(0,i.useMemo)((function(){for(var e,t=new Map,n=(0,a.Z)(q);!(e=n()).done;){var i=e.value;t.set(i.id,i)}return t}),[q]),j=(0,w.x)((function(){return{userId:1,province:L.get(1).province,city:L.get(1).city,address:L.get(1).address,items:[{__rowId:1,productId:1,name:S.get(1).name,quantity:2},{__rowId:2,productId:10,name:S.get(10).name,quantity:1}]}})),M=j[0],P=j[1],z=(0,i.useMemo)((function(){return Math.max.apply(Math,M.items.map((function(e){return e.__rowId})))+1}),[M]),D=(0,i.useCallback)((function(e){var t=L.get(parseInt(e.target.value));void 0!==t&&P((function(e){e.userId=t.id,e.province=t.province,e.city=t.city,e.address=t.address}))}),[P,L]),U=(0,i.useCallback)((function(e){P((function(t){t.province=e.target.value}))}),[P]),O=(0,i.useCallback)((function(e){P((function(t){t.city=e.target.value}))}),[P]),K=(0,i.useCallback)((function(e){P((function(t){t.address=e.target.value}))}),[P]),F=(0,i.useCallback)((function(e,t){P((function(n){for(var i,l=(0,a.Z)(n.items);!(i=l()).done;){var r=i.value;if(r.__rowId===t){r.productId=parseInt(e.target.value),_(n);break}}}))}),[P]),G=(0,i.useCallback)((function(e,t){P((function(n){for(var i,l=(0,a.Z)(n.items);!(i=l()).done;){var r=i.value;if(r.__rowId===t){r.quantity=parseInt(e.target.value),_(n);break}}}))}),[P]),Q=(0,i.useCallback)((function(e){P((function(t){for(var n=t.items.length-1;n>=0;--n)if(t.items[n].__rowId===e){t.items.splice(n,1);break}}))}),[P]),J=(0,i.useCallback)((function(){P((function(e){e.items.push({__rowId:z,quantity:1})}))}),[P,z]),V=(0,i.useState)(!1),W=V[0],$=V[1],R=(0,i.useCallback)((function(){$(!0)}),[]),Y=(0,i.useCallback)((function(){$(!1)}),[]);return i.createElement(c.Z,{elevation:3,style:{padding:"1.5rem"}},i.createElement(l.Z,{component:"form",noValidate:!0,autoComplete:"off"},i.createElement(d.ZP,{container:!0,spacing:2},i.createElement(d.ZP,{item:!0,xs:4},i.createElement(o.Z,{fullWidth:!0,select:!0,label:"\u8d2d\u4e70\u4eba",value:M.userId,onChange:D},n.map((function(e){return i.createElement(m.Z,{key:e.id,value:e.id},e.nickName)})))),i.createElement(d.ZP,{item:!0,xs:4},i.createElement(o.Z,{fullWidth:!0,label:"\u7701\u4efd",value:M.province,onChange:U})),i.createElement(d.ZP,{item:!0,xs:4},i.createElement(o.Z,{fullWidth:!0,label:"\u57ce\u5e02",value:M.city,onChange:O})),i.createElement(d.ZP,{item:!0,xs:12},i.createElement(o.Z,{fullWidth:!0,label:"\u5730\u5740",value:M.address,onChange:K})),i.createElement(d.ZP,{item:!0,xs:12},i.createElement(u.Z,{textAlign:"left"},"\u8ba2\u5355\u660e\u7ec6"),i.createElement(N.Z,{component:c.Z},i.createElement(p.Z,{size:"small"},i.createElement(h.Z,null,i.createElement(v.Z,null,i.createElement(k.Z,null,"\u5546\u54c1"),i.createElement(k.Z,null,"\u6570\u91cf"),i.createElement(k.Z,null,"\u5355\u4ef7"),i.createElement(k.Z,null,"\u660e\u7ec6\u4ef7"),i.createElement(k.Z,null,"\u5220\u9664"))),i.createElement(s.Z,null,M.items.map((function(e){var t=void 0!==e.productId?S.get(e.productId):void 0;return i.createElement(v.Z,{key:e.__rowId},i.createElement(k.Z,null,i.createElement(o.Z,{select:!0,value:null==t?void 0:t.id,variant:"standard",size:"small",onChange:function(t){F(t,e.__rowId)}},q.map((function(e){return i.createElement(m.Z,{key:e.id,value:e.id},e.name)})))),i.createElement(k.Z,null,i.createElement(o.Z,{type:"number",value:e.quantity,variant:"standard",size:"small",onChange:function(t){G(t,e.__rowId)}})),i.createElement(k.Z,null,null==t?void 0:t.price),i.createElement(k.Z,null,void 0!==t&&t.price*e.quantity),i.createElement(k.Z,null,i.createElement(y.Z,{onClick:function(){return Q(e.__rowId)}},i.createElement(b.Z,null))))}))),i.createElement(g.Z,null,i.createElement(v.Z,null,i.createElement(k.Z,{colSpan:5},i.createElement(r.Z,{variant:"outlined",onClick:J},i.createElement(f.Z,null),"\u6dfb\u52a0"))))))),i.createElement(d.ZP,{item:!0,xs:12},t?"\u603b\u989d":"Total price",":",M.items.filter((function(e){return void 0!==e.productId&&"number"==typeof e.quantity})).map((function(e){return S.get(e.productId).price*e.quantity})).reduce((function(e,t){return e+t}),0)),i.createElement(d.ZP,{item:!0,xs:12},i.createElement(r.Z,{variant:"contained",onClick:R},"\u63d0\u4ea4")))),i.createElement(I.Z,{open:W,onClose:Y},i.createElement(T.Z,null,t?"\u4fe1\u606f":"Info"),i.createElement(C.Z,null,i.createElement(E.Z,null,t?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),i.createElement(Z.Z,null,i.createElement(r.Z,{onClick:Y},"\u5173\u95ed"))))})),B=[{id:1,nickName:"\u76ae\u76ae\u9c81",province:"\u56db\u5ddd",city:"\u6210\u90fd",address:"\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3"},{id:2,nickName:"\u9c81\u897f\u897f",province:"\u5e7f\u4e1c",city:"\u5e7f\u5dde",address:"\u767d\u4e91\u533a\u77f3\u6c99\u8def300\u53f7"},{id:3,nickName:"\u8212\u514b",province:"\u897f\u85cf",city:"\u62c9\u8428",address:"\u5806\u9f99\u5fb7\u5e86\u533a"},{id:4,nickName:"\u8d1d\u5854",province:"\u4e0a\u6d77",city:"\u4e0a\u6d77",address:"\u6d66\u4e1c\u65b0\u533a\u79c0\u6cbf\u897f\u8def218\u5f04"}],A=[{id:1,name:"zippo\u591c\u5149\u6d41\u6c99\u6253\u706b\u673a",price:268},{id:2,name:"\u6770\u767b(Jayden)\u5370\u5ea6\u5854\u5e03\u62c9\u9f13",price:9238},{id:3,name:"\u6d6a\u7434(Longines)\u673a\u68b0\u624b\u8868",price:13900},{id:4,name:"viney\u7537\u58eb\u76ae\u5e26",price:139},{id:5,name:"\u96c5\u8bd7\u5170\u9edb\u7ed2\u96fe\u54d1\u5149\u5507\u818f",price:310},{id:6,name:"CIRCUIT\u7537\u5b50\u6ed1\u96ea\u5355\u677f",price:2044},{id:7,name:"\u7279\u4ed1\u82cf\u8131\u8102\u725b\u5976",price:47},{id:8,name:"\u4e50\u9ad8\u79ef\u6728\u5e03\u52a0\u8fea",price:374},{id:9,name:"\u53cc\u559c\u71c3\u6c14\u7535\u78c1\u901a\u7528\u538b\u529b\u9505",price:137},{id:10,name:"\u61a8\u61a8\u5ba0\u732b\u722c\u67b6",price:238}];function _(e){for(var t=e.items,n=new Map,a=0;a<t.length;a++){var i=t[a];if("number"!=typeof i.quantity)i.quantity=1;else if(i.quantity<1){t.splice(a--,1);continue}if(void 0!==i.productId){var l=n.get(i.productId);void 0===l?n.set(i.productId,i):(l.quantity+=i.quantity,t.splice(a--,1))}}}},20036:function(e,t,n){n.d(t,{k:function(){return g}});var a=n(52263),i=n(90629),l=n(31536),r=n(61903),o=n(94054),m=n(33841),d=n(43246),u=n(23599),c=n(83321),p=n(50657),s=n(37645),k=n(6514),N=n(58951),h=n(31425),v=n(67294),g=(0,v.memo)((function(){var e=(0,v.useState)((function(){return{name:"Learning GraphQL",edition:1,price:45,storeId:1,authorIds:[1,2]}})),t=e[0],n=e[1],g=(0,v.useCallback)((function(e){n((function(t){return Object.assign({},t,{name:e.target.value})}))}),[]),f=(0,v.useCallback)((function(e){n((function(t){return Object.assign({},t,{edition:e.target.valueAsNumber})}))}),[]),y=(0,v.useCallback)((function(e){n((function(t){return Object.assign({},t,{price:e.target.valueAsNumber})}))}),[]),b=(0,v.useCallback)((function(e){var t=void 0,a=e.target.value;-1===(t="string"==typeof a?parseInt(a):a)&&(t=void 0),n((function(e){return Object.assign({},e,{storeId:t})}))}),[]),I=(0,v.useCallback)((function(e){var t=[];console.log(e.target.value);var a=e.target.value;t="string"==typeof a?a.split(",").map((function(e){return parseInt(e)})):a,n((function(e){return Object.assign({},e,{authorIds:t})}))}),[]),Z=(0,a.Z)().i18n,C=(0,v.useMemo)((function(){return"zh"==Z.currentLocale||"zh_cn"==Z.currentLocale||"zh_CN"==Z.currentLocale}),[Z.currentLocale]),E=(0,v.useState)(!1),T=E[0],x=E[1],w=(0,v.useCallback)((function(){x(!0)}),[]),L=(0,v.useCallback)((function(){x(!1)}),[]);return v.createElement(i.Z,{elevation:3,style:{padding:"1.5rem",width:500}},v.createElement(l.Z,{spacing:2},v.createElement("h1",null,"Book Form"),v.createElement(r.Z,{label:"Name",value:t.name,onChange:g,error:""===t.name,helperText:""===t.name?"Name is required":""}),v.createElement(r.Z,{label:"Edition",type:"number",value:t.edition,onChange:f}),v.createElement(r.Z,{label:"Price",type:"number",value:t.price,onChange:y}),v.createElement(o.Z,{fullWidth:!0},v.createElement(m.Z,{id:"store-select-label"},"Store"),v.createElement(d.Z,{labelId:"store-select-label",label:"Authors",value:t.storeId,onChange:b},v.createElement(u.Z,{value:-1},"--NONE--"),v.createElement(u.Z,{value:1},"O'REILLY"),v.createElement(u.Z,{value:2},"MANNING"))),v.createElement(o.Z,{fullWidth:!0},v.createElement(m.Z,{id:"author-multi-select-label"},"Authors"),v.createElement(d.Z,{multiple:!0,labelId:"author-multi-select-label",label:"Authors",value:t.authorIds,onChange:I},v.createElement(u.Z,{value:1},"Eve Procello"),v.createElement(u.Z,{value:2},"Alex Banks"),v.createElement(u.Z,{value:3},"Dan Vanderkam"),v.createElement(u.Z,{value:4},"Boris Cherny"),v.createElement(u.Z,{value:5},"Samer Buna"))),v.createElement(o.Z,null,v.createElement(c.Z,{onClick:w,variant:"contained"},"\u63d0\u4ea4"))),v.createElement(p.Z,{open:T,onClose:L},v.createElement(s.Z,null,C?"\u4fe1\u606f":"Info"),v.createElement(k.Z,null,v.createElement(N.Z,null,C?"\u4ec5\u4f5c\u793a\u8303\uff0c\u65e0\u4efb\u4f55\u6548\u679c":"For demonstration only, without any effect")),v.createElement(h.Z,null,v.createElement(c.Z,{onClick:L},"\u5173\u95ed"))))}))},82999:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return N}});var a=n(83117),i=n(80102),l=(n(67294),n(3905)),r=n(65488),o=n(85162),m=n(20036),d=n(86153),u=["components"],c={sidebar_position:4,title:"\u4fdd\u5b58\u5173\u8054"},p=void 0,s={unversionedId:"team-work/mutation/save-command/association",id:"team-work/mutation/save-command/association",title:"\u4fdd\u5b58\u5173\u8054",description:"\u5173\u8054\u7c7b\u578b",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/team-work/mutation/save-command/association.mdx",sourceDirName:"team-work/mutation/save-command",slug:"/team-work/mutation/save-command/association",permalink:"/jimmer/zh/docs/team-work/mutation/save-command/association",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/team-work/mutation/save-command/association.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u4fdd\u5b58\u5173\u8054"},sidebar:"tutorialSidebar",previous:{title:"\u4e0d\u5b8c\u6574\u5bf9\u8c61",permalink:"/jimmer/zh/docs/team-work/mutation/save-command/incomplete"},next:{title:"\u8131\u94a9\u64cd\u4f5c",permalink:"/jimmer/zh/docs/team-work/mutation/save-command/dissociation"}},k={},N=[{value:"\u5173\u8054\u7c7b\u578b",id:"\u5173\u8054\u7c7b\u578b",level:2},{value:"\u77ed\u5173\u8054",id:"\u77ed\u5173\u8054",level:3},{value:"\u957f\u5173\u8054",id:"\u957f\u5173\u8054",level:3},{value:"\u4e00\u5bf9\u591a\u5173\u8054\u7684\u7279\u6b8a\u6027",id:"\u4e00\u5bf9\u591a\u5173\u8054\u7684\u7279\u6b8a\u6027",level:2},{value:"\u5b9e\u4f53\u5b9a\u4e49",id:"\u5b9e\u4f53\u5b9a\u4e49",level:3},{value:"\u4f7f\u7528\u4fdd\u5b58\u6307\u4ee4",id:"\u4f7f\u7528\u4fdd\u5b58\u6307\u4ee4",level:3},{value:"\u8131\u52fe\u64cd\u4f5c",id:"\u8131\u52fe\u64cd\u4f5c",level:2}],h={toc:N};function v(e){var t=e.components,n=(0,i.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u5173\u8054\u7c7b\u578b"},"\u5173\u8054\u7c7b\u578b"),(0,l.kt)("p",null,"\u7ad9\u5728\u7528\u6237\u89d2\u5ea6\uff0c\u88ab\u4fdd\u5b58\u6570\u636e\u7ed3\u6784\u4e2d\u5b58\u5728\u4e24\u79cd\u5173\u8054"),(0,l.kt)("h3",{id:"\u77ed\u5173\u8054"},"\u77ed\u5173\u8054"),(0,l.kt)("p",null,"\u6240\u8c13\u77ed\u5173\u8054\uff0c\u8868\u793a\u4ec5\u4fee\u6539\u5f53\u524d\u5bf9\u8c61\u548c\u5176\u4ed6\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054\u672c\u8eab\uff0c\u5bf9\u5173\u8054\u5bf9\u8c61\u7684\u4fee\u6539\u6ca1\u5174\u8da3\u3002"),(0,l.kt)("p",null,"\u901a\u5e38\uff0cUI\u8bbe\u8ba1\u4f1a\u91c7\u7528\u5355\u9009\u6846 ",(0,l.kt)("em",{parentName:"p"},"(\u5173\u8054\u5f15\u7528)")," \u6216\u591a\u9009\u6846 ",(0,l.kt)("em",{parentName:"p"},"(\u5173\u8054\u96c6\u5408)"),"\u3002"),(0,l.kt)(m.k,{mdxType:"ShortAssociation"}),(0,l.kt)("div",null,"\xa0"),(0,l.kt)("p",null,"\u5176\u4e2d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5355\u9009\u6846\u5bf9\u5e94\u591a\u5bf9\u4e00\u5173\u8054",(0,l.kt)("inlineCode",{parentName:"p"},"Book.store"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u591a\u9009\u6846\u5bf9\u5e94\u591a\u5bf9\u591a\u5173\u8054",(0,l.kt)("inlineCode",{parentName:"p"},"Book.authors")))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u5f85\u9009\u6570\u636e\u53ef\u80fd\u5f88\u591a\uff0c\u5e76\u4e0d\u9002\u5408\u8bbe\u8ba1\u4e3a\u4e0b\u62c9UI\u3002\u8fd9\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u5177\u5907\u7b5b\u9009\u6761\u4ef6\u548c\u5206\u9875\u529f\u80fd\u7684\u5bf9\u8c61\u6846\u6765\u4ee3\u66ff\u4e0b\u62c9\u6846\uff0c\u8fd9\u662f\u4e00\u79cd\u5e38\u89c1\u7684\u53d8\u901a\u65b9\u5f0f\u3002")),(0,l.kt)("p",null,"\u7531\u4e8e\u7528\u6237\u53ea\u60f3\u4fee\u6539\u5f53\u524d\u5bf9\u8c61\u548c\u5176\u4ed6\u5bf9\u8c61\u7684\u5173\u8054\uff0c\u4e0d\u60f3\u8fdb\u4e00\u6b65\u4fee\u6539\u5173\u8054\u5bf9\u8c61\uff0c\u6240\u4ee5UI\u4e0d\u53ef\u80fd\u51fa\u73b0\u591a\u5c42\u5173\u8054\u5d4c\u5957\u3002\u8fd9\u5c31\u662f\u79f0\u5176\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"\u77ed\u5173\u8054")," \u7684\u539f\u56e0\u3002"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4e3asave\u6307\u4ee4\u4f20\u9012\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\u4f5c\u4e3a\u53c2\u6570\u65f6\uff0c\u6307\u5b9a\u77ed\u5173\u8054\u6709\u4e24\u79cd\u65b9\u6cd5"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8981\u4e48\u8ba9\u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8981\u4e48\u8ba9\u5173\u8054\u5bf9\u8c61\u53ea\u6709key\u5c5e\u6027")))),(0,l.kt)("p",null,"\u4e24\u79cd\u65b9\u6cd5\u793a\u8303\u5982\u4e0b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8ba9\u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Book book = BookDraft.$.produce(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("39.9"));\n    draft.applyStore(store -> {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027\n        // highlight-next-line\n        store.setId(2L);\n    });\n    draft.addIntoAuthors(author -> {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027\n        // highlight-next-line\n        author.setId(4L);\n    });\n    draft.addIntoAuthors(author -> {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027\n        // highlight-next-line\n        author.setId(5L);\n    });\n});\nsqlClient.save(book);\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = new(Book::class).by {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("39.9")\n    store().apply {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027\n        // highlight-next-line\n        id = 2L\n    }\n    authors().addBy {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027\n        // highlight-next-line\n        id = 4L\n    }\n    authors().addBy {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709id\u5c5e\u6027\n        // highlight-next-line\n        id = 5L\n    }\n}\nsqlClient.save(book)\n')))),(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u5bf9\u88ab\u4fdd\u5b58\u6570\u636e\u7ed3\u6784\u8fdb\u884c\u786c\u7f16\u7801\u4ec5\u4e3a\u793a\u8303\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\u88ab\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u7531\u524d\u7aef\u754c\u9762\u63d0\u4ea4\u3002"),(0,l.kt)("p",{parentName:"admonition"},"\u5f53\u7136\uff0c\u5982\u679c\u7528\u6237\u6309\u7167",(0,l.kt)("a",{parentName:"p",href:"../../mapping/advanced/view/id-view"},"\u6620\u5c04\u7bc7/\u8fdb\u9636\u6620\u5c04/\u89c6\u56fe\u5c5e\u6027/IdView"),"\u4e00\u6587\u7684\u65b9\u6cd5\u5b9a\u4e49\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"authorIds"),"\u5c5e\u6027\uff0c\u4e0a\u8ff0\u4ee3\u7801\u53ef\u4ee5\u88ab\u7b80\u5316\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"draft.setAuthorIds(Arrays.asList(4L, 5L));\n")),(0,l.kt)("p",{parentName:"admonition"},"\u4e3a\u4e86\u8ba9\u4f8b\u5b50\u66f4\u5177\u666e\u9002\u6027\uff0c\u8fd9\u91cc\u5e76\u4e0d\u5047\u8bbe\u7528\u6237\u4e3a\u5b9e\u4f53\u7c7b\u578b\u5b9a\u4e49\u4e86",(0,l.kt)("a",{parentName:"p",href:"../../mapping/advanced/view/id-view"},"IdView"),"\u5c5e\u6027\u3002\u540e\u7eed\u6240\u6709\u6587\u6863\u90fd\u5982\u6b64\uff0c\u4e0d\u518d\u63d0\u9192\u3002"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8ba9\u5173\u8054\u5bf9\u8c61\u53ea\u6709key\u5c5e\u6027"),(0,l.kt)("admonition",{parentName:"li",type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u4e0b\u9762\u4ee3\u7801\uff0c\u5047\u8bbe"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"BookStore"),"\u7c7b\u578b\u7684key\u5c5e\u6027\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"name"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"Author"),"\u7c7b\u578b\u7684key\u5c5e\u6027\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"firstName"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"lastName")," "),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u8fd9\u4e2a\u552f\u4e00\u6027\u7ea6\u675f\u5e76\u4e0d\u5408\u7406\uff0c\u8fd9\u91cc\u4e3a\u7b80\u5316\u4f8b\u5b50\uff0c\u59d1\u4e14\u8fd9\u6837\u5047\u8bbe\uff0c\u8bf7\u8bfb\u8005\u5bf9\u6b64\u7ec6\u8282\u522b\u592a\u8f83\u771f"))))),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Book book = BookDraft.$.produce(draft -> {\n    draft.setName("SQL in Action");\n    draft.setEdition(1);\n    draft.setPrice(new BigDecimal("39.9"));\n    draft.applyStore(store -> {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709key\u5c5e\u6027\uff0c\u5373`BookStore.name`\n        // highlight-next-line\n        store.setName("MANNING");\n    });\n    draft.addIntoAuthors(author -> {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709key\u5c5e\u6027\uff0c\u5373`Author.firstName`\u548c`Author.lastName`\n        // highlight-next-line\n        author.setFirstName("Boris").setLastName("Cherny");\n    });\n    draft.addIntoAuthors(author -> {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709key\u5c5e\u6027\uff0c\u5373`Author.firstName`\u548c`Author.lastName`\n        // highlight-next-line\n        author.setFirstName("Samer").setLastName("Buna");\n    });\n});\nsqlClient.save(book);\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val book = new(Book::class).by {\n    name = "SQL in Action"\n    edition = 1\n    price = BigDecimal("39.9")\n    store().apply {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709key\u5c5e\u6027\uff0c\u5373`BookStore.name`\n        // highlight-next-line\n        name = "MANNING"\n    }\n    authors().addBy {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709key\u5c5e\u6027\uff0c\u5373`Author.firstName`\u548c`Author.lastName`\n        // highlight-next-line\n        firstName = "Boris"\n        // highlight-next-line\n        lastName = "Cherny"\n    }\n    authors().addBy {\n        // \u5173\u8054\u5bf9\u8c61\u53ea\u6709key\u5c5e\u6027\uff0c\u5373`Author.firstName`\u548c`Author.lastName`\n        // highlight-next-line\n        firstName = "Samer"\n        // highlight-next-line\n        lastName = "Buna"\n    }\n}\nsqlClient.save(book)\n')))))),(0,l.kt)("h3",{id:"\u957f\u5173\u8054"},"\u957f\u5173\u8054"),(0,l.kt)("p",null,"\u6240\u8c13\u957f\u5173\u8054\uff0c\u8868\u793a\u9664\u4e86\u8981\u4fee\u6539\u5f53\u524d\u5bf9\u8c61\u548c\u5176\u4ed6\u5bf9\u8c61\u4e4b\u95f4\u7684\u5173\u8054\u672c\u8eab\u5916\uff0c\u8fd8\u8981\u8fdb\u4e00\u6b65\u4fee\u6539\u5173\u8054\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u901a\u5e38\uff0cUI\u8bbe\u8ba1\u4f1a\u91c7\u7528\u5185\u5d4c\u8868\u683c\uff0c\u4f8b\u5982"),(0,l.kt)(d._,{mdxType:"LongAssociation"}),(0,l.kt)("div",null,"\xa0"),(0,l.kt)("p",null,"\u7531\u4e8e\u7528\u6237\u4e0d\u4f46\u8981\u4fee\u6539\u5f53\u524d\u5bf9\u8c61\u548c\u5176\u4ed6\u5bf9\u8c61\u7684\u5173\u8054\uff0c\u8fd8\u8981\u8fdb\u4e00\u6b65\u4fee\u6539\u5173\u8054\u5bf9\u8c61\uff0c\u800c\u5173\u8054\u5bf9\u8c61\u53ef\u4ee5\u5305\u542b\u66f4\u6df1\u7684\u5173\u8054\uff0c\u6240\u4ee5\uff0c\u7406\u8bba\u4e0a\u8bb2\uff0cUI\u53ef\u51fa\u591a\u5c42\u5173\u8054\u5d4c\u5957\u3002\u8fd9\u5c31\u662f\u79f0\u5176\u4e3a ",(0,l.kt)("strong",{parentName:"p"},"\u957f\u5173\u8054")," \u7684\u539f\u56e0\u3002"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u867d\u7136\u8bbe\u8ba1\u4eba\u5458\u4e3a\u4e86\u4fdd\u8bc1UI\u7684\u7b80\u6d01\u6027\u4f1a\u523b\u610f\u907f\u514d\u5728\u5185\u5d4c\u8868\u683c\u4e2d\u5d4c\u5957\u66f4\u6df1\u7684\u5185\u5d4c\u8868\u683c\uff0c\u4f46\u662f\u5b9e\u9645\u9879\u76ee\u4e2d\u4ecd\u7136\u5b58\u5728\u9700\u8981\u5728UI\u4e0a\u7ef4\u62a4\u591a\u5c42\u5d4c\u5957\u5173\u8054\u7684\u573a\u666f\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u8868\u5355\u672c\u8eab\u662f\u4e00\u9897\u6811\u7ed3\u6784\uff0c\u7f16\u8f91\u597d\u4e86\u540e\uff0c\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u4fdd\u5b58\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53ef\u89c6\u5316UI\u8bbe\u8ba1\uff0c\u56e0\u4e3aUI\u7ec4\u4ef6\u672c\u8eab\u5c31\u662f\u6811\u5f62\u7ed3\u6784\uff0c\u7528\u6237\u8fdb\u884c\u4e00\u7cfb\u5217\u53ef\u89c6\u5316\u62d6\u62c9\u62fd\u7684\u8bbe\u8ba1\u540e\uff0c\u628aUI\u7ec4\u4ef6\u6811\u4f5c\u4e3a\u4e00\u4e2a\u6574\u4f53\u4fdd\u5b58\u3002")))),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4e3asave\u6307\u4ee4\u4f20\u9012\u4efb\u610f\u5f62\u72b6\u7684\u6570\u636e\u7ed3\u6784\u4f5c\u4e3a\u53c2\u6570\u65f6\uff0c\u6307\u5b9a\u957f\u5173\u8054\u6709\u4e24\u79cd\u65b9\u6cd5"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u5df2\u7ecf\u4e3a\u5173\u8054\u5bf9\u8c61\u6307\u5b9a\u4e86id\u5c5e\u6027\uff0c\u7ee7\u7eed\u4e3a\u5bf9\u8c61\u6307\u5b9a\u4efb\u4f55\u975eid\u5c5e\u6027 ",(0,l.kt)("em",{parentName:"p"},"\uff08\u5305\u62eckey\u5c5e\u6027\uff09"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u5df2\u7ecf\u4e3a\u5173\u8054\u5bf9\u8c61\u6307\u5b9a\u4e86\u6240\u6709key\u5c5e\u6027\uff0c\u7ee7\u7eed\u4e3a\u5bf9\u8c61\u6307\u5b9a\u4efb\u4f55\u65e2\u975eid\u4e5f\u975ekey\u7684\u5c5e\u6027")))),(0,l.kt)("p",null,"\u4f8b\u5b50\u5982\u4e0b"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Order order = Order.$.produce(draft -> {\n    draft.applyCustomer(customer -> customer.setId(1L));\n    draft.setProvince("\u56db\u5ddd");\n    draft.setCity("\u6210\u90fd");\n    draft.setAddress("\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3");\n    draft.addIntoItems(item -> {\n        item.applyProduct(product -> product.setId(1L));\n        // \u65e2\u975eid\u4e5f\u975ekey\u7684\u5c5e\u6027\n        // highlight-next-line\n        item.setQuantity(2);\n    });\n    draft.addIntoItems(item -> {\n        item.applyProduct(product -> product.setId(10L));\n        // \u65e2\u975eid\u4e5f\u975ekey\u7684\u5c5e\u6027\n        // highlight-next-line\n        item.setQuantity(1);\n    });\n});\nsqlClient.save(order);\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val order = new(Order::class).by {\n    customer().apply { id = 1L }\n    province = "\u56db\u5ddd"\n    city = "\u6210\u90fd"\n    address = "\u9f99\u6cc9\u9a7f\u533a\u6d2a\u7389\u8def\u4e0e\u5341\u6d2a\u8def\u4ea4\u53c9\u53e3"\n    items().addBy {\n        product().apply { id = 1L }\n        // \u65e2\u975eid\u4e5f\u975ekey\u7684\u5c5e\u6027\n        // highlight-next-line\n        quantity = 2\n    }\n    items().addBy {\n        product().apply { id = 10L }\n        // \u65e2\u975eid\u4e5f\u975ekey\u7684\u5c5e\u6027\n        // highlight-next-line\n        quantity = 1\n    }\n}\nsqlClient.save(order)\n')))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u5bf9\u88ab\u4fdd\u5b58\u6570\u636e\u7ed3\u6784\u8fdb\u884c\u786c\u7f16\u7801\u4ec5\u4e3a\u793a\u8303\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\u88ab\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u7531\u524d\u7aef\u754c\u9762\u63d0\u4ea4\u3002")),(0,l.kt)("h2",{id:"\u4e00\u5bf9\u591a\u5173\u8054\u7684\u7279\u6b8a\u6027"},"\u4e00\u5bf9\u591a\u5173\u8054\u7684\u7279\u6b8a\u6027"),(0,l.kt)("p",null,"\u4e4b\u524d\u63d0\u5230"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u5b9e\u4f53\u7c7b\u578b\u58f0\u660e\u4e86Key\u5c5e\u6027 ",(0,l.kt)("em",{parentName:"p"},"(\u4e5f\u610f\u5473\u7740id\u9664\u4e86\u5145\u5f53\u552f\u4e00\u6807\u8bc6\u7b26\u5916\u65e0\u4efb\u4f55\u4e1a\u52a1\u610f\u4e49)"),"\uff0c\u90a3\u4e48"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u88ab\u4fdd\u5b58\u7684\u805a\u5408\u6839\u5bf9\u8c61\u800c\u8a00\uff0c\u5efa\u8bae\u4e3a\u5176\u6307\u5b9aid\u5c5e\u6027\u6216key\u5c5e\u6027\u3002\u5426\u5219\u4f1a\u88ab\u7406\u89e3\u6210\u5f3a\u884c\u63d2\u5165\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u4e8e\u88ab\u4fdd\u5b58\u7684\u5173\u8054\u5bf9\u8c61\u800c\u8a00\uff0c\u8981\u4e48\u6307\u5b9aid\u5c5e\u6027\uff0c\u8981\u4e48\u6307\u5b9a\u6240\u6709key\u5c5e\u6027\u3002\u5426\u5219\u4f1a\u5f02\u5e38\u3002")))),(0,l.kt)("p",null,"\u4f46\u662f\uff0c\u6709\u4e00\u79cd\u60c5\u51b5\u4f8b\u5916\uff0c\u4e00\u5bf9\u591a\u5173\u7cfb\u3002"),(0,l.kt)("p",null,"\u8ba9\u6211\u6765\u770b\u4e00\u4e2a\u4f8b\u5b50"),(0,l.kt)("h3",{id:"\u5b9e\u4f53\u5b9a\u4e49"},"\u5b9e\u4f53\u5b9a\u4e49"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="TreeNode.java"',title:'"TreeNode.java"'},"@Entity\npublic interface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    long id();\n\n    // highlight-next-line\n    @Key\n    String name();\n\n    // highlight-next-line\n    @Key\n    @Nullable\n    @ManyToOne\n    TreeNode parent();\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n"))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:'title="TreeNode.kt"',title:'"TreeNode.kt"'},"@Entity\npublic interface TreeNode {\n\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    val id: Long\n\n    // highlight-next-line\n    @Key\n    val name: String\n\n    // highlight-next-line\n    @Key\n    @ManyToOne\n    val parent: TreeNode?\n\n    ...\u7701\u7565\u5176\u4ed6\u5c5e\u6027...\n}\n")))),(0,l.kt)("h3",{id:"\u4f7f\u7528\u4fdd\u5b58\u6307\u4ee4"},"\u4f7f\u7528\u4fdd\u5b58\u6307\u4ee4"),(0,l.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'TreeNode treeNode = TreeNodeDraft.$.produce(food -> {\n    food\n        // highlight-next-line\n        .setParent(null)\n        .setName("Food")\n        .addIntoChildNodes(drink -> {\n            drink\n                .setName("Drink")\n                .addIntoChildNodes(cococola -> {\n                    cococola.setName("Cococola");\n                })\n                .addIntoChildNodes(fanta -> {\n                    fanta.setName("Fanta");\n                });\n            ;\n        })\n        .addIntoAuthors(bread -> {\n            bread\n                .setName("Bread")\n                .addIntoChildNodes(daguette -> {\n                    daguette.setName("Baguette");\n                })\n                .addIntoChildNodes(ciabatta -> {\n                    ciabatta.setName("Ciabatta");\n                })\n        });\n    ;\n});\nsqlClient.save(treeNode);\n'))),(0,l.kt)(o.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val treeNode = new(TreeNode::class).by {\n    // highlight-next-line\n    parent = null\n    name = "Food"\n    childNodes().addBy {\n        name = "Drinks"\n        childNodes().addBy {\n            name = "Cococola"\n        }\n        childNodes().addBy {\n            name = "Fanta"\n        }\n    }\n    childNodes().addBy {\n        name = "Bread"\n        childNodes().addBy {\n            name = "Baguette"\n        }\n        childNodes().addBy {\n            name = "Ciabatta"\n        }\n    }\n}\nsqlClient.save(treeNode)\n')))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TreeNode"),"\u7c7b\u578b\u7684key\u5c5e\u6027\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"parent")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u6839\u8282\u70b9\u800c\u8a00\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9aid\u5c5e\u6027\uff0c\u5efa\u8bae\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),"\u5c5e\u6027\uff0c\u5426\u5219\u4f1a\u88ab\u7406\u89e3\u4e3a\u5f3a\u884c\u63d2\u5165\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5bf9\u5b50\u8282\u70b9\u800c\u8a00\uff0c\u5982\u679c\u6ca1\u6709\u6307\u5b9aid\u5c5e\u6027\uff0c\u5219\u5fc5\u987b\u6307\u5b9a",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),"\u5c5e\u6027\uff0c\u5426\u5219\u5f02\u5e38\u3002"))),(0,l.kt)("p",null,"\u7136\u800c\uff0c\u5728\u8fd9\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u9664\u4e86\u6839\u8282\u70b9\u5bf9\u8c61\u5916\uff0c\u5176\u4ed6\u6240\u6709\u5bf9\u8c61\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),"\u5c5e\u6027\u90fd\u672a\u88ab\u6307\u5b9a\u3002\u8fd9\u6bb5\u4ee3\u7801\u770b\u8d77\u6765\u4f3c\u4e4e\u65e0\u6cd5\u6b63\u5e38\u6267\u884c\u3002"),(0,l.kt)("p",null,"\u4e8b\u5b9e\u4e0a\uff0c\u8fd9\u6bb5\u4ee3\u7801\u53ef\u4ee5\u6b63\u786e\u8fd0\u884c\uff0c\u56e0\u4e3asave\u6307\u4ee4\u4e3a\u4e00\u5bf9\u591a\u5173\u8054\u505a\u4e86\u4e00\u4e2a\u7279\u6b8a\u7684\u89c4\u5b9a\uff1a"),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u679c\u88ab\u4fdd\u5b58\u7684\u6570\u636e\u7ed3\u6784\u4e2d\uff0c\u7236\u5bf9\u8c61\u901a\u8fc7\u4e00\u5bf9\u591a\u5173\u8054 ",(0,l.kt)("em",{parentName:"p"},"(\u672c\u4f8b\u4e2d\u4e3a",(0,l.kt)("inlineCode",{parentName:"em"},"TreeNode.childNodes"),")")," \u6301\u6709\u4e86\u67d0\u4e9b\u5b50\u5bf9\u8c61\uff0c\n\u90a3\u4e48\u8fd9\u4e9b\u5b50\u5bf9\u8c61\u7684\u9006\u5411\u591a\u5bf9\u4e00\u5173\u8054 ",(0,l.kt)("em",{parentName:"p"},"(\u672c\u4f8b\u4e2d\u4e3a",(0,l.kt)("inlineCode",{parentName:"em"},"TreeNode.parent"),")")," \u5c06\u4f1a\u88ab\u4fdd\u5b58\u6307\u4ee4\u89c6\u4e3a\u5df2\u88ab\u8bbe\u7f6e\u3002")),(0,l.kt)("p",null,"\u6240\u4ee5\uff0c\u4e0a\u4f8b\u4e2d\uff0c\u4fdd\u5b58\u6307\u4ee4\u4f1a\u8ba4\u4e3a\u6240\u6709\u5b50\u8282\u70b9\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),"\u5c5e\u6027\u90fd\u5df2\u7ecf\u88ab\u8bbe\u7f6e\u4e86\u3002\u5373\uff0c\u6240\u6709\u5b50\u5bf9\u8c61\u90fd\u540c\u65f6\u5177\u5907",(0,l.kt)("inlineCode",{parentName:"p"},"name"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"parent"),"\u5c5e\u6027\uff0c\u4fdd\u5b58\u6307\u4ee4\u53ef\u987a\u5229\u8fd0\u884c\u3002"),(0,l.kt)("h2",{id:"\u8131\u52fe\u64cd\u4f5c"},"\u8131\u52fe\u64cd\u4f5c"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u5173\u8054\u5bf9\u8c61\u800c\u8a00\uff0c\u63d2\u5165\u6216\u66f4\u65b0\u64cd\u4f5c\u548c\u4e4b\u524d\u4ecb\u7ecd\u8fc7\u7684\u4fdd\u5b58\u805a\u5408\u6839\u5bf9\u8c61\u64cd\u4f5c\u5e76\u65e0\u8f83\u5927\u5dee\u5f02\u3002\u7528\u6237\u53ea\u9700\u8981\u8bb0\u4f4f\u5173\u8054\u5bf9\u8c61\u4e0d\u53d7",(0,l.kt)("a",{parentName:"p",href:"./save-mode"},"\u4fdd\u5b58\u6a21\u5f0f"),"\u63a7\u5236 ",(0,l.kt)("em",{parentName:"p"},"(\u4e5f\u53ef\u8ba4\u4e3a\u5173\u8054\u5bf9\u8c61\u7684\u4fdd\u5b58\u6a21\u5f0f\u53ea\u6709",(0,l.kt)("inlineCode",{parentName:"em"},"UPSERT"),")")," \u5373\u53ef\u3002"),(0,l.kt)("p",null,"\u7136\u800c\uff0c\u5173\u8054\u5bf9\u8c61\u5177\u6709\u4e00\u4e2a\u975e\u5e38\u7279\u6b8a\u7684\u64cd\u4f5c\uff1a\u8131\u52fe\u3002"),(0,l.kt)("p",null,"\u8131\u52fe\u64cd\u4f5c\u65f6\u4e00\u4e2a\u975e\u5e38\u91cd\u8981\u7684\u6982\u5ff5\uff0c\u9650\u4e8e\u7bc7\u5e45\uff0c\u6211\u4eec\u4f1a\u5728",(0,l.kt)("a",{parentName:"p",href:"./dissociation"},"\u4e0b\u4e00\u7bc7\u6587\u6863"),"\u4e2d\u5bf9\u5176\u8be6\u7ec6\u4ecb\u7ecd\u3002"))}v.isMDXComponent=!0}}]);