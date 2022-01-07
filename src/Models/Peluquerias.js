const pkg = require('mongoose');
const {Schema, model} = pkg;

const peluquerias = new Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
    },
    address: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    schedule: {
        type: TimeRanges,
    },
    services: [
       {type: Schema.Types.ObjectId,
        ref: "servicio",
        required: true}
    ]

})

export default model("peluquerias", peluquerias);