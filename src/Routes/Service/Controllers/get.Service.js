const Servicios = require("../../../Models/Servicios");

const getService = async (req, res) => {
    const { name } = req.query;
    // console.log('query getService:', name);
    try {
        let findService = await Servicios.find({ exists: true })
        // console.log('findService getService:', findService);
        
        if(name !== '') findService = findService.filter(s => s.name.toLowerCase().includes(name.toLowerCase()));
        // console.log('findService(name) getService:', findService);

        if(findService.length !== 0)  return res.json(findService);
        res.send('No se encontro los servicios');
    } catch (error) {
        console.log(error);
    }
};

const getServiceById = async (req, res) => {
    const { id } = req.params;
    // console.log('params getServiceById:', id);
    try {
        let findById = await Servicios.findById(id);
        // console.log('findById getServiceById:', findById);
        
        if(findById.length !== 0)  return res.json(findById);
        res.send('No se encontro los servicios');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getService,
    getServiceById
};