// SDK de Mercado Pago
const { default: axios } = require("axios");
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token:
    "APP_USR-8714442290286267-012401-1c2b103d27d0f440225f3338462f018f-1062051657",
});

const createMP = async (req, res) => {
  // Crea un objeto de preferencia
  try {
    let preference = {
      items: [
        {
          title: req.body.title,
          unit_price: parseInt(req.body.price),
          quantity: 1,
        },
      ],
      "back_urls": {
        "success": "http://localhost:3000/home",
        "failure": "http://localhost:3000/home",
        "pending": "http://localhost:3000/home"
      },
      "auto_return": "approved",
    };

    mercadopago.preferences
      .create(preference)
      .then(function (response) {
        // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
        //   console.log(response.body)
        res.redirect(response.body.init_point)
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (error) {

  }
};


module.exports = {
  createMP
};