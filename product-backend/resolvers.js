// import stub from "./stub.js";
// import crypto from "crypto";
import Product from "./models/Products.js";
import Review from "./models/Reviews.js";
import mongoose from "mongoose";

export const resolvers = {
  Query: {
    // STUB DATA
    // products() {
    //   return stub.products;
    // },
    // product(_, args) {
    //   return stub.products.find((product) => product.id === args.id);
    // },
    // review() {
    //   return stub.reviews;
    // },
    // review(_, args) {
    //   return stub.reviews.find((review) => review.id === args.id);
    // },

    // MONGO DB DATA
    async products() {
      const products = await Product.find();
      return products;
    },
    async product(_, args) {
      const product = await Product.findById(args.id);
      return product;
    },
    async reviews() {
      const reviews = await Review.find();
      return reviews;
    },
    async review(_, args) {
      const reviews = await Review.findById(args.id);
      return reviews;
    },
  },

  Product: {
    // STUB DATA
    // reviews(parent) {
    //   return stub.reviews.filter((review) => review.product_id === parent.id);
    // },

    // MONGO DB DATA
    async reviews(parent) {
      const reviews = await Review.find({
        product_id: new mongoose.Types.ObjectId(parent.id),
      });
      return reviews;
    },
  },

  Review: {
    // STUB DATA
    // product(parent) {
    //   return stub.products.find((product) => product.id === parent.product_id);
    // },

    // MONGO DB DATA
    async product(parent) {
      const product = await Product.findById(parent.product_id);
      return product;
    },
  },

  Mutation: {
    // STUB DATA
    // createProduct(_, args) {
    //   let product = { ...args.product, id: crypto.randomUUID() };
    //   stub.products.push(product);

    //   return product;
    // },
    // updateProduct(_, args) {
    //   stub.products = stub.products.map((product) => {
    //     if (product.id === args.id) {
    //       return { ...product, ...args.updates };
    //     }

    //     return product;
    //   });

    //   return stub.products.find((product) => product.id === args.id);
    // },
    // deleteProduct(_, args) {
    //   stub.products = stub.products.filter((product) => product.id !== args.id);
    //   return stub.products;
    // },

    // MONGO DB DATA
    async createProduct(_, args) {
      const newProduct = new Product(args.product);
      const product = await newProduct.save();

      return product;
    },

    async updateProduct(_, args) {
      const id = new mongoose.Types.ObjectId(args.id);
      const product = await Product.findOneAndUpdate(
        { _id: id },
        args.updates,
        {
          new: true,
        }
      );

      return product;
    },

    async deleteProduct(_, args) {
      const id = new mongoose.Types.ObjectId(args.id);
      await Product.deleteOne({ _id: id });

      const products = await Product.find();
      return products;
    },
  },
};
