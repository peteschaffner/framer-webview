
/**
 * Web view
 *
 * @class
 * @param {Object} options
 * @param {string} options.url=http://google.com/design
 * @param {number} options.contentHeight=2294 - Height of webpage
 *
 * NOTE: To get the appropriate `contentHeight` for the given `url`
 * open said `url` in Chrome, emulate your target device, and run
 * `document.body.offsetHeight` in the console. The output is your
 * `contentHeight` value.
 */

module.exports = class WebView extends ScrollComponent {
  constructor(opts={}) {
    opts.url = opts.url || "http://google.com/design"
    opts.backgroundColor = opts.backgroundColor || "#333"
    opts.contentHeight = opts.contentHeight || 2294

    super(_.extend(opts, {
      scrollHorizontal: false
    }))


    this.webview = new Layer({
      superLayer: this.content,
      width: this.width,
      height: opts.contentHeight,
      backgroundColor: opts.backgroundColor
    })

    this.webview.html = `<iframe
                      src="${opts.url}"
                      width="${this.width}"
                      height="${opts.contentHeight}"
                    </iframe>`

    this.url = opts.url
    this.contentHeight = opts.contentHeight
  }

  get url() { return this._url }
  set url(value) {
    this._url = value
    this.querySelector('iframe').src = value
  }

  get contentHeight() { return this._contentHeight }
  set contentHeight(value) {
    this._contentHeight = value
    this.querySelector('iframe').height = value
    this.webview.height = value
    this.updateContent()
  }
}
