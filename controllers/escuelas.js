const { response } = require('express');

const Escuela = require('../models/escuela'); // MODEL

const getEscuelas = async(req, res = response) => {
//      const sce = await Docencia.find()
//        res.json({
//            ok: true,
//            sce }) }
try {
    const escuela = await Escuela.find();
        res.json(escuela)
  } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener escuela'); } }

module.exports = {
    getEscuelas,
}