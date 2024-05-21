import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      `mongodb+srv://nikhilkadiyan:${process.env.MONGO_PASS}@cluster0.hbdkvfp.mongodb.net/rentify`
    )
    .then(() => console.log("DB Connected"));
};
