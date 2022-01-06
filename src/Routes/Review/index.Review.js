const { Routes } = require('express');
const RouterReview = require('./routes.Review');

const router = Routes();

router.use('/review', RouterReview);

module.exports = router;