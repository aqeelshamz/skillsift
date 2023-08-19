import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      select: false
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: Number,
      required: true,
      enum: [0, 1], //? 0: user, 1: Company
    },
  }, { timestamps: true });
  
  const User = mongoose.model('User', userSchema);
  
  export default User;
