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

  return { tagType, tag };
}