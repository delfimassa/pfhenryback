const Servicios = require("../../../Models/Servicios");

const createService = async (req, res) => {
    const {
        name,
        price,
        duration
    } = req.body;
    // console.log('body createService:', name, price, duration);
    try {
        let newService = new Servicios({
            name,
            price,
            duration
        });
        await newService.save();
        // console.log('newService createService:', newService);
        
        let findNew = await Servicios.findById(newService._id);
        // console.log('findNew createService:', findNew);
        if(findNew) return res.send('Se creo correctamente el servicio');
        res.status(404).send('Hubo un problema al crearlo');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createService
};