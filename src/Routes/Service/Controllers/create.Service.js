const Servicios = require("../../../Models/Servicios");



const createService = async (req, res) => {
    const {
        name,
        price,
        duration
    } = req.body;
    try {
        let newService = new Servicios({
            name,
            price,
            duration
        });
        await newService.save();

        let findNew = await Servicios.findById(newService._id);
        if(findNew) return res.send('Se creo correctamente el servicio');
        res.status(404).send('Hubo un problema al crearlo');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createService
};