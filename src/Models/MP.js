const pkg = require('mongoose');
const {Schema, model} = pkg;

const payment = new Schema({
    method: {
        type: String,
        require: true
    }
 
})

export default model("payment", payment);