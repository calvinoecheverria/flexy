const { Schema, model } = require('mongoose');

const ArticuloSchema = Schema({
    titulo: { type: String },
    subtitulo: { type: String },
    nota: { type: String },
    anio: { type: Number },
    ciudad: { type: String },
    fecha: { type: String },
    imagen: { type: String },
    imagenArtista: { type: String },// TRAER DEL ObjectId
    tecnica: { type: String },
    soporte: { type: String },
    museo: { type: String },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
//        unique: true,// PARA QUE SEA UNICO EL VALOR, NO HAYA DOS CON EL MISMO
        required: true// PARA QUE SEA REQUERIDO
    },
    medico: {
//        type: moongose.Types.ObjectId,
        type: Schema.Types.ObjectId,
        ref: 'Medico',
//        required: true
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
//        required: true
    },},
    {   versionKey: false,//QUITA _v
        timestamps :true })// AGREGA CREATED Y UPDATE
//}, {  collection: 'artistas' });

ArticuloSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Articulo', ArticuloSchema );
