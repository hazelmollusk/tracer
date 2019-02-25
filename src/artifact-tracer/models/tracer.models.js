const tracerSchema = require('./tracer.schema');



module.exports = function (app) {
    if (app.get('tracerModels')===undefined) {
        const mc = app.get('mongooseClient');
        const schemas = tracerSchema(app);
        
        let models = {}
        for (schema in schemas) {
            models[schema] = mc.model(schema, schemas[schema]);
        }

        app.set('tracerModels', models);
    }
    return app.get('tracerModels');
}