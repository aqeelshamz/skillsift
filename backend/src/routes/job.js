import express from "express";
import jobModel from "../models/jobModel.js";

const router = express.Router();

router.get("/getJob", async (req, res) => {
	const jobs = await jobModel.find({});

	return res.send(jobs);
});

router.post("/addJob", async (req, res) => {
	const { title, description, company, skills, salary } = req.body;

	const newJob = new jobModel({
		title,
		description,
		company,
		skills,
		salary,
	});

	await newJob.save();

	return res.send(newJob);
});
