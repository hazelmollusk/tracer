import feathers from 'feathers';
import hooks from 'feathers-hooks';
import versions from 'feathers-versions';

module.exports = function(app) {
  plugin = require('./src');
  app.configure(plugin)

  app.configure(versions());
}
