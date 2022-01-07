const {Router} = require('express');
const RouterPeluqueria = require('./routes.Peluqueria');

const router = Router();

router.use('/peluqueria', RouterPeluqueria);

module.exports = router;