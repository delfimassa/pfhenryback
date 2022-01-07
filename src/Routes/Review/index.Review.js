const {Router} = require('express');
const RouterReview = require('./routes.Review');

const router = Router();

router.use('/review', RouterReview);

module.exports = router;