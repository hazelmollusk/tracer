module.exports = function(app) {

  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const tagTypeSchema = new Schema({
    text: { type: String, required: true }
  }, {
    timestamps: true
  });
  
  const tagSchema = new Schema({
    tagType: [ tagTypeSchema ],
  }, {
    timestamps: true
  });

  const personSchema = new mongooseClient.Schema({
  
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

  const orgSchema = new Schema({
    text: { type: String, required: true }
  }, {
    timestamps: true
  });

  const ouSchema = new Schema({
    text: { type: String, required: true }
  }, {
    timestamps: true
  });

  return { personSchema, tagTypeSchema, tagSchema, orgSchema, ouSchema };
}