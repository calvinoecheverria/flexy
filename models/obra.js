const { Schema, model } = require('mongoose');

const ObraSchema = Schema({
    titulo: { type: String, },
    imagen: { type: String, },
    tecnica: { type: String, },
    soporte: { type: String, },
    medidas: { type: String, },
    anio: { type: String, },
    createdAt: { type: Date, },
    updatedAt: { type: Date, },
    artista: {
        type: Schema.Types.ObjectId,
        ref: 'Medico',
//        required: true
    },
    periodo: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
//        required: true
    },
    deleted: {
        type: Boolean,
        required: true,
        default: false,
    },
}
//, {  collection: 'hospitales' } // PARA QUE GUARDE COLECCION PLURAL
);

ObraSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})
module.exports = model('Work', ObraSchema);