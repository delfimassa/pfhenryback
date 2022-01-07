const { Routes } = require('express');
const RouterMP = require('./routes.MP');

const router = Routes();

router.use('/MP', RouterMP);

module.exports = router;