import express from "express";
import Job from "../models/jobModel.js"; // Import your Job model
import validate, { validateCompany } from "../utils/userValidate.js";
import User from "../models/userModel.js";
const router = express.Router();

// Create a new job
router.post("/create", validateCompany, async (req, res) => {
  const { title, description, salary, skillsRequired, deadline, companyId } = req.body;

  try {
    const job = new Job({
      title,
      description,
      salary,
      skillsRequired,
      deadline,
      companyId,
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
