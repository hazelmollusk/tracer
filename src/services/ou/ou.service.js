// Initializes the `ou` service on path `/ou`
const createService = require('feathers-mongoose');
const tracer = require('../../models/tracer.models');
const hooks = require('./ou.hooks');

module.exports = function (app) {
  const Model = tracer(app).ou;
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/ou', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('ou');

  service.hooks(hooks);
};
