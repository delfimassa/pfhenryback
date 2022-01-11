const { default: axios } = require("axios");
const Favorito = require("../../../Models/Favorito");

const createFavorite = async (req, res) => {
    const {
        client, // Name o email del cliente
        peluqueria // Id de la peluqueria
    } = req.body;
    try {
        let findFav = await Favorito.findOne({ client: client, peluqueria: peluqueria });

        if(findFav) {
            let add = await axios.put(`http://localhost:4000/favorite/add`, { findFav });
            return res.send(add.data);
        }

        let newFavorite = new Favorito({
            client,
            peluqueria
        });
        await newFavorite.save();

        if(newFavorite) return res.send('se agrego coorectamente a favoritos');
        res.status(404).send('Hubo un problema al agreagar a favoritos')
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createFavorite
};