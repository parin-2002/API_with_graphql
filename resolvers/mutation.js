const { User } = require("../db");

module.exports = {
  addUser: (parent, { input }, { User }) => {
    input.id = Math.floor(Math.random() * 1000000000000);
    User.push(input);
    return input;
  },
  deleteUser: (parent, { id }, contex) => {
    User = User.filter((one) => one.id != id);
    return true;
  },
  updateUser: (parent, { input }, { User }) => {
    //update user
    return input;
  },
};
