import mongoose from "mongoose";

const resumeDataSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
        gender: {
            type: String,
        },
        qualification: {
            type: String,
        },
        college: {
            type: String,
        },
        skills: {
            type: Array,
        },
        yearOfGraduation: {
            type: String,
        },
    }, { timestamps: true });

const ResumeData = mongoose.model('ResumeData', resumeDataSchema);

export default ResumeData;
