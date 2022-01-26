const Cliente = require("../../../Models/Cliente");
const Ticket = require("../../../Models/Ticket");

const createTicket = async (req, res) => {
    const {
        peluqueria, //Id de pelu
        client, //Username de client
        service, //Id de service
        cart //Id de cart
    } = req.body;
    try {
        let findClient = await Cliente.findOne({ username: client });

        let newTicket = new Ticket({
            peluqueria,
            client: findClient._id,
            service,
            cart
        })
        await newTicket.save();

        if(newTicket) return res.send('Se creo el ticket');
        res.status(404).send('Hubo un problema al crear el ticket');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createTicket
};