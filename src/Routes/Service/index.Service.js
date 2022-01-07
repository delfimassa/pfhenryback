const {Router} = require('express');
const RouterService = require('./routes.Service');

const router = Router();

router.use('/service', RouterService);

module.exports = router;