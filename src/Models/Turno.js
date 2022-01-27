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
    status: {
        type: String,
        default: 'Pending'
    },
    client:{ //del cliente? faltaria el nombre, id algo mas del client
        type: Schema.Types.ObjectId,
        ref: 'cliente',
        required: true
    },
    exists:{
        type: Boolean,
        defalut: true
    }
})

module.exports = model("turno", turno);