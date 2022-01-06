const { Routes } = require('express');
const {
    createReview,
    deleteReview,
    getReview,
    getReviewById,
    updateReview
} = require('./Controllers/all.controllers');

const router = Routes();


//    / review
router.get('/', getReview);
router.get('/:id', getReviewById);
router.post('/create', createReview);
router.put('/update', updateReview);
router.put('/delete', deleteReview);

module.exports = router;