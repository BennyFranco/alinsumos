var path = require('path')
var webpack = require('webpack')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
            '/',
            '/productos/granos/',
            '/productos/granos/maiz-forrajero',
            '/productos/granos/maiz-tortillero'
          ],

        renderer: new Renderer({
          inject: {
            foo: 'bar'
          },
          headless: false,
          renderAfterDocumentEvent: 'render-event'
        })
      })
    ]
  }
}
