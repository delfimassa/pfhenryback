const peluquerias = require('../../../Models/Peluqueria');


const getPeluqueria = async (req, res) => {
    const { name } = req.query;
    try {
        const getPelu = await peluquerias.find()
        .populate('services')
        .populate('reviews')
        .populate('stylists');
        
        console.log('getPelu getPeluqueria: ', getPelu);
        if(getPelu.length !== 0) return res.json(getPelu);
        res.status(404).send('No se trajo lo de la DB'); 
    } catch (error) {
        console.log(error);
    }
};

const getPeluqueriaById = async (req, res) => {
    const { id } = req.params;
    try {
        const getPeluById = await peluquerias.findById(id)
        .populate('services')
        .populate('reviews')
        .populate('stylists');
        
        if(getPeluById.exists) return res.json(getPeluById);
        res.status(404).send('No se trajo lo de la DB o no existe'); 
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getPeluqueria,
    getPeluqueriaById
};