import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      select: false,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        select: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        select: false,
    },
  },
  { timestamps: true }
);

const Company = mongoose.model("Company", companySchema);

export default Company;
