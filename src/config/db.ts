import mongoose from "mongoose";
import { envConfig } from "./config.js";

const connectDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Datbase is connected");
    });
    await mongoose.connect(envConfig.mongo_url as string);
  } catch (error) {
    console.log("Error occured at db Connection", error);
    process.exit(1);
  }
};

export default connectDb;
