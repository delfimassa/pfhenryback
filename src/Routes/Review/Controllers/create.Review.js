const { default: axios } = require("axios");
const Review = require("../../../Models/Review");

const createReview = async (req, res) => {
    const {
        rating,
        client,  //Id del cliente
        comment
    } = req.body
    try {
        let find = await Review.findOne({client: client});

        if(find) return res.send('Ya diste una review');

        let newReview = new Review({
            rating,
            client,
            comment
        });
        await newReview.save();

        // let findNew = await Review.findById(newreview._id);
        if(newReview) {
            await axios.put(`http://localhost:4000/peluqueria/update/rating/${id}`, { newReview });
            return res.send('Se creo correctamente la review');
        }
        res.status(404).send('Hubo un error al crear la review');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createReview
};