"use strict";(self.webpackChunktodos=self.webpackChunktodos||[]).push([[279],{5508:(e,t,n)=>{n.d(t,{Mz:()=>l});function o(e,t="expected a function, instead received "+typeof e){if("function"!=typeof e)throw new TypeError(t)}var s=e=>Array.isArray(e)?e:[e];function c(e){const t=Array.isArray(e[0])?e[0]:e;return function(e,t="expected all items to be functions, instead received the following types: "){if(!e.every((e=>"function"==typeof e))){const n=e.map((e=>"function"==typeof e?`function ${e.name||"unnamed"}()`:typeof e)).join(", ");throw new TypeError(`${t}[${n}]`)}}(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}Symbol(),Object.getPrototypeOf({});var r="undefined"!=typeof WeakRef?WeakRef:class{constructor(e){this.value=e}deref(){return this.value}};function u(e,t={}){let n={s:0,v:void 0,o:null,p:null};const{resultEqualityCheck:o}=t;let s,c=0;function u(){let t=n;const{length:u}=arguments;for(let e=0,n=u;e<n;e++){const n=arguments[e];if("function"==typeof n||"object"==typeof n&&null!==n){let e=t.o;null===e&&(t.o=e=new WeakMap);const o=e.get(n);void 0===o?(t={s:0,v:void 0,o:null,p:null},e.set(n,t)):t=o}else{let e=t.p;null===e&&(t.p=e=new Map);const o=e.get(n);void 0===o?(t={s:0,v:void 0,o:null,p:null},e.set(n,t)):t=o}}const i=t;let l;if(1===t.s)l=t.v;else if(l=e.apply(null,arguments),c++,o){const e=s?.deref?.()??s;null!=e&&o(e,l)&&(l=e,0!==c&&c--);s="object"==typeof l&&null!==l||"function"==typeof l?new r(l):l}return i.s=1,i.v=l,l}return u.clearCache=()=>{n={s:0,v:void 0,o:null,p:null},u.resetResultsCount()},u.resultsCount=()=>c,u.resetResultsCount=()=>{c=0},u}function i(e,...t){const n="function"==typeof e?{memoize:e,memoizeOptions:t}:e,r=(...e)=>{let t,r=0,i=0,l={},p=e.pop();"object"==typeof p&&(l=p,p=e.pop()),o(p,`createSelector expects an output function after the inputs, but received: [${typeof p}]`);const a={...n,...l},{memoize:f,memoizeOptions:y=[],argsMemoize:d=u,argsMemoizeOptions:m=[],devModeChecks:v={}}=a,h=s(y),b=s(m),w=c(e),g=f((function(){return r++,p.apply(null,arguments)}),...h);const j=d((function(){i++;const e=function(e,t){const n=[],{length:o}=e;for(let s=0;s<o;s++)n.push(e[s].apply(null,t));return n}(w,arguments);return t=g.apply(null,e),t}),...b);return Object.assign(j,{resultFunc:p,memoizedResultFunc:g,dependencies:w,dependencyRecomputations:()=>i,resetDependencyRecomputations:()=>{i=0},lastResult:()=>t,recomputations:()=>r,resetRecomputations:()=>{r=0},memoize:f,argsMemoize:d})};return Object.assign(r,{withTypes:()=>r}),r}var l=i(u),p=Object.assign(((e,t=l)=>{!function(e,t="expected an object, instead received "+typeof e){if("object"!=typeof e)throw new TypeError(t)}(e,"createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);const n=Object.keys(e);return t(n.map((t=>e[t])),((...e)=>e.reduce(((e,t,o)=>(e[n[o]]=t,e)),{})))}),{withTypes:()=>p})}}]);