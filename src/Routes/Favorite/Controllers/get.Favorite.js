const Favorito = require("../../../Models/Favorito");

const getFavorite = async (req, res) => {
    const { client } = req.body;
    try {
        let findFav = await Favorito.find({ exists: true })
        .populate('peluqueria');

        if(findFav)  return res.json(findFav);
        res.send('Hubo un problema al traer los favoritos');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getFavorite
};