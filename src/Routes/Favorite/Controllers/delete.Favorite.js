const Favorito = require("../../../Models/Favorito");

const deleteFavorite = async (req, res) => {
    const { id } = req.body;
    // console.log('body deleteFavorite: ', id);
    try {
        let deleted = await Favorito.findByIdAndUpdate(id, {
            exists: false
        }, { new: true });
        await deleted.save();
        // console.log('deleted deleteFavorite: ', deleted);

        if(deleted) return res.send(`Se quito ${deleted.peluqueria[0].name} de favoritos`);
        res.status(404).send('Hubo un error al quitar de favoritos');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteFavorite
};