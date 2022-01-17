const { Router } = require('express');
const {
    createFavorite,
    getFavorite,
    addFavorite,
    deleteFavorite
} = require('./Controllers/all.controllers');

const router = Router();


//    / favorite
router.get('/', getFavorite);
router.post('/create', createFavorite);
router.put('/add', addFavorite);
router.put('/delete', deleteFavorite);

module.exports = router;