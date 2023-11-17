const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    friend: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    status: {
      type: String,
      enum: ["accepted", "pending", "rejected"],
      required: true,
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.Model("contact", contactSchema);
