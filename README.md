
# Framer web view module

A simple web view for your prototyping pleasure.

## Usage
```shell
$ git clone https://github.com/peteschaffner/framercli.git myProject
$ cd myProject
$ npm install --save peteschaffner/framer-webview
```

app.js:
```javascript
WebView = require("framer-webview")

webview = new WebView({
  url: 'https:google.com/design'
  width: Screen.width,
  height: Screen.height
})
```
