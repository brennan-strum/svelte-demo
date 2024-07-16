import mongoose from "mongoose";

const Schema = mongoose.Schema;
const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    model: String,
    brand: String,
    price: Number,
  },
  { timestamp: true }
);

const Product = mongoose.model("product", productSchema);
export default Product;
