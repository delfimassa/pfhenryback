const { Router } = require('express');
const RouterClient = require('./routes.Clients');

const router = Router();

router.use('/clients', RouterClient);

module.exports = router;