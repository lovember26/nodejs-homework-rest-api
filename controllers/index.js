const {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
} = require("./contacts");

const {
  registerUser,
  loginUser,
  getCurrent,
  logout,
  updateSubscription,
} = require("./users");

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
  registerUser,
  loginUser,
  getCurrent,
  logout,
  updateSubscription,
};
