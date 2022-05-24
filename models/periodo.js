const { Schema, model } = require('mongoose');

const PeriodoSchema = Schema({
    nombre: { type: String,    },
    imagen: {        type: String,    },
    desde: {        type: String,    },
    hasta: {        type: String,    },
    nota: {        type: String,    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
//        required: true
    },
    createdAt: {        type: Date,    },
    updatedAt: {        type: Date,    },
    deleted: {
        type: Boolean,
//        required: true,
        default: false,
    },
   

});

module.exports =model('Periodo', PeriodoSchema);