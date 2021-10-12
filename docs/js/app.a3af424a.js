(()=>{"use strict";var e={7122:(e,n,t)=>{t(7280),t(5363);var r=t(8880),o=t(2424),a=t(3673);function i(e,n,t,r,o,i){const d=(0,a.up)("router-view");return(0,a.wg)(),(0,a.j4)(d)}const d={name:"App"};d.render=i;const l=d;var s=t(7083),c=t(9582);const h=[{path:"/",component:()=>Promise.all([t.e(736),t.e(64),t.e(161)]).then(t.bind(t,3645)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(207)]).then(t.bind(t,7207))}]},{path:"/landing",component:()=>Promise.all([t.e(736),t.e(64),t.e(161)]).then(t.bind(t,3645)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(207)]).then(t.bind(t,7207))}]},{path:"/start",component:()=>Promise.all([t.e(736),t.e(64),t.e(6)]).then(t.bind(t,9122)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(433)]).then(t.bind(t,3397))}]},{path:"/authors",component:()=>Promise.all([t.e(736),t.e(64),t.e(6)]).then(t.bind(t,9122)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(991)]).then(t.bind(t,7803))}]},{path:"/finish-minimum",component:()=>Promise.all([t.e(736),t.e(64),t.e(6)]).then(t.bind(t,9122)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(98)]).then(t.bind(t,7596))}]},{path:"/identifiers",component:()=>Promise.all([t.e(736),t.e(64),t.e(6)]).then(t.bind(t,9122)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(851)]).then(t.bind(t,9795))}]},{path:"/related-resources",component:()=>Promise.all([t.e(736),t.e(64),t.e(6)]).then(t.bind(t,9122)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(369)]).then(t.bind(t,7066))}]},{path:"/abstract",component:()=>Promise.all([t.e(736),t.e(64),t.e(6)]).then(t.bind(t,9122)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(418)]).then(t.bind(t,20))}]},{path:"/keywords",component:()=>Promise.all([t.e(736),t.e(64),t.e(6)]).then(t.bind(t,9122)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(687)]).then(t.bind(t,3072))}]},{path:"/license",component:()=>Promise.all([t.e(736),t.e(64),t.e(6)]).then(t.bind(t,9122)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(971)]).then(t.bind(t,7760))}]},{path:"/version-specific",component:()=>Promise.all([t.e(736),t.e(64),t.e(6)]).then(t.bind(t,9122)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(745)]).then(t.bind(t,4686))}]},{path:"/finish-advanced",component:()=>Promise.all([t.e(736),t.e(64),t.e(6)]).then(t.bind(t,9122)),children:[{path:"",component:()=>Promise.all([t.e(736),t.e(64),t.e(85)]).then(t.bind(t,9709))}]},{path:"/404",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))},{path:"/:catchAll(.*)*",component:()=>Promise.all([t.e(736),t.e(209)]).then(t.bind(t,209))}],p=h;var u=t(9999);const f=(0,s.BC)((function(){const e=c.r5,n=(0,c.p7)({scrollBehavior:()=>({left:0,top:0}),routes:p,history:e("/cffinit/")});return n.beforeEach((e=>{const{navigateDirect:n}=(0,u.q)(),t=e.path.replace("/","");n(t)})),n}));async function v(e,n){const t="function"===typeof f?await f({}):f,r=e(l);return r.use(o.Z,n),{app:r,router:t}}const m={config:{brand:{primary:"#65686b",secondary:"#efefef",accent:"#9C27B0",formcard:"#efefef",dark:"#333",positive:"#21BA45",negative:"#C10015",info:"#31CCEC",warning:"#F2C037"}}};async function b({app:e,router:n}){e.use(n),e.mount("#q-app")}v(r.ri,m).then(b)},9999:(e,n,t)=>{t.d(n,{q:()=>u});var r=t(1959),o=t(3673),a=t(9582),i=function(e,n,t,r){function o(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,a){function i(e){try{l(r.next(e))}catch(n){a(n)}}function d(e){try{l(r["throw"](e))}catch(n){a(n)}}function l(e){e.done?t(e.value):o(e.value).then(i,d)}l((r=r.apply(e,n||[])).next())}))};const d=(0,r.iH)({showAdvanced:!1,stepIndex:0}),l=["start","authors","finish-minimum","identifiers","related-resources","abstract","keywords","license","version-specific","finish-advanced"],s=new Set(["identifiers","related-resources","abstract","keywords","license","version-specific"]),c=0,h=(0,o.Fl)((()=>d.value.showAdvanced?l.indexOf("finish-advanced"):l.indexOf("finish-minimum"))),p=(0,o.Fl)((()=>l[d.value.stepIndex]));function u(){const e=(0,a.tv)();return{cannotGoBack:(0,o.Fl)((()=>d.value.stepIndex===c)),cannotGoForward:(0,o.Fl)((()=>d.value.stepIndex===h.value)),lastStepIndex:h,showAdvanced:(0,o.Fl)((()=>d.value.showAdvanced)),stepName:p,navigateDirect:e=>{l.includes(e)&&(s.has(e)&&(d.value.showAdvanced=!0),d.value.stepIndex=l.indexOf(e))},setStepName:n=>i(this,void 0,void 0,(function*(){d.value.stepIndex=l.indexOf(n),yield e.push({path:`/${p.value}`})})),navigateNext:()=>i(this,void 0,void 0,(function*(){!0===d.value.showAdvanced&&"authors"===p.value&&d.value.stepIndex++,d.value.stepIndex<h.value&&(d.value.stepIndex++,yield e.push({path:`/${p.value}`}))})),navigatePrevious:()=>i(this,void 0,void 0,(function*(){!0===d.value.showAdvanced&&"identifiers"===p.value&&d.value.stepIndex--,d.value.stepIndex>c&&(d.value.stepIndex--,yield e.push({path:`/${p.value}`}))})),setShowAdvanced:e=>{d.value.showAdvanced=e}}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,(()=>{var e=[];t.O=(n,r,o,a)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,o,a]=e[c],d=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(t.O).every((e=>t.O[e](r[l])))?r.splice(l--,1):(d=!1,a<i&&(i=a));if(d){e.splice(c--,1);var s=o();void 0!==s&&(n=s)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}})(),(()=>{t.n=e=>{var n=e&&e.__esModule?()=>e["default"]:()=>e;return t.d(n,{a:n}),n}})(),(()=>{t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}})(),(()=>{t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce(((n,r)=>(t.f[r](e,n),n)),[]))})(),(()=>{t.u=e=>"js/"+(64===e?"chunk-common":e)+"."+{6:"9ff226c9",64:"fd3799c4",85:"d2939701",98:"0607f0ca",161:"741bf20d",207:"2ba0711f",209:"f7af9b5c",369:"5bb9742a",418:"29d5e58e",433:"8ecb2ce3",687:"a5e07d86",745:"7ccdcf05",851:"4f7bb45e",971:"9a845f49",991:"0bd0e92f"}[e]+".js"})(),(()=>{t.miniCssF=e=>"css/"+(736===e?"vendor":e)+"."+{6:"49a108fa",85:"88d0debd",98:"1c555dd4",161:"36969153",207:"2a982c8a",369:"1c555dd4",418:"1c555dd4",433:"1c555dd4",687:"1c555dd4",736:"540f306d",745:"1c555dd4",851:"1c555dd4",971:"1c555dd4",991:"1c555dd4"}[e]+".css"})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={},n="cffinit:";t.l=(r,o,a,i)=>{if(e[r])e[r].push(o);else{var d,l;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var h=s[c];if(h.getAttribute("src")==r||h.getAttribute("data-webpack")==n+a){d=h;break}}d||(l=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,t.nc&&d.setAttribute("nonce",t.nc),d.setAttribute("data-webpack",n+a),d.src=r),e[r]=[o];var p=(n,t)=>{d.onerror=d.onload=null,clearTimeout(u);var o=e[r];if(delete e[r],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(t))),n)return n(t)},u=setTimeout(p.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=p.bind(null,d.onerror),d.onload=p.bind(null,d.onload),l&&document.head.appendChild(d)}}})(),(()=>{t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{t.p="/cffinit/"})(),(()=>{var e=(e,n,t,r)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=a=>{if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),d=a&&a.target&&a.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=d,o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=(e,n)=>{for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=r=>new Promise(((o,a)=>{var i=t.miniCssF(r),d=t.p+i;if(n(i,d))return o();e(r,d,o,a)})),o={143:0};t.f.miniCss=(e,n)=>{var t={6:1,85:1,98:1,161:1,207:1,369:1,418:1,433:1,687:1,745:1,851:1,971:1,991:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((()=>{o[e]=0}),(n=>{throw delete o[e],n})))}})(),(()=>{var e={143:0};t.f.j=(n,r)=>{var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise(((t,r)=>o=e[n]=[t,r]));r.push(o[2]=a);var i=t.p+t.u(n),d=new Error,l=r=>{if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;d.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,o[1](d)}};t.l(i,l,"chunk-"+n,n)}},t.O.j=n=>0===e[n];var n=(n,r)=>{var o,a,[i,d,l]=r,s=0;for(o in d)t.o(d,o)&&(t.m[o]=d[o]);if(l)var c=l(t);for(n&&n(r);s<i.length;s++)a=i[s],t.o(e,a)&&e[a]&&e[a][0](),e[i[s]]=0;return t.O(c)},r=self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var r=t.O(void 0,[736],(()=>t(7122)));r=t.O(r)})();