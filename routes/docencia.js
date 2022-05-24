
const { Router } = require('express');

const {
    getDocencia
} = require('../controllers/docencia') // CONTROLLERS

const router = Router();

router.get( '/', getDocencia );

module.exports = router;