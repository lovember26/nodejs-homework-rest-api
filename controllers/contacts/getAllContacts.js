const { Contact } = require("../../models");

const { ctrlWrapper } = require("../../decorators");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, ...query } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find(
    { owner, ...query },
    "-createdAt -updatedAt",
    { skip, limit }
  );
  res.json(result);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
};
