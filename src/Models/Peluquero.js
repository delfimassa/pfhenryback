const pkg = require('mongoose');
const {Schema, model} = pkg;

const peluqueros = new Schema({
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
})

export default model("peluqueros", peluqueros);