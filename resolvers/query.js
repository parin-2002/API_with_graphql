// const { Posts, User } = require("../db");

module.exports = {
  //below this how you can add description
  hello: {
    description: "test query",
    resolve: (parent, args, contex) => {
      contex.test(); //contex can be accessed in every resolver and defined inside new ApolloSever as a argument
      return "hello world!";
    },
  },
  getUser: (parent, args, { User }) => {
    const { id } = args;
    return User.find((one) => one.id == id);
  },
  getAllUsers: (parent, args, { User }) => {
    return User;
  },
  getPost: (parent, args, { Posts }) => {
    const { id } = args;
    return Posts.find((one) => one.id == id);
  },
  getAllPosts: (parent, { filter }, { Posts }) => {
    if (filter?.typeOfData) {
      return Posts.filter((one) => one.typeOfData == filter.typeOfData);
    }
    return Posts;
  },
};
