"use strict";(self.webpackChunktodoshka=self.webpackChunktodoshka||[]).push([[935],{38:(e,t,r)=>{r.d(t,{U1:()=>w,Z0:()=>k});var n=r(4644),o=r(7346),c=r(1932),i="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?n.Zz:n.Zz.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function a(e,t){function r(...r){if(t){let n=t(...r);if(!n)throw new Error(O(0));return{type:e,payload:n.payload,..."meta"in n&&{meta:n.meta},..."error"in n&&{error:n.error}}}return{type:e,payload:r[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=t=>(0,n.ve)(t)&&t.type===e,r}var u=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function s(e){return(0,c.a6)(e)?(0,c.jM)(e,(()=>{})):e}function d(e,t,r){if(e.has(t)){let n=e.get(t);return r.update&&(n=r.update(n,t,e),e.set(t,n)),n}if(!r.insert)throw new Error(O(10));const n=r.insert(t,e);return e.set(t,n),n}var f=()=>function(e){const{thunk:t=!0,immutableCheck:r=!0,serializableCheck:n=!0,actionCreatorCheck:c=!0}=e??{};let i=new u;return t&&("boolean"==typeof t?i.push(o.P):i.push((0,o.Y)(t.extraArgument))),i},l="RTK_autoBatch",p=e=>t=>{setTimeout(t,e)},y="undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:p(10),h=e=>function(t){const{autoBatch:r=!0}=t??{};let n=new u(e);return r&&n.push(((e={type:"raf"})=>t=>(...r)=>{const n=t(...r);let o=!0,c=!1,i=!1;const a=new Set,u="tick"===e.type?queueMicrotask:"raf"===e.type?y:"callback"===e.type?e.queueNotification:p(e.timeout),s=()=>{i=!1,c&&(c=!1,a.forEach((e=>e())))};return Object.assign({},n,{subscribe(e){const t=n.subscribe((()=>o&&e()));return a.add(e),()=>{t(),a.delete(e)}},dispatch(e){try{return o=!e?.meta?.[l],c=!o,c&&(i||(i=!0,u(s))),n.dispatch(e)}finally{o=!0}}})})("object"==typeof r?r:void 0)),n};function w(e){const t=f(),{reducer:r,middleware:o,devTools:c=!0,preloadedState:a,enhancers:u}=e||{};let s,d;if("function"==typeof r)s=r;else{if(!(0,n.Qd)(r))throw new Error(O(1));s=(0,n.HY)(r)}d="function"==typeof o?o(t):t();let l=n.Zz;c&&(l=i({trace:!1,..."object"==typeof c&&c}));const p=(0,n.Tw)(...d),y=h(p);const w=l(..."function"==typeof u?u(y):y());return(0,n.y$)(s,a,w)}function m(e){const t={},r=[];let n;const o={addCase(e,r){const n="string"==typeof e?e:e.type;if(!n)throw new Error(O(28));if(n in t)throw new Error(O(29));return t[n]=r,o},addMatcher:(e,t)=>(r.push({matcher:e,reducer:t}),o),addDefaultCase:e=>(n=e,o)};return e(o),[t,r,n]}var C=Symbol.for("rtk-slice-createasyncthunk");function E(e,t){return`${e}/${t}`}function _({creators:e}={}){const t=e?.asyncThunk?.[C];return function(e){const{name:r,reducerPath:n=r}=e;if(!r)throw new Error(O(11));const o=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},i=Object.keys(o),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},f={addCase(e,t){const r="string"==typeof e?e:e.type;if(!r)throw new Error(O(12));if(r in u.sliceCaseReducersByType)throw new Error(O(13));return u.sliceCaseReducersByType[r]=t,f},addMatcher:(e,t)=>(u.sliceMatchers.push({matcher:e,reducer:t}),f),exposeAction:(e,t)=>(u.actionCreators[e]=t,f),exposeCaseReducer:(e,t)=>(u.sliceCaseReducersByName[e]=t,f)};function l(){const[t={},r=[],n]="function"==typeof e.extraReducers?m(e.extraReducers):[e.extraReducers],o={...t,...u.sliceCaseReducersByType};return function(e,t){let r,[n,o,i]=m(t);if("function"==typeof e)r=()=>s(e());else{const t=s(e);r=()=>t}function a(e=r(),t){let a=[n[t.type],...o.filter((({matcher:e})=>e(t))).map((({reducer:e})=>e))];return 0===a.filter((e=>!!e)).length&&(a=[i]),a.reduce(((e,r)=>{if(r){if((0,c.Qx)(e)){const n=r(e,t);return void 0===n?e:n}if((0,c.a6)(e))return(0,c.jM)(e,(e=>r(e,t)));{const n=r(e,t);if(void 0===n){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}}return e}),e)}return a.getInitialState=r,a}(e.initialState,(e=>{for(let t in o)e.addCase(t,o[t]);for(let t of u.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of r)e.addMatcher(t.matcher,t.reducer);n&&e.addDefaultCase(n)}))}i.forEach((n=>{const c=o[n],i={reducerName:n,type:E(r,n),createNotation:"function"==typeof e.reducers};!function(e){return"asyncThunk"===e._reducerDefinitionType}(c)?function({type:e,reducerName:t,createNotation:r},n,o){let c,i;if("reducer"in n){if(r&&!function(e){return"reducerWithPrepare"===e._reducerDefinitionType}(n))throw new Error(O(17));c=n.reducer,i=n.prepare}else c=n;o.addCase(e,c).exposeCaseReducer(t,c).exposeAction(t,i?a(e,i):a(e))}(i,c,f):function({type:e,reducerName:t},r,n,o){if(!o)throw new Error(O(18));const{payloadCreator:c,fulfilled:i,pending:a,rejected:u,settled:s,options:d}=r,f=o(e,c,d);n.exposeAction(t,f),i&&n.addCase(f.fulfilled,i);a&&n.addCase(f.pending,a);u&&n.addCase(f.rejected,u);s&&n.addMatcher(f.settled,s);n.exposeCaseReducer(t,{fulfilled:i||b,pending:a||b,rejected:u||b,settled:s||b})}(i,c,f,t)}));const p=e=>e,y=new Map;let h;function w(e,t){return h||(h=l()),h(e,t)}function C(){return h||(h=l()),h.getInitialState()}function _(t,r=!1){function n(e){let n=e[t];return void 0===n&&r&&(n=C()),n}function o(t=p){const n=d(y,r,{insert:()=>new WeakMap});return d(n,t,{insert:()=>{const n={};for(const[o,c]of Object.entries(e.selectors??{}))n[o]=T(c,t,C,r);return n}})}return{reducerPath:t,getSelectors:o,get selectors(){return o(n)},selectSlice:n}}const k={name:r,reducer:w,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:C,..._(n),injectInto(e,{reducerPath:t,...r}={}){const o=t??n;return e.inject({reducerPath:o,reducer:w},r),{...k,..._(o,!0)}}};return k}}function T(e,t,r,n){function o(o,...c){let i=t(o);return void 0===i&&n&&(i=r()),e(i,...c)}return o.unwrapped=e,o}var k=_();function b(){}var{assign:g}=Object;Symbol.for("rtk-state-proxy-original");function O(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}}}]);