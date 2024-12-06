import React, { useState } from "react";
import Cookies from "js-cookie";

export default function PostedSection({ jobs }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  console.log(jobs);

  const handleJobClick = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
  };

  const handleSelectionChange = async (index, status) => {
    const applicant = selectedJob.applications[index];
    console.log(applicant._id); // Debugging log to check the applicant's _id
    try {
      const response = await fetch(
        `http://localhost:8000/dashboard/profile/${applicant._id}`,
        {
          method: "PATCH",
          headers: {
            token: Cookies.get("token"),
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: status }),
        }
      );

      if (response.ok) {
        // If the update is successful, update the local state
        setSelectedJob((prevJob) => {
          const updatedApplicants = prevJob.applications.map((app, idx) => {
            if (idx === index) {
              return {
                ...app,
                status: status ? "selected" : "rejected", // Update the status
              };
            }
            return app;
          });

          return {
            ...prevJob,
            applications: updatedApplicants,
          };
        });
      } else {
        // Handle the case where the request fails
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        alert("There was an error updating the applicant's status.");
      }
    } catch (error) {
      console.error("Error updating applicant status:", error);
      alert("There was an error updating the applicant's status.");
    }
  };

  return (
    <div className="w-[98%] rounded-2xl p-4 flex justify-self-center justify-center mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {jobs && jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div
              key={job._id} // Using job._id instead of index to ensure uniqueness
              className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:bg-gray-50 w-full"
              onClick={() => handleJobClick(job)}
            >
              <h2 className="text-lg font-bold text-black">{job.name}</h2>
              <p className="text-sm text-gray-600">
                Posted on: {job.createdAt}
              </p>
              <p className="text-sm text-gray-700">
                {job.applications.length} Applicants
              </p>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">No jobs posted yet.</div>
        )}
      </div>

      {modalOpen && selectedJob && (
        <div className="fixed top-10 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center overflow-hidden">
          <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button
              className="absolute top-2 right-2 text-red-600 font-bold hover:text-red-800"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-black">
              {selectedJob.name} - Applicants
            </h2>
            <ul>
              {selectedJob.applications.map((applicant, index) => (
                <li
                  key={applicant._id} // Using applicant._id to ensure unique keys
                  className="border-b border-gray-300 py-4 flex flex-col gap-2"
                >
                  <div>
                    <strong>Name:</strong>{" "}
                    <span className="text-black">{applicant.fullName}</span>
                  </div>
                  <div>
                    <strong>Email:</strong>{" "}
                    <span className="text-black">{applicant.email}</span>
                  </div>
                  <div>
                    <strong>Phone:</strong>{" "}
                    <span className="text-black">{applicant.phone}</span>
                  </div>
                  <div>
                    <strong>Why Hire:</strong>{" "}
                    <span className="text-black">{applicant.reason}</span>
                  </div>
                  <div>
                    <strong>Additional:</strong>{" "}
                    <span className="text-black">
                      {applicant.additionalInfo}
                    </span>
                  </div>
                  <div>
                    <strong>Status:</strong>{" "}
                    <span
                      className={`font-bold ${
                        applicant.status === "selected"
                          ? "text-green-600"
                          : applicant.status === "rejected"
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {applicant.status === "selected"
                        ? "Selected"
                        : applicant.status === "rejected"
                        ? "Rejected"
                        : "Pending"}
                    </span>
                  </div>
                  {applicant.status === "Pending" && (
                    <div className="flex gap-4 mt-2">
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        onClick={() => handleSelectionChange(index, true)}
                        disabled={applicant.status !== "Pending"} // Disable if not pending
                      >
                        Select
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        onClick={() => handleSelectionChange(index, false)}
                        disabled={applicant.status !== "Pending"} // Disable if not pending
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
