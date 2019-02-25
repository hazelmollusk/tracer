// org-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.


module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { org } = require(org.schemas)(app);

  return mongooseClient.model('org', org);
};
