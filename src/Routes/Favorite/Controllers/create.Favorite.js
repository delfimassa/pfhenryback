const { default: axios } = require("axios");
const Favorito = require("../../../Models/Favorito");
const Cliente = require("../../../Models/Cliente");

const createFavorite = async (req, res) => {
    const {
        client, // Name o email del cliente
        peluqueria // Id de la peluqueria
    } = req.body;
    // console.log('body createFavorite: ', client, peluqueria);
    try {
        let findClient = await Cliente.findOne({ username: client });

        let findFav = await Favorito.findOne({ client: client, peluqueria: peluqueria });
        // console.log('findFav createFavorite: ', findFav);

        if(findFav) {
            let id = findFav._id;
            let add = await axios.put(`http://localhost:4000/favorite/add`, { id });
            return res.send(add.data);
        }

        let newFavorite = new Favorito({
            client,
            peluqueria
        });
        await newFavorite.save();
        // console.log('newFavorite createFavorite: ', newFavorite);

        if(newFavorite) {
            await axios.put(`http://localhost:4000/clients/update/addFav/${findClient._id}`, { newFavorite });
            return res.send('Se agrego coorectamente a favoritos');
        }
        res.status(404).send('Hubo un problema al agreagar a favoritos')
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createFavorite
};