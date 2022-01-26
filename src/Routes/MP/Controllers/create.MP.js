// SDK de Mercado Pago
const mercadopago = require("mercadopago");
// Agrega credenciales
mercadopago.configure({
  access_token:
    "APP_USR-8427911334865796-012222-2327a0e6b92eb33f905c39d157550f29-133171336",
});


const createMP = async (req, res) => {
   // Crea un objeto de preferencia
   let preference = {
    items: [
      {
        title: req.body.title,
        unit_price: parseInt(req.body.price),
        quantity: 1,
      },
    ],
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
};


module.exports = {
    createMP
};