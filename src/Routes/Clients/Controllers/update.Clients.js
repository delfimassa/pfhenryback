const Cliente = require("../../../Models/Cliente");

const updateClient = async (req, res) => {
    const {
        id,
        name,
        address,
        phone,
        city,
        state
    } = req.body;
    // console.log('body updateClient:', id, name, address, phone, city, state);
    try {
        let update = await Cliente.findByIdAndUpdate(id, {
            name: name,
            address: address,
            phone: phone,
            city: city,
            state: state
        }, { new: true });
        await update.save();
        // console.log('update updateClient:', update);
        
        if(update) return res.send('Se actualizo tu perfil');
        res.status(404).send('hubo un problema al actualizar tu perfil');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateClient
};