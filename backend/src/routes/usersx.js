import express from "express";
import joi from "joi";
import { Configuration, OpenAIApi } from "openai";
const router = express.Router();

router.post("/extract-resume-data", async (req, res) => {
    const schema = joi.object({
        resumeText: joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const openai = new OpenAIApi(configuration);

        const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "string" }],
            model: "gpt-3.5-turbo",
        });

        return res.status(200).send(data);
    }
    catch (err) {
        return res.status(400).send(err);
    }
});

export default router;