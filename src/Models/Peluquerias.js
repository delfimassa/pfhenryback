const pkg = require('mongoose');
const {Schema, model} = pkg;

const peluquerias = new Schema({
    name: {
        type: String,
        required: true,
    },

})

export default model("peluquerias", peluquerias);