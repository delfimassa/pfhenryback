const { createReview } = require('./create.Review');
const { deleteReview } = require('./delete.Review');
const { getReview } = require('./get.Review');
const { updateReview } = require('./update.Review');


module.exports = {
    createReview,
    deleteReview,
    getReview,
    updateReview
}