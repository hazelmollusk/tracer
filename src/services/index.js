const person = require('./person/person.service.js');
const tag = require('./tag/tag.service.js');
const tagType = require('./tag-type/tag-type.service.js');
const org = require('./org/org.service.js');
const ou = require('./ou/ou.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(person);

  app.configure(tag);
  app.configure(tagType);
  app.configure(org);
  app.configure(ou);
};
