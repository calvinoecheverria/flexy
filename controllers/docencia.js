
const { response } = require('express');

const Docencia = require('../models/docencia'); // MODEL

const getDocencia = async(req, res = response) => {
//      const sce = await Docencia.find()
//        res.json({
//            ok: true,
//            sce }) }

try {
    const docencia = await Docencia.find();
        res.json(docencia)
  } catch (error) {
        console.log(error);
        res.status(500).send('Error al obtener Docencia'); } }

module.exports = {
    getDocencia,
}

