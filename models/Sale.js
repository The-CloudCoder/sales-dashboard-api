const mongoose = require("mongoose");

const SaleSchema = new mongoose.Schema({
  product: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  userId: { type: String, required: true }, // Firebase user ID
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Sale", SaleSchema);
