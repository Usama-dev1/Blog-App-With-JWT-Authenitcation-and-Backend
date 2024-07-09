const express = require("express");
const router = express.Router();
const auth = require("../middleware/authmiddleware");
const adminAuth = require("../middleware/adminAuthMiddleware");
const {
  fetchController,
  deleteController,
  updateController,
} = require("../controllers/adminController");

//get users
router.get("/users/admin", adminAuth, fetchController);

//delete a user
router.delete("/users/admin/:id", adminAuth, deleteController);

//update a user
router.patch("/users/admin/:id", adminAuth, updateController);
module.exports = router;
