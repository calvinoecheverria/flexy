const { response } = require('express');

const Proyecto = require('../models/proyecto'); // MODEL

//const getProyectos = async(req, res = response) => {
//      const proyectos = await Proyecto.find()
//        res.json({
//            ok: true,
//            proyectos }) }
//try {
//    const proyectos = await Proyecto.find();
//        res.json(proyectos)
//  } catch (error) {
//        console.log(error);
//        res.status(500).send('Error al obtener Proyectos'); } }

//const getProyectos = async(req, res = response) => {
//    const proyectos = await Proyecto.find()
    //                            .populate('usuario','nombre img')
    //                            .populate('hospital','nombre img')
//    res.json({
//        ok: true,
//        proyectos
//    })
//}

const getProyectos = async(req, res = response) => {
    //      const sce = await Docencia.find()
    //        res.json({
    //            ok: true,
    //            sce }) }
    try {
        const proyectos = await Proyecto.find();
            res.json(proyectos)
      } catch (error) {
            console.log(error);
            res.status(500).send('Error al obtener Proyecto'); } }

const getProyectoById = async(req, res = response) => {
    const id = req.params.id;
    console.log(id)
    try {
        const proyecto = await Proyecto.findById(id)
//                                    .populate('usuario','nombre img')
        res.json({
            ok: true,
            proyecto
        })
    } catch (error) {
        console.log(error);
        res.json({
            ok: true,
            msg: 'Hable con el administrador'
        })
    }
}

const crearProyecto = async(req, res = response) => {
    const uid = req.uid;
    const proyecto = new Proyecto({ 
        usuario: uid,
        ...req.body 
    });
    try {
        const proyectoDB = await proyecto.save();
        res.json({
            ok: true,
            proyecto: proyectoDB
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const actualizarProyecto = async (req, res = response) => {
    const id  = req.params.id;
    const uid = req.uid;
    try {
        const proyecto = await Proyecto.findById( id );
        if ( !proyecto ) {
            return res.status(404).json({
                ok: true,
                msg: 'Proyecto no encontrado por id',
            });
        }
        const cambiosProyecto = {
            ...req.body,
            usuario: uid
        }
        const proyectoActualizado = await Proyecto.findByIdAndUpdate( id, cambiosProyecto, { new: true } );
        res.json({
            ok: true,
            proyecto: proyectoActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}
const borrarProyecto = async(req, res = response) => {
    const id  = req.params.id;
    try {
        const proyecto = await Proyecto.findById( id );
        if ( !proyecto ) {
            return res.status(404).json({
                ok: true,
                msg: 'Proyecto no encontrado por id',
            });
        }
        await Proyecto.findByIdAndDelete( id );
        res.json({
            ok: true,
            msg: 'Proyecto eliminado'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = {
    getProyectos,
    crearProyecto,
    actualizarProyecto,
    borrarProyecto,
    getProyectoById
}