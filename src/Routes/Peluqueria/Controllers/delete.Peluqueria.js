const Peluquerias = require("../../../Models/Peluqueria");

const deletePeluqueria = async (req, res) => {
    const { id } = req.body;
    // console.log('body deletePeluqueria:', id);
    try {
        let deleted = await Peluquerias.findByIdAndUpdate(id, {
            exists: false
        }, { new: true });
        await deleted.save();
        // console.log('deleted deletePeluqueria:', deleted);
        
        if(deleted) return res.json(`La peluqueria "${deleted.name}" fue eliminada`);
        res.status(404).send('Hubo un error al eliminar la peluqueria');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deletePeluqueria
};