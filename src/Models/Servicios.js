const pkg = require("mongoose");
const { Schema, model } = pkg;

const servicio = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  duration: {
    type: TimeRanges,
    required: true,
  },
  appointment: [
    {
      type: Schema.Types.ObjectId,
      ref: "turno",
    },
  ],
  exists: {
    type: Boolean,
    default: true,
  },
});

module.exports = model("servicio", servicio);
