var path = require('path')
// var webpack = require('webpack')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

if (process.env.NODE_ENV === 'production') {
  // mutate config for production...
  module.exports = {
    baseUrl: '/',
    configureWebpack: {
      plugins: [
        new PrerenderSPAPlugin({
          staticDir: path.join(__dirname, 'dist'),
          routes: [
            '/',
            '/productos/granos/',
            '/productos/granos/maiz-forrajero',
            '/productos/granos/maiz-tortillero',
            '/productos/granos/trigo',
            '/productos/granos/sorgo',
            '/productos/granos/semilla-algodon',
            '/productos/granos/cartamo',
            '/productos/pastas/soya',
            '/productos/pastas/canola',
            '/productos/pastas/ddgs',
            '/productos/pastas/cartamo',
            '/productos/pastas/nuez',
            '/productos/pastas/arroz',
            '/productos/pastas/salvado-trigo',
            '/productos/harinas/carne-hueso',
            '/productos/harinas/sangre',
            '/productos/harinas/pescado',
            '/productos/harinas/trigo'
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
}
else if (process.env.NODE_ENV === 'release') {
  // mutate config for production...
  module.exports = {
    baseUrl: '/alinsumos'
  }
}
