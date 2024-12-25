import React from 'react';
import { Link } from 'react-router-dom';

export default function JobCard({ jobId, name, description, deadline, jobType, salary, tags, postedBy }) {

  return (
    <div className="w-[100%] pl-[1%] pt-[2%] pr-[1%] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
      {/* Company Logo */}
      <div className="flex items-center mb-4">
        <img
          src="https://via.placeholder.com/50"
          alt="Company Logo"
          className="h-12 w-12 rounded-full border border-gray-300"
        />
        <div className="ml-[1%]">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      {/* Job Details */}
      <div className="mb-[1%]">
        <p className="text-sm text-gray-600">
          Deadline: <span className="font-medium">{deadline}</span>
        </p>
        <p className="text-sm text-gray-600">
          Job Type: <span className="font-medium">{jobType}</span>
        </p>
        <p className="text-sm text-gray-600">
          Salary: <span className="font-medium">{salary}</span>
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-[0.5%] mb-[1%] lg:mb-0">
        {tags && tags.map((tag, index) => (
          <span key={index} className="text-xs px-[1%] py-1 bg-gray-100 rounded-full text-gray-600">
            {tag}
          </span>
        ))}
      </div>

      {/* Action Button */}
      <div className="flex justify-self-end">
        {/* Pass props using the state */}
        <Link to="/dashboard/jobpage" state={{jobId, name, deadline, salary, description, jobType, tags, postedBy }}>
          <button
            className="mb-4 p-2 bg-slate-500 text-white rounded-2xl text-sm font-medium hover:bg-black hover:text-white transition-colors"
          >
            View More
          </button>
        </Link>
      </div>
    </div>
  );
}
