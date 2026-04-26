const mongoose = require("mongoose");

const requestSchema = new mongoose.Schema({
  bloodGroup: String,
  hospital: String,
  lat: Number,
  lng: Number,
  status: {
    type: String,
    default: "searching"
  }
});

module.exports = mongoose.model("Request", requestSchema);