const Cliente = require("../../../Models/Cliente");



const createClient = async (req, res) => {
    const {
        name,
        username,
        password,
        address,
        phone
    } = req.body
    try {
        let newClient = new Cliente({
            name,
            username,
            password,
            address,
            phone
        })
        await newClient.save();

        let findNew = await Cliente.findById(newClient._id);

        if(findNew)  return res.send('Se creo correctamente el cliente');
        res.status(404).send('Hubo un error al crear el cliente');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createClient
};