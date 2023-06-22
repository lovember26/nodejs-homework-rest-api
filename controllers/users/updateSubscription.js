const { ctrlWrapper } = require("../../decorators");
const { User } = require("../../models");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;

  const user = await User.findByIdAndUpdate(_id, req.body, {
    new: true,
  });
  res.json(user);
};

module.exports = {
  updateSubscription: ctrlWrapper(updateSubscription),
};
