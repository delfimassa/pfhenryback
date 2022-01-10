const Peluquero = require("../../../Models/Peluquero");

const getPeluquero = async (req, res) => {
    try {
        let getPeluqueros = await Peluquero.find({ exists: true });
        // console.log('getPeluqueros getPeluquero:', getPeluquero);

        if(getPeluqueros.length !== 0) return res.json(getPeluqueros);
        res.status(404).send('No se trajo los peluqueros');
    } catch (error) {
        console.log(error);
    }
};

const getPeluqueroById = async (req, res) => {
    const { id } = req.params;
    // console.log('params getPeluqueroById:', id);
    try {
        let findById = await Peluquero.findById(id);
        // console.log('findById getPeluqueroById:', findById);

        if(findById) return res.json(findById);
        res.status(404).send('No encontro al peluquero');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getPeluquero,
    getPeluqueroById
};