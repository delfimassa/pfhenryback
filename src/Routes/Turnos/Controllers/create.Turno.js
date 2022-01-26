const { default: axios } = require("axios");
const Cliente = require("../../../Models/Cliente");
const Turno = require("../../../Models/Turno");

const createTurno = async (req, res) => {
    const {
        service, // Id del servicio
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

        let newTurno = new Turno({
            service,
            time,
            date,
            // stylist,
            peluqueria,
            client: findClient._id
        });
        await newTurno.save();
        console.log('newTurno createTurno: ', newTurno);
        
        if(newTurno) {
            let idTurno = newTurno._id;
            let idPelu = newTurno.peluqueria
            await axios.put(`http://localhost:4000/peluqueria/update/turno/${idPelu}`, { newTurno });
            await axios.put(`http://localhost:4000/turno/update`, { idTurno });
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