const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  orderItems: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "OrderItem",
      required: false,
    },
  ],
  shippingAddress1: {
    type: String,
    required: false,
  },
  shippingAddress2: {
    type: String,
  },
  city: {
    type: String,
    required: false,
  },
  zip: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
    default: "Pending",
  },
  totalPrice: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  dateOrdered: {
    type: Date,
    default: Date.now,
  },
});

exports.Order = mongoose.model("Order", orderSchema);
