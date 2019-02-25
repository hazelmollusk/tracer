const person = require('./person/person.service.js');
const org = require('./org/org.service.js');
const orgUnit = require('./org-unit/org-unit.service.js');
const orgRole = require('./org-role/org-role.service.js');
const tag = require('./tag/tag.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(person);
  app.configure(orgRole);
  app.configure(orgUnit);
  app.configure(org);

  app.configure(tag);
};
