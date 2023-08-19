import express from "express";
import joi from "joi";
import OpenAI from "openai";
const router = express.Router();

router.post("/extract-data", async (req, res) => {
    const schema = joi.object({
        resumeText: joi.string().required(),
    });

    try {
        const data = await schema.validateAsync(req.body);

        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

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