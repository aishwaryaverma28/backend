// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDB()
.then(() => {
  app.on("error", (error) => {
    console.log("error: ", error);
  })
  app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running at port : ${process.env.PORT || 8000}`)
  })
})
.catch((err) => {
  console.log("Mongo db connection failed !!! ", err);
})
/*
import express from "express";
const app = express()(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("error: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`app is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("error: ", error);
    throw error;
  }
})();
*/
