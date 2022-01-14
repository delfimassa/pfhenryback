const Turno = require("../../../Models/Turno");

const getTurno = async (req, res) => {
    const { peluqueria } = req.body;
    try {
        let findTurno = await Turno.find({ vacancy: false, peluqueria: peluqueria })
        .populate('peluqueria', ['name'])
        .populate('service', ['name'])
        .populate('stylist', ['name']);

        if(findTurno)  return res.json(findTurno);
        res.status(404).send('Hubo un error al traer los turnos');
    } catch (error) {
        console.log(error);
    }
};

const getTurnoById = async (req, res) => {
    const { id } = req.params;
    try {
        let findByIdT = await Turno.findById(id)
        .populate('peluqueria', ['name', 'city', 'address', 'state'])
        .populate('service')
        .populate('stylist');

        if(findByIdT) return res.json(findByIdT);
        res.status(404).send('Hubo un problema al traer el turno');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getTurno,
    getTurnoById
};