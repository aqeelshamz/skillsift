import express from "express";
import Job from "../models/jobModel.js"; // Import your Job model
import { validate, validateCompany } from "../utils/userValidate.js";
import User from "../models/userModel.js";
import ResumeData from "../models/resumeDataModel.js";
import joi from "joi";
import Application from "../models/applicationModel.js";

const router = express.Router();

// Create a new job
router.post("/create", validateCompany, async (req, res) => {
  const { title, description, salary, skillsRequired, deadline, location } = req.body;

  try {
    const job = new Job({
      title,
      description,
      salary,
      skillsRequired,
      deadline,
      location,
      companyId: req.user._id
    });

    await job.save();
    res.status(201).json({ job });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// Get all jobs
router.get("/list", validateCompany, async (req, res) => {
  try {
    const jobs = await Job.find({ companyId: req.user._id }).lean();
    for (const job of jobs) {
      job.companyName = req.user.name;
    }
    res.json(jobs.reverse());
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
})

router.post("/by-id", validate, async (req, res) => {
  const schema = joi.object({
    jobId: joi.string().required()
  });

  try {
    const data = await schema.validateAsync(req.body);
    var job = await Job.findById(data.jobId).lean();
    job.companyName = (await User.findById(job.companyId).lean()).name;

    const application = await Application.findOne({ userId: req.user._id, jobId: data.jobId }).lean();
    if (application) {
      job.applied = true;
    }
    else {
      job.applied = false;
    }

    return res.send(job);
  }
  catch (err) {
    return res.status(400).json(err);
  }
})


router.post("/apply", validate, async (req, res) => {
  const schema = joi.object({
    jobId: joi.string().required()
  });

  try {
    const data = await schema.validateAsync(req.body);
    const application = await Application.findOne({ userId: req.user._id, jobId: data.jobId }).lean();

    if (application) {
      return res.status(400).json({ error: "Already applied" });
    }
    else {
      const newApplication = new Application({
        userId: req.user._id,
        jobId: data.jobId,
        status: "Pending"
      });

      await newApplication.save();
    }
    return res.send("Applied");
  }
  catch (err) {
    console.log(err)
    return res.status(400).json(err);
  }
})

router.get("/recommended", validate, async (req, res) => {
  try {
    const resumeData = await ResumeData.findOne({ userId: req.user._id }).lean();
    const resumeDataSkills = resumeData.skills;
    const jobs = await Job.find({ skillsRequired: { $in: resumeDataSkills } }).lean();
    for (const job of jobs) {
      const user = await User.findById(job.companyId).lean();
      job.companyName = user.name;
    }
    res.json(jobs.reverse());
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
