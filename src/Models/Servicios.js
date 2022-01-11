const pkg = require("mongoose");
const { Schema, model } = pkg;

const servicio = new Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  exists: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("servicio", servicio);
