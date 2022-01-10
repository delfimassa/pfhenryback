const { Router } = require('express');
const RoutesFavorite = require('./routes.Favorite');

const router = Router();

router.use('/favorite', RoutesFavorite);

module.exports = router;