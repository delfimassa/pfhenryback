const pkg = require('mongoose');
const {Schema, model} = pkg;

const payment = new Schema({
    method: {
        type: String,
        require: true
    },
    exists:{
        type: Boolean,
        default: true,
    }
 
})

module.exports = model("payment", payment);