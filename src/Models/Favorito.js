const pkg = require('mongoose');
const { Schema, model } = pkg;

const favorito = new Schema({
    client: {
        type: String,
        // required: true
    },
    peluqueria:{
        type: Schema.Types.ObjectId,
        ref: "peluquerias",
    },
    exists:{
        type: Boolean,
        default: true,
    }
})

module.exports= model("favorito", favorito);