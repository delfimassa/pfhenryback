const { Routes } = require('express');
const RoutesFavorite = require('./routes.Favorite');

const router = Routes();

router.use('/favorite', RoutesFavorite);

module.exports = router;