const { response } = require('express');

const Obra = require('../models/sce'); // MODEL

const getSCE = async(req, res = response) => {
      const sce = await Obra.find()
        res.json({
            ok: true,
            sce }) }

const obtenerSCE = async (req, res = response) => {
    try {
      const obras = await Obra.find();
          res.json(obras)
    } catch (error) {
          console.log(error);
          res.status(500).send('Error al obtener Artistas'); } }

module.exports = {
    getSCE,
    obtenerSCE,
}
