const { Routes } = require('express');
const RouterPeluquero = require('./routes.Peluquero');

const router = Routes();

router.use('/peluquero', RouterPeluquero);

module.exports = router;