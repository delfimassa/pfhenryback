const pkg = require('mongoose');
const {Schema, model} = pkg;

const peluquero = new Schema({
    name: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        require: true
    },
    // calendar: {
    //     type: String,
    //     require: true
    // },
    exists:{
        type: Boolean,
        default: true,
    }
})

module.exports =  model("peluquero", peluquero);