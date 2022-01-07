const pkg = require('mongoose');
const {Schema, model} = pkg;

const ticket = new Schema({
    cart: {
        type: Schema.Types.ObjectId,
        ref: "cart",
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "client",
        required: true
    },
    exists: {
        type: Boolean,
        default: true,
    }
})

module.exports = model("ticket", ticket);