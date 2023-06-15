const express = require("express");

const contactsController = require("../../controllers/contacts-controller");

const schemas = require("../../schemas/contacts");
const { validateBody } = require("../../decorators/validateBody");
const router = express.Router();
const { isValidId } = require("../../middlewares");

router.get("/", contactsController.getAllContacts);

router.get("/:contactId", isValidId, contactsController.getContactById);

router.post(
  "/",
  validateBody(schemas.contactAddSchema),
  contactsController.addContact
);

router.delete("/:contactId", contactsController.deleteContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.contactAddSchema),
  contactsController.updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.contactUpdateFavoriteSchema),
  contactsController.updateStatusContact
);

module.exports = router;
