const Review = require("../../../Models/Review");

const getReview = async (req, res) => {
    try {
        let findRev = await Review.find()
        .populate('client', ['name', 'username']);

        if(findRev) return res.json(findRev);
        res.status(404).send('Hubo un problema al traer las review');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getReview,
};