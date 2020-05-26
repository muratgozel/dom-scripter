var Scripter=function(){"use strict";function t(){this.beingInjected=[],this.timeout=1e4}return t.prototype.reCSSExt=/(.css)/g,t.prototype.supportedLocations=["bodyEnd","bodyStart","headEnd"],t.prototype.inject=function(t,e){var n=this;if(!e.id)throw new Error("Missing id for an injected script.");var r=n.reCSSExt.test(t),i=r?"link":"script";return new Promise((function(o,d){if(document.getElementById(e.id))return o(e.id);if(-1!==n.beingInjected.indexOf(e.id))return o(null);n.beingInjected.push(e.id);var c=setTimeout((function(){return d(new Error("TIMEOUT"))}),n.timeout),a=document.createElement(i);function s(){return r&&(a.media=e.media||"all"),clearTimeout(c),n.beingInjected=n.beingInjected.filter((function(t){return t!=e.id})),o(e.id)}a.id=e.id,"link"==i&&(a.rel="stylesheet",a.href=t,a.media="only x"),"script"==i&&(a.type=e.type||"text/javascript",a.async=!e.hasOwnProperty("async")||e.async),e.attrs&&Object.keys(e.attrs).map((function(t){return a.setAttribute(t,e.attrs[t])})),a.addEventListener?a.addEventListener("load",s,!1):a.readyState?a.onreadystatechange=s:a.onload&&(a.onload=s),a.onerror&&(a.onerror=function(t){return clearTimeout(c),n.beingInjected=n.beingInjected.filter((function(t){return t!=e.id})),d(t)}),"script"==i&&(a.src=t),n.injectToLocation(a,e.location)}))},t.prototype.injectJSONLD=function(t,e){if(e.id&&document.getElementById(e.id))return null;var n=document.createElement("script");n.type="application/ld+json",e.id&&(n.id=e.id),e.attrs&&Object.keys(e.attrs).map((function(t){return n.setAttribute(t,e.attrs[t])})),n.text="string"==typeof t?t:JSON.stringify(t),this.injectToLocation(n,e.location)},t.prototype.injectToLocation=function(t,e){var n=e||this.supportedLocations[0];if(-1!==this.supportedLocations.indexOf(n)){var r=document.getElementsByTagName("head")[0],i=document.getElementsByTagName("body")[0];"headEnd"==n?r.insertBefore(t,null):"bodyEnd"==n?i.insertBefore(t,null):"bodyStart"==n&&i.insertBefore(t,i.firstChild)}},t.prototype.remove=function(t){var e=document.getElementById(t);e&&e.parentNode.removeChild(e)},new t}();
