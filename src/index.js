function Scripter() {
  this.beingInjected = []
  this.timeout = 10000
}

Scripter.prototype.reCSSExt = /(.css)/g
Scripter.prototype.supportedLocations = ['bodyEnd', 'bodyStart', 'headEnd']

Scripter.prototype.inject = function inject(url, opts) {
  const self = this

  if (!opts.id) throw new Error('Missing id for an injected script.')

  const isCSS = self.reCSSExt.test(url)
  const tag = isCSS ? 'link' : 'script'

  return new Promise(function(resolve, reject) {
    if (document.getElementById(opts.id)) return resolve(opts.id)
    if (self.beingInjected.indexOf(opts.id) !== -1) return resolve(null)

    self.beingInjected.push(opts.id)

    let timer = setTimeout(function() {
      return reject(new Error('TIMEOUT'))
    }, self.timeout)

    const elem = document.createElement(tag)

    elem.id = opts.id

    if (tag == 'link') {
      elem.rel = 'stylesheet'
      elem.href = url
      elem.media = 'only x'
    }

    if (tag == 'script') {
      elem.type = opts.type || 'text/javascript'
      elem.async = opts.hasOwnProperty('async') ? opts.async : true
    }

    if (opts.attrs) {
      Object.keys(opts.attrs).map(name => elem.setAttribute(name, opts.attrs[name]))
    }

    function onDone() {
      if (isCSS) elem.media = opts.media || 'all'
      clearTimeout(timer)
      self.beingInjected = self.beingInjected.filter(id => id != opts.id)
      return resolve(opts.id)
    }

    function onError(err) {
      clearTimeout(timer)
      self.beingInjected = self.beingInjected.filter(id => id != opts.id)
      return reject(err)
    }

    if (elem.addEventListener) elem.addEventListener('load', onDone, false)
    else if (elem.readyState) elem.onreadystatechange = onDone
    else if (elem.onload) elem.onload = onDone
    if (elem.onerror) elem.onerror = onError

    if (tag == 'script') elem.src = url

    self.injectToLocation(elem, opts.location)
  })
}

Scripter.prototype.injectJSONLD = function injectJSONLD(data, opts) {
  if (opts.id) {
    if (document.getElementById(opts.id)) return null;
  }

  const elem = document.createElement('script')
  elem.type = 'application/ld+json'
  if (opts.id) elem.id = opts.id
  if (opts.attrs) {
    Object.keys(opts.attrs).map(name => elem.setAttribute(name, opts.attrs[name]))
  }
  elem.text = typeof data == 'string' ? data : JSON.stringify(data)

  this.injectToLocation(elem, opts.location)
}

Scripter.prototype.injectToLocation = function injectToLocation(elem, _location) {
  const location = _location || this.supportedLocations[0]
  if (this.supportedLocations.indexOf(location) === -1) return;
  const docHead = document.getElementsByTagName('head')[0]
  const docBody = document.getElementsByTagName('body')[0]
  if (location == 'headEnd') docHead.insertBefore(elem, null)
  else if (location == 'bodyEnd') docBody.insertBefore(elem, null)
  else if (location == 'bodyStart') docBody.insertBefore(elem, docBody.firstChild)
  else {}
  return;
}

Scripter.prototype.remove = function remove(id) {
  const s = document.getElementById(id)
  if (s) s.parentNode.removeChild(s)
}

module.exports = new Scripter()
