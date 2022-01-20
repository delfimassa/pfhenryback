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
    // stylist:{
    //     type: Schema.Types.ObjectId,
    //     ref: "peluquero",
    // },
    peluqueria:{
        type: Schema.Types.ObjectId,
        ref: 'peluquerias',
        required: true
    },
    vacancy:{
        type: Boolean,
        default: true,
    },
    phone:{ //del cliente? faltaria el nombre, id algo mas del client
        type: String
    }
})

module.exports = model("turno", turno);