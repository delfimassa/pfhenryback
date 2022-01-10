const Peluquero = require("../../../Models/Peluquero");

const deletePeluquero = async (req, res) => {
    const { id } = req.body;
    // console.log('body deletePeluquero:', id);
    try {
        let deleted = await Peluquero.findByIdAndUpdate(id, {
            exists: false
        }, { new: true });
        await deleted.save();
        // console.log('deleted deletePeluquero:', deleted);

        if(deleted) return res.send(`El peluquero "${deleted.name}" fue eliminado`);
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deletePeluquero
};