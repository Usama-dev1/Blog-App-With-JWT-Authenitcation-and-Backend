const jwt = require("jsonwebtoken");
const User = require("../models/usersModel");
require("dotenv").config();

const authMiddleware = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res
      .status(401)
      .json({ message: "authorization required can not access" });
  }

  const token = authorization.split(" ")[1];
  try {
    const { id } = jwt.verify(token, process.env.JWT);
    const user = await User.findOne({ _id:id }).select("_id role");
    console.log('this is',id)
     if (!user) {
       return res.status(404).json({ message: "User not found" });
     }
    console.log("authorized successfully");
    req.user = user;
    console.log(user);
    if (user.role !== "admin" || user.role == "user") {
      return res
        .status(403)
        .json({ message: "Unauthorized access to admin resources" });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(401).json({ message: "request not authorized" });
  }

  next();
};

module.exports = authMiddleware;
