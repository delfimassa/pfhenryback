const Carrito = require("../../../Models/Carrito");
const Peluqueria = require("../../../Models/Peluqueria");

const createCart = async (req, res) => {
    const {
        peluqeria,  //Id de la peluqueria
        service, // Nombre del servicio
        client  //Nombre o email del cliente
    } = req.body;
    console.log('body createCart: ', peluqeria, service, client);
    try {
        let findPelu = await Peluqueria.findById(peluqeria)
        .populate('services.service');
        console.log('findPelu createCart: ', findPelu);

        let servicePelu = findPelu.services.filter(s => s.service.name === service); 
        console.log('servicePelu createCart: ', servicePelu);
        
        if(servicePelu) {
            let newCart = new Carrito({
                price: servicePelu.price,
                service: servicePelu.service._id, 
                client
            });
            await newCart.save();
            console.log('newCart createCart: ', newCart);
            
            if(newCart) return res.send('Se agrego correctamente al carrito');
            return res.status(404).send('Hubo un problema al agregar al carrito');
        };
        res.status(404).send('No se filtro ningun servicio');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createCart
};