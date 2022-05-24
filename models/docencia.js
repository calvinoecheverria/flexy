const { Schema, model } = require('mongoose');

const DocenciaSchema = Schema({
    escuela: {
        type: String,
    },
    materia: {
        type: String,
    },
    imagen: {
        type: String,
    },
    curso: {
        type: String,
    },
    modalidad: {
        type: String,
    },
    turno: {
        type: String,
    },
    desde: {
        type: Date,
    },
    hasta: {
        type: Date,
    },
    cargo: {
        type: String,
    },
    classroom: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
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

DocenciaSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})
module.exports = model('Docencia', DocenciaSchema);