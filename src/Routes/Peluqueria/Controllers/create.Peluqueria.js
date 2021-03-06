const Peluquerias = require("../../../Models/Peluqueria");

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
    console.log('body createPeluqueria: ', name, username, password, avatar, address, city, state, phone, schedule, services, stylists)
    try {
        let loginLocal = new Peluquerias({
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
        // console.log('loginLocal createPeluqueria:', loginLocal);
        if(loginLocal)  return res.send('Se creo correctamente la pelu');
        res.send('No se creo correctamente la pelu');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createPeluqueria
};