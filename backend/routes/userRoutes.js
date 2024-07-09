const express=require('express')
const router=express.Router()
const {
  signupController,
  loginController,
  uploadController,
  profileController,
} = require("../controllers/userController");
const storage=require('../util/cloudinary')
const multer=require('multer')
const upload = multer({
  storage
}) 
const auth = require("../middleware/authmiddleware");
//login route
router.post('/users/login',loginController)
//sign up route
router.post('/users/signup',upload.single('image'), signupController)
//get profile route
router.post('/users/profile',auth, profileController)
//upload image
router.post('/users/upload',upload.single('image'),auth, uploadController)

module.exports=router