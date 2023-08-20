"use client";
import React from "react";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";
import { FaBuilding, FaDollarSign } from "react-icons/fa";
import { FiArrowRight, FiBriefcase, FiCalendar, FiPlus } from "react-icons/fi";
import Link from "next/link";

interface Job {
  id: number;
  name: string;
  company: string;
  salary: number;
  skills: string[];
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [formData, setFormData] = useState({
    companyName: "",
    position: "",
    salary: "",
    skillsRequired: "",
  });

  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleJobAdd = () => {
  //   const newJob: Job = {
  //     id: jobs.length + 1,
  //     name: formData.position,
  //     company: formData.companyName,
  //     salary: parseInt(formData.salary),
  //     skills: formData.skillsRequired.split(","),
  //   };
  //   setJobs((prevJobs) => [...prevJobs, newJob]);

  //   setFormData({
  //     companyName: "",
  //     position: "",
  //     salary: "",
  //     skillsRequired: "",
  //   });
  //   // Close the modal after adding the job and updating state
  //   window.my_modal_2.close();
  // };

  return (
    <div className="flex flex-col p-5 h-full overflow-y-auto">
      <p className="font-bold text-3xl">Jobs</p>
      <div className="flex"><Link href="/company/jobs/new"><label htmlFor="newjob_modal" className="btn btn-primary my-5"><FiPlus /> New Job</label></Link></div>
      {
        [...Array(10)].map((item) => {
          return <div className="flex justify-between p-4 bg-gray-100 rounded-lg mb-3">
            <div className="flex flex-col">
              <p className="font-semibold text-xl mb-2">Software Engineer (Remote)</p>
              <p className="flex items-center font-semibold text-md mb-4"><FaBuilding className="mr-2" /> Google</p>
              <p className="flex items-center text-md"><FiBriefcase className="mr-2" />Required Skills: Next.js, MongoDB, Node.js</p>
              <p className="flex items-center text-md"><FiCalendar className="mr-2" />Deadline: 20 August 2023</p>
            </div>
            <div className="flex flex-col justify-between">
              <p className="flex items-center text-lg"><FaDollarSign /> Salary: $1200 - $1500</p>
              <button className="btn btn-primary">View Details <FiArrowRight /></button>
            </div>
          </div>
        })
      }
    </div>
  );
}
