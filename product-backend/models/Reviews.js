import mongoose from "mongoose";

const Schema = mongoose.Schema;
const reviewsSchema = new Schema(
  {
    user: String,
    rating: String,
    content: String,
    product_id: mongoose.ObjectId,
  },
  { timestamp: true }
);

const Review = mongoose.model("review", reviewsSchema);
export default Review;
