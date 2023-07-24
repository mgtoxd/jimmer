"use strict";(self.webpackChunkdocusaurus_code=self.webpackChunkdocusaurus_code||[]).push([[2278,8766,2062,5578,7382],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return p}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(a),p=n,f=d["".concat(u,".").concat(p)]||d[p]||s[p]||o;return a?r.createElement(f,l(l({ref:t},m),{},{components:a})):r.createElement(f,l({ref:t},m))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},67720:function(e,t,a){var r=a(80102),n=a(83117),o=a(67294),l=a(93680),i=a(94780),u=a(41796),c=a(90948),m=a(71657),s=a(35097),d=a(85893);const p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],f=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.absolute&&t.absolute,t[a.variant],a.light&&t.light,"vertical"===a.orientation&&t.vertical,a.flexItem&&t.flexItem,a.children&&t.withChildren,a.children&&"vertical"===a.orientation&&t.withChildrenVertical,"right"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignRight,"left"===a.textAlign&&"vertical"!==a.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,u.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({ownerState:e})=>(0,n.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})),(({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&"vertical"!==t.orientation&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}})),(({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}})),(({ownerState:e})=>(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),v=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.wrapper,"vertical"===a.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}))),h=o.forwardRef((function(e,t){const a=(0,m.Z)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:u,className:c,component:h=(u?"div":"hr"),flexItem:k=!1,light:w=!1,orientation:C="horizontal",role:g=("hr"!==h?"separator":void 0),textAlign:b="center",variant:y="fullWidth"}=a,x=(0,r.Z)(a,p),E=(0,n.Z)({},a,{absolute:o,component:h,flexItem:k,light:w,orientation:C,role:g,textAlign:b,variant:y}),J=(e=>{const{absolute:t,children:a,classes:r,flexItem:n,light:o,orientation:l,textAlign:u,variant:c}=e,m={root:["root",t&&"absolute",c,o&&"light","vertical"===l&&"vertical",n&&"flexItem",a&&"withChildren",a&&"vertical"===l&&"withChildrenVertical","right"===u&&"vertical"!==l&&"textAlignRight","left"===u&&"vertical"!==l&&"textAlignLeft"],wrapper:["wrapper","vertical"===l&&"wrapperVertical"]};return(0,i.Z)(m,s.V,r)})(E);return(0,d.jsx)(f,(0,n.Z)({as:h,className:(0,l.Z)(J.root,c),role:g,ref:t,ownerState:E},x,{children:u?(0,d.jsx)(v,{className:J.wrapper,ownerState:E,children:u}):null}))}));t.Z=h},35097:function(e,t,a){a.d(t,{V:function(){return o}});var r=a(1588),n=a(34867);function o(e){return(0,n.Z)("MuiDivider",e)}const l=(0,r.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);t.Z=l},47167:function(e,t,a){const r=a(67294).createContext(void 0);t.Z=r},15704:function(e,t,a){function r({props:e,states:t,muiFormControl:a}){return t.reduce(((t,r)=>(t[r]=e[r],a&&void 0===e[r]&&(t[r]=a[r]),t)),{})}a.d(t,{Z:function(){return r}})},74423:function(e,t,a){a.d(t,{Z:function(){return o}});var r=a(67294),n=a(47167);function o(){return r.useContext(n.Z)}},15861:function(e,t,a){a.d(t,{Z:function(){return g}});var r=a(80102),n=a(83117),o=a(67294),l=a(93680),i=a(39707),u=a(94780),c=a(90948),m=a(71657),s=a(98216),d=a(1588),p=a(34867);function f(e){return(0,p.Z)("MuiTypography",e)}(0,d.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var v=a(85893);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],k=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.variant&&t[a.variant],"inherit"!==a.align&&t[`align${(0,s.Z)(a.align)}`],a.noWrap&&t.noWrap,a.gutterBottom&&t.gutterBottom,a.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),w={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},C={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var g=o.forwardRef((function(e,t){const a=(0,m.Z)({props:e,name:"MuiTypography"}),o=(e=>C[e]||e)(a.color),c=(0,i.Z)((0,n.Z)({},a,{color:o})),{align:d="inherit",className:p,component:g,gutterBottom:b=!1,noWrap:y=!1,paragraph:x=!1,variant:E="body1",variantMapping:J=w}=c,Z=(0,r.Z)(c,h),O=(0,n.Z)({},c,{align:d,color:o,className:p,component:g,gutterBottom:b,noWrap:y,paragraph:x,variant:E,variantMapping:J}),N=g||(x?"p":J[E]||w[E])||"span",D=(e=>{const{align:t,gutterBottom:a,noWrap:r,paragraph:n,variant:o,classes:l}=e,i={root:["root",o,"inherit"!==e.align&&`align${(0,s.Z)(t)}`,a&&"gutterBottom",r&&"noWrap",n&&"paragraph"]};return(0,u.Z)(i,f,l)})(O);return(0,v.jsx)(k,(0,n.Z)({as:N,ref:t,ownerState:O,className:(0,l.Z)(D.root,p)},Z))}))},72021:function(e,t,a){a.d(t,{Z:function(){return n}});var r=a(67294);var n=function({controlled:e,default:t,name:a,state:n="value"}){const{current:o}=r.useRef(void 0!==e),[l,i]=r.useState(t);return[o?e:l,r.useCallback((e=>{o||i(e)}),[])]}},39707:function(e,t,a){a.d(t,{Z:function(){return u}});var r=a(83117),n=a(80102),o=a(59766),l=a(44920);const i=["sx"];function u(e){const{sx:t}=e,a=(0,n.Z)(e,i),{systemProps:u,otherProps:c}=(e=>{var t,a;const r={systemProps:{},otherProps:{}},n=null!=(t=null==e||null==(a=e.theme)?void 0:a.unstable_sxConfig)?t:l.Z;return Object.keys(e).forEach((t=>{n[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r})(a);let m;return m=Array.isArray(t)?[u,...t]:"function"==typeof t?(...e)=>{const a=t(...e);return(0,o.P)(a)?(0,r.Z)({},u,a):u}:(0,r.Z)({},u,t),(0,r.Z)({},c,{sx:m})}},10209:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.Z=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},85162:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(67294),n=a(34334),o="tabItem_Ymn6";function l(e){var t=e.children,a=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:a},t)}},65488:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(83117),n=a(67294),o=a(34334),l=a(72389),i=a(67392),u=a(7094),c=a(12466),m="tabList__CuJ",s="tabItem_LNqP";function d(e){var t,a,l=e.lazy,d=e.block,p=e.defaultValue,f=e.values,v=e.groupId,h=e.className,k=n.Children.map(e.children,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),w=null!=f?f:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),C=(0,i.l)(w,(function(e,t){return e.value===t.value}));if(C.length>0)throw new Error('Docusaurus error: Duplicate values "'+C.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===p?p:null!=(t=null!=p?p:null==(a=k.find((function(e){return e.props.default})))?void 0:a.props.value)?t:k[0].props.value;if(null!==g&&!w.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+w.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,u.U)(),y=b.tabGroupChoices,x=b.setTabGroupChoices,E=(0,n.useState)(g),J=E[0],Z=E[1],O=[],N=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var D=y[v];null!=D&&D!==J&&w.some((function(e){return e.value===D}))&&Z(D)}var S=function(e){var t=e.currentTarget,a=O.indexOf(t),r=w[a].value;r!==J&&(N(t),Z(r),null!=v&&x(v,String(r)))},P=function(e){var t,a=null;switch(e.key){case"ArrowRight":var r,n=O.indexOf(e.currentTarget)+1;a=null!=(r=O[n])?r:O[0];break;case"ArrowLeft":var o,l=O.indexOf(e.currentTarget)-1;a=null!=(o=O[l])?o:O[O.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",m)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},h)},w.map((function(e){var t=e.value,a=e.label,l=e.attributes;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:J===t?0:-1,"aria-selected":J===t,key:t,ref:function(e){return O.push(e)},onKeyDown:P,onFocus:S,onClick:S},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":J===t})}),null!=a?a:t)}))),l?(0,n.cloneElement)(k.filter((function(e){return e.props.value===J}))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==J})}))))}function p(e){var t=(0,l.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},32360:function(e,t,a){a.d(t,{L:function(){return h}});var r=a(67294),n=a(63012),o=a(7906),l=a(295),i=a(53252),u=a(53184),c=a(53816),m=a(65488),s=a(85162),d=a(53457),p=a(50480),f=a(85071),v=a(67720),h=function(e){var t=e.type,a=e.locale,n=(0,r.useState)("OPS"!==t),o=n[0],l=n[1],i=(0,r.useCallback)((function(e,t){l(t)}),[]);return r.createElement(m.Z,{groupId:"chart-mode"},r.createElement(s.Z,{value:"chart",label:"zh"===a?"\u56fe\u8868":"Chart",default:!0},"OPS"===t&&r.createElement(r.Fragment,null,r.createElement(d.Z,null,r.createElement(p.Z,{control:r.createElement(f.Z,{value:o,onChange:i}),label:"zh"===a?"\u663e\u793a\u539f\u751fJDBC\u6307\u6807":"Show native JDBC metrics"})),r.createElement(v.Z,null)),"OPS"==t?r.createElement(k,{rows:y,scale:C,showJdbc:o}):r.createElement(k,{rows:x,scale:g,showJdbc:o})),r.createElement(s.Z,{value:"data",label:"zh"===a?"\u6570\u636e":"Data"},"OPS"===t?r.createElement(w,{rows:J,valueTitle:"Ops/s"}):r.createElement(w,{rows:Z,valueTitle:"Time(\u03bcs)"})))},k=function(e){var t=e.rows,a=e.scale,o=e.showJdbc;return r.createElement(n.Chart,{filter:o?void 0:{framework:function(e){return!e.startsWith("JDBC")}},height:400,padding:"auto",data:t,scale:a,autoFit:!0},r.createElement(n.Interval,{adjust:[{type:"dodge",marginRatio:0}],color:"framework",position:"dataCount*value"}),r.createElement(n.Axis,{name:"value",title:!0}),r.createElement(n.Legend,{position:"left"}),r.createElement(n.Tooltip,{shared:!0}),r.createElement(n.Interaction,{type:"active-region"}))},w=function(e){var t=e.rows,a=e.valueTitle;return r.createElement(o.Z,null,r.createElement(u.Z,null,r.createElement(c.Z,null,r.createElement(i.Z,null,"Framework"),r.createElement(i.Z,null,"Data count"),r.createElement(i.Z,null,a))),r.createElement(l.Z,null,t.map((function(e){return r.createElement(c.Z,{key:e.framework+"-"+e.dataCount},r.createElement(i.Z,null,e.framework),r.createElement(i.Z,null,e.dataCount),r.createElement(i.Z,null,e.value))}))))},C={dataCount:{alias:"Data count"},value:{alias:"Ops/s"}},g={dataCount:{alias:"Data count"},value:{alias:"Time(\u03bcs)"}},b=[{framework:"JDBC(ColIndex)",dataCount:"10",value:668548},{framework:"JDBC(ColIndex)",dataCount:"20",value:485607},{framework:"JDBC(ColIndex)",dataCount:"50",value:260938},{framework:"JDBC(ColIndex)",dataCount:"100",value:133789},{framework:"JDBC(ColIndex)",dataCount:"200",value:71362},{framework:"JDBC(ColIndex)",dataCount:"500",value:32131},{framework:"JDBC(ColIndex)",dataCount:"1000",value:16088},{framework:"JDBC(ColName)",dataCount:"10",value:340571},{framework:"JDBC(ColName)",dataCount:"20",value:239359},{framework:"JDBC(ColName)",dataCount:"50",value:128565},{framework:"JDBC(ColName)",dataCount:"100",value:70058},{framework:"JDBC(ColName)",dataCount:"200",value:38895},{framework:"JDBC(ColName)",dataCount:"500",value:16152},{framework:"JDBC(ColName)",dataCount:"1000",value:8172},{framework:"Jimmer(Java)",dataCount:"10",value:348417},{framework:"Jimmer(Java)",dataCount:"20",value:251418},{framework:"Jimmer(Java)",dataCount:"50",value:135241},{framework:"Jimmer(Java)",dataCount:"100",value:78190},{framework:"Jimmer(Java)",dataCount:"200",value:41688},{framework:"Jimmer(Java)",dataCount:"500",value:17355},{framework:"Jimmer(Java)",dataCount:"1000",value:8815},{framework:"Jimmer(Kotlin)",dataCount:"10",value:339465},{framework:"Jimmer(Kotlin)",dataCount:"20",value:245564},{framework:"Jimmer(Kotlin)",dataCount:"50",value:133790},{framework:"Jimmer(Kotlin)",dataCount:"100",value:74563},{framework:"Jimmer(Kotlin)",dataCount:"200",value:39329},{framework:"Jimmer(Kotlin)",dataCount:"500",value:16647},{framework:"Jimmer(Kotlin)",dataCount:"1000",value:8717},{framework:"EasyQuery",dataCount:"10",value:225383},{framework:"EasyQuery",dataCount:"20",value:144832},{framework:"EasyQuery",dataCount:"50",value:76663},{framework:"EasyQuery",dataCount:"100",value:39687},{framework:"EasyQuery",dataCount:"200",value:20858},{framework:"EasyQuery",dataCount:"500",value:8452},{framework:"EasyQuery",dataCount:"1000",value:4511},{framework:"MyBatis",dataCount:"10",value:75843},{framework:"MyBatis",dataCount:"20",value:43330},{framework:"MyBatis",dataCount:"50",value:19353},{framework:"MyBatis",dataCount:"100",value:10430},{framework:"MyBatis",dataCount:"200",value:5273},{framework:"MyBatis",dataCount:"500",value:2099},{framework:"MyBatis",dataCount:"1000",value:1070},{framework:"Exposed",dataCount:"10",value:92778},{framework:"Exposed",dataCount:"20",value:61642},{framework:"Exposed",dataCount:"50",value:30785},{framework:"Exposed",dataCount:"100",value:16518},{framework:"Exposed",dataCount:"200",value:9050},{framework:"Exposed",dataCount:"500",value:3831},{framework:"Exposed",dataCount:"1000",value:1950},{framework:"JPA(Hibernate)",dataCount:"10",value:102253},{framework:"JPA(Hibernate)",dataCount:"20",value:59467},{framework:"JPA(Hibernate)",dataCount:"50",value:26257},{framework:"JPA(Hibernate)",dataCount:"100",value:13539},{framework:"JPA(Hibernate)",dataCount:"200",value:6977},{framework:"JPA(Hibernate)",dataCount:"500",value:2791},{framework:"JPA(Hibernate)",dataCount:"1000",value:1396},{framework:"JPA(EclipseLink)",dataCount:"10",value:64726},{framework:"JPA(EclipseLink)",dataCount:"20",value:33448},{framework:"JPA(EclipseLink)",dataCount:"50",value:13420},{framework:"JPA(EclipseLink)",dataCount:"100",value:6473},{framework:"JPA(EclipseLink)",dataCount:"200",value:3378},{framework:"JPA(EclipseLink)",dataCount:"500",value:1362},{framework:"JPA(EclipseLink)",dataCount:"1000",value:667},{framework:"JOOQ",dataCount:"10",value:68624},{framework:"JOOQ",dataCount:"20",value:35257},{framework:"JOOQ",dataCount:"50",value:15514},{framework:"JOOQ",dataCount:"100",value:7871},{framework:"JOOQ",dataCount:"200",value:4856},{framework:"JOOQ",dataCount:"500",value:1895},{framework:"JOOQ",dataCount:"1000",value:879},{framework:"Nutz",dataCount:"10",value:70429},{framework:"Nutz",dataCount:"20",value:38999},{framework:"Nutz",dataCount:"50",value:17200},{framework:"Nutz",dataCount:"100",value:8268},{framework:"Nutz",dataCount:"200",value:4629},{framework:"Nutz",dataCount:"500",value:1859},{framework:"Nutz",dataCount:"1000",value:957},{framework:"ObjectiveSQL",dataCount:"10",value:47800},{framework:"ObjectiveSQL",dataCount:"20",value:30930},{framework:"ObjectiveSQL",dataCount:"50",value:13229},{framework:"ObjectiveSQL",dataCount:"100",value:6633},{framework:"ObjectiveSQL",dataCount:"200",value:3289},{framework:"ObjectiveSQL",dataCount:"500",value:1338},{framework:"ObjectiveSQL",dataCount:"1000",value:617},{framework:"Spring Data JDBC",dataCount:"10",value:20647},{framework:"Spring Data JDBC",dataCount:"20",value:10672},{framework:"Spring Data JDBC",dataCount:"50",value:4452},{framework:"Spring Data JDBC",dataCount:"100",value:2032},{framework:"Spring Data JDBC",dataCount:"200",value:1084},{framework:"Spring Data JDBC",dataCount:"500",value:460},{framework:"Spring Data JDBC",dataCount:"1000",value:233},{framework:"Ktorm",dataCount:"10",value:18816},{framework:"Ktorm",dataCount:"20",value:10157},{framework:"Ktorm",dataCount:"50",value:4185},{framework:"Ktorm",dataCount:"100",value:2137},{framework:"Ktorm",dataCount:"200",value:1036},{framework:"Ktorm",dataCount:"500",value:361},{framework:"Ktorm",dataCount:"1000",value:229}],y=b.map((function(e){return Object.assign({},e,{value:Math.round(e.value)})})),x=b.map((function(e){return Object.assign({},e,{value:Math.round(1e6/e.value)})}));function E(e,t){return parseInt(e.dataCount)-parseInt(t.dataCount)}var J=y.sort(E),Z=x.sort(E)},45198:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return u},metadata:function(){return m},toc:function(){return d}});var r=a(83117),n=a(80102),o=(a(67294),a(3905)),l=a(32360),i=["components"],u={sidebar_position:5,title:"Benchmark"},c=void 0,m={unversionedId:"benchmark",id:"benchmark",title:"Benchmark",description:"\u57fa\u51c6\u6d4b\u8bd5\u7684\u6e90\u4ee3\u7801\u5728\u6b64\uff0c\u4f7f\u7528H2\u7684\u5185\u5b58\u6570\u636e\u5e93\uff0c\u65e0\u9700\u4efb\u4f55\u73af\u5883\u51c6\u5907\u5373\u53ef\u76f4\u63a5\u8fd0\u884c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/benchmark.mdx",sourceDirName:".",slug:"/benchmark",permalink:"/jimmer/zh/docs/benchmark",draft:!1,editUrl:"https://github.com/babyfish-ct/jimmer/tree/main/doc/docs/benchmark.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"Benchmark"},sidebar:"tutorialSidebar",previous:{title:"\u529f\u80fd\u5217\u8868",permalink:"/jimmer/zh/docs/intro"},next:{title:"jimmer-core(Old)",permalink:"/jimmer/zh/docs/jimmer-core/"}},s={},d=[{value:"\u62a5\u544a",id:"\u62a5\u544a",level:2},{value:"\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570",id:"\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570",level:3},{value:"\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6",id:"\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6",level:3},{value:"\u5b9e\u73b0\u539f\u5219",id:"\u5b9e\u73b0\u539f\u5219",level:2},{value:"\u4ef7\u503c",id:"\u4ef7\u503c",level:2}],p={toc:d};function f(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u57fa\u51c6\u6d4b\u8bd5\u7684\u6e90\u4ee3\u7801",(0,o.kt)("a",{parentName:"p",href:"https://github.com/babyfish-ct/jimmer/tree/main/benchmark"},"\u5728\u6b64"),"\uff0c\u4f7f\u7528H2\u7684\u5185\u5b58\u6570\u636e\u5e93\uff0c\u65e0\u9700\u4efb\u4f55\u73af\u5883\u51c6\u5907\u5373\u53ef\u76f4\u63a5\u8fd0\u884c\u3002"),(0,o.kt)("h2",{id:"\u62a5\u544a"},"\u62a5\u544a"),(0,o.kt)("h3",{id:"\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570"},"\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6a2a\u5750\u6807\u8868\u793a\u6bcf\u6b21\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u5230\u7684\u6570\u636e\u5bf9\u8c61\u7684\u6570\u91cf\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7eb5\u5750\u6807\u8868\u793a\u6bcf\u79d2\u64cd\u4f5c\u6b21\u6570\u3002")),(0,o.kt)(l.L,{type:"OPS",locale:"zh",mdxType:"Benchmark"}),(0,o.kt)("h3",{id:"\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6"},"\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6a2a\u5750\u6807\u8868\u793a\u6bcf\u6b21\u4ece\u6570\u636e\u5e93\u4e2d\u67e5\u8be2\u5230\u7684\u6570\u636e\u5bf9\u8c61\u7684\u6570\u91cf\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u7eb5\u5750\u6807\u8868\u793a\u6bcf\u6b21\u64cd\u4f5c\u8017\u65f6(\u5fae\u79d2)\u3002")),(0,o.kt)(l.L,{type:"TIME",locale:"zh",mdxType:"Benchmark"}),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u7531\u4e8eSpring\u79fb\u9664\u4e86\u5bf9OpenJPA\u7684\u652f\u6301\uff0c\u672c\u57fa\u51c6\u6d4b\u8bd5\u4e0d\u5305\u542b",(0,o.kt)("inlineCode",{parentName:"p"},"JPA(OpenJPA)"))),(0,o.kt)("h2",{id:"\u5b9e\u73b0\u539f\u5219"},"\u5b9e\u73b0\u539f\u5219"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6240\u6709\u6846\u67b6\u7981\u7528\u7f13\u5b58")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6240\u6709\u6846\u67b6\u5173\u95ed\u65e5\u5fd7")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6240\u6709\u6846\u67b6\u6bcf\u6b21\u90fd\u6253\u5f00\u548c\u5173\u95ed\u8fde\u63a5/\u4f1a\u8bdd\uff0c\u4e0d\u505a\u5171\u4eab\uff1b\u9760\u8fde\u63a5\u6c60\u4fdd\u8bc1\u6027\u80fd\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u63a5\u5165Spring\u7684\u8fde\u63a5\u7ba1\u7406\u673a\u5236\u3002\u56e0\u4e0d\u540c\u6846\u67b6API\u4e0d\u540c\uff0c\u5b9e\u73b0\u65b9\u6cd5\u7565\u6709\u4e0d\u540c\u3002"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u6709\u7684\u4f7f\u7528",(0,o.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/DataSourceUtils.html"},"DataSourceUtils"),"\u7684getConnection\u548creleaseConnection"),(0,o.kt)("li",{parentName:"ul"},"\u6709\u7684\u4f7f\u7528",(0,o.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/jdbc/datasource/TransactionAwareDataSourceProxy.html"},"TransactionAwareDataSourceProxy"))),(0,o.kt)("p",{parentName:"li"},"\u4f46\u6700\u7ec8\u6548\u679c\u90fd\u4e00\u6837")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4e0d\u4f7f\u7528\u4e8b\u52a1"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"Exposed"),"\u6bd4\u8f83\u7279\u6b8a\uff0c\u5176API\u5f3a\u5236\u8981\u6c42\u4e8b\u52a1\uff0c\u7ed9\u4e88\u5047\u7684\u5b9e\u73b0\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5d4c\u5165\u7684H2\u5185\u6570\u636e\u5e93\uff0c\u5c3d\u53ef\u80fd\u538b\u7f29\u6570\u636e\u5e93\u7684\u6d88\u8017\uff0c\u51f8\u663eORM\u672c\u8eab\u7684\u6027\u80fd\uff0c\u5373\u6620\u5c04\u7684\u6027\u80fd\u3002"))),(0,o.kt)("h2",{id:"\u4ef7\u503c"},"\u4ef7\u503c"),(0,o.kt)("p",null,"\u4e00\u79cd\u5e38\u89c1\u7684\u89c2\u70b9\uff1aORM\u672c\u8eab\u7684\u6027\u80fd\u4e0d\u91cd\u8981\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u6570\u636e\u5e93\u5e76\u975e\u6709\u5185\u5d4c\u5185\u5b58\u6570\u636e\u5e93\uff0c\u6240\u4ee5ORM\u672c\u8eab\u8017\u65f6\u76f8\u5bf9\u4e8e\u6570\u636e\u5e93\u8017\u65f6\u53ef\u5ffd\u7565\u4e0d\u8ba1\u3002"),(0,o.kt)("p",null,"\u53cd\u9a73\uff1aJava19\u53d1\u5e03\u540e\uff0c\u652f\u6301\u865a\u62df\u7ebf\u7a0b\u3002ORM\u80fd\u5c3d\u5feb\u5b8c\u6210\u6620\u5c04\uff0c\u53ef\u4ee5\u8ba9JVM\u53bb\u8c03\u5ea6\u66f4\u591a\u7684\u865a\u62df\u7ebf\u7a0b\u3002"))}f.isMDXComponent=!0}}]);