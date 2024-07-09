const User = require("../models/usersModel");
const mongoose = require("mongoose");
const fetchController = async (req, res) => {
  try {
    const users = await User.find({});
    return res.json({ users });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const deleteController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      throw new Error("Enter a valid Id");
    }
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(400).json({ message: "Such user does not exist" });
    }
    res.status(200).json({ deletedUser, message: "user deleted succefully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const updateController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      throw new Error("Enter a valid Id");
    }
    const { username, email, password } = req.body;
    if (!mongoose.isValidObjectId(id)) {
      throw new Error("Enter a valid Id");
    }
    const updateUser = await User.findByIdAndUpdate(
      { _id: id },
      {
        username,
        email,
        password,
      },
      { new: true }
    );
    if (!updateUser) {
      return res.status(400).json({ message: "Such user does not exist" });
    }
    return res.json({ updateUser, message: "user updated successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { fetchController, deleteController, updateController };