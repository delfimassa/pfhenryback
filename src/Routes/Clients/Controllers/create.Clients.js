const Cliente = require("../../../Models/Cliente");

const createClient = async (req, res) => {
    const {
        name,
        username,
        password,
        address,
        phone
    } = req.body
    // console.log('body createClient:', name, username, password, address, phone);
    try {
        let newClient = new Cliente({
            name,
            username,
            password,
            address,
            phone
        })
        await newClient.save();
        // console.log('newClient createClient:', newClient);
        
        let findNew = await Cliente.findById(newClient._id);
        // console.log('findNew createClient:', findNew);
        
        if(findNew)  return res.send('Se creo correctamente el cliente');
        res.status(404).send('Hubo un error al crear el cliente');
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createClient
};