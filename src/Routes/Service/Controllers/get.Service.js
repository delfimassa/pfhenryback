const Servicios = require("../../../Models/Servicios");



const getService = async (req, res) => {
    const { name } = req.query;
    try {
        let findService = await Servicios.find({ exists: true })

        if(findService.length !== 0)  return res.json(findService);
        res.send('No se encontro los servicios');
    } catch (error) {
        console.log(error);
    }
};

const getServiceById = async (req, res) => {
    const { id } = req.params;
    try {
        let findServiceById = await Servicios.findById(id);
        
        if(findServiceById.length !== 0)  return res.json(findServiceById);
        res.send('No se encontro los servicios');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getService,
    getServiceById
};