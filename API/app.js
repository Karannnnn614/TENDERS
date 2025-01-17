import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';


var app = express();

//to link routers
import UserRouter from './routes/user.router.js';
import CategoryRouter from './routes/category.router.js';

//to extract body data from request (POST , PUT , DELETE , PATCH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//to resolve cross origin problem 
app.use(cors())

//route level middleware to load routes as per base path
app.use("/user",UserRouter);
app.use("/category",CategoryRouter);

app.listen(3001);
console.log("server invoked at link http://localhost:3001");
