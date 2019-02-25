// person-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const person = new mongooseClient.Schema({
  
    first: { type: String },
    last: { type: String },
    email: { type: String },
    auth0Id: { type: String },
    googleId: { type: String },
    facebookId: { type: String },
    githubId: { type: String },
  
  }, {
    timestamps: true
  });

  return mongooseClient.model('person', person);
};
