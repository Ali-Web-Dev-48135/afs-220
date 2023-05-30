const User = require("../models/user");
const HttpError = require("../models/http-error");

const signup = async (request, response, next) => {
  const { username, password } = request.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ username: username });
  } catch (err) {
    const error = new HttpError(
      "Signing up failed, please try again later.",
      500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      "User already exists , please login in instead.",
      422
    );
    return next(error);
  }

  const createdUser = new User({
    username,
    password,
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Signing up failed, please try again.", 500);
    return next(error);
  }

  response
    .status(201)
    .json({ userId: createdUser.id, password: createdUser.password });
};

const loginuser = async (request, response, next) => {
  const { username, password } = request.body;

  let existingUser;

  try {
    existingUser = await User.findOne({ username: username });
  } catch (err) {
    const error = new HttpError(
      "Logging in failed, please try again later.",
      500
    );
    return next(error);
  }

  if (!existingUser) {
    const error = new HttpError("Invalid Crdentials.", 403);
    return next(error);
  }
  if (password == existingUser.password) {
    response.json({
      username: existingUser.username,
      valid: true,
    });
  }
};

exports.signup = signup;
exports.loginuser = loginuser;
