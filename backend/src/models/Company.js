import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
	name: { type: String, required: true },
	phone: { type: String, required: true },
	email: { type: String, required: true },
	description: { type: String, required: true },
	website: { type: String, required: true },
});

export default mongoose.model("Company", CompanySchema);
