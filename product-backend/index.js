import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

try {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@${process.env.MONGO_DB}/`,
    {
      dbName: "demo",
    }
  );
  console.log("MongoDB Connected");
} catch (err) {
  console.log("MongoDB Connection Error: ", err);
}

await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});

console.log("Server started on port: ", 4000);
