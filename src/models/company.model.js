

// company-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const companyRole = require('./company-role.model')
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const user = app.service('user');
  const companyUser = new Schema({
    user: {
      type: user,
    },
    roles: [ { 
      type: companyRole
    } ],
  })
  const company = new Schema({
    name: { type: String, required: true },
    roles: [ { type: companyRole } ],
    users: [ { 
      type: companyUser, 
    } ]
  }, {
    timestamps: true
  });

  return mongooseClient.model('company', company);
};
