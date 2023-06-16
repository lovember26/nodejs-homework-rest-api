const Contact = require("../../models/contact");

const { ctrlWrapper } = require("../../decorators");

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);

  res.status(201).json(result);
};

module.exports = {
  addContact: ctrlWrapper(addContact),
};
