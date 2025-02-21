const { Contact } = require("../../models");

const { HttpError } = require("../../helpers");

const { ctrlWrapper } = require("../../decorators");

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404);
  }
  res.json(result);
};

module.exports = {
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
