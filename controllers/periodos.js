const { response } = require('express');

const Hospital = require('../models/hospital'); // MODEL

const getPeriodos = async(req, res = response) => {
    //      const sce = await Docencia.find()
    //        res.json({
    //            ok: true,
    //            sce }) }
    try {
        const periodos = await Hospital.find();
            res.json(periodos)
      } catch (error) {
            console.log(error);
            res.status(500).send('Error al obtener Periodo'); } }

const getPeriodoById = async(req, res = response) => {
                try {
                    let periodo = await Hospital.findById(req.params.id);
                    if(!periodo) {
                        res.status(404).json({ msg: 'Error al obtener periodo' })
                    }
                    res.json(periodo);
                } catch (error) {
                    console.log(error);
                    res.status(500).send('Hubo un error'); } }

module.exports = {
    getPeriodos,
    getPeriodoById
}