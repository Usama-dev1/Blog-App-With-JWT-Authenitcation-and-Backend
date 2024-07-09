const jwt=require('jsonwebtoken')
const User = require('../models/usersModel')
require('dotenv').config()
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const authMiddleware=async (req,res,next)=>{
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(401)
      .json({ message: "authorization required can not access" });
  }

const token = authorization.split(" ")[1]
  try {
    const { id } = jwt.verify(token, process.env.JWT);

    // Ensure _id is a valid ObjectId

    // Find user by _id using findOne
    const user = await User.findOne({ _id: id }).select("_id");
    console.log("authorized successfully");
    console.log(user, user.role);
    req.user = user;
    //   if (user.role !== "admin") {
    //     return res
    //       .status(403)
    //       .json({ message: "Unauthorized access to admin resources" });
    //   }
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ message: "request not authorized" });
  }

  next()
}

module.exports=authMiddleware