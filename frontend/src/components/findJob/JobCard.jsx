import React, { useState } from 'react';

export default function JobCard({ role, organisation, location, jobType, salary, tags }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle opening/closing the modal
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    <div className="max-w-sm p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      {/* Company Logo */}
      <div className="flex items-center mb-4">
        <img 
          src="https://via.placeholder.com/50" 
          alt="Company Logo" 
          className="h-12 w-12 rounded-full border border-gray-300"
        />
        <div className="ml-3">
          <h3 className="text-lg font-semibold text-gray-800">{role}</h3>
          <p className="text-sm text-gray-500">{organisation}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Location: <span className="font-medium">{location}</span>
        </p>
        <p className="text-sm text-gray-600">
          Job Type: <span className="font-medium">{jobType}</span>
        </p>
        <p className="text-sm text-gray-600">
          Salary: <span className="font-medium">{salary}</span>
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags && tags.map((tag, index) => (
          <span key={index} className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-600">
            {tag}
          </span>
        ))}
      </div>

      {/* Action Button */}
      <div className="flex justify-end">
        <button 
          className="px-4 py-2 bg-slate-500 text-white rounded-3xl text-sm font-medium hover:bg-black hover:text-white transition-colors"
          onClick={toggleModal}
        >
          View More
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-1/3">
            <h2 className="text-xl font-semibold">{role} - {organisation}</h2>
            <p className="text-sm mt-4">Location: {location}</p>
            <p className="text-sm">Job Type: {jobType}</p>
            <p className="text-sm">Salary: {salary}</p>
            <p className="mt-4">More details about the job can go here...</p>
            <button 
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
