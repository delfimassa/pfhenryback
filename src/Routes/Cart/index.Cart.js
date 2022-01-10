const { Router } = require('express');
const RoutesCart = require('./routes.Cart');

const router = Router();

router.use('/cart', RoutesCart);

module.exports = router;