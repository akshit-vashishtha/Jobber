import React, { useState } from "react";
import Cookies from "js-cookie";

export default function PostedSection({ jobs, setjobtrigger }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);

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
        `https://jobber-eosin.vercel.app/dashboard/profile/${applicant._id}`,
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

  const handleDeleteJob = async () => {
    try {
      const response = await fetch(
        `https://jobber-eosin.vercel.app/dashboard//jobstatus/${selectedJob._id}`,
        {
          method: "POST",
          headers: {
            token: Cookies.get("token"),
          },
        }
      );

      if (response.ok) {
        setConfirmDelete(false);
        setjobtrigger((prev) => !prev);
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData.message);
        alert("There was an error deleting the job.");
      }
    } catch (error) {
      console.error("Error deleting job:", error);
      alert("There was an error deleting the job.");
    }
  };
//hey in this code you are working fine but in my other folder you are not why
  return (
    <div className="w-[98%] rounded-2xl p-4 flex justify-self-center justify-center mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[3.5%] w-full">
        {jobs && jobs.length > 0 ? (
          jobs.map((job, index) => (
            <div
              key={job._id} // Using job._id to ensure uniqueness
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:bg-gray-50 w-full border border-gray-200 relative"
              onClick={() => handleJobClick(job)}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {job.name}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Posted on:</span>{" "}
                {new Date(job.createdAt).toLocaleDateString()}
              </p>
              <p className="text-sm font-medium text-gray-700">
                {job.applications.length}{" "}
                {job.applications.length === 1 ? "Applicant" : "Applicants"}
              </p>

              {/* Trash Icon for Deletion */}
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent modal from opening
                  setConfirmDelete(true);
                  setSelectedJob(job);
                }}
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
            </div>
          ))
        ) : (
          <div className="text-center text-gray-600">No jobs posted yet.</div>
        )}
      </div>

      {modalOpen && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center overflow-hidden">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-11/12 max-w-3xl max-h-[80vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600 transition duration-300"
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

            {/* Job Name */}
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-3">
              {selectedJob.name} - Applicants
            </h2>

            {/* Applicants List */}
            <ul className="space-y-6">
              {selectedJob.applications.map((applicant, index) => (
                <li
                  key={applicant._id} // Using applicant._id to ensure unique keys
                  className="border-b border-gray-300 pb-4 flex flex-col gap-4"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:gap-6">
                    <div>
                      <strong className="text-sm font-medium text-gray-500">
                        Name:
                      </strong>
                      <p className="text-lg text-gray-800">
                        {applicant.fullName}
                      </p>
                    </div>
                    <div>
                      <strong className="text-sm font-medium text-gray-500">
                        Email:
                      </strong>
                      <p className="text-lg text-gray-800">{applicant.email}</p>
                    </div>
                    <div>
                      <strong className="text-sm font-medium text-gray-500">
                        Phone:
                      </strong>
                      <p className="text-lg text-gray-800">{applicant.phone}</p>
                    </div>
                  </div>
                  <div>
                    <strong className="text-sm font-medium text-gray-500">
                      Why Hire:
                    </strong>
                    <p className="text-lg text-gray-800">{applicant.reason}</p>
                  </div>
                  <div>
                    <strong className="text-sm font-medium text-gray-500">
                      Additional:
                    </strong>
                    <p className="text-lg text-gray-800">
                      {applicant.additionalInfo}
                    </p>
                  </div>
                  <div>
                    <strong className="text-sm font-medium text-gray-500">
                      Status:
                    </strong>
                    <p
                      className={`text-lg font-semibold ${
                        applicant.status === "selected"
                          ? "text-green-600"
                          : applicant.status === "rejected"
                          ? "text-red-600"
                          : "text-gray-600"
                      }`}
                    >
                      {applicant.status.charAt(0).toUpperCase() +
                        applicant.status.slice(1)}
                    </p>
                  </div>

                  {/* Action Buttons for Pending Applicants */}
                  {applicant.status === "Pending" && (
                    <div className="mt-4 flex gap-6 justify-end">
                      <button
                        className="bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-green-700 transition duration-200"
                        onClick={() => handleSelectionChange(index, true)}
                        disabled={applicant.status !== "Pending"}
                      >
                        Select
                      </button>
                      <button
                        className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-red-700 transition duration-200"
                        onClick={() => handleSelectionChange(index, false)}
                        disabled={applicant.status !== "Pending"}
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

      {/* Delete Confirmation Modal */}
      {confirmDelete && selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-xl w-11/12 max-w-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Are you sure you want to delete this job?
            </h2>
            <div className="flex justify-between gap-4">
              <button
                className="bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-red-700"
                onClick={handleDeleteJob}
              >
                Yes, Delete
              </button>
              <button
                className="bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg shadow hover:bg-gray-700"
                onClick={() => setConfirmDelete(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
