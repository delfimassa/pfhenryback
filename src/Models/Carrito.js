const pkg = require('mongoose');
const {Schema, model} = pkg;

const cart = new Schema({
    total: {
        type: Number,
        require: true
    },
    service: {
        type: Schema.Types.ObjectId,
        ref: "servicio",
        required: true
    },
    exists: {
        type: Boolean,
        default: true
    }
})

module.exports = model("cart", cart);