const Servicios = require("../../../Models/Servicios");

const createService = async (req, res) => {
    const {
        name,
        price,
        duration
    } = req.body;
    // console.log('body createService:', name, price, duration);
    try {
        let find = await Servicios.findOne({name: name});
        console.log('find createService:', find);

        if(find) return res.send('Este servicio ya existe');

        let newService = new Servicios({
            name,
            price,
            duration
        });
        await newService.save();
        // console.log('newService createService:', newService);
        
        if(newService) return res.send('Se creo correctamente el servicio');
        res.status(404).send('Hubo un problema al crearlo');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createService
};