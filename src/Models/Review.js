const pkg = require('mongoose');
const { Schema, model } = pkg;

const review = new Schema({
    rating:{
        type: Number,
        required: true
    },
    // user:{
    //     type: Schema.Types.ObjectId,
    //     ref: "client",
    //     required: true  
    // },
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