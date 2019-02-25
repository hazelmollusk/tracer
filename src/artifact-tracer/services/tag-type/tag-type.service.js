// Initializes the `tagType` service on path `/tag-type`
const createService = require('feathers-mongoose');
const tracer = require('../../models/tracer.models');
const hooks = require('./tag-type.hooks');

module.exports = function (app) {
  const Model = tracer(app).tagType;
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/tag-type', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('tag-type');

  service.hooks(hooks);
};
