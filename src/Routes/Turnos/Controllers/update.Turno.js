const Turno = require("../../../Models/Turno");

const updateTurno = async (req, res) => {
    const { id } = req.body;
    // console.log('body updateTurno: ', id);
    try {
        let update = await Turno.findByIdAndUpdate(id,{
            vacancy: false
        }, { new: true });
        await update.save();
        // console.log('update updateTurno: ', update);

        if(update) return res.send('Turno Actualizado');
        res.status(404).send('Hubo un error al actualizar el turno');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateTurno
};