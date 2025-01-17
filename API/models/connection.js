import mongoose from "mongoose";

async function connectToDB() {
  const dbURI =
    process.env.MONGO_URI || "mongodb://localhost:27017/Tender_Backend";

  console.log("Connecting to:", dbURI);

  mongoose
    .connect(dbURI, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB at:", dbURI);
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err.message);
    });
}

export default connectToDB;
