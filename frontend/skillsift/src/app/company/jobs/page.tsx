"use client";

import React from "react";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { useState } from "react";
import axios from "axios";

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleJobAdd = () => {
    const newJob: Job = {
      id: jobs.length + 1,
      name: formData.position,
      company: formData.companyName,
      salary: parseInt(formData.salary),
      skills: formData.skillsRequired.split(","),
    };
    setJobs((prevJobs) => [...prevJobs, newJob]);

    setFormData({
      companyName: "",
      position: "",
      salary: "",
      skillsRequired: "",
    });
    // Close the modal after adding the job and updating state
    window.my_modal_2.close();
  };

  return (
    <div className="flex p-8 flex-col bg-neutral-100 h-full shadow-md overflow-y-auto">
      <div className="">
        {/* Open the modal using ID.showModal() method */}
        <button
          className="btn btn-primary w-full"
          onClick={() => window.my_modal_2.showModal()}
        >
          Add Job
        </button>
        <dialog id="my_modal_2" className="modal">
          <form method="dialog" className="modal-box" onSubmit={handleJobAdd}>
            <h3 className="font-bold text-lg">Add a Job</h3>
            <div>
              <label className="label mt-4">
                <span className="label-text">
                  Company Name <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Company Name"
                className="input input-bordered w-full"
                name="companyName"
                onChange={handleInputChange}
              />
              <label className="label mt-4">
                <span className="label-text">
                  Position <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Position"
                className="input input-bordered w-full"
                name="position"
                onChange={handleInputChange}
              />
              <label className="label mt-4">
                <span className="label-text">
                  Salary <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Salary"
                className="input input-bordered w-full"
                name="salary"
                onChange={handleInputChange}
              />
              <label className="label mt-4">
                <span className="label-text">
                  Skill Required <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Skill Required"
                className="input input-bordered w-full"
                name="skillsRequired"
                onChange={handleInputChange}
              />
              <div>
                <button className="btn w-full btn-primary mt-4" type="submit">
                  Add Job
                </button>
              </div>
            </div>
          </form>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        {/* Recommended Jobs */}
        <h4 className="text-4xl font-bold">Recommended Jobs</h4>
        <div className="grid grid-cols-1 gap-6">
          {/* Job Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-2">
                Software Engineer (Remote)
              </h2>
              <p className="text-lg text-gray-600">Salary: $50,000</p>
            </div>
            <div className="flex flex-row gap-5 justify-between">
              <div>
                <p className="text-gray-600">Google</p>
                <p className="text-sm text-gray-600">
                  Skills: React, Node, Express
                </p>
              </div>
              <div className="flex flex-col">
                <button className="btn btn-primary text-base justify-start normal-case font-medium">
                  <BiBriefcaseAlt2 className="inline-block" />
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Job Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-2">UX Designer</h2>
              <p className="text-lg text-gray-600">Salary: $60,000</p>
            </div>
            <div className="flex flex-row gap-5 justify-between">
              <div>
                <p className="text-gray-600">Apple</p>
                <p className="text-sm text-gray-600">
                  Skills: UI/UX Design, Adobe XD
                </p>
              </div>
              <div className="flex flex-col">
                <button className="btn btn-primary text-base justify-start normal-case font-medium">
                  <BiBriefcaseAlt2 className="inline-block" />
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Job Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-2">Data Scientist</h2>
              <p className="text-lg text-gray-600">Salary: $70,000</p>
            </div>
            <div className="flex flex-row gap-5 justify-between">
              <div>
                <p className="text-gray-600">Amazon</p>
                <p className="text-sm text-gray-600">
                  Skills: Python, Machine Learning
                </p>
              </div>
              <div className="flex flex-col">
                <button className="btn btn-primary text-base justify-start normal-case font-medium">
                  <BiBriefcaseAlt2 className="inline-block" />
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Job Card 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-2">Product Manager</h2>
              <p className="text-lg text-gray-600">Salary: $90,000</p>
            </div>
            <div className="flex flex-row gap-5 justify-between">
              <div>
                <p className="text-gray-600">Microsoft</p>
                <p className="text-sm text-gray-600">
                  Skills: Product Strategy, Agile
                </p>
              </div>
              <div className="flex flex-col">
                <button className="btn btn-primary text-base justify-start normal-case font-medium">
                  <BiBriefcaseAlt2 className="inline-block" />
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Job Card 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between">
              <h2 className="text-xl font-semibold mb-2">Frontend Developer</h2>
              <p className="text-lg text-gray-600">Salary: $65,000</p>
            </div>
            <div className="flex flex-row gap-5 justify-between">
              <div>
                <p className="text-gray-600">Netflix</p>
                <p className="text-sm text-gray-600">
                  Skills: HTML, CSS, JavaScript
                </p>
              </div>
              <div className="flex flex-col">
                <button className="btn btn-primary text-base justify-start normal-case font-medium">
                  <BiBriefcaseAlt2 className="inline-block" />
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* You can continue adding more job cards */}
        </div>
      </div>
    </div>
  );
}
