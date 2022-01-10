const { Router } = require('express');
const {
    createCart,
    getCart,
    getCartById,
    deleteCart,
    updateCart
} = require('./Controllers/all.controllers');

const router = Router();

//   / cart
router.get('/', getCart);
router.get('/:id', getCartById);
router.post('/create', createCart);
router.put('/update', updateCart);
router.put('/delete', deleteCart);

module.exports = router;