
import mongoose from "mongoose";

async function connectToDB() {
  mongoose
    .connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/Tender_Backend",
      {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
      }
    )
}

export default connectToDB;
