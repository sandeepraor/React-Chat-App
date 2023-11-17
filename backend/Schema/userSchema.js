const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  verified: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("user", userSchema);
