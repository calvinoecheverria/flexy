const { response } = require('express');

const Medico = require('../models/medico'); // MODEL

const getArtistas = async(req, res = response) => {
    const desde = Number (req.query.desde) || 0;
//    const artistas = await Artista.find()
//                                   .skip(desde)
//                                   .limit(5)
//    const total = await Artista.count()
    const [artistas, total] = await Promise.all(
        [   Medico
//            .find({}, 'name, surname...')// EN CASO QUE QUIERA TRAER INFO ESPECIFICA
            .find({})// TRAE TODO
//            .populate('artista','surname portrait')
            .skip(desde)// SALTA DESDE
            .limit(5),// LIMITE POR PAGINA
            Medico.countDocuments()// CUENTA TOTAL
        ]
    );
    res.json({
        ok: true,
        artistas,
        total
    })
}

const getArtistaById = async(req, res = response) => {
//    const id = req.params._id;
//    try {
//        const artista = await Artista.findById(id)
//        console.log(artista, id)
//                                    .populate({artista})
//                                    .populate('hospital','nombre img');
//        res.json({
//            ok: true,
//            artista
//        })
//    } catch (error) {
//        console.log(error);
//        res.json({
//            ok: true,
//            msg: 'Hable con el administrador'
//        })
//    }
//}

//const obtenerArtista = async (req, res) => {
    try {
        let artista = await Medico.findById(req.params.id);
        if(!artista) {
            res.status(404).json({ msg: 'Error al obtener Artista' })
        }
        res.json(artista);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error'); } }

//const crearArtista = async (req, res = response) => {
//    const uid = req.uid;
//    const artista = new Medico({
//        usuario: uid,
//        ...req.body
//    });
//    try {
//        const artistaDB = await artista.save();
//        res.json({
//            ok: true,
//            artista: artistaDB
//        })
//    } catch (error) {
//        console.log(error);
//        res.status(500).json({
//            ok: false,
//            msg: 'Hable con el administrador'
//        })
//    }
//}

//const actualizarArtista = async(req, res = response) => {
//    const id  = req.params._id;
//    const uid = req.uid;
//    try {
//        const artista = await Artista.findById( id );
//        if ( !artista ) {
//            return res.status(404).json({
//                ok: true,
//                msg: 'Artista no encontrado por id',
//            });
//        }
//        const cambiosArtista = {
//            ...req.body,
//            usuario: uid
//        }
//        const artistaActualizado = await Artista.findByIdAndUpdate( id, cambiosArtista, { new: true } );
//        res.json({
//            ok: true,
//            artista: artistaActualizado
//        })
//    } catch (error) {
//        console.log(error);
//        res.status(500).json({
//            ok: false,
//            msg: 'Hable con el administrador'
//        })
//    }
//}
// REVISAR ID
//const borrarArtista = async (req, res = response) => {
//    const id  = req.params._id;// igual a route
//    try {
//        const artista = await Artista.findById( id );
//        if ( !artista ) {
//            return res.status(404).json({
//                ok: true,
//                msg: 'Artista no encontrado por id',
//            });
//        }
//        await Artista.findByIdAndDelete( id );// REVISAR ID
//        res.json({
//            ok: true,
//            msg: 'Artista borrado'
//        }); 
//    } catch (error) {
//        console.log(error);
//        res.status(500).json({
//            ok: false,
//            msg: 'Hable con el administrador'
//        })
//    }
//}
module.exports = {
    getArtistas,
//    crearArtista,
//    actualizarArtista,
//    borrarArtista,
    getArtistaById
}
