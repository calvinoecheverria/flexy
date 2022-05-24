const { Schema, model } = require('mongoose');

const HospitalSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    imagen: { type: String },
    desde: { type: String },
    hasta: { type: String },
    siglo: { type: String },
    tags: { type: String },
    nota: { type: String },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
//}, {  collection: 'periodos' });
}, );

HospitalSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Hospital', HospitalSchema );
