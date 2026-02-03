"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[504],{2:function(t,e,n){var r=n(6926),i=n(9310);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.33.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE",source:"https://github.com/zloirock/core-js"})},11:function(t,e,n){var r=n(1605),i=n(8194),s=n(8223);r({target:"Set",proto:!0,real:!0,forced:!s("isDisjointFrom")},{isDisjointFrom:i})},64:function(t,e,n){var r=n(2368);t.exports=function(t,e,n){var i,s,o=n?t:t.iterator,a=t.next;while(!(i=r(a,o)).done)if(s=e(i.value),void 0!==s)return s}},144:function(t,e,n){n.d(e,{C4:function(){return C},EW:function(){return Xt},Gc:function(){return Ct},IG:function(){return Lt},IJ:function(){return $t},KR:function(){return jt},Kh:function(){return At},Pr:function(){return Kt},QW:function(){return Ht},R1:function(){return qt},X2:function(){return E},bl:function(){return I},fE:function(){return Rt},g8:function(){return kt},hZ:function(){return O},i9:function(){return Ut},jr:function(){return u},ju:function(){return Dt},o5:function(){return c},u4:function(){return x},uY:function(){return o},ux:function(){return Nt},yC:function(){return s}});n(8743),n(3725),n(5019),n(9838),n(1339),n(292),n(9074),n(11),n(2818),n(2289),n(4694),n(1784);var r=n(4232);let i;class s{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function o(t){return new s(t)}function a(t,e=i){e&&e.active&&e.effects.push(t)}function c(){return i}function u(t){i&&i.cleanups.push(t)}const l=t=>{const e=new Set(t);return e.w=0,e.n=0,e},h=t=>(t.w&y)>0,f=t=>(t.n&y)>0,d=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=y},p=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];h(i)&&!f(i)?i.delete(t):e[n++]=i,i.w&=~y,i.n&=~y}e.length=n}},g=new WeakMap;let m=0,y=1;const v=30;let w;const b=Symbol(""),_=Symbol("");class E{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let t=w,e=S;while(t){if(t===this)return;t=t.parent}try{return this.parent=w,w=this,S=!0,y=1<<++m,m<=v?d(this):T(this),this.fn()}finally{m<=v&&p(this),y=1<<--m,w=this.parent,S=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){w===this?this.deferStop=!0:this.active&&(T(this),this.onStop&&this.onStop(),this.active=!1)}}function T(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let S=!0;const A=[];function C(){A.push(S),S=!1}function I(){const t=A.pop();S=void 0===t||t}function x(t,e,n){if(S&&w){let e=g.get(t);e||g.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=l());const i=void 0;k(r,i)}}function k(t,e){let n=!1;m<=v?f(t)||(t.n|=y,n=!h(t)):n=!t.has(w),n&&(t.add(w),w.deps.push(t))}function O(t,e,n,i,s,o){const a=g.get(t);if(!a)return;let c=[];if("clear"===e)c=[...a.values()];else if("length"===n&&(0,r.cy)(t)){const t=Number(i);a.forEach((e,n)=>{("length"===n||n>=t)&&c.push(e)})}else switch(void 0!==n&&c.push(a.get(n)),e){case"add":(0,r.cy)(t)?(0,r.yI)(n)&&c.push(a.get("length")):(c.push(a.get(b)),(0,r.jh)(t)&&c.push(a.get(_)));break;case"delete":(0,r.cy)(t)||(c.push(a.get(b)),(0,r.jh)(t)&&c.push(a.get(_)));break;case"set":(0,r.jh)(t)&&c.push(a.get(b));break}if(1===c.length)c[0]&&R(c[0]);else{const t=[];for(const e of c)e&&t.push(...e);R(l(t))}}function R(t,e){const n=(0,r.cy)(t)?t:[...t];for(const r of n)r.computed&&D(r,e);for(const r of n)r.computed||D(r,e)}function D(t,e){(t!==w||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function N(t,e){var n;return null==(n=g.get(t))?void 0:n.get(e)}const L=(0,r.pD)("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>"arguments"!==t&&"caller"!==t).map(t=>Symbol[t]).filter(r.Bm)),M=B(),F=B(!1,!0),V=B(!0),U=j();function j(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...t){const n=Nt(this);for(let e=0,i=this.length;e<i;e++)x(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(Nt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...t){C();const n=Nt(this)[e].apply(this,t);return I(),n}}),t}function $(t){const e=Nt(this);return x(e,"has",t),e.hasOwnProperty(t)}function B(t=!1,e=!1){return function(n,i,s){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_isShallow"===i)return e;if("__v_raw"===i&&s===(t?e?Et:_t:e?bt:wt).get(n))return n;const o=(0,r.cy)(n);if(!t){if(o&&(0,r.$3)(U,i))return Reflect.get(U,i,s);if("hasOwnProperty"===i)return $}const a=Reflect.get(n,i,s);return((0,r.Bm)(i)?P.has(i):L(i))?a:(t||x(n,"get",i),e?a:Ut(a)?o&&(0,r.yI)(i)?a:a.value:(0,r.Gv)(a)?t?It(a):At(a):a)}}const z=G(),q=G(!0);function G(t=!1){return function(e,n,i,s){let o=e[n];if(Ot(o)&&Ut(o)&&!Ut(i))return!1;if(!t&&(Rt(i)||Ot(i)||(o=Nt(o),i=Nt(i)),!(0,r.cy)(e)&&Ut(o)&&!Ut(i)))return o.value=i,!0;const a=(0,r.cy)(e)&&(0,r.yI)(n)?Number(n)<e.length:(0,r.$3)(e,n),c=Reflect.set(e,n,i,s);return e===Nt(s)&&(a?(0,r.$H)(i,o)&&O(e,"set",n,i,o):O(e,"add",n,i)),c}}function K(t,e){const n=(0,r.$3)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&O(t,"delete",e,void 0,i),s}function H(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&P.has(e)||x(t,"has",e),n}function W(t){return x(t,"iterate",(0,r.cy)(t)?"length":b),Reflect.ownKeys(t)}const Q={get:M,set:z,deleteProperty:K,has:H,ownKeys:W},Y={get:V,set(t,e){return!0},deleteProperty(t,e){return!0}},X=(0,r.X$)({},Q,{get:F,set:q}),J=t=>t,Z=t=>Reflect.getPrototypeOf(t);function tt(t,e,n=!1,r=!1){t=t["__v_raw"];const i=Nt(t),s=Nt(e);n||(e!==s&&x(i,"get",e),x(i,"get",s));const{has:o}=Z(i),a=r?J:n?Mt:Pt;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function et(t,e=!1){const n=this["__v_raw"],r=Nt(n),i=Nt(t);return e||(t!==i&&x(r,"has",t),x(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function nt(t,e=!1){return t=t["__v_raw"],!e&&x(Nt(t),"iterate",b),Reflect.get(t,"size",t)}function rt(t){t=Nt(t);const e=Nt(this),n=Z(e),r=n.has.call(e,t);return r||(e.add(t),O(e,"add",t,t)),this}function it(t,e){e=Nt(e);const n=Nt(this),{has:i,get:s}=Z(n);let o=i.call(n,t);o||(t=Nt(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,r.$H)(e,a)&&O(n,"set",t,e,a):O(n,"add",t,e),this}function st(t){const e=Nt(this),{has:n,get:r}=Z(e);let i=n.call(e,t);i||(t=Nt(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&O(e,"delete",t,void 0,s),o}function ot(){const t=Nt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&O(t,"clear",void 0,void 0,n),r}function at(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=Nt(s),a=e?J:t?Mt:Pt;return!t&&x(o,"iterate",b),s.forEach((t,e)=>n.call(r,a(t),a(e),i))}}function ct(t,e,n){return function(...i){const s=this["__v_raw"],o=Nt(s),a=(0,r.jh)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?J:e?Mt:Pt;return!e&&x(o,"iterate",u?_:b),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function ut(t){return function(...e){return"delete"!==t&&this}}function lt(){const t={get(t){return tt(this,t)},get size(){return nt(this)},has:et,add:rt,set:it,delete:st,clear:ot,forEach:at(!1,!1)},e={get(t){return tt(this,t,!1,!0)},get size(){return nt(this)},has:et,add:rt,set:it,delete:st,clear:ot,forEach:at(!1,!0)},n={get(t){return tt(this,t,!0)},get size(){return nt(this,!0)},has(t){return et.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:at(!0,!1)},r={get(t){return tt(this,t,!0,!0)},get size(){return nt(this,!0)},has(t){return et.call(this,t,!0)},add:ut("add"),set:ut("set"),delete:ut("delete"),clear:ut("clear"),forEach:at(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{t[i]=ct(i,!1,!1),n[i]=ct(i,!0,!1),e[i]=ct(i,!1,!0),r[i]=ct(i,!0,!0)}),[t,n,e,r]}const[ht,ft,dt,pt]=lt();function gt(t,e){const n=e?t?pt:dt:t?ft:ht;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.$3)(n,i)&&i in e?n:e,i,s)}const mt={get:gt(!1,!1)},yt={get:gt(!1,!0)},vt={get:gt(!0,!1)};const wt=new WeakMap,bt=new WeakMap,_t=new WeakMap,Et=new WeakMap;function Tt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function St(t){return t["__v_skip"]||!Object.isExtensible(t)?0:Tt((0,r.Zf)(t))}function At(t){return Ot(t)?t:xt(t,!1,Q,mt,wt)}function Ct(t){return xt(t,!1,X,yt,bt)}function It(t){return xt(t,!0,Y,vt,_t)}function xt(t,e,n,i,s){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=St(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function kt(t){return Ot(t)?kt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function Ot(t){return!(!t||!t["__v_isReadonly"])}function Rt(t){return!(!t||!t["__v_isShallow"])}function Dt(t){return kt(t)||Ot(t)}function Nt(t){const e=t&&t["__v_raw"];return e?Nt(e):t}function Lt(t){return(0,r.yQ)(t,"__v_skip",!0),t}const Pt=t=>(0,r.Gv)(t)?At(t):t,Mt=t=>(0,r.Gv)(t)?It(t):t;function Ft(t){S&&w&&(t=Nt(t),k(t.dep||(t.dep=l())))}function Vt(t,e){t=Nt(t);const n=t.dep;n&&R(n)}function Ut(t){return!(!t||!0!==t.__v_isRef)}function jt(t){return Bt(t,!1)}function $t(t){return Bt(t,!0)}function Bt(t,e){return Ut(t)?t:new zt(t,e)}class zt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:Nt(t),this._value=e?t:Pt(t)}get value(){return Ft(this),this._value}set value(t){const e=this.__v_isShallow||Rt(t)||Ot(t);t=e?t:Nt(t),(0,r.$H)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Pt(t),Vt(this,t))}}function qt(t){return Ut(t)?t.value:t}const Gt={get:(t,e,n)=>qt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ut(i)&&!Ut(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Kt(t){return kt(t)?t:new Proxy(t,Gt)}function Ht(t){const e=(0,r.cy)(t)?new Array(t.length):{};for(const n in t)e[n]=Qt(t,n);return e}class Wt{constructor(t,e,n){this._object=t,this._key=e,this._defaultValue=n,this.__v_isRef=!0}get value(){const t=this._object[this._key];return void 0===t?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return N(Nt(this._object),this._key)}}function Qt(t,e,n){const r=t[e];return Ut(r)?r:new Wt(t,e,n)}class Yt{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new E(t,()=>{this._dirty||(this._dirty=!0,Vt(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=Nt(this);return Ft(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Xt(t,e,n=!1){let i,s;const o=(0,r.Tn)(t);o?(i=t,s=r.tE):(i=t.get,s=t.set);const a=new Yt(i,s,o||!s,n);return a}},178:function(t,e,n){var r=n(1605),i=n(2929),s=n(4601),o=n(3938),a=n(938);r({target:"Iterator",proto:!0,real:!0},{every:function(t){o(this),s(t);var e=a(this),n=0;return!i(e,function(e,r){if(!t(e,n++))return r()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},200:function(t,e,n){var r=function(t){return t&&t.Math===Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},262:function(t,e,n){n.d(e,{MF:function(){return wt},j6:function(){return pt},xZ:function(){return gt},om:function(){return dt},Sx:function(){return _t},Wp:function(){return bt},KO:function(){return Et}});n(8743),n(959),n(3725),n(5019),n(1339),n(9229),n(282);var r=n(798),i=n(6189),s=n(2455);n(9078);const o=(t,e)=>e.some(e=>t instanceof e);let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&h.set(e,t)}).catch(()=>{}),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function _(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,u())?new Proxy(t,v):t)}function E(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=_(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function S(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)}),n&&o.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{s&&t.addEventListener("close",()=>s()),i&&t.addEventListener("versionchange",t=>i(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a}const A=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],I=new Map;function x(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(I.get(e))return I.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!A.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return I.set(e,s),s}w(t=>({...t,get:(e,n,r)=>x(e,n)||t.get(e,n,r),has:(e,n)=>!!x(e,n)||t.has(e,n)}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class k{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(O(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function O(t){const e=t.getComponent();return"VERSION"===e?.type}const R="@firebase/app",D="0.14.7",N=new i.Vy("@firebase/app"),L="@firebase/app-compat",P="@firebase/analytics-compat",M="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",j="@firebase/auth-compat",$="@firebase/database",B="@firebase/data-connect",z="@firebase/database-compat",q="@firebase/functions",G="@firebase/functions-compat",K="@firebase/installations",H="@firebase/installations-compat",W="@firebase/messaging",Q="@firebase/messaging-compat",Y="@firebase/performance",X="@firebase/performance-compat",J="@firebase/remote-config",Z="@firebase/remote-config-compat",tt="@firebase/storage",et="@firebase/storage-compat",nt="@firebase/firestore",rt="@firebase/ai",it="@firebase/firestore-compat",st="firebase",ot="12.8.0",at="[DEFAULT]",ct={[R]:"fire-core",[L]:"fire-core-compat",[M]:"fire-analytics",[P]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[j]:"fire-auth-compat",[$]:"fire-rtdb",[B]:"fire-data-connect",[z]:"fire-rtdb-compat",[q]:"fire-fn",[G]:"fire-fn-compat",[K]:"fire-iid",[H]:"fire-iid-compat",[W]:"fire-fcm",[Q]:"fire-fcm-compat",[Y]:"fire-perf",[X]:"fire-perf-compat",[J]:"fire-rc",[Z]:"fire-rc-compat",[tt]:"fire-gcs",[et]:"fire-gcs-compat",[nt]:"fire-fst",[it]:"fire-fst-compat",[rt]:"fire-vertex","fire-js":"fire-js",[st]:"fire-js-all"},ut=new Map,lt=new Map,ht=new Map;function ft(t,e){try{t.container.addComponent(e)}catch(n){N.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function dt(t){const e=t.name;if(ht.has(e))return N.debug(`There were multiple attempts to register component ${e}.`),!1;ht.set(e,t);for(const n of ut.values())ft(n,t);for(const n of lt.values())ft(n,t);return!0}function pt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function gt(t){return null!==t&&void 0!==t&&void 0!==t.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},yt=new s.FA("app","Firebase",mt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt{constructor(t,e,n){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt=ot;function bt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i={name:at,automaticDataCollectionEnabled:!0,...e},o=i.name;if("string"!==typeof o||!o)throw yt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw yt.create("no-options");const a=ut.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw yt.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of ht.values())c.addComponent(r);const u=new vt(n,i,c);return ut.set(o,u),u}function _t(t=at){const e=ut.get(t);if(!e&&t===at&&(0,s.T9)())return bt();if(!e)throw yt.create("no-app",{appName:t});return e}function Et(t,e,n){let i=ct[t]??t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const t=[`Unable to register library "${i}" with version "${e}":`];return s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void N.warn(t.join(" "))}dt(new r.uA(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tt="firebase-heartbeat-database",St=1,At="firebase-heartbeat-store";let Ct=null;function It(){return Ct||(Ct=S(Tt,St,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(At)}catch(n){console.warn(n)}}}}).catch(t=>{throw yt.create("idb-open",{originalErrorMessage:t.message})})),Ct}async function xt(t){try{const e=await It(),n=e.transaction(At),r=await n.objectStore(At).get(Ot(t));return await n.done,r}catch(e){if(e instanceof s.g)N.warn(e.message);else{const t=yt.create("idb-get",{originalErrorMessage:e?.message});N.warn(t.message)}}}async function kt(t,e){try{const n=await It(),r=n.transaction(At,"readwrite"),i=r.objectStore(At);await i.put(e,Ot(t)),await r.done}catch(n){if(n instanceof s.g)N.warn(n.message);else{const t=yt.create("idb-set",{originalErrorMessage:n?.message});N.warn(t.message)}}}function Ot(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=1024,Dt=30;class Nt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Mt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Lt();if(null==this._heartbeatsCache?.heartbeats&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats))return;if(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(t=>t.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats.length>Dt){const t=Vt(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(t,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){N.warn(t)}}async getHeartbeatsHeader(){try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==this._heartbeatsCache?.heartbeats||0===this._heartbeatsCache.heartbeats.length)return"";const t=Lt(),{heartbeatsToSend:e,unsentEntries:n}=Pt(this._heartbeatsCache.heartbeats),r=(0,s.Uj)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return N.warn(t),""}}}function Lt(){const t=new Date;return t.toISOString().substring(0,10)}function Pt(t,e=Rt){const n=[];let r=t.slice();for(const i of t){const t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),Ft(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ft(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Mt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then(()=>!0).catch(()=>!1)}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await xt(this.app);return t?.heartbeats?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){const e=await this._canUseIndexedDBPromise;if(e){const e=await this.read();return kt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){const e=await this._canUseIndexedDBPromise;if(e){const e=await this.read();return kt(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??e.lastSentHeartbeatDate,heartbeats:[...e.heartbeats,...t.heartbeats]})}}}function Ft(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}function Vt(t){if(0===t.length)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t){dt(new r.uA("platform-logger",t=>new k(t),"PRIVATE")),dt(new r.uA("heartbeat",t=>new Nt(t),"PRIVATE")),Et(R,D,t),Et(R,D,"esm2020"),Et("fire-js","")}Ut("")},281:function(t,e,n){var r=n(8823),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},282:function(t,e,n){var r=n(1605),i=n(5077),s=n(200),o=n(6492),a=n(281),c=n(2368),u=n(8420),l=n(5335),h=n(8679),f=n(6490),d=n(5362),p=n(3493),g=n(2057),m=n(2074),y=n(1753),v=n(2072),w=s.JSON,b=s.Number,_=s.SyntaxError,E=w&&w.parse,T=o("Object","keys"),S=Object.getOwnPropertyDescriptor,A=a("".charAt),C=a("".slice),I=a(/./.exec),x=a([].push),k=/^\d$/,O=/^[1-9]$/,R=/^(?:-|\d)$/,D=/^[\t\n\r ]$/,N=0,L=1,P=function(t,e){t=d(t);var n=new U(t,0,""),r=n.parse(),i=r.value,s=n.skip(D,r.end);if(s<t.length)throw new _('Unexpected extra character: "'+A(t,s)+'" after the parsed data at: '+s);return u(e)?M({"":i},"",e,r):i},M=function(t,e,n,r){var i,s,o,a,u,d=t[e],g=r&&d===r.value,m=g&&"string"==typeof r.source?{source:r.source}:{};if(l(d)){var y=h(d),v=g?r.nodes:y?[]:{};if(y)for(i=v.length,o=p(d),a=0;a<o;a++)F(d,a,M(d,""+a,n,a<i?v[a]:void 0));else for(s=T(d),o=p(s),a=0;a<o;a++)u=s[a],F(d,u,M(d,u,n,f(v,u)?v[u]:void 0))}return c(n,t,e,d,m)},F=function(t,e,n){if(i){var r=S(t,e);if(r&&!r.configurable)return}void 0===n?delete t[e]:g(t,e,n)},V=function(t,e,n,r){this.value=t,this.end=e,this.source=n,this.nodes=r},U=function(t,e){this.source=t,this.index=e};U.prototype={fork:function(t){return new U(this.source,t)},parse:function(){var t=this.source,e=this.skip(D,this.index),n=this.fork(e),r=A(t,e);if(I(R,r))return n.number();switch(r){case"{":return n.object();case"[":return n.array();case'"':return n.string();case"t":return n.keyword(!0);case"f":return n.keyword(!1);case"n":return n.keyword(null)}throw new _('Unexpected character: "'+r+'" at: '+e)},node:function(t,e,n,r,i){return new V(e,r,t?null:C(this.source,n,r),i)},object:function(){var t=this.source,e=this.index+1,n=!1,r={},i={};while(e<t.length){if(e=this.until(['"',"}"],e),"}"===A(t,e)&&!n){e++;break}var s=this.fork(e).string(),o=s.value;e=s.end,e=this.until([":"],e)+1,e=this.skip(D,e),s=this.fork(e).parse(),g(i,o,s),g(r,o,s.value),e=this.until([",","}"],s.end);var a=A(t,e);if(","===a)n=!0,e++;else if("}"===a){e++;break}}return this.node(L,r,this.index,e,i)},array:function(){var t=this.source,e=this.index+1,n=!1,r=[],i=[];while(e<t.length){if(e=this.skip(D,e),"]"===A(t,e)&&!n){e++;break}var s=this.fork(e).parse();if(x(i,s),x(r,s.value),e=this.until([",","]"],s.end),","===A(t,e))n=!0,e++;else if("]"===A(t,e)){e++;break}}return this.node(L,r,this.index,e,i)},string:function(){var t=this.index,e=y(this.source,this.index+1);return this.node(N,e.value,t,e.end)},number:function(){var t=this.source,e=this.index,n=e;if("-"===A(t,n)&&n++,"0"===A(t,n))n++;else{if(!I(O,A(t,n)))throw new _("Failed to parse number at: "+n);n=this.skip(k,++n)}if("."===A(t,n)&&(n=this.skip(k,++n)),"e"===A(t,n)||"E"===A(t,n)){n++,"+"!==A(t,n)&&"-"!==A(t,n)||n++;var r=n;if(n=this.skip(k,n),r===n)throw new _("Failed to parse number's exponent value at: "+n)}return this.node(N,b(C(t,e,n)),e,n)},keyword:function(t){var e=""+t,n=this.index,r=n+e.length;if(C(this.source,n,r)!==e)throw new _("Failed to parse value at: "+n);return this.node(N,t,n,r)},skip:function(t,e){for(var n=this.source;e<n.length;e++)if(!I(t,A(n,e)))break;return e},until:function(t,e){e=this.skip(D,e);for(var n=A(this.source,e),r=0;r<t.length;r++)if(t[r]===n)return e;throw new _('Unexpected character: "'+n+'" at: '+e)}};var j=m(function(){var t,e="9007199254740993";return E(e,function(e,n,r){t=r.source}),t!==e}),$=v&&!m(function(){return 1/E("-0 \t")!==-1/0});r({target:"JSON",stat:!0,forced:j},{parse:function(t,e){return $&&!u(e)?E(t):P(t,e)}})},290:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},292:function(t,e,n){var r=n(1605),i=n(5643),s=n(8223);r({target:"Set",proto:!0,real:!0,forced:!s("difference")},{difference:i})},419:function(t){t.exports="object"==typeof Deno&&Deno&&"object"==typeof Deno.version},605:function(t,e,n){var r=n(1385),i=n(1171);t.exports=r(i.proto,"size","get")||function(t){return t.size}},610:function(t,e,n){var r=n(5362);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},665:function(t,e,n){var r=n(281),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},798:function(t,e,n){n.d(e,{h1:function(){return u},uA:function(){return i}});n(3725),n(5019),n(1339),n(292),n(9074),n(11),n(2818),n(2289),n(4694),n(1784);var r=n(2455);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t?.identifier),n=t?.optional??!1;if(!this.isInitialized(e)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:e})}catch(r){if(n)return null;throw r}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){const n=this.normalizeInstanceIdentifier(e),r=this.onInitCallbacks.get(n)??new Set;r.add(t),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&t(i,n),()=>{r.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},802:function(t,e,n){var r=n(1602);e.f=r},874:function(t,e,n){var r=n(2368),i=n(5335),s=n(2328),o=n(6457),a=n(9751),c=n(1602),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw new u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},938:function(t){t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},959:function(t,e,n){var r=n(1605),i=n(6492),s=n(9070),o=n(2368),a=n(281),c=n(2074),u=n(8420),l=n(2328),h=n(9609),f=n(1110),d=n(2072),p=String,g=i("JSON","stringify"),m=a(/./.exec),y=a("".charAt),v=a("".charCodeAt),w=a("".replace),b=a(1..toString),_=/[\uD800-\uDFFF]/g,E=/^[\uD800-\uDBFF]$/,T=/^[\uDC00-\uDFFF]$/,S=!d||c(function(){var t=i("Symbol")("stringify detection");return"[null]"!==g([t])||"{}"!==g({a:t})||"{}"!==g(Object(t))}),A=c(function(){return'"\\udf06\\ud834"'!==g("\udf06\ud834")||'"\\udead"'!==g("\udead")}),C=function(t,e){var n=h(arguments),r=f(e);if(u(r)||void 0!==t&&!l(t))return n[1]=function(t,e){if(u(r)&&(e=o(r,this,p(t),e)),!l(e))return e},s(g,null,n)},I=function(t,e,n){var r=y(n,e-1),i=y(n,e+1);return m(E,t)&&!m(T,i)||m(T,t)&&!m(E,r)?"\\u"+b(v(t,0),16):t};g&&r({target:"JSON",stat:!0,arity:3,forced:S||A},{stringify:function(t,e,n){var r=h(arguments),i=s(S?C:g,null,r);return A&&"string"==typeof i?w(i,_,I):i}})},1009:function(t,e,n){var r=n(1171).has;t.exports=function(t){return r(t),t}},1059:function(t,e,n){var r=n(7485),i=n(281),s=n(5362),o=n(6589),a=URLSearchParams,c=a.prototype,u=i(c.getAll),l=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=u(this,t);o(e,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1},{enumerable:!0,unsafe:!0})},1110:function(t,e,n){var r=n(281),i=n(8679),s=n(8420),o=n(8569),a=n(5362),c=r([].push);t.exports=function(t){if(s(t))return t;if(i(t)){for(var e=t.length,n=[],r=0;r<e;r++){var u=t[r];"string"==typeof u?c(n,u):"number"!=typeof u&&"Number"!==o(u)&&"String"!==o(u)||c(n,a(u))}var l=n.length,h=!0;return function(t,e){if(h)return h=!1,e;if(i(this))return e;for(var r=0;r<l;r++)if(n[r]===t)return e}}}},1171:function(t,e,n){var r=n(281),i=Set.prototype;t.exports={Set:Set,add:r(i.add),has:r(i.has),remove:r(i["delete"]),proto:i}},1229:function(t,e,n){var r=n(8406),i=TypeError;t.exports=function(t){if(r(t))throw new i("Can't call method on "+t);return t}},1241:function(t,e){e.A=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},1332:function(t,e,n){var r=n(3938),i=n(9868);t.exports=function(t,e,n,s){try{return s?e(r(n)[0],n[1]):e(n)}catch(o){i(t,"throw",o)}}},1339:function(t,e,n){var r=n(1605),i=n(8318),s=n(6926);r({target:"Iterator",proto:!0,real:!0,forced:s},{map:i})},1385:function(t,e,n){var r=n(281),i=n(4601);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},1387:function(t,e,n){n.d(e,{Bt:function(){return j},aE:function(){return ne}});n(8743),n(959),n(3725),n(178),n(5019),n(2598),n(9838),n(1339),n(9471),n(9229),n(292),n(9074),n(11),n(2818),n(2289),n(4694),n(1784);var r=n(6768),i=n(144);
/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const i=e[r];n[r]=l(i)?i.map(t):t(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,f=t=>t.replace(h,"");function d(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=_(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function g(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function m(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(e.matched[r],n.matched[i])&&v(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function y(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function v(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!w(t[n],e[n]))return!1;return!0}function w(t,e){return l(t)?b(t,e):l(e)?b(e,t):t===e}function b(t,e){return l(e)?t.length===e.length&&t.every((t,n)=>t===e[n]):1===t.length&&t[0]===e}function _(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var E,T;(function(t){t["pop"]="pop",t["push"]="push"})(E||(E={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(T||(T={}));function S(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),f(t)}const A=/^[^#]+#/;function C(t,e){return t.replace(A,"#")+e}function I(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const x=()=>({left:window.pageXOffset,top:window.pageYOffset});function k(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=I(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function O(t,e){const n=history.state?history.state.position-e:-1;return n+t}const R=new Map;function D(t,e){R.set(t,e)}function N(t){const e=R.get(t);return R.delete(t),e}let L=()=>location.protocol+"//"+location.host;function P(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,t);return o+r+i}function M(t,e,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=P(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach(t=>{t(n.value,c,{delta:l,type:E.pop,direction:l?l>0?T.forward:T.back:T.unknown})})};function u(){o=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:x()}),"")}function f(){for(const t of s)t();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:f}}function F(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?x():null}}function V(t){const{history:e,location:n}=window,r={value:P(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:L()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=a({},e.state,F(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function c(t,n){const o=a({},i.value,e.state,{forward:t,scroll:x()});s(o.current,o,!0);const c=a({},F(r.value,t,null),{position:o.position+1},n);s(t,c,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function U(t){t=S(t);const e=V(t),n=M(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=a({location:"",base:t,go:r,createHref:C.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function j(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),U(t)}function $(t){return"string"===typeof t||t&&"object"===typeof t}function B(t){return"string"===typeof t||"symbol"===typeof t}const z={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},q=Symbol("");var G;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(G||(G={}));function K(t,e){return a(new Error,{type:t,[q]:!0},e)}function H(t,e){return t instanceof Error&&q in t&&(null==e||!!(t.type&e))}const W="[^/]+?",Q={sensitive:!1,strict:!1,start:!0,end:!0},Y=/[.+*?^${}()[\]/\\]/g;function X(t,e){const n=a({},Q,e),r=[];let i=n.start?"^":"";const s=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let e=0;e<a.length;e++){const r=a[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(Y,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:u}=r;s.push({name:t,repeatable:n,optional:c});const l=u||W;if(l!==W){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+h.message)}}let f=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(f=c&&a.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),i+=f,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function u(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function J(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function Z(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=J(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(tt(r))return 1;if(tt(i))return-1}return i.length-r.length}function tt(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const et={type:0,value:""},nt=/[a-zA-Z0-9_]/;function rt(t){if(!t)return[[]];if("/"===t)return[[et]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:nt.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function it(t,e,n){const r=X(rt(t.path),n);const i=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function st(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,c=at(t);c.aliasOf=r&&r.record;const h=ht(e,t),f=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)f.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let d,p;for(const e of f){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(d=it(e,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),i&&t.name&&!ut(d)&&o(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)s(t[e],d,r&&r.children[e])}r=r||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return p?()=>{o(p)}:u}function o(t){if(B(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function c(){return n}function l(t){let e=0;while(e<n.length&&Z(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ft(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ut(t)&&r.set(t.record.name,t)}function h(t,e){let i,s,o,c={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw K(1,{location:t});0,o=i.record.name,c=a(ot(e.params,i.keys.filter(t=>!t.optional).map(t=>t.name)),t.params&&ot(t.params,i.keys.map(t=>t.name))),s=i.stringify(c)}else if("path"in t)s=t.path,i=n.find(t=>t.re.test(s)),i&&(c=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find(t=>t.re.test(e.path)),!i)throw K(1,{location:t,currentLocation:e});o=i.record.name,c=a({},e.params,t.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:lt(u)}}return e=ht({strict:!1,end:!0,sensitive:!1},e),t.forEach(t=>s(t)),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function ot(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function at(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ct(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ct(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="object"===typeof n?n[r]:n;return e}function ut(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lt(t){return t.reduce((t,e)=>a(t,e.meta),{})}function ht(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ft(t,e){return e.children.some(e=>e===t||ft(t,e))}const dt=/#/g,pt=/&/g,gt=/\//g,mt=/=/g,yt=/\?/g,vt=/\+/g,wt=/%5B/g,bt=/%5D/g,_t=/%5E/g,Et=/%60/g,Tt=/%7B/g,St=/%7C/g,At=/%7D/g,Ct=/%20/g;function It(t){return encodeURI(""+t).replace(St,"|").replace(wt,"[").replace(bt,"]")}function xt(t){return It(t).replace(Tt,"{").replace(At,"}").replace(_t,"^")}function kt(t){return It(t).replace(vt,"%2B").replace(Ct,"+").replace(dt,"%23").replace(pt,"%26").replace(Et,"`").replace(Tt,"{").replace(At,"}").replace(_t,"^")}function Ot(t){return kt(t).replace(mt,"%3D")}function Rt(t){return It(t).replace(dt,"%23").replace(yt,"%3F")}function Dt(t){return null==t?"":Rt(t).replace(gt,"%2F")}function Nt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Lt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(vt," "),n=t.indexOf("="),s=Nt(n<0?t:t.slice(0,n)),o=n<0?null:Nt(t.slice(n+1));if(s in e){let t=e[s];l(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Pt(t){let e="";for(let n in t){const r=t[n];if(n=Ot(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=l(r)?r.map(t=>t&&kt(t)):[r&&kt(r)];i.forEach(t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))})}return e}function Mt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=l(r)?r.map(t=>null==t?null:""+t):null==r?r:""+r)}return e}const Ft=Symbol(""),Vt=Symbol(""),Ut=Symbol(""),jt=Symbol(""),$t=Symbol("");function Bt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function zt(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const c=t=>{!1===t?a(K(4,{from:n,to:e})):t instanceof Error?a(t):$(t)?a(K(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch(t=>a(t))})}function qt(t,e,n,r){const i=[];for(const s of t){0;for(const t in s.components){let a=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(Gt(a)){const o=a.__vccOpts||a,c=o[e];c&&i.push(zt(c,n,r,s,t))}else{let c=a();0,i.push(()=>c.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[t]=a;const c=a.__vccOpts||a,u=c[e];return u&&zt(u,n,r,s,t)()}))}}}return i}function Gt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Kt(t){const e=(0,r.WQ)(Ut),n=(0,r.WQ)(jt),s=(0,r.EW)(()=>e.resolve((0,i.R1)(t.to))),o=(0,r.EW)(()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(y.bind(null,r));if(o>-1)return o;const a=Xt(t[e-2]);return e>1&&Xt(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,t[e-2])):o}),a=(0,r.EW)(()=>o.value>-1&&Yt(n.params,s.value.params)),c=(0,r.EW)(()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,s.value.params));function l(n={}){return Qt(n)?e[(0,i.R1)(t.replace)?"replace":"push"]((0,i.R1)(t.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.EW)(()=>s.value.href),isActive:a,isExactActive:c,navigate:l}}const Ht=(0,r.pM)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kt,setup(t,{slots:e}){const n=(0,i.Kh)(Kt(t)),{options:s}=(0,r.WQ)(Ut),o=(0,r.EW)(()=>({[Jt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Jt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Wt=Ht;function Qt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some((t,e)=>t!==i[e]))return!1}return!0}function Xt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Jt=(t,e,n)=>null!=t?t:null!=e?e:n,Zt=(0,r.pM)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,r.WQ)($t),o=(0,r.EW)(()=>t.route||s.value),c=(0,r.WQ)(Vt,0),u=(0,r.EW)(()=>{let t=(0,i.R1)(c);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t}),l=(0,r.EW)(()=>o.value.matched[u.value]);(0,r.Gt)(Vt,(0,r.EW)(()=>u.value+1)),(0,r.Gt)(Ft,l),(0,r.Gt)($t,o);const h=(0,i.KR)();return(0,r.wB)(()=>[h.value,l.value,t.name],([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&y(e,i)&&r||(e.enterCallbacks[n]||[]).forEach(e=>e(t))},{flush:"post"}),()=>{const i=o.value,s=t.name,c=l.value,u=c&&c.components[s];if(!u)return te(n.default,{Component:u,route:i});const f=c.props[s],d=f?!0===f?i.params:"function"===typeof f?f(i):f:null,p=t=>{t.component.isUnmounted&&(c.instances[s]=null)},g=(0,r.h)(u,a({},d,e,{onVnodeUnmounted:p,ref:h}));return te(n.default,{Component:g,route:i})||g}}});function te(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const ee=Zt;function ne(t){const e=st(t.routes,t),n=t.parseQuery||Lt,o=t.stringifyQuery||Pt,h=t.history;const f=Bt(),g=Bt(),y=Bt(),v=(0,i.IJ)(z);let w=z;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,t=>""+t),_=c.bind(null,Dt),T=c.bind(null,Nt);function S(t,n){let r,i;return B(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function A(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function C(){return e.getRoutes().map(t=>t.record)}function I(t){return!!e.getRecordMatcher(t)}function R(t,r){if(r=a({},r||v.value),"string"===typeof t){const i=d(n,t,r.path),s=e.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:Nt(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in t)i=a({},t,{path:d(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];i=a({},t,{params:_(e)}),r.params=_(r.params)}const s=e.resolve(i,r),c=t.hash||"";s.params=b(T(s.params));const u=p(o,a({},t,{hash:xt(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Pt?Mt(t.query):t.query||{}},s,{redirectedFrom:void 0,href:l})}function L(t){return"string"===typeof t?d(n,t,v.value.path):a({},t)}function P(t,e){if(w!==t)return K(8,{from:e,to:t})}function M(t){return U(t)}function F(t){return M(a(L(t),{replace:!0}))}function V(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=L(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function U(t,e){const n=w=R(t),r=v.value,i=t.state,s=t.force,c=!0===t.replace,u=V(n);if(u)return U(a(L(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),e||n);const l=n;let h;return l.redirectedFrom=e,!s&&m(o,r,n)&&(h=K(16,{to:l,from:r}),rt(r,r,!0,!1)),(h?Promise.resolve(h):q(l,r)).catch(t=>H(t)?H(t,2)?t:nt(t):tt(t,l,r)).then(t=>{if(t){if(H(t,2))return U(a({replace:c},L(t.to),{state:"object"===typeof t.to?a({},i,t.to.state):i,force:s}),e||l)}else t=W(l,r,!0,c,i);return G(l,r,t),t})}function j(t,e){const n=P(t,e);return n?Promise.reject(n):Promise.resolve()}function $(t){const e=at.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function q(t,e){let n;const[r,i,s]=re(t,e);n=qt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach(r=>{n.push(zt(r,t,e))});const o=j.bind(null,t,e);return n.push(o),ut(n).then(()=>{n=[];for(const r of f.list())n.push(zt(r,t,e));return n.push(o),ut(n)}).then(()=>{n=qt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach(r=>{n.push(zt(r,t,e))});return n.push(o),ut(n)}).then(()=>{n=[];for(const r of s)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push(zt(i,t,e));else n.push(zt(r.beforeEnter,t,e));return n.push(o),ut(n)}).then(()=>(t.matched.forEach(t=>t.enterCallbacks={}),n=qt(s,"beforeRouteEnter",t,e),n.push(o),ut(n))).then(()=>{n=[];for(const r of g.list())n.push(zt(r,t,e));return n.push(o),ut(n)}).catch(t=>H(t,8)?t:Promise.reject(t))}function G(t,e,n){y.list().forEach(r=>$(()=>r(t,e,n)))}function W(t,e,n,r,i){const o=P(t,e);if(o)return o;const c=e===z,u=s?history.state:{};n&&(r||c?h.replace(t.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(t.fullPath,i)),v.value=t,rt(t,e,n,c),nt()}let Q;function Y(){Q||(Q=h.listen((t,e,n)=>{if(!ct.listening)return;const r=R(t),i=V(r);if(i)return void U(a(i,{replace:!0}),r).catch(u);w=r;const o=v.value;s&&D(O(o.fullPath,n.delta),x()),q(r,o).catch(t=>H(t,12)?t:H(t,2)?(U(t.to,r).then(t=>{H(t,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)}).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),tt(t,r,o))).then(t=>{t=t||W(r,o,!1),t&&(n.delta&&!H(t,8)?h.go(-n.delta,!1):n.type===E.pop&&H(t,20)&&h.go(-1,!1)),G(r,o,t)}).catch(u)}))}let X,J=Bt(),Z=Bt();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach(r=>r(t,e,n)):console.error(t),Promise.reject(t)}function et(){return X&&v.value!==z?Promise.resolve():new Promise((t,e)=>{J.add([t,e])})}function nt(t){return X||(X=!t,Y(),J.list().forEach(([e,n])=>t?n(t):e()),J.reset()),t}function rt(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const c=!i&&N(O(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.dY)().then(()=>a(e,n,c)).then(t=>t&&k(t)).catch(t=>tt(t,e,n))}const it=t=>h.go(t);let ot;const at=new Set,ct={currentRoute:v,listening:!0,addRoute:S,removeRoute:A,hasRoute:I,getRoutes:C,resolve:R,options:t,push:M,replace:F,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:f.add,beforeResolve:g.add,afterEach:y.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",Wt),t.component("RouterView",ee),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.R1)(v)}),s&&!ot&&v.value===z&&(ot=!0,M(h.location).catch(t=>{0}));const n={};for(const i in z)Object.defineProperty(n,i,{get:()=>v.value[i],enumerable:!0});t.provide(Ut,e),t.provide(jt,(0,i.Gc)(n)),t.provide($t,v);const r=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(w=z,Q&&Q(),Q=null,v.value=z,ot=!1,X=!1),r()}}};function ut(t){return t.reduce((t,e)=>t.then(()=>$(e)),Promise.resolve())}return ct}function re(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find(t=>y(t,s))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find(t=>y(t,a))||i.push(a))}return[n,r,i]}},1523:function(t,e,n){var r=n(2368),i=n(3105),s=n(7712),o=n(2760),a=n(1602),c=n(9206),u=n(6457),l=n(9306).IteratorPrototype,h=n(8296),f=n(9868),d=a("toStringTag"),p="IteratorHelper",g="WrapForValidIterator",m=c.set,y=function(t){var e=c.getterFor(t?g:p);return o(i(l),{next:function(){var n=e(this);if(t)return n.nextHandler();try{var r=n.done?void 0:n.nextHandler();return h(r,n.done)}catch(i){throw n.done=!0,i}},return:function(){var n=e(this),i=n.iterator;if(n.done=!0,t){var s=u(i,"return");return s?r(s,i):h(void 0,!0)}if(n.inner)try{f(n.inner.iterator,"normal")}catch(o){return f(i,"throw",o)}return f(i,"normal"),h(void 0,!0)}})},v=y(!0),w=y(!1);s(w,d,"Iterator Helper"),t.exports=function(t,e){var n=function(n,r){r?(r.iterator=n.iterator,r.next=n.next):r=n,r.type=e?g:p,r.nextHandler=t,r.counter=0,r.done=!1,m(this,r)};return n.prototype=e?v:w,n}},1602:function(t,e,n){var r=n(200),i=n(2),s=n(6490),o=n(665),a=n(2072),c=n(5225),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(u,t)?u[t]:h("Symbol."+t)),l[t]}},1605:function(t,e,n){var r=n(200),i=n(7632).f,s=n(7712),o=n(7485),a=n(9430),c=n(4361),u=n(4977);t.exports=function(t,e){var n,l,h,f,d,p,g=t.target,m=t.global,y=t.stat;if(l=m?r:y?r[g]||a(g,{}):(r[g]||{}).prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(m?h:g+(y?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},1641:function(t,e,n){var r=n(6347),i=n(290);t.exports=Object.keys||function(t){return r(t,i)}},1753:function(t,e,n){var r=n(281),i=n(6490),s=SyntaxError,o=parseInt,a=String.fromCharCode,c=r("".charAt),u=r("".slice),l=r(/./.exec),h={'\\"':'"',"\\\\":"\\","\\/":"/","\\b":"\b","\\f":"\f","\\n":"\n","\\r":"\r","\\t":"\t"},f=/^[\da-f]{4}$/i,d=/^[\u0000-\u001F]$/;t.exports=function(t,e){var n=!0,r="";while(e<t.length){var p=c(t,e);if("\\"===p){var g=u(t,e,e+2);if(i(h,g))r+=h[g],e+=2;else{if("\\u"!==g)throw new s('Unknown escape sequence: "'+g+'"');e+=2;var m=u(t,e,e+4);if(!l(f,m))throw new s("Bad Unicode escape at: "+e);r+=a(o(m,16)),e+=4}}else{if('"'===p){n=!1,e++;break}if(l(d,p))throw new s("Bad control character in string literal at: "+e);r+=p,e++}}if(n)throw new s("Unterminated string at: "+e);return{value:r,end:e}}},1784:function(t,e,n){var r=n(1605),i=n(1869),s=n(8223);r({target:"Set",proto:!0,real:!0,forced:!s("union")},{union:i})},1832:function(t,e,n){n.d(e,{gS:function(){return vu},rJ:function(){return mc},H9:function(){return yc},x7:function(){return pu},GG:function(){return gu},aU:function(){return Ec},GV:function(){return Zc},aQ:function(){return wu},BN:function(){return mu},mZ:function(){return yu},wP:function(){return Eu}});n(8743),n(3725),n(5019),n(9838),n(1339),n(282);var r,i,s=n(262),o=n(798),a=(n(959),n(6736),n(9639),n(9286),n(9266),n(178),n(2598),n(9471),n(9229),n(7060),n(292),n(9074),n(11),n(2818),n(2289),n(4694),n(1784),n(9078),n(6380),n(1059),n(2838),n(2455)),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},u={};(function(){var t;
/** @license
         Copyright The Closure Library Authors.
         SPDX-License-Identifier: Apache-2.0
         */function e(t,e){function n(){}n.prototype=e.prototype,t.F=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.D=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}function o(t,e,n){n||(n=0);const r=Array(16);if("string"===typeof e)for(var i=0;i<16;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;i<16;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];let s,o=t.g[3];s=e+(o^n&(i^o))+r[0]+3614090360&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}function a(t,e){var n=l;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function c(t,e){this.h=e;const n=[];let r=!0;for(let i=t.length-1;i>=0;i--){const s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},s.prototype.v=function(t,e){void 0===e&&(e=t.length);const n=e-this.blockSize,r=this.C;let i=this.h,s=0;for(;s<e;){if(0==i)for(;s<=n;)o(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){o(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){o(this,r),i=0;break}}this.h=i,this.o+=e},s.prototype.A=function(){var t=Array((this.h<56?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;e=8*this.o;for(var n=t.length-8;n<t.length;++n)t[n]=255&e,e/=256;for(this.v(t),t=Array(16),e=0,n=0;n<4;++n)for(let r=0;r<32;r+=8)t[e++]=this.g[n]>>>r&255;return t};var l={};function h(t){return-128<=t&&t<128?a(t,function(t){return new c([0|t],t<0?-1:0)}):new c([0|t],t<0?-1:0)}function f(t){if(isNaN(t)||!isFinite(t))return p;if(t<0)return w(f(-t));const e=[];let n=1;for(let r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new c(e,0)}function d(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,e<2||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return w(d(t.substring(1),e));if(t.indexOf("-")>=0)throw Error('number format error: interior "-" character');const n=f(Math.pow(e,8));let r=p;for(let s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s);const o=parseInt(t.substring(s,s+i),e);i<8?(i=f(Math.pow(e,i)),r=r.j(i).add(f(o))):(r=r.j(n),r=r.add(f(o)))}return r}var p=h(0),g=h(1),m=h(16777216);function y(t){if(0!=t.h)return!1;for(let e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function v(t){return-1==t.h}function w(t){const e=t.g.length,n=[];for(let r=0;r<e;r++)n[r]=~t.g[r];return new c(n,~t.h).add(g)}function b(t,e){return t.add(w(e))}function _(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function E(t,e){this.g=t,this.h=e}function T(t,e){if(y(e))throw Error("division by zero");if(y(t))return new E(p,p);if(v(t))return e=T(w(t),e),new E(w(e.g),w(e.h));if(v(e))return e=T(t,w(e)),new E(w(e.g),e.h);if(t.g.length>30){if(v(t)||v(e))throw Error("slowDivide_ only works with positive integers.");for(var n=g,r=e;r.l(t)<=0;)n=S(n),r=S(r);var i=A(n,1),s=A(r,1);for(r=A(r,2),n=A(n,2);!y(r);){var o=s.add(r);o.l(t)<=0&&(i=i.add(n),s=o),r=A(r,1),n=A(n,1)}return e=b(t,i.j(e)),new E(i,e)}for(i=p;t.l(e)>=0;){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=r<=48?1:Math.pow(2,r-48),s=f(n),o=s.j(e);v(o)||o.l(t)>0;)n-=r,s=f(n),o=s.j(e);y(s)&&(s=g),i=i.add(s),t=b(t,o)}return new E(i,t)}function S(t){const e=t.g.length+1,n=[];for(let r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new c(n,t.h)}function A(t,e){const n=e>>5;e%=32;const r=t.g.length-n,i=[];for(let s=0;s<r;s++)i[s]=e>0?t.i(s+n)>>>e|t.i(s+n+1)<<32-e:t.i(s+n);return new c(i,t.h)}t=c.prototype,t.m=function(){if(v(this))return-w(this).m();let t=0,e=1;for(let n=0;n<this.g.length;n++){const r=this.i(n);t+=(r>=0?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,t<2||36<t)throw Error("radix out of range: "+t);if(y(this))return"0";if(v(this))return"-"+w(this).toString(t);const e=f(Math.pow(t,6));var n=this;let r="";for(;;){const i=T(n,e).g;n=b(n,i.j(e));let s=((n.g.length>0?n.g[0]:n.h)>>>0).toString(t);if(n=i,y(n))return s+r;for(;s.length<6;)s="0"+s;r=s+r}},t.i=function(t){return t<0?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=b(this,t),v(t)?-1:y(t)?0:1},t.abs=function(){return v(this)?w(this):this},t.add=function(t){const e=Math.max(this.g.length,t.g.length),n=[];let r=0;for(let i=0;i<=e;i++){let e=r+(65535&this.i(i))+(65535&t.i(i)),s=(e>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);r=s>>>16,e&=65535,s&=65535,n[i]=s<<16|e}return new c(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(y(this)||y(t))return p;if(v(this))return v(t)?w(this).j(w(t)):w(w(this).j(t));if(v(t))return w(this.j(w(t)));if(this.l(m)<0&&t.l(m)<0)return f(this.m()*t.m());const e=this.g.length+t.g.length,n=[];for(var r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(let e=0;e<t.g.length;e++){const i=this.i(r)>>>16,s=65535&this.i(r),o=t.i(e)>>>16,a=65535&t.i(e);n[2*r+2*e]+=s*a,_(n,2*r+2*e),n[2*r+2*e+1]+=i*a,_(n,2*r+2*e+1),n[2*r+2*e+1]+=s*o,_(n,2*r+2*e+1),n[2*r+2*e+2]+=i*o,_(n,2*r+2*e+2)}for(t=0;t<e;t++)n[t]=n[2*t+1]<<16|n[2*t];for(t=e;t<2*e;t++)n[t]=0;return new c(n,0)},t.B=function(t){return T(this,t).h},t.and=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new c(n,this.h&t.h)},t.or=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new c(n,this.h|t.h)},t.xor=function(t){const e=Math.max(this.g.length,t.g.length),n=[];for(let r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new c(n,this.h^t.h)},s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,i=u.Md5=s,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=f,c.fromString=d,r=u.Integer=c}).apply("undefined"!==typeof c?c:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var l,h,f,d,p,g,m,y,v=n(6189),w=(n(9368),n(6902),"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{}),b={};(function(){var t,e=Object.defineProperty;function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof w&&w];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(t,n){if(n)t:{var i=r;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in i))break t;i=i[o]}t=t[t.length-1],s=i[t],n=n(s),n!=s&&null!=n&&e(i,t,{configurable:!0,writable:!0,value:n})}}i("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(t){return t||function(t){var e,n=[];for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push([e,t[e]]);return n}});
/** @license
      Copyright The Closure Library Authors.
      SPDX-License-Identifier: Apache-2.0
      */
var s=s||{},o=this||self;function a(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function c(t,e,n){return t.call.apply(t.bind,arguments)}function u(t,e,n){return u=c,u.apply(null,arguments)}function v(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Ob=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}var E="undefined"!==typeof AsyncContext&&"function"===typeof AsyncContext.Snapshot?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function T(t){const e=t.length;if(e>0){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function S(t,e){for(let r=1;r<arguments.length;r++){const e=arguments[r];var n=typeof e;if(n="object"!=n?n:e?Array.isArray(e)?"array":n:"null","array"==n||"object"==n&&"number"==typeof e.length){n=t.length||0;const r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}class A{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return this.h>0?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function C(t){o.setTimeout(()=>{throw t},0)}function I(){var t=N;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class x{constructor(){this.h=this.g=null}add(t,e){const n=k.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var k=new A(()=>new O,t=>t.reset());class O{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let R,D=!1,N=new x,L=()=>{const t=Promise.resolve(void 0);R=()=>{t.then(P)}};function P(){for(var t;t=I();){try{t.h.call(t.g)}catch(n){C(n)}var e=k;e.j(t),e.h<100&&(e.h++,t.next=e.g,e.g=t)}D=!1}function M(){this.u=this.u,this.C=this.C}function F(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}M.prototype.u=!1,M.prototype.dispose=function(){this.u||(this.u=!0,this.N())},M.prototype[Symbol.dispose]=function(){this.dispose()},M.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},F.prototype.h=function(){this.defaultPrevented=!0};var V=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};o.addEventListener("test",t,e),o.removeEventListener("test",t,e)}catch(n){}return t}();function U(t){return/^[\s\xa0]*$/.test(t)}function j(t,e){F.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,e)}_(j,F),j.prototype.init=function(t,e){const n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget,e||("mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)),this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&j.Z.h.call(this)},j.prototype.h=function(){j.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var $="closure_listenable_"+(1e6*Math.random()|0),B=0;function z(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++B,this.da=this.fa=!1}function q(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function G(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function K(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function H(t){const e={};for(const n in t)e[n]=t[n];return e}const W="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Q(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<W.length;e++)n=W[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Y(t){this.src=t,this.g={},this.h=0}function X(t,e){const n=e.type;if(n in t.g){var r,i=t.g[n],s=Array.prototype.indexOf.call(i,e,void 0);(r=s>=0)&&Array.prototype.splice.call(i,s,1),r&&(q(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function J(t,e,n,r){for(let i=0;i<t.length;++i){const s=t[i];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}Y.prototype.add=function(t,e,n,r,i){const s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);const o=J(t,e,r,i);return o>-1?(e=t[o],n||(e.fa=!1)):(e=new z(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var tt="closure_lm_"+(1e6*Math.random()|0),et={};function nt(t,e,n,r,i){if(r&&r.once)return st(t,e,n,r,i);if(Array.isArray(e)){for(let s=0;s<e.length;s++)nt(t,e[s],n,r,i);return null}return n=ft(n),t&&t[$]?t.J(e,n,a(r)?!!r.capture:!!r,i):rt(t,e,n,!1,r,i)}function rt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");const o=a(i)?!!i.capture:!!i;let c=lt(t);if(c||(t[tt]=c=new Y(t)),n=c.add(e,n,r,o,s),n.proxy)return n;if(r=it(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)V||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ct(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function it(){function t(n){return e.call(t.src,t.listener,n)}const e=ut;return t}function st(t,e,n,r,i){if(Array.isArray(e)){for(let s=0;s<e.length;s++)st(t,e[s],n,r,i);return null}return n=ft(n),t&&t[$]?t.K(e,n,a(r)?!!r.capture:!!r,i):rt(t,e,n,!0,r,i)}function ot(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)ot(t,e[s],n,r,i);else r=a(r)?!!r.capture:!!r,n=ft(n),t&&t[$]?(t=t.i,s=String(e).toString(),s in t.g&&(e=t.g[s],n=J(e,n,r,i),n>-1&&(q(e[n]),Array.prototype.splice.call(e,n,1),0==e.length&&(delete t.g[s],t.h--)))):t&&(t=lt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=J(e,n,r,i)),(n=t>-1?e[t]:null)&&at(n))}function at(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[$])X(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ct(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=lt(e))?(X(n,t),0==n.h&&(n.src=null,e[tt]=null)):q(t)}}}function ct(t){return t in et?et[t]:et[t]="on"+t}function ut(t,e){if(t.da)t=!0;else{e=new j(e,this);const n=t.listener,r=t.ha||t.src;t.fa&&at(t),t=n.call(r,e)}return t}function lt(t){return t=t[tt],t instanceof Y?t:null}var ht="__closure_events_fn_"+(1e9*Math.random()>>>0);function ft(t){return"function"===typeof t?t:(t[ht]||(t[ht]=function(e){return t.handleEvent(e)}),t[ht])}function dt(){M.call(this),this.i=new Y(this),this.M=this,this.G=null}function pt(t,e){var n,r=t.G;if(r)for(n=[];r;r=r.G)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new F(e,t);else if(e instanceof F)e.target=e.target||t;else{var i=e;e=new F(r,t),Q(e,i)}let s,o;if(i=!0,n)for(o=n.length-1;o>=0;o--)s=e.g=n[o],i=gt(s,r,!0,e)&&i;if(s=e.g=t,i=gt(s,r,!0,e)&&i,i=gt(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=gt(s,r,!1,e)&&i}function gt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();let i=!0;for(let s=0;s<e.length;++s){const o=e[s];if(o&&!o.da&&o.capture==n){const e=o.listener,n=o.ha||o.src;o.fa&&X(t.i,o),i=!1!==e.call(n,r)&&i}}return i&&!r.defaultPrevented}function mt(t,e){if("function"!==typeof t){if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=u(t.handleEvent,t)}return Number(e)>2147483647?-1:o.setTimeout(t,e||0)}function yt(t){t.g=mt(()=>{t.g=null,t.i&&(t.i=!1,yt(t))},t.l);const e=t.h;t.h=null,t.m.apply(null,e)}_(dt,M),dt.prototype[$]=!0,dt.prototype.removeEventListener=function(t,e,n,r){ot(this,t,e,n,r)},dt.prototype.N=function(){if(dt.Z.N.call(this),this.i){var t=this.i;for(const e in t.g){const n=t.g[e];for(let t=0;t<n.length;t++)q(n[t]);delete t.g[e],t.h--}}this.G=null},dt.prototype.J=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},dt.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class vt extends M{constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:yt(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wt(t){M.call(this),this.h=t,this.g={}}_(wt,M);var bt=[];function _t(t){G(t.g,function(t,e){this.g.hasOwnProperty(e)&&at(t)},t),t.g={}}wt.prototype.N=function(){wt.Z.N.call(this),_t(this)},wt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Et=o.JSON.stringify,Tt=o.JSON.parse,St=class{stringify(t){return o.JSON.stringify(t,void 0)}parse(t){return o.JSON.parse(t,void 0)}};function At(){}function Ct(){}var It={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function xt(){F.call(this,"d")}function kt(){F.call(this,"c")}_(xt,F),_(kt,F);var Ot={},Rt=null;function Dt(){return Rt=Rt||new dt}function Nt(t){F.call(this,Ot.Ia,t)}function Lt(t){const e=Dt();pt(e,new Nt(e))}function Pt(t,e){F.call(this,Ot.STAT_EVENT,t),this.stat=e}function Mt(t){const e=Dt();pt(e,new Pt(e,t))}function Ft(t,e){F.call(this,Ot.Ja,t),this.size=e}function Vt(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){t()},e)}function Ut(){this.g=!0}function jt(t,e,n,r,i,s){t.info(function(){if(t.g)if(s){var o="",a=s.split("&");for(let t=0;t<a.length;t++){var c=a[t].split("=");if(c.length>1){const t=c[0];c=c[1];const e=t.split("_");o=e.length>=2&&"type"==e[1]?o+(t+"=")+c+"&":o+(t+"=redacted&")}}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o})}function $t(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o})}function Bt(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qt(t,n)+(r?" "+r:"")})}function zt(t,e){t.info(function(){return"TIMEOUT: "+e})}function qt(t,e){if(!t.g)return e;if(!e)return null;try{const s=JSON.parse(e);if(s)for(t=0;t<s.length;t++)if(Array.isArray(s[t])){var n=s[t];if(!(n.length<2)){var r=n[1];if(Array.isArray(r)&&!(r.length<1)){var i=r[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(let t=1;t<r.length;t++)r[t]=""}}}return Et(s)}catch(s){return e}}Ot.Ia="serverreachability",_(Nt,F),Ot.STAT_EVENT="statevent",_(Pt,F),Ot.Ja="timingevent",_(Ft,F),Ut.prototype.ua=function(){this.g=!1},Ut.prototype.info=function(){};var Gt,Kt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ht={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"};function Wt(){}function Qt(t){return encodeURIComponent(String(t))}function Yt(t){var e=1;t=t.split(":");const n=[];for(;e>0&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function Xt(t,e,n,r){this.j=t,this.i=e,this.l=n,this.S=r||1,this.V=new wt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Jt}function Jt(){this.i=null,this.g="",this.h=!1}_(Wt,At),Wt.prototype.g=function(){return new XMLHttpRequest},Gt=new Wt;var Zt={},te={};function ee(t,e,n){t.M=1,t.A=xe(Te(e)),t.u=n,t.R=!0,ne(t,null)}function ne(t,e){t.F=Date.now(),oe(t),t.B=Te(t.A);var n=t.B,r=t.S;Array.isArray(r)||(r=[String(r)]),Be(n.i,"t",r),t.C=0,n=t.j.L,t.h=new Jt,t.g=Ln(t.j,n?e:null,!t.u),t.P>0&&(t.O=new vt(u(t.Y,t,t.g),t.P)),e=t.V,n=t.g,r=t.ba;var i="readystatechange";Array.isArray(i)||(i&&(bt[0]=i.toString()),i=bt);for(let s=0;s<i.length;s++){const t=nt(n,i[s],r||e.handleEvent,!1,e.h||e);if(!t)break;e.g[t.key]=t}e=t.J?H(t.J):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,e)):(t.v="GET",t.g.ea(t.B,t.v,null,e)),Lt(),jt(t.i,t.v,t.B,t.l,t.S,t.u)}function re(t){if(!ie(t))return t.g.la();const e=fn(t.g);if(""===e)return"";let n="";const r=e.length,i=4==hn(t.g);if(!t.h.i){if("undefined"===typeof TextDecoder)return le(t),ue(t),"";t.h.i=new o.TextDecoder}for(let s=0;s<r;s++)t.h.h=!0,n+=t.h.i.decode(e[s],{stream:!(i&&s==r-1)});return e.length=0,t.h.g+=n,t.C=0,t.h.g}function ie(t){return!!t.g&&("GET"==t.v&&2!=t.M&&t.j.Aa)}function se(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?te:(n=Number(e.substring(n,r)),isNaN(n)?Zt:(r+=1,r+n>e.length?te:(e=e.slice(r,r+n),t.C=r+n,e)))}function oe(t){t.T=Date.now()+t.H,ae(t,t.H)}function ae(t,e){if(null!=t.D)throw Error("WatchDog timer not null");t.D=Vt(u(t.aa,t),e)}function ce(t){t.D&&(o.clearTimeout(t.D),t.D=null)}function ue(t){0==t.j.I||t.K||kn(t.j,t)}function le(t){ce(t);var e=t.O;e&&"function"==typeof e.dispose&&e.dispose(),t.O=null,_t(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.dispose())}function he(t,e){try{var n=t.j;if(0!=n.I&&(n.g==t||me(n.h,t)))if(!t.L&&me(n.h,t)&&3==n.I){try{var r=n.Ba.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.v){if(n.g){if(!(n.g.F+3e3<t.F))break t;xn(n),yn(n)}An(n),Mt(18)}}else n.xa=i[1],0<n.xa-n.K&&i[2]<37500&&n.F&&0==n.A&&!n.C&&(n.C=Vt(u(n.Va,n),6e3));ge(n.h)<=1&&n.ta&&(n.ta=void 0)}else Rn(n,11)}else if((t.L||n.g==t)&&xn(n),!U(e))for(i=n.Ba.g.parse(e),e=0;e<i.length;e++){let u=i[e];const l=u[0];if(!(l<=n.K))if(n.K=l,u=u[1],2==n.I)if("c"==u[0]){n.M=u[1],n.ba=u[2];const e=u[3];null!=e&&(n.ka=e,n.j.info("VER="+n.ka));const i=u[4];null!=i&&(n.za=i,n.j.info("SVER="+n.za));const l=u[5];null!=l&&"number"===typeof l&&l>0&&(r=1.5*l,n.O=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(ye(s,s.h),s.h=null))}if(r.G){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.wa=t,Ie(r.J,r.G,t))}}n.I=3,n.l&&n.l.ra(),n.aa&&(n.T=Date.now()-t.F,n.j.info("Handshake RTT: "+n.T+"ms")),r=n;var o=t;if(r.na=Nn(r,r.L?r.ba:null,r.W),o.L){ve(r.h,o);var a=o,c=r.O;c&&(a.H=c),a.D&&(ce(a),oe(a)),r.g=o}else Sn(r);n.i.length>0&&wn(n)}else"stop"!=u[0]&&"close"!=u[0]||Rn(n,7);else 3==n.I&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Rn(n,7):mn(n):"noop"!=u[0]&&n.l&&n.l.qa(u),n.A=0)}Lt(4)}catch(l){}}Xt.prototype.ba=function(t){t=t.target;const e=this.O;e&&3==hn(t)?e.j():this.Y(t)},Xt.prototype.Y=function(t){try{if(t==this.g)t:{const a=hn(this.g),c=this.g.ya(),u=this.g.ca();if(!(a<3)&&(3!=a||this.g&&(this.h.h||this.g.la()||fn(this.g)))){this.K||4!=a||7==c||Lt(8==c||u<=0?3:2),ce(this);var e=this.g.ca();this.X=e;var n=re(this);if(this.o=200==e,$t(this.i,this.v,this.B,this.l,this.S,a,e),this.o){if(this.U&&!this.L){e:{if(this.g){var r,i=this.g;if((r=i.g?i.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(r)){var s=r;break e}}s=null}if(!(t=s)){this.o=!1,this.m=3,Mt(12),le(this),ue(this);break t}Bt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,he(this,t)}if(this.R){let e;for(t=!0;!this.K&&this.C<n.length;){if(e=se(this,n),e==te){4==a&&(this.m=4,Mt(14),t=!1),Bt(this.i,this.l,null,"[Incomplete Response]");break}if(e==Zt){this.m=4,Mt(15),Bt(this.i,this.l,n,"[Invalid Chunk]"),t=!1;break}Bt(this.i,this.l,e,null),he(this,e)}if(ie(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=a||0!=n.length||this.h.h||(this.m=1,Mt(16),t=!1),this.o=this.o&&t,t){if(n.length>0&&!this.W){this.W=!0;var o=this.j;o.g==this&&o.aa&&!o.P&&(o.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Cn(o),o.P=!0,Mt(11))}}else Bt(this.i,this.l,n,"[Invalid Chunked Response]"),le(this),ue(this)}else Bt(this.i,this.l,n,null),he(this,n);4==a&&le(this),this.o&&!this.K&&(4==a?kn(this.j,this):(this.o=!1,oe(this)))}else dn(this.g),400==e&&n.indexOf("Unknown SID")>0?(this.m=3,Mt(12)):(this.m=0,Mt(13)),le(this),ue(this)}}}catch(a){}},Xt.prototype.cancel=function(){this.K=!0,le(this)},Xt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(zt(this.i,this.B),2!=this.M&&(Lt(),Mt(17)),le(this),this.m=2,ue(this)):ae(this,this.T-t)};var fe=class{constructor(t,e){this.g=t,this.map=e}};function de(t){this.l=t||10,o.PerformanceNavigationTiming?(t=o.performance.getEntriesByType("navigation"),t=t.length>0&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function pe(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ge(t){return t.h?1:t.g?t.g.size:0}function me(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ye(t,e){t.g?t.g.add(e):t.h=e}function ve(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function we(t){if(null!=t.h)return t.i.concat(t.h.G);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.G);return e}return T(t.i)}de.prototype.cancel=function(){if(this.i=we(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var be=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _e(t,e){if(t){t=t.split("&");for(let n=0;n<t.length;n++){const r=t[n].indexOf("=");let i,s=null;r>=0?(i=t[n].substring(0,r),s=t[n].substring(r+1)):i=t[n],e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ee(t){let e;this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1,t instanceof Ee?(this.l=t.l,Se(this,t.j),this.o=t.o,this.g=t.g,Ae(this,t.u),this.h=t.h,Ce(this,ze(t.i)),this.m=t.m):t&&(e=String(t).match(be))?(this.l=!1,Se(this,e[1]||"",!0),this.o=ke(e[2]||""),this.g=ke(e[3]||"",!0),Ae(this,e[4]),this.h=ke(e[5]||"",!0),Ce(this,e[6]||"",!0),this.m=ke(e[7]||"")):(this.l=!1,this.i=new Fe(null,this.l))}function Te(t){return new Ee(t)}function Se(t,e,n){t.j=n?ke(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ae(t,e){if(e){if(e=Number(e),isNaN(e)||e<0)throw Error("Bad port number "+e);t.u=e}else t.u=null}function Ce(t,e,n){e instanceof Fe?(t.i=e,Ge(t.i,t.l)):(n||(e=Oe(e,Pe)),t.i=new Fe(e,t.l))}function Ie(t,e,n){t.i.set(e,n)}function xe(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ke(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Oe(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Re),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Re(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ee.prototype.toString=function(){const t=[];var e=this.j;e&&t.push(Oe(e,De,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(Oe(e,De,!0),"@"),t.push(Qt(n).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.u,null!=n&&t.push(":",String(n))),(n=this.h)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Oe(n,"/"==n.charAt(0)?Le:Ne,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",Oe(n,Me)),t.join("")},Ee.prototype.resolve=function(t){const e=Te(this);let n=!!t.j;n?Se(e,t.j):n=!!t.o,n?e.o=t.o:n=!!t.g,n?e.g=t.g:n=null!=t.u;var r=t.h;if(n)Ae(e,t.u);else if(n=!!t.h){if("/"!=r.charAt(0))if(this.g&&!this.h)r="/"+r;else{var i=e.h.lastIndexOf("/");-1!=i&&(r=e.h.slice(0,i+1)+r)}if(i=r,".."==i||"."==i)r="";else if(-1!=i.indexOf("./")||-1!=i.indexOf("/.")){r=0==i.lastIndexOf("/",0),i=i.split("/");const t=[];for(let e=0;e<i.length;){const n=i[e++];"."==n?r&&e==i.length&&t.push(""):".."==n?((t.length>1||1==t.length&&""!=t[0])&&t.pop(),r&&e==i.length&&t.push("")):(t.push(n),r=!0)}r=t.join("/")}else r=i}return n?e.h=r:n=""!==t.i.toString(),n?Ce(e,ze(t.i)):n=!!t.m,n&&(e.m=t.m),e};var De=/[#\/\?@]/g,Ne=/[#\?:]/g,Le=/[#\?]/g,Pe=/[#\?@]/g,Me=/#/g;function Fe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ve(t){t.g||(t.g=new Map,t.h=0,t.i&&_e(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function Ue(t,e){Ve(t),e=qe(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function je(t,e){return Ve(t),e=qe(t,e),t.g.has(e)}function $e(t,e){Ve(t);let n=[];if("string"===typeof e)je(t,e)&&(n=n.concat(t.g.get(qe(t,e))));else for(t=Array.from(t.g.values()),e=0;e<t.length;e++)n=n.concat(t[e]);return n}function Be(t,e,n){Ue(t,e),n.length>0&&(t.i=null,t.g.set(qe(t,e),T(n)),t.h+=n.length)}function ze(t){const e=new Fe;return e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),e}function qe(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Ge(t,e){e&&!t.j&&(Ve(t),t.i=null,t.g.forEach(function(t,e){const n=e.toLowerCase();e!=n&&(Ue(this,e),Be(this,n,t))},t)),t.j=e}function Ke(t,e){const n=new Ut;if(o.Image){const r=new Image;r.onload=v(We,n,"TestLoadImage: loaded",!0,e,r),r.onerror=v(We,n,"TestLoadImage: error",!1,e,r),r.onabort=v(We,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=v(We,n,"TestLoadImage: timeout",!1,e,r),o.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function He(t,e){const n=new Ut,r=new AbortController,i=setTimeout(()=>{r.abort(),We(n,"TestPingServer: timeout",!1,e)},1e4);fetch(t,{signal:r.signal}).then(t=>{clearTimeout(i),t.ok?We(n,"TestPingServer: ok",!0,e):We(n,"TestPingServer: server error",!1,e)}).catch(()=>{clearTimeout(i),We(n,"TestPingServer: error",!1,e)})}function We(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Qe(){this.g=new St}function Ye(t){this.i=t.Sb||null,this.h=t.ab||!1}function Xe(t,e){dt.call(this),this.H=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}function Je(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}function Ze(t){t.readyState=4,t.l=null,t.j=null,t.B=null,tn(t)}function tn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function en(t){let e="";return G(t,function(t,n){e+=n,e+=":",e+=t,e+="\r\n"}),e}function nn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=en(n),"string"===typeof t?null!=n&&Qt(n):Ie(t,e,n))}function rn(t){dt.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}t=Fe.prototype,t.add=function(t,e){Ve(this),this.i=null,t=qe(this,t);let n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Ve(this),this.g.forEach(function(n,r){n.forEach(function(n){t.call(e,n,r,this)},this)},this)},t.set=function(t,e){return Ve(this),this.i=null,t=qe(this,t),je(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=$e(this,t),t.length>0?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(let r=0;r<e.length;r++){var n=e[r];const i=Qt(n);n=$e(this,n);for(let e=0;e<n.length;e++){let r=i;""!==n[e]&&(r+="="+Qt(n[e])),t.push(r)}}return this.i=t.join("&")},_(Ye,At),Ye.prototype.g=function(){return new Xe(this.i,this.h)},_(Xe,dt),t=Xe.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=e,this.readyState=1,tn(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const e={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(e.body=t),(this.H||o).fetch(new Request(this.D,e)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&4!=this.readyState&&(this.g=!1,Ze(this)),this.readyState=0},t.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,tn(this)),this.g&&(this.readyState=3,tn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if("undefined"!==typeof o.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Je(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))},t.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.B.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ze(this):tn(this),3==this.readyState&&Je(this)}},t.Oa=function(t){this.g&&(this.response=this.responseText=t,Ze(this))},t.Na=function(t){this.g&&(this.response=t,Ze(this))},t.ga=function(){this.g&&Ze(this)},t.setRequestHeader=function(t,e){this.A.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Xe.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),_(rn,dt);var sn=/^https?$/i,on=["POST","PUT"];function an(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.o=5,cn(t),ln(t)}function cn(t){t.A||(t.A=!0,pt(t,"complete"),pt(t,"error"))}function un(t){if(t.h&&"undefined"!=typeof s)if(t.v&&4==hn(t))setTimeout(t.Ca.bind(t),0);else if(pt(t,"readystatechange"),4==hn(t)){t.h=!1;try{const s=t.ca();t:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===s){let e=String(t.D).match(be)[1]||null;!e&&o.self&&o.self.location&&(e=o.self.location.protocol.slice(0,-1)),r=!sn.test(e?e.toLowerCase():"")}n=r}if(n)pt(t,"complete"),pt(t,"success");else{t.o=6;try{var i=hn(t)>2?t.g.statusText:""}catch(a){i=""}t.l=i+" ["+t.ca()+"]",cn(t)}}finally{ln(t)}}}function ln(t,e){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const r=t.g;t.g=null,e||pt(t,"ready");try{r.onreadystatechange=null}catch(n){}}}function hn(t){return t.g?t.g.readyState:0}function fn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function dn(t){const e={};t=(t.g&&hn(t)>=2&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(U(t[r]))continue;var n=Yt(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}K(e,function(t){return t.join(", ")})}function pn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gn(t){this.za=0,this.i=[],this.j=new Ut,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=pn("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=pn("baseRetryDelayMs",5e3,t),this.Za=pn("retryDelaySeedMs",1e4,t),this.Ta=pn("forwardChannelMaxRetries",2,t),this.va=pn("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new de(t&&t.concurrentRequestLimit),this.Ba=new Qe,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}function mn(t){if(vn(t),3==t.I){var e=t.V++,n=Te(t.J);if(Ie(n,"SID",t.M),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),En(t,n),e=new Xt(t,t.j,e),e.M=2,e.A=xe(Te(n)),n=!1,o.navigator&&o.navigator.sendBeacon)try{n=o.navigator.sendBeacon(e.A.toString(),"")}catch(r){}!n&&o.Image&&((new Image).src=e.A,n=!0),n||(e.g=Ln(e.j,null),e.g.ea(e.A)),e.F=Date.now(),oe(e)}Dn(t)}function yn(t){t.g&&(Cn(t),t.g.cancel(),t.g=null)}function vn(t){yn(t),t.v&&(o.clearTimeout(t.v),t.v=null),xn(t),t.h.cancel(),t.m&&("number"===typeof t.m&&o.clearTimeout(t.m),t.m=null)}function wn(t){if(!pe(t.h)&&!t.m){t.m=!0;var e=t.Ea;R||L(),D||(R(),D=!0),N.add(e,t),t.D=0}}function bn(t,e){return!(ge(t.h)>=t.h.j-(t.m?1:0))&&(t.m?(t.i=e.G.concat(t.i),!0):!(1==t.I||2==t.I||t.D>=(t.Sa?0:t.Ta))&&(t.m=Vt(u(t.Ea,t,e),On(t,t.D)),t.D++,!0))}function _n(t,e){var n;n=e?e.l:t.V++;const r=Te(t.J);Ie(r,"SID",t.M),Ie(r,"RID",n),Ie(r,"AID",t.K),En(t,r),t.u&&t.o&&nn(r,t.u,t.o),n=new Xt(t,t.j,n,t.D+1),null===t.u&&(n.J=t.o),e&&(t.i=e.G.concat(t.i)),e=Tn(t,n,1e3),n.H=Math.round(.5*t.va)+Math.round(.5*t.va*Math.random()),ye(t.h,n),ee(n,r,e)}function En(t,e){t.H&&G(t.H,function(t,n){Ie(e,n,t)}),t.l&&G({},function(t,n){Ie(e,n,t)})}function Tn(t,e,n){n=Math.min(t.i.length,n);const r=t.l?u(t.l.Ka,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?n>0?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let c=!0;for(let u=0;u<n;u++){var s=i[u].g;const n=i[u].map;if(s-=e,s<0)e=Math.max(0,i[u].g-100),c=!1;else try{s="req"+s+"_"||0;try{var o=n instanceof Map?n:Object.entries(n);for(const[e,n]of o){let r=n;a(n)&&(r=Et(n)),t.push(s+e+"="+encodeURIComponent(r))}}catch(Z){throw t.push(s+"type="+encodeURIComponent("_badmap")),Z}}catch(Z){r&&r(n)}}if(c){o=t.join("&");break t}}o=void 0}return t=t.i.splice(0,n),e.G=t,o}function Sn(t){if(!t.g&&!t.v){t.Y=1;var e=t.Da;R||L(),D||(R(),D=!0),N.add(e,t),t.A=0}}function An(t){return!(t.g||t.v||t.A>=3)&&(t.Y++,t.v=Vt(u(t.Da,t),On(t,t.A)),t.A++,!0)}function Cn(t){null!=t.B&&(o.clearTimeout(t.B),t.B=null)}function In(t){t.g=new Xt(t,t.j,"rpc",t.Y),null===t.u&&(t.g.J=t.o),t.g.P=0;var e=Te(t.na);Ie(e,"RID","rpc"),Ie(e,"SID",t.M),Ie(e,"AID",t.K),Ie(e,"CI",t.F?"0":"1"),!t.F&&t.ia&&Ie(e,"TO",t.ia),Ie(e,"TYPE","xmlhttp"),En(t,e),t.u&&t.o&&nn(e,t.u,t.o),t.O&&(t.g.H=t.O);var n=t.g;t=t.ba,n.M=1,n.A=xe(Te(e)),n.u=null,n.R=!0,ne(n,t)}function xn(t){null!=t.C&&(o.clearTimeout(t.C),t.C=null)}function kn(t,e){var n=null;if(t.g==e){xn(t),Cn(t),t.g=null;var r=2}else{if(!me(t.h,e))return;n=e.G,ve(t.h,e),r=1}if(0!=t.I)if(e.o)if(1==r){n=e.u?e.u.length:0,e=Date.now()-e.F;var i=t.D;r=Dt(),pt(r,new Ft(r,n)),wn(t)}else Sn(t);else if(i=e.m,3==i||0==i&&e.X>0||!(1==r&&bn(t,e)||2==r&&An(t)))switch(n&&n.length>0&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Rn(t,5);break;case 4:Rn(t,10);break;case 3:Rn(t,6);break;default:Rn(t,2)}}function On(t,e){let n=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(n*=2),n*e}function Rn(t,e){if(t.j.info("Error code "+e),2==e){var n=u(t.bb,t),r=t.Ua;const e=!r;r=new Ee(r||"//www.google.com/images/cleardot.gif"),o.location&&"http"==o.location.protocol||Se(r,"https"),xe(r),e?Ke(r.toString(),n):He(r.toString(),n)}else Mt(2);t.I=0,t.l&&t.l.pa(e),Dn(t),vn(t)}function Dn(t){if(t.I=0,t.ja=[],t.l){const e=we(t.h);0==e.length&&0==t.i.length||(S(t.ja,e),S(t.ja,t.i),t.h.i.length=0,T(t.i),t.i.length=0),t.l.oa()}}function Nn(t,e,n){var r=n instanceof Ee?Te(n):new Ee(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Ae(r,r.u);else{var i=o.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;const t=new Ee(null);r&&Se(t,r),e&&(t.g=e),i&&Ae(t,i),n&&(t.h=n),r=t}return n=t.G,e=t.wa,n&&e&&Ie(r,n,e),Ie(r,"VER",t.ka),En(t,r),r}function Ln(t,e,n){if(e&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Aa&&!t.ma?new rn(new Ye({ab:n})):new rn(t.ma),e.Fa(t.L),e}function Pn(){}function Mn(){}function Fn(t,e){dt.call(this),this.g=new gn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.sa&&(t?t["X-WebChannel-Client-Profile"]=e.sa:t={"X-WebChannel-Client-Profile":e.sa}),this.g.U=t,(t=e&&e.Qb)&&!U(t)&&(this.g.u=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!U(e)&&(this.g.G=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new jn(this)}function Vn(t){xt.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Un(){kt.call(this),this.status=1}function jn(t){this.g=t}t=rn.prototype,t.Fa=function(t){this.H=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Gt.g(),this.g.onreadystatechange=E(u(this.Ca,this));try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(s){return void an(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),i=o.FormData&&t instanceof o.FormData,!(Array.prototype.indexOf.call(on,e,void 0)>=0)||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(s){an(this,s)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,pt(this,"complete"),pt(this,"abort"),ln(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ln(this,!0)),rn.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?un(this):this.Xa())},t.Xa=function(){un(this)},t.isActive=function(){return!!this.g},t.ca=function(){try{return hn(this)>2?this.g.status:-1}catch(t){return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.La=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Tt(e)}},t.ya=function(){return this.o},t.Ha=function(){return"string"===typeof this.l?this.l:String(this.l)},t=gn.prototype,t.ka=8,t.I=1,t.connect=function(t,e,n,r){Mt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.J=Nn(this,null,this.W),wn(this)},t.Ea=function(t){if(this.m)if(this.m=null,1==this.I){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Xt(this,this.j,t);let s=this.o;if(this.U&&(s?(s=H(s),Q(s,this.U)):s=this.U),null!==this.u||this.R||(i.J=s,s=null),this.S)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,e>4096){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Tn(this,i,e),n=Te(this.J),Ie(n,"RID",t),Ie(n,"CVER",22),this.G&&Ie(n,"X-HTTP-Session-Id",this.G),En(this,n),s&&(this.R?e="headers="+Qt(en(s))+"&"+e:this.u&&nn(n,this.u,s)),ye(this.h,i),this.Ra&&Ie(n,"TYPE","init"),this.S?(Ie(n,"$req",e),Ie(n,"SID","null"),i.U=!0,ee(i,n,null)):ee(i,n,e),this.I=2}}else 3==this.I&&(t?_n(this,t):0==this.i.length||pe(this.h)||_n(this))},t.Da=function(){if(this.v=null,In(this),this.aa&&!(this.P||null==this.g||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=Vt(u(this.Wa,this),t)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Mt(10),yn(this),In(this))},t.Va=function(){null!=this.C&&(this.C=null,yn(this),An(this),Mt(19))},t.bb=function(t){t?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=Pn.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){},Mn.prototype.g=function(t,e){return new Fn(t,e)},_(Fn,dt),Fn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Fn.prototype.close=function(){mn(this.g)},Fn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Et(t),t=n);e.i.push(new fe(e.Ya++,t)),3==e.I&&wn(e)},Fn.prototype.N=function(){this.g.l=null,delete this.j,mn(this.g),delete this.g,Fn.Z.N.call(this)},_(Vn,xt),_(Un,kt),_(jn,Pn),jn.prototype.ra=function(){pt(this.g,"a")},jn.prototype.qa=function(t){pt(this.g,new Vn(t))},jn.prototype.pa=function(t){pt(this.g,new Un)},jn.prototype.oa=function(){pt(this.g,"b")},Mn.prototype.createWebChannel=Mn.prototype.g,Fn.prototype.send=Fn.prototype.o,Fn.prototype.open=Fn.prototype.m,Fn.prototype.close=Fn.prototype.close,y=b.createWebChannelTransport=function(){return new Mn},m=b.getStatEventTarget=function(){return Dt()},g=b.Event=Ot,p=b.Stat={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Kt.NO_ERROR=0,Kt.TIMEOUT=8,Kt.HTTP_ERROR=6,d=b.ErrorCode=Kt,Ht.COMPLETE="complete",f=b.EventType=Ht,Ct.EventType=It,It.OPEN="a",It.CLOSE="b",It.ERROR="c",It.MESSAGE="d",dt.prototype.listen=dt.prototype.J,h=b.WebChannel=Ct,b.FetchXmlHttpFactory=Ye,rn.prototype.listenOnce=rn.prototype.K,rn.prototype.getLastError=rn.prototype.Ha,rn.prototype.getLastErrorCode=rn.prototype.ya,rn.prototype.getStatus=rn.prototype.ca,rn.prototype.getResponseJson=rn.prototype.La,rn.prototype.getResponseText=rn.prototype.la,rn.prototype.send=rn.prototype.ea,rn.prototype.setWithCredentials=rn.prototype.Fa,l=b.XhrIo=rn}).apply("undefined"!==typeof w?w:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_.UNAUTHENTICATED=new _(null),_.GOOGLE_CREDENTIALS=new _("google-credentials-uid"),_.FIRST_PARTY=new _("first-party-uid"),_.MOCK_USER=new _("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let E="12.8.0";function T(t){E=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=new v.Vy("@firebase/firestore");function A(){return S.logLevel}function C(t,...e){if(S.logLevel<=v.$b.DEBUG){const n=e.map(k);S.debug(`Firestore (${E}): ${t}`,...n)}}function I(t,...e){if(S.logLevel<=v.$b.ERROR){const n=e.map(k);S.error(`Firestore (${E}): ${t}`,...n)}}function x(t,...e){if(S.logLevel<=v.$b.WARN){const n=e.map(k);S.warn(`Firestore (${E}): ${t}`,...n)}}function k(t){if("string"==typeof t)return t;try{return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e,n){let r="Unexpected state";"string"==typeof e?r=e:n=e,R(t,r,n)}function R(t,e,n){let r=`FIRESTORE (${E}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(t){r+=" CONTEXT: "+n}throw I(r),new Error(r)}function D(t,e,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,t||R(e,i,r)}function N(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends a.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class V{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(_.UNAUTHENTICATED))}shutdown(){}}class U{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class j{constructor(t){this.t=t,this.currentUser=_.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){D(void 0===this.o,42304);let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new M;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new M,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new M)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(D("string"==typeof e.accessToken,31837,{l:e}),new F(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return D(null===t||"string"==typeof t,2055,{h:t}),new _(t)}}class ${constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=_.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class B{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new $(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(_.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class z{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class q{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,(0,s.xZ)(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){D(void 0===this.o,3512);const n=t=>{null!=t.error&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.m;return this.m=t.token,C("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable(()=>n(e))};const r=t=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(t=>r(t)),setTimeout(()=>{if(!this.appCheck){const t=this.V.getImmediate({optional:!0});t?r(t):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new z(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(D("string"==typeof t.token,44558,{tokenResult:t}),this.m=t.token,new z(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(256/62);let n="";for(;n.length<20;){const r=G(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%62))}return n}}function H(t,e){return t<e?-1:t>e?1:0}function W(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.charAt(r),i=e.charAt(r);if(n!==i)return X(n)===X(i)?H(n,i):X(n)?1:-1}return H(t.length,e.length)}const Q=55296,Y=57343;function X(t){const e=t.charCodeAt(0);return e>=Q&&e<=Y}function J(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Z="__name__";class tt{constructor(t,e,n){void 0===e?e=0:e>t.length&&O(637,{offset:e,range:t.length}),void 0===n?n=t.length-e:n>t.length-e&&O(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===tt.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof tt?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=tt.compareSegments(t.get(r),e.get(r));if(0!==n)return n}return H(t.length,e.length)}static compareSegments(t,e){const n=tt.isNumericId(t),r=tt.isNumericId(e);return n&&!r?-1:!n&&r?1:n&&r?tt.extractNumericId(t).compare(tt.extractNumericId(e)):W(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return r.fromString(t.substring(4,t.length-2))}}class et extends tt{construct(t,e,n){return new et(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new P(L.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new et(e)}static emptyPath(){return new et([])}}const nt=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class rt extends tt{construct(t,e,n){return new rt(t,e,n)}static isValidIdentifier(t){return nt.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),rt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Z}static keyField(){return new rt([Z])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new P(L.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new P(L.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new P(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new P(L.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new rt(e)}static emptyPath(){return new rt([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t){this.path=t}static fromPath(t){return new it(et.fromString(t))}static fromName(t){return new it(et.fromString(t).popFirst(5))}static empty(){return new it(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===et.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return et.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new it(new et(t.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t,e,n){if(!n)throw new P(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ot(t,e,n,r){if(!0===e&&!0===r)throw new P(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function at(t){if(!it.isDocumentKey(t))throw new P(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ct(t){if(it.isDocumentKey(t))throw new P(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ut(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function lt(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":O(12329,{type:typeof t})}function ht(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lt(t);throw new P(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ft(t,e){const n={typeString:t};return e&&(n.value=e),n}function dt(t,e){if(!ut(t))throw new P(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(void 0!==s&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new P(L.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pt=-62135596800,gt=1e6;class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(t){return mt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*gt);return new mt(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new P(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new P(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<pt)throw new P(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new P(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gt}_compareTo(t){return this.seconds===t.seconds?H(this.nanoseconds,t.nanoseconds):H(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:mt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(dt(t,mt._jsonSchema))return new mt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-pt;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}mt._jsonSchemaVersion="firestore/timestamp/1.0",mt._jsonSchema={type:ft("string",mt._jsonSchemaVersion),seconds:ft("number"),nanoseconds:ft("number")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yt{static fromTimestamp(t){return new yt(t)}static min(){return new yt(new mt(0,0))}static max(){return new yt(new mt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=-1;class wt{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}wt.UNKNOWN_ID=-1;function bt(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=yt.fromTimestamp(1e9===r?new mt(n+1,0):new mt(n,r));return new Et(i,it.empty(),e)}function _t(t){return new Et(t.readTime,t.key,vt)}class Et{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Et(yt.min(),it.empty(),vt)}static max(){return new Et(yt.max(),it.empty(),vt)}}function Tt(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=it.comparator(t.documentKey,e.documentKey),0!==n?n:H(t.largestBatchId,e.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const St="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class At{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==St)throw t;C("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new It((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof It?e:It.resolve(e)}catch(t){return It.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):It.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):It.reject(e)}static resolve(t){return new It((e,n)=>{e(t)})}static reject(t){return new It((e,n)=>{n(t)})}static waitFor(t){return new It((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=It.resolve(!1);for(const n of t)e=e.next(t=>t?It.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}static mapArray(t,e){return new It((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next(t=>{s[c]=t,++o,o===i&&n(s)},t=>r(t))}})}static doWhile(t,e){return new It((n,r)=>{const i=()=>{!0===t()?e().next(()=>{i()},r):n()};i()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function kt(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ae(t),this.ue=t=>e.writeSequenceNumber(t))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ot.ce=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=-1;function Dt(t){return null==t}function Nt(t){return 0===t&&1/t==-1/0}function Lt(t){return"number"==typeof t&&Number.isInteger(t)&&!Nt(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pt="";function Mt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Vt(e)),e=Ft(t.get(n),e);return Vt(e)}function Ft(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case Pt:n+="";break;default:n+=e}}return n}function Vt(t){return t+Pt+""}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ut="remoteDocuments",jt="owner",$t="mutationQueues",Bt="mutations";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zt="documentMutations",qt="remoteDocumentsV14",Gt="remoteDocumentGlobal",Kt="targets",Ht="targetDocuments",Wt="targetGlobal",Qt="collectionParents",Yt="clientMetadata",Xt="bundles",Jt="namedQueries",Zt="indexConfiguration",te="indexState",ee="indexEntries",ne="documentOverlays",re="globals",ie=[$t,Bt,zt,Ut,Kt,jt,Wt,Ht,Yt,Gt,Qt,Xt,Jt],se=[$t,Bt,zt,qt,Kt,jt,Wt,Ht,Yt,Gt,Qt,Xt,Jt,ne],oe=se,ae=[...oe,Zt,te,ee];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ce(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ue(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function le(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e){this.comparator=t,this.root=e||de.EMPTY}insert(t,e){return new he(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,de.BLACK,null,null))}remove(t){return new he(this.comparator,this.root.remove(t,this.comparator).copy(null,null,de.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new fe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new fe(this.root,t,this.comparator,!1)}getReverseIterator(){return new fe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new fe(this.root,t,this.comparator,!0)}}class fe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class de{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:de.RED,this.left=null!=r?r:de.EMPTY,this.right=null!=i?i:de.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new de(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return de.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return de.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,de.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,de.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw O(43730,{key:this.key,value:this.value});if(this.right.isRed())throw O(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw O(27949);return t+(this.isRed()?0:1)}}de.EMPTY=null,de.RED=!0,de.BLACK=!1,de.EMPTY=new class{constructor(){this.size=0}get key(){throw O(57766)}get value(){throw O(16141)}get color(){throw O(16727)}get left(){throw O(29726)}get right(){throw O(36894)}copy(t,e,n,r,i){return this}insert(t,e,n){return new de(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe{constructor(t){this.comparator=t,this.data=new he(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ge(this.data.getIterator())}getIteratorFrom(t){return new ge(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof pe))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new pe(this.comparator);return e.data=t,e}}class ge{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(t){this.fields=t,t.sort(rt.comparator)}static empty(){return new me([])}unionWith(t){let e=new pe(rt.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new me(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return J(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new ye("Invalid base64 string: "+t):t}}(t);return new ve(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ve(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return H(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const we=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function be(t){if(D(!!t,39018),"string"==typeof t){let e=0;const n=we.exec(t);if(D(!!n,46558,{timestamp:t}),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ee(t){return"string"==typeof t?ve.fromBase64String(t):ve.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te="server_timestamp",Se="__type__",Ae="__previous_value__",Ce="__local_write_time__";function Ie(t){const e=(t?.mapValue?.fields||{})[Se]?.stringValue;return e===Te}function xe(t){const e=t.mapValue.fields[Ae];return Ie(e)?xe(e):e}function ke(t){const e=be(t.mapValue.fields[Ce].timestampValue);return new mt(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t,e,n,r,i,s,o,a,c,u,l){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c,this.isUsingEmulator=u,this.apiKey=l}}const Re="(default)";class De{constructor(t,e){this.projectId=t,this.database=e||Re}static empty(){return new De("","")}get isDefaultDatabase(){return this.database===Re}isEqual(t){return t instanceof De&&t.projectId===this.projectId&&t.database===this.database}}function Ne(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new P(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new De(t.options.projectId,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le="__type__",Pe="__max__",Me={mapValue:{fields:{__type__:{stringValue:Pe}}}},Fe="__vector__",Ve="value";function Ue(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ie(t)?4:en(t)?9007199254740991:Ze(t)?10:11:O(28295,{value:t})}function je(t,e){if(t===e)return!0;const n=Ue(t);if(n!==Ue(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ke(t).isEqual(ke(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=be(t.timestampValue),r=be(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return Ee(t.bytesValue).isEqual(Ee(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return _e(t.geoPointValue.latitude)===_e(e.geoPointValue.latitude)&&_e(t.geoPointValue.longitude)===_e(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return _e(t.integerValue)===_e(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=_e(t.doubleValue),r=_e(e.doubleValue);return n===r?Nt(n)===Nt(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return J(t.arrayValue.values||[],e.arrayValue.values||[],je);case 10:case 11:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(ce(n)!==ce(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!je(n[i],r[i])))return!1;return!0}(t,e);default:return O(52216,{left:t})}}function $e(t,e){return void 0!==(t.values||[]).find(t=>je(t,e))}function Be(t,e){if(t===e)return 0;const n=Ue(t),r=Ue(e);if(n!==r)return H(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return H(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=_e(t.integerValue||t.doubleValue),r=_e(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ze(t.timestampValue,e.timestampValue);case 4:return ze(ke(t),ke(e));case 5:return W(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ee(t),r=Ee(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=H(n[i],r[i]);if(0!==t)return t}return H(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=H(_e(t.latitude),_e(e.latitude));return 0!==n?n:H(_e(t.longitude),_e(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return qe(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=e.fields||{},i=n[Ve]?.arrayValue,s=r[Ve]?.arrayValue,o=H(i?.values?.length||0,s?.values?.length||0);return 0!==o?o:qe(i,s)}(t.mapValue,e.mapValue);case 11:return function(t,e){if(t===Me.mapValue&&e===Me.mapValue)return 0;if(t===Me.mapValue)return 1;if(e===Me.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=W(r[o],s[o]);if(0!==t)return t;const e=Be(n[r[o]],i[s[o]]);if(0!==e)return e}return H(r.length,s.length)}(t.mapValue,e.mapValue);default:throw O(23264,{he:n})}}function ze(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return H(t,e);const n=be(t),r=be(e),i=H(n.seconds,r.seconds);return 0!==i?i:H(n.nanos,r.nanos)}function qe(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=Be(n[i],r[i]);if(t)return t}return H(n.length,r.length)}function Ge(t){return Ke(t)}function Ke(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=be(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return Ee(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return it.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ke(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Ke(t.fields[i])}`;return n+"}"}(t.mapValue):O(61005,{value:t})}function He(t){switch(Ue(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=xe(t);return e?16+He(e):16;case 5:return 2*t.stringValue.length;case 6:return Ee(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(t){return(t.values||[]).reduce((t,e)=>t+He(e),0)}(t.arrayValue);case 10:case 11:return function(t){let e=0;return ue(t.fields,(t,n)=>{e+=t.length+He(n)}),e}(t.mapValue);default:throw O(13486,{value:t})}}function We(t){return!!t&&"integerValue"in t}function Qe(t){return!!t&&"arrayValue"in t}function Ye(t){return!!t&&"nullValue"in t}function Xe(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Je(t){return!!t&&"mapValue"in t}function Ze(t){const e=(t?.mapValue?.fields||{})[Le]?.stringValue;return e===Fe}function tn(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ue(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=tn(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=tn(t.arrayValue.values[n]);return e}return{...t}}function en(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===Pe}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn{constructor(t){this.value=t}static empty(){return new nn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Je(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=tn(e)}setAll(t){let e=rt.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=tn(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Je(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return je(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Je(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){ue(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new nn(tn(this.value))}}function rn(t){const e=[];return ue(t.fields,(t,n)=>{const r=new rt([t]);if(Je(n)){const t=rn(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new me(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class sn{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new sn(t,0,yt.min(),yt.min(),yt.min(),nn.empty(),0)}static newFoundDocument(t,e,n,r){return new sn(t,1,e,yt.min(),n,r,0)}static newNoDocument(t,e){return new sn(t,2,e,yt.min(),yt.min(),nn.empty(),0)}static newUnknownDocument(t,e){return new sn(t,3,e,yt.min(),yt.min(),nn.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(yt.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=nn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=nn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=yt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof sn&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new sn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t,e){this.position=t,this.inclusive=e}}function an(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?it.comparator(it.fromName(o.referenceValue),n.key):Be(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function cn(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!je(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(t,e="asc"){this.field=t,this.dir=e}}function ln(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{}class fn extends hn{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new bn(t,e,n):"array-contains"===e?new Sn(t,n):"in"===e?new An(t,n):"not-in"===e?new Cn(t,n):"array-contains-any"===e?new In(t,n):new fn(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new _n(t,n):new En(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&void 0===e.nullValue&&this.matchesComparison(Be(e,this.value)):null!==e&&Ue(this.value)===Ue(e)&&this.matchesComparison(Be(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return O(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends hn{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new dn(t,e)}matches(t){return pn(this)?void 0===this.filters.find(e=>!e.matches(t)):void 0!==this.filters.find(e=>e.matches(t))}getFlattenedFilters(){return null!==this.Pe||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function pn(t){return"and"===t.op}function gn(t){return mn(t)&&pn(t)}function mn(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function yn(t){if(t instanceof fn)return t.field.canonicalString()+t.op.toString()+Ge(t.value);if(gn(t))return t.filters.map(t=>yn(t)).join(",");{const e=t.filters.map(t=>yn(t)).join(",");return`${t.op}(${e})`}}function vn(t,e){return t instanceof fn?function(t,e){return e instanceof fn&&t.op===e.op&&t.field.isEqual(e.field)&&je(t.value,e.value)}(t,e):t instanceof dn?function(t,e){return e instanceof dn&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce((t,n,r)=>t&&vn(n,e.filters[r]),!0)}(t,e):void O(19439)}function wn(t){return t instanceof fn?function(t){return`${t.field.canonicalString()} ${t.op} ${Ge(t.value)}`}(t):t instanceof dn?function(t){return t.op.toString()+" {"+t.getFilters().map(wn).join(" ,")+"}"}(t):"Filter"}class bn extends fn{constructor(t,e,n){super(t,e,n),this.key=it.fromName(n.referenceValue)}matches(t){const e=it.comparator(t.key,this.key);return this.matchesComparison(e)}}class _n extends fn{constructor(t,e){super(t,"in",e),this.keys=Tn("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class En extends fn{constructor(t,e){super(t,"not-in",e),this.keys=Tn("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Tn(t,e){return(e.arrayValue?.values||[]).map(t=>it.fromName(t.referenceValue))}class Sn extends fn{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Qe(e)&&$e(e.arrayValue,this.value)}}class An extends fn{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&$e(this.value.arrayValue,e)}}class Cn extends fn{constructor(t,e){super(t,"not-in",e)}matches(t){if($e(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&void 0===e.nullValue&&!$e(this.value.arrayValue,e)}}class In extends fn{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Qe(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>$e(this.value.arrayValue,t))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.Te=null}}function kn(t,e=null,n=[],r=[],i=null,s=null,o=null){return new xn(t,e,n,r,i,s,o)}function On(t){const e=N(t);if(null===e.Te){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>yn(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),Dt(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(t=>Ge(t)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(t=>Ge(t)).join(",")),e.Te=t}return e.Te}function Rn(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ln(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vn(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cn(t.startAt,e.startAt)&&cn(t.endAt,e.endAt)}function Dn(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nn{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Ln(t,e,n,r,i,s,o,a){return new Nn(t,e,n,r,i,s,o,a)}function Pn(t){return new Nn(t)}function Mn(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Fn(t){return it.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}function Vn(t){return null!==t.collectionGroup}function Un(t){const e=N(t);if(null===e.Ie){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc",r=function(t){let e=new pe(rt.comparator);return t.filters.forEach(t=>{t.getFlattenedFilters().forEach(t=>{t.isInequality()&&(e=e.add(t.field))})}),e}(e);r.forEach(r=>{t.has(r.canonicalString())||r.isKeyField()||e.Ie.push(new un(r,n))}),t.has(rt.keyField().canonicalString())||e.Ie.push(new un(rt.keyField(),n))}return e.Ie}function jn(t){const e=N(t);return e.Ee||(e.Ee=$n(e,Un(t))),e.Ee}function $n(t,e){if("F"===t.limitType)return kn(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(t=>{const e="desc"===t.dir?"asc":"desc";return new un(t.field,e)});const n=t.endAt?new on(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new on(t.startAt.position,t.startAt.inclusive):null;return kn(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Bn(t,e,n){return new Nn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function zn(t,e){return Rn(jn(t),jn(e))&&t.limitType===e.limitType}function qn(t){return`${On(jn(t))}|lt:${t.limitType}`}function Gn(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>wn(t)).join(", ")}]`),Dt(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(t=>Ge(t)).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(t=>Ge(t)).join(",")),`Target(${e})`}(jn(t))}; limitType=${t.limitType})`}function Kn(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):it.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of Un(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=an(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Un(t),e))&&!(t.endAt&&!function(t,e,n){const r=an(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Un(t),e))}(t,e)}function Hn(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Wn(t){return(e,n)=>{let r=!1;for(const i of Un(t)){const t=Qn(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Qn(t,e,n){const r=t.field.isKeyField()?it.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?Be(r,i):O(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return O(19790,{direction:t.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){ue(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return le(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new he(it.comparator);function Jn(){return Xn}const Zn=new he(it.comparator);function tr(...t){let e=Zn;for(const n of t)e=e.insert(n.key,n);return e}function er(t){let e=Zn;return t.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function nr(){return ir()}function rr(){return ir()}function ir(){return new Yn(t=>t.toString(),(t,e)=>t.isEqual(e))}const sr=new he(it.comparator),or=new pe(it.comparator);function ar(...t){let e=or;for(const n of t)e=e.add(n);return e}const cr=new pe(H);function ur(){return cr}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Nt(e)?"-0":e}}function hr(t){return{integerValue:""+t}}function fr(t,e){return Lt(e)?hr(e):lr(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(){this._=void 0}}function pr(t,e,n){return t instanceof yr?function(t,e){const n={fields:{[Se]:{stringValue:Te},[Ce]:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&Ie(e)&&(e=xe(e)),e&&(n.fields[Ae]=e),{mapValue:n}}(n,e):t instanceof vr?wr(t,e):t instanceof br?_r(t,e):function(t,e){const n=mr(t,e),r=Tr(n)+Tr(t.Ae);return We(n)&&We(t.Ae)?hr(r):lr(t.serializer,r)}(t,e)}function gr(t,e,n){return t instanceof vr?wr(t,e):t instanceof br?_r(t,e):n}function mr(t,e){return t instanceof Er?function(t){return We(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class yr extends dr{}class vr extends dr{constructor(t){super(),this.elements=t}}function wr(t,e){const n=Sr(e);for(const r of t.elements)n.some(t=>je(t,r))||n.push(r);return{arrayValue:{values:n}}}class br extends dr{constructor(t){super(),this.elements=t}}function _r(t,e){let n=Sr(e);for(const r of t.elements)n=n.filter(t=>!je(t,r));return{arrayValue:{values:n}}}class Er extends dr{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function Tr(t){return _e(t.integerValue||t.doubleValue)}function Sr(t){return Qe(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e){this.field=t,this.transform=e}}function Cr(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof vr&&e instanceof vr||t instanceof br&&e instanceof br?J(t.elements,e.elements,je):t instanceof Er&&e instanceof Er?je(t.Ae,e.Ae):t instanceof yr&&e instanceof yr}(t.transform,e.transform)}class Ir{constructor(t,e){this.version=t,this.transformResults=e}}class xr{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xr}static exists(t){return new xr(void 0,t)}static updateTime(t){return new xr(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function kr(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Or{}function Rr(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new $r(t.key,xr.none()):new Mr(t.key,t.data,xr.none());{const n=t.data,r=nn.empty();let i=new pe(rt.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Fr(t.key,r,new me(i.toArray()),xr.none())}}function Dr(t,e,n){t instanceof Mr?function(t,e,n){const r=t.value.clone(),i=Ur(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Fr?function(t,e,n){if(!kr(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ur(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Vr(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Nr(t,e,n,r){return t instanceof Mr?function(t,e,n,r){if(!kr(t.precondition,e))return n;const i=t.value.clone(),s=jr(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fr?function(t,e,n,r){if(!kr(t.precondition,e))return n;const i=jr(t.fieldTransforms,r,e),s=e.data;return s.setAll(Vr(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map(t=>t.field))}(t,e,n,r):function(t,e,n){return kr(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Lr(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=mr(r.transform,t||null);null!=i&&(null===n&&(n=nn.empty()),n.set(r.field,i))}return n||null}function Pr(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&J(t,e,(t,e)=>Cr(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mr extends Or{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Fr extends Or{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vr(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ur(t,e,n){const r=new Map;D(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,gr(o,a,n[i]))}return r}function jr(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,pr(t,s,e))}return r}class $r extends Or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Br extends Or{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Dr(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Nr(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Nr(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=rr();return this.mutations.forEach(r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Rr(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(yt.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),ar())}isEqual(t){return this.batchId===t.batchId&&J(this.mutations,t.mutations,(t,e)=>Pr(t,e))&&J(this.baseMutations,t.baseMutations,(t,e)=>Pr(t,e))}}class qr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){D(t.mutations.length===n.length,58842,{me:t.mutations.length,fe:n.length});let r=function(){return sr}();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new qr(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kr{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Hr,Wr;function Qr(t){switch(t){case L.OK:return O(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return O(15467,{code:t})}}function Yr(t){if(void 0===t)return I("GRPC error has no .code"),L.UNKNOWN;switch(t){case Hr.OK:return L.OK;case Hr.CANCELLED:return L.CANCELLED;case Hr.UNKNOWN:return L.UNKNOWN;case Hr.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Hr.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Hr.INTERNAL:return L.INTERNAL;case Hr.UNAVAILABLE:return L.UNAVAILABLE;case Hr.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Hr.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Hr.NOT_FOUND:return L.NOT_FOUND;case Hr.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Hr.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Hr.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Hr.ABORTED:return L.ABORTED;case Hr.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Hr.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Hr.DATA_LOSS:return L.DATA_LOSS;default:return O(39323,{code:t})}}(Wr=Hr||(Hr={}))[Wr.OK=0]="OK",Wr[Wr.CANCELLED=1]="CANCELLED",Wr[Wr.UNKNOWN=2]="UNKNOWN",Wr[Wr.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Wr[Wr.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Wr[Wr.NOT_FOUND=5]="NOT_FOUND",Wr[Wr.ALREADY_EXISTS=6]="ALREADY_EXISTS",Wr[Wr.PERMISSION_DENIED=7]="PERMISSION_DENIED",Wr[Wr.UNAUTHENTICATED=16]="UNAUTHENTICATED",Wr[Wr.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Wr[Wr.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Wr[Wr.ABORTED=10]="ABORTED",Wr[Wr.OUT_OF_RANGE=11]="OUT_OF_RANGE",Wr[Wr.UNIMPLEMENTED=12]="UNIMPLEMENTED",Wr[Wr.INTERNAL=13]="INTERNAL",Wr[Wr.UNAVAILABLE=14]="UNAVAILABLE",Wr[Wr.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xr=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jr(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zr=new r([4294967295,4294967295],0);function ti(t){const e=Jr().encode(t),n=new i;return n.update(e),new Uint8Array(n.digest())}function ei(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new r([n,i],0),new r([s,o],0)]}class ni{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ri(`Invalid padding: ${e}`);if(n<0)throw new ri(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new ri(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new ri(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=r.fromNumber(this.ge)}ye(t,e,n){let i=t.add(e.multiply(r.fromNumber(n)));return 1===i.compare(Zr)&&(i=new r([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.ge)return!1;const e=ti(t),[n,r]=ei(e);for(let i=0;i<this.hashCount;i++){const t=this.ye(n,r,i);if(!this.we(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new ni(i,r,e);return n.forEach(t=>s.insert(t)),s}insert(t){if(0===this.ge)return;const e=ti(t),[n,r]=ei(e);for(let i=0;i<this.hashCount;i++){const t=this.ye(n,r,i);this.be(t)}}be(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,si.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new ii(yt.min(),r,new he(H),Jn(),ar())}}class si{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new si(n,e,ar(),ar(),ar())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(t,e,n,r){this.Se=t,this.removedTargetIds=e,this.key=n,this.De=r}}class ai{constructor(t,e){this.targetId=t,this.Ce=e}}class ci{constructor(t,e,n=ve.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class ui{constructor(){this.ve=0,this.Fe=fi(),this.Me=ve.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return 0!==this.ve}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=ar(),e=ar(),n=ar();return this.Fe.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:O(38017,{changeType:i})}}),new si(this.Me,this.xe,t,e,n)}Ke(){this.Oe=!1,this.Fe=fi()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,D(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class li{constructor(t){this.Ge=t,this.ze=new Map,this.je=Jn(),this.He=hi(),this.Je=hi(),this.Ze=new he(H)}Xe(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const n=this.nt(e);switch(t.state){case 0:this.rt(e)&&n.Le(t.resumeToken);break;case 1:n.We(),n.Ne||n.Ke(),n.Le(t.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(n.Qe(),n.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),n.Le(t.resumeToken));break;default:O(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((t,n)=>{this.rt(n)&&e(n)})}st(t){const e=t.targetId,n=t.Ce.count,r=this.ot(e);if(r){const i=r.target;if(Dn(i))if(0===n){const t=new it(i.path);this.et(e,t,sn.newNoDocument(t,yt.min()))}else D(1===n,20013,{expectedCount:n});else{const r=this._t(e);if(r!==n){const n=this.ut(t),i=n?this.ct(n,t,r):1;if(0!==i){this.it(e);const t=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,t)}Xr?.lt(function(t,e,n,r,i){const s={localCacheCount:t,existenceFilterCount:e.count,databaseId:n.database,projectId:n.projectId},o=e.unchangedNames;return o&&(s.bloomFilter={applied:0===i,hashCount:o?.hashCount??0,bitmapLength:o?.bits?.bitmap?.length??0,padding:o?.bits?.padding??0,mightContain:t=>r?.mightContain(t)??!1}),s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r,t.Ce,this.Ge.ht(),n,i))}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=e;let s,o;try{s=Ee(n).toUint8Array()}catch(t){if(t instanceof ye)return x("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw t}try{o=new ni(s,r,i)}catch(t){return x(t instanceof ri?"BloomFilter error: ":"Applying bloom filter failed: ",t),null}return 0===o.ge?null:o}ct(t,e,n){return e.Ce.count===n-this.Pt(t,e.targetId)?0:2}Pt(t,e){const n=this.Ge.getRemoteKeysForTarget(e);let r=0;return n.forEach(n=>{const i=this.Ge.ht(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;t.mightContain(s)||(this.et(e,n,null),r++)}),r}Tt(t){const e=new Map;this.ze.forEach((n,r)=>{const i=this.ot(r);if(i){if(n.current&&Dn(i.target)){const e=new it(i.target.path);this.It(e).has(r)||this.Et(r,e)||this.et(r,e,sn.newNoDocument(e,t))}n.Be&&(e.set(r,n.ke()),n.Ke())}});let n=ar();this.Je.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.ot(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))}),this.je.forEach((e,n)=>n.setReadTime(t));const r=new ii(t,e,this.Ze,this.je,n);return this.je=Jn(),this.He=hi(),this.Je=hi(),this.Ze=new he(H),r}Ye(t,e){if(!this.rt(t))return;const n=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,n),this.je=this.je.insert(e.key,e),this.He=this.He.insert(e.key,this.It(e.key).add(t)),this.Je=this.Je.insert(e.key,this.Rt(e.key).add(t))}et(t,e,n){if(!this.rt(t))return;const r=this.nt(t);this.Et(t,e)?r.qe(e,1):r.Ue(e),this.Je=this.Je.insert(e,this.Rt(e).delete(t)),this.Je=this.Je.insert(e,this.Rt(e).add(t)),n&&(this.je=this.je.insert(e,n))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new ui,this.ze.set(t,e)),e}Rt(t){let e=this.Je.get(t);return e||(e=new pe(H),this.Je=this.Je.insert(t,e)),e}It(t){let e=this.He.get(t);return e||(e=new pe(H),this.He=this.He.insert(t,e)),e}rt(t){const e=null!==this.ot(t);return e||C("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new ui),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function hi(){return new he(it.comparator)}function fi(){return new he(it.comparator)}const di=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),pi=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),gi=(()=>{const t={and:"AND",or:"OR"};return t})();class mi{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function yi(t,e){return t.useProto3Json||Dt(e)?e:{value:e}}function vi(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function wi(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function bi(t,e){return vi(t,e.toTimestamp())}function _i(t){return D(!!t,49232),yt.fromTimestamp(function(t){const e=be(t);return new mt(e.seconds,e.nanos)}(t))}function Ei(t,e){return Ti(t,e).canonicalString()}function Ti(t,e){const n=function(t){return new et(["projects",t.projectId,"databases",t.database])}(t).child("documents");return void 0===e?n:n.child(e)}function Si(t){const e=et.fromString(t);return D(Hi(e),10190,{key:e.toString()}),e}function Ai(t,e){return Ei(t.databaseId,e.path)}function Ci(t,e){const n=Si(e);if(n.get(1)!==t.databaseId.projectId)throw new P(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new it(Oi(n))}function Ii(t,e){return Ei(t.databaseId,e)}function xi(t){const e=Si(t);return 4===e.length?et.emptyPath():Oi(e)}function ki(t){return new et(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Oi(t){return D(t.length>4&&"documents"===t.get(4),29091,{key:t.toString()}),t.popFirst(5)}function Ri(t,e,n){return{name:Ai(t,e),fields:n.value.mapValue.fields}}function Di(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:O(39313,{state:t})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(D(void 0===e||"string"==typeof e,58123),ve.fromBase64String(e||"")):(D(void 0===e||e instanceof Buffer||e instanceof Uint8Array,16193),ve.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?L.UNKNOWN:Yr(t.code);return new P(e,t.message||"")}(o);n=new ci(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ci(t,r.document.name),s=_i(r.document.updateTime),o=r.document.createTime?_i(r.document.createTime):yt.min(),a=new nn({mapValue:{fields:r.document.fields}}),c=sn.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new oi(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ci(t,r.document),s=r.readTime?_i(r.readTime):yt.min(),o=sn.newNoDocument(i,s),a=r.removedTargetIds||[];n=new oi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ci(t,r.document),s=r.removedTargetIds||[];n=new oi([],s,i,null)}else{if(!("filter"in e))return O(11601,{Vt:e});{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new Kr(r,i),o=t.targetId;n=new ai(o,s)}}return n}function Ni(t,e){let n;if(e instanceof Mr)n={update:Ri(t,e.key,e.value)};else if(e instanceof $r)n={delete:Ai(t,e.key)};else if(e instanceof Fr)n={update:Ri(t,e.key,e.data),updateMask:Ki(e.fieldMask)};else{if(!(e instanceof Br))return O(16599,{dt:e.type});n={verify:Ai(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof yr)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof vr)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof br)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Er)return{fieldPath:e.field.canonicalString(),increment:n.Ae};throw O(20930,{transform:e.transform})}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:bi(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:O(27497)}(t,e.precondition)),n}function Li(t,e){return t&&t.length>0?(D(void 0!==e,14353),t.map(t=>function(t,e){let n=t.updateTime?_i(t.updateTime):_i(e);return n.isEqual(yt.min())&&(n=_i(e)),new Ir(n,t.transformResults||[])}(t,e))):[]}function Pi(t,e){return{documents:[Ii(t,e.path)]}}function Mi(t,e){const n={structuredQuery:{}},r=e.path;let i;null!==e.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ii(t,i);const s=function(t){if(0!==t.length)return Gi(dn.create(t,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:zi(t.field),direction:ji(t.dir)}}(t))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=yi(t,e.limit);return null!==a&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),{ft:n,parent:i}}function Fi(t){let e=xi(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){D(1===r,65062);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Ui(t);return e instanceof dn&&gn(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map(t=>function(t){return new un(qi(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Dt(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new on(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new on(n,e)}(n.endAt)),Ln(e,i,o,s,a,"F",c,u)}function Vi(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O(28987,{purpose:t})}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Ui(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=qi(t.unaryFilter.field);return fn.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=qi(t.unaryFilter.field);return fn.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=qi(t.unaryFilter.field);return fn.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=qi(t.unaryFilter.field);return fn.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return O(61313);default:return O(60726)}}(t):void 0!==t.fieldFilter?function(t){return fn.create(qi(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return O(58110);default:return O(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return dn.create(t.compositeFilter.filters.map(t=>Ui(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return O(1026)}}(t.compositeFilter.op))}(t):O(30097,{filter:t})}function ji(t){return di[t]}function $i(t){return pi[t]}function Bi(t){return gi[t]}function zi(t){return{fieldPath:t.canonicalString()}}function qi(t){return rt.fromServerFormat(t.fieldPath)}function Gi(t){return t instanceof fn?function(t){if("=="===t.op){if(Xe(t.value))return{unaryFilter:{field:zi(t.field),op:"IS_NAN"}};if(Ye(t.value))return{unaryFilter:{field:zi(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Xe(t.value))return{unaryFilter:{field:zi(t.field),op:"IS_NOT_NAN"}};if(Ye(t.value))return{unaryFilter:{field:zi(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zi(t.field),op:$i(t.op),value:t.value}}}(t):t instanceof dn?function(t){const e=t.getFilters().map(t=>Gi(t));return 1===e.length?e[0]:{compositeFilter:{op:Bi(t.op),filters:e}}}(t):O(54877,{filter:t})}function Ki(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Hi(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}function Wi(t){return!!t&&"function"==typeof t._toProto&&"ProtoValue"===t._protoValueType}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qi{constructor(t,e,n,r,i=yt.min(),s=yt.min(),o=ve.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new Qi(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Qi(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Qi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Qi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t){this.yt=t}}function Xi(t){const e=Fi({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Bn(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){}Dt(t,e){this.Ct(t,e),e.vt()}Ct(t,e){if("nullValue"in t)this.Ft(e,5);else if("booleanValue"in t)this.Ft(e,10),e.Mt(t.booleanValue?1:0);else if("integerValue"in t)this.Ft(e,15),e.Mt(_e(t.integerValue));else if("doubleValue"in t){const n=_e(t.doubleValue);isNaN(n)?this.Ft(e,13):(this.Ft(e,15),Nt(n)?e.Mt(0):e.Mt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Ft(e,20),"string"==typeof n&&(n=be(n)),e.xt(`${n.seconds||""}`),e.Mt(n.nanos||0)}else if("stringValue"in t)this.Ot(t.stringValue,e),this.Nt(e);else if("bytesValue"in t)this.Ft(e,30),e.Bt(Ee(t.bytesValue)),this.Nt(e);else if("referenceValue"in t)this.Lt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Ft(e,45),e.Mt(n.latitude||0),e.Mt(n.longitude||0)}else"mapValue"in t?en(t)?this.Ft(e,Number.MAX_SAFE_INTEGER):Ze(t)?this.kt(t.mapValue,e):(this.Kt(t.mapValue,e),this.Nt(e)):"arrayValue"in t?(this.qt(t.arrayValue,e),this.Nt(e)):O(19022,{Ut:t})}Ot(t,e){this.Ft(e,25),this.$t(t,e)}$t(t,e){e.xt(t)}Kt(t,e){const n=t.fields||{};this.Ft(e,55);for(const r of Object.keys(n))this.Ot(r,e),this.Ct(n[r],e)}kt(t,e){const n=t.fields||{};this.Ft(e,53);const r=Ve,i=n[r].arrayValue?.values?.length||0;this.Ft(e,15),e.Mt(_e(i)),this.Ot(r,e),this.Ct(n[r],e)}qt(t,e){const n=t.values||[];this.Ft(e,50);for(const r of n)this.Ct(r,e)}Lt(t,e){this.Ft(e,37),it.fromName(t).path.forEach(t=>{this.Ft(e,60),this.$t(t,e)})}Ft(t,e){t.Mt(e)}Nt(t){t.Mt(2)}}Ji.Wt=new Ji;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zi{constructor(){this.Sn=new ts}addToCollectionParentIndex(t,e){return this.Sn.add(e),It.resolve()}getCollectionParents(t,e){return It.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return It.resolve()}deleteFieldIndex(t,e){return It.resolve()}deleteAllFieldIndexes(t){return It.resolve()}createTargetIndexes(t,e){return It.resolve()}getDocumentsMatchingTarget(t,e){return It.resolve(null)}getIndexType(t,e){return It.resolve(0)}getFieldIndexes(t,e){return It.resolve([])}getNextCollectionGroupToUpdate(t){return It.resolve(null)}getMinOffset(t,e){return It.resolve(Et.min())}getMinOffsetFromCollectionGroup(t,e){return It.resolve(Et.min())}updateCollectionGroup(t,e,n){return It.resolve()}updateIndexEntries(t,e){return It.resolve()}}class ts{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new pe(et.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new pe(et.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const es={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ns=41943040;class rs{static withCacheSize(t){return new rs(t,rs.DEFAULT_COLLECTION_PERCENTILE,rs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rs.DEFAULT_COLLECTION_PERCENTILE=10,rs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rs.DEFAULT=new rs(ns,rs.DEFAULT_COLLECTION_PERCENTILE,rs.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rs.DISABLED=new rs(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class is{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new is(0)}static ar(){return new is(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ss="LruGarbageCollector",os=1048576;function as([t,e],[n,r]){const i=H(t,n);return 0===i?H(e,r):i}class cs{constructor(t){this.Pr=t,this.buffer=new pe(as),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();as(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class us{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Rr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return null!==this.Rr}Ar(t){C(ss,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){kt(t)?C(ss,"Ignoring IndexedDB error during garbage collection: ",t):await Ct(t)}await this.Ar(3e5)})}}class ls{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return It.resolve(Ot.ce);const n=new cs(e);return this.Vr.forEachTarget(t,t=>n.Er(t.sequenceNumber)).next(()=>this.Vr.mr(t,t=>n.Er(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector","Garbage collection skipped; disabled"),It.resolve(es)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),es):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let n,r,i,s,o,a,c;const u=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,s=Date.now(),this.nthSequenceNumber(t,r))).next(r=>(n=r,o=Date.now(),this.removeTargets(t,n,e))).next(e=>(i=e,a=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(c=Date.now(),A()<=v.$b.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(o-s)+"ms\n"+`\tRemoved ${i} targets in `+(a-o)+"ms\n"+`\tRemoved ${t} documents in `+(c-a)+"ms\n"+`Total Duration: ${c-u}ms`),It.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t})))}}function hs(t,e){return new ls(t,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fs{constructor(){this.changes=new Yn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,sn.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?It.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ds{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(r=>(n=r,this.remoteDocumentCache.getEntry(t,e))).next(t=>(null!==n&&Nr(n.mutation,t,me.empty(),mt.now()),t))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.getLocalViewOfDocuments(t,e,ar()).next(()=>e))}getLocalViewOfDocuments(t,e,n=ar()){const r=nr();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,n).next(t=>{let e=tr();return t.forEach((t,n)=>{e=e.insert(t,n.overlayedDocument)}),e}))}getOverlayedDocuments(t,e){const n=nr();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,ar()))}populateOverlays(t,e,n){const r=[];return n.forEach(t=>{e.has(t)||r.push(t)}),this.documentOverlayCache.getOverlays(t,r).next(t=>{t.forEach((t,n)=>{e.set(t,n)})})}computeViews(t,e,n,r){let i=Jn();const s=ir(),o=function(){return ir()}();return e.forEach((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Fr)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Nr(o.mutation,e,o.mutation.getFieldMask(),mt.now())):s.set(e.key,me.empty())}),this.recalculateAndSaveOverlays(t,i).next(t=>(t.forEach((t,e)=>s.set(t,e)),e.forEach((t,e)=>o.set(t,new ds(e,s.get(t)??null))),o))}recalculateAndSaveOverlays(t,e){const n=ir();let r=new he((t,e)=>t-e),i=ar();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>{for(const i of t)i.keys().forEach(t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||me.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||ar()).add(t);r=r.insert(i.batchId,a)})}).next(()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=rr();c.forEach(t=>{if(!i.has(t)){const r=Rr(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}}),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return It.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(e=>this.recalculateAndSaveOverlays(t,e))}getDocumentsMatchingQuery(t,e,n,r){return Fn(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Vn(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,r):this.getDocumentsMatchingCollectionQuery(t,e,n,r)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next(i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):It.resolve(nr());let o=vt,a=i;return s.next(e=>It.forEach(e,(e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?It.resolve():this.remoteDocumentCache.getEntry(t,e).next(t=>{a=a.insert(e,t)}))).next(()=>this.populateOverlays(t,e,i)).next(()=>this.computeViews(t,a,e,ar())).next(t=>({batchId:o,changes:er(t)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new it(e)).next(t=>{let e=tr();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}getDocumentsMatchingCollectionGroupQuery(t,e,n,r){const i=e.collectionGroup;let s=tr();return this.indexManager.getCollectionParents(t,i).next(o=>It.forEach(o,o=>{const a=function(t,e){return new Nn(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,o.child(i));return this.getDocumentsMatchingCollectionQuery(t,a,n,r).next(t=>{t.forEach((t,e)=>{s=s.insert(t,e)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(t,e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,r))).next(t=>{i.forEach((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,sn.newInvalidDocument(r)))});let n=tr();return t.forEach((t,r)=>{const s=i.get(t);void 0!==s&&Nr(s.mutation,r,me.empty(),mt.now()),Kn(e,r)&&(n=n.insert(t,r))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return It.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(t){return{id:t.id,version:t.version,createTime:_i(t.createTime)}}(e)),It.resolve()}getNamedQuery(t,e){return It.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(t){return{name:t.name,query:Xi(t.bundledQuery),readTime:_i(t.readTime)}}(e)),It.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(){this.overlays=new he(it.comparator),this.Lr=new Map}getOverlay(t,e){return It.resolve(this.overlays.get(e))}getOverlays(t,e){const n=nr();return It.forEach(e,e=>this.getOverlay(t,e).next(t=>{null!==t&&n.set(e,t)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((n,r)=>{this.bt(t,e,r)}),It.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Lr.get(n);return void 0!==r&&(r.forEach(t=>this.overlays=this.overlays.remove(t)),this.Lr.delete(n)),It.resolve()}getOverlaysForCollection(t,e,n){const r=nr(),i=e.length+1,s=new it(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return It.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new he((t,e)=>t-e);const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=nr(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=nr(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach((t,e)=>o.set(t,e)),o.size()>=r)break;return It.resolve(o)}bt(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Gr(e,n));let i=this.Lr.get(e);void 0===i&&(i=ar(),this.Lr.set(e,i)),this.Lr.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.sessionToken=ve.EMPTY_BYTE_STRING}getSessionToken(t){return It.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,It.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(){this.kr=new pe(ws.Kr),this.qr=new pe(ws.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const n=new ws(t,e);this.kr=this.kr.add(n),this.qr=this.qr.add(n)}$r(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.Wr(new ws(t,e))}Qr(t,e){t.forEach(t=>this.removeReference(t,e))}Gr(t){const e=new it(new et([])),n=new ws(e,t),r=new ws(e,t+1),i=[];return this.qr.forEachInRange([n,r],t=>{this.Wr(t),i.push(t.key)}),i}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new it(new et([])),n=new ws(e,t),r=new ws(e,t+1);let i=ar();return this.qr.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new ws(t,0),n=this.kr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class ws{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return it.comparator(t.key,e.key)||H(t.Hr,e.Hr)}static Ur(t,e){return H(t.Hr,e.Hr)||it.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new pe(ws.Kr)}checkEmpty(t){return It.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new zr(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.Jr=this.Jr.add(new ws(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return It.resolve(s)}lookupMutationBatch(t,e){return It.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.Xr(n),i=r<0?0:r;return It.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return It.resolve(0===this.mutationQueue.length?Rt:this.Yn-1)}getAllMutationBatches(t){return It.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ws(e,0),r=new ws(e,Number.POSITIVE_INFINITY),i=[];return this.Jr.forEachInRange([n,r],t=>{const e=this.Zr(t.Hr);i.push(e)}),It.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new pe(H);return e.forEach(t=>{const e=new ws(t,0),r=new ws(t,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([e,r],t=>{n=n.add(t.Hr)})}),It.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;it.isDocumentKey(i)||(i=i.child(""));const s=new ws(new it(i),0);let o=new pe(H);return this.Jr.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.Hr)),!0)},s),It.resolve(this.Yr(o))}Yr(t){const e=[];return t.forEach(t=>{const n=this.Zr(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){D(0===this.ei(e.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Jr;return It.forEach(e.mutations,r=>{const i=new ws(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.Jr=n})}nr(t){}containsKey(t,e){const n=new ws(e,0),r=this.Jr.firstAfterOrEqual(n);return It.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,It.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t){this.ti=t,this.docs=function(){return new he(it.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.ti(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return It.resolve(n?n.document.mutableCopy():sn.newInvalidDocument(e))}getEntries(t,e){let n=Jn();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():sn.newInvalidDocument(t))}),It.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=Jn();const s=e.path,o=new it(s.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Tt(_t(o),n)<=0||(r.has(o.key)||Kn(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return It.resolve(i)}getAllFromCollectionGroup(t,e,n,r){O(9500)}ni(t,e){return It.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Es(this)}getSize(t){return It.resolve(this.size)}}class Es extends fs{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?e.push(this.Mr.addEntry(t,r)):this.Mr.removeEntry(n)}),It.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(t){this.persistence=t,this.ri=new Yn(t=>On(t),Rn),this.lastRemoteSnapshotVersion=yt.min(),this.highestTargetId=0,this.ii=0,this.si=new vs,this.targetCount=0,this.oi=is._r()}forEachTarget(t,e){return this.ri.forEach((t,n)=>e(n)),It.resolve()}getLastRemoteSnapshotVersion(t){return It.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return It.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),It.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ii&&(this.ii=e),It.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new is(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,It.resolve()}updateTargetData(t,e){return this.lr(e),It.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,It.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.ri.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.ri.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),It.waitFor(i).next(()=>r)}getTargetCount(t){return It.resolve(this.targetCount)}getTargetData(t,e){const n=this.ri.get(e)||null;return It.resolve(n)}addMatchingKeys(t,e,n){return this.si.$r(e,n),It.resolve()}removeMatchingKeys(t,e,n){this.si.Qr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),It.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),It.resolve()}getMatchingKeysForTargetId(t,e){const n=this.si.jr(e);return It.resolve(n)}containsKey(t,e){return It.resolve(this.si.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,e){this._i={},this.overlays={},this.ai=new Ot(0),this.ui=!1,this.ui=!0,this.ci=new ys,this.referenceDelegate=t(this),this.li=new Ts(this),this.indexManager=new Zi,this.remoteDocumentCache=function(t){return new _s(t)}(t=>this.referenceDelegate.hi(t)),this.serializer=new Yi(e),this.Pi=new gs(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ms,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this._i[t.toKey()];return n||(n=new bs(e,this.referenceDelegate),this._i[t.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,n){C("MemoryPersistence","Starting transaction:",t);const r=new As(this.ai.next());return this.referenceDelegate.Ti(),n(r).next(t=>this.referenceDelegate.Ii(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ei(t,e){return It.or(Object.values(this._i).map(n=>()=>n.containsKey(t,e)))}}class As extends At{constructor(t){super(),this.currentSequenceNumber=t}}class Cs{constructor(t){this.persistence=t,this.Ri=new vs,this.Ai=null}static Vi(t){return new Cs(t)}get di(){if(this.Ai)return this.Ai;throw O(60996)}addReference(t,e,n){return this.Ri.addReference(n,e),this.di.delete(n.toString()),It.resolve()}removeReference(t,e,n){return this.Ri.removeReference(n,e),this.di.add(n.toString()),It.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),It.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(t=>this.di.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.di.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return It.forEach(this.di,n=>{const r=it.fromPath(n);return this.mi(t,r).next(t=>{t||e.removeEntry(r,yt.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(t=>{t?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return It.or([()=>It.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class Is{constructor(t,e){this.persistence=t,this.fi=new Yn(t=>Mt(t.path),(t,e)=>t.isEqual(e)),this.garbageCollector=hs(this,e)}static Vi(t,e){return new Is(t,e)}Ti(){}Ii(t){return It.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}pr(t){let e=0;return this.mr(t,t=>{e++}).next(()=>e)}mr(t,e){return It.forEach(this.fi,(n,r)=>this.wr(t,n,r).next(t=>t?It.resolve():e(r)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.ni(t,r=>this.wr(t,r,e).next(t=>{t||(n++,i.removeEntry(r,yt.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),It.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),It.resolve()}removeReference(t,e,n){return this.fi.set(n,t.currentSequenceNumber),It.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),It.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=He(t.data.value)),e}wr(t,e,n){return It.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const t=this.fi.get(e);return It.resolve(void 0!==t&&t>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xs{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Ts=n,this.Is=r}static Es(t,e){let n=ar(),r=ar();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new xs(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return(0,a.nr)()?8:xt((0,a.ZQ)())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,n,r){const i={result:null};return this.gs(t,e).next(t=>{i.result=t}).next(()=>{if(!i.result)return this.ps(t,e,r,n).next(t=>{i.result=t})}).next(()=>{if(i.result)return;const n=new ks;return this.ys(t,e,n).next(r=>{if(i.result=r,this.As)return this.ws(t,e,n,r.size)})}).next(()=>i.result)}ws(t,e,n,r){return n.documentReadCount<this.Vs?(A()<=v.$b.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",Gn(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),It.resolve()):(A()<=v.$b.DEBUG&&C("QueryEngine","Query:",Gn(e),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(A()<=v.$b.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",Gn(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,jn(e))):It.resolve())}gs(t,e){if(Mn(e))return It.resolve(null);let n=jn(e);return this.indexManager.getIndexType(t,n).next(r=>0===r?null:(null!==e.limit&&1===r&&(e=Bn(e,null,"F"),n=jn(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(r=>{const i=ar(...r);return this.fs.getDocuments(t,i).next(r=>this.indexManager.getMinOffset(t,n).next(n=>{const s=this.bs(e,r);return this.Ss(e,s,i,n.readTime)?this.gs(t,Bn(e,null,"F")):this.Ds(t,s,e,n)}))})))}ps(t,e,n,r){return Mn(e)||r.isEqual(yt.min())?It.resolve(null):this.fs.getDocuments(t,n).next(i=>{const s=this.bs(e,i);return this.Ss(e,s,n,r)?It.resolve(null):(A()<=v.$b.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Gn(e)),this.Ds(t,s,e,bt(r,vt)).next(t=>t))})}bs(t,e){let n=new pe(Wn(t));return e.forEach((e,r)=>{Kn(t,r)&&(n=n.add(r))}),n}Ss(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}ys(t,e,n){return A()<=v.$b.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",Gn(e)),this.fs.getDocumentsMatchingQuery(t,e,Et.min(),n)}Ds(t,e,n,r){return this.fs.getDocumentsMatchingQuery(t,n,r).next(t=>(e.forEach(e=>{t=t.insert(e.key,e)}),t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="LocalStore",Ds=3e8;class Ns{constructor(t,e,n,r){this.persistence=t,this.Cs=e,this.serializer=r,this.vs=new he(H),this.Fs=new Yn(t=>On(t),Rn),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(n)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ps(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function Ls(t,e,n,r){return new Ns(t,e,n,r)}async function Ps(t,e){const n=N(t);return await n.persistence.runTransaction("Handle user change","readonly",t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next(i=>(r=i,n.Os(e),n.mutationQueue.getAllMutationBatches(t))).next(e=>{const i=[],s=[];let o=ar();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next(t=>({Ns:t,removedBatchIds:i,addedBatchIds:s}))})})}function Ms(t,e){const n=N(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=It.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);D(null!==s,48541),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))})}),o.next(()=>t.mutationQueue.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=ar();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e))).next(()=>n.localDocuments.getDocuments(t,r))})}function Fs(t){const e=N(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.li.getLastRemoteSnapshotVersion(t))}function Vs(t,e){const n=N(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const o=[];e.targetChanges.forEach((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.li.removeMatchingKeys(t,s.removedDocuments,a).next(()=>n.li.addMatchingKeys(t,s.addedDocuments,a)));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(ve.EMPTY_BYTE_STRING,yt.min()).withLastLimboFreeSnapshotVersion(yt.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){if(0===t.resumeToken.approximateByteSize())return!0;const r=e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds();if(r>=Ds)return!0;const i=n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size;return i>0}(c,u,s)&&o.push(n.li.updateTargetData(t,u))});let a=Jn(),c=ar();if(e.documentUpdates.forEach(r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Us(t,s,e.documentUpdates).next(t=>{a=t.Bs,c=t.Ls})),!r.isEqual(yt.min())){const e=n.li.getLastRemoteSnapshotVersion(t).next(e=>n.li.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return It.waitFor(o).next(()=>s.apply(t)).next(()=>n.localDocuments.getLocalViewOfDocuments(t,a,c)).next(()=>a)}).then(t=>(n.vs=i,t))}function Us(t,e,n){let r=ar(),i=ar();return n.forEach(t=>r=r.add(t)),e.getEntries(t,r).next(t=>{let r=Jn();return n.forEach((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(yt.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):C(Rs,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)}),{Bs:r,Ls:i}})}function js(t,e){const n=N(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=Rt),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e)))}function $s(t,e){const n=N(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.li.getTargetData(t,e).next(i=>i?(r=i,It.resolve(r)):n.li.allocateTargetId(t).next(i=>(r=new Qi(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.li.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.vs.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.vs=n.vs.insert(t.targetId,t),n.Fs.set(e,t.targetId)),t})}async function Bs(t,e,n){const r=N(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!kt(t))throw t;C(Rs,`Failed to update sequence numbers for target ${e}: ${t}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function zs(t,e,n){const r=N(t);let i=yt.min(),s=ar();return r.persistence.runTransaction("Execute query","readwrite",t=>function(t,e,n){const r=N(t),i=r.Fs.get(n);return void 0!==i?It.resolve(r.vs.get(i)):r.li.getTargetData(e,n)}(r,t,jn(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Cs.getDocumentsMatchingQuery(t,e,n?i:yt.min(),n?s:ar())).next(t=>(qs(r,Hn(e),t),{documents:t,ks:s})))}function qs(t,e,n){let r=t.Ms.get(e)||yt.min();n.forEach((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)}),t.Ms.set(e,r)}class Gs{constructor(){this.activeTargetIds=ur()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ks{constructor(){this.vo=new Gs,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,n){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new Gs,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{Mo(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws="ConnectivityMonitor";class Qs{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){C(Ws,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){C(Ws,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ys=null;function Xs(){return null===Ys?Ys=function(){return 268435456+Math.round(2147483648*Math.random())}():Ys++,"0x"+Ys.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const Js="RestConnection",Zs={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class to{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===Re?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(t,e,n,r,i){const s=Xs(),o=this.Qo(t,e.toUriEncodedString());C(Js,`Sending RPC '${t}' ${s}:`,o,n);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(c,r,i);const{host:u}=new URL(o),l=(0,a.zJ)(u);return this.zo(t,o,c,n,l).then(e=>(C(Js,`Received RPC '${t}' ${s}: `,e),e),e=>{throw x(Js,`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e})}jo(t,e,n,r,i,s){return this.Wo(t,e,n,r,i)}Go(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+E}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Qo(t,e){const n=Zs[t];let r=`${this.qo}/v1/${e}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no="WebChannelConnection",ro=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};class io extends to{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!io.c_){const t=m();ro(t,g.STAT_EVENT,t=>{t.stat===p.PROXY?C(no,"STAT_EVENT: detected buffering proxy"):t.stat===p.NOPROXY&&C(no,"STAT_EVENT: detected no buffering proxy")}),io.c_=!0}}zo(t,e,n,r,i){const s=Xs();return new Promise((i,o)=>{const a=new l;a.setWithCredentials(!0),a.listenOnce(f.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case d.NO_ERROR:const e=a.getResponseJson();C(no,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(e)),i(e);break;case d.TIMEOUT:C(no,`RPC '${t}' ${s} timed out`),o(new P(L.DEADLINE_EXCEEDED,"Request time out"));break;case d.HTTP_ERROR:const n=a.getStatus();if(C(no,`RPC '${t}' ${s} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=t?.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(e)>=0?e:L.UNKNOWN}(e.status);o(new P(t,e.message))}else o(new P(L.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(L.UNAVAILABLE,"Connection failed."));break;default:O(9055,{l_:t,streamId:s,h_:a.getLastErrorCode(),P_:a.getLastError()})}}finally{C(no,`RPC '${t}' ${s} completed.`)}});const c=JSON.stringify(r);C(no,`RPC '${t}' ${s} sending request:`,r),a.send(e,"POST",c,n,15)})}T_(t,e,n){const r=Xs(),i=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=this.createWebChannelTransport(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},a=this.longPollingOptions.timeoutSeconds;void 0!==a&&(o.longPollingTimeout=Math.round(1e3*a)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Go(o.initMessageHeaders,e,n),o.encodeInitMessageHeaders=!0;const c=i.join("");C(no,`Creating RPC '${t}' stream ${r}: ${c}`,o);const u=s.createWebChannel(c,o);this.I_(u);let l=!1,f=!1;const d=new eo({Ho:e=>{f?C(no,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(l||(C(no,`Opening RPC '${t}' stream ${r} transport.`),u.open(),l=!0),C(no,`RPC '${t}' stream ${r} sending:`,e),u.send(e))},Jo:()=>u.close()});return ro(u,h.EventType.OPEN,()=>{f||(C(no,`RPC '${t}' stream ${r} transport opened.`),d.i_())}),ro(u,h.EventType.CLOSE,()=>{f||(f=!0,C(no,`RPC '${t}' stream ${r} transport closed`),d.o_(),this.E_(u))}),ro(u,h.EventType.ERROR,e=>{f||(f=!0,x(no,`RPC '${t}' stream ${r} transport errored. Name:`,e.name,"Message:",e.message),d.o_(new P(L.UNAVAILABLE,"The operation could not be completed")))}),ro(u,h.EventType.MESSAGE,e=>{if(!f){const n=e.data[0];D(!!n,16349);const i=n,s=i?.error||i[0]?.error;if(s){C(no,`RPC '${t}' stream ${r} received error:`,s);const e=s.status;let n=function(t){const e=Hr[t];if(void 0!==e)return Yr(e)}(e),i=s.message;void 0===n&&(n=L.INTERNAL,i="Unknown error status: "+e+" with message "+s.message),f=!0,d.o_(new P(n,i)),u.close()}else C(no,`RPC '${t}' stream ${r} received:`,n),d.__(n)}}),io.u_(),setTimeout(()=>{d.s_()},0),d}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,n){super.Go(t,e,n),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return y()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){return new io(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(t){return new mi(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */io.c_=!1;class co{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Ci=t,this.timerId=e,this.R_=n,this.A_=r,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,e-n);r>0&&C("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){null!==this.m_&&(this.m_.skipDelay(),this.m_=null)}cancel(){null!==this.m_&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="PersistentStream";class lo{constructor(t,e,n,r,i,s,o,a){this.Ci=t,this.b_=n,this.S_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new co(t,e)}x_(){return 1===this.state||5===this.state||this.O_()}O_(){return 2===this.state||3===this.state}start(){this.F_=0,4!==this.state?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&null===this.C_&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,4!==t?this.M_.reset():e&&e.code===L.RESOURCE_EXHAUSTED?(I(e.toString()),I("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===L.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.D_===e&&this.G_(t,n)},e=>{t(()=>{const t=new P(L.UNKNOWN,"Fetching auth token failed: "+e.message);return this.z_(t)})})}G_(t,e){const n=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.Yo(()=>{n(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(t=>{n(()=>this.z_(t))}),this.stream.onMessage(t=>{n(()=>1==++this.F_?this.H_(t):this.onNext(t))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return C(uo,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(C(uo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ho extends lo{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}j_(t,e){return this.connection.T_("Listen",t,e)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=Di(this.serializer,t),n=function(t){if(!("targetChange"in t))return yt.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?yt.min():e.readTime?_i(e.readTime):yt.min()}(t);return this.listener.J_(e,n)}Z_(t){const e={};e.database=ki(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Dn(r)?{documents:Pi(t,r)}:{query:Mi(t,r).ft},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=wi(t,e.resumeToken);const r=yi(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(yt.min())>0){n.readTime=vi(t,e.snapshotVersion.toTimestamp());const r=yi(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=Vi(this.serializer,t);n&&(e.labels=n),this.K_(e)}X_(t){const e={};e.database=ki(this.serializer),e.removeTarget=t,this.K_(e)}}class fo extends lo{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return D(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,D(!t.writeResults||0===t.writeResults.length,55816),this.listener.ta()}onNext(t){D(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Li(t.writeResults,t.commitTime),n=_i(t.commitTime);return this.listener.na(n,e)}ra(){const t={};t.database=ki(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>Ni(this.serializer,t))};this.K_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{}class go extends po{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new P(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Wo(t,Ti(e,n),r,i,s)).catch(t=>{throw"FirebaseError"===t.name?(t.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new P(L.UNKNOWN,t.toString())})}jo(t,e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.jo(t,Ti(e,n),r,s,o,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new P(L.UNKNOWN,t.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function mo(t,e,n,r){return new go(t,e,n,r)}class yo{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){0===this.oa&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){"Online"===this.state?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,"Online"===t&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(I(e),this.aa=!1):C("OnlineStateTracker",e)}Pa(){null!==this._a&&(this._a.cancel(),this._a=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo="RemoteStore";class wo{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(t=>{n.enqueueAndForget(async()=>{xo(this)&&(C(vo,"Restarting streams for network reachability change."),await async function(t){const e=N(t);e.Ea.add(4),await _o(e),e.Va.set("Unknown"),e.Ea.delete(4),await bo(e)}(this))})}),this.Va=new yo(n,r)}}async function bo(t){if(xo(t))for(const e of t.Ra)await e(!0)}async function _o(t){for(const e of t.Ra)await e(!1)}function Eo(t,e){const n=N(t);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),Io(n)?Co(n):Ho(n).O_()&&So(n,e))}function To(t,e){const n=N(t),r=Ho(n);n.Ia.delete(e),r.O_()&&Ao(n,e),0===n.Ia.size&&(r.O_()?r.L_():xo(n)&&n.Va.set("Unknown"))}function So(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(yt.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ho(t).Z_(e)}function Ao(t,e){t.da.$e(e),Ho(t).X_(e)}function Co(t){t.da=new li({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),Ho(t).start(),t.Va.ua()}function Io(t){return xo(t)&&!Ho(t).x_()&&t.Ia.size>0}function xo(t){return 0===N(t).Ea.size}function ko(t){t.da=void 0}async function Oo(t){t.Va.set("Online")}async function Ro(t){t.Ia.forEach((e,n)=>{So(t,e)})}async function Do(t,e){ko(t),Io(t)?(t.Va.ha(e),Co(t)):t.Va.set("Unknown")}async function No(t,e,n){if(t.Va.set("Online"),e instanceof ci&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Ia.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Ia.delete(r),t.da.removeTarget(r))}(t,e)}catch(n){C(vo,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Lo(t,n)}else if(e instanceof oi?t.da.Xe(e):e instanceof ai?t.da.st(e):t.da.tt(e),!n.isEqual(yt.min()))try{const e=await Fs(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.da.Tt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Ia.get(r);i&&t.Ia.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach((e,n)=>{const r=t.Ia.get(e);if(!r)return;t.Ia.set(e,r.withResumeToken(ve.EMPTY_BYTE_STRING,r.snapshotVersion)),Ao(t,e);const i=new Qi(r.target,e,n,r.sequenceNumber);So(t,i)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){C(vo,"Failed to raise snapshot:",e),await Lo(t,e)}}async function Lo(t,e,n){if(!kt(e))throw e;t.Ea.add(1),await _o(t),t.Va.set("Offline"),n||(n=()=>Fs(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{C(vo,"Retrying IndexedDB access"),await n(),t.Ea.delete(1),await bo(t)})}function Po(t,e){return e().catch(n=>Lo(t,n,e))}async function Mo(t){const e=N(t),n=Wo(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Rt;for(;Fo(e);)try{const t=await js(e.localStore,r);if(null===t){0===e.Ta.length&&n.L_();break}r=t.batchId,Vo(e,t)}catch(t){await Lo(e,t)}Uo(e)&&jo(e)}function Fo(t){return xo(t)&&t.Ta.length<10}function Vo(t,e){t.Ta.push(e);const n=Wo(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Uo(t){return xo(t)&&!Wo(t).x_()&&t.Ta.length>0}function jo(t){Wo(t).start()}async function $o(t){Wo(t).ra()}async function Bo(t){const e=Wo(t);for(const n of t.Ta)e.ea(n.mutations)}async function zo(t,e,n){const r=t.Ta.shift(),i=qr.from(r,e,n);await Po(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Mo(t)}async function qo(t,e){e&&Wo(t).Y_&&await async function(t,e){if(function(t){return Qr(t)&&t!==L.ABORTED}(e.code)){const n=t.Ta.shift();Wo(t).B_(),await Po(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await Mo(t)}}(t,e),Uo(t)&&jo(t)}async function Go(t,e){const n=N(t);n.asyncQueue.verifyOperationInProgress(),C(vo,"RemoteStore received new credentials");const r=xo(n);n.Ea.add(3),await _o(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await bo(n)}async function Ko(t,e){const n=N(t);e?(n.Ea.delete(2),await bo(n)):e||(n.Ea.add(2),await _o(n),n.Va.set("Unknown"))}function Ho(t){return t.ma||(t.ma=function(t,e,n){const r=N(t);return r.sa(),new ho(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Zo:Oo.bind(null,t),Yo:Ro.bind(null,t),t_:Do.bind(null,t),J_:No.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),Io(t)?Co(t):t.Va.set("Unknown")):(await t.ma.stop(),ko(t))})),t.ma}function Wo(t){return t.fa||(t.fa=function(t,e,n){const r=N(t);return r.sa(),new fo(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:$o.bind(null,t),t_:qo.bind(null,t),ta:Bo.bind(null,t),na:zo.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await Mo(t)):(await t.fa.stop(),t.Ta.length>0&&(C(vo,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Qo{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new M,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Qo(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new P(L.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yo(t,e){if(I("AsyncQueue",`${e}: ${t}`),kt(t))return new P(L.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{static emptySet(t){return new Xo(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||it.comparator(e.key,n.key):(t,e)=>it.comparator(t.key,e.key),this.keyedMap=tr(),this.sortedSet=new he(this.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Xo))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Xo;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(){this.ga=new he(it.comparator)}track(t){const e=t.doc.key,n=this.ga.get(e);n?0!==t.type&&3===n.type?this.ga=this.ga.insert(e,t):3===t.type&&1!==n.type?this.ga=this.ga.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.ga=this.ga.remove(e):1===t.type&&2===n.type?this.ga=this.ga.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):O(63341,{Vt:t,pa:n}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,n)=>{t.push(n)}),t}}class Zo{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach(t=>{s.push({type:0,doc:t})}),new Zo(t,e,Xo.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&zn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(t=>t.Da())}}class ea{constructor(){this.queries=na(),this.onlineState="Unknown",this.Ca=new Set}terminate(){!function(t,e){const n=N(t),r=n.queries;n.queries=na(),r.forEach((t,n)=>{for(const r of n.ba)r.onError(e)})}(this,new P(L.ABORTED,"Firestore shutting down"))}}function na(){return new Yn(t=>qn(t),zn)}async function ra(t,e){const n=N(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new ta,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await n.onListen(i,!0);break;case 1:s.wa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(t){const n=Yo(t,`Initialization of query '${Gn(e.query)}' failed`);return void e.onError(n)}n.queries.set(i,s),s.ba.push(e),e.va(n.onlineState),s.wa&&e.Fa(s.wa)&&aa(n)}async function ia(t,e){const n=N(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const t=s.ba.indexOf(e);t>=0&&(s.ba.splice(t,1),0===s.ba.length?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function sa(t,e){const n=N(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.ba)t.Fa(i)&&(r=!0);e.wa=i}}r&&aa(n)}function oa(t,e,n){const r=N(t),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(n);r.queries.delete(e)}function aa(t){t.Ca.forEach(t=>{t.next()})}var ca,ua;(ua=ca||(ca={})).Ma="default",ua.Cache="cache";class la{constructor(t,e,n){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Zo(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache)return!0;if(!this.Da())return!0;const n="Offline"!==e;return(!this.options.Ka||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}ka(t){t=Zo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==ca.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ha{constructor(t){this.key=t}}class fa{constructor(t){this.key=t}}class da{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=ar(),this.mutatedKeys=ar(),this.eu=Wn(t),this.tu=new Xo(this.eu)}get nu(){return this.Za}ru(t,e){const n=e?e.iu:new Jo,r=e?e.tu:this.tu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=Kn(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.su(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.eu(l,a)>0||c&&this.eu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{tu:s,iu:n,Ss:o,mutatedKeys:i}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,r){const i=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const s=t.iu.ya();s.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O(20277,{Vt:t})}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.eu(t.doc,e.doc)),this.ou(n),r=r??!1;const o=e&&!r?this._u():[],a=0===this.Ya.size&&this.current&&!r?1:0,c=a!==this.Xa;return this.Xa=a,0!==s.length||c?{snapshot:new Zo(this.query,t.tu,i,s,t.mutatedKeys,0===a,c,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:o}:{au:o}}va(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Jo,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(t=>this.Za=this.Za.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.Za=this.Za.delete(t)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=ar(),this.tu.forEach(t=>{this.uu(t.key)&&(this.Ya=this.Ya.add(t.key))});const e=[];return t.forEach(t=>{this.Ya.has(t)||e.push(new fa(t))}),this.Ya.forEach(n=>{t.has(n)||e.push(new ha(n))}),e}cu(t){this.Za=t.ks,this.Ya=ar();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Zo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,0===this.Xa,this.hasCachedResults)}}const pa="SyncEngine";class ga{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ma{constructor(t){this.key=t,this.hu=!1}}class ya{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Pu={},this.Tu=new Yn(t=>qn(t),zn),this.Iu=new Map,this.Eu=new Set,this.Ru=new he(it.comparator),this.Au=new Map,this.Vu=new vs,this.du={},this.mu=new Map,this.fu=is.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return!0===this.gu}}async function va(t,e,n=!0){const r=ja(t);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await ba(r,e,n,!0),i}async function wa(t,e){const n=ja(t);await ba(n,e,!0,!1)}async function ba(t,e,n,r){const i=await $s(t.localStore,jn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let a;return r&&(a=await _a(t,e,s,"current"===o,i.resumeToken)),t.isPrimaryClient&&n&&Eo(t.remoteStore,i),a}async function _a(t,e,n,r,i){t.pu=(e,n,r)=>async function(t,e,n,r){let i=e.view.ru(n);i.Ss&&(i=await zs(t.localStore,e.query,!1).then(({documents:t})=>e.view.ru(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=r&&null!=r.targetMismatches.get(e.targetId),a=e.view.applyChanges(i,t.isPrimaryClient,s,o);return La(t,e.targetId,a.au),a.snapshot}(t,e,n,r);const s=await zs(t.localStore,e,!0),o=new da(e,s.ks),a=o.ru(s.documents),c=si.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);La(t,n,u.au);const l=new ga(e,n,o);return t.Tu.set(e,l),t.Iu.has(n)?t.Iu.get(n).push(e):t.Iu.set(n,[e]),u.snapshot}async function Ea(t,e,n){const r=N(t),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter(t=>!zn(t,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Bs(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&To(r.remoteStore,i.targetId),Da(r,i.targetId)}).catch(Ct)):(Da(r,i.targetId),await Bs(r.localStore,i.targetId,!0))}async function Ta(t,e){const n=N(t),r=n.Tu.get(e),i=n.Iu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),To(n.remoteStore,r.targetId))}async function Sa(t,e,n){const r=$a(t);try{const t=await function(t,e){const n=N(t),r=mt.now(),i=e.reduce((t,e)=>t.add(e.key),ar());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>{let a=Jn(),c=ar();return n.xs.getEntries(t,i).next(t=>{a=t,a.forEach((t,e)=>{e.isValidDocument()||(c=c.add(t))})}).next(()=>n.localDocuments.getOverlayedDocuments(t,a)).next(i=>{s=i;const o=[];for(const t of e){const e=Lr(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Fr(t.key,e,rn(e.value.mapValue),xr.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)}).next(e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)})}).then(()=>({batchId:o.batchId,changes:er(s)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.du[t.currentUser.toKey()];r||(r=new he(H)),r=r.insert(e,n),t.du[t.currentUser.toKey()]=r}(r,t.batchId,n),await Fa(r,t.changes),await Mo(r.remoteStore)}catch(t){const e=Yo(t,"Failed to persist write");n.reject(e)}}async function Aa(t,e){const n=N(t);try{const t=await Vs(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Au.get(e);r&&(D(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1,22616),t.addedDocuments.size>0?r.hu=!0:t.modifiedDocuments.size>0?D(r.hu,14607):t.removedDocuments.size>0&&(D(r.hu,42227),r.hu=!1))}),await Fa(n,t,e)}catch(t){await Ct(t)}}function Ca(t,e,n){const r=N(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Tu.forEach((n,r)=>{const i=r.view.va(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=N(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.ba)i.va(e)&&(r=!0)}),r&&aa(n)}(r.eventManager,e),t.length&&r.Pu.J_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ia(t,e,n){const r=N(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Au.get(e),s=i&&i.key;if(s){let t=new he(it.comparator);t=t.insert(s,sn.newNoDocument(s,yt.min()));const n=ar().add(s),i=new ii(yt.min(),new Map,new he(H),t,n);await Aa(r,i),r.Ru=r.Ru.remove(s),r.Au.delete(e),Ma(r)}else await Bs(r.localStore,e,!1).then(()=>Da(r,e,n)).catch(Ct)}async function xa(t,e){const n=N(t),r=e.batch.batchId;try{const t=await Ms(n.localStore,e);Ra(n,r,null),Oa(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fa(n,t)}catch(t){await Ct(t)}}async function ka(t,e,n){const r=N(t);try{const t=await function(t,e){const n=N(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next(e=>(D(null!==e,37113),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e))).next(()=>n.mutationQueue.performConsistencyCheck(t)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r)).next(()=>n.localDocuments.getDocuments(t,r))})}(r.localStore,e);Ra(r,e,n),Oa(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fa(r,t)}catch(n){await Ct(n)}}function Oa(t,e){(t.mu.get(e)||[]).forEach(t=>{t.resolve()}),t.mu.delete(e)}function Ra(t,e,n){const r=N(t);let i=r.du[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Da(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Iu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Iu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(e=>{t.Vu.containsKey(e)||Na(t,e)})}function Na(t,e){t.Eu.delete(e.path.canonicalString());const n=t.Ru.get(e);null!==n&&(To(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Ma(t))}function La(t,e,n){for(const r of n)r instanceof ha?(t.Vu.addReference(r.key,e),Pa(t,r)):r instanceof fa?(C(pa,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||Na(t,r.key)):O(19791,{wu:r})}function Pa(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Eu.has(r)||(C(pa,"New document in limbo: "+n),t.Eu.add(r),Ma(t))}function Ma(t){for(;t.Eu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Eu.values().next().value;t.Eu.delete(e);const n=new it(et.fromString(e)),r=t.fu.next();t.Au.set(r,new ma(n)),t.Ru=t.Ru.insert(n,r),Eo(t.remoteStore,new Qi(jn(Pn(n.path)),r,"TargetPurposeLimboResolution",Ot.ce))}}async function Fa(t,e,n){const r=N(t),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((t,a)=>{o.push(r.pu(a,e,n).then(t=>{if((t||n)&&r.isPrimaryClient){const e=t?!t.fromCache:n?.targetChanges.get(a.targetId)?.current;r.sharedClientState.updateQueryState(a.targetId,e?"current":"not-current")}if(t){i.push(t);const e=xs.Es(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.Pu.J_(i),await async function(t,e){const n=N(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>It.forEach(e,e=>It.forEach(e.Ts,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>It.forEach(e.Is,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!kt(t))throw t;C(Rs,"Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.vs.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.vs=n.vs.insert(t,i)}}}(r.localStore,s))}async function Va(t,e){const n=N(t);if(!n.currentUser.isEqual(e)){C(pa,"User change. New user:",e.toKey());const t=await Ps(n.localStore,e);n.currentUser=e,function(t,e){t.mu.forEach(t=>{t.forEach(t=>{t.reject(new P(L.CANCELLED,e))})}),t.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Fa(n,t.Ns)}}function Ua(t,e){const n=N(t),r=n.Au.get(e);if(r&&r.hu)return ar().add(r.key);{let t=ar();const r=n.Iu.get(e);if(!r)return t;for(const e of r){const r=n.Tu.get(e);t=t.unionWith(r.view.nu)}return t}}function ja(t){const e=N(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Aa.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ua.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ia.bind(null,e),e.Pu.J_=sa.bind(null,e.eventManager),e.Pu.yu=oa.bind(null,e.eventManager),e}function $a(t){const e=N(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xa.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ka.bind(null,e),e}class Ba{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=ao(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Ls(this.persistence,new Os,t.initialUser,this.serializer)}Cu(t){return new Ss(Cs.Vi,this.serializer)}Du(t){return new Ks}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ba.provider={build:()=>new Ba};class za extends Ba{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){D(this.persistence.referenceDelegate instanceof Is,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new us(n,t.asyncQueue,e)}Cu(t){const e=void 0!==this.cacheSizeBytes?rs.withCacheSize(this.cacheSizeBytes):rs.DEFAULT;return new Ss(t=>Is.Vi(t,e),this.serializer)}}class qa{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ca(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Va.bind(null,this.syncEngine),await Ko(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new ea}()}createDatastore(t){const e=ao(t.databaseInfo.databaseId),n=so(t.databaseInfo);return mo(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new wo(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,t=>Ca(this.syncEngine,t,0),function(){return Qs.v()?new Qs:new Hs}())}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new ya(t,e,n,r,i,s);return o&&(a.gu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){await async function(t){const e=N(t);C(vo,"RemoteStore shutting down."),e.Ea.add(5),await _o(e),e.Aa.shutdown(),e.Va.set("Unknown")}(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}qa.provider={build:()=>new qa};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ga{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):I("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ka="FirestoreClient";class Ha{constructor(t,e,n,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this._databaseInfo=r,this.user=_.UNAUTHENTICATED,this.clientId=K.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async t=>{C(Ka,"Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,t=>(C(Ka,"Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new M;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Yo(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Wa(t,e){t.asyncQueue.verifyOperationInProgress(),C(Ka,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Ps(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Qa(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ya(t);C(Ka,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(t=>Go(e.remoteStore,t)),t.setAppCheckTokenChangeListener((t,n)=>Go(e.remoteStore,n)),t._onlineComponents=e}async function Ya(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){C(Ka,"Using user provided OfflineComponentProvider");try{await Wa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(t){return"FirebaseError"===t.name?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}(n))throw n;x("Error using user provided cache. Falling back to memory cache: "+n),await Wa(t,new Ba)}}else C(Ka,"Using default OfflineComponentProvider"),await Wa(t,new za(void 0));return t._offlineComponents}async function Xa(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(C(Ka,"Using user provided OnlineComponentProvider"),await Qa(t,t._uninitializedComponentsProvider._online)):(C(Ka,"Using default OnlineComponentProvider"),await Qa(t,new qa))),t._onlineComponents}function Ja(t){return Xa(t).then(t=>t.syncEngine)}async function Za(t){const e=await Xa(t),n=e.eventManager;return n.onListen=va.bind(null,e.syncEngine),n.onUnlisten=Ea.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=wa.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Ta.bind(null,e.syncEngine),n}function tc(t,e,n,r){const i=new Ga(r),s=new la(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>ra(await Za(t),s)),()=>{i.Nu(),t.asyncQueue.enqueueAndForget(async()=>ia(await Za(t),s))}}function ec(t,e,n={}){const r=new M;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Ga({next:a=>{s.Nu(),e.enqueueAndForget(()=>ia(t,o));const c=a.docs.has(n);!c&&a.fromCache?i.reject(new P(L.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&a.fromCache&&r&&"server"===r.source?i.reject(new P(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(a)},error:t=>i.reject(t)}),o=new la(Pn(n.path),s,{includeMetadataChanges:!0,Ka:!0});return ra(t,o)}(await Za(t),t.asyncQueue,e,n,r)),r.promise}function nc(t,e,n={}){const r=new M;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new Ga({next:n=>{s.Nu(),e.enqueueAndForget(()=>ia(t,o)),n.fromCache&&"server"===r.source?i.reject(new P(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new la(n,s,{includeMetadataChanges:!0,Ka:!0});return ra(t,o)}(await Za(t),t.asyncQueue,e,n,r)),r.promise}function rc(t,e){const n=new M;return t.asyncQueue.enqueueAndForget(async()=>Sa(await Ja(t),e,n)),n.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ic(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const sc="ComponentProvider",oc=new Map;function ac(t,e,n,r,i){return new Oe(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,ic(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="firestore.googleapis.com",uc=!0;class lc{constructor(t){if(void 0===t.host){if(void 0!==t.ssl)throw new P(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=cc,this.ssl=uc}else this.host=t.host,this.ssl=t.ssl??uc;if(this.isUsingEmulator=void 0!==t.emulatorOptions,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=ns;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<os)throw new P(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}ot("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ic(t.experimentalLongPollingOptions??{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new P(L.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new P(L.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new P(L.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class hc{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new P(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new P(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lc(t),this._emulatorOptions=t.emulatorOptions||{},void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new V;switch(t.type){case"firstParty":return new B(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new P(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=oc.get(t);e&&(C(sc,"Removing Datastore"),oc.delete(t),e.terminate())}(this),Promise.resolve()}}function fc(t,e,n,r={}){t=ht(t,hc);const i=(0,a.zJ)(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;i&&((0,a.gE)(`https://${c}`),(0,a.P1)("Firestore",!0)),s.host!==cc&&s.host!==c&&x("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:c,ssl:i,emulatorOptions:r};if(!(0,a.bD)(u,o)&&(t._setSettings(u),r.mockUserToken)){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=_.MOCK_USER;else{e=(0,a.Fy)(r.mockUserToken,t._app?.options.projectId);const i=r.mockUserToken.sub||r.mockUserToken.user_id;if(!i)throw new P(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new _(i)}t._authCredentials=new U(new F(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new dc(this.firestore,t,this._query)}}class pc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new pc(this.firestore,t,this._key)}toJSON(){return{type:pc._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(dt(e,pc._jsonSchema))return new pc(t,n||null,new it(et.fromString(e.referencePath)))}}pc._jsonSchemaVersion="firestore/documentReference/1.0",pc._jsonSchema={type:ft("string",pc._jsonSchemaVersion),referencePath:ft("string")};class gc extends dc{constructor(t,e,n){super(t,e,Pn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new pc(this.firestore,null,new it(t))}withConverter(t){return new gc(this.firestore,t,this._path)}}function mc(t,e,...n){if(t=(0,a.Ku)(t),st("collection","path",e),t instanceof hc){const r=et.fromString(e,...n);return ct(r),new gc(t,null,r)}{if(!(t instanceof pc||t instanceof gc))throw new P(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return ct(r),new gc(t.firestore,null,r)}}function yc(t,e,...n){if(t=(0,a.Ku)(t),1===arguments.length&&(e=K.newId()),st("doc","path",e),t instanceof hc){const r=et.fromString(e,...n);return at(r),new pc(t,null,new it(r))}{if(!(t instanceof pc||t instanceof gc))throw new P(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return at(r),new pc(t.firestore,t instanceof gc?t.converter:null,new it(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vc="AsyncQueue";class wc{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new co(this,"async_queue_retry"),this._c=()=>{const t=oo();t&&C(vc,"Visibility state changed to "+t.visibilityState),this.M_.w_()},this.ac=t;const e=oo();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=oo();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new M;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(0!==this.Yu.length){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!kt(t))throw t;C(vc,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(t=>{throw this.nc=t,this.rc=!1,I("INTERNAL UNHANDLED ERROR: ",bc(t)),t}).then(t=>(this.rc=!1,t))));return this.ac=e,e}enqueueAfterDelay(t,e,n){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const r=Qo.createAndSchedule(this,t,e,n,t=>this.hc(t));return this.tc.push(r),r}uc(){this.nc&&O(47125,{Pc:bc(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do{t=this.ac,await t}while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function bc(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class _c extends hc{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=new wc,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new wc(t),this._firestoreClient=void 0,await t}}}function Ec(t,e){const n="object"==typeof t?t:(0,s.Sx)(),r="string"==typeof t?t:e||Re,i=(0,s.j6)(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const t=(0,a.yU)("firestore");t&&fc(i,...t)}return i}function Tc(t){if(t._terminated)throw new P(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Sc(t),t._firestoreClient}function Sc(t){const e=t._freezeSettings(),n=ac(t._databaseId,t._app?.options.appId||"",t._persistenceKey,t._app?.options.apiKey,e);t._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new Ha(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(t){const e=t?._online.build();return{_offline:t?._offline.build(e),_online:e}}(t._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ac{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ac(ve.fromBase64String(t))}catch(t){throw new P(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Ac(ve.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Ac._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(dt(t,Ac._jsonSchema))return Ac.fromBase64String(t.bytes)}}Ac._jsonSchemaVersion="firestore/bytes/1.0",Ac._jsonSchema={type:ft("string",Ac._jsonSchemaVersion),bytes:ft("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new P(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new rt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new P(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new P(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return H(this._lat,t._lat)||H(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xc._jsonSchemaVersion}}static fromJSON(t){if(dt(t,xc._jsonSchema))return new xc(t.latitude,t.longitude)}}xc._jsonSchemaVersion="firestore/geoPoint/1.0",xc._jsonSchema={type:ft("string",xc._jsonSchemaVersion),latitude:ft("number"),longitude:ft("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(t){this._values=(t||[]).map(t=>t)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(t[n]!==e[n])return!1;return!0}(this._values,t._values)}toJSON(){return{type:kc._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(dt(t,kc._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(t=>"number"==typeof t))return new kc(t.vectorValues);throw new P(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}kc._jsonSchemaVersion="firestore/vectorValue/1.0",kc._jsonSchema={type:ft("string",kc._jsonSchemaVersion),vectorValues:ft("object")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Oc=/^__.*__$/;class Rc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Fr(t,this.data,this.fieldMask,e,this.fieldTransforms):new Mr(t,this.data,e,this.fieldTransforms)}}class Dc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Fr(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Nc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O(40011,{dataSource:t})}}class Lc{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new Lc({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){const e=this.path?.child(t),n=this.contextWith({path:e,arrayElement:!1});return n.validatePathSegment(t),n}childContextForFieldPath(t){const e=this.path?.child(t),n=this.contextWith({path:e,arrayElement:!1});return n.validatePath(),n}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return Qc(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(0===t.length)throw this.createError("Document fields must not be empty");if(Nc(this.dataSource)&&Oc.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class Pc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||ao(t)}createContext(t,e,n,r=!1){return new Lc({dataSource:t,methodName:e,targetDoc:n,path:rt.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mc(t){const e=t._freezeSettings(),n=ao(t._databaseId);return new Pc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Fc(t,e,n,r,i,s={}){const o=t.createContext(s.merge||s.mergeFields?2:0,e,n,i);Gc("Data must be an object, but it was:",o,r);const a=zc(r,o);let c,u;if(s.merge)c=new me(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Kc(e,r,n);if(!o.contains(i))throw new P(L.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Yc(t,i)||t.push(i)}c=new me(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new Rc(new nn(a),c,u)}class Vc extends Ic{_toFieldTransform(t){if(2!==t.dataSource)throw 1===t.dataSource?t.createError(`${this._methodName}() can only appear at the top level of your update data`):t.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Vc}}class Uc extends Ic{constructor(t,e){super(t),this.Vc=e}_toFieldTransform(t){const e=new Er(t.serializer,fr(t.serializer,this.Vc));return new Ar(t.path,e)}isEqual(t){return t instanceof Uc&&this.Vc===t.Vc}}function jc(t,e,n,r){const i=t.createContext(1,e,n);Gc("Data must be an object, but it was:",i,r);const s=[],o=nn.empty();ue(r,(t,r)=>{const c=Wc(e,t,n);r=(0,a.Ku)(r);const u=i.childContextForFieldPath(c);if(r instanceof Vc)s.push(c);else{const t=Bc(r,u);null!=t&&(s.push(c),o.set(c,t))}});const c=new me(s);return new Dc(o,c,i.fieldTransforms)}function $c(t,e,n,r,i,s){const o=t.createContext(1,e,n),c=[Kc(e,r,n)],u=[i];if(s.length%2!=0)throw new P(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let a=0;a<s.length;a+=2)c.push(Kc(e,s[a])),u.push(s[a+1]);const l=[],h=nn.empty();for(let d=c.length-1;d>=0;--d)if(!Yc(l,c[d])){const t=c[d];let e=u[d];e=(0,a.Ku)(e);const n=o.childContextForFieldPath(t);if(e instanceof Vc)l.push(t);else{const r=Bc(e,n);null!=r&&(l.push(t),h.set(t,r))}}const f=new me(l);return new Dc(h,f,o.fieldTransforms)}function Bc(t,e){if(qc(t=(0,a.Ku)(t)))return Gc("Unsupported field value:",e,t),zc(t,e);if(t instanceof Ic)return function(t,e){if(!Nc(e.dataSource))throw e.createError(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.createError(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&4!==e.dataSource)throw e.createError("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Bc(i,e.childContextForArray(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.Ku)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return fr(e.serializer,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=mt.fromDate(t);return{timestampValue:vi(e.serializer,n)}}if(t instanceof mt){const n=new mt(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:vi(e.serializer,n)}}if(t instanceof xc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ac)return{bytesValue:wi(e.serializer,t._byteString)};if(t instanceof pc){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.createError(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ei(t.firestore._databaseId||e.databaseId,t._key.path)}}if(t instanceof kc)return function(t,e){const n=t instanceof kc?t.toArray():t,r={fields:{[Le]:{stringValue:Fe},[Ve]:{arrayValue:{values:n.map(t=>{if("number"!=typeof t)throw e.createError("VectorValues must only contain numeric values.");return lr(e.serializer,t)})}}}};return{mapValue:r}}(t,e);if(Wi(t))return t._toProto(e.serializer);throw e.createError(`Unsupported field value: ${lt(t)}`)}(t,e)}function zc(t,e){const n={};return le(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ue(t,(t,r)=>{const i=Bc(r,e.childContextForField(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function qc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof mt||t instanceof xc||t instanceof Ac||t instanceof pc||t instanceof Ic||t instanceof kc||Wi(t))}function Gc(t,e,n){if(!qc(n)||!ut(n)){const r=lt(n);throw"an object"===r?e.createError(t+" a custom object"):e.createError(t+" "+r)}}function Kc(t,e,n){if((e=(0,a.Ku)(e))instanceof Cc)return e._internalPath;if("string"==typeof e)return Wc(t,e);throw Qc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Hc=new RegExp("[~\\*/\\[\\]]");function Wc(t,e,n){if(e.search(Hc)>=0)throw Qc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cc(...e.split("."))._internalPath}catch(r){throw Qc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Qc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new P(L.INVALID_ARGUMENT,a+t+c)}function Yc(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xc{convertValue(t,e="none"){switch(Ue(t)){case 0:return null;case 1:return t.booleanValue;case 2:return _e(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw O(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ue(t,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertVectorValue(t){const e=t.fields?.[Ve].arrayValue?.values?.map(t=>_e(t.doubleValue));return new kc(e)}convertGeoPoint(t){return new xc(_e(t.latitude),_e(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=xe(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(ke(t));default:return null}}convertTimestamp(t){const e=be(t);return new mt(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=et.fromString(t);D(Hi(n),9688,{name:t});const r=new De(n.get(1),n.get(3)),i=new it(n.popFirst(5));return r.isEqual(e)||I(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc extends Xc{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ac(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new pc(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t){return new Uc("increment",t)}const tu="@firebase/firestore",eu="4.10.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  */(t,["next","error","complete"])}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ru{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new pc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new iu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(t){if(this._document){const e=this._document.data.field(Kc("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class iu extends ru{data(){return super.data()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new P(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}function ou(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class au{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class cu extends ru{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new uu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Kc("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new P(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=cu._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),t&&t.isValidDocument()&&t.isFoundDocument()?(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e):e}}cu._jsonSchemaVersion="firestore/documentSnapshot/1.0",cu._jsonSchema={type:ft("string",cu._jsonSchemaVersion),bundleSource:ft("string","DocumentSnapshot"),bundleName:ft("string"),bundle:ft("string")};class uu extends cu{data(t={}){return super.data(t)}}class lu{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new au(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new uu(this._firestore,this._userDataWriter,n.key,n,new au(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new P(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>{const r=new uu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new au(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}})}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new uu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new au(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:hu(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new P(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=lu._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=K.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],r=[];return this.docs.forEach(t=>{null!==t._document&&(e.push(t._document),n.push(this._userDataWriter.convertObjectMap(t._document.data.value.mapValue.fields,"previous")),r.push(t.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function hu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O(61501,{type:t})}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
lu._jsonSchemaVersion="firestore/querySnapshot/1.0",lu._jsonSchema={type:ft("string",lu._jsonSchemaVersion),bundleSource:ft("string","QuerySnapshot"),bundleName:ft("string"),bundle:ft("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fu{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Mc(t)}set(t,e,n){this._verifyNotCommitted();const r=du(t,this._firestore),i=ou(r.converter,e,n),s=Fc(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,xr.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const i=du(t,this._firestore);let s;return s="string"==typeof(e=(0,a.Ku)(e))||e instanceof Cc?$c(this._dataReader,"WriteBatch.update",i._key,e,n,r):jc(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(s.toMutation(i._key,xr.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=du(t,this._firestore);return this._mutations=this._mutations.concat(new $r(e._key,xr.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new P(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function du(t,e){if((t=(0,a.Ku)(t)).firestore!==e)throw new P(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pu(t){t=ht(t,pc);const e=ht(t.firestore,_c),n=Tc(e);return ec(n,t._key).then(n=>_u(e,t,n))}function gu(t){t=ht(t,dc);const e=ht(t.firestore,_c),n=Tc(e),r=new Jc(e);return su(t._query),nc(n,t._query).then(n=>new lu(e,r,t,n))}function mu(t,e,n){t=ht(t,pc);const r=ht(t.firestore,_c),i=ou(t.converter,e,n),s=Mc(r);return bu(r,[Fc(s,"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,xr.none())])}function yu(t,e,n,...r){t=ht(t,pc);const i=ht(t.firestore,_c),s=Mc(i);let o;return o="string"==typeof(e=(0,a.Ku)(e))||e instanceof Cc?$c(s,"updateDoc",t._key,e,n,r):jc(s,"updateDoc",t._key,e),bu(i,[o.toMutation(t._key,xr.exists(!0))])}function vu(t,e){const n=ht(t.firestore,_c),r=yc(t),i=ou(t.converter,e),s=Mc(t.firestore);return bu(n,[Fc(s,"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,xr.exists(!1))]).then(()=>r)}function wu(t,...e){t=(0,a.Ku)(t);let n={includeMetadataChanges:!1,source:"default"},r=0;"object"!=typeof e[r]||nu(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(nu(e[r])){const t=e[r];e[r]=t.next?.bind(t),e[r+1]=t.error?.bind(t),e[r+2]=t.complete?.bind(t)}let s,o,c;if(t instanceof pc)o=ht(t.firestore,_c),c=Pn(t._key.path),s={next:n=>{e[r]&&e[r](_u(o,t,n))},error:e[r+1],complete:e[r+2]};else{const n=ht(t,dc);o=ht(n.firestore,_c),c=n._query;const i=new Jc(o);s={next:t=>{e[r]&&e[r](new lu(o,i,n,t))},error:e[r+1],complete:e[r+2]},su(t._query)}const u=Tc(o);return tc(u,c,i,s)}function bu(t,e){const n=Tc(t);return rc(n,e)}function _u(t,e,n){const r=n.docs.get(e._key),i=new Jc(t);return new cu(t,i,e._key,r,new au(n.hasPendingWrites,n.fromCache),e.converter)}function Eu(t){return t=ht(t,_c),Tc(t),new fu(t,e=>bu(t,e))
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}new WeakMap;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){T(s.MF),(0,s.om)(new o.uA("firestore",(t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new _c(new j(t.getProvider("auth-internal")),new q(i,t.getProvider("app-check-internal")),Ne(i,n),i);return r={useFetchStreams:e,...r},s._setSettings(r),s},"PUBLIC").setMultipleInstances(!0)),(0,s.KO)(tu,eu,t),(0,s.KO)(tu,eu,"esm2020")}()},1867:function(t,e,n){var r=n(3493),i=n(9328),s=RangeError;t.exports=function(t,e,n,o){var a=r(t),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw new s("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===u?o:t[h];return l}},1869:function(t,e,n){var r=n(1009),i=n(1171).add,s=n(9583),o=n(2926),a=n(64);t.exports=function(t){var e=r(this),n=o(t).getIterator(),c=s(e);return a(n,function(t){i(c,t)}),c}},1898:function(t,e,n){var r=n(3062),i=n(6457),s=n(8406),o=n(2228),a=n(1602),c=a("iterator");t.exports=function(t){if(!s(t))return i(t,c)||i(t,"@@iterator")||o[r(t)]}},1924:function(t,e,n){n.d(e,{c7:function(){return K}});n(8743),n(959),n(6736),n(9639),n(9286),n(9266),n(3725),n(5019),n(9838),n(1339),n(282),n(292),n(9074),n(11),n(2818),n(2289),n(4694),n(1784),n(9078);var r=n(262),i=n(2455),s=n(798);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const o="firebasestorage.googleapis.com",a="storageBucket",c=12e4,u=6e5;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l extends i.g{constructor(t,e,n=0){super(d(t),`Firebase Storage: ${e} (${d(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,l.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return d(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var h,f;function d(t){return"storage/"+t}function p(){const t="An unknown error occurred, please check the error payload for server response.";return new l(h.UNKNOWN,t)}function g(){return new l(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function m(){return new l(h.CANCELED,"User canceled the upload/download.")}function y(t){return new l(h.INVALID_URL,"Invalid URL '"+t+"'.")}function v(t){return new l(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function w(t){return new l(h.INVALID_ARGUMENT,t)}function b(){return new l(h.APP_DELETED,"The Firebase app was deleted.")}function _(t){return new l(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(function(t){t["UNKNOWN"]="unknown",t["OBJECT_NOT_FOUND"]="object-not-found",t["BUCKET_NOT_FOUND"]="bucket-not-found",t["PROJECT_NOT_FOUND"]="project-not-found",t["QUOTA_EXCEEDED"]="quota-exceeded",t["UNAUTHENTICATED"]="unauthenticated",t["UNAUTHORIZED"]="unauthorized",t["UNAUTHORIZED_APP"]="unauthorized-app",t["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",t["INVALID_CHECKSUM"]="invalid-checksum",t["CANCELED"]="canceled",t["INVALID_EVENT_NAME"]="invalid-event-name",t["INVALID_URL"]="invalid-url",t["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",t["NO_DEFAULT_BUCKET"]="no-default-bucket",t["CANNOT_SLICE_BLOB"]="cannot-slice-blob",t["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",t["NO_DOWNLOAD_URL"]="no-download-url",t["INVALID_ARGUMENT"]="invalid-argument",t["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",t["APP_DELETED"]="app-deleted",t["INVALID_ROOT_OPERATION"]="invalid-root-operation",t["INVALID_FORMAT"]="invalid-format",t["INTERNAL_ERROR"]="internal-error",t["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(h||(h={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class E{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=E.makeFromUrl(t,e)}catch(r){return new E(t,"")}if(""===n.path)return n;throw v(t)}static makeFromUrl(t,e){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}const s="(/(.*))?$",a=new RegExp("^gs://"+r+s,"i"),c={bucket:1,path:3};function u(t){t.path_=decodeURIComponent(t.path)}const l="v[A-Za-z0-9_]+",h=e.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${l}/b/${r}/o${f}`,"i"),p={bucket:1,path:3},g=e===o?"(?:storage.googleapis.com|storage.cloud.google.com)":e,m="([^?#]*)",v=new RegExp(`^https?://${g}/${r}/${m}`,"i"),w={bucket:1,path:2},b=[{regex:a,indices:c,postModify:i},{regex:d,indices:p,postModify:u},{regex:v,indices:w,postModify:u}];for(let o=0;o<b.length;o++){const e=b[o],r=e.regex.exec(t);if(r){const t=r[e.indices.bucket];let i=r[e.indices.path];i||(i=""),n=new E(t,i),e.postModify(n);break}}if(null==n)throw y(t);return n}}class T{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...t){u||(u=!0,e.apply(null,t))}function h(e){i=setTimeout(()=>{i=null,t(d,c())},e)}function f(){s&&clearTimeout(s)}function d(t,...e){if(u)return void f();if(t)return f(),void l.call(null,t,...e);const n=c()||o;if(n)return f(),void l.call(null,t,...e);let i;r<64&&(r*=2),1===a?(a=2,i=0):i=1e3*(r+Math.random()),h(i)}let p=!1;function g(t){p||(p=!0,f(),u||(null!==i?(t||(a=2),clearTimeout(i),h(0)):t||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,g(!0)},n),g}function A(t){t(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t){return void 0!==t}function I(t,e,n,r){if(r<e)throw w(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw w(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function k(t,e){const n=t>=500&&t<600,r=[408,429],i=-1!==r.indexOf(t),s=-1!==e.indexOf(t);return n||i||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(f||(f={}));class O{constructor(t,e,n,r,i,s,o,a,c,u,l,h=!0,f=!1){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.isUsingEmulator=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=(t,e)=>{if(e)return void t(!1,new R(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const r=t=>{const e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;const e=n.getErrorCode()===f.NO_ERROR,i=n.getStatus();if(!e||k(i,this.additionalRetryCodes_)&&this.retry){const e=n.getErrorCode()===f.ABORT;return void t(!1,new R(!1,null,e))}const s=-1!==this.successCodes_.indexOf(i);t(!0,new R(s,n))})},e=(t,e)=>{const n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{const t=this.callback_(i,i.getResponse());C(t)?n(t):n()}catch(s){r(s)}else if(null!==i){const t=p();t.serverResponse=i.getErrorText(),this.errorCallback_?r(this.errorCallback_(i,t)):r(t)}else if(e.canceled){const t=this.appDelete_?b():m();r(t)}else{const t=g();r(t)}};this.canceled_?e(!1,new R(!1,null,!0)):this.backoffId_=S(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&A(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class R{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function D(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function N(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function L(t,e){e&&(t["X-Firebase-GMPID"]=e)}function P(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}function M(t,e,n,r,i,s,o=!0,a=!1){const c=x(t.urlParams),u=t.url+c,l=Object.assign({},t.headers);return L(l,e),D(l,n),N(l,s),P(l,r),new O(u,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,a)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(t){if(0===t.length)return null;const e=t.lastIndexOf("/");if(-1===e)return"";const n=t.slice(0,e);return n}function V(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class U{constructor(t,e){this._service=t,this._location=e instanceof E?e:E.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new U(t,e)}get root(){const t=new E(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return V(this._location.path)}get storage(){return this._service}get parent(){const t=F(this._location.path);if(null===t)return null;const e=new E(this._location.bucket,t);return new U(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw _(t)}}function j(t,e){const n=e?.[a];return null==n?null:E.makeFromBucketSpec(n,t)}function $(t,e,n,r={}){t.host=`${e}:${n}`;const s=(0,i.zJ)(e);s&&((0,i.gE)(`https://${t.host}/b`),(0,i.P1)("Storage",!0)),t._isUsingEmulator=!0,t._protocol=s?"https":"http";const{mockUserToken:o}=r;o&&(t._overrideAuthToken="string"===typeof o?o:(0,i.Fy)(o,t.app.options.projectId))}class B{constructor(t,e,n,r,i,s=!1){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._isUsingEmulator=s,this._bucket=null,this._host=o,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c,this._maxUploadRetryTime=u,this._requests=new Set,this._bucket=null!=r?E.makeFromBucketSpec(r,this._host):j(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=E.makeFromBucketSpec(this._url,t):this._bucket=j(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){I("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){I("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){if((0,r.xZ)(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new U(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new T(b());{const s=M(t,this._appId,n,r,e,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,e){const[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}const z="@firebase/storage",q="0.14.0",G="storage";function K(t=(0,r.Sx)(),e){t=(0,i.Ku)(t);const n=(0,r.j6)(t,G),s=n.getImmediate({identifier:e}),o=(0,i.yU)("storage");return o&&H(s,...o),s}function H(t,e,n,r={}){$(t,e,n,r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new B(n,i,s,e,r.MF)}function Q(){(0,r.om)(new s.uA(G,W,"PUBLIC").setMultipleInstances(!0)),(0,r.KO)(z,q,""),(0,r.KO)(z,q,"esm2020")}Q()},2057:function(t,e,n){var r=n(6032),i=n(3610),s=n(6843);t.exports=function(t,e,n){var o=r(e);o in t?i.f(t,o,s(0,n)):t[o]=n}},2071:function(t,e,n){var r=n(5077),i=n(6490),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},2072:function(t,e,n){var r=n(6845),i=n(2074),s=n(200),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!i(function(){var t=Symbol("symbol detection");return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41})},2074:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},2228:function(t){t.exports={}},2289:function(t,e,n){var r=n(1605),i=n(3632),s=n(8223);r({target:"Set",proto:!0,real:!0,forced:!s("isSupersetOf")},{isSupersetOf:i})},2328:function(t,e,n){var r=n(6492),i=n(8420),s=n(7658),o=n(5225),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},2368:function(t,e,n){var r=n(8823),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},2455:function(t,e,n){n.d(e,{cY:function(){return w},FA:function(){return M},g:function(){return P},u:function(){return l},Uj:function(){return u},Fy:function(){return E},bD:function(){return U},T9:function(){return v},yU:function(){return y},mS:function(){return h},Ku:function(){return $},ZQ:function(){return x},zJ:function(){return b},zW:function(){return D},nr:function(){return O},Ov:function(){return R},gE:function(){return _},P1:function(){return I},eX:function(){return N}});n(8743),n(959),n(3725),n(9838),n(282),n(9078),n(6380),n(1059),n(2838);const r=()=>{},i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==u||null==h)throw new a;const f=e<<2|o>>4;if(r.push(f),64!==u){const t=o<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class a extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const c=function(t){const e=i(t);return o.encodeByteArray(e,!0)},u=function(t){return c(t).replace(/\./g,"")},l=function(t){try{return o.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>h().__FIREBASE_DEFAULTS__,d=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},p=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&l(t[1]);return e&&JSON.parse(e)},g=()=>{try{return r()||f()||d()||p()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>g()?.emulatorHosts?.[t],y=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>g()?.config;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t){try{const e=t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t;return e.endsWith(".cloudworkstations.dev")}catch{return!1}}async function _(t){const e=await fetch(t,{credentials:"include"});return e.ok}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t},a="";return[u(JSON.stringify(n)),u(JSON.stringify(o)),a].join(".")}const T={};function S(){const t={prod:[],emulator:[]};for(const e of Object.keys(T))T[e]?t.emulator.push(e):t.prod.push(e);return t}function A(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let C=!1;function I(t,e){if("undefined"===typeof window||"undefined"===typeof document||!b(window.location.host)||T[t]===e||T[t]||C)return;function n(t){return`__firebase__banner__${t}`}T[t]=e;const r="__firebase__banner",i=S(),s=i.prod.length>0;function o(){const t=document.getElementById(r);t&&t.remove()}function a(t){t.style.display="flex",t.style.background="#7faaf0",t.style.position="fixed",t.style.bottom="5px",t.style.left="5px",t.style.padding=".5em",t.style.borderRadius="5px",t.style.alignItems="center"}function c(t,e){t.setAttribute("width","24"),t.setAttribute("id",e),t.setAttribute("height","24"),t.setAttribute("viewBox","0 0 24 24"),t.setAttribute("fill","none"),t.style.marginLeft="-6px"}function u(){const t=document.createElement("span");return t.style.cursor="pointer",t.style.marginLeft="16px",t.style.fontSize="24px",t.innerHTML=" &times;",t.onclick=()=>{C=!0,o()},t}function l(t,e){t.setAttribute("id",e),t.innerText="Learn more",t.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",t.setAttribute("target","__blank"),t.style.paddingLeft="5px",t.style.textDecoration="underline"}function h(){const t=A(r),e=n("text"),i=document.getElementById(e)||document.createElement("span"),o=n("learnmore"),h=document.getElementById(o)||document.createElement("a"),f=n("preprendIcon"),d=document.getElementById(f)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(t.created){const e=t.element;a(e),l(h,o);const n=u();c(d,f),e.append(d,i,h,n),document.body.appendChild(e)}s?(i.innerText="Preview backend disconnected.",d.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(d.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',i.innerText="Preview backend running in this workspace."),i.setAttribute("id",e)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",h):h()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function k(){const t=g()?.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(e){return!1}}function O(){return!k()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function R(){return!k()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function D(){try{return"object"===typeof indexedDB}catch(t){return!1}}function N(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const L="FirebaseError";class P extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=L,Object.setPrototypeOf(this,P.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}}class M{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?F(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new P(r,o,n);return a}}function F(t,e){return t.replace(V,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const V=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(j(n)&&j(s)){if(!U(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function j(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(t){return t&&t._delegate?t._delegate:t}},2598:function(t,e,n){var r=n(1605),i=n(2929),s=n(4601),o=n(3938),a=n(938);r({target:"Iterator",proto:!0,real:!0},{find:function(t){o(this),s(t);var e=a(this),n=0;return i(e,function(e,r){if(t(e,n++))return r(e)},{IS_RECORD:!0,INTERRUPTED:!0}).result}})},2612:function(t,e,n){var r=n(1229),i=Object;t.exports=function(t){return i(r(t))}},2760:function(t,e,n){var r=n(7485);t.exports=function(t,e,n){for(var i in e)r(t,i,e[i],n);return t}},2785:function(t,e,n){var r=n(5223);t.exports=function(t){try{if(r)return Function('return require("'+t+'")')()}catch(e){}}},2818:function(t,e,n){var r=n(1605),i=n(3601),s=n(8223);r({target:"Set",proto:!0,real:!0,forced:!s("isSubsetOf")},{isSubsetOf:i})},2838:function(t,e,n){var r=n(5077),i=n(281),s=n(6477),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var t=0;return a(this,function(){t++}),t},configurable:!0,enumerable:!0})},2926:function(t,e,n){var r=n(4601),i=n(3938),s=n(2368),o=n(9328),a=n(938),c="Invalid size",u=RangeError,l=TypeError,h=Math.max,f=function(t,e,n,r){this.set=t,this.size=e,this.has=n,this.keys=r};f.prototype={getIterator:function(){return a(i(s(this.keys,this.set)))},includes:function(t){return s(this.has,this.set,t)}},t.exports=function(t){i(t);var e=+t.size;if(e!==e)throw new l(c);var n=o(e);if(n<0)throw new u(c);return new f(t,h(n,0),r(t.has),r(t.keys))}},2929:function(t,e,n){var r=n(6885),i=n(2368),s=n(3938),o=n(3838),a=n(9034),c=n(3493),u=n(7658),l=n(9526),h=n(1898),f=n(9868),d=TypeError,p=function(t,e){this.stopped=t,this.result=e},g=p.prototype;t.exports=function(t,e,n){var m,y,v,w,b,_,E,T=n&&n.that,S=!(!n||!n.AS_ENTRIES),A=!(!n||!n.IS_RECORD),C=!(!n||!n.IS_ITERATOR),I=!(!n||!n.INTERRUPTED),x=r(e,T),k=function(t){return m&&f(m,"normal",t),new p(!0,t)},O=function(t){return S?(s(t),I?x(t[0],t[1],k):x(t[0],t[1])):I?x(t,k):x(t)};if(A)m=t.iterator;else if(C)m=t;else{if(y=h(t),!y)throw new d(o(t)+" is not iterable");if(a(y)){for(v=0,w=c(t);w>v;v++)if(b=O(t[v]),b&&u(g,b))return b;return new p(!1)}m=l(t,y)}_=A?t.next:m.next;while(!(E=i(_,m)).done){try{b=O(E.value)}catch(R){f(m,"throw",R)}if("object"==typeof b&&b&&u(g,b))return b}return new p(!1)}},3005:function(t,e,n){var r=n(874),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw new i("Can't convert number to bigint");return BigInt(e)}},3054:function(t,e,n){var r=n(8420),i=n(5335),s=n(9686);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},3062:function(t,e,n){var r=n(3129),i=n(8420),s=n(8569),o=n(1602),a=o("toStringTag"),c=Object,u="Arguments"===s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?s(e):"Object"===(r=s(e))&&i(e.callee)?"Arguments":r}},3091:function(t,e,n){var r=n(8569),i=n(281);t.exports=function(t){if("Function"===r(t))return i(t)}},3105:function(t,e,n){var r,i=n(3938),s=n(5318),o=n(290),a=n(7708),c=n(8890),u=n(3262),l=n(5904),h=">",f="<",d="prototype",p="script",g=l("IE_PROTO"),m=function(){},y=function(t){return f+p+h+t+f+"/"+p+h},v=function(t){t.write(y("")),t.close();var e=t.parentWindow.Object;return t=null,e},w=function(){var t,e=u("iframe"),n="java"+p+":";return e.style.display="none",c.appendChild(e),e.src=String(n),t=e.contentWindow.document,t.open(),t.write(y("document.F=Object")),t.close(),t.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(e){}b="undefined"!=typeof document?document.domain&&r?v(r):w():v(r);var t=o.length;while(t--)delete b[d][o[t]];return b()};a[g]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(m[d]=i(t),n=new m,m[d]=null,n[g]=t):n=b(),void 0===e?n:s.f(n,e)}},3129:function(t,e,n){var r=n(1602),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},3262:function(t,e,n){var r=n(200),i=n(5335),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},3291:function(t,e,n){var r=n(200),i=n(2074),s=n(6845),o=n(8523),a=n(419),c=n(5223),u=r.structuredClone;t.exports=!!u&&!i(function(){if(a&&s>92||c&&s>94||o&&s>97)return!1;var t=new ArrayBuffer(8),e=u(t,{transfer:[t]});return 0!==t.byteLength||8!==e.byteLength})},3367:function(t,e,n){n.d(e,{Ey:function(){return ft},nY:function(){return At}});n(8743),n(959),n(3725),n(5019),n(9838),n(1339),n(9471),n(282),n(292),n(9074),n(11),n(2818),n(2289),n(4694),n(1784),n(6380),n(1059),n(2838);var r=n(144),i=n(6768),s=!1;function o(t,e,n){return Array.isArray(t)?(t.length=Math.max(t.length,e),t.splice(e,1,n),n):(t[e]=n,n)}function a(){return c().__VUE_DEVTOOLS_GLOBAL_HOOK__}function c(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const u="function"===typeof Proxy,l="devtools-plugin:setup",h="plugin:settings:set";let f,d,p;function g(){var t;return void 0!==f||("undefined"!==typeof window&&window.performance?(f=!0,d=window.performance):"undefined"!==typeof n.g&&(null===(t=n.g.perf_hooks)||void 0===t?void 0:t.performance)?(f=!0,d=n.g.perf_hooks.performance):f=!1),f}function m(){return g()?d.now():Date.now()}class y{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const o in t.settings){const e=t.settings[o];n[o]=e.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(i,e)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(s){}i=t},now(){return m()}},e&&e.on(h,(t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)}),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise(n=>{this.targetQueue.push({method:e,args:t,resolve:n})})})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function v(t,e){const n=t,r=c(),i=a(),s=u&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&s){const t=s?new y(n,i):null,o=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];o.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else i.emit(l,t,e)}const w=t=>p=t,b=Symbol();function _(t){return t&&"object"===typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!==typeof t.toJSON}var E;(function(t){t["direct"]="direct",t["patchObject"]="patch object",t["patchFunction"]="patch function"})(E||(E={}));const T="undefined"!==typeof window,S=!1,A=(()=>"object"===typeof window&&window.window===window?window:"object"===typeof self&&self.self===self?self:"object"===typeof n.g&&n.g.global===n.g?n.g:"object"===typeof globalThis?globalThis:{HTMLElement:null})();function C(t,{autoBom:e=!1}={}){return e&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}function I(t,e,n){const r=new XMLHttpRequest;r.open("GET",t),r.responseType="blob",r.onload=function(){D(r.response,e,n)},r.onerror=function(){console.error("could not download file")},r.send()}function x(t){const e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(n){}return e.status>=200&&e.status<=299}function k(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(e){const n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(n)}}const O="object"===typeof navigator?navigator:{userAgent:""},R=(()=>/Macintosh/.test(O.userAgent)&&/AppleWebKit/.test(O.userAgent)&&!/Safari/.test(O.userAgent))(),D=T?"undefined"!==typeof HTMLAnchorElement&&"download"in HTMLAnchorElement.prototype&&!R?N:"msSaveOrOpenBlob"in O?L:P:()=>{};function N(t,e="download",n){const r=document.createElement("a");r.download=e,r.rel="noopener","string"===typeof t?(r.href=t,r.origin!==location.origin?x(r.href)?I(t,e,n):(r.target="_blank",k(r)):k(r)):(r.href=URL.createObjectURL(t),setTimeout(function(){URL.revokeObjectURL(r.href)},4e4),setTimeout(function(){k(r)},0))}function L(t,e="download",n){if("string"===typeof t)if(x(t))I(t,e,n);else{const e=document.createElement("a");e.href=t,e.target="_blank",setTimeout(function(){k(e)})}else navigator.msSaveOrOpenBlob(C(t,n),e)}function P(t,e,n,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"===typeof t)return I(t,e,n);const i="application/octet-stream"===t.type,s=/constructor/i.test(String(A.HTMLElement))||"safari"in A,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||i&&s||R)&&"undefined"!==typeof FileReader){const e=new FileReader;e.onloadend=function(){let t=e.result;if("string"!==typeof t)throw r=null,new Error("Wrong reader.result type");t=o?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location.assign(t),r=null},e.readAsDataURL(t)}else{const e=URL.createObjectURL(t);r?r.location.assign(e):location.href=e,r=null,setTimeout(function(){URL.revokeObjectURL(e)},4e4)}}function M(t,e){const n="🍍 "+t;"function"===typeof __VUE_DEVTOOLS_TOAST__?__VUE_DEVTOOLS_TOAST__(n,e):"error"===e?console.error(n):"warn"===e?console.warn(n):console.log(n)}function F(t){return"_a"in t&&"install"in t}function V(){if(!("clipboard"in navigator))return M("Your browser doesn't support the Clipboard API","error"),!0}function U(t){return!!(t instanceof Error&&t.message.toLowerCase().includes("document is not focused"))&&(M('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.',"warn"),!0)}async function j(t){if(!V())try{await navigator.clipboard.writeText(JSON.stringify(t.state.value)),M("Global state copied to clipboard.")}catch(e){if(U(e))return;M("Failed to serialize the state. Check the console for more details.","error"),console.error(e)}}async function $(t){if(!V())try{K(t,JSON.parse(await navigator.clipboard.readText())),M("Global state pasted from clipboard.")}catch(e){if(U(e))return;M("Failed to deserialize the state from clipboard. Check the console for more details.","error"),console.error(e)}}async function B(t){try{D(new Blob([JSON.stringify(t.state.value)],{type:"text/plain;charset=utf-8"}),"pinia-state.json")}catch(e){M("Failed to export the state as JSON. Check the console for more details.","error"),console.error(e)}}let z;function q(){function t(){return new Promise((t,e)=>{z.onchange=async()=>{const e=z.files;if(!e)return t(null);const n=e.item(0);return t(n?{text:await n.text(),file:n}:null)},z.oncancel=()=>t(null),z.onerror=e,z.click()})}return z||(z=document.createElement("input"),z.type="file",z.accept=".json"),t}async function G(t){try{const e=q(),n=await e();if(!n)return;const{text:r,file:i}=n;K(t,JSON.parse(r)),M(`Global state imported from "${i.name}".`)}catch(e){M("Failed to import the state from JSON. Check the console for more details.","error"),console.error(e)}}function K(t,e){for(const n in e){const r=t.state.value[n];r?Object.assign(r,e[n]):t.state.value[n]=e[n]}}function H(t){return{_custom:{display:t}}}const W="🍍 Pinia (root)",Q="_root";function Y(t){return F(t)?{id:Q,label:W}:{id:t.$id,label:t.$id}}function X(t){if(F(t)){const e=Array.from(t._s.keys()),n=t._s,r={state:e.map(e=>({editable:!0,key:e,value:t.state.value[e]})),getters:e.filter(t=>n.get(t)._getters).map(t=>{const e=n.get(t);return{editable:!1,key:t,value:e._getters.reduce((t,n)=>(t[n]=e[n],t),{})}})};return r}const e={state:Object.keys(t.$state).map(e=>({editable:!0,key:e,value:t.$state[e]}))};return t._getters&&t._getters.length&&(e.getters=t._getters.map(e=>({editable:!1,key:e,value:t[e]}))),t._customProperties.size&&(e.customProperties=Array.from(t._customProperties).map(e=>({editable:!0,key:e,value:t[e]}))),e}function J(t){return t?Array.isArray(t)?t.reduce((t,e)=>(t.keys.push(e.key),t.operations.push(e.type),t.oldValue[e.key]=e.oldValue,t.newValue[e.key]=e.newValue,t),{oldValue:{},keys:[],operations:[],newValue:{}}):{operation:H(t.type),key:H(t.key),oldValue:t.oldValue,newValue:t.newValue}:{}}function Z(t){switch(t){case E.direct:return"mutation";case E.patchFunction:return"$patch";case E.patchObject:return"$patch";default:return"unknown"}}let tt=!0;const et=[],nt="pinia:mutations",rt="pinia",{assign:it}=Object,st=t=>"🍍 "+t;function ot(t,e){v({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:et,app:t},n=>{"function"!==typeof n.now&&M("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),n.addTimelineLayer({id:nt,label:"Pinia 🍍",color:15064968}),n.addInspector({id:rt,label:"Pinia 🍍",icon:"storage",treeFilterPlaceholder:"Search stores",actions:[{icon:"content_copy",action:()=>{j(e)},tooltip:"Serialize and copy the state"},{icon:"content_paste",action:async()=>{await $(e),n.sendInspectorTree(rt),n.sendInspectorState(rt)},tooltip:"Replace the state with the content of your clipboard"},{icon:"save",action:()=>{B(e)},tooltip:"Save the state as a JSON file"},{icon:"folder_open",action:async()=>{await G(e),n.sendInspectorTree(rt),n.sendInspectorState(rt)},tooltip:"Import the state from a JSON file"}],nodeActions:[{icon:"restore",tooltip:'Reset the state (with "$reset")',action:t=>{const n=e._s.get(t);n?"function"!==typeof n.$reset?M(`Cannot reset "${t}" store because it doesn't have a "$reset" method implemented.`,"warn"):(n.$reset(),M(`Store "${t}" reset.`)):M(`Cannot reset "${t}" store because it wasn't found.`,"warn")}}]}),n.on.inspectComponent((t,e)=>{const n=t.componentInstance&&t.componentInstance.proxy;if(n&&n._pStores){const e=t.componentInstance.proxy._pStores;Object.values(e).forEach(e=>{t.instanceData.state.push({type:st(e.$id),key:"state",editable:!0,value:e._isOptionsAPI?{_custom:{value:(0,r.ux)(e.$state),actions:[{icon:"restore",tooltip:"Reset the state of this store",action:()=>e.$reset()}]}}:Object.keys(e.$state).reduce((t,n)=>(t[n]=e.$state[n],t),{})}),e._getters&&e._getters.length&&t.instanceData.state.push({type:st(e.$id),key:"getters",editable:!1,value:e._getters.reduce((t,n)=>{try{t[n]=e[n]}catch(r){t[n]=r}return t},{})})})}}),n.on.getInspectorTree(n=>{if(n.app===t&&n.inspectorId===rt){let t=[e];t=t.concat(Array.from(e._s.values())),n.rootNodes=(n.filter?t.filter(t=>"$id"in t?t.$id.toLowerCase().includes(n.filter.toLowerCase()):W.toLowerCase().includes(n.filter.toLowerCase())):t).map(Y)}}),n.on.getInspectorState(n=>{if(n.app===t&&n.inspectorId===rt){const t=n.nodeId===Q?e:e._s.get(n.nodeId);if(!t)return;t&&(n.state=X(t))}}),n.on.editInspectorState((n,r)=>{if(n.app===t&&n.inspectorId===rt){const t=n.nodeId===Q?e:e._s.get(n.nodeId);if(!t)return M(`store "${n.nodeId}" not found`,"error");const{path:r}=n;F(t)?r.unshift("state"):1===r.length&&t._customProperties.has(r[0])&&!(r[0]in t.$state)||r.unshift("$state"),tt=!1,n.set(t,r,n.state.value),tt=!0}}),n.on.editComponentState(t=>{if(t.type.startsWith("🍍")){const n=t.type.replace(/^🍍\s*/,""),r=e._s.get(n);if(!r)return M(`store "${n}" not found`,"error");const{path:i}=t;if("state"!==i[0])return M(`Invalid path for store "${n}":\n${i}\nOnly state can be modified.`);i[0]="$state",tt=!1,t.set(r,i,t.state.value),tt=!0}})})}function at(t,e){et.includes(st(e.$id))||et.push(st(e.$id)),v({id:"dev.esm.pinia",label:"Pinia 🍍",logo:"https://pinia.vuejs.org/logo.svg",packageName:"pinia",homepage:"https://pinia.vuejs.org",componentStateTypes:et,app:t,settings:{logStoreChanges:{label:"Notify about new/deleted stores",type:"boolean",defaultValue:!0}}},t=>{const n="function"===typeof t.now?t.now.bind(t):Date.now;e.$onAction(({after:r,onError:i,name:s,args:o})=>{const a=ut++;t.addTimelineEvent({layerId:nt,event:{time:n(),title:"🛫 "+s,subtitle:"start",data:{store:H(e.$id),action:H(s),args:o},groupId:a}}),r(r=>{ct=void 0,t.addTimelineEvent({layerId:nt,event:{time:n(),title:"🛬 "+s,subtitle:"end",data:{store:H(e.$id),action:H(s),args:o,result:r},groupId:a}})}),i(r=>{ct=void 0,t.addTimelineEvent({layerId:nt,event:{time:n(),logType:"error",title:"💥 "+s,subtitle:"end",data:{store:H(e.$id),action:H(s),args:o,error:r},groupId:a}})})},!0),e._customProperties.forEach(s=>{(0,i.wB)(()=>(0,r.R1)(e[s]),(e,r)=>{t.notifyComponentUpdate(),t.sendInspectorState(rt),tt&&t.addTimelineEvent({layerId:nt,event:{time:n(),title:"Change",subtitle:s,data:{newValue:e,oldValue:r},groupId:ct}})},{deep:!0})}),e.$subscribe(({events:r,type:i},s)=>{if(t.notifyComponentUpdate(),t.sendInspectorState(rt),!tt)return;const o={time:n(),title:Z(i),data:it({store:H(e.$id)},J(r)),groupId:ct};i===E.patchFunction?o.subtitle="⤵️":i===E.patchObject?o.subtitle="🧩":r&&!Array.isArray(r)&&(o.subtitle=r.type),r&&(o.data["rawEvent(s)"]={_custom:{display:"DebuggerEvent",type:"object",tooltip:"raw DebuggerEvent[]",value:r}}),t.addTimelineEvent({layerId:nt,event:o})},{detached:!0,flush:"sync"});const s=e._hotUpdate;e._hotUpdate=(0,r.IG)(r=>{s(r),t.addTimelineEvent({layerId:nt,event:{time:n(),title:"🔥 "+e.$id,subtitle:"HMR update",data:{store:H(e.$id),info:H("HMR update")}}}),t.notifyComponentUpdate(),t.sendInspectorTree(rt),t.sendInspectorState(rt)});const{$dispose:o}=e;e.$dispose=()=>{o(),t.notifyComponentUpdate(),t.sendInspectorTree(rt),t.sendInspectorState(rt),t.getSettings().logStoreChanges&&M(`Disposed "${e.$id}" store 🗑`)},t.notifyComponentUpdate(),t.sendInspectorTree(rt),t.sendInspectorState(rt),t.getSettings().logStoreChanges&&M(`"${e.$id}" store installed 🆕`)})}let ct,ut=0;function lt(t,e,n){const i=e.reduce((e,n)=>(e[n]=(0,r.ux)(t)[n],e),{});for(const r in i)t[r]=function(){const e=ut,s=n?new Proxy(t,{get(...t){return ct=e,Reflect.get(...t)},set(...t){return ct=e,Reflect.set(...t)}}):t;ct=e;const o=i[r].apply(s,arguments);return ct=void 0,o}}function ht({app:t,store:e,options:n}){if(e.$id.startsWith("__hot:"))return;e._isOptionsAPI=!!n.state,lt(e,Object.keys(n.actions),e._isOptionsAPI);const i=e._hotUpdate;(0,r.ux)(e)._hotUpdate=function(t){i.apply(this,arguments),lt(e,Object.keys(t._hmrPayload.actions),!!e._isOptionsAPI)},at(t,e)}function ft(){const t=(0,r.uY)(!0),e=t.run(()=>(0,r.KR)({}));let n=[],i=[];const o=(0,r.IG)({install(t){w(o),s||(o._a=t,t.provide(b,o),t.config.globalProperties.$pinia=o,S&&ot(t,o),i.forEach(t=>n.push(t)),i=[])},use(t){return this._a||s?n.push(t):i.push(t),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return S&&"undefined"!==typeof Proxy&&o.use(ht),o}const dt=()=>{};function pt(t,e,n,i=dt){t.push(e);const s=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),i())};return!n&&(0,r.o5)()&&(0,r.jr)(s),s}function gt(t,...e){t.slice().forEach(t=>{t(...e)})}const mt=t=>t();function yt(t,e){t instanceof Map&&e instanceof Map&&e.forEach((e,n)=>t.set(n,e)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],s=t[n];_(s)&&_(i)&&t.hasOwnProperty(n)&&!(0,r.i9)(i)&&!(0,r.g8)(i)?t[n]=yt(s,i):t[n]=i}return t}const vt=Symbol(),wt=new WeakMap;function bt(t){return s?!wt.has(t):!_(t)||!t.hasOwnProperty(vt)}const{assign:_t}=Object;function Et(t){return!(!(0,r.i9)(t)||!t.effect)}function Tt(t,e,n,a){const{state:c,actions:u,getters:l}=e,h=n.state.value[t];let f;function d(){h||(s?o(n.state.value,t,c?c():{}):n.state.value[t]=c?c():{});const e=(0,r.QW)(n.state.value[t]);return _t(e,u,Object.keys(l||{}).reduce((e,o)=>(e[o]=(0,r.IG)((0,i.EW)(()=>{w(n);const e=n._s.get(t);if(!s||e._r)return l[o].call(e,e)})),e),{}))}return f=St(t,d,e,n,a,!0),f}function St(t,e,n={},a,c,u){let l;const h=_t({actions:{}},n);const f={deep:!0};let d,p;let g,m=[],y=[];const v=a.state.value[t];u||v||(s?o(a.state.value,t,{}):a.state.value[t]={});const b=(0,r.KR)({});let _;function T(e){let n;d=p=!1,"function"===typeof e?(e(a.state.value[t]),n={type:E.patchFunction,storeId:t,events:g}):(yt(a.state.value[t],e),n={type:E.patchObject,payload:e,storeId:t,events:g});const r=_=Symbol();(0,i.dY)().then(()=>{_===r&&(d=!0)}),p=!0,gt(m,n,a.state.value[t])}const A=u?function(){const{state:t}=n,e=t?t():{};this.$patch(t=>{_t(t,e)})}:dt;function C(){l.stop(),m=[],y=[],a._s.delete(t)}function I(e,n){return function(){w(a);const r=Array.from(arguments),i=[],s=[];function o(t){i.push(t)}function c(t){s.push(t)}let u;gt(y,{args:r,name:e,store:O,after:o,onError:c});try{u=n.apply(this&&this.$id===t?this:O,r)}catch(l){throw gt(s,l),l}return u instanceof Promise?u.then(t=>(gt(i,t),t)).catch(t=>(gt(s,t),Promise.reject(t))):(gt(i,u),u)}}const x=(0,r.IG)({actions:{},getters:{},state:[],hotState:b}),k={_p:a,$id:t,$onAction:pt.bind(null,y),$patch:T,$reset:A,$subscribe(e,n={}){const r=pt(m,e,n.detached,()=>s()),s=l.run(()=>(0,i.wB)(()=>a.state.value[t],r=>{("sync"===n.flush?p:d)&&e({storeId:t,type:E.direct,events:g},r)},_t({},f,n)));return r},$dispose:C};s&&(k._r=!1);const O=(0,r.Kh)(S?_t({_hmrPayload:x,_customProperties:(0,r.IG)(new Set)},k):k);a._s.set(t,O);const R=a._a&&a._a.runWithContext||mt,D=R(()=>a._e.run(()=>(l=(0,r.uY)()).run(e)));for(const i in D){const e=D[i];if((0,r.i9)(e)&&!Et(e)||(0,r.g8)(e))u||(v&&bt(e)&&((0,r.i9)(e)?e.value=v[i]:yt(e,v[i])),s?o(a.state.value[t],i,e):a.state.value[t][i]=e);else if("function"===typeof e){const t=I(i,e);s?o(D,i,t):D[i]=t,h.actions[i]=e}else 0}if(s?Object.keys(D).forEach(t=>{o(O,t,D[t])}):(_t(O,D),_t((0,r.ux)(O),D)),Object.defineProperty(O,"$state",{get:()=>a.state.value[t],set:t=>{T(e=>{_t(e,t)})}}),S){const t={writable:!0,configurable:!0,enumerable:!1};["_p","_hmrPayload","_getters","_customProperties"].forEach(e=>{Object.defineProperty(O,e,_t({value:O[e]},t))})}return s&&(O._r=!0),a._p.forEach(t=>{if(S){const e=l.run(()=>t({store:O,app:a._a,pinia:a,options:h}));Object.keys(e||{}).forEach(t=>O._customProperties.add(t)),_t(O,e)}else _t(O,l.run(()=>t({store:O,app:a._a,pinia:a,options:h})))}),v&&u&&n.hydrate&&n.hydrate(O.$state,v),d=!0,p=!0,O}function At(t,e,n){let r,s;const o="function"===typeof e;function a(t,n){const a=(0,i.PS)();t=t||(a?(0,i.WQ)(b,null):null),t&&w(t),t=p,t._s.has(r)||(o?St(r,e,s,t):Tt(r,s,t));const c=t._s.get(r);return c}return"string"===typeof t?(r=t,s=o?n:e):(s=t,r=t.id),a.$id=r,a}},3493:function(t,e,n){var r=n(3747);t.exports=function(t){return r(t.length)}},3601:function(t,e,n){var r=n(1009),i=n(605),s=n(8896),o=n(2926);t.exports=function(t){var e=r(this),n=o(t);return!(i(e)>n.size)&&!1!==s(e,function(t){if(!n.includes(t))return!1},!0)}},3610:function(t,e,n){var r=n(5077),i=n(7694),s=n(4491),o=n(3938),a=n(6032),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw new c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},3632:function(t,e,n){var r=n(1009),i=n(1171).has,s=n(605),o=n(2926),a=n(64),c=n(9868);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<n.size)return!1;var u=n.getIterator();return!1!==a(u,function(t){if(!i(e,t))return c(u,"normal",!1)})}},3725:function(t,e,n){var r=n(1605),i=n(200),s=n(5190),o=n(8420),a=n(7970),c=n(7712),u=n(2074),l=n(6490),h=n(1602),f=n(9306).IteratorPrototype,d=n(6926),p=h("toStringTag"),g=TypeError,m=i.Iterator,y=d||!o(m)||m.prototype!==f||!u(function(){m({})}),v=function(){if(s(this,f),a(this)===f)throw new g("Abstract class Iterator not directly constructable")};l(f,p)||c(f,p,"Iterator"),!y&&l(f,"constructor")&&f.constructor!==Object||c(f,"constructor",v),v.prototype=f,r({global:!0,constructor:!0,forced:y},{Iterator:v})},3747:function(t,e,n){var r=n(9328),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},3838:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},3877:function(t,e,n){var r=n(200),i=n(281),s=n(1385),o=n(6283),a=n(7469),c=n(4745),u=n(8026),l=n(3291),h=r.structuredClone,f=r.ArrayBuffer,d=r.DataView,p=r.TypeError,g=Math.min,m=f.prototype,y=d.prototype,v=i(m.slice),w=s(m,"resizable","get"),b=s(m,"maxByteLength","get"),_=i(y.getInt8),E=i(y.setInt8);t.exports=(l||u)&&function(t,e,n){var r,i=c(t),s=void 0===e?i:o(e),m=!w||!w(t);if(a(t))throw new p("ArrayBuffer is detached");if(l&&(t=h(t,{transfer:[t]}),i===s&&(n||m)))return t;if(i>=s&&(!n||m))r=v(t,0,s);else{var y=n&&!m&&b?{maxByteLength:b(t)}:void 0;r=new f(s,y);for(var T=new d(t),S=new d(r),A=g(s,i),C=0;C<A;C++)E(S,C,_(T,C))}return l||u(t),r}},3938:function(t,e,n){var r=n(5335),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not an object")}},4232:function(t,e,n){n.d(e,{$3:function(){return p},$H:function(){return V},BX:function(){return rt},Bm:function(){return E},C4:function(){return J},CP:function(){return l},DY:function(){return U},Ft:function(){return K},Gv:function(){return T},J$:function(){return tt},Kg:function(){return _},MZ:function(){return i},Mp:function(){return u},NO:function(){return a},Oj:function(){return s},PT:function(){return N},Qd:function(){return x},Ro:function(){return B},SU:function(){return O},TF:function(){return f},Tg:function(){return P},Tn:function(){return b},Tr:function(){return H},We:function(){return q},X$:function(){return h},Y2:function(){return et},ZH:function(){return M},Zf:function(){return I},bB:function(){return $},cy:function(){return g},gd:function(){return w},jh:function(){return m},pD:function(){return r},rU:function(){return F},tE:function(){return o},u3:function(){return it},vM:function(){return y},v_:function(){return st},yI:function(){return k},yL:function(){return S},yQ:function(){return j}});n(8743),n(959),n(3725),n(5019),n(9838);function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}const i={},s=[],o=()=>{},a=()=>!1,c=/^on[^a-z]/,u=t=>c.test(t),l=t=>t.startsWith("onUpdate:"),h=Object.assign,f=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},d=Object.prototype.hasOwnProperty,p=(t,e)=>d.call(t,e),g=Array.isArray,m=t=>"[object Map]"===C(t),y=t=>"[object Set]"===C(t),v=t=>"[object Date]"===C(t),w=t=>"[object RegExp]"===C(t),b=t=>"function"===typeof t,_=t=>"string"===typeof t,E=t=>"symbol"===typeof t,T=t=>null!==t&&"object"===typeof t,S=t=>T(t)&&b(t.then)&&b(t.catch),A=Object.prototype.toString,C=t=>A.call(t),I=t=>C(t).slice(8,-1),x=t=>"[object Object]"===C(t),k=t=>_(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,O=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),R=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},D=/-(\w)/g,N=R(t=>t.replace(D,(t,e)=>e?e.toUpperCase():"")),L=/\B([A-Z])/g,P=R(t=>t.replace(L,"-$1").toLowerCase()),M=R(t=>t.charAt(0).toUpperCase()+t.slice(1)),F=R(t=>t?`on${M(t)}`:""),V=(t,e)=>!Object.is(t,e),U=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},j=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},$=t=>{const e=parseFloat(t);return isNaN(e)?t:e},B=t=>{const e=_(t)?Number(t):NaN;return isNaN(e)?t:e};let z;const q=()=>z||(z="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const G="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",K=r(G);function H(t){if(g(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=_(r)?X(r):H(r);if(i)for(const t in i)e[t]=i[t]}return e}return _(t)||T(t)?t:void 0}const W=/;(?![^(]*\))/g,Q=/:([^]+)/,Y=/\/\*[^]*?\*\//g;function X(t){const e={};return t.replace(Y,"").split(W).forEach(t=>{if(t){const n=t.split(Q);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function J(t){let e="";if(_(t))e=t;else if(g(t))for(let n=0;n<t.length;n++){const r=J(t[n]);r&&(e+=r+" ")}else if(T(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tt=r(Z);function et(t){return!!t||""===t}function nt(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=rt(t[r],e[r]);return n}function rt(t,e){if(t===e)return!0;let n=v(t),r=v(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=E(t),r=E(e),n||r)return t===e;if(n=g(t),r=g(e),n||r)return!(!n||!r)&&nt(t,e);if(n=T(t),r=T(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!rt(t[n],e[n]))return!1}}return String(t)===String(e)}function it(t,e){return t.findIndex(t=>rt(t,e))}const st=t=>_(t)?t:null==t?"":g(t)||T(t)&&(t.toString===A||!b(t.toString))?JSON.stringify(t,ot,2):String(t),ot=(t,e)=>e&&e.__v_isRef?ot(t,e.value):m(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[e,n])=>(t[`${e} =>`]=n,t),{})}:y(e)?{[`Set(${e.size})`]:[...e.values()]}:!T(e)||g(e)||x(e)?e:String(e)},4361:function(t,e,n){var r=n(6490),i=n(5816),s=n(7632),o=n(3610);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},4491:function(t,e,n){var r=n(5077),i=n(2074);t.exports=r&&i(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype})},4601:function(t,e,n){var r=n(8420),i=n(3838),s=TypeError;t.exports=function(t){if(r(t))return t;throw new s(i(t)+" is not a function")}},4694:function(t,e,n){var r=n(1605),i=n(4753),s=n(8223);r({target:"Set",proto:!0,real:!0,forced:!s("symmetricDifference")},{symmetricDifference:i})},4745:function(t,e,n){var r=n(1385),i=n(8569),s=TypeError;t.exports=r(ArrayBuffer.prototype,"byteLength","get")||function(t){if("ArrayBuffer"!==i(t))throw new s("ArrayBuffer expected");return t.byteLength}},4753:function(t,e,n){var r=n(1009),i=n(1171),s=n(9583),o=n(2926),a=n(64),c=i.add,u=i.has,l=i.remove;t.exports=function(t){var e=r(this),n=o(t).getIterator(),i=s(e);return a(n,function(t){u(e,t)?l(i,t):c(i,t)}),i}},4789:function(t,e,n){var r=n(6347),i=n(290),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},4977:function(t,e,n){var r=n(2074),i=n(8420),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n===l||n!==u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},5019:function(t,e,n){var r=n(1605),i=n(2368),s=n(4601),o=n(3938),a=n(938),c=n(1523),u=n(1332),l=n(6926),h=c(function(){var t,e,n,r=this.iterator,s=this.predicate,a=this.next;while(1){if(t=o(i(a,r)),e=this.done=!!t.done,e)return;if(n=t.value,u(r,s,[n,this.counter++],!0))return n}});r({target:"Iterator",proto:!0,real:!0,forced:l},{filter:function(t){return o(this),s(t),new h(a(this),{predicate:t})}})},5077:function(t,e,n){var r=n(2074);t.exports=!r(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]})},5130:function(t,e,n){n.d(e,{Ef:function(){return gt},Jo:function(){return ct},eB:function(){return P},u1:function(){return ut}});n(8743),n(3725),n(5019),n(9838),n(1339),n(9229),n(292),n(9074),n(11),n(2818),n(2289),n(4694),n(1784);var r=n(6768),i=n(144),s=n(4232);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?a.createElementNS(o,t):a.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${t}</svg>`:t;const i=c.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function l(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function h(t,e,n){const r=t.style,i=(0,s.Kg)(n);if(n&&!i){if(e&&!(0,s.Kg)(e))for(const t in e)null==n[t]&&d(r,t,"");for(const t in n)d(r,t,n[t])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const f=/\s*!important$/;function d(t,e,n){if((0,s.cy)(n))n.forEach(n=>d(t,e,n));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=m(t,e);f.test(n)?t.setProperty((0,s.Tg)(r),n.replace(f,""),"important"):t[r]=n}}const p=["Webkit","Moz","ms"],g={};function m(t,e){const n=g[e];if(n)return n;let r=(0,s.PT)(e);if("filter"!==r&&r in t)return g[e]=r;r=(0,s.ZH)(r);for(let i=0;i<p.length;i++){const n=p[i]+r;if(n in t)return g[e]=n}return e}const y="http://www.w3.org/1999/xlink";function v(t,e,n,r,i){if(r&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(y,e.slice(6,e.length)):t.setAttributeNS(y,e,n);else{const r=(0,s.J$)(e);null==n||r&&!(0,s.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function w(t,e,n,r,i,o,a){if("innerHTML"===e||"textContent"===e)return r&&a(r,i,o),void(t[e]=null==n?"":n);const c=t.tagName;if("value"===e&&"PROGRESS"!==c&&!c.includes("-")){t._value=n;const r="OPTION"===c?t.getAttribute("value"):t.value,i=null==n?"":n;return r!==i&&(t.value=i),void(null==n&&t.removeAttribute(e))}let u=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,s.Y2)(n):null==n&&"string"===r?(n="",u=!0):"number"===r&&(n=0,u=!0)}try{t[e]=n}catch(l){0}u&&t.removeAttribute(e)}function b(t,e,n,r){t.addEventListener(e,n,r)}function _(t,e,n,r){t.removeEventListener(e,n,r)}function E(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=S(e);if(r){const o=s[e]=x(r,i);b(t,n,o,a)}else o&&(_(t,n,o,a),s[e]=void 0)}}const T=/(?:Once|Passive|Capture)$/;function S(t){let e;if(T.test(t)){let n;e={};while(n=t.match(T))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,s.Tg)(t.slice(2));return[n,e]}let A=0;const C=Promise.resolve(),I=()=>A||(C.then(()=>A=0),A=Date.now());function x(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.qL)(k(t,n.value),e,5,[t])};return n.value=t,n.attached=I(),n}function k(t,e){if((0,s.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t&&t(e))}return e}const O=/^on[a-z]/,R=(t,e,n,r,i=!1,o,a,c,u)=>{"class"===e?l(t,r,i):"style"===e?h(t,n,r):(0,s.Mp)(e)?(0,s.CP)(e)||E(t,e,n,r,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):D(t,e,r,i))?w(t,e,r,o,a,c,u):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),v(t,e,r,i))};function D(t,e,n,r){return r?"innerHTML"===e||"textContent"===e||!!(e in t&&O.test(e)&&(0,s.Tn)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!O.test(e)||!(0,s.Kg)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const N="transition",L="animation",P=(t,{slots:e})=>(0,r.h)(r.pR,j(t),e);P.displayName="Transition";const M={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=P.props=(0,s.X$)({},r.QP,M),V=(t,e=[])=>{(0,s.cy)(t)?t.forEach(t=>t(...e)):t&&t(...e)},U=t=>!!t&&((0,s.cy)(t)?t.some(t=>t.length>1):t.length>1);function j(t){const e={};for(const s in t)s in M||(e[s]=t[s]);if(!1===t.css)return e;const{name:n="v",type:r,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=$(i),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:_,onLeaveCancelled:E,onBeforeAppear:T=v,onAppear:S=w,onAppearCancelled:A=b}=e,C=(t,e,n)=>{q(t,e?h:c),q(t,e?l:a),n&&n()},I=(t,e)=>{t._isLeaving=!1,q(t,f),q(t,p),q(t,d),e&&e()},x=t=>(e,n)=>{const i=t?S:w,s=()=>C(e,t,n);V(i,[e,s]),G(()=>{q(e,t?u:o),z(e,t?h:c),U(i)||H(e,r,m,s)})};return(0,s.X$)(e,{onBeforeEnter(t){V(v,[t]),z(t,o),z(t,a)},onBeforeAppear(t){V(T,[t]),z(t,u),z(t,l)},onEnter:x(!1),onAppear:x(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>I(t,e);z(t,f),X(),z(t,d),G(()=>{t._isLeaving&&(q(t,f),z(t,p),U(_)||H(t,r,y,n))}),V(_,[t,n])},onEnterCancelled(t){C(t,!1),V(b,[t])},onAppearCancelled(t){C(t,!0),V(A,[t])},onLeaveCancelled(t){I(t),V(E,[t])}})}function $(t){if(null==t)return null;if((0,s.Gv)(t))return[B(t.enter),B(t.leave)];{const e=B(t);return[e,e]}}function B(t){const e=(0,s.Ro)(t);return e}function z(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.add(e)),(t._vtc||(t._vtc=new Set)).add(e)}function q(t,e){e.split(/\s+/).forEach(e=>e&&t.classList.remove(e));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function G(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let K=0;function H(t,e,n,r){const i=t._endId=++K,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=W(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),s()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),t.addEventListener(u,f)}function W(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(`${N}Delay`),s=r(`${N}Duration`),o=Q(i,s),a=r(`${L}Delay`),c=r(`${L}Duration`),u=Q(a,c);let l=null,h=0,f=0;e===N?o>0&&(l=N,h=o,f=s.length):e===L?u>0&&(l=L,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?N:L:null,f=l?l===N?s.length:c.length:0);const d=l===N&&/\b(transform|all)(,|$)/.test(r(`${N}Property`).toString());return{type:l,timeout:h,propCount:f,hasTransform:d}}function Q(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map((e,n)=>Y(e)+Y(t[n])))}function Y(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}const J=new WeakMap,Z=new WeakMap,tt={name:"TransitionGroup",props:(0,s.X$)({},F,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,r.nI)(),s=(0,r.Gy)();let o,a;return(0,r.$u)(()=>{if(!o.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!it(o[0].el,n.vnode.el,e))return;o.forEach(et),o.forEach(nt);const r=o.filter(rt);X(),r.forEach(t=>{const n=t.el,r=n.style;z(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,q(n,e))};n.addEventListener("transitionend",i)})}),()=>{const c=(0,i.ux)(t),u=j(c);let l=c.tag||r.FK;o=a,a=e.default?(0,r.Df)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,r.MZ)(e,(0,r.OW)(e,u,s,n))}if(o)for(let t=0;t<o.length;t++){const e=o[t];(0,r.MZ)(e,(0,r.OW)(e,u,s,n)),J.set(e,e.el.getBoundingClientRect())}return(0,r.bF)(l,null,a)}}};tt.props;function et(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function nt(t){Z.set(t,t.el.getBoundingClientRect())}function rt(t){const e=J.get(t),n=Z.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function it(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach(t=>{t.split(/\s+/).forEach(t=>t&&r.classList.remove(t))}),n.split(/\s+/).forEach(t=>t&&r.classList.add(t)),r.style.display="none";const i=1===e.nodeType?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=W(r);return i.removeChild(r),s}const st=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,s.cy)(e)?t=>(0,s.DY)(e,t):e};function ot(t){t.target.composing=!0}function at(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ct={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t._assign=st(i);const o=r||i.props&&"number"===i.props.type;b(t,e?"change":"input",e=>{if(e.target.composing)return;let r=t.value;n&&(r=r.trim()),o&&(r=(0,s.bB)(r)),t._assign(r)}),n&&b(t,"change",()=>{t.value=t.value.trim()}),e||(b(t,"compositionstart",ot),b(t,"compositionend",at),b(t,"change",at))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},o){if(t._assign=st(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(r&&t.value.trim()===e)return;if((i||"number"===t.type)&&(0,s.bB)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const ut={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=(0,s.vM)(e);b(t,"change",()=>{const e=Array.prototype.filter.call(t.options,t=>t.selected).map(t=>n?(0,s.bB)(ht(t)):ht(t));t._assign(t.multiple?i?new Set(e):e:e[0])}),t._assign=st(r)},mounted(t,{value:e}){lt(t,e)},beforeUpdate(t,e,n){t._assign=st(n)},updated(t,{value:e}){lt(t,e)}};function lt(t,e){const n=t.multiple;if(!n||(0,s.cy)(e)||(0,s.vM)(e)){for(let r=0,i=t.options.length;r<i;r++){const i=t.options[r],o=ht(i);if(n)(0,s.cy)(e)?i.selected=(0,s.u3)(e,o)>-1:i.selected=e.has(o);else if((0,s.BX)(ht(i),e))return void(t.selectedIndex!==r&&(t.selectedIndex=r))}n||-1===t.selectedIndex||(t.selectedIndex=-1)}}function ht(t){return"_value"in t?t._value:t.value}const ft=(0,s.X$)({patchProp:R},u);let dt;function pt(){return dt||(dt=(0,r.K9)(ft))}const gt=(...t)=>{const e=pt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=mt(t);if(!r)return;const i=e._component;(0,s.Tn)(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function mt(t){if((0,s.Kg)(t)){const e=document.querySelector(t);return e}return t}},5190:function(t,e,n){var r=n(7658),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw new i("Incorrect invocation")}},5223:function(t,e,n){var r=n(200),i=n(8569);t.exports="process"===i(r.process)},5225:function(t,e,n){var r=n(2072);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5318:function(t,e,n){var r=n(5077),i=n(4491),s=n(3610),o=n(3938),a=n(5476),c=n(1641);e.f=r&&!i?Object.defineProperties:function(t,e){o(t);var n,r=a(e),i=c(e),u=i.length,l=0;while(u>l)s.f(t,n=i[l++],r[n]);return t}},5335:function(t,e,n){var r=n(8420),i=n(6568),s=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===s}:function(t){return"object"==typeof t?null!==t:r(t)}},5343:function(t,e,n){var r,i,s,o=n(6004),a=n(5077),c=n(200),u=n(8420),l=n(5335),h=n(6490),f=n(3062),d=n(3838),p=n(7712),g=n(7485),m=n(6477),y=n(7658),v=n(7970),w=n(9686),b=n(1602),_=n(665),E=n(9206),T=E.enforce,S=E.get,A=c.Int8Array,C=A&&A.prototype,I=c.Uint8ClampedArray,x=I&&I.prototype,k=A&&v(A),O=C&&v(C),R=Object.prototype,D=c.TypeError,N=b("toStringTag"),L=_("TYPED_ARRAY_TAG"),P="TypedArrayConstructor",M=o&&!!w&&"Opera"!==f(c.opera),F=!1,V={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},j=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(V,e)||h(U,e)},$=function(t){var e=v(t);if(l(e)){var n=S(e);return n&&h(n,P)?n[P]:$(e)}},B=function(t){if(!l(t))return!1;var e=f(t);return h(V,e)||h(U,e)},z=function(t){if(B(t))return t;throw new D("Target is not a typed array")},q=function(t){if(u(t)&&(!w||y(k,t)))return t;throw new D(d(t)+" is not a typed array constructor")},G=function(t,e,n,r){if(a){if(n)for(var i in V){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}O[t]&&!n||g(O,t,n?e:M&&C[t]||e,r)}},K=function(t,e,n){var r,i;if(a){if(w){if(n)for(r in V)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(k[t]&&!n)return;try{return g(k,t,n?e:M&&k[t]||e)}catch(s){}}for(r in V)i=c[r],!i||i[t]&&!n||g(i,t,e)}};for(r in V)i=c[r],s=i&&i.prototype,s?T(s)[P]=i:M=!1;for(r in U)i=c[r],s=i&&i.prototype,s&&(T(s)[P]=i);if((!M||!u(k)||k===Function.prototype)&&(k=function(){throw new D("Incorrect invocation")},M))for(r in V)c[r]&&w(c[r],k);if((!M||!O||O===R)&&(O=k.prototype,M))for(r in V)c[r]&&w(c[r].prototype,O);if(M&&v(x)!==O&&w(x,O),a&&!h(O,N))for(r in F=!0,m(O,N,{configurable:!0,get:function(){return l(this)?this[L]:void 0}}),V)c[r]&&p(c[r],L,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:M,TYPED_ARRAY_TAG:F&&L,aTypedArray:z,aTypedArrayConstructor:q,exportTypedArrayMethod:G,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:$,isView:j,isTypedArray:B,TypedArray:k,TypedArrayPrototype:O}},5362:function(t,e,n){var r=n(3062),i=String;t.exports=function(t){if("Symbol"===r(t))throw new TypeError("Cannot convert a Symbol value to a string");return i(t)}},5476:function(t,e,n){var r=n(8664),i=n(1229);t.exports=function(t){return r(i(t))}},5643:function(t,e,n){var r=n(1009),i=n(1171),s=n(9583),o=n(605),a=n(2926),c=n(8896),u=n(64),l=i.has,h=i.remove;t.exports=function(t){var e=r(this),n=a(t),i=s(e);return o(e)<=n.size?c(e,function(t){n.includes(t)&&h(i,t)}):u(n.getIterator(),function(t){l(e,t)&&h(i,t)}),i}},5816:function(t,e,n){var r=n(6492),i=n(281),s=n(4789),o=n(8916),a=n(3938),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},5847:function(t,e,n){n.d(e,{A:function(){return j}});n(8743),n(3725),n(5019),n(2598),n(9838),n(1339),n(9229);var r=n(6768),i=n(144);
/*!
 * Vue-Lazyload.js v3.0.0
 * (c) 2023 Awe <hilongjw@gmail.com>
 * Released under the MIT License.
 */
function s(t,e){return e={exports:{}},t(e,e.exports),e.exports}var o=s(function(t){const e=Object.prototype.toString,n=Object.prototype.propertyIsEnumerable,r=Object.getOwnPropertySymbols;function i(t){return"function"===typeof t||"[object Object]"===e.call(t)||Array.isArray(t)}t.exports=(t,...e)=>{if(!i(t))throw new TypeError("expected the first argument to be an object");if(0===e.length||"function"!==typeof Symbol||"function"!==typeof r)return t;for(let i of e){let e=r(i);for(let r of e)n.call(i,r)&&(t[r]=i[r])}return t}}),a=Object.freeze({__proto__:null,default:o,__moduleExports:o}),c=a&&o||a,u=s(function(t){const e=Object.prototype.toString,n=t=>"__proto__"!==t&&"constructor"!==t&&"prototype"!==t,r=t.exports=(t,...e)=>{let o=0;for(s(t)&&(t=e[o++]),t||(t={});o<e.length;o++)if(i(e[o])){for(const s of Object.keys(e[o]))n(s)&&(i(t[s])&&i(e[o][s])?r(t[s],e[o][s]):t[s]=e[o][s]);c(t,e[o])}return t};function i(t){return"function"===typeof t||"[object Object]"===e.call(t)}function s(t){return"object"===typeof t?null===t:"function"!==typeof t}});const l="undefined"!==typeof window&&null!==window,h=f();function f(){return!!(l&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)&&("isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}),!0)}const d={event:"event",observer:"observer"};function p(t,e){if(!t.length)return;const n=t.indexOf(e);return n>-1?t.splice(n,1):void 0}function g(t,e){if("IMG"!==t.tagName||!t.getAttribute("data-srcset"))return"";let n=t.getAttribute("data-srcset").trim().split(",");const r=[],i=t.parentNode,s=i.offsetWidth*e;let o,a,c;n.forEach(t=>{t=t.trim(),o=t.lastIndexOf(" "),-1===o?(a=t,c=99999):(a=t.substr(0,o),c=parseInt(t.substr(o+1,t.length-o-2),10)),r.push([c,a])}),r.sort((t,e)=>{if(t[0]<e[0])return 1;if(t[0]>e[0])return-1;if(t[0]===e[0]){if(-1!==e[1].indexOf(".webp",e[1].length-5))return 1;if(-1!==t[1].indexOf(".webp",t[1].length-5))return-1}return 0});let u,l="";for(let h=0;h<r.length;h++){u=r[h],l=u[1];const t=r[h+1];if(t&&t[0]<s){l=u[1];break}if(!t){l=u[1];break}}return l}const m=(t=1)=>l&&window.devicePixelRatio||t;function y(){if(!l)return!1;let t=!0;function e(t,e){const n={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"},r=new Image;r.onload=function(){const t=r.width>0&&r.height>0;e(t)},r.onerror=function(){e(!1)},r.src="data:image/webp;base64,"+n[t]}return e("lossy",e=>{t=e}),e("lossless",e=>{t=e}),e("alpha",e=>{t=e}),e("animation",e=>{t=e}),t}function v(t,e){let n=null,r=0;return function(){if(n)return;const i=Date.now()-r,s=this,o=arguments,a=function(){r=Date.now(),n=!1,t.apply(s,o)};i>=e?a():n=setTimeout(a,e)}}function w(){if(!l)return!1;let t=!1;try{const e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",I,e)}catch(e){}return t}const b=w(),_={on(t,e,n,r=!1){b?t.addEventListener(e,n,{capture:r,passive:!0}):t.addEventListener(e,n,r)},off(t,e,n,r=!1){t.removeEventListener(e,n,r)}},E=(t,e,n)=>{let r=new Image;if(!t||!t.src){const t=new Error("image src is required");return n(t)}t.cors&&(r.crossOrigin=t.cors),r.src=t.src,r.onload=function(){e({naturalHeight:r.naturalHeight,naturalWidth:r.naturalWidth,src:r.src}),r=null},r.onerror=function(t){n(t)}},T=(t,e)=>"undefined"!==typeof getComputedStyle?getComputedStyle(t,null).getPropertyValue(e):t.style[e],S=t=>T(t,"overflow")+T(t,"overflowY")+T(t,"overflowX"),A=t=>{if(!l)return;if(!(t instanceof Element))return window;let e=t;while(e){if(e===document.body||e===document.documentElement)break;if(!e.parentNode)break;if(/(scroll|auto)/.test(S(e)))return e;e=e.parentNode}return window};function C(t){return null!==t&&"object"===typeof t}function I(){}class x{constructor(t){this.max=t||100,this._caches=[]}has(t){return this._caches.indexOf(t)>-1}add(t){this.has(t)||(this._caches.push(t),this._caches.length>this.max&&this.free())}free(){this._caches.shift()}}class k{constructor(t,e,n,r,i,s,o,a,c,u){this.el=t,this.src=e,this.error=n,this.loading=r,this.bindType=i,this.attempt=0,this.cors=a,this.naturalHeight=0,this.naturalWidth=0,this.options=o,this.rect={},this.$parent=s,this.elRenderer=c,this._imageCache=u,this.performanceData={init:Date.now(),loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}initState(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}record(t){this.performanceData[t]=Date.now()}update(t){const e=this.src;this.src=t.src,this.loading=t.loading,this.error=t.error,this.filter(),e!==this.src&&(this.attempt=0,this.initState())}getRect(){this.rect=this.el.getBoundingClientRect()}checkInView(){return this.getRect(),this.rect.top<window.innerHeight*this.options.preLoad&&this.rect.bottom>this.options.preLoadTop&&this.rect.left<window.innerWidth*this.options.preLoad&&this.rect.right>0}filter(){for(const t in this.options.filter)this.options.filter[t](this,this.options)}renderLoading(t){this.state.loading=!0,E({src:this.loading,cors:this.cors},()=>{this.render("loading",!1),this.state.loading=!1,t()},()=>{t(),this.state.loading=!1,this.options.silent||console.warn(`VueLazyload log: load failed with loading image(${this.loading})`)})}load(t=I){return this.attempt>this.options.attempt-1&&this.state.error?(this.options.silent||console.log(`VueLazyload log: ${this.src} tried too more than ${this.options.attempt} times`),void t()):this.state.rendered&&this.state.loaded?void 0:this._imageCache.has(this.src)?(this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,t()):void this.renderLoading(()=>{this.attempt++,this.options.adapter.beforeLoad&&this.options.adapter.beforeLoad(this,this.options),this.record("loadStart"),E({src:this.src,cors:this.cors},e=>{this.naturalHeight=e.naturalHeight,this.naturalWidth=e.naturalWidth,this.state.loaded=!0,this.state.error=!1,this.record("loadEnd"),this.render("loaded",!1),this.state.rendered=!0,this._imageCache.add(this.src),t()},t=>{!this.options.silent&&console.error(t),this.state.error=!0,this.state.loaded=!1,this.render("error",!1)})})}render(t,e){this.elRenderer(this,t,e)}performance(){let t="loading",e=0;return this.state.loaded&&(t="loaded",e=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(t="error"),{src:this.src,state:t,time:e}}$destroy(){this.el=null,this.src="",this.error=null,this.loading="",this.bindType=null,this.attempt=0}}const O="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",R=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],D={rootMargin:"0px",threshold:0};class N{constructor({preLoad:t,error:e,throttleWait:n,preLoadTop:r,dispatchEvent:i,loading:s,attempt:o,silent:a=!0,scale:c,listenEvents:u,filter:l,adapter:h,observer:f,observerOptions:p}){this.version='"3.0.0"',this.lazyContainerMananger=null,this.mode=d.event,this.ListenerQueue=[],this.TargetIndex=0,this.TargetQueue=[],this.options={silent:a,dispatchEvent:!!i,throttleWait:n||200,preLoad:t||1.3,preLoadTop:r||0,error:e||O,loading:s||O,attempt:o||3,scale:c||m(c),listenEvents:u||R,supportWebp:y(),filter:l||{},adapter:h||{},observer:!!f,observerOptions:p||D},this._initEvent(),this._imageCache=new x(200),this.lazyLoadHandler=v(this._lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?d.observer:d.event)}performance(){const t=[];return this.ListenerQueue.map(e=>t.push(e.performance())),t}addLazyBox(t){this.ListenerQueue.push(t),l&&(this._addListenerTarget(window),this._observer&&this._observer.observe(t.el),t.$el&&t.$el.parentNode&&this._addListenerTarget(t.$el.parentNode))}add(t,e,n){if(this.ListenerQueue.some(e=>e.el===t))return this.update(t,e),(0,r.dY)(this.lazyLoadHandler);let{src:i,loading:s,error:o,cors:a}=this._valueFormatter(e.value);(0,r.dY)(()=>{i=g(t,this.options.scale)||i,this._observer&&this._observer.observe(t);const n=Object.keys(e.modifiers)[0];let c;n&&(c=e.instance.$refs[n],c=c?c.el||c:document.getElementById(n)),c||(c=A(t));const u=new k(t,i,o,s,e.arg,c,this.options,a,this._elRenderer.bind(this),this._imageCache);this.ListenerQueue.push(u),l&&(this._addListenerTarget(window),this._addListenerTarget(c)),(0,r.dY)(this.lazyLoadHandler)})}update(t,e,n){let{src:i,loading:s,error:o}=this._valueFormatter(e.value);i=g(t,this.options.scale)||i;const a=this.ListenerQueue.find(e=>e.el===t);a?a.update({src:i,loading:s,error:o}):"loaded"===t.getAttribute("lazy")&&t.dataset.src===i||this.add(t,e,n),this._observer&&(this._observer.unobserve(t),this._observer.observe(t)),(0,r.dY)(this.lazyLoadHandler)}remove(t){if(!t)return;this._observer&&this._observer.unobserve(t);const e=this.ListenerQueue.find(e=>e.el===t);e&&(this._removeListenerTarget(e.$parent),this._removeListenerTarget(window),p(this.ListenerQueue,e),e.$destroy&&e.$destroy())}removeComponent(t){t&&(p(this.ListenerQueue,t),this._observer&&this._observer.unobserve(t.el),t.$parent&&t.$el.parentNode&&this._removeListenerTarget(t.$el.parentNode),this._removeListenerTarget(window))}setMode(t){h||t!==d.observer||(t=d.event),this.mode=t,t===d.event?(this._observer&&(this.ListenerQueue.forEach(t=>{this._observer.unobserve(t.el)}),this._observer=null),this.TargetQueue.forEach(t=>{this._initListen(t.el,!0)})):(this.TargetQueue.forEach(t=>{this._initListen(t.el,!1)}),this._initIntersectionObserver())}_addListenerTarget(t){if(!t)return;let e=this.TargetQueue.find(e=>e.el===t);return e?e.childrenCount++:(e={el:t,id:++this.TargetIndex,childrenCount:1,listened:!0},this.mode===d.event&&this._initListen(e.el,!0),this.TargetQueue.push(e)),this.TargetIndex}_removeListenerTarget(t){this.TargetQueue.forEach((e,n)=>{e.el===t&&(e.childrenCount--,e.childrenCount||(this._initListen(e.el,!1),this.TargetQueue.splice(n,1),e=null))})}_initListen(t,e){this.options.listenEvents.forEach(n=>_[e?"on":"off"](t,n,this.lazyLoadHandler))}_initEvent(){this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=(t,e)=>{this.Event.listeners[t]||(this.Event.listeners[t]=[]),this.Event.listeners[t].push(e)},this.$once=(t,e)=>{const n=this;function r(){n.$off(t,r),e.apply(n,arguments)}this.$on(t,r)},this.$off=(t,e)=>{if(e)p(this.Event.listeners[t],e);else{if(!this.Event.listeners[t])return;this.Event.listeners[t].length=0}},this.$emit=(t,e,n)=>{this.Event.listeners[t]&&this.Event.listeners[t].forEach(t=>t(e,n))}}_lazyLoadHandler(){const t=[];this.ListenerQueue.forEach((e,n)=>{e.el&&e.el.parentNode&&!e.state.loaded||t.push(e);const r=e.checkInView();r&&(e.state.loaded||e.load())}),t.forEach(t=>{p(this.ListenerQueue,t),t.$destroy&&t.$destroy()})}_initIntersectionObserver(){h&&(this._observer=new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),this.ListenerQueue.length&&this.ListenerQueue.forEach(t=>{this._observer.observe(t.el)}))}_observerHandler(t){t.forEach(t=>{t.isIntersecting&&this.ListenerQueue.forEach(e=>{if(e.el===t.target){if(e.state.loaded)return this._observer.unobserve(e.el);e.load()}})})}_elRenderer(t,e,n){if(!t.el)return;const{el:r,bindType:i}=t;let s;switch(e){case"loading":s=t.loading;break;case"error":s=t.error;break;default:s=t.src;break}if(i?r.style[i]='url("'+s+'")':r.getAttribute("src")!==s&&r.setAttribute("src",s),r.setAttribute("lazy",e),this.$emit(e,t,n),this.options.adapter[e]&&this.options.adapter[e](t,this.options),this.options.dispatchEvent){const n=new CustomEvent(e,{detail:t});r.dispatchEvent(n)}}_valueFormatter(t){return C(t)?(t.src||this.options.silent||console.error("Vue Lazyload warning: miss src with "+t),{src:t.src,loading:t.loading||this.options.loading,error:t.error||this.options.error,cors:this.options.cors}):{src:t,loading:this.options.loading,error:this.options.error,cors:this.options.cors}}}const L=(t,e)=>{let n=(0,i.Kh)({});const r=()=>{n=t.value.getBoundingClientRect()},s=()=>(r(),l&&n.top<window.innerHeight*e&&n.bottom>0&&n.left<window.innerWidth*e&&n.right>0);return{rect:n,checkInView:s}};var P=t=>(0,r.pM)({props:{tag:{type:String,default:"div"}},emits:["show"],setup(e,{emit:n,slots:s}){const o=(0,i.KR)(),a=(0,i.Kh)({loaded:!1,error:!1,attempt:0}),c=(0,i.KR)(!1),{rect:u,checkInView:l}=L(o,t.options.preLoad),h=()=>{c.value=!0,a.loaded=!0,n("show",c.value)},f=(0,r.EW)(()=>({el:o.value,rect:u,checkInView:l,load:h,state:a}));return(0,r.sV)(()=>{t.addLazyBox(f.value),t.lazyLoadHandler()}),(0,r.hi)(()=>{t.removeComponent(f.value)}),()=>{var t;return(0,r.bF)(e.tag,{ref:o},[c.value&&(null===(t=s.default)||void 0===t?void 0:t.call(s))])}}});class M{constructor(t){this.lazy=t,t.lazyContainerMananger=this,this._queue=[]}bind(t,e,n){const r=new V(t,e,n,this.lazy);this._queue.push(r)}update(t,e,n){const r=this._queue.find(e=>e.el===t);r&&r.update(t,e)}unbind(t,e,n){const r=this._queue.find(e=>e.el===t);r&&(r.clear(),p(this._queue,r))}}const F={selector:"img",error:"",loading:""};class V{constructor(t,e,n,r){this.el=t,this.vnode=n,this.binding=e,this.options={},this.lazy=r,this._queue=[],this.update(t,e)}update(t,e){this.el=t,this.options=u({},F,e.value);const n=this.getImgs();n.forEach(t=>{this.lazy.add(t,u({},this.binding,{value:{src:t.getAttribute("data-src")||t.dataset.src,error:t.getAttribute("data-error")||t.dataset.error||this.options.error,loading:t.getAttribute("data-loading")||t.dataset.loading||this.options.loading}}),this.vnode)})}getImgs(){return Array.from(this.el.querySelectorAll(this.options.selector))}clear(){const t=this.getImgs();t.forEach(t=>this.lazy.remove(t)),this.vnode=null,this.binding=null,this.lazy=null}}var U=t=>(0,r.pM)({setup(e,{slots:n}){const s=(0,i.KR)(),o=(0,i.Kh)({src:"",error:"",loading:"",attempt:t.options.attempt}),a=(0,i.Kh)({loaded:!1,error:!1,attempt:0}),{rect:c,checkInView:u}=L(s,t.options.preLoad),l=(0,i.KR)(""),h=(e=I)=>{if(a.attempt>o.attempt-1&&a.error)return t.options.silent||console.log(`VueLazyload log: ${o.src} tried too more than ${o.attempt} times`),e();const n=o.src;E({src:n},({src:t})=>{l.value=t,a.loaded=!0},()=>{a.attempt++,l.value=o.error,a.error=!0})},f=(0,r.EW)(()=>({el:s.value,rect:c,checkInView:u,load:h,state:a}));(0,r.sV)(()=>{t.addLazyBox(f.value),t.lazyLoadHandler()}),(0,r.hi)(()=>{t.removeComponent(f.value)});const d=()=>{const{src:n,loading:r,error:i}=t._valueFormatter(e.src);a.loaded=!1,o.src=n,o.error=i,o.loading=r,l.value=o.loading};return(0,r.wB)(()=>e.src,()=>{d(),t.addLazyBox(f.value),t.lazyLoadHandler()},{immediate:!0}),()=>{var t;return(0,r.bF)(e.tag||"img",{src:l.value,ref:s},[null===(t=n.default)||void 0===t?void 0:t.call(n)])}}}),j={install(t,e={}){const n=new N(e),r=new M(n),i=Number(t.version.split(".")[0]);if(i<3)return new Error("Vue version at least 3.0");t.config.globalProperties.$Lazyload=n,t.provide("Lazyload",n),e.lazyComponent&&t.component("lazy-component",P(n)),e.lazyImage&&t.component("lazy-image",U(n)),t.directive("lazy",{beforeMount:n.add.bind(n),beforeUpdate:n.update.bind(n),updated:n.lazyLoadHandler.bind(n),unmounted:n.remove.bind(n)}),t.directive("lazy-container",{beforeMount:r.bind.bind(r),updated:r.update.bind(r),unmounted:r.unbind.bind(r)})}}},5904:function(t,e,n){var r=n(2),i=n(665),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},6004:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},6032:function(t,e,n){var r=n(874),i=n(2328);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},6100:function(t,e,n){var r=n(9720),i=n(6490),s=n(802),o=n(3610).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:s.f(t)})}},6189:function(t,e,n){n.d(e,{$b:function(){return i},Vy:function(){return u}});n(8743),n(959),n(3725),n(5019),n(1339);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},6283:function(t,e,n){var r=n(9328),i=n(3747),s=RangeError;t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw new s("Wrong length or index");return n}},6347:function(t,e,n){var r=n(281),i=n(6490),s=n(5476),o=n(8186).indexOf,a=n(7708),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},6380:function(t,e,n){var r=n(7485),i=n(281),s=n(5362),o=n(6589),a=URLSearchParams,c=a.prototype,u=i(c.append),l=i(c["delete"]),h=i(c.forEach),f=i([].push),d=new a("a=1&a=2&b=3");d["delete"]("a",1),d["delete"]("b",void 0),d+""!=="a=2"&&r(c,"delete",function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=[];h(this,function(t,e){f(r,{key:e,value:t})}),o(e,1);var i,a=s(t),c=s(n),d=0,p=0,g=!1,m=r.length;while(d<m)i=r[d++],g||i.key===a?(g=!0,l(this,i.key)):p++;while(p<m)i=r[p++],i.key===a&&i.value===c||u(this,i.key,i.value)},{enumerable:!0,unsafe:!0})},6400:function(t,e,n){n.d(e,{Wp:function(){return r.Wp}});var r=n(262),i="firebase",s="12.8.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},6452:function(t,e,n){var r=n(281),i=Error,s=r("".replace),o=function(t){return String(new i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},6457:function(t,e,n){var r=n(4601),i=n(8406);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},6477:function(t,e,n){var r=n(8218),i=n(3610);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},6490:function(t,e,n){var r=n(281),i=n(2612),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},6492:function(t,e,n){var r=n(200),i=n(8420),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},6539:function(t,e,n){var r=n(9328),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},6567:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6568:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},6589:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw new e("Not enough arguments");return t}},6648:function(t,e,n){var r=n(5077),i=n(8679),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw new s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},6736:function(t,e,n){var r=n(1867),i=n(5343),s=n(7472),o=n(9328),a=n(3005),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();l("with",{with:function(t,e){var n=c(this),i=o(t),l=s(n)?a(e):+e;return r(n,u(n),i,l)}}["with"],!h)},6768:function(t,e,n){n.d(e,{$u:function(){return Ct},CE:function(){return We},Df:function(){return lt},EW:function(){return Fn},FK:function(){return Fe},Gt:function(){return ue},Gy:function(){return tt},K9:function(){return Re},Lk:function(){return en},MZ:function(){return ut},OW:function(){return ot},PS:function(){return he},Q3:function(){return cn},QP:function(){return nt},Qi:function(){return P},WQ:function(){return le},Wv:function(){return Qe},bF:function(){return nn},bo:function(){return J},dY:function(){return v},g2:function(){return Lt},h:function(){return Vn},hi:function(){return xt},jt:function(){return M},k6:function(){return F},nI:function(){return vn},pI:function(){return Vt},pM:function(){return ht},pR:function(){return it},qL:function(){return o},sV:function(){return St},uX:function(){return ze},wB:function(){return H}});n(8743),n(959),n(3725),n(178),n(5019),n(9838),n(1339),n(9471),n(9229),n(292),n(9074),n(11),n(2818),n(2289),n(4694),n(1784);var r=n(144),i=n(4232);function s(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){a(s,e,n)}return i}function o(t,e,n,r){if((0,i.Tn)(t)){const o=s(t,e,n,r);return o&&(0,i.yL)(o)&&o.catch(t=>{a(t,e,n)}),o}const c=[];for(let i=0;i<t.length;i++)c.push(o(t[i],e,n,r));return c}function a(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void s(a,null,10,[t,i,o])}c(t,n,i,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let f=0;const d=[];let p=null,g=0;const m=Promise.resolve();let y=null;function v(t){const e=y||m;return t?e.then(this?t.bind(this):t):e}function w(t){let e=f+1,n=h.length;while(e<n){const r=e+n>>>1,i=C(h[r]);i<t?e=r+1:n=r}return e}function b(t){h.length&&h.includes(t,u&&t.allowRecurse?f+1:f)||(null==t.id?h.push(t):h.splice(w(t.id),0,t),_())}function _(){u||l||(l=!0,y=m.then(x))}function E(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function T(t){(0,i.cy)(t)?d.push(...t):p&&p.includes(t,t.allowRecurse?g+1:g)||d.push(t),_()}function S(t,e=(u?f+1:0)){for(0;e<h.length;e++){const t=h[e];t&&t.pre&&(h.splice(e,1),e--,t())}}function A(t){if(d.length){const t=[...new Set(d)];if(d.length=0,p)return void p.push(...t);for(p=t,p.sort((t,e)=>C(t)-C(e)),g=0;g<p.length;g++)p[g]();p=null,g=0}}const C=t=>null==t.id?1/0:t.id,I=(t,e)=>{const n=C(t)-C(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function x(t){l=!1,u=!0,h.sort(I);i.tE;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&s(t,null,14)}}finally{f=0,h.length=0,A(t),u=!1,y=null,(h.length||d.length)&&x(t)}}function k(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.MZ;let s=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||i.MZ;o&&(s=n.map(t=>(0,i.Kg)(t)?t.trim():t)),e&&(s=n.map(i.bB))}let u;let l=r[u=(0,i.rU)(e)]||r[u=(0,i.rU)((0,i.PT)(e))];!l&&a&&(l=r[u=(0,i.rU)((0,i.Tg)(e))]),l&&o(l,t,6,s);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}function O(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.Tn)(t)){const r=t=>{const n=O(t,e,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach(t=>a[t]=null):(0,i.X$)(a,o),(0,i.Gv)(t)&&r.set(t,a),a):((0,i.Gv)(t)&&r.set(t,null),null)}function R(t,e){return!(!t||!(0,i.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,i.$3)(t,(0,i.Tg)(e))||(0,i.$3)(t,e))}let D=null,N=null;function L(t){const e=D;return D=t,N=t&&t.type.__scopeId||null,e}function P(t){N=t}function M(){N=null}function F(t,e=D,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Ke(-1);const i=L(e);let s;try{s=t(...n)}finally{L(i),r._d&&Ke(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function V(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:f,renderCache:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t;let v,w;const b=L(t);try{if(4&n.shapeFlag){const t=s||r;v=un(f.call(t,t,d,o,g,p,m)),w=l}else{const t=e;0,v=un(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),w=e.props?l:U(l)}}catch(E){$e.length=0,a(E,t,1),v=nn(Ue)}let _=v;if(w&&!1!==y){const t=Object.keys(w),{shapeFlag:e}=_;t.length&&7&e&&(c&&t.some(i.CP)&&(w=j(w,c)),_=on(_,w))}return n.dirs&&(_=on(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,L(b),v}const U=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},j=(t,e)=>{const n={};for(const r in t)(0,i.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function $(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||B(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?B(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!R(u,n))return!0}}return!1}function B(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!R(n,s))return!0}return!1}function z({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const q=t=>t.__isSuspense;function G(t,e){e&&e.pendingBranch?(0,i.cy)(t)?e.effects.push(...t):e.effects.push(t):T(t)}const K={};function H(t,e,n){return W(t,e,n)}function W(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.MZ){var h;const f=(0,r.o5)()===(null==(h=yn)?void 0:h.scope)?yn:null;let d,p,g=!1,m=!1;if((0,r.i9)(t)?(d=()=>t.value,g=(0,r.fE)(t)):(0,r.g8)(t)?(d=()=>t,a=!0):(0,i.cy)(t)?(m=!0,g=t.some(t=>(0,r.g8)(t)||(0,r.fE)(t)),d=()=>t.map(t=>(0,r.i9)(t)?t.value:(0,r.g8)(t)?X(t):(0,i.Tn)(t)?s(t,f,2):void 0)):d=(0,i.Tn)(t)?e?()=>s(t,f,2):()=>{if(!f||!f.isUnmounted)return p&&p(),o(t,f,3,[v])}:i.tE,e&&a){const t=d;d=()=>X(t())}let y,v=t=>{p=T.onStop=()=>{s(t,f,4)}};if(In){if(v=i.tE,e?n&&o(e,f,3,[d(),m?[]:void 0,v]):d(),"sync"!==c)return i.tE;{const t=jn();y=t.__watcherHandles||(t.__watcherHandles=[])}}let w=m?new Array(t.length).fill(K):K;const _=()=>{if(T.active)if(e){const t=T.run();(a||g||(m?t.some((t,e)=>(0,i.$H)(t,w[e])):(0,i.$H)(t,w)))&&(p&&p(),o(e,f,3,[t,w===K?void 0:m&&w[0]===K?[]:w,v]),w=t)}else T.run()};let E;_.allowRecurse=!!e,"sync"===c?E=_:"post"===c?E=()=>Oe(_,f&&f.suspense):(_.pre=!0,f&&(_.id=f.uid),E=()=>b(_));const T=new r.X2(d,E);e?n?_():w=T.run():"post"===c?Oe(T.run.bind(T),f&&f.suspense):T.run();const S=()=>{T.stop(),f&&f.scope&&(0,i.TF)(f.scope.effects,T)};return y&&y.push(S),S}function Q(t,e,n){const r=this.proxy,s=(0,i.Kg)(t)?t.includes(".")?Y(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.Tn)(e)?o=e:(o=e.handler,n=e);const a=yn;En(this);const c=W(s,o.bind(r),n);return a?En(a):Tn(),c}function Y(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function X(t,e){if(!(0,i.Gv)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.i9)(t))X(t.value,e);else if((0,i.cy)(t))for(let n=0;n<t.length;n++)X(t[n],e);else if((0,i.vM)(t)||(0,i.jh)(t))t.forEach(t=>{X(t,e)});else if((0,i.Qd)(t))for(const n in t)X(t[n],e);return t}function J(t,e){const n=D;if(null===n)return t;const r=Ln(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=i.MZ]=e[o];t&&((0,i.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&X(n),s.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return t}function Z(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.C4)(),o(l,n,8,[t.el,u,t,e]),(0,r.bl)())}}function tt(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return St(()=>{t.isMounted=!0}),It(()=>{t.isUnmounting=!0}),t}const et=[Function,Array],nt={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:et,onEnter:et,onAfterEnter:et,onEnterCancelled:et,onBeforeLeave:et,onLeave:et,onAfterLeave:et,onLeaveCancelled:et,onBeforeAppear:et,onAppear:et,onAfterAppear:et,onAppearCancelled:et},rt={name:"BaseTransition",props:nt,setup(t,{slots:e}){const n=vn(),i=tt();let s;return()=>{const o=e.default&&lt(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Ue){0,a=e,t=!0;break}}const c=(0,r.ux)(t),{mode:u}=c;if(i.isLeaving)return at(a);const l=ct(a);if(!l)return at(a);const h=ot(l,c,i,n);ut(l,h);const f=n.subTree,d=f&&ct(f);let p=!1;const{getTransitionKey:g}=l.type;if(g){const t=g();void 0===s?s=t:t!==s&&(s=t,p=!0)}if(d&&d.type!==Ue&&(!Xe(l,d)||p)){const t=ot(d,c,i,n);if(ut(d,t),"out-in"===u)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},at(a);"in-out"===u&&l.type!==Ue&&(t.delayLeave=(t,e,n)=>{const r=st(i,d);r[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},it=rt;function st(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ot(t,e,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=e,_=String(t.key),E=st(n,t),T=(t,e)=>{t&&o(t,r,9,e)},S=(t,e)=>{const n=e[1];T(t,e),(0,i.cy)(t)?t.every(t=>t.length<=1)&&n():t.length<=1&&n()},A={mode:a,persisted:c,beforeEnter(e){let r=u;if(!n.isMounted){if(!s)return;r=y||u}e._leaveCb&&e._leaveCb(!0);const i=E[_];i&&Xe(t,i)&&i.el._leaveCb&&i.el._leaveCb(),T(r,[e])},enter(t){let e=l,r=h,i=f;if(!n.isMounted){if(!s)return;e=v||l,r=w||h,i=b||f}let o=!1;const a=t._enterCb=e=>{o||(o=!0,T(e?i:r,[t]),A.delayedLeave&&A.delayedLeave(),t._enterCb=void 0)};e?S(e,[t,a]):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();T(d,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),T(n?m:g,[e]),e._leaveCb=void 0,E[i]===t&&delete E[i])};E[i]=t,p?S(p,[e,o]):o()},clone(t){return ot(t,e,n,r)}};return A}function at(t){if(dt(t))return t=on(t),t.children=null,t}function ct(t){return dt(t)?t.children?t.children[0]:void 0:t}function ut(t,e){6&t.shapeFlag&&t.component?ut(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function lt(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Fe?(128&o.patchFlag&&i++,r=r.concat(lt(o.children,e,a))):(e||o.type!==Ue)&&r.push(null!=a?on(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ht(t,e){return(0,i.Tn)(t)?(()=>(0,i.X$)({name:t.name},e,{setup:t}))():t}const ft=t=>!!t.type.__asyncLoader;const dt=t=>t.type.__isKeepAlive;RegExp,RegExp;function pt(t,e){return(0,i.cy)(t)?t.some(t=>pt(t,e)):(0,i.Kg)(t)?t.split(",").includes(e):!!(0,i.gd)(t)&&t.test(e)}function gt(t,e){yt(t,"a",e)}function mt(t,e){yt(t,"da",e)}function yt(t,e,n=yn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(_t(e,r,n),n){let t=n.parent;while(t&&t.parent)dt(t.parent.vnode)&&vt(r,e,n,t),t=t.parent}}function vt(t,e,n,r){const s=_t(e,t,r,!0);xt(()=>{(0,i.TF)(r[e],s)},n)}function wt(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function bt(t){return 128&t.shapeFlag?t.ssContent:t}function _t(t,e,n=yn,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.C4)(),En(n);const s=o(e,n,t,i);return Tn(),(0,r.bl)(),s});return i?s.unshift(a):s.push(a),a}}const Et=t=>(e,n=yn)=>(!In||"sp"===t)&&_t(t,(...t)=>e(...t),n),Tt=Et("bm"),St=Et("m"),At=Et("bu"),Ct=Et("u"),It=Et("bum"),xt=Et("um"),kt=Et("sp"),Ot=Et("rtg"),Rt=Et("rtc");function Dt(t,e=yn){_t("ec",t,e)}const Nt="components";function Lt(t,e){return Mt(Nt,t,!0,e)||t}const Pt=Symbol.for("v-ndc");function Mt(t,e,n=!0,r=!1){const s=D||yn;if(s){const n=s.type;if(t===Nt){const t=Pn(n,!1);if(t&&(t===e||t===(0,i.PT)(e)||t===(0,i.ZH)((0,i.PT)(e))))return n}const o=Ft(s[t]||n[t],e)||Ft(s.appContext[t],e);return!o&&r?n:o}}function Ft(t,e){return t&&(t[e]||t[(0,i.PT)(e)]||t[(0,i.ZH)((0,i.PT)(e))])}function Vt(t,e,n,r){let s;const o=n&&n[r];if((0,i.cy)(t)||(0,i.Kg)(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,i.Gv)(t))if(t[Symbol.iterator])s=Array.from(t,(t,n)=>e(t,n,void 0,o&&o[n]));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const Ut=t=>t?Sn(t)?Ln(t)||t.proxy:Ut(t.parent):null,jt=(0,i.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ut(t.parent),$root:t=>Ut(t.root),$emit:t=>t.emit,$options:t=>Qt(t),$forceUpdate:t=>t.f||(t.f=()=>b(t.update)),$nextTick:t=>t.n||(t.n=v.bind(t.proxy)),$watch:t=>Q.bind(t)}),$t=(t,e)=>t!==i.MZ&&!t.__isScriptSetup&&(0,i.$3)(t,e),Bt={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if($t(s,e))return c[e]=1,s[e];if(o!==i.MZ&&(0,i.$3)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.$3)(h,e))return c[e]=3,a[e];if(n!==i.MZ&&(0,i.$3)(n,e))return c[e]=4,n[e];qt&&(c[e]=0)}}const f=jt[e];let d,p;return f?("$attrs"===e&&(0,r.u4)(t,"get",e),f(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==i.MZ&&(0,i.$3)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return $t(s,e)?(s[e]=n,!0):r!==i.MZ&&(0,i.$3)(r,e)?(r[e]=n,!0):!(0,i.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==i.MZ&&(0,i.$3)(t,a)||$t(e,a)||(c=o[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(jt,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function zt(t){return(0,i.cy)(t)?t.reduce((t,e)=>(t[e]=null,t),{}):t}let qt=!0;function Gt(t){const e=Qt(t),n=t.proxy,s=t.ctx;qt=!1,e.beforeCreate&&Ht(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:E,render:T,renderTracked:S,renderTriggered:A,errorCaptured:C,serverPrefetch:I,expose:x,inheritAttrs:k,components:O,directives:R,filters:D}=e,N=null;if(h&&Kt(h,s,N),c)for(const r in c){const t=c[r];(0,i.Tn)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(qt=!0,a)for(const r in a){const t=a[r],e=(0,i.Tn)(t)?t.bind(n,n):(0,i.Tn)(t.get)?t.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(t)&&(0,i.Tn)(t.set)?t.set.bind(n):i.tE,c=Fn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Wt(u[r],s,n,r);if(l){const t=(0,i.Tn)(l)?l.call(n):l;Reflect.ownKeys(t).forEach(e=>{ue(e,t[e])})}function L(t,e){(0,i.cy)(e)?e.forEach(e=>t(e.bind(n))):e&&t(e.bind(n))}if(f&&Ht(f,t,"c"),L(Tt,d),L(St,p),L(At,g),L(Ct,m),L(gt,y),L(mt,v),L(Dt,C),L(Rt,S),L(Ot,A),L(It,b),L(xt,E),L(kt,I),(0,i.cy)(x))if(x.length){const e=t.exposed||(t.exposed={});x.forEach(t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})})}else t.exposed||(t.exposed={});T&&t.render===i.tE&&(t.render=T),null!=k&&(t.inheritAttrs=k),O&&(t.components=O),R&&(t.directives=R)}function Kt(t,e,n=i.tE){(0,i.cy)(t)&&(t=te(t));for(const s in t){const n=t[s];let o;o=(0,i.Gv)(n)?"default"in n?le(n.from||s,n.default,!0):le(n.from||s):le(n),(0,r.i9)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function Ht(t,e,n){o((0,i.cy)(t)?t.map(t=>t.bind(e.proxy)):t.bind(e.proxy),e,n)}function Wt(t,e,n,r){const s=r.includes(".")?Y(n,r):()=>n[r];if((0,i.Kg)(t)){const n=e[t];(0,i.Tn)(n)&&H(s,n)}else if((0,i.Tn)(t))H(s,t.bind(n));else if((0,i.Gv)(t))if((0,i.cy)(t))t.forEach(t=>Wt(t,e,n,r));else{const r=(0,i.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.Tn)(r)&&H(s,r,t)}else 0}function Qt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach(t=>Yt(u,t,a,!0)),Yt(u,e,a)):u=e,(0,i.Gv)(e)&&o.set(e,u),u}function Yt(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Yt(t,s,n,!0),i&&i.forEach(e=>Yt(t,e,n,!0));for(const o in e)if(r&&"expose"===o);else{const r=Xt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Xt={data:Jt,props:re,emits:re,methods:ne,computed:ne,beforeCreate:ee,created:ee,beforeMount:ee,mounted:ee,beforeUpdate:ee,updated:ee,beforeDestroy:ee,beforeUnmount:ee,destroyed:ee,unmounted:ee,activated:ee,deactivated:ee,errorCaptured:ee,serverPrefetch:ee,components:ne,directives:ne,watch:ie,provide:Jt,inject:Zt};function Jt(t,e){return e?t?function(){return(0,i.X$)((0,i.Tn)(t)?t.call(this,this):t,(0,i.Tn)(e)?e.call(this,this):e)}:e:t}function Zt(t,e){return ne(te(t),te(e))}function te(t){if((0,i.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ee(t,e){return t?[...new Set([].concat(t,e))]:e}function ne(t,e){return t?(0,i.X$)(Object.create(null),t,e):e}function re(t,e){return t?(0,i.cy)(t)&&(0,i.cy)(e)?[...new Set([...t,...e])]:(0,i.X$)(Object.create(null),zt(t),zt(null!=e?e:{})):e}function ie(t,e){if(!t)return e;if(!e)return t;const n=(0,i.X$)(Object.create(null),t);for(const r in e)n[r]=ee(t[r],e[r]);return n}function se(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oe=0;function ae(t,e){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=se();const o=new Set;let a=!1;const c=s.app={_uid:oe++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:$n,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.Tn)(t.install)?(o.add(t),t.install(c,...e)):(0,i.Tn)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(i,o,u){if(!a){0;const l=nn(n,r);return l.appContext=s,o&&e?e(l,i):t(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Ln(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c},runWithContext(t){ce=c;try{return t()}finally{ce=null}}};return c}}let ce=null;function ue(t,e){if(yn){let n=yn.provides;const r=yn.parent&&yn.parent.provides;r===n&&(n=yn.provides=Object.create(r)),n[t]=e}else 0}function le(t,e,n=!1){const r=yn||D;if(r||ce){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ce._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.Tn)(e)?e.call(r&&r.proxy):e}else 0}function he(){return!!(yn||D||ce)}function fe(t,e,n,s=!1){const o={},a={};(0,i.yQ)(a,Je,1),t.propsDefaults=Object.create(null),pe(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=s?o:(0,r.Gc)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function de(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.ux)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;pe(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.$3)(e,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=ge(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.$3)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(R(t.emitsOptions,s))continue;const c=e[s];if(l)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i.PT)(s);o[e]=ge(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(t,"set","$attrs")}function pe(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.SU)(r))continue;const l=e[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:R(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const e=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ge(o,e,c,s[c],t,!(0,i.$3)(s,c))}}return u}function ge(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(t)){const{propsDefaults:i}=s;n in i?r=i[n]:(En(s),r=i[n]=t.call(null,e),Tn())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}function me(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.Tn)(t)){const r=t=>{u=!0;const[n,r]=me(t,e,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return(0,i.Gv)(t)&&r.set(t,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,i.PT)(o[h]);ye(t)&&(a[t]=i.MZ)}else if(o){0;for(const t in o){const e=(0,i.PT)(t);if(ye(e)){const n=o[t],r=a[e]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n);if(r){const t=be(Boolean,r.type),n=be(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.$3)(r,"default"))&&c.push(e)}}}}const l=[a,c];return(0,i.Gv)(t)&&r.set(t,l),l}function ye(t){return"$"!==t[0]}function ve(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:null===t?"null":""}function we(t,e){return ve(t)===ve(e)}function be(t,e){return(0,i.cy)(e)?e.findIndex(e=>we(e,t)):(0,i.Tn)(e)&&we(e,t)?0:-1}const _e=t=>"_"===t[0]||"$stable"===t,Ee=t=>(0,i.cy)(t)?t.map(un):[un(t)],Te=(t,e,n)=>{if(e._n)return e;const r=F((...t)=>Ee(e(...t)),n);return r._c=!1,r},Se=(t,e,n)=>{const r=t._ctx;for(const s in t){if(_e(s))continue;const n=t[s];if((0,i.Tn)(n))e[s]=Te(s,n,r);else if(null!=n){0;const t=Ee(n);e[s]=()=>t}}},Ae=(t,e)=>{const n=Ee(e);t.slots.default=()=>n},Ce=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.ux)(e),(0,i.yQ)(e,"_",n)):Se(e,t.slots={})}else t.slots={},e&&Ae(t,e);(0,i.yQ)(t.slots,Je,1)},Ie=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,i.X$)(s,e),n||1!==t||delete s._):(o=!e.$stable,Se(e,s)),a=e}else e&&(Ae(t,e),a={default:1});if(o)for(const i in s)_e(i)||i in a||delete s[i]};function xe(t,e,n,o,a=!1){if((0,i.cy)(t))return void t.forEach((t,r)=>xe(t,e&&((0,i.cy)(e)?e[r]:e),n,o,a));if(ft(o)&&!a)return;const c=4&o.shapeFlag?Ln(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.MZ?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==h&&((0,i.Kg)(f)?(d[f]=null,(0,i.$3)(p,f)&&(p[f]=null)):(0,r.i9)(f)&&(f.value=null)),(0,i.Tn)(h))s(h,l,12,[u,d]);else{const e=(0,i.Kg)(h),s=(0,r.i9)(h);if(e||s){const r=()=>{if(t.f){const n=e?(0,i.$3)(p,h)?p[h]:d[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):e?(d[h]=[c],(0,i.$3)(p,h)&&(p[h]=d[h])):(h.value=[c],t.k&&(d[t.k]=h.value))}else e?(d[h]=u,(0,i.$3)(p,h)&&(p[h]=u)):s&&(h.value=u,t.k&&(d[t.k]=u))};u?(r.id=-1,Oe(r,n)):r()}else 0}}function ke(){}const Oe=G;function Re(t){return De(t)}function De(t,e){ke();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=t,y=(t,e,n,r=null,i=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Xe(t,e)&&(r=J(t),H(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Ve:v(t,e,n,r);break;case Ue:w(t,e,n,r);break;case je:null==t&&_(e,n,r,o);break;case Fe:L(t,e,n,r,i,s,o,a,c);break;default:1&h?I(t,e,n,r,i,s,o,a,c):6&h?P(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,et)}null!=l&&i&&xe(l,t&&t.ref,s,e||t,!e)},v=(t,e,n,r)=>{if(null==t)s(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},w=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},_=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},T=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},C=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},I=(t,e,n,r,i,s,o,a,c)=>{o=o||"svg"===e.type,null==t?x(e,n,r,i,s,o,a,c):R(t,e,i,s,o,a,c)},x=(t,e,n,r,o,u,l,h)=>{let d,p;const{type:g,props:m,shapeFlag:y,transition:v,dirs:w}=t;if(d=t.el=c(t.type,u,m&&m.is,m),8&y?f(d,t.children):16&y&&O(t.children,d,null,r,o,u&&"foreignObject"!==g,l,h),w&&Z(t,null,r,"created"),k(d,t,t.scopeId,l,r),m){for(const e in m)"value"===e||(0,i.SU)(e)||a(d,e,null,m[e],u,t.children,r,o,X);"value"in m&&a(d,"value",null,m.value),(p=m.onVnodeBeforeMount)&&dn(p,r,t)}w&&Z(t,null,r,"beforeMount");const b=(!o||o&&!o.pendingBranch)&&v&&!v.persisted;b&&v.beforeEnter(d),s(d,e,n),((p=m&&m.onVnodeMounted)||b||w)&&Oe(()=>{p&&dn(p,r,t),b&&v.enter(d),w&&Z(t,null,r,"mounted")},o)},k=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;k(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},O=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?ln(t[u]):un(t[u]);y(null,c,e,n,r,i,s,o,a)}},R=(t,e,n,r,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.MZ,g=e.props||i.MZ;let m;n&&Ne(n,!1),(m=g.onVnodeBeforeUpdate)&&dn(m,n,e,t),d&&Z(e,t,n,"beforeUpdate"),n&&Ne(n,!0);const y=s&&"foreignObject"!==e.type;if(h?D(t.dynamicChildren,h,u,n,r,y,o):c||B(t,e,u,null,n,r,y,o,!1),l>0){if(16&l)N(u,e,p,g,n,r,s);else if(2&l&&p.class!==g.class&&a(u,"class",null,g.class,s),4&l&&a(u,"style",p.style,g.style,s),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const o=i[e],c=p[o],l=g[o];l===c&&"value"!==o||a(u,o,c,l,s,t.children,n,r,X)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||N(u,e,p,g,n,r,s);((m=g.onVnodeUpdated)||d)&&Oe(()=>{m&&dn(m,n,e,t),d&&Z(e,t,n,"updated")},r)},D=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Fe||!Xe(c,u)||70&c.shapeFlag)?d(c.el):n;y(c,u,l,null,r,i,s,o,!0)}},N=(t,e,n,r,s,o,c)=>{if(n!==r){if(n!==i.MZ)for(const u in n)(0,i.SU)(u)||u in r||a(t,u,n[u],null,c,e.children,s,o,X);for(const u in r){if((0,i.SU)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,s,o,X)}"value"in r&&a(t,"value",n.value,r.value)}},L=(t,e,n,r,i,o,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(s(h,n,r),s(f,n,r),O(e.children,n,f,i,o,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(D(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&Le(t,e,!0)):B(t,e,n,f,i,o,a,c,l)},P=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):M(e,n,r,i,s,o,c):F(t,e,c)},M=(t,e,n,r,i,s,o)=>{const a=t.component=mn(t,r,i);if(dt(t)&&(a.ctx.renderer=et),xn(a),a.asyncDep){if(i&&i.registerDep(a,U),!t.el){const t=a.subTree=nn(Ue);w(null,t,e,n)}}else U(a,t,e,n,i,s,o)},F=(t,e,n)=>{const r=e.component=t.component;if($(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,e,n);r.next=e,E(r.update),r.update()}else e.el=t.el,r.vnode=e},U=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:s,parent:u,vnode:l}=t,h=n;0,Ne(t,!1),n?(n.el=l.el,j(t,n,c)):n=l,r&&(0,i.DY)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&dn(e,u,n,l),Ne(t,!0);const f=V(t);0;const p=t.subTree;t.subTree=f,y(p,f,d(p.el),J(p),t,o,a),n.el=f.el,null===h&&z(t,f.el),s&&Oe(s,o),(e=n.props&&n.props.onVnodeUpdated)&&Oe(()=>dn(e,u,n,l),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=ft(e);if(Ne(t,!1),l&&(0,i.DY)(l),!d&&(r=u&&u.onVnodeBeforeMount)&&dn(r,f,e),Ne(t,!0),c&&rt){const n=()=>{t.subTree=V(t),rt(c,t.subTree,t,o,null)};d?e.type.__asyncLoader().then(()=>!t.isUnmounted&&n()):n()}else{0;const r=t.subTree=V(t);0,y(null,r,n,s,t,o,a),e.el=r.el}if(h&&Oe(h,o),!d&&(r=u&&u.onVnodeMounted)){const t=e;Oe(()=>dn(r,f,t),o)}(256&e.shapeFlag||f&&ft(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&Oe(t.a,o),t.isMounted=!0,e=n=s=null}},l=t.effect=new r.X2(u,()=>b(h),t.scope),h=t.update=()=>l.run();h.id=t.uid,Ne(t,!0),h()},j=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,de(t,e.props,i,n),Ie(t,e.children,n),(0,r.C4)(),S(),(0,r.bl)()},B=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void G(u,h,n,r,i,s,o,a,c);if(256&d)return void q(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&X(u,i,s),h!==u&&f(n,h)):16&l?16&p?G(u,h,n,r,i,s,o,a,c):X(u,i,s,!0):(8&l&&f(n,""),16&p&&O(h,n,r,i,s,o,a,c))},q=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Oj,e=e||i.Oj;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?ln(e[d]):un(e[d]);y(t[d],r,n,null,s,o,a,c,u)}l>h?X(t,s,o,!0,!1,f):O(e,n,r,s,o,a,c,u,f)},G=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?ln(e[l]):un(e[l]);if(!Xe(r,i))break;y(r,i,n,null,s,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?ln(e[d]):un(e[d]);if(!Xe(r,i))break;y(r,i,n,null,s,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)y(null,e[l]=u?ln(e[l]):un(e[l]),n,i,s,o,a,c,u),l++}}else if(l>d)while(l<=f)H(t[l],s,o,!0),l++;else{const p=l,g=l,m=new Map;for(l=g;l<=d;l++){const t=e[l]=u?ln(e[l]):un(e[l]);null!=t.key&&m.set(t.key,l)}let v,w=0;const b=d-g+1;let _=!1,E=0;const T=new Array(b);for(l=0;l<b;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(w>=b){H(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=d;v++)if(0===T[v-g]&&Xe(r,e[v])){i=v;break}void 0===i?H(r,s,o,!0):(T[i-g]=l+1,i>=E?E=i:_=!0,y(r,e[i],n,null,s,o,a,c,u),w++)}const S=_?Pe(T):i.Oj;for(v=S.length-1,l=b-1;l>=0;l--){const t=g+l,i=e[t],f=t+1<h?e[t+1].el:r;0===T[l]?y(null,i,n,f,s,o,a,c,u):_&&(v<0||l!==S[v]?K(i,n,f,2):v--)}}},K=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void K(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,et);if(a===Fe){s(o,e,n);for(let t=0;t<u.length;t++)K(u[t],e,n,r);return void s(t.anchor,e,n)}if(a===je)return void T(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,e,n),Oe(()=>c.enter(o),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>s(o,e,n),u=()=>{t(o,()=>{a(),i&&i()})};r?r(o,a,u):u()}else s(o,e,n)},H=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&xe(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!ft(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&dn(g,e,t),6&l)Y(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&Z(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,et,r):u&&(s!==Fe||h>0&&64&h)?X(u,e,n,!1,!0):(s===Fe&&384&h||!i&&16&l)&&X(c,e,n),r&&W(t)}(p&&(g=o&&o.onVnodeUnmounted)||d)&&Oe(()=>{g&&dn(g,e,t),d&&Z(t,null,e,"unmounted")},n)},W=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Fe)return void Q(n,r);if(e===je)return void C(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},Q=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Y=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=t;r&&(0,i.DY)(r),s.stop(),o&&(o.active=!1,H(a,t,e,n)),c&&Oe(c,e),Oe(()=>{t.isUnmounted=!0},e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},X=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)H(t[o],e,n,r,i)},J=t=>6&t.shapeFlag?J(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&H(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),S(),A(),e._vnode=t},et={p:y,um:H,m:K,r:W,mt:M,mc:O,pc:B,pbc:D,n:J,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:ae(tt,nt)}}function Ne({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Le(t,e,n=!1){const r=t.children,s=e.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=ln(s[i]),e.el=t.el),n||Le(t,e)),e.type===Ve&&(e.el=t.el)}}function Pe(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const Me=t=>t.__isTeleport;const Fe=Symbol.for("v-fgt"),Ve=Symbol.for("v-txt"),Ue=Symbol.for("v-cmt"),je=Symbol.for("v-stc"),$e=[];let Be=null;function ze(t=!1){$e.push(Be=t?null:[])}function qe(){$e.pop(),Be=$e[$e.length-1]||null}let Ge=1;function Ke(t){Ge+=t}function He(t){return t.dynamicChildren=Ge>0?Be||i.Oj:null,qe(),Ge>0&&Be&&Be.push(t),t}function We(t,e,n,r,i,s){return He(en(t,e,n,r,i,s,!0))}function Qe(t,e,n,r,i){return He(nn(t,e,n,r,i,!0))}function Ye(t){return!!t&&!0===t.__v_isVNode}function Xe(t,e){return t.type===e.type&&t.key===e.key}const Je="__vInternal",Ze=({key:t})=>null!=t?t:null,tn=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.Kg)(t)||(0,r.i9)(t)||(0,i.Tn)(t)?{i:D,r:t,k:e,f:!!n}:t:null);function en(t,e=null,n=null,r=0,s=null,o=(t===Fe?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ze(e),ref:e&&tn(e),scopeId:N,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:D};return c?(hn(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.Kg)(n)?8:16),Ge>0&&!a&&Be&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Be.push(u),u}const nn=rn;function rn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==Pt||(t=Ue),Ye(t)){const r=on(t,e,!0);return n&&hn(r,n),Ge>0&&!a&&Be&&(6&r.shapeFlag?Be[Be.indexOf(t)]=r:Be.push(r)),r.patchFlag|=-2,r}if(Mn(t)&&(t=t.__vccOpts),e){e=sn(e);let{class:t,style:n}=e;t&&!(0,i.Kg)(t)&&(e.class=(0,i.C4)(t)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),e.style=(0,i.Tr)(n))}const c=(0,i.Kg)(t)?1:q(t)?128:Me(t)?64:(0,i.Gv)(t)?4:(0,i.Tn)(t)?2:0;return en(t,e,n,s,o,c,a,!0)}function sn(t){return t?(0,r.ju)(t)||Je in t?(0,i.X$)({},t):t:null}function on(t,e,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=t,c=e?fn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ze(c),ref:e&&e.ref?n&&s?(0,i.cy)(s)?s.concat(tn(e)):[s,tn(e)]:tn(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&on(t.ssContent),ssFallback:t.ssFallback&&on(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u}function an(t=" ",e=0){return nn(Ve,null,t,e)}function cn(t="",e=!1){return e?(ze(),Qe(Ue,null,t)):nn(Ue,null,t)}function un(t){return null==t||"boolean"===typeof t?nn(Ue):(0,i.cy)(t)?nn(Fe,null,t.slice()):"object"===typeof t?ln(t):nn(Ve,null,String(t))}function ln(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:on(t)}function hn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),hn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Je in e?3===r&&D&&(1===D.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=D}}else(0,i.Tn)(e)?(e={default:e,_ctx:D},n=32):(e=String(e),64&r?(n=16,e=[an(e)]):n=8);t.children=e,t.shapeFlag|=n}function fn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C4)([e.class,r.class]));else if("style"===t)e.style=(0,i.Tr)([e.style,r.style]);else if((0,i.Mp)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function dn(t,e,n,r=null){o(t,e,7,[n,r])}const pn=se();let gn=0;function mn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||pn,a={uid:gn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:me(s,o),emitsOptions:O(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=k.bind(null,a),t.ce&&t.ce(a),a}let yn=null;const vn=()=>yn||D;let wn,bn,_n="__VUE_INSTANCE_SETTERS__";(bn=(0,i.We)()[_n])||(bn=(0,i.We)()[_n]=[]),bn.push(t=>yn=t),wn=t=>{bn.length>1?bn.forEach(e=>e(t)):bn[0](t)};const En=t=>{wn(t),t.scope.on()},Tn=()=>{yn&&yn.scope.off(),wn(null)};function Sn(t){return 4&t.vnode.shapeFlag}let An,Cn,In=!1;function xn(t,e=!1){In=e;const{props:n,children:r}=t.vnode,i=Sn(t);fe(t,n,i,e),Ce(t,r);const s=i?kn(t,e):void 0;return In=!1,s}function kn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.IG)(new Proxy(t.ctx,Bt));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?Nn(t):null;En(t),(0,r.C4)();const c=s(o,t,0,[t.props,n]);if((0,r.bl)(),Tn(),(0,i.yL)(c)){if(c.then(Tn,Tn),e)return c.then(n=>{On(t,n,e)}).catch(e=>{a(e,t,0)});t.asyncDep=c}else On(t,c,e)}else Rn(t,e)}function On(t,e,n){(0,i.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),Rn(t,n)}function Rn(t,e,n){const s=t.type;if(!t.render){if(!e&&An&&!s.render){const e=s.template||Qt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=An(e,c)}}t.render=s.render||i.tE,Cn&&Cn(t)}En(t),(0,r.C4)(),Gt(t),(0,r.bl)(),Tn()}function Dn(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return(0,r.u4)(t,"get","$attrs"),e[n]}}))}function Nn(t){const e=e=>{t.exposed=e||{}};return{get attrs(){return Dn(t)},slots:t.slots,emit:t.emit,expose:e}}function Ln(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in jt?jt[n](t):void 0},has(t,e){return e in t||e in jt}}))}function Pn(t,e=!0){return(0,i.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Mn(t){return(0,i.Tn)(t)&&"__vccOpts"in t}const Fn=(t,e)=>(0,r.EW)(t,e,In);function Vn(t,e,n){const r=arguments.length;return 2===r?(0,i.Gv)(e)&&!(0,i.cy)(e)?Ye(e)?nn(t,null,[e]):nn(t,e):nn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Ye(n)&&(n=[n]),nn(t,e,n))}const Un=Symbol.for("v-scx"),jn=()=>{{const t=le(Un);return t}};const $n="3.3.4"},6843:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6845:function(t,e,n){var r,i,s=n(200),o=n(7061),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},6885:function(t,e,n){var r=n(3091),i=n(4601),s=n(8823),o=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:s?o(t,e):function(){return t.apply(e,arguments)}}},6902:function(t,e,n){var r=n(200),i=n(6100),s=n(3610).f,o=n(7632).f,a=r.Symbol;if(i("dispose"),a){var c=o(a,"dispose");c.enumerable&&c.configurable&&c.writable&&s(a,"dispose",{value:c.value,enumerable:!1,configurable:!1,writable:!1})}},6926:function(t){t.exports=!1},7060:function(t,e,n){var r=n(1605),i=n(3938),s=n(2929),o=n(938),a=[].push;r({target:"Iterator",proto:!0,real:!0},{toArray:function(){var t=[];return s(o(i(this)),a,{that:t,IS_RECORD:!0}),t}})},7061:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7168:function(t,e,n){var r=n(2074);t.exports=!r(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})},7242:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},7469:function(t,e,n){var r=n(281),i=n(4745),s=r(ArrayBuffer.prototype.slice);t.exports=function(t){if(0!==i(t))return!1;try{return s(t,0,0),!1}catch(e){return!0}}},7472:function(t,e,n){var r=n(3062);t.exports=function(t){var e=r(t);return"BigInt64Array"===e||"BigUint64Array"===e}},7473:function(t,e,n){var r=n(8420),i=String,s=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw new s("Can't set "+i(t)+" as a prototype")}},7485:function(t,e,n){var r=n(8420),i=n(3610),s=n(8218),o=n(9430);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},7632:function(t,e,n){var r=n(5077),i=n(2368),s=n(9304),o=n(6843),a=n(5476),c=n(6032),u=n(6490),l=n(7694),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},7658:function(t,e,n){var r=n(281);t.exports=r({}.isPrototypeOf)},7694:function(t,e,n){var r=n(5077),i=n(2074),s=n(3262);t.exports=!r&&!i(function(){return 7!==Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a})},7708:function(t){t.exports={}},7712:function(t,e,n){var r=n(5077),i=n(3610),s=n(6843);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},7970:function(t,e,n){var r=n(6490),i=n(8420),s=n(2612),o=n(5904),a=n(7168),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},8026:function(t,e,n){var r,i,s,o,a=n(200),c=n(2785),u=n(3291),l=a.structuredClone,h=a.ArrayBuffer,f=a.MessageChannel,d=!1;if(u)d=function(t){l(t,{transfer:[t]})};else if(h)try{f||(r=c("worker_threads"),r&&(f=r.MessageChannel)),f&&(i=new f,s=new h(2),o=function(t){i.port1.postMessage(null,[t])},2===s.byteLength&&(o(s),0===s.byteLength&&(d=o)))}catch(p){}t.exports=d},8186:function(t,e,n){var r=n(5476),i=n(6539),s=n(3493),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!==n){while(u>l)if(a=c[l++],a!==a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},8194:function(t,e,n){var r=n(1009),i=n(1171).has,s=n(605),o=n(2926),a=n(8896),c=n(64),u=n(9868);t.exports=function(t){var e=r(this),n=o(t);if(s(e)<=n.size)return!1!==a(e,function(t){if(n.includes(t))return!1},!0);var l=n.getIterator();return!1!==c(l,function(t){if(i(e,t))return u(l,"normal",!1)})}},8218:function(t,e,n){var r=n(281),i=n(2074),s=n(8420),o=n(6490),a=n(5077),c=n(2071).CONFIGURABLE,u=n(9965),l=n(9206),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,g=r("".slice),m=r("".replace),y=r([].join),v=a&&!i(function(){return 8!==p(function(){},"length",{value:8}).length}),w=String(String).split("String"),b=t.exports=function(t,e,n){"Symbol("===g(d(e),0,7)&&(e="["+m(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),v&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=y(w,"string"==typeof e?e:"")),t};Function.prototype.toString=b(function(){return s(this)&&f(this).source||u(this)},"toString")},8223:function(t,e,n){var r=n(6492),i=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};t.exports=function(t){var e=r("Set");try{(new e)[t](i(0));try{return(new e)[t](i(-1)),!1}catch(n){return!0}}catch(s){return!1}}},8296:function(t){t.exports=function(t,e){return{value:t,done:e}}},8318:function(t,e,n){var r=n(2368),i=n(4601),s=n(3938),o=n(938),a=n(1523),c=n(1332),u=a(function(){var t=this.iterator,e=s(r(this.next,t)),n=this.done=!!e.done;if(!n)return c(t,this.mapper,[e.value,this.counter++],!0)});t.exports=function(t){return s(this),i(t),new u(o(this),{mapper:t})}},8369:function(t,e,n){var r=n(200),i=n(8420),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},8406:function(t){t.exports=function(t){return null===t||void 0===t}},8420:function(t,e,n){var r=n(6568),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},8523:function(t,e,n){var r=n(419),i=n(5223);t.exports=!r&&!i&&"object"==typeof window&&"object"==typeof document},8569:function(t,e,n){var r=n(281),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},8664:function(t,e,n){var r=n(281),i=n(2074),s=n(8569),o=Object,a=r("".split);t.exports=i(function(){return!o("z").propertyIsEnumerable(0)})?function(t){return"String"===s(t)?a(t,""):o(t)}:o},8679:function(t,e,n){var r=n(8569);t.exports=Array.isArray||function(t){return"Array"===r(t)}},8743:function(t,e,n){var r=n(1605),i=n(2612),s=n(3493),o=n(6648),a=n(7242),c=n(2074),u=c(function(){return 4294967297!==[].push.call({length:4294967296},1)}),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},8823:function(t,e,n){var r=n(2074);t.exports=!r(function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")})},8890:function(t,e,n){var r=n(6492);t.exports=r("document","documentElement")},8896:function(t,e,n){var r=n(281),i=n(64),s=n(1171),o=s.Set,a=s.proto,c=r(a.forEach),u=r(a.keys),l=u(new o).next;t.exports=function(t,e,n){return n?i({iterator:u(t),next:l},e):c(t,e)}},8916:function(t,e){e.f=Object.getOwnPropertySymbols},9034:function(t,e,n){var r=n(1602),i=n(2228),s=r("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(i.Array===t||o[s]===t)}},9070:function(t,e,n){var r=n(8823),i=Function.prototype,s=i.apply,o=i.call;t.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},9074:function(t,e,n){var r=n(1605),i=n(2074),s=n(9697),o=n(8223),a=!o("intersection")||i(function(){return"3,2"!==Array.from(new Set([1,2,3]).intersection(new Set([3,2])))});r({target:"Set",proto:!0,real:!0,forced:a},{intersection:s})},9078:function(t,e,n){var r=n(1605),i=n(200),s=n(6492),o=n(6843),a=n(3610).f,c=n(6490),u=n(5190),l=n(3054),h=n(610),f=n(6567),d=n(6452),p=n(5077),g=n(6926),m="DOMException",y=s("Error"),v=s(m),w=function(){u(this,b);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new v(e,n),i=new y(e);return i.name=m,a(r,"stack",o(1,d(i.stack,1))),l(r,this,w),r},b=w.prototype=v.prototype,_="stack"in new y(m),E="stack"in new v(1,2),T=v&&p&&Object.getOwnPropertyDescriptor(i,m),S=!!T&&!(T.writable&&T.configurable),A=_&&!S&&!E;r({global:!0,constructor:!0,forced:g||A},{DOMException:A?w:v});var C=s(m),I=C.prototype;if(I.constructor!==C)for(var x in g||a(I,"constructor",o(1,C)),f)if(c(f,x)){var k=f[x],O=k.s;c(C,O)||a(C,O,o(6,k.c))}},9206:function(t,e,n){var r,i,s,o=n(8369),a=n(200),c=n(5335),u=n(7712),l=n(6490),h=n(9310),f=n(5904),d=n(7708),p="Object already initialized",g=a.TypeError,m=a.WeakMap,y=function(t){return s(t)?i(t):r(t,{})},v=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var w=h.state||(h.state=new m);w.get=w.get,w.has=w.has,w.set=w.set,r=function(t,e){if(w.has(t))throw new g(p);return e.facade=t,w.set(t,e),e},i=function(t){return w.get(t)||{}},s=function(t){return w.has(t)}}else{var b=f("state");d[b]=!0,r=function(t,e){if(l(t,b))throw new g(p);return e.facade=t,u(t,b,e),e},i=function(t){return l(t,b)?t[b]:{}},s=function(t){return l(t,b)}}t.exports={set:r,get:i,has:s,enforce:y,getterFor:v}},9229:function(t,e,n){var r=n(1605),i=n(2929),s=n(4601),o=n(3938),a=n(938);r({target:"Iterator",proto:!0,real:!0},{some:function(t){o(this),s(t);var e=a(this),n=0;return i(e,function(e,r){if(t(e,n++))return r()},{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},9266:function(t,e,n){var r=n(1605),i=n(3877);i&&r({target:"ArrayBuffer",proto:!0},{transferToFixedLength:function(){return i(this,arguments.length?arguments[0]:void 0,!1)}})},9286:function(t,e,n){var r=n(1605),i=n(3877);i&&r({target:"ArrayBuffer",proto:!0},{transfer:function(){return i(this,arguments.length?arguments[0]:void 0,!0)}})},9304:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},9306:function(t,e,n){var r,i,s,o=n(2074),a=n(8420),c=n(5335),u=n(3105),l=n(7970),h=n(7485),f=n(1602),d=n(6926),p=f("iterator"),g=!1;[].keys&&(s=[].keys(),"next"in s?(i=l(l(s)),i!==Object.prototype&&(r=i)):g=!0);var m=!c(r)||o(function(){var t={};return r[p].call(t)!==t});m?r={}:d&&(r=u(r)),a(r[p])||h(r,p,function(){return this}),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:g}},9310:function(t,e,n){var r=n(200),i=n(9430),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},9328:function(t,e,n){var r=n(9830);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},9368:function(t,e,n){var r=n(2368),i=n(7485),s=n(6457),o=n(6490),a=n(1602),c=n(9306).IteratorPrototype,u=a("dispose");o(c,u)||i(c,u,function(){var t=s(this,"return");t&&r(t,this)})},9430:function(t,e,n){var r=n(200),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9471:function(t,e,n){var r=n(1605),i=n(2929),s=n(4601),o=n(3938),a=n(938),c=TypeError;r({target:"Iterator",proto:!0,real:!0},{reduce:function(t){o(this),s(t);var e=a(this),n=arguments.length<2,r=n?void 0:arguments[1],u=0;if(i(e,function(e){n?(n=!1,r=e):r=t(r,e,u),u++},{IS_RECORD:!0}),n)throw new c("Reduce of empty iterator with no initial value");return r}})},9526:function(t,e,n){var r=n(2368),i=n(4601),s=n(3938),o=n(3838),a=n(1898),c=TypeError;t.exports=function(t,e){var n=arguments.length<2?a(t):e;if(i(n))return s(r(n,t));throw new c(o(t)+" is not iterable")}},9583:function(t,e,n){var r=n(1171),i=n(8896),s=r.Set,o=r.add;t.exports=function(t){var e=new s;return i(t,function(t){o(e,t)}),e}},9609:function(t,e,n){var r=n(281);t.exports=r([].slice)},9639:function(t,e,n){var r=n(5077),i=n(6477),s=n(7469),o=ArrayBuffer.prototype;r&&!("detached"in o)&&i(o,"detached",{configurable:!0,get:function(){return s(this)}})},9686:function(t,e,n){var r=n(1385),i=n(3938),s=n(7473);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},9697:function(t,e,n){var r=n(1009),i=n(1171),s=n(605),o=n(2926),a=n(8896),c=n(64),u=i.Set,l=i.add,h=i.has;t.exports=function(t){var e=r(this),n=o(t),i=new u;return s(e)>n.size?c(n.getIterator(),function(t){h(e,t)&&l(i,t)}):a(e,function(t){n.includes(t)&&l(i,t)}),i}},9720:function(t,e,n){var r=n(200);t.exports=r},9751:function(t,e,n){var r=n(2368),i=n(8420),s=n(5335),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw new o("Can't convert object to primitive value")}},9830:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},9838:function(t,e,n){var r=n(1605),i=n(2929),s=n(4601),o=n(3938),a=n(938);r({target:"Iterator",proto:!0,real:!0},{forEach:function(t){o(this),s(t);var e=a(this),n=0;i(e,function(e){t(e,n++)},{IS_RECORD:!0})}})},9868:function(t,e,n){var r=n(2368),i=n(3938),s=n(6457);t.exports=function(t,e,n){var o,a;i(t);try{if(o=s(t,"return"),!o){if("throw"===e)throw n;return n}o=r(o,t)}catch(c){a=!0,o=c}if("throw"===e)throw n;if(a)throw o;return i(o),n}},9965:function(t,e,n){var r=n(281),i=n(8420),s=n(9310),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource}}]);
//# sourceMappingURL=chunk-vendors.047cd4f1.js.map