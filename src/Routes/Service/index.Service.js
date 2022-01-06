const { Routes } = require('express');
const RouterService = require('./routes.Service');

const router = Routes();

router.use('/service', RouterService);

module.exports = router;