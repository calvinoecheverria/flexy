const { Schema, model } = require('mongoose');

const MedicoSchema = Schema({
    nombre: {
        type: String,
//        required: true
    },
    apellido: {
        type: String,
        required: true,
        unique: true,
    },
    nace: { type: Number },
    muere: { type: Number },
    bio: { type: String },
    pais: { type: String },
    periodos: { type: String },
    tags: { type: String },    
    img: {
        type: String,
    },
    tsCreate: { type: Date },
    tsUpdate: { type: Date },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    },
//    friends: [mongoose.Schema.Types.ObjectId],

//}, {  collection: 'artistas' });
}, );

MedicoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Medico', MedicoSchema );
