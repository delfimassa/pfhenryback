const Ticket = require("../../../Models/Ticket");

const updateTicket = async (req, res) => {
    const { id } = req.body;
    try {
        let find = await Ticket.findById(id)

        if(find.status === 'Pendig') {
            let update = await Ticket.findByIdAndUpdate(id,{
                status: 'payed'
            }, { new: true });
            await update.save();
    
            if(update) return res.send('Se actualizo el ticket');
            return res.status(404).sned('hubo un error al actualizar el ticket');
        }
        res.send('Ya esta pagado');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateTicket
};