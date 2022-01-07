const pkg = require('mongoose');
const { Schema, model } = pkg;

const favorito = new Schema({
    // username es email
    user: {
        type: Schema.Types.ObjectId,
        ref: "cliente",
    },
    peluqueria:[{
        type: Schema.Types.ObjectId,
        ref: "peluquerias",
    }],
    exists:{
        type: Boolean,
        default: true,
    }
})

module.exports= model("favorito", favorito);