const person = require('./person/person.service.js');
const tag = require('./tag/tag.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(person);

  app.configure(tag);
};
