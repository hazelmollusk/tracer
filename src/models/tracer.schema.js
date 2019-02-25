module.exports = function(app) {

  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const tagType = new Schema({
    text: { type: String, required: true }
  }, {
    timestamps: true
  });
  
  const tag = new Schema({
    tagType: [ tagType ],
  }, {
    timestamps: true
  });

  const person = new Schema({
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

  const org = new Schema({
    text: { type: String, required: true }
  }, {
    timestamps: true
  });

  const ou = new Schema({
    text: { type: String, required: true }
  }, {
    timestamps: true
  });

  const artifact = new Schema({
    text: { type: String, required: true }
  }, {
    timestamps: true
  });

  return { artifact, person, tagType, 
    tag, org , ou };
}