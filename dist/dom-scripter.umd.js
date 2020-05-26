!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Scripter=t()}(this,(function(){"use strict";function e(){this.beingInjected=[],this.timeout=1e4}return e.prototype.reCSSExt=/(.css)/g,e.prototype.supportedLocations=["bodyEnd","bodyStart","headEnd"],e.prototype.inject=function(e,t){var n=this;if(!t.id)throw new Error("Missing id for an injected script.");var i=n.reCSSExt.test(e),r=i?"link":"script";return new Promise((function(o,d){if(document.getElementById(t.id))return o(t.id);if(-1!==n.beingInjected.indexOf(t.id))return o(null);n.beingInjected.push(t.id);var c=setTimeout((function(){return d(new Error("TIMEOUT"))}),n.timeout),a=document.createElement(r);function s(){return i&&(a.media=t.media||"all"),clearTimeout(c),n.beingInjected=n.beingInjected.filter((function(e){return e!=t.id})),o(t.id)}a.id=t.id,"link"==r&&(a.rel="stylesheet",a.href=e,a.media="only x"),"script"==r&&(a.type=t.type||"text/javascript",a.async=!t.hasOwnProperty("async")||t.async),t.attrs&&Object.keys(t.attrs).map((function(e){return a.setAttribute(e,t.attrs[e])})),a.addEventListener?a.addEventListener("load",s,!1):a.readyState?a.onreadystatechange=s:a.onload&&(a.onload=s),a.onerror&&(a.onerror=function(e){return clearTimeout(c),n.beingInjected=n.beingInjected.filter((function(e){return e!=t.id})),d(e)}),"script"==r&&(a.src=e),n.injectToLocation(a,t.location)}))},e.prototype.injectJSONLD=function(e,t){if(t.id&&document.getElementById(t.id))return null;var n=document.createElement("script");n.type="application/ld+json",t.id&&(n.id=t.id),t.attrs&&Object.keys(t.attrs).map((function(e){return n.setAttribute(e,t.attrs[e])})),n.text="string"==typeof e?e:JSON.stringify(e),this.injectToLocation(n,t.location)},e.prototype.injectToLocation=function(e,t){var n=t||this.supportedLocations[0];if(-1!==this.supportedLocations.indexOf(n)){var i=document.getElementsByTagName("head")[0],r=document.getElementsByTagName("body")[0];"headEnd"==n?i.insertBefore(e,null):"bodyEnd"==n?r.insertBefore(e,null):"bodyStart"==n&&r.insertBefore(e,r.firstChild)}},e.prototype.remove=function(e){var t=document.getElementById(e);t&&t.parentNode.removeChild(t)},new e}));
