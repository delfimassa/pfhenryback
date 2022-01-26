const Peluquerias = require('../../../Models/Peluqueria');

const getPeluqueria = async (req, res) => {
    const { name, service, order } = req.query;
    // console.log('query getPeluqueria:', name, service, order);
    try {
        let getPelu = await Peluquerias.find({ exists: true })
            .populate('services.service')
            .populate('reviews')
            .populate('turnos')
            .populate('stylists');
        // console.log('getPelu getPeluqueria: ', getPelu);

        if (name) getPelu = getPelu.filter(P => P.name.toLowerCase().includes(name.toLowerCase()));
        // console.log('getPelu(name) getPeluqueria: ', getPelu);

        // if (service) getPelu = getPelu.forEach(P => P.services.filter(s => s.name !== service));
        // console.log('getPelu(service) getPeluqueria: ', getPelu);

        if (order) {
            switch (order) {
                case 'MaxPrice':
                    getPelu = getPelu.sort((a, b) => {
                        if (a.services.price < b.services.price) return 1;
                        if (a.services.price > b.services.price) return -1;
                        return 0;
                    })
                    break;
                case 'MinPrice':
                    getPelu = getPelu.sort((a, b) => {
                        if (b.services.price < a.services.price) return 1;
                        if (b.services.price > a.services.price) return -1;
                        return 0;
                    })
                    break;
                case 'MaxRating':
                    getPelu = getPelu.sort((a, b) => {
                        if (a.rating < b.rating) return 1;
                        if (a.rating > b.rating) return -1;
                        return 0;
                    })
                    break;
                case 'MinRating':
                    getPelu = getPelu.sort((a, b) => {
                        if (b.rating < a.rating) return 1;
                        if (b.rating > a.rating) return -1;
                        return 0;
                    })
                    break;
                default:
                    break;
            }
        }
        // console.log('getPelu(order) getPeluqueria: ', getPelu);

        if (getPelu.length !== 0) return res.json(getPelu);
        res.status(404).send('No se trajo lo de la DB');
    } catch (error) {
        console.log(error);
    }
};

const getPeluqueriaById = async (req, res) => {
    const { id } = req.params;
    // console.log('params getPeluqueriaById:', id);
    try {
        const getPeluById = await Peluquerias.findById(id)
            .populate('services.service')
            .populate('reviews')
            .populate('turnos')
            .populate('stylists');
        // console.log('getPeluById getPeluqueriaById: ', getPeluById);

        if (getPeluById && getPeluById.exists) return res.json(getPeluById);
        res.status(404).send('No se trajo lo de la DB o no existe');
    } catch (error) {
        console.log(error);
    }
};

const getPeluqueriaByUsername = async (req, res) => {
    const { username } = req.query;
    console.log('query getPeluqueriaById:', req);
    try {
        let getPeluByUsername = await Peluquerias.findOne({username: username})
            // .populate('services.service')
            // .populate('turnos')
            // .populate('stylists');
        console.log('getPeluByUsername getPeluqueriaById: ', getPeluByUsername);

        if (getPeluByUsername && getPeluByUsername.exists) return res.json(getPeluByUsername);
        res.status(404).send('No se trajo lo de la DB o no existe');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getPeluqueria,
    getPeluqueriaById,
    getPeluqueriaByUsername
};