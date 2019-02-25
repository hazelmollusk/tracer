module.exports = function(app) {
  plugin = require('./src');
  app.configure(plugin)
}
