const pkg = require('mongoose');
const { Schema, model } = pkg;

const cliente = new Schema({
    name: {
        type: String,
        required: true,
    },
    // username es email
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
    purhcaseHistory:[{
        type: Schema.Types.ObjectId,
        ref: "ticket",
    }],
    favs:[{
        type: Schema.Types.ObjectId,
        ref: "favorito",
    }],
    cart:{
        type: Schema.Types.ObjectId,
        ref: "cart",
    },
    exists:{
        type: Boolean,
        default: true,
    }
})

module.exports= model("cliente", cliente);