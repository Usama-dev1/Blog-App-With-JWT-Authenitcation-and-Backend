require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

//configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDAPI_KEY,
  api_secret: process.env.CLOUD_SKEY,
});

//create instance of cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpeg", "jpg", "png"],
  params: {
    folder: "blog-images",
    transformation: [{ width: 500, height: 500, crop: "limit" }],
  },
});

module.exports = storage;
