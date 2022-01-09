const Peluquero = require("../../../Models/Peluquero");

const createPeluquero = async (req, res) => {
    const {
        name,
        avatar
    } = req.body;
    // console.log('body createPeluquero:', name, avatar);
    try {
        let newPeluquero = new Peluquero({
            name,
            avatar
        });
        await newPeluquero.save();
        // console.log('newPeluquero createPeluquero:', newPeluquero);

        let findNew = await Peluquero.findById(newPeluquero._id);
        // console.log('findNew createPeluquero:', findNew);
        if(findNew)  return res.send('Se creo correctamente el peluquero');
        res.status(404).send('Hubo un error al crear el peluquero');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createPeluquero
};