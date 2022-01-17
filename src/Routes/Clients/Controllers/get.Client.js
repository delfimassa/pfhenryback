const Cliente = require("../../../Models/Cliente");

const getClient = async (req, res) => {
    const { name } = req.query;
    // console.log('query getClient:', name);
    try {
        let findClient = await Cliente.find({ exists: true });
        // console.log('findClient getClient:', findClient);
        
        // if(name !== '')  findClient = findClient.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
        // console.log('name getClient: ', findClient);
        
        if(findClient.length !== 0) return res.json(findClient);
        res.status(404).send('Hubo un problema al traer los datos');
    } catch (error) {
        console.log(error);
    }
};

const getClientById = async (req, res) => {
    const { id } = req.params;
    // console.log('params getClientById:', id);
    try {
        let findById = await Cliente.findById(id)
        // .populate('purhcaseHistory')
        // .populate('cart')
        // .populate('favs');
        // console.log('findById getClientById:', findById);

        if(findById && findById.exists)  return res.json(findById);
        res.status(404).send('Hubo un error al traer el cliente');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getClient,
    getClientById
};