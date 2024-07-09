const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const adminRouter = require("./routes/adminRoutes");
const app = express();
const cors=require('cors')
app.use(cors());
app.use(morgan("dev"));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url},${req.ip}`);
  next();
});
app.use(express.json());
app.use("/api/blog", adminRouter);
app.use("/api/blog", userRouter);
app.use("/api/blog", postRouter);

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.error("Error starting server:", error.message);
  } else {
    mongoose
      .connect(process.env.MONGOO_URI)
      .then(() => {
        console.log(
          `Connected to mongoodb database and sever running on ${process.env.PORT}`
        );
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB:", error.message);
      });
  }
});
