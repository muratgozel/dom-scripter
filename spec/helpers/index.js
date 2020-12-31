const {JSDOM} = require('jsdom')

const doc = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>DOM Scripter Test Page</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
</head>
<body>
  <p>This is DOM Scripter.</p>
  <noscript id="no-js-msg">No javascript detected. Please turn on Javascript in your browser or try a browser that is capable of running Javascript code.</noscript>
</body>
</html>
`
global.window = new JSDOM(doc, {
  url: 'https://frondjs.org',
  runScripts: 'dangerously',
  resources: 'usable'
}).window
global.document = global.window.document
global.navigator = global.window.navigator
//window.fetch = () => {json: () => ''}
