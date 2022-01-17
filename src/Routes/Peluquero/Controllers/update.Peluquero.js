const Peluquero = require("../../../Models/Peluquero");

const updatePeluquero = async (req, res) => {
    const {
        id,
        name,
        avatar
    } = req.body;
    // console.log('body updatePeluquero:', id, name, avatar);
    try {
        let update = await Peluquero.findByIdAndUpdate(id, {
            name: name,
            avatar: avatar
        }, { new: true });
        await update.save();
        // console.log('update updatePeluquero:', update);

        if(update) return res.send(`Se actualizo el peluquero ${upadte.name}`);
        res.status(404).send('Hubo un error al acrualizar el peluquero');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updatePeluquero
};