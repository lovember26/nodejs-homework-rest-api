const { contactAddSchema, contactUpdateFavoriteSchema } = require("./contacts");

const { userRegisterSchema, userUpdateSubscriptionSchema } = require("./users");

module.exports = {
  contactAddSchema,
  contactUpdateFavoriteSchema,
  userRegisterSchema,
  userUpdateSubscriptionSchema,
};
