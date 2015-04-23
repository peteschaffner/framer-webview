
module.exports = class Webview extends ScrollComponent
  constructor: (options={}) ->
    options.superLayer ?= Framer.Device.screen
    options.height ?= options.superLayer.height
    options.url ?= "http://google.com/design"
    options.backgroundColor ?= "#333"

    super options

    # Make sure the scroll component is the same size as the superLayer
    @width = options.superLayer.width
    @height = options.superLayer.height

    @scrollHorizontal = false

    @page = new Layer
      superLayer: @content
      width: @width / 2
      # If no explicit height is set, use the superLayer's height
      # otherwise, multiply the value by 2 to get the correct height
      # in our scaled iframe
      height: options.height * if options.height is @height then 1 else 2
      scale: 2
      originX: 0
      originY: 0
      backgroundColor: options.backgroundColor

    @page.html = """
        <iframe
          src="#{options.url}"
          width="#{@page.width}"
          height="#{@page.height / 2}"
        </iframe>
      """
