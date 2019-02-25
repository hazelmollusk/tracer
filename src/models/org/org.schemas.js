
  module.exports = function (app) { 
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient.Schema;      

    const role = new Schema({
        text: { type: String, required: true }
      }, {
        timestamps: true
      });
    
    const ou = new Schema({
        name: { type: String, required: true },
        people: [ person ],
        roles: [ orgRole ],
        children: [{ type:Schema.Types.ObjectId, ref: 'ou', }],
      }, {
        timestamps: true
      });
    
      const org = new Schema({
        name: { type: String, required: true },
        unit: { type: ou, required: true },
        roles: [ role ]
      }, {
        timestamps: true
      });
    
    return { role, ou, org };
}