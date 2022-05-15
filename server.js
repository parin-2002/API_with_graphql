const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const { typeDefs } = require("./typeDef");
// const { resolvers } = require("./resolvers/resolvers");
const query = require("./resolvers/query");
const user = require("./resolvers/user");
const post = require("./resolvers/post");
const comment = require("./resolvers/comment");
const mutation = require("./resolvers/mutation");
const { Posts, User, Comments } = require("./db");

// setup apollo server and listen
async function setupServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    // resolvers,
    resolvers: {
      Query: query,
      Post: post,
      User: user,
      Comment: comment,
      Mutation: mutation,
    },
    //contex can be accessed in every resolver and defined inside new ApolloSever as a argument
    context: {
      test: () => {
        console.log("test");
      },
      User,
      Posts,
      Comments,
    },
  });

  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("listning on port 4000");
  });
}
setupServer();
//
