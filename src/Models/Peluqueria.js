const pkg = require('mongoose');
const {Schema, model} = pkg;

const peluquerias = new Schema({
    name: {
        type: String,
        required: true,
    },
    ///username es email
    username: {
        type: String,
        required: true,
        // unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    rating: {
        type: Number,
        defalut: 3
    },
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    schedule: {
        type: String,
        required: true,
    },
    services: [{
        price: {
            type: String,
            required: true
        },
        service: {
            type: Schema.Types.ObjectId,
            ref: "servicio",
            required: true
        }
    }],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: "review",
    }],
    stylists:[{
        type: Schema.Types.ObjectId,
        ref: "peluquero",
    }],
    numRating: {
        uno: {
            type: Number,
            default: 1
        },
        dos: {
            type: Number,
            default: 1
        },
        tres: {
            type: Number,
            default: 1
        },
        cuatro: {
            type: Number,
            default: 1
        },
        cinco: {
            type: Number,
            default: 1
        },
    },
    exists:{
        type: Boolean,
        default: true,
    }
})

module.exports = model("peluquerias", peluquerias);