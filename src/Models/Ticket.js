const pkg = require('mongoose');
const {Schema, model} = pkg;

const tickets = new Schema({
    total: {
        type: Number,
        require: true
    }
 


})

export default model("tickets", tickets);