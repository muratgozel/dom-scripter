# DOM Script Injector

Easily inject script tags and jsonld documents into your html document with this javascript module.

## Install

```sh
npm install dom-scripter
```

## Import

The default file imported by the module is polyfilled, bundled `dist/index.js` file:

```js
const scripter = require('dom-scripter')
```

If you already have a compiler like babel or already polyfilling your codebase, using `./source/index.js` recommended.

```js
const scripter = require('dom-scripter/source')
```

## Use

The module exposes 3 API methods for user.

### Inject script

```js
scripter.inject('/path/to/script.js', {id: 'identifier'})
```

Output inside the html document will be:

```html
<script type="text/javascript" src="/path/to/script.js" id="identifier" async></script>
```

With all available options:

```js
scripter.inject('/path/to/script.js', {
  id: 'identifier',
  type: 'text/javascript',
  async: false,
  attrs: {
    'data-hey': 'hello'
  }
})
```

Output inside the html document will be:

```html
<script type="text/javascript" src="/path/to/script.js" id="identifier" data-hey="hello"></script>
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
<script type="application/ld+json" id="identifier">{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://example.com"}]}</script>
```

Properties and values placed inside the `attrs` property in options will be added to the `script` tag automatically like in the `inject` method.

### Remove Element

Removes injected element from DOM.

```js
scripter.remove('identifier')
```
