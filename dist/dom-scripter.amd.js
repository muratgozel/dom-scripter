define((function(){"use strict";function t(){this.beingInjected=[],this.timeout=1e4}return t.prototype.reCSSExt=/(.css)/g,t.prototype.supportedLocations=["bodyEnd","bodyStart","headEnd"],t.prototype.inject=function(t,e){var n=this;if(!e.id)throw new Error("Missing id for an injected script.");var r=n.reCSSExt.test(t),i=r?"link":"script";return new Promise((function(o,d){if(document.getElementById(e.id))return o(e.id);if(-1!==n.beingInjected.indexOf(e.id))return o(null);n.beingInjected.push(e.id);var a=setTimeout((function(){return d(new Error("TIMEOUT"))}),n.timeout),c=document.createElement(i);function s(){return r&&(c.media=e.media||"all"),clearTimeout(a),n.beingInjected=n.beingInjected.filter((function(t){return t!=e.id})),o(e.id)}c.id=e.id,"link"==i&&(c.rel="stylesheet",c.href=t,c.media="only x"),"script"==i&&(c.type=e.type||"text/javascript",c.async=!e.hasOwnProperty("async")||e.async),e.attrs&&Object.keys(e.attrs).map((function(t){return c.setAttribute(t,e.attrs[t])})),c.addEventListener?c.addEventListener("load",s,!1):c.readyState?c.onreadystatechange=s:c.onload&&(c.onload=s),c.onerror&&(c.onerror=function(t){return clearTimeout(a),n.beingInjected=n.beingInjected.filter((function(t){return t!=e.id})),d(t)}),"script"==i&&(c.src=t),n.injectToLocation(c,e.location)}))},t.prototype.injectJSONLD=function(t,e){if(e.id&&document.getElementById(e.id))return null;var n=document.createElement("script");n.type="application/ld+json",e.id&&(n.id=e.id),e.attrs&&Object.keys(e.attrs).map((function(t){return n.setAttribute(t,e.attrs[t])})),n.text="string"==typeof t?t:JSON.stringify(t),this.injectToLocation(n,e.location)},t.prototype.injectToLocation=function(t,e){var n=e||self.supportedLocations[0];if(-1!==self.supportedLocations.indexOf(n)){var r=document.getElementsByTagName("head")[0],i=document.getElementsByTagName("body")[0];"headEnd"==n?r.lastChild.parentNode.insertBefore(t,null):"bodyEnd"==n?i.lastChild.parentNode.insertBefore(t,null):"bodyStart"==n&&i.firstChild.parentNode.insertBefore(t,null)}},t.prototype.remove=function(t){var e=document.getElementById(t);e&&e.parentNode.removeChild(e)},new t}));