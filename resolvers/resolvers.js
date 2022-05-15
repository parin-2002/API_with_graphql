//you can use this file as well but i devided this file in diffrent part like query,post,user
const { Posts, User } = require("../db");

const resolvers = {
  Query: {
    //below this how you can add description
    hello: {
      description: "test query",
      resolve: () => {
        return "hello world!";
      },
    },
    getUser: (parent, args, contex) => {
      const { id } = args;
      return User.find((one) => one.id == id);
    },
    getAllUsers: (parent, args, contex) => {
      return User;
    },
    getPost: (parent, args, contex) => {
      const { id } = args;
      return Posts.find((one) => one.id == id);
    },
    getAllPosts: (parent, args, contex) => {
      return Posts;
    },
  },
  Post: {
    user: (parent, args, contex) => {
      const { userid } = parent;
      return User.find((one) => one.id == userid);
    },
  },
  User: {
    posts: (parent, args, contex) => {
      const { id } = parent;
      return Posts.filter((one) => one.userid == id);
    },
  },
};

module.exports = { resolvers };
