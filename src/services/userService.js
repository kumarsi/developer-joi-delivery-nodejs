const SeedData = require("../seedData/seedData");

const userService = {
  fetchUserById(userId) {
    return (
      SeedData.getAllUsers().find((user) => userId === user.userId) || null
    );
  },
};

module.exports = userService;
