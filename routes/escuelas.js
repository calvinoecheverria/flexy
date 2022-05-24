// ruta: '/api/escuelas'

const { Router } = require('express');

const {
    getEscuelas
} = require('../controllers/escuelas') // CONTROLLERS

const router = Router();

router.get( '/', getEscuelas );

module.exports = router;