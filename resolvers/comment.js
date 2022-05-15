module.exports = {
  user: ({ userid }, args, { User }) => {
    return User.find((one) => one.id == userid);
  },
};
