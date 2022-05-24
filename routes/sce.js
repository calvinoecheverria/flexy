// ruta: '/api/sce'

const { Router } = require('express');

const {
    getSCE,
    obtenerSCE
} = require('../controllers/sce') // CONTROLLERS


const router = Router();

//router.get( '/', getSCE );
router.get( '/', obtenerSCE );

module.exports = router;