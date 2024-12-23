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
    },
    {
      jobName: "Data Analyst",
      postedBy: "Amazon",
      status: "selected",
    },
    {
      jobName: "Frontend Developer",
      postedBy: "Facebook",
      status: "rejected",
    },
    {
      jobName: "Backend Developer",
      postedBy: "Microsoft",
      status: "pending",
    },
    {
      jobName: "DevOps Engineer",
      postedBy: "Netflix",
      status: "rejected",
    },
    {
      jobName: "AI Researcher",
      postedBy: "OpenAI",
      status: "selected",
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
        <div className="fixed top-10 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center overflow-hidden">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-2xl max-h-[90vh] overflow-y-auto relative">
          <button
              className="absolute top-2 right-2 text-red-600 font-bold hover:text-red-800"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
