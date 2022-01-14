const pkg = require('mongoose');
const {Schema, model} = pkg;

const cart = new Schema({
    price: {
        type: String,
        require: true
    },
    total: {
        type: String,
        required: true
    },
    service: {
        type: Schema.Types.ObjectId,
        ref: "servicio",
        required: true
    },
    client: {
        type: String,
        required: true
    }
})

module.exports = model("cart", cart);