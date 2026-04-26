const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  lat: Number,
  lng: Number,
  available: Boolean
});

module.exports = mongoose.model("Donor", donorSchema);