const { Routes } = require('express');
const Routerticket = require('./routes.Ticket');

const router = Routes();

router.use('/ticket', Routerticket);

module.exports = router;