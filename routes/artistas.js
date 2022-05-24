// ruta: '/api/artistas'

const { Router } = require('express');
const { check } = require('express-validator');

const {
    getArtistas,
    getArtistaById
} = require('../controllers/artistas') // CONTROLLERS

const router = Router();

router.get( '/', getArtistas );

router.get( '/:id',
    getArtistaById
);


module.exports = router;
