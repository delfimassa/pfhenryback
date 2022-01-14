const Review = require("../../../Models/Review");

const deleteReview = async (req, res) => {
    const { id } = req.body;
    try {
        let deleted = await Review.findByIdAndDelete(id);
        await deleted.save();

        if(deleted) return res.send('Se elimino la review');
        res.status(404).send('Hubo un problema al eliminar la review');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    deleteReview
};