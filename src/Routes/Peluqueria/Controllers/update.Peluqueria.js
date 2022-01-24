const Peluqueria = require("../../../Models/Peluqueria");

const addTurno = async (req, res) => {
  const { id } = req.params;
  const { newTurno } = req.body;
  // console.log('params addTurno: ', id);
  // console.log('body addTurno: ', newTurno);
  try {
    let find = await Peluqueria.findById(id);
    // console.log('find addTurno: ', find);

    let add;
    if(find.turnos) {
      add = await Peluqueria.findByIdAndUpdate(id, {
        turnos: [...find.turnos, newTurno._id]
      }, { new: true });
      await add.save();
    } else {
      let add = await Peluqueria.findByIdAndUpdate(id, {
        turnos: [newTurno._id]
      }, { new: true });
      await add.save();
    }
    // console.log('add addTurno: ', add);

    if(add)  return res.send('Turno agregado');
    res.status(404).send('No se pudo agregar el turno');
  } catch (error) {
    console.log(error);
  }
};

const updatePeluqueria = async (req, res) => {
  const {
    id,
    name,
    avatar,
    address,
    city,
    state,
    phone,
    schedule,
    services, // Array de servicios
    stylists, // Array de peluqueros
  } = req.body;
  // console.log('body updatePeluqueria:', id, name, avatar, address, city, state, phone, schedule, services, stylists)
  try {
    let update = await Peluqueria.findByIdAndUpdate(
      id,
      {
        name: name,
        avatar: avatar,
        address: address,
        city: city,
        state: state,
        phone: phone,
        schedule: schedule,
        services: services,
        stylists: stylists,
      },
      { new: true }
    );
    await update.save();
    // console.log('update updatePeluqueria:', update);

    if (update) return res.send(`La peluqeria ${update.name} se actualizo`);
    res.status(404).send("Hubo un problema al actualizar la peluqueria");
  } catch (error) {
    console.log(error);
  }
};

const updateRating = async (req, res) => {
  let id = req.params.id;
  console.log("id de la peluqueria q llega x params: ", id);
  let { newReview } = req.body;
  console.log("review que llego xbody: ", newReview);
  try {
    let peluToUpdate = await Peluqueria.findById(id);
    console.log("Peluqueria encontrada con ese id que llego x params: ", peluToUpdate);

    if (peluToUpdate) {
      let { cien, ochenta, sesenta, cuarenta, veinte } = peluToUpdate.numRating;
      let count;
      let change;
      switch (newReview.rating) {
        case 1:
          veinte = veinte+1;
          change = "veinte";
          count = veinte;
          break;
        case 2:
          cuarenta= cuarenta+1
          change = "cuarenta";
          count = cuarenta;
          break;
        case 3:
          sesenta = sesenta + 1;
          change = "sesenta";
          count = sesenta;
          break;
        case 4:
          ochenta = ochenta + 1;
          change = "ochenta";
          count = ochenta;
          break;
        case 5:
          cien = cien + 1;
          change = "cien";
          count = cien;
          break;
        default:
          return res.send("Hubo un error, los nros tiene que ser entre 1 y 5");
      }
      let multi = (100 * cien) + (80 * ochenta) + (60 * sesenta) + (40 * cuarenta) + (20 * veinte);
      let sum = cien + ochenta + sesenta + cuarenta + veinte;
      let newRating = Math.floor(multi / sum)  || 0;

      let update = await Peluqueria.findByIdAndUpdate(id, {
        rating: newRating,
        numRating: {
          ...peluToUpdate.numRating,
          [change]: count,
        },
        reviews: [...peluToUpdate.reviews, newReview._id], ///
      },{new:true});
      await update.save();
      console.log('update updateRating: ', update);

      if (update) return res.send("Se actualizo el rating");
      return res.status(404).send("hubo un problema al actualizar el rating");
    }
    res.status(404).send("No se encontro la peluqueria");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  updatePeluqueria,
  updateRating,
  addTurno
};
