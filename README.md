# DOM Script Injector
Inject/remove scripts, stylesheets in html documents.

![NPM](https://img.shields.io/npm/l/dom-scripter)
[![npm version](https://badge.fury.io/js/dom-scripter.svg)](https://badge.fury.io/js/dom-scripter)
![npm bundle size](https://img.shields.io/bundlephobia/min/dom-scripter)
![npm](https://img.shields.io/npm/dy/dom-scripter)

## Install
```sh
npm install dom-scripter
```

## Import
There are different types of distributions depending on your use case. Essentially, the package can be imported via require:

```js
const DOMScripterLib = require('dom-scripter')
```
or via script tag:
```html
<script src="https://cdn.jsdelivr.net/npm/dom-scripter@3/dist/dom-scripter.iife.js" crossorigin type="text/javascript"></script>
```
but there are lots of other options. See distribution report below.

## Usage
Simply:
```js
const domscripter = DOMScripterLib.create()

domscripter.injectjs(url).then(function(elemid) {
  // <script type="text/javascript" src="url" id="elemid" async></script>
  // element id is auto generated
})
```
With attributes:
```js
domscripter.injectjs(url, {
  id: 'someid',
  attrs: {
    'data-name': 'value'
  }
}).then(function(elemid) {
  // <script type="text/javascript" src="url" id="elemid" data-name="value" async></script>
  // element id is "someid"
})
```
Disable async loading:
```js
domscripter.injectjs(url, {async: false}).then(function(elemid) {
  // <script type="text/javascript" src="url" id="elemid"></script>
})
```
Inject to different locations:
```js
domscripter.injectjs(url, {location: 'headEnd'}).then(function(elemid) {
  /*
  * <head>
      <title></title>
      <script type="text/javascript" src="url" id="elemid" async></script>
    </head>
  */
})

domscripter.injectjs(url, {location: 'bodyStart'}).then(function(elemid) {
  /*
  * <body>
      <script type="text/javascript" src="url" id="elemid" async></script>
      <p></p>
    </body>
  */
})

domscripter.injectjs(url, {location: 'bodyEnd'}).then(function(elemid) {
  /*
  * <body>
      <p></p>
      <script type="text/javascript" src="url" id="elemid" async></script>
    </body>
  */
})
```
Inject stylesheets in the same way:
```js
domscripter.injectcss(url).then(function(elemid) {
  // <link id="elemid" rel="stylesheet" href="url">
  // element id is auto generated
})
```
All of the options above except async is available also for stylesheets.

Inject **JSONLD** documents in the same way:
```js
const doc = {
  "@type":"BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://example.com"
    }
  ]
}

domscripter.injectjsonld(doc).then(function(elemid) {
  /*
  * <script type="application/ld+json" id="identifier">
  {"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://example.com"}]}
  </script>
  */
})
```
All of the options above except async is available also for JSONLD documents.

To remove an element:
```js
domscripter.remove('identifier')
```
**Bonus feature:** Specifying global in javascript documents to indicate library that it should wait until the global appear in `window`.
```js
domscripter.injectjs(url, {id: 'someid', global: 'SomeGlobal'}).then(function('someid') {
  // window.SomeGlobal is ready!
})
```

---

## Distributions Report
This is an auto-generated report that shows the type, name and size of the bundles available to use individually.

[comment]: # (DISTRIBUTIONS_REPORT_START)
```js
[
  "dom-scripter.amd.js (3.27 KB)",
  "dom-scripter.amd.polyfilled.js (26.81 KB)",
  "dom-scripter.cjs.js (3.27 KB)",
  "dom-scripter.cjs.polyfilled.js (26.83 KB)",
  "dom-scripter.es.js (3.25 KB)",
  "dom-scripter.es.polyfilled.js (26.82 KB)",
  "dom-scripter.iife.js (3.28 KB)",
  "dom-scripter.iife.polyfilled.js (26.82 KB)",
  "dom-scripter.umd.js (3.48 KB)",
  "dom-scripter.umd.polyfilled.js (27.01 KB)"
]
```
[comment]: # (DISTRIBUTIONS_REPORT_END)

## Babel Polyfills Report
This is an auto-generated report that shows the pollyfils added by core-js to the **pollyfilled** distributions based on the targets configuration described below.

[comment]: # (BABEL_POLYFILLS_REPORT_START)
```js
// polyfills:
[
  "es.object.get-prototype-of",
  "es.object.set-prototype-of",
  "es.array.join",
  "es.array.map",
  "es.array.reverse",
  "es.object.keys",
  "es.object.to-string",
  "es.promise",
  "es.regexp.exec",
  "es.regexp.to-string",
  "es.string.replace",
  "es.string.split"
]
// based on the targets:
{
  "chrome": "49",
  "edge": "18",
  "firefox": "78",
  "ie": "10",
  "ios": "9.3",
  "opera": "71",
  "safari": "5.1",
  "samsung": "4"
}
```
[comment]: # (BABEL_POLYFILLS_REPORT_END)

---

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)
