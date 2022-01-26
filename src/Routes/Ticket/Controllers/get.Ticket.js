const Ticket = require('../../../Models/Ticket');
const Cliente = require('../../../Models/Cliente');

const getTicketPelu = async (req, res) => {
    const { peluqueria } = req.body;
    try {
        let find = await Ticket.find({ peluqueria: peluqueria })
        .populate('client', ['username', 'name'])
        .populate('peluqueria', ['name', 'address', 'city', 'state'])
        // .populate('cart', ['price', 'total'])
        .populate('service', ['name', 'price']);
        
        if(find.length > 0) return res.json(find);
        res.status(404).send('Hubo un error al traer los tickets de la pelu');
    } catch (error) {
        console.log(error);
    }
};

const getTicketByClient = async (req, res) => {
    const { client } = req.body;
    try {
        let findClient = await Cliente.findOne({ username: client })
        console.log('findClient getTicketByClient: ', findClient._id);
        

        if(findClient) {
            let findByClient = await Ticket.find({ client: findClient._id })
            .populate('client', ['username', 'name'])
            .populate('peluqueria', ['name', 'address', 'city', 'state'])
            .populate('cart', ['price', 'total'])
            .populate('service', ['name']);
            console.log('findByClient getTicketByClient: ', findByClient);
    
            if(findByClient.length > 0)  return res.json(findByClient);
            return res.status(404).send('No pudo encontrar los tickets');
        }
        res.status(404).send('No se encontro el cliente');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getTicketByClient,
    getTicketPelu
};