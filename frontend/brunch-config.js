var importer = require("node-sass-import");

module.exports = {
  paths: {
    public: '../backend/public'
  },
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    templates: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    }
  },
  plugins: {
    babel: {
      presets: ['es2015']
    },
    vue: {
      sass: {
        importer: importer
      }
    }
  }
}
