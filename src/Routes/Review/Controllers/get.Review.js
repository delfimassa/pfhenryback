const Review = require("../../../Models/Review");

const getReview = async (req, res) => {
    const { peluqueria } = req.body;
    // console.log('body getReview: ', peluqueria);
    try {
        let findRev = await Review.find({ peluqueria: peluqueria })
        .populate('client', ['name', 'username']);
        console.log('findRev getReview: ', findRev);

        if(findRev) return res.json(findRev);
        res.status(404).send('Hubo un problema al traer las review');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getReview,
};