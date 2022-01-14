const Carrito = require("../../../Models/Carrito");

const deleteCart = async (req, res) => {
    const { client } = req.body;
    console.log('body deleteCart: ', client);
    try {
        let findCart = await Carrito.find({ client: client });
        console.log('findCart deleteCart: ', findCart);
        
        let deleteds = findCart.forEach(async s => await Carrito.findByIdAndDelete(s._id));
        console.log('deleteds deleteCart: ', deleteds);

        if(deleteds)  return res.send('Se limpio el carrito');
        res.status(404).send('Hubo un problema al limpiar el carrito');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteCart
};