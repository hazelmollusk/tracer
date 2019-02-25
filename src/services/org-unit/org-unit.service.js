// Initializes the `orgUnit` service on path `/org-unit`
const createService = require('feathers-mongoose');
const { ou } = require('../../models/org/ou.model');
const hooks = require('./org-unit.hooks');

module.exports = function (app) {
  const Model = ou(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/org-unit', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('org-unit');

  service.hooks(hooks);
};
