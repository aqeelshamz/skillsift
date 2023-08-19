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
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    }
  },
  { timestamps: true }
);

const Job = mongoose.model('Job', jobSchema);

export default Job;
