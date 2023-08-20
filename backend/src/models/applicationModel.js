import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Types.ObjectId,
            required: true,
        },
        jobId: {
            type: mongoose.Types.ObjectId,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Application = mongoose.model('Application', applicationSchema);

export default Application;
