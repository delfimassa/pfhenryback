const Review = require("../../../Models/Review");

const updateReview = async (req, res) => {
    const {  
        id,
        rating,
        comment
    } = req.body;
    try {
        let update = await Review.findByIdAndUpdate(id, {
            rating: rating,
            comment: comment
        }, { new: true });
        await update.save();

        if(update)  return res.send('Actualizado');
        res.status(404).send('Hubo un problema al actualiazar');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateReview
};