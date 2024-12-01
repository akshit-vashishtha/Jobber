import React from 'react';
import { Link } from 'react-router-dom';

export default function JobCard({ role, organisation, location, jobType, salary, tags }) {
  return (
    <div className="w-[100%] h-[35vh] pl-4 pt-2 pr-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
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
      <div className="flex justify-self-end">
        {/* Pass props using the state */}
        <Link to="/jobpage" state={{ role, location, salary }}>
          <button
            className="px-4 py-2 bg-slate-500 text-white rounded-3xl text-sm font-medium hover:bg-black hover:text-white transition-colors"
          >
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}
