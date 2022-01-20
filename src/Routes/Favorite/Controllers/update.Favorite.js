const Favorito = require("../../../Models/Favorito");

const addFavorite = async (req, res) => {
    const { id } = req.body;
    // console.log('body addFavorite: ', id);
    try {
        let addFav = await Favorito.findByIdAndUpdate(id, {
            exists: true
        }, { new: true })
        await addFav.save();
        // console.log('addFav addFavorite: ', addFav);

        if(addFav) return res.send('Se agrego correctamente a favoritos');
        return res.tatus(404).send('hubo un error al agreagar a favoritos')
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addFavorite
};