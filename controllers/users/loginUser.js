const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

const { User } = require("../../models");

const { HttpError } = require("../../helpers");

const { ctrlWrapper } = require("../../decorators");

const { SECRET_KEY } = process.env;

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401, "Email is wrong");
  }
  if (!user.verify) {
    throw HttpError(401, "User is not verified");
  }
  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401, "Password is wrong");
  }
  const { _id: id } = user;

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  await User.findByIdAndUpdate(id, { token });

  res.json({
    token,
    user: {
      email,
      subscription: "starter",
    },
  });
};

module.exports = {
  loginUser: ctrlWrapper(loginUser),
};
