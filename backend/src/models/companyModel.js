import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    industry: { type: String, required: true },
    employeeCount: { type: Number, required: true },
    website: { type: String, required: true },
    User: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true } 
);

const Company = mongoose.model("Company", companySchema);

export default Company;
