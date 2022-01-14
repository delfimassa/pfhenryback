const Carrito = require("../../../Models/Carrito");

const updateCart = async (req, res) => {
    const { client } = req.body;
    try {
        let findCart = await Carrito.find({ client: client });

        
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateCart
};