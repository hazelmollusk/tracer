// Initializes the `artifact` service on path `/artifact`
const createService = require('feathers-mongoose');
const tracer = require('../../models/tracer.models');

const hooks = require('./artifact.hooks');

module.exports = function (app) {
  const Model = tracer(app).artifact;
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/artifact', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('artifact');

  service.hooks(hooks);
};
