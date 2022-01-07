const { Routes } = require('express');
const RouterPeluqueria = require('./routes.Peluqueria');

const router = Routes();

router.use('/peluqueria', RouterPeluqueria);

module.exports = router;