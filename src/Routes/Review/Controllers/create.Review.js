const { default: axios } = require("axios");
const Review = require("../../../Models/Review");

const createReview = async (req, res) => {
    const {
        rating,
        client,  // Id del cliente
        comment,
        peluqueria // Id de peluqueria
    } = req.body
    // console.log('body createReview: ', rating, client, comment);
    try {
        let find = await Review.findOne({client: client});
        // console.log('find createReview: ', find);
        
        if(find) return res.send('Ya diste una review');
        
        let newReview = new Review({
            rating,
            client,
            comment,
            peluqueria
        });
        await newReview.save();
        // console.log('newReview createReview: ', newReview);

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