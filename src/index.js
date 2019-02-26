// eslint-disable-next-line no-unused-vars
const services = require('./services');

module.exports = function (app) {
  app.configure(services);
  app.configure(versions({
    idType: objectId,
    adapter
  }))
};
