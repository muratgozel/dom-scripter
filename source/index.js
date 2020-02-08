function Scripter() {
  this.processingIds = []
  this.timeoutInterval = 7000
}

Scripter.prototype.inject = function inject(url, opts = {}) {
  const self = this

  const lind = url.lastIndexOf('.')
  const stype = url.slice( lind + 1, lind + 4 ) == 'css' ? 'css' : 'js'

  return new Promise(function(resolve, reject) {
    // return existing scripts
    if (typeof opts.id == 'string') {
      if (document.getElementById(opts.id)) {
        return resolve(opts.id)
      }
    }

    if (typeof opts.id == 'string' && self.processingIds.indexOf(opts.id) !== -1) {
      const err = new Error('Script already being injected. (' + opts.id + ')')
      return reject(err)
    }

    // register timeout
    let t = setTimeout(function() {
      const err = new Error('Script injection timeout. (' + url + ')')
      return reject(err)
    }, self.timeoutInterval)

    // create
    const s = document.createElement(stype == 'js' ? 'script' : 'link')

    function onDone() {
      if (stype == 'css') s.media = opts.media || 'all'
      clearTimeout(t)
      return resolve(opts.id)
    }

    function onError(err) {
      clearTimeout(t)
      return reject(err)
    }

    if (stype == 'css') {
      s.rel = 'stylesheet'
      s.href = url
      s.media = 'only x'
    }
    else {
      s.type = opts.type || 'text/javascript'
      s.async = opts.hasOwnProperty('async') ? opts.async : true
    }

    if (typeof opts.id == 'string') s.id = opts.id
    if (opts.attrs) {
      Object.keys(opts.attrs).map(function(name) {
        s.setAttribute(name, opts.attrs[name])
      })
    }

    if (s.addEventListener) {
      s.addEventListener('load', onDone, false)
    }
    else if (s.readyState) {
      s.onreadystatechange = onDone
    }
    else if (s.onload) {
      s.onload = onDone
    }

    if (s.onerror) {
      s.onerror = onErr
    }

    if (stype == 'js') s.src = url

    const validLocations = ['headEnd', 'bodyEnd']
    if (!opts.hasOwnProperty('location')) opts.location = 'headEnd'
    if (validLocations.indexOf(opts.location) === -1) opts.location = 'headEnd'

    if (opts.location == 'headEnd') {
      const head = document.getElementsByTagName('head')[0]
      head.parentNode.insertBefore(s, null)
    }
    else {
      const body = document.getElementsByTagName('body')[0]
      body.parentNode.insertBefore(s, null)
    }
  })
}

Scripter.prototype.injectJSONLD = function injectJSONLD(input, opts = {}) {
  // remove existing scripts
  if (typeof opts.id == 'string') {
    const es = document.getElementById(opts.id)
    if (es) es.parentNode.removeChild(es)
  }

  const s = document.createElement('script')

  s.type = 'application/ld+json'
  if (typeof opts.id == 'string') s.id = opts.id
  if (opts.attrs) {
    Object.keys(opts.attrs).map(function(name) {
      s.setAttribute(name, opts.attrs[name])
    })
  }
  s.text = typeof input == 'string' ? input : JSON.stringify(input)

  let elems = document.getElementsByTagName('script')
  if (!elems || elems.length < 1) elems = document.getElementsByTagName('head')
  const ref = elems[0]
  ref.parentNode.insertBefore(s, ref)
  elems = null
}

Scripter.prototype.remove = function remove(opts = {}) {
  const s = document.getElementById(opts.id || '')
  if (s) s.parentNode.removeChild(s)
}

module.exports = new Scripter()
