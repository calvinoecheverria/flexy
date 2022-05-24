const { Schema, model } = require('mongoose');

const ObraSchema = Schema({
    title: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    },
    tecnica: {
        type: String,
        required: true
    },
    soporte: {
        type: String,
        required: true
    },
    medida: {
        type: String,
        required: true
    },
    anio: {
        type: String,
        required: true
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
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

module.exports = model('Obra', ObraSchema);
