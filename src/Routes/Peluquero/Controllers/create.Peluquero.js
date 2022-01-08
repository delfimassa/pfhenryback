const Peluquero = require("../../../Models/Peluquero");



const createPeluquero = async (req, res) => {
    const {
        name,
        avatar
    } = req.body;
    try {
        let newPeluquero = new Peluquero({
            name,
            avatar
        });
        await newPeluquero.save();

        let findNew = await Peluquero.findById(newPeluquero._id);

        if(findNew)  return res.send('Se creo correctamente el peluquero');
        res.status(404).send('Hubo un error al crear el peluquero');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createPeluquero
};