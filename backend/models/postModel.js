const mongoose = require("mongoose");
const validator = require("validator");
function isImageURL(value) {
  if (!validator.isURL(value)) {
    return false;
  }
  const imageExtensions = /\.(jpg|jpeg|png)$/i;
  return imageExtensions.test(value);
}
const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      validate: [
        isImageURL,
        "Invalid image only jpeg jpg and png format are accepted",
      ],
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    tags: {
      type: [String], // Array of strings for multiple tags
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
