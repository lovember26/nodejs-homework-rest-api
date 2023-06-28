const { contactAddSchema, contactUpdateFavoriteSchema } = require("./contacts");

const {
  userRegisterSchema,
  userUpdateSubscriptionSchema,
  userEmailSchema,
} = require("./users");

module.exports = {
  contactAddSchema,
  contactUpdateFavoriteSchema,
  userRegisterSchema,
  userUpdateSubscriptionSchema,
  userEmailSchema,
};
