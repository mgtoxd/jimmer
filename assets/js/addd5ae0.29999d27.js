"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[5975],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=c(r),d=a,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85162:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(67294),a=r(34334),o="tabItem_Ymn6";function i(e){var t=e.children,r=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:r},t)}},65488:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(83117),a=r(67294),o=r(34334),i=r(72389),u=r(67392),l=r(7094),c=r(12466),s="tabList__CuJ",p="tabItem_LNqP";function f(e){var t,r,i=e.lazy,f=e.block,d=e.defaultValue,m=e.values,v=e.groupId,b=e.className,y=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=m?m:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),O=(0,u.l)(h,(function(e,t){return e.value===t.value}));if(O.length>0)throw new Error('Docusaurus error: Duplicate values "'+O.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(t=null!=d?d:null==(r=y.find((function(e){return e.props.default})))?void 0:r.props.value)?t:y[0].props.value;if(null!==g&&!h.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),E=w.tabGroupChoices,T=w.setTabGroupChoices,j=(0,a.useState)(g),k=j[0],x=j[1],D=[],P=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var C=E[v];null!=C&&C!==k&&h.some((function(e){return e.value===C}))&&x(C)}var N=function(e){var t=e.currentTarget,r=D.indexOf(t),n=h[r].value;n!==k&&(P(t),x(n),null!=v&&T(v,String(n)))},q=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=D.indexOf(e.currentTarget)+1;r=null!=(n=D[a])?n:D[0];break;case"ArrowLeft":var o,i=D.indexOf(e.currentTarget)-1;r=null!=(o=D[i])?o:D[D.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":f},b)},h.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:function(e){return D.push(e)},onKeyDown:q,onFocus:N,onClick:N},i,{className:(0,o.Z)("tabs__item",p,null==i?void 0:i.className,{"tabs__item--active":k===t})}),null!=r?r:t)}))),i?(0,a.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}function d(e){var t=(0,i.Z)();return a.createElement(f,(0,n.Z)({key:String(t)},e))}},43603:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=(r(65488),r(85162),["components"]),u={sidebar_position:2,title:"Initial Contact"},l=void 0,c={unversionedId:"tutorial/query/initial-contact",id:"tutorial/query/initial-contact",title:"Initial Contact",description:"TODO",source:"@site/docs/tutorial/query/initial-contact.mdx",sourceDirName:"tutorial/query",slug:"/tutorial/query/initial-contact",permalink:"/jimmer/docs/tutorial/query/initial-contact",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/tutorial/query/initial-contact.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Initial Contact"},sidebar:"tutorialSidebar",previous:{title:"Declare repositories",permalink:"/jimmer/docs/tutorial/query/repository"},next:{title:"Simple Query",permalink:"/jimmer/docs/tutorial/query/simple-query"}},s={},p=[{value:"TODO",id:"todo",level:2}],f={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"todo"},"TODO"))}d.isMDXComponent=!0}}]);