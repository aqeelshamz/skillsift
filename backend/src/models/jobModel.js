import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		company: {
			type: String,
			required: true,
		},
		skills: [{ type: String, required: true }],
		salary: { type: Number, required: true },
	},
	{ timestamps: true }
);

const Job = mongoose.model("Job", JobSchema);

export default Job;
