import express from "express";
<<<<<<< HEAD
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
=======
import Job from "./models/Job"; // Import your Job model
import validate from "../utils/userValidate.js";
import User from "../models/userModel";
const router = express.Router();

// Create a new job
router.post("/jobs", validate, async (req, res) => {
  const { companyName, position, salary, skillsRequired, description } =
    req.body;

  try {
    const job = new Job({
      companyName,
      position,
      salary,
      skillsRequired,
      description,
    });

    await job.save();
    res.status(201).json({ job });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all jobs
router.get("/jobs", async (req, res) => {
  try {
    const jobs = await Job.find().populate("user", "name"); // Populate user field with user's name
    res.json({ jobs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
})
// Get a specific job by ID
  .get("/jobs/:id", async (req, res) => {
    const jobId = req.params.id;

    try {
      const job = await Job.findById(jobId).populate("user", "name"); // Populate user field with user's name

      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }

      res.json({ job });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  })

  .post("/jobs/:id/apply", validate, async (req, res) => {
    const jobId = req.params.id;
    const userId = req.user.id;

    try {
      const job = await Job.findById(jobId);

      if (!job) {
        return res.status(404).json({ error: "Job not found" });
      }

      const user = await User.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (user.type === 1) {
        return res.status(400).json({ error: "Company cannot apply for jobs" });
      }

      const isAlreadyApplied = user.appliedJobs.includes(jobId);

      if (isAlreadyApplied) {
        return res.status(400).json({ error: "Already applied for this job" });
      }

      user.appliedJobs.push(jobId);
      await user.save();

      res.json({ user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  });

// You can add more routes such as updating and deleting jobs

export default router;
>>>>>>> 48a987260d3c902687e8143bf321d1fa8ba5d8fd
