const Cliente = require("../../../Models/Cliente");



const getClient = async (req, res) => {
    const { name } = req.query;
    try {
        let findClient = await Cliente.find({ exists: true });

        if(name !== '')  findClient = findClient.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
        // console.log('name getClient: ', findClient);

        if(findClient.length !== 0) return res.json(findClient);
        res.status(404).send('Hubo un problema al traer los datos');
    } catch (error) {
        console.log(error);
    }
};

const getClientById = async (req, res) => {
    const { id } = req.params;
    try {
        let findClientById = await Cliente.findById(id)
        // .populate('purhcaseHistory')
        // .populate('cart')
        // .populate('favs');

        if(findClientById && findClientById.exists)  return res.json(findClientById);
        res.status(404).send('Hubo un error al traer el cliente');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getClient,
    getClientById
};