!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).Scripter=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=function(t){return t&&t.Math==Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")(),o=function(t){try{return!!t()}catch(t){return!0}},i=!o((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),c={}.propertyIsEnumerable,u=Object.getOwnPropertyDescriptor,a={f:u&&!c.call({1:2},1)?function(t){var e=u(this,t);return!!e&&e.enumerable}:c},f=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},s={}.toString,l=function(t){return s.call(t).slice(8,-1)},p="".split,d=o((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==l(t)?p.call(t,""):Object(t)}:Object,v=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},h=function(t){return d(v(t))},y=function(t){return"object"==typeof t?null!==t:"function"==typeof t},m=function(t,e){if(!y(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!y(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!y(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},g={}.hasOwnProperty,b=function(t,e){return g.call(t,e)},j=r.document,w=y(j)&&y(j.createElement),S=function(t){return w?j.createElement(t):{}},O=!i&&!o((function(){return 7!=Object.defineProperty(S("div"),"a",{get:function(){return 7}}).a})),E=Object.getOwnPropertyDescriptor,x={f:i?E:function(t,e){if(t=h(t),e=m(e,!0),O)try{return E(t,e)}catch(t){}if(b(t,e))return f(!a.f.call(t,e),t[e])}},T=function(t){if(!y(t))throw TypeError(String(t)+" is not an object");return t},P=Object.defineProperty,A={f:i?P:function(t,e,n){if(T(t),e=m(e,!0),T(n),O)try{return P(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},M=i?function(t,e,n){return A.f(t,e,f(1,n))}:function(t,e,n){return t[e]=n,t},k=function(t,e){try{M(r,t,e)}catch(n){r[t]=e}return e},C=r["__core-js_shared__"]||k("__core-js_shared__",{}),L=Function.toString;"function"!=typeof C.inspectSource&&(C.inspectSource=function(t){return L.call(t)});var I,N,_,B,F=C.inspectSource,D=r.WeakMap,R="function"==typeof D&&/native code/.test(F(D)),z=e((function(t){(t.exports=function(t,e){return C[t]||(C[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),U=0,W=Math.random(),q=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++U+W).toString(36)},G=z("keys"),J={},K=r.WeakMap;if(R){var H=new K,V=H.get,Y=H.has,Q=H.set;I=function(t,e){return Q.call(H,t,e),e},N=function(t){return V.call(H,t)||{}},_=function(t){return Y.call(H,t)}}else{var X=G[B="state"]||(G[B]=q(B));J[X]=!0,I=function(t,e){return M(t,X,e),e},N=function(t){return b(t,X)?t[X]:{}},_=function(t){return b(t,X)}}var Z,$,tt={set:I,get:N,has:_,enforce:function(t){return _(t)?N(t):I(t,{})},getterFor:function(t){return function(e){var n;if(!y(e)||(n=N(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},et=e((function(t){var e=tt.get,n=tt.enforce,o=String(String).split("String");(t.exports=function(t,e,i,c){var u=!!c&&!!c.unsafe,a=!!c&&!!c.enumerable,f=!!c&&!!c.noTargetGet;"function"==typeof i&&("string"!=typeof e||b(i,"name")||M(i,"name",e),n(i).source=o.join("string"==typeof e?e:"")),t!==r?(u?!f&&t[e]&&(a=!0):delete t[e],a?t[e]=i:M(t,e,i)):a?t[e]=i:k(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||F(this)}))})),nt=r,rt=function(t){return"function"==typeof t?t:void 0},ot=function(t,e){return arguments.length<2?rt(nt[t])||rt(r[t]):nt[t]&&nt[t][e]||r[t]&&r[t][e]},it=Math.ceil,ct=Math.floor,ut=function(t){return isNaN(t=+t)?0:(t>0?ct:it)(t)},at=Math.min,ft=function(t){return t>0?at(ut(t),9007199254740991):0},st=Math.max,lt=Math.min,pt=function(t){return function(e,n,r){var o,i=h(e),c=ft(i.length),u=function(t,e){var n=ut(t);return n<0?st(n+e,0):lt(n,e)}(r,c);if(t&&n!=n){for(;c>u;)if((o=i[u++])!=o)return!0}else for(;c>u;u++)if((t||u in i)&&i[u]===n)return t||u||0;return!t&&-1}},dt={includes:pt(!0),indexOf:pt(!1)},vt=dt.indexOf,ht=function(t,e){var n,r=h(t),o=0,i=[];for(n in r)!b(J,n)&&b(r,n)&&i.push(n);for(;e.length>o;)b(r,n=e[o++])&&(~vt(i,n)||i.push(n));return i},yt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],mt=yt.concat("length","prototype"),gt={f:Object.getOwnPropertyNames||function(t){return ht(t,mt)}},bt={f:Object.getOwnPropertySymbols},jt=ot("Reflect","ownKeys")||function(t){var e=gt.f(T(t)),n=bt.f;return n?e.concat(n(t)):e},wt=function(t,e){for(var n=jt(e),r=A.f,o=x.f,i=0;i<n.length;i++){var c=n[i];b(t,c)||r(t,c,o(e,c))}},St=/#|\.prototype\./,Ot=function(t,e){var n=xt[Et(t)];return n==Pt||n!=Tt&&("function"==typeof e?o(e):!!e)},Et=Ot.normalize=function(t){return String(t).replace(St,".").toLowerCase()},xt=Ot.data={},Tt=Ot.NATIVE="N",Pt=Ot.POLYFILL="P",At=Ot,Mt=x.f,kt=function(t,e){var n,o,i,c,u,a=t.target,f=t.global,s=t.stat;if(n=f?r:s?r[a]||k(a,{}):(r[a]||{}).prototype)for(o in e){if(c=e[o],i=t.noTargetGet?(u=Mt(n,o))&&u.value:n[o],!At(f?o:a+(s?".":"#")+o,t.forced)&&void 0!==i){if(typeof c==typeof i)continue;wt(c,i)}(t.sham||i&&i.sham)&&M(c,"sham",!0),et(n,o,c,t)}},Ct=Object.defineProperty,Lt={},It=function(t){throw t},Nt=function(t,e){if(b(Lt,t))return Lt[t];e||(e={});var n=[][t],r=!!b(e,"ACCESSORS")&&e.ACCESSORS,c=b(e,0)?e[0]:It,u=b(e,1)?e[1]:void 0;return Lt[t]=!!n&&!o((function(){if(r&&!i)return!0;var t={length:-1};r?Ct(t,1,{enumerable:!0,get:It}):t[1]=1,n.call(t,c,u)}))},_t=dt.indexOf,Bt=[].indexOf,Ft=!!Bt&&1/[1].indexOf(1,-0)<0,Dt=!!($=[]["indexOf"])&&o((function(){$.call(null,Z||function(){throw 1},1)})),Rt=Nt("indexOf",{ACCESSORS:!0,1:0});kt({target:"Array",proto:!0,forced:Ft||!Dt||!Rt},{indexOf:function(t){return Ft?Bt.apply(this,arguments)||0:_t(this,t,arguments.length>1?arguments[1]:void 0)}});var zt,Ut,Wt=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},qt=function(t,e,n){if(Wt(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},Gt=function(t){return Object(v(t))},Jt=Array.isArray||function(t){return"Array"==l(t)},Kt=!!Object.getOwnPropertySymbols&&!o((function(){return!String(Symbol())})),Ht=Kt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Vt=z("wks"),Yt=r.Symbol,Qt=Ht?Yt:Yt&&Yt.withoutSetter||q,Xt=function(t){return b(Vt,t)||(Kt&&b(Yt,t)?Vt[t]=Yt[t]:Vt[t]=Qt("Symbol."+t)),Vt[t]},Zt=Xt("species"),$t=function(t,e){var n;return Jt(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!Jt(n.prototype)?y(n)&&null===(n=n[Zt])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)},te=[].push,ee=function(t){var e=1==t,n=2==t,r=3==t,o=4==t,i=6==t,c=5==t||i;return function(u,a,f,s){for(var l,p,v=Gt(u),h=d(v),y=qt(a,f,3),m=ft(h.length),g=0,b=s||$t,j=e?b(u,m):n?b(u,0):void 0;m>g;g++)if((c||g in h)&&(p=y(l=h[g],g,v),t))if(e)j[g]=p;else if(p)switch(t){case 3:return!0;case 5:return l;case 6:return g;case 2:te.call(j,l)}else if(o)return!1;return i?-1:r||o?o:j}},ne={forEach:ee(0),map:ee(1),filter:ee(2),some:ee(3),every:ee(4),find:ee(5),findIndex:ee(6)},re=ot("navigator","userAgent")||"",oe=r.process,ie=oe&&oe.versions,ce=ie&&ie.v8;ce?Ut=(zt=ce.split("."))[0]+zt[1]:re&&(!(zt=re.match(/Edge\/(\d+)/))||zt[1]>=74)&&(zt=re.match(/Chrome\/(\d+)/))&&(Ut=zt[1]);var ue=Ut&&+Ut,ae=Xt("species"),fe=ne.map,se=function(t){return ue>=51||!o((function(){var e=[];return(e.constructor={})[ae]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}("map"),le=Nt("map");kt({target:"Array",proto:!0,forced:!se||!le},{map:function(t){return fe(this,t,arguments.length>1?arguments[1]:void 0)}});var pe=Object.keys||function(t){return ht(t,yt)};kt({target:"Object",stat:!0,forced:o((function(){pe(1)}))},{keys:function(t){return pe(Gt(t))}});var de={};de[Xt("toStringTag")]="z";var ve="[object z]"===String(de),he=Xt("toStringTag"),ye="Arguments"==l(function(){return arguments}()),me=ve?l:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),he))?n:ye?l(e):"Object"==(r=l(e))&&"function"==typeof e.callee?"Arguments":r},ge=ve?{}.toString:function(){return"[object "+me(this)+"]"};ve||et(Object.prototype,"toString",ge,{unsafe:!0});var be=r.Promise,je=A.f,we=Xt("toStringTag"),Se=Xt("species"),Oe={},Ee=Xt("iterator"),xe=Array.prototype,Te=Xt("iterator"),Pe=function(t,e,n,r){try{return r?e(T(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&T(o.call(t)),e}},Ae=e((function(t){var e=function(t,e){this.stopped=t,this.result=e};(t.exports=function(t,n,r,o,i){var c,u,a,f,s,l,p,d,v=qt(n,r,o?2:1);if(i)c=t;else{if("function"!=typeof(u=function(t){if(null!=t)return t[Te]||t["@@iterator"]||Oe[me(t)]}(t)))throw TypeError("Target is not iterable");if(void 0!==(d=u)&&(Oe.Array===d||xe[Ee]===d)){for(a=0,f=ft(t.length);f>a;a++)if((s=o?v(T(p=t[a])[0],p[1]):v(t[a]))&&s instanceof e)return s;return new e(!1)}c=u.call(t)}for(l=c.next;!(p=l.call(c)).done;)if("object"==typeof(s=Pe(c,v,p.value,o))&&s&&s instanceof e)return s;return new e(!1)}).stop=function(t){return new e(!0,t)}})),Me=Xt("iterator"),ke=!1;try{var Ce=0,Le={next:function(){return{done:!!Ce++}},return:function(){ke=!0}};Le[Me]=function(){return this},Array.from(Le,(function(){throw 2}))}catch(t){}var Ie,Ne,_e,Be=Xt("species"),Fe=ot("document","documentElement"),De=/(iphone|ipod|ipad).*applewebkit/i.test(re),Re=r.location,ze=r.setImmediate,Ue=r.clearImmediate,We=r.process,qe=r.MessageChannel,Ge=r.Dispatch,Je=0,Ke={},He=function(t){if(Ke.hasOwnProperty(t)){var e=Ke[t];delete Ke[t],e()}},Ve=function(t){return function(){He(t)}},Ye=function(t){He(t.data)},Qe=function(t){r.postMessage(t+"",Re.protocol+"//"+Re.host)};ze&&Ue||(ze=function(t){for(var e=[],n=1;arguments.length>n;)e.push(arguments[n++]);return Ke[++Je]=function(){("function"==typeof t?t:Function(t)).apply(void 0,e)},Ie(Je),Je},Ue=function(t){delete Ke[t]},"process"==l(We)?Ie=function(t){We.nextTick(Ve(t))}:Ge&&Ge.now?Ie=function(t){Ge.now(Ve(t))}:qe&&!De?(_e=(Ne=new qe).port2,Ne.port1.onmessage=Ye,Ie=qt(_e.postMessage,_e,1)):!r.addEventListener||"function"!=typeof postMessage||r.importScripts||o(Qe)||"file:"===Re.protocol?Ie="onreadystatechange"in S("script")?function(t){Fe.appendChild(S("script")).onreadystatechange=function(){Fe.removeChild(this),He(t)}}:function(t){setTimeout(Ve(t),0)}:(Ie=Qe,r.addEventListener("message",Ye,!1)));var Xe,Ze,$e,tn,en,nn,rn,on,cn={set:ze,clear:Ue},un=x.f,an=cn.set,fn=r.MutationObserver||r.WebKitMutationObserver,sn=r.process,ln=r.Promise,pn="process"==l(sn),dn=un(r,"queueMicrotask"),vn=dn&&dn.value;vn||(Xe=function(){var t,e;for(pn&&(t=sn.domain)&&t.exit();Ze;){e=Ze.fn,Ze=Ze.next;try{e()}catch(t){throw Ze?tn():$e=void 0,t}}$e=void 0,t&&t.enter()},pn?tn=function(){sn.nextTick(Xe)}:fn&&!De?(en=!0,nn=document.createTextNode(""),new fn(Xe).observe(nn,{characterData:!0}),tn=function(){nn.data=en=!en}):ln&&ln.resolve?(rn=ln.resolve(void 0),on=rn.then,tn=function(){on.call(rn,Xe)}):tn=function(){an.call(r,Xe)});var hn,yn,mn,gn,bn,jn,wn,Sn=vn||function(t){var e={fn:t,next:void 0};$e&&($e.next=e),Ze||(Ze=e,tn()),$e=e},On=function(t){var e,n;this.promise=new t((function(t,r){if(void 0!==e||void 0!==n)throw TypeError("Bad Promise constructor");e=t,n=r})),this.resolve=Wt(e),this.reject=Wt(n)},En={f:function(t){return new On(t)}},xn=function(t,e){if(T(t),y(e)&&e.constructor===t)return e;var n=En.f(t);return(0,n.resolve)(e),n.promise},Tn=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}},Pn=cn.set,An=Xt("species"),Mn="Promise",kn=tt.get,Cn=tt.set,Ln=tt.getterFor(Mn),In=be,Nn=r.TypeError,_n=r.document,Bn=r.process,Fn=ot("fetch"),Dn=En.f,Rn=Dn,zn="process"==l(Bn),Un=!!(_n&&_n.createEvent&&r.dispatchEvent),Wn=At(Mn,(function(){if(!(F(In)!==String(In))){if(66===ue)return!0;if(!zn&&"function"!=typeof PromiseRejectionEvent)return!0}if(ue>=51&&/native code/.test(In))return!1;var t=In.resolve(1),e=function(t){t((function(){}),(function(){}))};return(t.constructor={})[An]=e,!(t.then((function(){}))instanceof e)})),qn=Wn||!function(t,e){if(!e&&!ke)return!1;var n=!1;try{var r={};r[Me]=function(){return{next:function(){return{done:n=!0}}}},t(r)}catch(t){}return n}((function(t){In.all(t).catch((function(){}))})),Gn=function(t){var e;return!(!y(t)||"function"!=typeof(e=t.then))&&e},Jn=function(t,e,n){if(!e.notified){e.notified=!0;var r=e.reactions;Sn((function(){for(var o=e.value,i=1==e.state,c=0;r.length>c;){var u,a,f,s=r[c++],l=i?s.ok:s.fail,p=s.resolve,d=s.reject,v=s.domain;try{l?(i||(2===e.rejection&&Yn(t,e),e.rejection=1),!0===l?u=o:(v&&v.enter(),u=l(o),v&&(v.exit(),f=!0)),u===s.promise?d(Nn("Promise-chain cycle")):(a=Gn(u))?a.call(u,p,d):p(u)):d(o)}catch(t){v&&!f&&v.exit(),d(t)}}e.reactions=[],e.notified=!1,n&&!e.rejection&&Hn(t,e)}))}},Kn=function(t,e,n){var o,i;Un?((o=_n.createEvent("Event")).promise=e,o.reason=n,o.initEvent(t,!1,!0),r.dispatchEvent(o)):o={promise:e,reason:n},(i=r["on"+t])?i(o):"unhandledrejection"===t&&function(t,e){var n=r.console;n&&n.error&&(1===arguments.length?n.error(t):n.error(t,e))}("Unhandled promise rejection",n)},Hn=function(t,e){Pn.call(r,(function(){var n,r=e.value;if(Vn(e)&&(n=Tn((function(){zn?Bn.emit("unhandledRejection",r,t):Kn("unhandledrejection",t,r)})),e.rejection=zn||Vn(e)?2:1,n.error))throw n.value}))},Vn=function(t){return 1!==t.rejection&&!t.parent},Yn=function(t,e){Pn.call(r,(function(){zn?Bn.emit("rejectionHandled",t):Kn("rejectionhandled",t,e.value)}))},Qn=function(t,e,n,r){return function(o){t(e,n,o,r)}},Xn=function(t,e,n,r){e.done||(e.done=!0,r&&(e=r),e.value=n,e.state=2,Jn(t,e,!0))},Zn=function(t,e,n,r){if(!e.done){e.done=!0,r&&(e=r);try{if(t===n)throw Nn("Promise can't be resolved itself");var o=Gn(n);o?Sn((function(){var r={done:!1};try{o.call(n,Qn(Zn,t,r,e),Qn(Xn,t,r,e))}catch(n){Xn(t,r,n,e)}})):(e.value=n,e.state=1,Jn(t,e,!1))}catch(n){Xn(t,{done:!1},n,e)}}};function $n(){this.timeout=1e4}return Wn&&(In=function(t){!function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}(this,In,Mn),Wt(t),hn.call(this);var e=kn(this);try{t(Qn(Zn,this,e),Qn(Xn,this,e))}catch(t){Xn(this,e,t)}},(hn=function(t){Cn(this,{type:Mn,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=function(t,e,n){for(var r in e)et(t,r,e[r],n);return t}(In.prototype,{then:function(t,e){var n,r,o,i=Ln(this),c=Dn((n=In,void 0===(o=T(this).constructor)||null==(r=T(o)[Be])?n:Wt(r)));return c.ok="function"!=typeof t||t,c.fail="function"==typeof e&&e,c.domain=zn?Bn.domain:void 0,i.parent=!0,i.reactions.push(c),0!=i.state&&Jn(this,i,!1),c.promise},catch:function(t){return this.then(void 0,t)}}),yn=function(){var t=new hn,e=kn(t);this.promise=t,this.resolve=Qn(Zn,t,e),this.reject=Qn(Xn,t,e)},En.f=Dn=function(t){return t===In||t===mn?new yn(t):Rn(t)},"function"==typeof be&&(gn=be.prototype.then,et(be.prototype,"then",(function(t,e){var n=this;return new In((function(t,e){gn.call(n,t,e)})).then(t,e)}),{unsafe:!0}),"function"==typeof Fn&&kt({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return xn(In,Fn.apply(r,arguments))}}))),kt({global:!0,wrap:!0,forced:Wn},{Promise:In}),jn=Mn,wn=!1,(bn=In)&&!b(bn=wn?bn:bn.prototype,we)&&je(bn,we,{configurable:!0,value:jn}),function(t){var e=ot(t),n=A.f;i&&e&&!e[Se]&&n(e,Se,{configurable:!0,get:function(){return this}})}(Mn),mn=ot(Mn),kt({target:Mn,stat:!0,forced:Wn},{reject:function(t){var e=Dn(this);return e.reject.call(void 0,t),e.promise}}),kt({target:Mn,stat:!0,forced:Wn},{resolve:function(t){return xn(this,t)}}),kt({target:Mn,stat:!0,forced:qn},{all:function(t){var e=this,n=Dn(e),r=n.resolve,o=n.reject,i=Tn((function(){var n=Wt(e.resolve),i=[],c=0,u=1;Ae(t,(function(t){var a=c++,f=!1;i.push(void 0),u++,n.call(e,t).then((function(t){f||(f=!0,i[a]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),n.promise},race:function(t){var e=this,n=Dn(e),r=n.reject,o=Tn((function(){var o=Wt(e.resolve);Ae(t,(function(t){o.call(e,t).then(n.resolve,r)}))}));return o.error&&r(o.value),n.promise}}),$n.prototype.reCSSExt=/(.css)/g,$n.prototype.supportedLocations=["bodyEnd","bodyStart","headEnd"],$n.prototype.inject=function(t,e){var n=this;if(!e.id)throw new Error("Missing id for an injected script.");var r=n.reCSSExt.test(t),o=r?"link":"script";return new Promise((function(i,c){if(document.getElementById(e.id))return i(e.id);var u=setTimeout((function(){return c(new Error("TIMEOUT"))}),n.timeout),a=document.createElement(o);function f(){return r&&(a.media=e.media||"all"),clearTimeout(u),i(e.id)}a.id=e.id,"link"==o&&(a.rel="stylesheet",a.href=t,a.media="only x"),"script"==o&&(a.type=e.type||"text/javascript",a.async=!e.hasOwnProperty("async")||e.async),e.attrs&&Object.keys(e.attrs).map((function(t){return a.setAttribute(t,e.attrs[t])})),a.addEventListener?a.addEventListener("load",f,!1):a.readyState?a.onreadystatechange=f:a.onload&&(a.onload=f),a.onerror&&(a.onerror=function(t){return clearTimeout(u),c(t)}),"script"==o&&(a.src=t),n.injectToLocation(a,e.location)}))},$n.prototype.injectJSONLD=function(t,e){if(e.id&&document.getElementById(e.id))return null;var n=document.createElement("script");n.type="application/ld+json",e.id&&(n.id=e.id),e.attrs&&Object.keys(e.attrs).map((function(t){return n.setAttribute(t,e.attrs[t])})),n.text="string"==typeof t?t:JSON.stringify(t),this.injectToLocation(n,e.location)},$n.prototype.injectToLocation=function(t,e){var n=e||this.supportedLocations[0];if(-1!==this.supportedLocations.indexOf(n)){var r=document.getElementsByTagName("head")[0],o=document.getElementsByTagName("body")[0];"headEnd"==n?r.insertBefore(t,null):"bodyEnd"==n?o.insertBefore(t,null):"bodyStart"==n&&o.insertBefore(t,o.firstChild)}},$n.prototype.remove=function(t){var e=document.getElementById(t);e&&e.parentNode.removeChild(e)},new $n}));
