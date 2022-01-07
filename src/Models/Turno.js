const pkg = require('mongoose');
const {Schema, model} = pkg;

const turno = new Schema({
    service: {
        type: String,
        required: true,
    },
    appointmentStart: {
        type: Date,
        required: true,
    },
    appointmentEnd: {
        type: Date,
        required: true,
    },
    stylist:{
        type: String,
    },
    vacancy:{
        type: Boolean,
        default: true,
    }
})

export default model("turno", turno);