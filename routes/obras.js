
const { Router } = require('express');

const {
    getObras
} = require('../controllers/obras') // CONTROLLERS

const router = Router();

router.get( '/', getObras );

module.exports = router;