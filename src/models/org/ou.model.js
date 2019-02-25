// orgUnit-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { ou } = require('./org.schema')(app);
  
  return mongooseClient.model('ou', ou);
};
