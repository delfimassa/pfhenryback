const { default: axios } = require("axios");
const Turno = require("../../../Models/Turno");



const createTurno = async (req, res) => {
    const {
        service, // Id del servicio
        time,
        date,
        stylist, // Id del peluquero
        peluqueria, // Id de la peluqueria
        phone
    } = req.body;
    try {
        let newturno = new Turno({
            service,
            time,
            date,
            stylist,
            peluqueria,
            phone
        });
        await newturno.save();
        
        if(newturno) {
            let id = newturno._id;
            await axios.put(`http://localhost:4000/turno/update`, { id });
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