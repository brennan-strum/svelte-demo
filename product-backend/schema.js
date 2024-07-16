export const typeDefs = `#graphql
  type Product {
    id: ID!
    title: String!
    description: String!
    model: String!
    brand: String!
    price: Float!
    reviews: [Review!]
  }

  type Review {
    id: ID!
    user: String!
    rating: Float!
    content: String!
    product: Product!
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    product(id: ID!): Product
    review(id: ID!): Review
    products: [Product]
    reviews: [Review]
  }

  input NewProduct {
    title: String!
    description: String!
    model: String!
    brand: String!
    price: Float!
  }

  input EditProduct {
    title: String
    description: String
    model: String
    brand: String
    price: Float
  }

  type Mutation {
    createProduct(product: NewProduct): Product
    updateProduct(id: ID!, updates: EditProduct): Product
    deleteProduct(id: ID!): [Product]
  }
`;
