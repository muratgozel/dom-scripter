const scripter = require('../../dist/dom-scripter.cjs.js')

describe('Scripter.', function() {
  const url = 'https://cdn.jsdelivr.net/npm/basekits@1/dist/basekits.iife.js'
  const jsonld = {
    "@type":"BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://frondjs.org"
      }
    ]
  }

  it('has a regex to detect if the file is a CSS file.', function() {
    expect(scripter.reCSSExt.test('https://frondjs.org/sample.css')).toBe(true)
    expect(scripter.reCSSExt.test('https://frondjs.org/sample.js')).toBe(false)
    expect(scripter.reCSSExt.test('/sample.css')).toBe(true)
    expect(scripter.reCSSExt.test('https://frondjs.org/sample.css?v=2.35')).toBe(true)
    expect(scripter.reCSSExt.test('https://frondjs.org/sample.js?v=2.35')).toBe(false)
  })

  it('injects script tag to the end of the body of the document by default.', function() {
    expect(() => scripter.inject(url)).toThrow()

    scripter.inject(url, {id: 'basekits'})
    const script = document.getElementById('basekits')
    expect(script).not.toBeNull()
    expect(script.getAttribute('type')).toBe('text/javascript')
    expect(script.getAttribute('async')).toBeDefined()
    expect(script.getAttribute('src')).toBe(url)
    setTimeout(function() {
      expect(window.Basekits).toBeDefined()
    }, 300)

    const docBody = document.getElementsByTagName('body')[0]
    expect(script).toEqual(docBody.lastChild)
  })

  it('accepts custom tag attributes from the user.', function() {
    scripter.inject(url, {id: 'basekits0', attrs: {number: 0, 'data-num': 0}})
    const script = document.getElementById('basekits0')
    expect(script.getAttribute('number')).toBe('0')
    expect(script.dataset.num).toBe('0')
  })

  it('removes any tag with an id.', function() {
    scripter.remove('basekits0')
    expect(document.getElementById('basekits0')).toBeNull()
  })

  it('injects script tag to the start of the body of the document.', function() {
    scripter.inject(url, {id: 'basekits2', location: 'bodyStart'})
    const script2 = document.getElementById('basekits2')
    const docBody = document.getElementsByTagName('body')[0]
    expect(script2).toEqual(docBody.firstChild)
  })

  it('injects script tag to the end of the head of the document.', function() {
    scripter.inject(url, {id: 'basekits3', location: 'headEnd'})
    const script3 = document.getElementById('basekits3')
    const docHead = document.getElementsByTagName('head')[0]
    expect(script3).toEqual(docHead.lastChild)
  })

  it('injects JSONLD documents.', function() {
    scripter.injectJSONLD(jsonld, {id: 'samplejsonld'})
    const script = document.getElementById('samplejsonld')
    expect(script).not.toBeNull()
    expect(script.getAttribute('type')).toBe('application/ld+json')
  })
})
