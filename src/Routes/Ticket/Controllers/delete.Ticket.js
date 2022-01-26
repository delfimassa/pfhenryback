const Ticket = require("../../../Models/Ticket");

const deleteTicket = async (req, res) => {
    const { id } = req.body
    try {
        let deleted = await Ticket.findByIdAndUpdate(id, {
            exists: false
        }, { new: true });
        await deleted.save();

        if(deleted) return res.sned('Se elimino el ticket');
        res.status(404).send('Hubo un error al eliminar el ticket');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteTicket
};