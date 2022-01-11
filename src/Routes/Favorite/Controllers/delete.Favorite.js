const Favorito = require("../../../Models/Favorito");

const deleteFavorite = async (req, res) => {
    const { id } = req.body;
    try {
        let deleted = await Favorito.findByIdAndUpdate(id, {
            exists: false
        }, { new: true });
        await deleted.save();

        if(deleted) return res.send(`Se quito ${deleted.peluqueria.name} de favoritos`);
        res.send('Hubo un error al quitar de favoritos');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteFavorite
};