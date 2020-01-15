# DOM Script Injector

Easily inject scripts, stylesheets and jsonld documents into your html document with this javascript module.

## Install

```sh
npm install dom-scripter
```

## Import

This package exports multiple builds. Developer has the responsibility to choose the one that best fits to her/his needs.

1. **Minified (default)**

This is basically the source code itself but minified. There are no compilation and polyfills inside. Use it if you already have a compiler (like babel) and polyfills in your project. (which is mostly is the case.)

```js
const Scripter = require('dom-scripter')
```

2. **UMD Bundle**

The source code bundled with `browserify` to generate a `UMD` bundle. This bundle can also be imported by html script tag. No compilation and polyfills. The variable attached to the browser's `window` object is `Scripter`.

```js
const Scripter = require('dom-scripter/dist/umd')
```

or

```html
<script src="https://unpkg.com/dom-scripter@1/dist/umd.js" crossorigin type="text/javascript"></script>
```

3. **Polyfilled UMD bundle**

The source code compiled with babel and bundled with `browserify` to generate a `UMD` bundle. This bundle can also be imported by html script tag. The variable attached to the browser's `window` object is `Scripter`.

```html
<script src="https://unpkg.com/dom-scripter@0/dist/umd.polyfilled.js" crossorigin type="text/javascript"></script>
```

## Use

The module exposes 3 API methods for user.

### Inject scripts and stylesheets

**Simple example:**

```js
scripter.inject('/path/to/script.js', {id: 'identifier'})
```

Output inside the html document will be:

```html
<script type="text/javascript" src="/path/to/script.js" id="identifier" async></script>
```

`.inject` method returns a promise, which resoles when the script successfully injected into dom but be careful that the content of the script may not be ready to read or use.

**With all available options:**

```js
scripter.inject('/path/to/script.js', {
  id: 'identifier',
  type: 'text/javascript',
  async: false,
  attrs: {
    'data-hey': 'hello'
  },
  location: 'beforeScript'
})
```

Output inside the html document will be:

```html
<script type="text/javascript" src="/path/to/script.js" id="identifier" data-hey="hello"></script>
```

`location` property specifies where the script should be injected.
- `beforeScript` (default) is before the first `script` tag in the document.
- `afterScript` is after all the elements in document body.

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
6. `es.array.last-index-of`
