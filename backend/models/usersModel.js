const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const userModel = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    coverImage: {
      type: String,
    },
    post: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  {
    timestamps: true,
  }
);

userModel.statics.signup = async function (
  username,
  email,
  password,
  coverImage
) {
  if (!username || !password || !email) {
    throw new Error("Fill all the fields");
  }

  const checkUsername = await this.findOne({ username });
  const checkEmail = await this.findOne({ email });
  if (checkUsername || checkEmail) {
    throw new Error("Username or Email already exists");
  }

  if (!validator.isEmail(email)) {
    throw new Error("This is not a valid email");
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error(
      "Password must contain at least one uppercase letter, one lowercase letter, and one symbol"
    );
  }
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const newUser = await this.create({
    username,
    email,
    password: hashPassword,
    coverImage,
  });

  return newUser;
};

userModel.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("Enter all fields");
  }

  const user = await this.findOne({ email }).populate('post');
  if (!user) {
    throw new Error("Invalid email or password");
  }

  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    throw new Error("Invalid email or password");
  }

  return user;
};

const User = mongoose.model("User", userModel);

module.exports = User;
