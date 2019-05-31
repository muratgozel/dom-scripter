# DOM Script Injector

Easily inject script tags and jsonld documents into your html document with this javascript module.

## Install

```sh
npm install dom-scripter
```

## Import

This package exports multiple builds. Developer has the responsibility to choose the one that best fits to her/his needs.

1. **Minified (default)**

This is basically the source code itself but minified. There are no compilation and polyfills inside. Use it if you already have a compiler (like babel) and polyfills in your project. (which is mostly is the case.)

```js
// just 1733 bytes
const Scripter = require('dom-scripter')
```

2. **Polyfilled and minified**

The source code compiled with babel (with the configuration that can be found inside `babel.config.js` file) and minified. This build contains also polyfills which increases the size of the package dramatically. Polyfills added by the configuration that can be found inside the `.browserlistrc` file.

```js
const Scripter = require('dom-scripter/dist/polyfilled')
```

3. **Bundle for browsers**

The source code bundled with `browserify` to generate a `UMD` bundle. This bundle can be imported by html script tag. No compilation and polyfills. The variable attached to the browser's `window` object is `Scripter`.

```html
<script src="https://unpkg.com/dom-scripter@0/dist/browser.js" crossorigin type="text/javascript"></script>
```

4. **Polyfilled bundle for browsers**

The source code compiled with babel and bundled with `browserify` to generate a `UMD` bundle. This bundle can be imported by html script tag. The variable attached to the browser's `window` object is `Scripter`.

```html
<script src="https://unpkg.com/dom-scripter@0/dist/browser.polyfilled.js" crossorigin type="text/javascript"></script>
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

`.inject` method returns a promise, which resoles when the script successfully injected into dom but be careful that the content of the script may not be ready to read or use.

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

## Babel Polyfills Report

This module uses the following polyfills in its polyfilled builds.

1. `es.array.index-of`
2. `es.array.map`
3. `es.object.keys`
4. `es.object.to-string`,
5. `es.promise`
