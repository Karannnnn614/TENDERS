import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import env from "dotenv";
env.config();
var app = express();

//to link routers
import UserRouter from "./routes/user.router.js";
import CategoryRouter from "./routes/category.router.js";
import { connect } from "mongoose";
import connectToDB from "./models/connection.js";

//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//to resolve cross origin problem
app.use(cors());

//route level middleware to load routes as per base path
app.use("/user", UserRouter);
app.use("/category", CategoryRouter);
app.get("/", (req, res) => {
  res.send("Welcome");
});

connectToDB()
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT || 3001)
    console.log(`Server invoked at link http://localhost:${process.env.PORT}`);
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit the process with failure
  });
