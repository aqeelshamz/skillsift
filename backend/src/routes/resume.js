import express from "express";
import joi from "joi";
import OpenAI from "openai";
import { atsScorePrompt, resumeInfoExtractionPrompt } from "../utils/util.js";
import { validate } from "../utils/userValidate.js"
const router = express.Router();
import multer from 'multer';
import Resume from "../models/resumeModel.js";
import { readPdfText } from 'pdf-text-reader';
import ResumeData from "../models/resumeDataModel.js";

const resumeStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "." + file.originalname.split(".")[1]);
    },
});

const resumeUpload = multer({
    storage: resumeStorage,
    fileFilter(req, file, cb) {
        cb(undefined, true);
    },
});

const extractResumeData = async (fileName) => {
    const pages = await readPdfText('public/' + fileName);
    console.log(pages);

    var text = [];
    for (const page of pages) {
        text.push(page.lines.join("\n"));
    }

    const resumeText = text.join("\n");

    const openai = new OpenAI({
        apiKey: process.env.OPENAI_KEY,
    });

    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: resumeInfoExtractionPrompt }, { role: "user", content: resumeText }],
        model: "gpt-3.5-turbo",
    });

    const atsScoreCompletion = await openai.chat.completions.create({
        messages: [{ role: "system", content: atsScorePrompt }, { role: "user", content: resumeText }],
        model: "gpt-3.5-turbo",
    });

    const data = JSON.parse(completion.choices[0].message.content);
    const ats = JSON.parse(atsScoreCompletion.choices[0].message.content);

    return { data, ats };
};

router.post("/upload", resumeUpload.single("file"), validate, async (req, res) => {
    const newResume = new Resume({
        userId: req.user._id,
        fileName: req.file.filename,
    });

    await newResume.save();

    const extractedData = await extractResumeData(req.file.filename);

    return res.send(extractedData);
});

router.post("/save-data", resumeUpload.single("file"), validate, async (req, res) => {
    const schema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        phone: joi.string().required(),
        gender: joi.string().required(),
        qualification: joi.string().required(),
        college: joi.string().required(),
        skills: joi.array().items(joi.string()).required(),
        yearOfGraduation: joi.string().required(),
        atsScore: joi.number().required(),
        atsRemarks: joi.array().items(joi.string()).required(),
    });

    try {
        const data = await schema.validateAsync(req.body);
        const resumeData = await ResumeData.findOne({ userId: req.user._id });
        if (resumeData) {
            await ResumeData.findOneAndUpdate({ userId: req.user._id }, data);
        }
        else {
            const newResumeData = new ResumeData({
                userId: req.user._id,
                ...data
            });
            await newResumeData.save();
        }

        return res.send("OK");
    }
    catch (err) {
        return res.status(400).json(err);
    }
});

export default router;