const fs = require("fs/promises");
const path = require("path");

const { ctrlWrapper } = require("../../decorators");
const { User } = require("../../models");
const { HttpError, resizeAvatar } = require("../../helpers");

const avatarsDir = path.resolve("public", "avatars");

const updateAvatar = async (req, res, next) => {
  const { _id } = req.user;
  if (!req.file) {
    next(HttpError(401));
  }
  const { path: oldPath, filename } = req.file;
  const newPath = path.join(avatarsDir, filename);

  await resizeAvatar(oldPath);

  const user = await User.findByIdAndUpdate(
    _id,
    { avatarURL: newPath },
    {
      new: true,
    }
  );

  await fs.rename(oldPath, newPath);
  res.json({ avatarURL: user.avatarURL });
};

module.exports = { updateAvatar: ctrlWrapper(updateAvatar) };
