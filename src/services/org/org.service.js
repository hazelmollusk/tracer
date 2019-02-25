// Initializes the `org` service on path `/org`
const createService = require('feathers-mongoose');
const tracer = require('../../models/tracer.models');
const hooks = require('./org.hooks');

module.exports = function (app) {
  const Model = tracer(app).org;
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/org', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('org');

  service.hooks(hooks);
};
