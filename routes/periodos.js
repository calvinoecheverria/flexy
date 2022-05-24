// ruta: '/api/periodos'

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getPeriodos,
    getPeriodoById,
} = require('../controllers/periodos')

const router = Router();

router.get( '/', getPeriodos );

router.get( '/:id',
    getPeriodoById
);

module.exports = router;
