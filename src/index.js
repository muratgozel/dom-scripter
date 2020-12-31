function DOMScripterLib() {
  let idSuffix = 0
  const reCSSExt = /(.css)/
  const supportedLocations = ['bodyEnd', 'bodyStart', 'headEnd']

  function DOMScripter(settings=null) {
    const _settings = {
      timeout: 3000
    }
    if (Object.prototype.toString.call(settings) === '[object Object]') {
      Object.keys(_settings).map(function(prop) {
        if (settings.hasOwnProperty(prop)) _settings[prop] = settings[prop]
      })
    }

    function injectjs(url, opts=null) {
      const _opts = {
        id: null,
        type: 'text/javascript',
        async: true,
        attrs: {},
        location: supportedLocations[0],
        global: null
      }
      if (Object.prototype.toString.call(opts) === '[object Object]') {
        Object.keys(_opts).map(function(prop) {
          if (opts.hasOwnProperty(prop)) _opts[prop] = opts[prop]
        })
      }
      if (!_opts.id) {
        _opts.id = genIDFromString( getFilenameFromURL(url) )
        idSuffix += 1
      }

      return new Promise(function(resolve, reject) {
        if (document.getElementById(_opts.id)) {
          return resolve(_opts.id)
        }

        let timer = setTimeout(function() {
          return reject(new Error('Inject timeout.'))
        }, _settings.timeout)

        const elem = document.createElement('script')
        elem.id = _opts.id
        elem.type = _opts.type
        elem.async = _opts.async

        if (_opts.attrs) {
          Object.keys(_opts.attrs).map(function(name) {
            elem.setAttribute(name, _opts.attrs[name])
          })
        }

        function onDone() {
          clearTimeout(timer)

          if (_opts.global) {
            const maxCalls = 20
            let calls = 0
            let interval = setInterval(function() {
              calls += 1

              if (window[_opts.global]) {
                clearInterval(interval)
                return resolve(_opts.id)
              }

              if (calls >= maxCalls) {
                return reject(new Error('Max call size exceeded. Given up looking for global property.'))
              }
            }, 100)
          }
          else {
            return resolve(_opts.id)
          }
        }

        function onError(err) {
          clearTimeout(timer)
          return reject(err)
        }

        if (elem.addEventListener) elem.addEventListener('load', onDone, false)
        else if (elem.readyState) elem.onreadystatechange = onDone
        else if (elem.onload) elem.onload = onDone
        if (elem.onerror) elem.onerror = onError

        elem.src = url

        _inject(elem, _opts.location)
      })
    }

    function injectcss(url, opts=null) {
      const _opts = {
        id: null,
        type: 'text/css',
        media: 'all',
        attrs: {},
        location: supportedLocations[0]
      }
      if (Object.prototype.toString.call(opts) === '[object Object]') {
        Object.keys(_opts).map(function(prop) {
          if (opts.hasOwnProperty(prop)) _opts[prop] = opts[prop]
        })
      }
      if (!_opts.id) {
        _opts.id = genIDFromString( getFilenameFromURL(url) )
        idSuffix += 1
      }

      return new Promise(function(resolve, reject) {
        if (document.getElementById(_opts.id)) {
          return resolve(_opts.id)
        }

        let timer = setTimeout(function() {
          return reject(new Error('Inject timeout.'))
        }, _settings.timeout)

        const elem = document.createElement('link')
        elem.id = _opts.id
        elem.rel = 'stylesheet'
        elem.href = url
        elem.media = 'only x'

        if (_opts.attrs) {
          Object.keys(_opts.attrs).map(function(name) {
            elem.setAttribute(name, _opts.attrs[name])
          })
        }

        function onDone() {
          elem.media = _opts.media
          clearTimeout(timer)
          return resolve(_opts.id)
        }

        function onError(err) {
          clearTimeout(timer)
          return reject(err)
        }

        if (elem.addEventListener) elem.addEventListener('load', onDone, false)
        else if (elem.readyState) elem.onreadystatechange = onDone
        else if (elem.onload) elem.onload = onDone
        if (elem.onerror) elem.onerror = onError

        _inject(elem, _opts.location)
      })
    }

    function injectjsonld(data, opts) {
      const _opts = {
        id: null,
        type: 'application/ld+json',
        attrs: {},
        location: supportedLocations[0]
      }
      if (Object.prototype.toString.call(opts) === '[object Object]') {
        Object.keys(_opts).map(function(prop) {
          if (opts.hasOwnProperty(prop)) _opts[prop] = opts[prop]
        })
      }
      if (!_opts.id) {
        _opts.id = idSuffix
        idSuffix += 1
      }

      if (document.getElementById(_opts.id)) {
        return _opts.id
      }

      const elem = document.createElement('script')
      elem.id = _opts.id
      elem.type = _opts.type
      elem.text = typeof data == 'string' ? data : JSON.stringify(data)

      if (_opts.attrs) {
        Object.keys(_opts.attrs).map(function(name) {
          elem.setAttribute(name, _opts.attrs[name])
        })
      }

      _inject(elem, _opts.location)

      return _opts.id
    }

    function remove(id) {
      const s = document.getElementById(id)
      if (s) s.parentNode.removeChild(s)
    }

    function _inject(elem, location) {
      const docHead = document.getElementsByTagName('head')[0]
      const docBody = document.getElementsByTagName('body')[0]
      if (location == 'headEnd') docHead.insertBefore(elem, null)
      else if (location == 'bodyEnd') docBody.insertBefore(elem, null)
      else if (location == 'bodyStart') docBody.insertBefore(elem, docBody.firstChild)
      else {}
    }

    return {
      injectjs: injectjs,
      injectcss: injectcss,
      injectjsonld: injectjsonld,
      remove: remove
    }
  }

  function getFilenameFromURL(url) {
    return url.split('/').reverse()[0].split('?')[0]
  }

  function genIDFromString(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '-').split('-').reverse().join('-') + '-' + idSuffix
  }

  return {
    create: DOMScripter
  }
}

module.exports = DOMScripterLib()
