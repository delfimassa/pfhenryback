const { createFavorite } = require('./create.Favorite');
const { deleteFavorite } = require('./delete.Favorite');
const { getFavorite, getFavoriteById } = require('./get.Favorite');
const { updateFavorite } = require('./update.Favorite');


module.exports = {
    createFavorite,
    deleteFavorite,
    getFavoriteById,
    getFavorite,
    updateFavorite
};