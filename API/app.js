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
    app.listen(process.env.PORT || 3001)
    console.log(`Server has been started`);
  })
  .catch((error) => {
    console.error("Sever could not be invoked", error);
    process.exit(1); // Exit the process with failure
  });
