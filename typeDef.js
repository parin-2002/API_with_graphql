const { gql } = require("apollo-server-express");
const { Kind, GraphQLScalarType } = require("graphql");

//some of common tye String,Int,Float,Boolean,[String],[Custom type like coures,user]
//bye three quotes like """ add description """ this is how we can add description
const typeDefs = gql`
  scalar Date

  type Query {
    hello: String
    """
    get a user
    """
    getUser(id: ID!): User
    getAllUsers: [User!]!
    getPost(id: ID!): Post
    getAllPosts(filter: containFilterInput): [Post!]
  }

  """
  user data object
  """
  type User {
    id: ID!
    """
    Unique ID
    """
    username: String!
    email: String!
    age: Int
    posts: [Post]
  }

  type Post {
    id: ID!
    typeOfData: typeOfData!
    link: String!
    publishDate: Date!
    user: User!
    comments: [Comment]
  }

  enum typeOfData {
    image
    video
    audio
    text
    quote
    vision
  }

  type Comment {
    id: ID!
    comment: String!
    user: User
  }

  input containFilterInput {
    typeOfData: typeOfData
  }

  # we use mutatin for change in data like update,delete,create
  type Mutation {
    addUser(input: userInput): User
    deleteUser(id: ID!): Boolean
    updateUser(input: userInput): User
  }

  input userInput {
    id: ID
    username: String!
    email: String!
    age: Int
  }
`;

//custom type with scalar
const DateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

module.exports = { typeDefs };
