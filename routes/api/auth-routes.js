const express = require("express");

const usersController = require("../../controllers");

const schemas = require("../../schemas");

const { validateBody } = require("../../decorators");

const { authenticate, upload } = require("../../middlewares");

const router = express.Router();

router.post(
  "/register",
  validateBody(schemas.userRegisterSchema),
  usersController.registerUser
);

router.post(
  "/login",
  validateBody(schemas.userRegisterSchema),
  usersController.loginUser
);

router.get("/current", authenticate, usersController.getCurrent);

router.post("/logout", authenticate, usersController.logout);

router.patch(
  "/",
  authenticate,
  validateBody(schemas.userUpdateSubscriptionSchema),
  usersController.updateSubscription
);

router.patch(
  "/avatars",
  authenticate,
  upload.single("avatarURL"),
  usersController.updateAvatar
);

module.exports = router;
