# DOM Script Injector
Inject/remove scripts, stylesheets and jsonld documents in html documents.

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
const scripter = require('dom-scripter')
```
or via script tag:
```html
<script src="https://cdn.jsdelivr.net/npm/dom-scripter@2/dist/dom-scripter.iife.js" crossorigin type="text/javascript"></script>
```

but there are lots of other options. See distribution report below.

## Use
### Inject scripts and stylesheets

**Simple example:**
```js
scripter.inject('/path/to/script.js', {id: 'identifier'})
```
Output inside the html document will be:

```html
<script type="text/javascript" src="/path/to/script.js" id="identifier" async></script>
```
`.inject` method returns a promise, which resoles when the script successfully injected into the dom but the content of the script may not be ready to read or use.

**With all available options:**
```js
scripter.inject('/path/to/script.js', {
  id: 'identifier',
  type: 'text/javascript',
  async: false,
  attrs: {
    'data-hey': 'hello'
  },
  location: 'headEnd'
})
```
Output inside the html document will be:
```html
<script type="text/javascript" src="/path/to/script.js" id="identifier" data-hey="hello"></script>
```
**Add as many attributes as you want.** Properties and values placed inside the `attrs` property in options will be added to the `script` tag automatically like in the `inject` method.

**Available locations.** `location` property specifies where the script should be injected.
- `headEnd` (default) is after the last element inside the head block.
- `bodyEnd` is after the last element inside the body block.
- `bodyStart` is before the first element inside body block.

**Stylesheet example:**
```js
scripter.inject('/path/to/site.css', {id: 'identifier'})
```
Will be injected as:
```html
<link id="identifier" rel="stylesheet" href="/path/to/site.css">
```
**With all available options:**
```js
scripter.inject('/path/to/site.css', {
  id: 'identifier',
  media: 'all', // default is all
  attrs: {
    'data-hey': 'hello'
  }
})
```
Will be injected as:

```html
<link id="identifier" rel="stylesheet" href="/path/to/site.css" media="all" data-hey="hello">
```

### Inject JSON-LD Document
JSON-LD documents are used commonly to inject [**Google's Structured Data**][b7dd4d5a] for search engine optimization.

  [b7dd4d5a]: https://developers.google.com/search/docs/guides/intro-structured-data "Google's Structured Data"

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
scripter.injectJSONLD(doc, {id: 'identifier'})
```
Output inside the html document will be:
```html
<script type="application/ld+json" id="identifier">
{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://example.com"}]}
</script>
```
**Add as many attributes as you want.** Properties and values placed inside the `attrs` property in options will be added to the `script` tag automatically like in the `inject` method.

### Remove Element
Removes injected element from DOM.
```js
scripter.remove('identifier')
```

### Timeout
There is a property called `timeout` inside scripter which sets a maximum time to wait during the injection of script. You can change this time by:
```js
scripter.timeout = 10000 // default is 10 seconds.
```

---

## Distributions Report
This is an auto-generated report that shows the type, name and size of the bundles available to use individually.

[comment]: # (DISTRIBUTIONS_REPORT_START)
```js
[
  "dom-scripter.amd.js (2.08 KB)",
  "dom-scripter.amd.polyfilled.js (18.82 KB)",
  "dom-scripter.cjs.js (2.07 KB)",
  "dom-scripter.cjs.polyfilled.js (18.82 KB)",
  "dom-scripter.es.js (2.06 KB)",
  "dom-scripter.es.polyfilled.js (18.80 KB)",
  "dom-scripter.iife.js (2.08 KB)",
  "dom-scripter.iife.polyfilled.js (18.82 KB)",
  "dom-scripter.umd.js (2.24 KB)",
  "dom-scripter.umd.polyfilled.js (18.98 KB)"
]
```
[comment]: # (DISTRIBUTIONS_REPORT_END)

## Babel Polyfills Report
This is an auto-generated report that shows the pollyfils added by core-js to the **pollyfilled** distributions based on the targets configuration described below.

[comment]: # (BABEL_POLYFILLS_REPORT_START)
```js
// polyfills:
[
  "es.symbol",
  "es.symbol.description",
  "es.symbol.iterator",
  "es.array.iterator",
  "es.object.get-prototype-of",
  "es.object.set-prototype-of",
  "es.object.to-string",
  "es.reflect.construct",
  "es.regexp.to-string",
  "es.string.iterator",
  "web.dom-collections.iterator",
  "es.array.filter",
  "es.array.index-of",
  "es.array.map",
  "es.object.keys",
  "es.promise"
]
// based on the targets:
{
  "android": "4.4.3",
  "chrome": "49",
  "edge": "18",
  "firefox": "52",
  "ie": "10",
  "ios": "9.3",
  "opera": "67",
  "safari": "11.1",
  "samsung": "4"
}
```
[comment]: # (BABEL_POLYFILLS_REPORT_END)

Thanks for watching 🐬

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/F1F1RFO7)
