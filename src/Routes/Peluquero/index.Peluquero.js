const {Router} = require('express');
const RouterPeluquero = require('./routes.Peluquero');

const router = Router();

router.use('/peluquero', RouterPeluquero);

module.exports = router;