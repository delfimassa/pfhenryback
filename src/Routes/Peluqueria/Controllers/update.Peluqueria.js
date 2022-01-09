const Peluqueria = require("../../../Models/Peluqueria");

const updatePeluqueria = async (req, res) => {
    const {
        id,
        name,
        avatar,
        address,
        city,
        state,
        phone,
        schedule,
        services, // Array de servicios
        stylists // Array de peluqueros
    } = req.body;
    console.log('body updatePeluqueria:', id, name, avatar, address, city, state, phone, schedule, services, stylists)
    try {
        let update = await Peluqueria.findByIdAndUpdate(id, {
            name: name,
            avatar: avatar,
            address: address,
            city: city,
            state: state,
            phone: phone,
            schedule: schedule,
            services: services,
            stylists: stylists,
        }, { new: true });
        await update.save();
        console.log('update updatePeluqueria:', update);

        if(update) return res.send(`La peluqeria ${update.name} se actualizo`);
        res.status(404).send('Hubo un problema al actualizar la peluqueria');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updatePeluqueria
};