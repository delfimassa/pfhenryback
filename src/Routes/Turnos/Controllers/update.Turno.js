const Turno = require("../../../Models/Turno");

const updateTurno = async (req, res) => {
    const { id } = req.body;
    // console.log('body updateTurno: ', id);
    try {
        let find = await Turno.findById(id);

        if(find.vacancy === true) {
            let update = await Turno.findByIdAndUpdate(id,{
                vacancy: false
            }, { new: true });
            await update.save();
            // console.log('update updateTurno: ', update);
    
            if(update) return res.send('Turno Actualizado');
            return res.status(404).send('Hubo un error al actualizar el turno');
        } else {
            let update = await Turno.findByIdAndUpdate(id,{
                vacancy: true
            }, { new: true });
            await update.save();
            // console.log('update updateTurno: ', update);
    
            if(update) return res.send('Turno Actualizado');
            return res.status(404).send('Hubo un error al actualizar el turno');
        }
        res.status(404).send('No encontro el turno');
    } catch (error) {
        console.log(error);
    }
};

const updateStateTurno = async (req, res) => {
    const { id } = req.body;
    try {
        let find = await Turno.findById(id);

        if(find.status === 'Pending') {
            let update = await Turno.findByIdAndUpdate(id,{
                status: 'payed'
            }, { new: true });
            await update.save();
    
            if(update) return res.send('Se actualizo el ticket');
            return res.status(404).sned('hubo un error al actualizar el ticket');
        }
        res.send('Ya esta pagado');
    } catch (error) {
        console.log(eror);
    }
}

module.exports = {
    updateTurno,
    updateStateTurno
};