const Servicios = require("../../../Models/Servicios");

const deleteService = async (req, res) => {
    const { id } = req.body;
    // console.log('body deleteService:', id);
    try {
        let deleted = await Servicios.findByIdAndUpdate(id, {
            exists: false
        }, { new: true });
        await deleted.save();
        // console.log('deleted deleteService:', deleted);

        if(deleted) return res.send(`Se elimino el servicio "${deleted.name}"`);
        res.status(404).send('hubo un problema al eliminar el servicio');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteService
};