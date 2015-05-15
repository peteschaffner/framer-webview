
# Framer web view module

A simple web view for your prototyping pleasure.

<img src="preview.gif" alt="Screenshot" width="398">

## Usage
```shell
$ framer myProject &
$ cd myProject
$ npm install --save peteschaffner/framer-webview
```

index.js:
```javascript
var Webview = require('framer-webview')

var webview = new Webview({
  url: 'https:google.com/design'
  width: Screen.width,
  height: Screen.height
})
```
## API

### Webview#url <string>
Web page you would like to render. Defaults to `'https://google.com/design'`

### Webview#contentHeight <number>
The height of the web view’s content. This, together with the `height`, will
effect the vertical scroll.

**NOTE:** To get the appropriate `contentHeight` for the given `url` open said
`url` in Chrome, emulate your target device, and run
`document.body.offsetHeight` in the console. The output should be your
`contentHeight` value.
