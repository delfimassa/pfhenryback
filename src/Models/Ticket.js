const pkg = require('mongoose');
const {Schema, model} = pkg;

const ticket = new Schema({
    // cart: {
    //     type: Schema.Types.ObjectId,
    //     ref: "cart",
    //     // required: true
    // },
    peluqueria: {
        type: Schema.Types.ObjectId,
        ref: 'peluquerias',
        // required: true
    },
    service: {
        type: Schema.Types.ObjectId,
        ref: "servicio",
        // required: true
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: "cliente",
        // required: true
    },
    status: {
        type: String,
        default: 'Pending'
    },
    exists: {
        type: Boolean,
        default: true
    }
})

module.exports = model("ticket", ticket);