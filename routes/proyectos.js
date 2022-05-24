// ruta: '/api/proyectos'

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getProyectos,
    crearProyecto,
    actualizarProyecto,
    borrarProyecto
} = require('../controllers/proyectos')


const router = Router();

router.get( '/', getProyectos );

router.post( '/',
    [
        validarJWT,
        check('nombre','El nombre del proyecto es necesario').not().isEmpty(),
        validarCampos
    ], 
    crearProyecto 
);

router.put( '/:id',
    [
        validarJWT,
        check('nombre','El nombre del proyecto es necesario').not().isEmpty(),
        validarCampos
    ],
    actualizarProyecto
);

router.delete( '/:id',
    validarJWT,
    borrarProyecto
);



module.exports = router;
