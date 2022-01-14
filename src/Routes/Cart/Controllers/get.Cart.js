const Carrito = require("../../../Models/Carrito");

const getCart = async (req, res) => {
    const { client } = req.body;
    console.log('body getCart: ', client);
    try {
        let findCart = await Carrito.find({ client: client });
        console.log('findCart getCart: ', findCart);

        if (findCart.length !== 0)  return res.json(findCart);
        res.status(404).send('Hubo un error al traer el carrito');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getCart
};