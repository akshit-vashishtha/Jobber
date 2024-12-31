import React, { useEffect, useState } from "react";

import Cookies from "js-cookie";

export default function AppliedSection() {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null); // For modal content
 

  useEffect(() => {
    // Fetch applications from the backend
    fetch("https://jobber-server.vercel.app/dashboard/applied", {
      headers: {
        token: Cookies.get("token"),
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch applications");
        }
        return response.json();
      })
      .then((data) => setApplications(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleCardClick = (application) => {
    setSelectedApplication(application); // Open modal with selected application data
  };

  const closeModal = () => {
    setSelectedApplication(null); // Close modal
  };

  return (
    <div className="applied w-full p-6 bg-gray-100">
      <div className="flex flex-wrap gap-6 items-start justify-start">
        {applications && applications.length > 0 ? (
          applications.map((application) => (
            <div
              key={application._id}
              className="w-full sm:w-[45%] lg:w-[30%] bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              onClick={() => handleCardClick(application)}
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {application.fullName}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Email:</span> {application.email}
              </p>
              <p
                className={`text-sm font-medium ${
                  application.status === "Selected"
                    ? "text-green-500"
                    : application.status === "Rejected"
                    ? "text-red-500"
                    : application.status === "Pending"
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
          <div className="text-gray-600 text-lg">No applications found</div>
        )}
      </div>

      {/* Modal */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="relative bg-white w-[90%] sm:w-[60%] lg:w-[40%] p-6 rounded-lg shadow-lg">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-xl font-bold"
              onClick={closeModal}
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {selectedApplication.fullName}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Email:</span>{" "}
                {selectedApplication.email}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Phone:</span>{" "}
                {selectedApplication.phone}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Reason:</span>{" "}
                {selectedApplication.reason}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Additional Info:</span>{" "}
                {selectedApplication.additionalInfo}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Status:</span>{" "}
                {selectedApplication.status.charAt(0).toUpperCase() +
                  selectedApplication.status.slice(1)}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                <span className="font-medium">Applied At:</span>{" "}
                {new Date(selectedApplication.appliedAt).toLocaleDateString(
                  "en-US",
                  {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
