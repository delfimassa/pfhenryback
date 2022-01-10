const pkg = require('mongoose');
const { Schema, model } = pkg;

const turno = new Schema({
    service: {
        type: Schema.Types.ObjectId,
        ref: 'servicio',
        required: true,
    },
    time:{
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    stylist:{
        type: Schema.Types.ObjectId,
        ref: "peluquero",
    },
    vacancy:{
        type: Boolean,
        default: true,
    },
    exists: {
        type: Boolean,
        default: true
    }
})

module.exports = model("turno", turno);