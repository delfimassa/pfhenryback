const { Router } = require('express');
const {
    createFavorite,
    getFavorite,
    getFavoriteById,
    updateFavorite,
    deleteFavorite
} = require('./Controllers/all.controllers');

const router = Router();


//    / favorite
router.get('/', getFavorite);
router.get('/:id', getFavoriteById);
router.post('/create', createFavorite);
router.put('/update', updateFavorite);
router.put('/delete', deleteFavorite);

module.exports = router;