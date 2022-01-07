const {Router} = require('express');
const RouterMP = require('./routes.MP');

const router = Router();

router.use('/MP', RouterMP);

module.exports = router;