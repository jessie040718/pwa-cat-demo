
module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'in-class-10-29',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // in vue.config.js
    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //     // swSrc is required in InjectManifest mode.
    //     swSrc: 'public/service-worker.js',
    //     // ...other Workbox options...
    // },

    // in vue.config.js
    workboxPluginMode: 'GenerateSW',
    // workboxOptions: {
    //     // other workbox options
    // },

  },
}
