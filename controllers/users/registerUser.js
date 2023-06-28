require("dotenv").config;

const { BASE_URL } = process.env;

const gravatar = require("gravatar");

const bcrypt = require("bcrypt");

const { User } = require("../../models");

const { HttpError, sendEmail } = require("../../helpers");

const { ctrlWrapper } = require("../../decorators");
const { nanoid } = require("nanoid");

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }
  const avatarURL = await gravatar.url(email);

  const hashPassword = await bcrypt.hash(password, 10);
  const verificationToken = nanoid();
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${verificationToken}">Click to verify email</a>`,
  };

  await sendEmail(verifyEmail);

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
