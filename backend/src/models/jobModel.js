<<<<<<< HEAD
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
=======
import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    skillsRequired: {
      type: [String], // Array of strings representing skills
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model('Job', jobSchema);
>>>>>>> 48a987260d3c902687e8143bf321d1fa8ba5d8fd

export default Job;
