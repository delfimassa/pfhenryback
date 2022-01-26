const Turno = require("../../../Models/Turno");

const getTurno = async (req, res) => {
    const { peluqueria } = req.body;
    const { id } = req.params;
    console.log('body getTurno: ', peluqueria);
    console.log('params getTurno: ', id);
    try {
        let findTurno = await Turno.find({ vacancy: false, peluqueria: id })
        .populate('service', ['name'])
        .populate('peluqueria', ['name'])
        // .populate('stylist', ['name']);
        console.log('findTurno getTurno: ', findTurno);
        
        // let filtered = findTurno.filter(t => t.peluqueria.name === peluqueria);
        // console.log('filtered getTurno: ', filtered);
        
        // if(filtered)  return res.json(filtered);
        if(findTurno)  return res.json(findTurno);
        res.status(404).send('Hubo un error al traer los turnos');
    } catch (error) {
        console.log(error);
    }
};

const getTurnoById = async (req, res) => {
    const { id } = req.params;
    // console.log('params getTurnoById: ', id);
    try {
        let findByIdT = await Turno.findById(id)
        .populate('peluqueria', ['name', 'city', 'address', 'state'])
        .populate('service')
        .populate('client');
        // console.log('findByIdT getTurnoById: ', findByIdT);

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