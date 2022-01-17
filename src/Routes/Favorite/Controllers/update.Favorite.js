const Favorito = require("../../../Models/Favorito");

const addFavorite = async (req, res) => {
    const { id } = req.body;
    try {
        let addFav = await Favorito.findByIdAndUpdate(id, {
            exists: true
        }, { new: true })
        await addFav.save();

        if(addFav) return res.send('Se agrego correctamente a favoritos');
        return res.send('hubo un error al agreagar a favoritos')
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addFavorite
};