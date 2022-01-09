const Servicios = require("../../../Models/Servicios");

const updateService = async (req, res) => {
    const {
        id,
        name,
        price,
        duration
    } = req.body;
    // console.log('body updateService:', id, name, price, duration);
    try {
        let update = await Servicios.findByIdAndUpdate(id, {
            name: name,
            price: price,
            duration: duration
        }, { new: true });
        await update.save();
        // console.log('update updateService:', update);
        if(update) return res.send(`Se actualizo el servicio ${update.name}`);
        res.status(404).send('Hubo un problema al actualizar el servicio');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateService
};