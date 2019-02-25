// Initializes the `person` service on path `/person`
const createService = require('feathers-mongoose');
const tracer = require('../../models/tracer.models');
const hooks = require('./person.hooks');

module.exports = function (app) {
  const Model = tracer(app).person;
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/person', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('person');

  service.hooks(hooks);
};
