// tagType-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { tagType } = require('./tracer.schema')(app);

  return mongooseClient.model('tagType', tagType);
};
