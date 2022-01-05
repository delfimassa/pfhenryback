const pkg = require('mongoose');
const {Schema, model} = pkg;

const cart = new Schema({
    total: {
        type: Number,
        require: true
    }
 


})

export default model("cart", cart);