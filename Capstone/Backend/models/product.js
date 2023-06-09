const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const productSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  imageUrl: { type: String, required: true },
  productRating: { type: String, required: true },
  category: { type: Number, required: true },
});

module.exports = mongoose.model("Product", productSchema);

