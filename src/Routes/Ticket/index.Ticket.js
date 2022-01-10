const {Router} = require('express');
const Routerticket = require('./routes.Ticket');

const router = Router();

router.use('/ticket', Routerticket);

module.exports = router;