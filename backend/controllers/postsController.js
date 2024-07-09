const Post = require("../models/postModel");
const mongoose = require("mongoose");
const User = require("../models/usersModel");
const getPostController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      throw new Error("Enter a valid Id");
    }
    const getPost = await Post.findById(id);
    if (!getPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    res
      .status(200)
      .json({ post: getPost, message: "single post fetched successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const allPostsController = async (req, res) => {
  try {
    const allPosts = await Post.find({});
    return res
      .status(200)
      .json({ post: allPosts, message: "all posts fetched" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const newPostController = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log("User ID:", userId);

    const { title, content, category, tags } = req.body;

    // Validate required fields
    if (!title || !content || !tags) {
      throw new Error("All fields are required, including the image file");
    }

    // Create the post
    const post = await Post.create({
      title,
      content,
      category,
      tags,
      user: userId,
      image: req.file.path,
    });

    console.log("New Post Created:", post);

    // Find the user
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("User not found");
    }

    // Ensure user.post is an array and push the new post ID
    if (!Array.isArray(user.post)) {
      user.post = [];
    }
    user.post.push(post._id);
    await user.save();

    console.log("User Updated with Post ID:", user);

    // Respond with the new post
    return res.status(201).json({ post, message: "New post created" });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(400).json({ error: error.message });
  }
};

module.exports = newPostController;

const deletePostController = async (req, res) => {
  try {
    const { userid } = req.user.id;
    const user = await User.findOne({ userid }).select("role");
    if (user.role !== "admin" || user.role == "user") {
      return res
        .status(403)
        .json({ message: "Unauthorized access to admin resources" });
    }
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      throw new Error("Enter a valid Id");
    }

    const deletePost = await Post.findByIdAndDelete(id);
    res
      .status(200)
      .json({ post: deletePost, message: "post deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) {
      throw new Error("Enter a valid Id");
    }
    const { title, image, content, category, tags } = req.body;
    if (!title || !image || !content || !category || !tags) {
      throw new Error("Fill all the fields are required");
    }
    const updatePost = await Post.findByIdAndUpdate(
      { _id: id },
      {
        title,
        image,
        content,
        category,
        tags,
      },
      { new: true }
    );
    return res
      .status(200)
      .json({ post: updatePost, message: "Single post updated successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const imageController = async (req, res) => {
  try {
    if (!req.file) {
      return res
        .status(401)
        .json({ error: "no file attached please attach file" });
    }
    const userID = req.user._id;
    const userFound = await User.findById(userID);
    if (!userFound) {
      return res.status(401).json({ error: "no such user" });
    }
    await User.findByIdAndUpdate(
      userID,
      {
        coverImage: req.file.path,
      },
      {
        new: true,
      }
    );
    return res.status(200).json({ message: "image uploaded successfully" });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
};

module.exports = {
  getPostController,
  allPostsController,
  newPostController,
  deletePostController,
  updateController,
  imageController,
};
