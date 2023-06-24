const isValidId = require("../middlewares/isValidId");
const authenticate = require("./authenticate");
const upload = require("./upload");

module.exports = {
  isValidId,
  authenticate,
  upload,
};
