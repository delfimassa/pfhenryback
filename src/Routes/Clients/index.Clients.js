const { Routes } = require('express');
const RouterClient = require('./routes.Clients');

const router = Routes();

router.use('/clients', RouterClient);

module.exports = router;