const { Schema, model } = require('mongoose');

const ProyectoSchema = Schema({
    nombre: { type: String,    },
    descripcion: {        type: String,    },
    imagen: {        type: String,    },
    link: {        type: String,    },
    desde: {        type: String,    },
    hasta: {        type: String,    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
//        required: true
    },
    createdAt: {        type: Date,    },
    updatedAt: {        type: Date,    },
    deleted: {
        type: Boolean,
        required: true,
        default: false,
    },
   

});

module.exports =model('Proyecto', ProyectoSchema);