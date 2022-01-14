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
    peluqueria:{
        type: Schema.Types.ObjectId,
        ref: 'peluqueria',
        required: true
    },
    vacancy:{
        type: Boolean,
        default: true,
    },
    phone:{
        type: String
    }
})

module.exports = model("turno", turno);