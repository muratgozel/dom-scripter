"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=function(t){return t&&t.Math==Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,a={f:u&&!c.call({1:2},1)?function(t){var e=u(this,t);return!!e&&e.enumerable}:c},f=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},s={}.toString,l=function(t){return s.call(t).slice(8,-1)},p="".split,d=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==l(t)?p.call(t,""):Object(t)}:Object,v=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},h=function(t){return d(v(t))},y=function(t){return"object"==typeof t?null!==t:"function"==typeof t},g=function(t,e){if(!y(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!y(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},m={}.hasOwnProperty,b=function(t,e){return m.call(t,e)},j=r.document,w=y(j)&&y(j.createElement),S=function(t){return w?j.createElement(t):{}},O=!i&&!o((function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a})),E=Object.getOwnPropertyDescriptor,x={f:i?E:function(t,e){if(t=h(t),e=g(e,!0),O)try{return E(t,e)}catch(t){}if(b(t,e))return f(!a.f.call(t,e),t[e])}},T=function(t){if(!y(t))throw TypeError(String(t)+" is not an object");return t},P=Object.defineProperty,A={f:i?P:function(t,e,n){if(T(t),e=g(e,!0),T(n),O)try{return P(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},I=i?function(t,e,n){return A.f(t,e,f(1,n))}:function(t,e,n){return t[e]=n,t},C=function(t,e){try{I(r,t,e)}catch(n){r[t]=e}return e},M=r["__core-js_shared__"]||C("__core-js_shared__",{}),k=Function.toString;"function"!=typeof M.inspectSource&&(M.inspectSource=function(t){return k.call(t)});var L,N,_,B,F=M.inspectSource,D=r.WeakMap,R="function"==typeof D&&/native code/.test(F(D)),z=e((function(t){(t.exports=function(t,e){return M[t]||(M[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),U=0,W=Math.random(),q=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++U+W).toString(36)},G=z("keys"),J={},K=r.WeakMap;if(R){var H=new K,V=H.get,Y=H.has,Q=H.set;L=function(t,e){return Q.call(H,t,e),e},N=function(t){return V.call(H,t)||{}},_=function(t){return Y.call(H,t)}}else{var X=G[B="state"]||(G[B]=q(B));J[X]=!0,L=function(t,e){return I(t,X,e),e},N=function(t){return b(t,X)?t[X]:{}},_=function(t){return b(t,X)}}var Z,$,tt={set:L,get:N,has:_,enforce:function(t){return _(t)?N(t):L(t,{})},getterFor:function(t){return function(e){var n;if(!y(e)||(n=N(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},et=e((function(t){var e=tt.get,n=tt.enforce,o=String(String).split("String");(t.exports=function(t,e,i,c){var u=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,f=!!c&&!!c.noTargetGet;"function"==typeof i&&("string"!=typeof e||b(i,"name")||I(i,"name",e),n(i).source=o.join("string"==typeof e?e:"")),t!==r?(u?!f&&t[e]&&(a=!0):delete t[e],a?t[e]=i:I(t,e,i)):a?t[e]=i:C(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||F(this)}))})),nt=r,rt=function(t){return"function"==typeof t?t:void 0},ot=function(t,e){return arguments.length<2?rt(nt[t])||rt(r[t]):nt[t]&&nt[t][e]||r[t]&&r[t][e]},it=Math.ceil,ct=Math.floor,ut=function(t){return isNaN(t=+t)?0:(t>0?ct:it)(t)},at=Math.min,ft=function(t){return t>0?at(ut(t),9007199254740991):0},st=Math.max,lt=Math.min,pt=function(t){return function(e,n,r){var o,i=h(e),c=ft(i.length),u=function(t,e){var n=ut(t);return n<0?st(n+e,0):lt(n,e)}(r,c);if(t&&n!=n){for(;c>u;)if((o=i[u++])!=o)return!0}else for(;c>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},dt={includes:pt(!0),indexOf:pt(!1)},vt=dt.indexOf,ht=function(t,e){var n,r=h(t),o=0,i=[];for(n in r)!b(J,n)&&b(r,n)&&i.push(n);for(;e.length>o;)b(r,n=e[o++])&&(~vt(i,n)||i.push(n));return i},yt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],gt=yt.concat("length","prototype"),mt={f:Object.getOwnPropertyNames||function(t){return ht(t,gt)}},bt={f:Object.getOwnPropertySymbols},jt=ot("Reflect","ownKeys")||function(t){var e=mt.f(T(t)),n=bt.f;return n?e.concat(n(t)):e},wt=function(t,e){for(var n=jt(e),r=A.f,o=x.f,i=0;i<n.length;i++){var c=n[i];b(t,c)||r(t,c,o(e,c))}},St=/#|\.prototype\./,Ot=function(t,e){var n=xt[Et(t)];return n==Pt||n!=Tt&&("function"==typeof e?o(e):!!e)},Et=Ot.normalize=function(t){return String(t).replace(St,".").toLowerCase()},xt=Ot.data={},Tt=Ot.NATIVE="N",Pt=Ot.POLYFILL="P",At=Ot,It=x.f,Ct=function(t,e){var n,o,i,c,u,a=t.target,f=t.global,s=t.stat;if(n=f?r:s?r[a]||C(a,{}):(r[a]||{}).prototype)for(o in e){if(c=e[o],i=t.noTargetGet?(u=It(n,o))&&u.value:n[o],!At(f?o:a+(s?".":"#")+o,t.forced)&&void 0!==i){if(typeof c==typeof i)continue;wt(c,i)}(t.sham||i&&i.sham)&&I(c,"sham",!0),et(n,o,c,t)}},Mt=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},kt=function(t,e,n){if(Mt(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},Lt=function(t){return Object(v(t))},Nt=Array.isArray||function(t){return"Array"==l(t)},_t=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),Bt=_t&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ft=z("wks"),Dt=r.Symbol,Rt=Bt?Dt:Dt&&Dt.withoutSetter||q,zt=function(t){return b(Ft,t)||(_t&&b(Dt,t)?Ft[t]=Dt[t]:Ft[t]=Rt("Symbol."+t)),Ft[t]},Ut=zt("species"),Wt=function(t,e){var n;return Nt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Nt(n.prototype)?y(n)&&null===(n=n[Ut])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},qt=[].push,Gt=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,c=5==t||i;return function(u,a,f,s){for(var l,p,v=Lt(u),h=d(v),y=kt(a,f,3),g=ft(h.length),m=0,b=s||Wt,j=e?b(u,g):n?b(u,0):void 0;g>m;m++)if((c||m in h)&&(p=y(l=h[m],m,v),t))if(e)j[m]=p;else if(p)switch(t){case 3:return!0;case 5:return l;case 6:return m;case 2:qt.call(j,l)}else if(o)return!1;return i?-1:r||o?o:j}},Jt={forEach:Gt(0),map:Gt(1),filter:Gt(2),some:Gt(3),every:Gt(4),find:Gt(5),findIndex:Gt(6)},Kt=ot("navigator","userAgent")||"",Ht=r.process,Vt=Ht&&Ht.versions,Yt=Vt&&Vt.v8;Yt?$=(Z=Yt.split("."))[0]+Z[1]:Kt&&(!(Z=Kt.match(/Edge\/(\d+)/))||Z[1]>=74)&&(Z=Kt.match(/Chrome\/(\d+)/))&&($=Z[1]);var Qt=$&&+$,Xt=zt("species"),Zt=function(t){return Qt>=51||!o((function(){var e=[];return(e.constructor={})[Xt]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},$t=Object.defineProperty,te={},ee=function(t){throw t},ne=function(t,e){if(b(te,t))return te[t];e||(e={});var n=[][t],r=!!b(e,"ACCESSORS")&&e.ACCESSORS,c=b(e,0)?e[0]:ee,u=b(e,1)?e[1]:void 0;return te[t]=!!n&&!o((function(){if(r&&!i)return!0;var t={length:-1};r?$t(t,1,{enumerable:!0,get:ee}):t[1]=1,n.call(t,c,u)}))},re=Jt.filter,oe=Zt("filter"),ie=ne("filter");Ct({target:"Array",proto:!0,forced:!oe||!ie},{filter:function(t){return re(this,t,arguments.length>1?arguments[1]:void 0)}});var ce,ue,ae=dt.indexOf,fe=[].indexOf,se=!!fe&&1/[1].indexOf(1,-0)<0,le=!!(ue=[]["indexOf"])&&o((function(){ue.call(null,ce||function(){throw 1},1)})),pe=ne("indexOf",{ACCESSORS:!0,1:0});Ct({target:"Array",proto:!0,forced:se||!le||!pe},{indexOf:function(t){return se?fe.apply(this,arguments)||0:ae(this,t,arguments.length>1?arguments[1]:void 0)}});var de=Jt.map,ve=Zt("map"),he=ne("map");Ct({target:"Array",proto:!0,forced:!ve||!he},{map:function(t){return de(this,t,arguments.length>1?arguments[1]:void 0)}});var ye=Object.keys||function(t){return ht(t,yt)};Ct({target:"Object",stat:!0,forced:o((function(){ye(1)}))},{keys:function(t){return ye(Lt(t))}});var ge={};ge[zt("toStringTag")]="z";var me="[object z]"===String(ge),be=zt("toStringTag"),je="Arguments"==l(function(){return arguments}()),we=me?l:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),be))?n:je?l(e):"Object"==(r=l(e))&&"function"==typeof e.callee?"Arguments":r},Se=me?{}.toString:function(){return"[object "+we(this)+"]"};me||et(Object.prototype,"toString",Se,{unsafe:!0});var Oe=r.Promise,Ee=A.f,xe=zt("toStringTag"),Te=zt("species"),Pe={},Ae=zt("iterator"),Ie=Array.prototype,Ce=zt("iterator"),Me=function(t,e,n,r){try{return r?e(T(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&T(o.call(t)),e}},ke=e((function(t){var e=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,n,r,o,i){var c,u,a,f,s,l,p,d,v=kt(n,r,o?2:1);if(i)c=t;else{if("function"!=typeof(u=function(t){if(null!=t)return t[Ce]||t["@@iterator"]||Pe[we(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(d=u)&&(Pe.Array===d||Ie[Ae]===d)){for(a=0,f=ft(t.length);f>a;a++)if((s=o?v(T(p=t[a])[0],p[1]):v(t[a]))&&s instanceof e)return s;return new e(!1)}c=u.call(t)}for(l=c.next;!(p=l.call(c)).done;)if("object"==typeof(s=Me(c,v,p.value,o))&&s&&s instanceof e)return s;return new e(!1)}).stop=function(t){return new e(!0,t)}})),Le=zt("iterator"),Ne=!1;try{var _e=0,Be={next:function(){return{done:!!_e++}},return:function(){Ne=!0}};Be[Le]=function(){return this},Array.from(Be,(function(){throw 2}))}catch(t){}var Fe,De,Re,ze=zt("species"),Ue=ot("document","documentElement"),We=/(iphone|ipod|ipad).*applewebkit/i.test(Kt),qe=r.location,Ge=r.setImmediate,Je=r.clearImmediate,Ke=r.process,He=r.MessageChannel,Ve=r.Dispatch,Ye=0,Qe={},Xe=function(t){if(Qe.hasOwnProperty(t)){var e=Qe[t];delete Qe[t],e()}},Ze=function(t){return function(){Xe(t)}},$e=function(t){Xe(t.data)},tn=function(t){r.postMessage(t+"",qe.protocol+"//"+qe.host)};Ge&&Je||(Ge=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return Qe[++Ye]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},Fe(Ye),Ye},Je=function(t){delete Qe[t]},"process"==l(Ke)?Fe=function(t){Ke.nextTick(Ze(t))}:Ve&&Ve.now?Fe=function(t){Ve.now(Ze(t))}:He&&!We?(Re=(De=new He).port2,De.port1.onmessage=$e,Fe=kt(Re.postMessage,Re,1)):!r.addEventListener||"function"!=typeof postMessage||r.importScripts||o(tn)||"file:"===qe.protocol?Fe="onreadystatechange"in S("script")?function(t){Ue.appendChild(S("script")).onreadystatechange=function(){Ue.removeChild(this),Xe(t)}}:function(t){setTimeout(Ze(t),0)}:(Fe=tn,r.addEventListener("message",$e,!1)));var en,nn,rn,on,cn,un,an,fn,sn={set:Ge,clear:Je},ln=x.f,pn=sn.set,dn=r.MutationObserver||r.WebKitMutationObserver,vn=r.process,hn=r.Promise,yn="process"==l(vn),gn=ln(r,"queueMicrotask"),mn=gn&&gn.value;mn||(en=function(){var t,e;for(yn&&(t=vn.domain)&&t.exit();nn;){e=nn.fn,nn=nn.next;try{e()}catch(t){throw nn?on():rn=void 0,t}}rn=void 0,t&&t.enter()},yn?on=function(){vn.nextTick(en)}:dn&&!We?(cn=!0,un=document.createTextNode(""),new dn(en).observe(un,{characterData:!0}),on=function(){un.data=cn=!cn}):hn&&hn.resolve?(an=hn.resolve(void 0),fn=an.then,on=function(){fn.call(an,en)}):on=function(){pn.call(r,en)});var bn,jn,wn,Sn,On,En,xn,Tn=mn||function(t){var e={fn:t,next:void 0};rn&&(rn.next=e),nn||(nn=e,on()),rn=e},Pn=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=Mt(e),this.reject=Mt(n)},An={f:function(t){return new Pn(t)}},In=function(t,e){if(T(t),y(e)&&e.constructor===t)return e;var n=An.f(t);return(0,n.resolve)(e),n.promise},Cn=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},Mn=sn.set,kn=zt("species"),Ln="Promise",Nn=tt.get,_n=tt.set,Bn=tt.getterFor(Ln),Fn=Oe,Dn=r.TypeError,Rn=r.document,zn=r.process,Un=ot("fetch"),Wn=An.f,qn=Wn,Gn="process"==l(zn),Jn=!!(Rn&&Rn.createEvent&&r.dispatchEvent),Kn=At(Ln,(function(){if(!(F(Fn)!==String(Fn))){if(66===Qt)return!0;if(!Gn&&"function"!=typeof PromiseRejectionEvent)return!0}if(Qt>=51&&/native code/.test(Fn))return!1;var t=Fn.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[kn]=e,!(t.then((function(){}))instanceof e)})),Hn=Kn||!function(t,e){if(!e&&!Ne)return!1;var n=!1;try{var r={};r[Le]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n}((function(t){Fn.all(t).catch((function(){}))})),Vn=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},Yn=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;Tn((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var u,a,f,s=r[c++],l=i?s.ok:s.fail,p=s.resolve,d=s.reject,v=s.domain;try{l?(i||(2===e.rejection&&$n(t,e),e.rejection=1),!0===l?u=o:(v&&v.enter(),u=l(o),v&&(v.exit(),f=!0)),u===s.promise?d(Dn("Promise-chain cycle")):(a=Vn(u))?a.call(u,p,d):p(u)):d(o)}catch(t){v&&!f&&v.exit(),d(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&Xn(t,e)}))}},Qn=function(t,e,n){var o,i;Jn?((o=Rn.createEvent("Event")).promise=e,o.reason=n,o.initEvent(t,!1,!0),r.dispatchEvent(o)):o={promise:e,reason:n},(i=r["on"+t])?i(o):"unhandledrejection"===t&&function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},Xn=function(t,e){Mn.call(r,(function(){var n,r=e.value;if(Zn(e)&&(n=Cn((function(){Gn?zn.emit("unhandledRejection",r,t):Qn("unhandledrejection",t,r)})),e.rejection=Gn||Zn(e)?2:1,n.error))throw n.value}))},Zn=function(t){return 1!==t.rejection&&!t.parent},$n=function(t,e){Mn.call(r,(function(){Gn?zn.emit("rejectionHandled",t):Qn("rejectionhandled",t,e.value)}))},tr=function(t,e,n,r){return function(o){t(e,n,o,r)}},er=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,Yn(t,e,!0))},nr=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw Dn("Promise can't be resolved itself");var o=Vn(n);o?Tn((function(){var r={done:!1};try{o.call(n,tr(nr,t,r,e),tr(er,t,r,e))}catch(n){er(t,r,n,e)}})):(e.value=n,e.state=1,Yn(t,e,!1))}catch(n){er(t,{done:!1},n,e)}}};function rr(){this.beingInjected=[],this.timeout=1e4}Kn&&(Fn=function(t){!function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}(this,Fn,Ln),Mt(t),bn.call(this);var e=Nn(this);try{t(tr(nr,this,e),tr(er,this,e))}catch(t){er(this,e,t)}},(bn=function(t){_n(this,{type:Ln,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)et(t,r,e[r],n);return t}(Fn.prototype,{then:function(t,e){var n,r,o,i=Bn(this),c=Wn((n=Fn,void 0===(o=T(this).constructor)||null==(r=T(o)[ze])?n:Mt(r)));return c.ok="function"!=typeof t||t,c.fail="function"==typeof e&&e,c.domain=Gn?zn.domain:void 0,i.parent=!0,i.reactions.push(c),0!=i.state&&Yn(this,i,!1),c.promise},catch:function(t){return this.then(void 0,t)}}),jn=function(){var t=new bn,e=Nn(t);this.promise=t,this.resolve=tr(nr,t,e),this.reject=tr(er,t,e)},An.f=Wn=function(t){return t===Fn||t===wn?new jn(t):qn(t)},"function"==typeof Oe&&(Sn=Oe.prototype.then,et(Oe.prototype,"then",(function(t,e){var n=this;return new Fn((function(t,e){Sn.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof Un&&Ct({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return In(Fn,Un.apply(r,arguments))}}))),Ct({global:!0,wrap:!0,forced:Kn},{Promise:Fn}),En=Ln,xn=!1,(On=Fn)&&!b(On=xn?On:On.prototype,xe)&&Ee(On,xe,{configurable:!0,value:En}),function(t){var e=ot(t),n=A.f;i&&e&&!e[Te]&&n(e,Te,{configurable:!0,get:function(){return this}})}(Ln),wn=ot(Ln),Ct({target:Ln,stat:!0,forced:Kn},{reject:function(t){var e=Wn(this);return e.reject.call(void 0,t),e.promise}}),Ct({target:Ln,stat:!0,forced:Kn},{resolve:function(t){return In(this,t)}}),Ct({target:Ln,stat:!0,forced:Hn},{all:function(t){var e=this,n=Wn(e),r=n.resolve,o=n.reject,i=Cn((function(){var n=Mt(e.resolve),i=[],c=0,u=1;ke(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,n.call(e,t).then((function(t){f||(f=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=Wn(e),r=n.reject,o=Cn((function(){var o=Mt(e.resolve);ke(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}}),rr.prototype.reCSSExt=/(.css)/g,rr.prototype.supportedLocations=["bodyEnd","bodyStart","headEnd"],rr.prototype.inject=function(t,e){var n=this;if(!e.id)throw new Error("Missing id for an injected script.");var r=n.reCSSExt.test(t),o=r?"link":"script";return new Promise((function(i,c){if(document.getElementById(e.id))return i(e.id);if(-1!==n.beingInjected.indexOf(e.id))return i(null);n.beingInjected.push(e.id);var u=setTimeout((function(){return c(new Error("TIMEOUT"))}),n.timeout),a=document.createElement(o);function f(){return r&&(a.media=e.media||"all"),clearTimeout(u),n.beingInjected=n.beingInjected.filter((function(t){return t!=e.id})),i(e.id)}a.id=e.id,"link"==o&&(a.rel="stylesheet",a.href=t,a.media="only x"),"script"==o&&(a.type=e.type||"text/javascript",a.async=!e.hasOwnProperty("async")||e.async),e.attrs&&Object.keys(e.attrs).map((function(t){return a.setAttribute(t,e.attrs[t])})),a.addEventListener?a.addEventListener("load",f,!1):a.readyState?a.onreadystatechange=f:a.onload&&(a.onload=f),a.onerror&&(a.onerror=function(t){return clearTimeout(u),n.beingInjected=n.beingInjected.filter((function(t){return t!=e.id})),c(t)}),"script"==o&&(a.src=t),n.injectToLocation(a,e.location)}))},rr.prototype.injectJSONLD=function(t,e){if(e.id&&document.getElementById(e.id))return null;var n=document.createElement("script");n.type="application/ld+json",e.id&&(n.id=e.id),e.attrs&&Object.keys(e.attrs).map((function(t){return n.setAttribute(t,e.attrs[t])})),n.text="string"==typeof t?t:JSON.stringify(t),this.injectToLocation(n,e.location)},rr.prototype.injectToLocation=function(t,e){var n=e||self.supportedLocations[0];if(-1!==self.supportedLocations.indexOf(n)){var r=document.getElementsByTagName("head")[0],o=document.getElementsByTagName("body")[0];"headEnd"==n?r.lastChild.parentNode.insertBefore(t,null):"bodyEnd"==n?o.lastChild.parentNode.insertBefore(t,null):"bodyStart"==n&&o.firstChild.parentNode.insertBefore(t,null)}},rr.prototype.remove=function(t){var e=document.getElementById(t);e&&e.parentNode.removeChild(e)};var or=new rr;module.exports=or;