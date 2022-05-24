const { response } = require('express');

const Usuario = require('../models/usuario');
const Medico = require('../models/medico');
const Hospital = require('../models/hospital');
const Articulo = require('../models/articulo');


const getTodo = async(req, res = response ) => {

    const busqueda = req.params.busqueda;
    const regex = new RegExp( busqueda, 'i' );

    const medicos = await Medico.find ({ apellido: regex })// ARTISTA
//    const [ usuarios, medicos, hospitales, articulos ] = await Promise.all([
//        Usuario.find({ nombre: regex }),
//        Medico.find({ apellido: regex }),
//        Hospital.find({ nombre: regex }),
//        Articulo.find({ nota: regex})
//    ]);
    res.json({
//        ok: true, msg: 'getTodo', busqueda 
        ok: true, medicos
//        ok: true,, usuarios, medicos, hospitales, articulos
    })

}

const getDocumentosColeccion = async(req, res = response ) => {

    const tabla    = req.params.tabla;
    const busqueda = req.params.busqueda;
    const regex    = new RegExp( busqueda, 'i' );

    let data = [];

    switch ( tabla ) {
        case 'medicos':
            data = await Medico.find({ apellido: regex })
                                .populate('usuario', 'nombre img')
                                .populate('hospital', 'nombre img');
        break;

        case 'hospitales':
            data = await Hospital.find({ nombre: regex })
                                    .populate('usuario', 'nombre img');
        break;

        case 'usuarios':
            data = await Usuario.find({ nombre: regex });
            
        break;
    
        default:
            return res.status(400).json({
                ok: false,
                msg: 'La tabla tiene que ser usuarios/medicos/hospitales'
            });
    }
    
    res.json({
        ok: true,
        resultados: data
    })

}


module.exports = {
    getTodo,
    getDocumentosColeccion
}

