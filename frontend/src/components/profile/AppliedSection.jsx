import React from "react";
import { useState } from "react";

export default function AppliedSection() {
const [modalOpen,setModalOpen]=useState(false);
const [selectedJob, setSelectedJob]=useState(null);
const handleJobClick = (application) => {
  setSelectedJob(application);
  setModalOpen(true);
  console.log("yes");
};

const closeModal = () => {
  setModalOpen(false);
  setSelectedJob(null);
};

const applications = [
  {
    jobName: "Software Engineer",
    postedBy: "Google",
    status: "pending",
    description: "Develop and maintain software solutions at scale.",
    salary: "$120,000/year",
    startDate: "2024-01-15",
  },
  {
    jobName: "Data Analyst",
    postedBy: "Amazon",
    status: "selected",
    description: "Analyze and interpret complex data to drive business decisions.",
    salary: "$95,000/year",
    startDate: "2024-02-01",
  },
  {
    jobName: "Frontend Developer",
    postedBy: "Facebook",
    status: "rejected",
    description: "Build responsive and user-friendly web interfaces.",
    salary: "$110,000/year",
    startDate: "2024-03-01",
  },
  {
    jobName: "Backend Developer",
    postedBy: "Microsoft",
    status: "pending",
    description: "Design and implement robust server-side applications.",
    salary: "$115,000/year",
    startDate: "2024-01-20",
  },
  {
    jobName: "DevOps Engineer",
    postedBy: "Netflix",
    status: "rejected",
    description: "Optimize deployment processes and ensure system reliability.",
    salary: "$125,000/year",
    startDate: "2024-02-15",
  },
  {
    jobName: "AI Researcher",
    postedBy: "OpenAI",
    status: "selected",
    description: "Conduct research to advance artificial intelligence capabilities.",
    salary: "$150,000/year",
    startDate: "2024-01-10",
  },
];


  console.log(applications);

  return (
    <div className="applied w-[100%] flex flex-wrap justify-self-center bg-gray-100 justify-between gap-[1%] items-center">
      {applications && applications.length > 0 ? (
        applications.map((application, index) => (
          <div className="w-[30%] bg-white p-6 m-4 rounded-lg shadow-lg border border-gray-200"
          onClick={()=>handleJobClick(application)}>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {application.jobName}
            </h2>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Posted by:</span>{" "}
              {application.postedBy}
            </p>
            <p
              className={`text-sm font-medium ${
                application.status === "selected"
                  ? "text-green-500"
                  : application.status === "rejected"
                  ? "text-red-500"
                  : application.status === "pending"
                  ? "text-gray-500"
                  : ""
              }`}
            >
              Status:{" "}
              {application.status.charAt(0).toUpperCase() +
                application.status.slice(1)}
            </p>
          </div>
        ))
      ) : (
        <div>No jobs applies to</div>
      )}
      {modalOpen && selectedJob && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded-lg shadow-2xl w-11/12 max-w-xl relative">
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-red-600 transition duration-200"
        onClick={closeModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Job Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
        {selectedJob.jobName}
      </h2>

      {/* Job Details */}
      <div className="space-y-4">
        <div>
          <span className="block text-sm font-medium text-gray-500">
            Posted By
          </span>
          <p className="text-lg text-gray-800">{selectedJob.postedBy}</p>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-500">
            Description
          </span>
          <p className="text-lg text-gray-800">{selectedJob.description}</p>
        </div>
        <div className="flex justify-between">
          <div>
            <span className="block text-sm font-medium text-gray-500">
              Salary
            </span>
            <p className="text-lg text-green-600 font-semibold">
              {selectedJob.salary}
            </p>
          </div>
          <div>
            <span className="block text-sm font-medium text-gray-500">
              Start Date
            </span>
            <p className="text-lg text-gray-800">{selectedJob.startDate}</p>
          </div>
        </div>
        <div>
          <span className="block text-sm font-medium text-gray-500">
            Status
          </span>
          <p
            className={`text-lg font-semibold ${
              selectedJob.status === "selected"
                ? "text-green-500"
                : selectedJob.status === "rejected"
                ? "text-red-500"
                : "text-gray-500"
            }`}
          >
            {selectedJob.status.charAt(0).toUpperCase() + selectedJob.status.slice(1)}
          </p>
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="mt-6 flex justify-end">
        <button
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}


    </div>
  );
}
