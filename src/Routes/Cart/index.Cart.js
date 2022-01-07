const { Routes } = require('express');
const RoutesCart = require('./routes.Cart');

const router = Routes();

router.use('/cart', RoutesCart);

module.exports = router;