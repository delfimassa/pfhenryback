const pkg = require('mongoose');
const {Schema, model} = pkg;

const servicio = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration:{
        type: TimeRanges,
        required:true
    }
})

export default model("servicio", servicio);