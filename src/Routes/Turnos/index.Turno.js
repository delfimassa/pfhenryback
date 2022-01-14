const {Router} = require('express');
const RouterTurno = require('./routes.Turno');

const router = Router();

router.use('/turno', RouterTurno);

module.exports = router;