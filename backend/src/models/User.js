import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	phone: { type: String, required: true },
	email: { type: String, required: true },
	college: { type: String, required: true },
	specialization: { type: String, required: true },
	year: { type: String, required: true },
});

export default mongoose.model("User", UserSchema);
