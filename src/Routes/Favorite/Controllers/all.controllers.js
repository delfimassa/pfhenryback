const { createFavorite } = require('./create.Favorite');
const { deleteFavorite } = require('./delete.Favorite');
const { getFavorite } = require('./get.Favorite');
const { addFavorite } = require('./update.Favorite');


module.exports = {
    createFavorite,
    deleteFavorite,
    getFavorite,
    addFavorite
};