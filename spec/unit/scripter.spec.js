const DOMScripterLib = require('../../src/index.js')

describe('DOMScripter.', function() {
  const url = 'https://cdn.jsdelivr.net/npm/basekits@1/dist/basekits.iife.js'
  const urlcss ='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css'
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

  it('injects scripts.', async function() {
    const domscripter = DOMScripterLib.create()
    expect(typeof domscripter.injectjs).toBe('function')

    const result = await domscripter.injectjs(url)
    expect(result).toBe('js-iife-basekits-0')
    expect(() => domscripter.injectjs(undefined)).toThrow()

    const result2 = await domscripter.injectjs(url, {id: 'someid', attrs: {
      'data-somekey': 'somevalue'
    }})
    expect(result2).toBe('someid')

    try {
      const result3 = await domscripter.injectjs(url, {id: 'otherid', global: 'InvalidGlobal'})
      expect(1).toBe(0)
    } catch (e) {
      expect(1).toBe(1)
    }

    try {
      const result4 = await domscripter.injectjs(url, {id: 'otherid2', global: 'Basekits'})
      expect(1).toBe(1)
    } catch (e) {
      expect(1).toBe(0)
    }
  })

  it('injects stylesheets.', async function() {
    const domscripter = DOMScripterLib.create()

    const result = await domscripter.injectcss(urlcss, {id: 'bootstrap'})
    expect(result).toBe('bootstrap')
    expect(document.getElementById('bootstrap').id).toBe('bootstrap')
  })

  it('can inject to a certain locations inside the document.', async function() {
    const domscripter = DOMScripterLib.create()

    const result = await domscripter.injectcss(urlcss, {id: 'bootstrap-head-end', location: 'headEnd'})
    const elemid = document.getElementsByTagName('head')[0].querySelector('#bootstrap-head-end').id
    expect(elemid).toBe('bootstrap-head-end')

    const result2 = await domscripter.injectcss(urlcss, {id: 'bootstrap-body-start', location: 'bodyStart'})
    const elemid2 = document.getElementsByTagName('body')[0].querySelector('#bootstrap-body-start').id
    expect(elemid2).toBe('bootstrap-body-start')

    const result3 = await domscripter.injectcss(urlcss, {id: 'bootstrap-body-end', location: 'bodyEnd'})
    const elemid3 = document.getElementsByTagName('body')[0].querySelector('#bootstrap-body-end').id
    expect(elemid3).toBe('bootstrap-body-end')
  })

  it('injects jsonld documents.', function() {
    const domscripter = DOMScripterLib.create()

    const jsonldid = domscripter.injectjsonld(jsonld)
    const script = document.getElementById(jsonldid)
    expect(script).not.toBeNull()
    expect(script.getAttribute('type')).toBe('application/ld+json')
  })
})
