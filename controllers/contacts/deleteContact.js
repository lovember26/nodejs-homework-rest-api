const Contact = require("../../models/contact");

const { HttpError } = require("../../helpers");

const { ctrlWrapper } = require("../../decorators");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404);
  }
  res.json({ message: "contact deleted" });
};

module.exports = {
  deleteContact: ctrlWrapper(deleteContact),
};
