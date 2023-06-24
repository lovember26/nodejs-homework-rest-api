const { registerUser } = require("./registerUser");

const { loginUser } = require("./loginUser");

const getCurrent = require("./getCurrent");
const logout = require("./logout");

const { updateSubscription } = require("./updateSubscription");

const { updateAvatar } = require("./updateAvatar");

module.exports = {
  registerUser,
  loginUser,
  getCurrent,
  logout,
  updateSubscription,
  updateAvatar,
};
