import express from "express";
import joi from "joi";
import OpenAI from "openai";
import { resumeInfoExtractionPrompt } from "../utils/util.js";
import validate from "../utils/userValidate.js"
const router = express.Router();
import multer from 'multer';
import Resume from "../models/resumeModel.js";
import { readPdfText } from 'pdf-text-reader';

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

    const data = JSON.parse(completion.choices[0].message.content);

    return data;
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

export default router;