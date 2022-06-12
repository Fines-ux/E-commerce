const mongoose = require("mongoose");
const orderItemSchema = mongoose.Schema({
  quantity: {
    type: Number,
  },

  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
});

exports.OrderItem = mongoose.model("OrderItem", orderItemSchema);
