
const { response } = require('express');

const Work = require('../models/obra'); // MODEL

const getObras = async(req, res = response) => {
//      const sce = await Docencia.find()
//        res.json({
//            ok: true,
//            sce }) }

try {
    const obras = await Work.find();
        res.json(obras)
  } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener Obras'); } }

module.exports = {
    getObras,
}

