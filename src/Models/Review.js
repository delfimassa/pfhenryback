const pkg = require('mongoose');
const { Schema, model } = pkg;

const review = new Schema({
    rating:{
        type: Number,
        required: true
    },
    client:{
        type: Schema.Types.ObjectId,
        ref: "cliente",
        required: true  
    },
    peluqueria: {
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    exists:{
        type: Boolean,
        default: true,
    }
});

module.exports = model('review', review);