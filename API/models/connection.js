import mongoose from "mongoose";

async function connectToDB() {
  const dbURI =
    process.env.MONGO_URI || "mongodb://localhost:27017/Tender_Backend";

  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true, // Optional but recommended
      useUnifiedTopology: true, // Optional but recommended
    });
    console.log("Connected to MongoDB");
    return true; // Success case
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    throw err; // Propagate the error to the caller
  }
}

export default connectToDB;
