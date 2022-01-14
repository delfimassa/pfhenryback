const {Router} = require('express');
const {
    createReview,
    deleteReview,
    getReview,
    updateReview
} = require('./Controllers/all.controllers');

const router = Router();


//    / review
router.get('/', getReview);
router.post('/create', createReview);
router.put('/update', updateReview);
router.put('/delete', deleteReview);

module.exports = router;