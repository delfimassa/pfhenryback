const { default: axios } = require("axios");
const Cliente = require("../../../Models/Cliente");
const Turno = require("../../../Models/Turno");
const Servicios = require("../../../Models/Servicios");

const createTurno = async (req, res) => {
    const {
        service, // INombre del serviciio
        time,
        date,
        // stylist, // Id del peluquero
        peluqueria, // Id de la peluqueria
        client // Username del cliente
    } = req.body;
    console.log('body createTurno: ', service, time, date, peluqueria, client);
    try {
        let findClient = await Cliente.findOne({ username: client });
        console.log('findClient createTurno: ', findClient);
        let clientID = findClient._id;

        let findService = await Servicios.findOne({name: service})
        console.log('findService hora', findService);
        let serviceID = findService._id; 

        let newTurno = new Turno({
            service: serviceID,
            time,
            date,
            // stylist,
            peluqueria,
            client: clientID
        });
        await newTurno.save();
        console.log('newTurno createTurno: ', newTurno);
        
        if(newTurno) {
            let idTurno = newTurno._id;
            let idPelu = newTurno.peluqueria
            await axios.put(`http://localhost:4000/peluqueria/update/turno/${idPelu}`, { newTurno });
            // await axios.put(`http://localhost:4000/turno/update`, { idTurno });
            await axios.post(`http://localhost:4000/ticket/create`, { peluqueria, clientID , serviceID });
            return res.send('Se creo correctamente el turno');
        }
        res.status(404).send('Hubo un problema al crear el turno');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createTurno
};