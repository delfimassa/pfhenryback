const pkg = require('mongoose');
const {Schema, model} = pkg;

const clientes = new Schema({
    name: {
        type: String,
        required: true,
    },
    ///username es email
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
})

export default model("clientes", clientes);