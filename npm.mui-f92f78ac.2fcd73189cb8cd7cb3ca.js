"use strict";(self.webpackChunktodos=self.webpackChunktodos||[]).push([[118],{1641:(e,t,o)=>{o.d(t,{A:()=>g});var n=o(8587),r=o(8168),a=o(6540),i=o(4164),s=o(5659),l=o(6950),d=o(1848),c=o(5669),u=o(8850),p=o(8466),m=o(8413),f=o(1609);function h(e){return(0,f.Ay)("MuiIconButton",e)}const b=(0,m.A)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var A=o(4848);const y=["edge","children","className","color","disabled","disableFocusRipple","size"],v=(0,d.Ay)(u.A,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"default"!==o.color&&t[`color${(0,p.A)(o.color)}`],o.edge&&t[`edge${(0,p.A)(o.edge)}`],t[`size${(0,p.A)(o.size)}`]]}})((({theme:e,ownerState:t})=>(0,r.A)({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.X4)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===t.edge&&{marginLeft:"small"===t.size?-3:-12},"end"===t.edge&&{marginRight:"small"===t.size?-3:-12})),(({theme:e,ownerState:t})=>{var o;const n=null==(o=(e.vars||e).palette)?void 0:o[t.color];return(0,r.A)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,r.A)({color:null==n?void 0:n.main},!t.disableRipple&&{"&:hover":(0,r.A)({},n&&{backgroundColor:e.vars?`rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,l.X4)(n.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:e.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${b.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})})),g=a.forwardRef((function(e,t){const o=(0,c.b)({props:e,name:"MuiIconButton"}),{edge:a=!1,children:l,className:d,color:u="default",disabled:m=!1,disableFocusRipple:f=!1,size:b="medium"}=o,g=(0,n.A)(o,y),x=(0,r.A)({},o,{edge:a,color:u,disabled:m,disableFocusRipple:f,size:b}),S=(e=>{const{classes:t,disabled:o,color:n,edge:r,size:a}=e,i={root:["root",o&&"disabled","default"!==n&&`color${(0,p.A)(n)}`,r&&`edge${(0,p.A)(r)}`,`size${(0,p.A)(a)}`]};return(0,s.A)(i,h,t)})(x);return(0,A.jsx)(v,(0,r.A)({className:(0,i.A)(S.root,d),centerRipple:!0,focusRipple:!f,disabled:m,ref:t},g,{ownerState:x,children:l}))}))},1881:(e,t,o)=>{o.d(t,{A:()=>S});var n=o(8587),r=o(8168),a=o(6540),i=o(5659),s=o(1317),l=o(627),d=o(1848),c=o(9770),u=o(5669),p=o(8413),m=o(1609),f=o(1175);function h(e){return(0,m.Ay)("MuiInput",e)}const b=(0,r.A)({},f.A,(0,p.A)("MuiInput",["root","underline","input"]));var A=o(4848);const y=["disableUnderline","components","componentsProps","fullWidth","inputComponent","multiline","slotProps","slots","type"],v=(0,d.Ay)(l.Sh,{shouldForwardProp:e=>(0,c.A)(e)||"classes"===e,name:"MuiInput",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[...(0,l.WC)(e,t),!o.disableUnderline&&t.underline]}})((({theme:e,ownerState:t})=>{let o="light"===e.palette.mode?"rgba(0, 0, 0, 0.42)":"rgba(255, 255, 255, 0.7)";return e.vars&&(o=`rgba(${e.vars.palette.common.onBackgroundChannel} / ${e.vars.opacity.inputUnderline})`),(0,r.A)({position:"relative"},t.formControl&&{"label + &":{marginTop:16}},!t.disableUnderline&&{"&::after":{borderBottom:`2px solid ${(e.vars||e).palette[t.color].main}`,left:0,bottom:0,content:'""',position:"absolute",right:0,transform:"scaleX(0)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut}),pointerEvents:"none"},[`&.${b.focused}:after`]:{transform:"scaleX(1) translateX(0)"},[`&.${b.error}`]:{"&::before, &::after":{borderBottomColor:(e.vars||e).palette.error.main}},"&::before":{borderBottom:`1px solid ${o}`,left:0,bottom:0,content:'"\\00a0"',position:"absolute",right:0,transition:e.transitions.create("border-bottom-color",{duration:e.transitions.duration.shorter}),pointerEvents:"none"},[`&:hover:not(.${b.disabled}, .${b.error}):before`]:{borderBottom:`2px solid ${(e.vars||e).palette.text.primary}`,"@media (hover: none)":{borderBottom:`1px solid ${o}`}},[`&.${b.disabled}:before`]:{borderBottomStyle:"dotted"}})})),g=(0,d.Ay)(l.f3,{name:"MuiInput",slot:"Input",overridesResolver:l.Oj})({}),x=a.forwardRef((function(e,t){var o,a,d,c;const p=(0,u.b)({props:e,name:"MuiInput"}),{disableUnderline:m,components:f={},componentsProps:b,fullWidth:x=!1,inputComponent:S="input",multiline:w=!1,slotProps:C,slots:k={},type:R="text"}=p,P=(0,n.A)(p,y),M=(e=>{const{classes:t,disableUnderline:o}=e,n={root:["root",!o&&"underline"],input:["input"]},a=(0,i.A)(n,h,t);return(0,r.A)({},t,a)})(p),I={root:{ownerState:{disableUnderline:m}}},T=(null!=C?C:b)?(0,s.A)(null!=C?C:b,I):I,E=null!=(o=null!=(a=k.root)?a:f.Root)?o:v,L=null!=(d=null!=(c=k.input)?c:f.Input)?d:g;return(0,A.jsx)(l.Ay,(0,r.A)({slots:{root:E,input:L},slotProps:T,fullWidth:x,inputComponent:S,multiline:w,ref:t,type:R},P,{classes:M}))}));x.muiName="Input";const S=x},627:(e,t,o)=>{o.d(t,{Ay:()=>I,Oj:()=>k,Sh:()=>R,WC:()=>C,f3:()=>P});var n=o(8587),r=o(8168),a=o(9453),i=o(6540),s=o(4164),l=o(5659),d=o(2197),c=o(3561),u=o(8086),p=o(3800),m=o(9716),f=o(1848),h=o(5669),b=o(8466),A=o(6852),y=o(2778),v=o(5327),g=o(2891),x=o(1175),S=o(4848);const w=["aria-describedby","autoComplete","autoFocus","className","color","components","componentsProps","defaultValue","disabled","disableInjectingGlobalStyles","endAdornment","error","fullWidth","id","inputComponent","inputProps","inputRef","margin","maxRows","minRows","multiline","name","onBlur","onChange","onClick","onFocus","onKeyDown","onKeyUp","placeholder","readOnly","renderSuffix","rows","size","slotProps","slots","startAdornment","type","value"],C=(e,t)=>{const{ownerState:o}=e;return[t.root,o.formControl&&t.formControl,o.startAdornment&&t.adornedStart,o.endAdornment&&t.adornedEnd,o.error&&t.error,"small"===o.size&&t.sizeSmall,o.multiline&&t.multiline,o.color&&t[`color${(0,b.A)(o.color)}`],o.fullWidth&&t.fullWidth,o.hiddenLabel&&t.hiddenLabel]},k=(e,t)=>{const{ownerState:o}=e;return[t.input,"small"===o.size&&t.inputSizeSmall,o.multiline&&t.inputMultiline,"search"===o.type&&t.inputTypeSearch,o.startAdornment&&t.inputAdornedStart,o.endAdornment&&t.inputAdornedEnd,o.hiddenLabel&&t.inputHiddenLabel]},R=(0,f.Ay)("div",{name:"MuiInputBase",slot:"Root",overridesResolver:C})((({theme:e,ownerState:t})=>(0,r.A)({},e.typography.body1,{color:(e.vars||e).palette.text.primary,lineHeight:"1.4375em",boxSizing:"border-box",position:"relative",cursor:"text",display:"inline-flex",alignItems:"center",[`&.${x.A.disabled}`]:{color:(e.vars||e).palette.text.disabled,cursor:"default"}},t.multiline&&(0,r.A)({padding:"4px 0 5px"},"small"===t.size&&{paddingTop:1}),t.fullWidth&&{width:"100%"}))),P=(0,f.Ay)("input",{name:"MuiInputBase",slot:"Input",overridesResolver:k})((({theme:e,ownerState:t})=>{const o="light"===e.palette.mode,n=(0,r.A)({color:"currentColor"},e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5},{transition:e.transitions.create("opacity",{duration:e.transitions.duration.shorter})}),a={opacity:"0 !important"},i=e.vars?{opacity:e.vars.opacity.inputPlaceholder}:{opacity:o?.42:.5};return(0,r.A)({font:"inherit",letterSpacing:"inherit",color:"currentColor",padding:"4px 0 5px",border:0,boxSizing:"content-box",background:"none",height:"1.4375em",margin:0,WebkitTapHighlightColor:"transparent",display:"block",minWidth:0,width:"100%",animationName:"mui-auto-fill-cancel",animationDuration:"10ms","&::-webkit-input-placeholder":n,"&::-moz-placeholder":n,"&:-ms-input-placeholder":n,"&::-ms-input-placeholder":n,"&:focus":{outline:0},"&:invalid":{boxShadow:"none"},"&::-webkit-search-decoration":{WebkitAppearance:"none"},[`label[data-shrink=false] + .${x.A.formControl} &`]:{"&::-webkit-input-placeholder":a,"&::-moz-placeholder":a,"&:-ms-input-placeholder":a,"&::-ms-input-placeholder":a,"&:focus::-webkit-input-placeholder":i,"&:focus::-moz-placeholder":i,"&:focus:-ms-input-placeholder":i,"&:focus::-ms-input-placeholder":i},[`&.${x.A.disabled}`]:{opacity:1,WebkitTextFillColor:(e.vars||e).palette.text.disabled},"&:-webkit-autofill":{animationDuration:"5000s",animationName:"mui-auto-fill"}},"small"===t.size&&{paddingTop:1},t.multiline&&{height:"auto",resize:"none",padding:0,paddingTop:0},"search"===t.type&&{MozAppearance:"textfield"})})),M=(0,S.jsx)(v.A,{styles:{"@keyframes mui-auto-fill":{from:{display:"block"}},"@keyframes mui-auto-fill-cancel":{from:{display:"block"}}}}),I=i.forwardRef((function(e,t){var o;const f=(0,h.b)({props:e,name:"MuiInputBase"}),{"aria-describedby":v,autoComplete:C,autoFocus:k,className:I,components:T={},componentsProps:E={},defaultValue:L,disabled:N,disableInjectingGlobalStyles:z,endAdornment:F,fullWidth:$=!1,id:O,inputComponent:B="input",inputProps:j={},inputRef:D,maxRows:W,minRows:K,multiline:G=!1,name:H,onBlur:U,onChange:V,onClick:q,onFocus:X,onKeyDown:Y,onKeyUp:J,placeholder:Q,readOnly:Z,renderSuffix:_,rows:ee,slotProps:te={},slots:oe={},startAdornment:ne,type:re="text",value:ae}=f,ie=(0,n.A)(f,w),se=null!=j.value?j.value:ae,{current:le}=i.useRef(null!=se),de=i.useRef(),ce=i.useCallback((e=>{0}),[]),ue=(0,A.A)(de,D,j.ref,ce),[pe,me]=i.useState(!1),fe=(0,m.A)();const he=(0,u.A)({props:f,muiFormControl:fe,states:["color","disabled","error","hiddenLabel","size","required","filled"]});he.focused=fe?fe.focused:pe,i.useEffect((()=>{!fe&&N&&pe&&(me(!1),U&&U())}),[fe,N,pe,U]);const be=fe&&fe.onFilled,Ae=fe&&fe.onEmpty,ye=i.useCallback((e=>{(0,g.lq)(e)?be&&be():Ae&&Ae()}),[be,Ae]);(0,y.A)((()=>{le&&ye({value:se})}),[se,ye,le]);i.useEffect((()=>{ye(de.current)}),[]);let ve=B,ge=j;G&&"input"===ve&&(ge=ee?(0,r.A)({type:void 0,minRows:ee,maxRows:ee},ge):(0,r.A)({type:void 0,maxRows:W,minRows:K},ge),ve=c.A);i.useEffect((()=>{fe&&fe.setAdornedStart(Boolean(ne))}),[fe,ne]);const xe=(0,r.A)({},f,{color:he.color||"primary",disabled:he.disabled,endAdornment:F,error:he.error,focused:he.focused,formControl:fe,fullWidth:$,hiddenLabel:he.hiddenLabel,multiline:G,size:he.size,startAdornment:ne,type:re}),Se=(e=>{const{classes:t,color:o,disabled:n,error:r,endAdornment:a,focused:i,formControl:s,fullWidth:d,hiddenLabel:c,multiline:u,readOnly:p,size:m,startAdornment:f,type:h}=e,A={root:["root",`color${(0,b.A)(o)}`,n&&"disabled",r&&"error",d&&"fullWidth",i&&"focused",s&&"formControl",m&&"medium"!==m&&`size${(0,b.A)(m)}`,u&&"multiline",f&&"adornedStart",a&&"adornedEnd",c&&"hiddenLabel",p&&"readOnly"],input:["input",n&&"disabled","search"===h&&"inputTypeSearch",u&&"inputMultiline","small"===m&&"inputSizeSmall",c&&"inputHiddenLabel",f&&"inputAdornedStart",a&&"inputAdornedEnd",p&&"readOnly"]};return(0,l.A)(A,x.g,t)})(xe),we=oe.root||T.Root||R,Ce=te.root||E.root||{},ke=oe.input||T.Input||P;return ge=(0,r.A)({},ge,null!=(o=te.input)?o:E.input),(0,S.jsxs)(i.Fragment,{children:[!z&&M,(0,S.jsxs)(we,(0,r.A)({},Ce,!(0,d.A)(we)&&{ownerState:(0,r.A)({},xe,Ce.ownerState)},{ref:t,onClick:e=>{de.current&&e.currentTarget===e.target&&de.current.focus(),q&&q(e)}},ie,{className:(0,s.A)(Se.root,Ce.className,I,Z&&"MuiInputBase-readOnly"),children:[ne,(0,S.jsx)(p.A.Provider,{value:null,children:(0,S.jsx)(ke,(0,r.A)({ownerState:xe,"aria-invalid":he.error,"aria-describedby":v,autoComplete:C,autoFocus:k,defaultValue:L,disabled:he.disabled,id:O,onAnimationStart:e=>{ye("mui-auto-fill-cancel"===e.animationName?de.current:{value:"x"})},name:H,placeholder:Q,readOnly:Z,required:he.required,rows:ee,value:se,onKeyDown:Y,onKeyUp:J,type:re},ge,!(0,d.A)(ke)&&{as:ve,ownerState:(0,r.A)({},xe,ge.ownerState)},{ref:ue,className:(0,s.A)(Se.input,ge.className,Z&&"MuiInputBase-readOnly"),onBlur:e=>{U&&U(e),j.onBlur&&j.onBlur(e),fe&&fe.onBlur?fe.onBlur(e):me(!1)},onChange:(e,...t)=>{if(!le){const t=e.target||de.current;if(null==t)throw new Error((0,a.A)(1));ye({value:t.value})}j.onChange&&j.onChange(e,...t),V&&V(e,...t)},onFocus:e=>{he.disabled?e.stopPropagation():(X&&X(e),j.onFocus&&j.onFocus(e),fe&&fe.onFocus?fe.onFocus(e):me(!0))}}))}),F,_?_((0,r.A)({},he,{startAdornment:ne})):null]}))]})}))},1175:(e,t,o)=>{o.d(t,{A:()=>i,g:()=>a});var n=o(8413),r=o(1609);function a(e){return(0,r.Ay)("MuiInputBase",e)}const i=(0,n.A)("MuiInputBase",["root","formControl","focused","disabled","adornedStart","adornedEnd","error","sizeSmall","multiline","colorSecondary","fullWidth","hiddenLabel","readOnly","input","inputSizeSmall","inputMultiline","inputTypeSearch","inputAdornedStart","inputAdornedEnd","inputHiddenLabel"])},2891:(e,t,o)=>{function n(e){return null!=e&&!(Array.isArray(e)&&0===e.length)}function r(e,t=!1){return e&&(n(e.value)&&""!==e.value||t&&n(e.defaultValue)&&""!==e.defaultValue)}function a(e){return e.startAdornment}o.d(t,{gr:()=>a,lq:()=>r})},9571:(e,t,o)=>{o.d(t,{A:()=>S});var n=o(8587),r=o(8168),a=o(6540),i=o(5659),s=o(4164),l=o(8086),d=o(9716),c=o(9307),u=o(6511),p=o(5669),m=o(8466),f=o(1848),h=o(9770),b=o(8413),A=o(1609);function y(e){return(0,A.Ay)("MuiInputLabel",e)}(0,b.A)("MuiInputLabel",["root","focused","disabled","error","required","asterisk","formControl","sizeSmall","shrink","animated","standard","filled","outlined"]);var v=o(4848);const g=["disableAnimation","margin","shrink","variant","className"],x=(0,f.Ay)(c.A,{shouldForwardProp:e=>(0,h.A)(e)||"classes"===e,name:"MuiInputLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${u.A.asterisk}`]:t.asterisk},t.root,o.formControl&&t.formControl,"small"===o.size&&t.sizeSmall,o.shrink&&t.shrink,!o.disableAnimation&&t.animated,o.focused&&t.focused,t[o.variant]]}})((({theme:e,ownerState:t})=>(0,r.A)({display:"block",transformOrigin:"top left",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"100%"},t.formControl&&{position:"absolute",left:0,top:0,transform:"translate(0, 20px) scale(1)"},"small"===t.size&&{transform:"translate(0, 17px) scale(1)"},t.shrink&&{transform:"translate(0, -1.5px) scale(0.75)",transformOrigin:"top left",maxWidth:"133%"},!t.disableAnimation&&{transition:e.transitions.create(["color","transform","max-width"],{duration:e.transitions.duration.shorter,easing:e.transitions.easing.easeOut})},"filled"===t.variant&&(0,r.A)({zIndex:1,pointerEvents:"none",transform:"translate(12px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===t.size&&{transform:"translate(12px, 13px) scale(1)"},t.shrink&&(0,r.A)({userSelect:"none",pointerEvents:"auto",transform:"translate(12px, 7px) scale(0.75)",maxWidth:"calc(133% - 24px)"},"small"===t.size&&{transform:"translate(12px, 4px) scale(0.75)"})),"outlined"===t.variant&&(0,r.A)({zIndex:1,pointerEvents:"none",transform:"translate(14px, 16px) scale(1)",maxWidth:"calc(100% - 24px)"},"small"===t.size&&{transform:"translate(14px, 9px) scale(1)"},t.shrink&&{userSelect:"none",pointerEvents:"auto",maxWidth:"calc(133% - 32px)",transform:"translate(14px, -9px) scale(0.75)"})))),S=a.forwardRef((function(e,t){const o=(0,p.b)({name:"MuiInputLabel",props:e}),{disableAnimation:a=!1,shrink:c,className:u}=o,f=(0,n.A)(o,g),h=(0,d.A)();let b=c;void 0===b&&h&&(b=h.filled||h.focused||h.adornedStart);const A=(0,l.A)({props:o,muiFormControl:h,states:["size","variant","required","focused"]}),S=(0,r.A)({},o,{disableAnimation:a,formControl:h,shrink:b,size:A.size,variant:A.variant,required:A.required,focused:A.focused}),w=(e=>{const{classes:t,formControl:o,size:n,shrink:a,disableAnimation:s,variant:l,required:d}=e,c={root:["root",o&&"formControl",!s&&"animated",a&&"shrink",n&&"normal"!==n&&`size${(0,m.A)(n)}`,l],asterisk:[d&&"asterisk"]},u=(0,i.A)(c,y,t);return(0,r.A)({},t,u)})(S);return(0,v.jsx)(x,(0,r.A)({"data-shrink":b,ownerState:S,ref:t,className:(0,s.A)(w.root,u)},f,{classes:w}))}))},9799:(e,t,o)=>{o.d(t,{A:()=>A});var n=o(8587),r=o(8168),a=o(6540),i=o(4164),s=o(5659),l=o(1848),d=o(5669),c=o(2850),u=o(8413),p=o(1609);function m(e){return(0,p.Ay)("MuiList",e)}(0,u.A)("MuiList",["root","padding","dense","subheader"]);var f=o(4848);const h=["children","className","component","dense","disablePadding","subheader"],b=(0,l.Ay)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})((({ownerState:e})=>(0,r.A)({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0}))),A=a.forwardRef((function(e,t){const o=(0,d.b)({props:e,name:"MuiList"}),{children:l,className:u,component:p="ul",dense:A=!1,disablePadding:y=!1,subheader:v}=o,g=(0,n.A)(o,h),x=a.useMemo((()=>({dense:A})),[A]),S=(0,r.A)({},o,{component:p,dense:A,disablePadding:y}),w=(e=>{const{classes:t,disablePadding:o,dense:n,subheader:r}=e,a={root:["root",!o&&"padding",n&&"dense",r&&"subheader"]};return(0,s.A)(a,m,t)})(S);return(0,f.jsx)(c.A.Provider,{value:x,children:(0,f.jsxs)(b,(0,r.A)({as:p,className:(0,i.A)(w.root,u),ref:t,ownerState:S},g,{children:[v,l]}))})}))},2850:(e,t,o)=>{o.d(t,{A:()=>n});const n=o(6540).createContext({})},2794:(e,t,o)=>{o.d(t,{Ay:()=>L});var n=o(8587),r=o(8168),a=o(6540),i=o(4164),s=o(5659),l=o(6950),d=o(2197),c=o(1848),u=o(5669),p=o(8850),m=o(6767),f=o(2778),h=o(6852),b=o(2850),A=o(8413),y=o(1609);function v(e){return(0,y.Ay)("MuiListItem",e)}const g=(0,A.A)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);const x=(0,A.A)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function S(e){return(0,y.Ay)("MuiListItemSecondaryAction",e)}(0,A.A)("MuiListItemSecondaryAction",["root","disableGutters"]);var w=o(4848);const C=["className"],k=(0,c.Ay)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.disableGutters&&t.disableGutters]}})((({ownerState:e})=>(0,r.A)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0}))),R=a.forwardRef((function(e,t){const o=(0,u.b)({props:e,name:"MuiListItemSecondaryAction"}),{className:l}=o,d=(0,n.A)(o,C),c=a.useContext(b.A),p=(0,r.A)({},o,{disableGutters:c.disableGutters}),m=(e=>{const{disableGutters:t,classes:o}=e,n={root:["root",t&&"disableGutters"]};return(0,s.A)(n,S,o)})(p);return(0,w.jsx)(k,(0,r.A)({className:(0,i.A)(m.root,l),ownerState:p,ref:t},d))}));R.muiName="ListItemSecondaryAction";const P=R,M=["className"],I=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],T=(0,c.Ay)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,"flex-start"===o.alignItems&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters,!o.disablePadding&&t.padding,o.button&&t.button,o.hasSecondaryAction&&t.secondaryAction]}})((({theme:e,ownerState:t})=>(0,r.A)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,r.A)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${x.root}`]:{paddingRight:48}},{[`&.${g.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${g.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.X4)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${g.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,l.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${g.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${g.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,l.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,l.X4)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48}))),E=(0,c.Ay)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),L=a.forwardRef((function(e,t){const o=(0,u.b)({props:e,name:"MuiListItem"}),{alignItems:l="center",autoFocus:c=!1,button:A=!1,children:y,className:x,component:S,components:C={},componentsProps:k={},ContainerComponent:R="li",ContainerProps:{className:L}={},dense:N=!1,disabled:z=!1,disableGutters:F=!1,disablePadding:$=!1,divider:O=!1,focusVisibleClassName:B,secondaryAction:j,selected:D=!1,slotProps:W={},slots:K={}}=o,G=(0,n.A)(o.ContainerProps,M),H=(0,n.A)(o,I),U=a.useContext(b.A),V=a.useMemo((()=>({dense:N||U.dense||!1,alignItems:l,disableGutters:F})),[l,U.dense,N,F]),q=a.useRef(null);(0,f.A)((()=>{c&&q.current&&q.current.focus()}),[c]);const X=a.Children.toArray(y),Y=X.length&&(0,m.A)(X[X.length-1],["ListItemSecondaryAction"]),J=(0,r.A)({},o,{alignItems:l,autoFocus:c,button:A,dense:V.dense,disabled:z,disableGutters:F,disablePadding:$,divider:O,hasSecondaryAction:Y,selected:D}),Q=(e=>{const{alignItems:t,button:o,classes:n,dense:r,disabled:a,disableGutters:i,disablePadding:l,divider:d,hasSecondaryAction:c,selected:u}=e,p={root:["root",r&&"dense",!i&&"gutters",!l&&"padding",d&&"divider",a&&"disabled",o&&"button","flex-start"===t&&"alignItemsFlexStart",c&&"secondaryAction",u&&"selected"],container:["container"]};return(0,s.A)(p,v,n)})(J),Z=(0,h.A)(q,t),_=K.root||C.Root||T,ee=W.root||k.root||{},te=(0,r.A)({className:(0,i.A)(Q.root,ee.className,x),disabled:z},H);let oe=S||"li";return A&&(te.component=S||"div",te.focusVisibleClassName=(0,i.A)(g.focusVisible,B),oe=p.A),Y?(oe=te.component||S?oe:"div","li"===R&&("li"===oe?oe="div":"li"===te.component&&(te.component="div")),(0,w.jsx)(b.A.Provider,{value:V,children:(0,w.jsxs)(E,(0,r.A)({as:R,className:(0,i.A)(Q.container,L),ref:Z,ownerState:J},G,{children:[(0,w.jsx)(_,(0,r.A)({},ee,!(0,d.A)(_)&&{as:oe,ownerState:(0,r.A)({},J,ee.ownerState)},te,{children:X})),X.pop()]}))})):(0,w.jsx)(b.A.Provider,{value:V,children:(0,w.jsxs)(_,(0,r.A)({},ee,{as:oe,ref:Z},!(0,d.A)(_)&&{ownerState:(0,r.A)({},J,ee.ownerState)},te,{children:[X,j&&(0,w.jsx)(P,{children:j})]}))})}))},4545:(e,t,o)=>{o.d(t,{A:()=>v});var n=o(8587),r=o(8168),a=o(6540),i=o(4164),s=o(5659),l=o(4073),d=o(2850),c=o(5669),u=o(1848),p=o(8413),m=o(1609);function f(e){return(0,m.Ay)("MuiListItemText",e)}const h=(0,p.A)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var b=o(4848);const A=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],y=(0,u.Ay)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${h.primary}`]:t.primary},{[`& .${h.secondary}`]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})((({ownerState:e})=>(0,r.A)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56}))),v=a.forwardRef((function(e,t){const o=(0,c.b)({props:e,name:"MuiListItemText"}),{children:u,className:p,disableTypography:m=!1,inset:h=!1,primary:v,primaryTypographyProps:g,secondary:x,secondaryTypographyProps:S}=o,w=(0,n.A)(o,A),{dense:C}=a.useContext(d.A);let k=null!=v?v:u,R=x;const P=(0,r.A)({},o,{disableTypography:m,inset:h,primary:!!k,secondary:!!R,dense:C}),M=(e=>{const{classes:t,inset:o,primary:n,secondary:r,dense:a}=e,i={root:["root",o&&"inset",a&&"dense",n&&r&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,s.A)(i,f,t)})(P);return null==k||k.type===l.A||m||(k=(0,b.jsx)(l.A,(0,r.A)({variant:C?"body2":"body1",className:M.primary,component:null!=g&&g.variant?void 0:"span",display:"block"},g,{children:k}))),null==R||R.type===l.A||m||(R=(0,b.jsx)(l.A,(0,r.A)({variant:"body2",className:M.secondary,color:"text.secondary",display:"block"},S,{children:R}))),(0,b.jsxs)(y,(0,r.A)({className:(0,i.A)(M.root,p),ownerState:P,ref:t},w,{children:[k,R]}))}))},8708:(e,t,o)=>{o.d(t,{A:()=>$});var n=o(8168),r=o(8587),a=o(6540),i=(o(4363),o(4164)),s=o(5659),l=o(1303),d=o(1687),c=o(6248),u=o(9799),p=o(7167),m=o(6852),f=o(2778),h=o(4848);const b=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function A(e,t,o){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:o?null:e.firstChild}function y(e,t,o){return e===t?o?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:o?null:e.lastChild}function v(e,t){if(void 0===t)return!0;let o=e.innerText;return void 0===o&&(o=e.textContent),o=o.trim().toLowerCase(),0!==o.length&&(t.repeating?o[0]===t.keys[0]:0===o.indexOf(t.keys.join("")))}function g(e,t,o,n,r,a){let i=!1,s=r(e,t,!!t&&o);for(;s;){if(s===e.firstChild){if(i)return!1;i=!0}const t=!n&&(s.disabled||"true"===s.getAttribute("aria-disabled"));if(s.hasAttribute("tabindex")&&v(s,a)&&!t)return s.focus(),!0;s=r(e,s,o)}return!1}const x=a.forwardRef((function(e,t){const{actions:o,autoFocus:i=!1,autoFocusItem:s=!1,children:l,className:d,disabledItemsFocusable:x=!1,disableListWrap:S=!1,onKeyDown:w,variant:C="selectedMenu"}=e,k=(0,r.A)(e,b),R=a.useRef(null),P=a.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});(0,f.A)((()=>{i&&R.current.focus()}),[i]),a.useImperativeHandle(o,(()=>({adjustStyleForScrollbar:(e,{direction:t})=>{const o=!R.current.style.width;if(e.clientHeight<R.current.clientHeight&&o){const o=`${(0,p.A)((0,c.A)(e))}px`;R.current.style["rtl"===t?"paddingLeft":"paddingRight"]=o,R.current.style.width=`calc(100% + ${o})`}return R.current}})),[]);const M=(0,m.A)(R,t);let I=-1;a.Children.forEach(l,((e,t)=>{a.isValidElement(e)?(e.props.disabled||("selectedMenu"===C&&e.props.selected||-1===I)&&(I=t),I===t&&(e.props.disabled||e.props.muiSkipListHighlight||e.type.muiSkipListHighlight)&&(I+=1,I>=l.length&&(I=-1))):I===t&&(I+=1,I>=l.length&&(I=-1))}));const T=a.Children.map(l,((e,t)=>{if(t===I){const t={};return s&&(t.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===C&&(t.tabIndex=0),a.cloneElement(e,t)}return e}));return(0,h.jsx)(u.A,(0,n.A)({role:"menu",ref:M,className:d,onKeyDown:e=>{const t=R.current,o=e.key,n=(0,c.A)(t).activeElement;if("ArrowDown"===o)e.preventDefault(),g(t,n,S,x,A);else if("ArrowUp"===o)e.preventDefault(),g(t,n,S,x,y);else if("Home"===o)e.preventDefault(),g(t,null,S,x,A);else if("End"===o)e.preventDefault(),g(t,null,S,x,y);else if(1===o.length){const r=P.current,a=o.toLowerCase(),i=performance.now();r.keys.length>0&&(i-r.lastTime>500?(r.keys=[],r.repeating=!0,r.previousKeyMatched=!0):r.repeating&&a!==r.keys[0]&&(r.repeating=!1)),r.lastTime=i,r.keys.push(a);const s=n&&!r.repeating&&v(n,r);r.previousKeyMatched&&(s||g(t,n,!1,x,A,r))?e.preventDefault():r.previousKeyMatched=!1}w&&w(e)},tabIndex:i?0:-1},k,{children:T}))}));var S=o(1749),w=o(1848),C=o(9770),k=o(5669),R=o(8413),P=o(1609);function M(e){return(0,P.Ay)("MuiMenu",e)}(0,R.A)("MuiMenu",["root","paper","list"]);const I=["onEntering"],T=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],E={vertical:"top",horizontal:"right"},L={vertical:"top",horizontal:"left"},N=(0,w.Ay)(S.Ay,{shouldForwardProp:e=>(0,C.A)(e)||"classes"===e,name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),z=(0,w.Ay)(S.IJ,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),F=(0,w.Ay)(x,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),$=a.forwardRef((function(e,t){var o,c;const u=(0,k.b)({props:e,name:"MuiMenu"}),{autoFocus:p=!0,children:m,className:f,disableAutoFocusItem:b=!1,MenuListProps:A={},onClose:y,open:v,PaperProps:g={},PopoverClasses:x,transitionDuration:S="auto",TransitionProps:{onEntering:w}={},variant:C="selectedMenu",slots:R={},slotProps:P={}}=u,$=(0,r.A)(u.TransitionProps,I),O=(0,r.A)(u,T),B=(0,l.I)(),j=(0,n.A)({},u,{autoFocus:p,disableAutoFocusItem:b,MenuListProps:A,onEntering:w,PaperProps:g,transitionDuration:S,TransitionProps:$,variant:C}),D=(e=>{const{classes:t}=e;return(0,s.A)({root:["root"],paper:["paper"],list:["list"]},M,t)})(j),W=p&&!b&&v,K=a.useRef(null);let G=-1;a.Children.map(m,((e,t)=>{a.isValidElement(e)&&(e.props.disabled||("selectedMenu"===C&&e.props.selected||-1===G)&&(G=t))}));const H=null!=(o=R.paper)?o:z,U=null!=(c=P.paper)?c:g,V=(0,d.A)({elementType:R.root,externalSlotProps:P.root,ownerState:j,className:[D.root,f]}),q=(0,d.A)({elementType:H,externalSlotProps:U,ownerState:j,className:D.paper});return(0,h.jsx)(N,(0,n.A)({onClose:y,anchorOrigin:{vertical:"bottom",horizontal:B?"right":"left"},transformOrigin:B?E:L,slots:{paper:H,root:R.root},slotProps:{root:V,paper:q},open:v,ref:t,transitionDuration:S,TransitionProps:(0,n.A)({onEntering:(e,t)=>{K.current&&K.current.adjustStyleForScrollbar(e,{direction:B?"rtl":"ltr"}),w&&w(e,t)}},$),ownerState:j},O,{classes:x,children:(0,h.jsx)(F,(0,n.A)({onKeyDown:e=>{"Tab"===e.key&&(e.preventDefault(),y&&y(e,"tabKeyDown"))},actions:K,autoFocus:p&&(-1===G||b),autoFocusItem:W,variant:C},A,{className:(0,i.A)(D.list,A.className),children:m}))}))}))},5406:(e,t,o)=>{o.d(t,{A:()=>F});var n=o(8587),r=o(8168),a=o(6540),i=o(4164),s=o(5659),l=o(1687),d=o(3524),c=o(5061),u=o(1848),p=o(5669),m=o(7419),f=o(1523),h=o(2325),b=o(1547),A=o(6673),y=o(4959),v=o(4877),g=o(3205);function x(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function S(e){return parseInt((0,v.A)(e).getComputedStyle(e).paddingRight,10)||0}function w(e,t,o,n,r){const a=[t,o,...n];[].forEach.call(e.children,(e=>{const t=-1===a.indexOf(e),o=!function(e){const t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),o="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||o}(e);t&&o&&x(e,r)}))}function C(e,t){let o=-1;return e.some(((e,n)=>!!t(e)&&(o=n,!0))),o}function k(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(function(e){const t=(0,h.A)(e);return t.body===e?(0,v.A)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(n)){const e=(0,g.A)((0,h.A)(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${S(n)+e}px`;const t=(0,h.A)(n).querySelectorAll(".mui-fixed");[].forEach.call(t,(t=>{o.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${S(t)+e}px`}))}let e;if(n.parentNode instanceof DocumentFragment)e=(0,h.A)(n).body;else{const t=n.parentElement,o=(0,v.A)(n);e="HTML"===(null==t?void 0:t.nodeName)&&"scroll"===o.getComputedStyle(t).overflowY?t:n}o.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{o.forEach((({value:e,el:t,property:o})=>{e?t.style.setProperty(o,e):t.style.removeProperty(o)}))}}const R=new class{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let o=this.modals.indexOf(e);if(-1!==o)return o;o=this.modals.length,this.modals.push(e),e.modalRef&&x(e.modalRef,!1);const n=function(e){const t=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);w(t,e.mount,e.modalRef,n,!0);const r=C(this.containers,(e=>e.container===t));return-1!==r?(this.containers[r].modals.push(e),o):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:n}),o)}mount(e,t){const o=C(this.containers,(t=>-1!==t.modals.indexOf(e))),n=this.containers[o];n.restore||(n.restore=k(n,t))}remove(e,t=!0){const o=this.modals.indexOf(e);if(-1===o)return o;const n=C(this.containers,(t=>-1!==t.modals.indexOf(e))),r=this.containers[n];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(o,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&x(e.modalRef,t),w(r.container,e.mount,e.modalRef,r.hiddenSiblings,!1),this.containers.splice(n,1);else{const e=r.modals[r.modals.length-1];e.modalRef&&x(e.modalRef,!1)}return o}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}};const P=function(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,manager:i=R,closeAfterTransition:s=!1,onTransitionEnter:l,onTransitionExited:d,children:c,onClose:u,open:p,rootRef:m}=e,v=a.useRef({}),g=a.useRef(null),S=a.useRef(null),w=(0,f.A)(S,m),[C,k]=a.useState(!p),P=function(e){return!!e&&e.props.hasOwnProperty("in")}(c);let M=!0;"false"!==e["aria-hidden"]&&!1!==e["aria-hidden"]||(M=!1);const I=()=>(v.current.modalRef=S.current,v.current.mount=g.current,v.current),T=()=>{i.mount(I(),{disableScrollLock:n}),S.current&&(S.current.scrollTop=0)},E=(0,b.A)((()=>{const e=function(e){return"function"==typeof e?e():e}(t)||(0,h.A)(g.current).body;i.add(I(),e),S.current&&T()})),L=a.useCallback((()=>i.isTopModal(I())),[i]),N=(0,b.A)((e=>{g.current=e,e&&(p&&L()?T():S.current&&x(S.current,M))})),z=a.useCallback((()=>{i.remove(I(),M)}),[M,i]);a.useEffect((()=>()=>{z()}),[z]),a.useEffect((()=>{p?E():P&&s||z()}),[p,z,P,s,E]);const F=e=>t=>{var n;null==(n=e.onKeyDown)||n.call(e,t),"Escape"===t.key&&229!==t.which&&L()&&(o||(t.stopPropagation(),u&&u(t,"escapeKeyDown")))},$=e=>t=>{var o;null==(o=e.onClick)||o.call(e,t),t.target===t.currentTarget&&u&&u(t,"backdropClick")};return{getRootProps:(t={})=>{const o=(0,y.A)(e);delete o.onTransitionEnter,delete o.onTransitionExited;const n=(0,r.A)({},o,t);return(0,r.A)({role:"presentation"},n,{onKeyDown:F(n),ref:w})},getBackdropProps:(e={})=>{const t=e;return(0,r.A)({"aria-hidden":!0},t,{onClick:$(t),open:p})},getTransitionProps:()=>({onEnter:(0,A.A)((()=>{k(!1),l&&l()}),null==c?void 0:c.props.onEnter),onExited:(0,A.A)((()=>{k(!0),d&&d(),s&&z()}),null==c?void 0:c.props.onExited)}),rootRef:w,portalRef:N,isTopModal:L,exited:C,hasTransition:P}};var M=o(8413),I=o(1609);function T(e){return(0,I.Ay)("MuiModal",e)}(0,M.A)("MuiModal",["root","hidden","backdrop"]);var E=o(4848);const L=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],N=(0,u.Ay)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})((({theme:e,ownerState:t})=>(0,r.A)({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"}))),z=(0,u.Ay)(m.A,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),F=a.forwardRef((function(e,t){var o,u,m,f,h,b;const A=(0,p.b)({name:"MuiModal",props:e}),{BackdropComponent:y=z,BackdropProps:v,className:g,closeAfterTransition:x=!1,children:S,container:w,component:C,components:k={},componentsProps:R={},disableAutoFocus:M=!1,disableEnforceFocus:I=!1,disableEscapeKeyDown:F=!1,disablePortal:$=!1,disableRestoreFocus:O=!1,disableScrollLock:B=!1,hideBackdrop:j=!1,keepMounted:D=!1,onBackdropClick:W,open:K,slotProps:G,slots:H}=A,U=(0,n.A)(A,L),V=(0,r.A)({},A,{closeAfterTransition:x,disableAutoFocus:M,disableEnforceFocus:I,disableEscapeKeyDown:F,disablePortal:$,disableRestoreFocus:O,disableScrollLock:B,hideBackdrop:j,keepMounted:D}),{getRootProps:q,getBackdropProps:X,getTransitionProps:Y,portalRef:J,isTopModal:Q,exited:Z,hasTransition:_}=P((0,r.A)({},V,{rootRef:t})),ee=(0,r.A)({},V,{exited:Z}),te=(e=>{const{open:t,exited:o,classes:n}=e,r={root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]};return(0,s.A)(r,T,n)})(ee),oe={};if(void 0===S.props.tabIndex&&(oe.tabIndex="-1"),_){const{onEnter:e,onExited:t}=Y();oe.onEnter=e,oe.onExited=t}const ne=null!=(o=null!=(u=null==H?void 0:H.root)?u:k.Root)?o:N,re=null!=(m=null!=(f=null==H?void 0:H.backdrop)?f:k.Backdrop)?m:y,ae=null!=(h=null==G?void 0:G.root)?h:R.root,ie=null!=(b=null==G?void 0:G.backdrop)?b:R.backdrop,se=(0,l.A)({elementType:ne,externalSlotProps:ae,externalForwardedProps:U,getSlotProps:q,additionalProps:{ref:t,as:C},ownerState:ee,className:(0,i.A)(g,null==ae?void 0:ae.className,null==te?void 0:te.root,!ee.open&&ee.exited&&(null==te?void 0:te.hidden))}),le=(0,l.A)({elementType:re,externalSlotProps:ie,additionalProps:v,getSlotProps:e=>X((0,r.A)({},e,{onClick:t=>{W&&W(t),null!=e&&e.onClick&&e.onClick(t)}})),className:(0,i.A)(null==ie?void 0:ie.className,null==v?void 0:v.className,null==te?void 0:te.backdrop),ownerState:ee});return D||K||_&&!Z?(0,E.jsx)(c.A,{ref:J,container:w,disablePortal:$,children:(0,E.jsxs)(ne,(0,r.A)({},se,{children:[!j&&y?(0,E.jsx)(re,(0,r.A)({},le)):null,(0,E.jsx)(d.A,{disableEnforceFocus:I,disableAutoFocus:M,disableRestoreFocus:O,isEnabled:Q,open:K,children:a.cloneElement(S,oe)})]}))}):null}))}}]);