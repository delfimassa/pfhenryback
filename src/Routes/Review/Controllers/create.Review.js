const { default: axios } = require("axios");
const Review = require("../../../Models/Review");
const Cliente = require("../../../Models/Cliente");

const createReview = async (req, res) => {
  const {
    rating,
    clientt, // email del cliente 
    comment,
    peluqueria, // Id de peluqueria
  } = req.body;
  console.log("lo que llega del front: ", rating, clientt, comment, peluqueria);  
  
  try {
    console.log("Entro al try");

    let findClient = await Cliente.findOne({ username: clientt });
    console.log("cliente encontrado con el email: ", findClient);
    let idClient = findClient._id;
    console.log('Id del cliente', idClient);

    let find = await Review.findOne({ client: idClient, peluqueria: peluqueria.id });
    console.log("Cliente que ya mando review: ", find);
    if (find) return res.status(404).send("Ya diste una review"); 

    let newReview = new Review({
      rating,
      client: idClient,
      username: clientt,
      comment,
      peluqueria: peluqueria.id,
    });
    await newReview.save();
    console.log("newReview:", newReview);

    if (newReview) {
      await axios.put(
        `http://localhost:4000/peluqueria/update/rating/${peluqueria.id}`, ///
        { newReview }
      );
      return res.send("Se creo correctamente la review");
    }
    res.status(404).send("Hubo un error al crear la review");
  } catch (error) {
      console.log('Entro aca');
    console.log(error);
  }
};

module.exports = {
  createReview,
};
