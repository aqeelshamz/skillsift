import React from "react";
import { BiBriefcaseAlt2 } from "react-icons/bi";

export default function JobsPage() {
  return (
    <div className="flex p-8 flex-col bg-neutral-100 h-full shadow-md overflow-y-auto">
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
