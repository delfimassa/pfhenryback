const Cliente = require("../../../Models/Cliente");

const deleteClient = async (req, res) => {
    const { id } = req.body;
    // console.log('body deleteClient:', id);
    try {
        let deleted = await Cliente.findByIdAndUpdate(id, {
            exists: false
        }, { new: true });
        await deleted.save();
        // console.log('deleted deleteClient:', deleted);
        
        if(deleted) return res.send(`El cliente ${deleted.name} fue eliminado de la pagina`);
        res.status(404).send('Hubo un problema al eliminar al cliente');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteClient
};