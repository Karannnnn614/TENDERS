import mongoose from 'mongoose';
const url="mongodb://localhost:27017/Tender_Backend";
mongoose.connect(url);
console.log("Successfully connected to mongodb database...");
