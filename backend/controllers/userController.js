const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const genToken = (id) => {
  return jwt.sign({ id }, process.env.JWT, { expiresIn: "3d" });
};

const signupController = async (req, res) => {
  try {
    
    const { username, email, password} = req.body;
        const coverImage=req.file.path
    const user = await User.signup(username, email, password,coverImage);
    console.log(user, user._id);
    const token = genToken(user._id);
    res.status(200).json({ user, token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.login(email, password);
    const token = genToken(user._id);
    return res.status(200).json({ email, token });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

const uploadController=async(req,res)=>{
  try {
    if (!req.file) {
          return res.status(401).json({ error: "no such user" });
    }

    const userID = req.user._id
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
      return res.status(200).json({message:"image uploaded successfully"});

  } catch (error) {
          return res.status(401).json({ error: error.message });
  }
};

const profileController=async(req,res)=>{
  try {
    const userID = req.user._id
    const userFound = await User.findById(userID);
    if (!userFound) {
      return res.status(401).json({ error: "no such user" });
    }
    const user=userFound
          return res.status(200).json({ user,message: "fetched user" });
}
catch(error)
{
      return res.status(401).json({ error: "no such user" });

}
}


module.exports = {
  signupController,
  loginController,
  uploadController,
  profileController,
};
