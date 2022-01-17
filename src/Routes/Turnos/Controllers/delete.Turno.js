const Turno = require("../../../Models/Turno");

const deleteTurno = async (req, res) => {
    const { id } = req.body;
    // console.log('body deleteTurno: ', id);
    try {
        let deleted = await Turno.findByIdAndDelete(id);
        await deleted.save();
        // console.log('deleted deleteTurno: ', deleted);

        if(deleted) return res.send('Se calnselo el turno');
        res.send('Hubo un error al cancelar el turno');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteTurno
};