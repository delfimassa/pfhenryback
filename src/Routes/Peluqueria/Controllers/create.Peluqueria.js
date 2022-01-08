const peluquerias = require("../../../Models/Peluqueria");



const createPeluqueria = async (req, res) => {
    const {
        name,
        username,
        password,
        avatar,
        address,
        city,
        state,
        phone,
        schedule,
        services, //Array de id
        stylists  //Array de id
    } = req.body;
    try {
        let loginLocal = new peluquerias({
            name,
            username,
            password,
            avatar,
            address,
            city,
            state,
            phone,
            schedule,
            services,
            stylists
        });
        await loginLocal.save();
        let findNew = await peluquerias.findById(loginLocal._id);
        if(findNew)  return res.send('Se creo correctamente la pelu');
        res.send('No se creo correctamente la pelu');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createPeluqueria
};