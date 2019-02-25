// Initializes the `orgRole` service on path `/org-role`
const createService = require('feathers-mongoose');
const hooks = require('./org-role.hooks');

module.exports = function (app) {
  const modelDir = app.get("modelDir");
  const { role } = require(modelDir + '/org/role.model')
  const Model = role(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/org-role', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('org-role');

  service.hooks(hooks);
};
