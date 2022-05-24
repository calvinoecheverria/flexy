/*
    Articulos
    ruta: '/api/articulos'
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getArticulos,
    getArticuloById,
    crearArticulo,
} = require('../controllers/articulos')

const router = Router();

router.get( '/', getArticulos );

router.get( '/:id',
    getArticuloById
);

router.post( '/',
    [
        validarJWT,
//        check('titulo','El titulo del articulo es necesario').not().isEmpty(),
//        check('medico','El Artista id debe de ser válido').isMongoId(),
//        check('hospital','El Periodo id debe de ser válido').isMongoId(),
        validarCampos
    ], 
    crearArticulo 
);





module.exports = router;



