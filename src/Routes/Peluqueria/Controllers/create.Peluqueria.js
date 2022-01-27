const Peluquerias = require("../../../Models/Peluqueria");
const Servicios = require("../../../Models/Servicios")
const { turnatorio,arrTurnos } = require('./middleware.Peluqueria');

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
        time,
        services, //Array de id
        stylists  //Array de id
    } = req.body;
    // console.log('body createPeluqueria: ', name, username, password, avatar, address, city, state, phone, schedule, services, stylists)
    try {
        turnatorio(schedule, Number(time));
        
        let arrServices = [];
        for(let i = 0; i < services.length; i++) {
            let findService = await Servicios.findOne({name: services[i]});
            console.log('findService hora', findService);
            let obj = {
                payment: "$300",
                price: findService.price,
                service: findService._id
            }
            arrServices.push(obj);
        };
        console.log('arrServices hora', arrServices);

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
            turnero: arrTurnos,
            services: arrServices,
            stylists
        });
        await loginLocal.save();
        // console.log('loginLocal createPeluqueria:', loginLocal);
        if (loginLocal) return res.send('Se creo correctamente la pelu');
        res.send('No se creo correctamente la pelu');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createPeluqueria
};