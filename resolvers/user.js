// const { Posts } = require("../db");

module.exports = {
  posts: (parent, args, { Posts }) => {
    const { id } = parent;
    return Posts.filter((one) => one.userid == id);
  },
};
