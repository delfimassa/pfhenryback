const Review = require("../../../Models/Review");

const updateReview = async (req, res) => {
    const {  
        id,
        rating,
        comment
    } = req.body;
    // console.log('body updateReview: ', id, rating, comment);
    try {
        let update = await Review.findByIdAndUpdate(id, {
            rating: rating,
            comment: comment
        }, { new: true });
        await update.save();
        // console.log('update updateReview: ', update);

        if(update)  return res.send('Actualizado');
        res.status(404).send('Hubo un problema al actualiazar');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updateReview
};