const express = require("express");
const router = express.Router();
const auth = require("../middleware/authmiddleware");
const adminAuth = require("../middleware/adminAuthMiddleware");
const storage = require("../util/cloudinary");
const multer = require("multer");
const upload = multer({
  storage,
});
const {
  getPostController,
  allPostsController,
  newPostController,
  deletePostController,
  updateController,
  imageController
} = require("../controllers/postsController");

//get post
router.get("/post/:id", getPostController);

// //get all posts
router.get("/post", allPostsController);

// //post new post
router.post("/post", auth,upload.single("image"), newPostController);

// //delete a post
router.delete("/post/:id", adminAuth, deletePostController);

// //update a post
router.patch("/post/:id", auth, updateController);

//upload image to post
router.post("/post/upload", upload.single("image"), auth, imageController);


module.exports = router;

/* Get Single Post Route:

fetching a single post based on its ID (/post/:id).
If the ID is not valid, throw an error.
If the post is not found (getPost is null), return a 404 status with a message indicating the post was not found.
Otherwise, return the found post (getPost) with a success message.
Get All Posts Route:

Retrieves all posts (/post).
Wraps the array of posts (allPosts) within an object with the key post.
Handles errors by returning a 400 status with the error message.
Create New Post Route:

Handles a POST request to create a new post.
Validates that all required fields (title, image, content, category, tags) are present in the request body.
Creates a new post using Post.create() and assigns the user field with req.user._id.
Returns a 201 status with the newly created post and a success message.
Catches any errors and returns a 400 status with the error message.
Delete Post Route:

Deletes a post based on its ID (/post/:id).
Validates the ID using mongoose.isValidObjectId().
Uses Post.findByIdAndDelete() to delete the post.
Returns a 200 status with the deleted post and a success message.
Catches errors and returns a 400 status with the error message.
Update Post Route:

Updates a post based on its ID (/post/:id).
Validates the ID using mongoose.isValidObjectId().
Checks that all required fields (title, image, content, category, tags) are present in the request body.
Uses Post.findByIdAndUpdate() with the new: true option to return the updated post.
Returns a 200 status with the updated post and a success message.
Catches errors and returns a 400 status with the error message*/
