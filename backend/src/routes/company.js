import express from "express";
import Company from "../models/companyModel.js";

const router = express.Router();

//! ON DEVELOPMENT

// router.post("/create", async (req, res) => {
//   const { industry, employeeCount, website } = req.body;

//   try {
//     const company = new Company({
//       industry,
//       employeeCount,
//       website,
//     });
//     await company.save();
//     res.json({ msg: "OK" });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

export default router;