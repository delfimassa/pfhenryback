const Review = require("../../../Models/Review");

const createReview = async (req, res) => {
    const {
        rating,
        user,
        comment
    } = req.body
    try {
        let newreview = new Review({
            rating,
            user,
            comment
        })
        await newreview.save();

        let findNew = await Review.findById(newreview._id);
        if(findNew) return res.send('Se creo correctamente la review');
        res.status(404).send('Hubo un error al crear la review');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createReview
};