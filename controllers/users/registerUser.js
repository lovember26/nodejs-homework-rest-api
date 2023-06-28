const gravatar = require("gravatar");

const bcrypt = require("bcrypt");

const { User } = require("../../models");

const { HttpError } = require("../../helpers");

const { ctrlWrapper } = require("../../decorators");

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }
  const avatarURL = await gravatar.url(email);

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });

  res.status(201).json({
    user: {
      email: newUser.email,
      subscription: "starter",
    },
  });
};

module.exports = {
  registerUser: ctrlWrapper(registerUser),
};
