// const { User } = require("../db");

module.exports = {
  user: (parent, args, { User }) => {
    const { userid } = parent;
    return User.find((one) => one.id == userid);
  },
  comments: ({ id }, args, { Comments }) => {
    return Comments.filter((one) => one.postid == id);
  },
};
