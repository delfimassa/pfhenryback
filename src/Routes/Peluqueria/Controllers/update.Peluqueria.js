const Peluqueria = require("../../../Models/Peluqueria");

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
        stylists // Array de peluqueros
    } = req.body;
    console.log('body updatePeluqueria:', id, name, avatar, address, city, state, phone, schedule, services, stylists)
    try {
        let update = await Peluqueria.findByIdAndUpdate(id, {
            name: name,
            avatar: avatar,
            address: address,
            city: city,
            state: state,
            phone: phone,
            schedule: schedule,
            services: services,
            stylists: stylists,
        }, { new: true });
        await update.save();
        console.log('update updatePeluqueria:', update);

        if(update) return res.send(`La peluqeria ${update.name} se actualizo`);
        res.status(404).send('Hubo un problema al actualizar la peluqueria');
    } catch (error) {
        console.log(error);
    }
};

const updateRating = async (req, res) => {
    const { id } = req.params;
    const { newReview } = req.body; 
    try {
        let find = await Peluqueria.findById(id);

        if (find) {
            let { cinco, cuatro, tres, dos, uno } = find.numRating;
            let count;
            let change;
            switch(newReview.rating) {
                case 1:
                    count = uno + 1;
                    change = 'uno';
                    break;
                case 2:
                    count = dos + 1;
                    change = 'dos';
                    break;
                case 3:
                    count = tres + 1;
                    change = 'tres';
                    break;
                case 4:
                    count = cuatro + 1;
                    change = 'cuatro';
                    break;
                case 5:
                    count = cinco + 1;
                    change = 'cinco';
                    break;
                default:
                    return res.send('Hubo un error, los nros tiene que ser entre 1 y 5');
            }
            let multi = (5 * cinco) + (4 * cuatro) + (3 * tres) + (2 * dos) + (1 * uno);
            let sum = cinco + cuatro + tres + dos + uno;
            const newRating = multi / sum;

            let update = await Peluqueria.findByIdAndUpdate(id, {
                rating: newRating,
                numRating: {
                    ...find.numRating,
                    [change]: count
                },
                reviews: [...find.reviews, newReview._id]
            });
            await update.save();

            if(update) return res.send('Se actualizo el rating');
            return res.status(404).send('hubo un problema al actualizar el rating');
        }
        res.status(404).send('No se encontro la peluqueria');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    updatePeluqueria,
    updateRating
};