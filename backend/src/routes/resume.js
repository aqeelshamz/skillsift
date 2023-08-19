import express from "express";
import joi from "joi";
import OpenAI from "openai";
import { resumeInfoExtractionPrompt } from "../utils/util.js";
import validate from "../utils/userValidate.js"
const router = express.Router();



router.post("/extract-data", validate, async (req, res) => {
    const schema = joi.object({
        resumeText: joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_KEY,
        });

        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: resumeInfoExtractionPrompt }, { role: "user", content: data.resumeText }],
            model: "gpt-3.5-turbo",
        });

        return res.status(200).send(JSON.parse(completion.choices[0].message.content));
    }
    catch (err) {
        console.log(err)
        return res.status(400).send(err);
    }
});

export default router;