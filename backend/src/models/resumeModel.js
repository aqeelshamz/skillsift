import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            required: true,
        },
        fileName: {
            type: String,
            required: true,
        }
    }, { timestamps: true });

const Resume = mongoose.model('Resume', resumeSchema);

export default Resume;
