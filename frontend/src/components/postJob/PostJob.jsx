import React from "react";

export default function PostJob() {
  return (
    <div className="postjob h-screen flex justify-center items-center bg-gray-100">
      <div
        className="mainForm w-[90%] max-w-[800px] bg-white shadow-lg rounded-2xl p-[2%] overflow-y-auto"
        style={{ maxHeight: "90%" }}
      >
        <h1 className="text-3xl font-bold mb-4 text-center">Post a Job</h1>

        {/* Job Name */}
        <div className="mb-4">
          <h2 className="text-xl mb-2">Job Name</h2>
          <input
            type="text"
            name="jobname"
            placeholder="Enter job title"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Job Description */}
        <div className="mb-4">
          <h2 className="text-xl mb-2">Job Description</h2>
          <textarea
            name="jobdescription"
            placeholder="Describe the job in detail"
            className="w-full h-[150px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Category */}
        <div className="mb-4">
          <h2 className="text-xl mb-2">Category</h2>
          <select
            name="category"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select a category</option>
            <option value="web-development">Web Development</option>
            <option value="graphic-design">Graphic Design</option>
            <option value="content-writing">Content Writing</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <h2 className="text-xl mb-2">Skills Required</h2>
          <input
            type="text"
            name="skills"
            placeholder="e.g., React, Node.js, SEO"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Budget */}
        <div className="mb-4">
          <h2 className="text-xl mb-2">Budget</h2>
          <div className="flex gap-4">
            <select
              name="budgetType"
              className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="fixed">Fixed Price</option>
              <option value="hourly">Hourly Rate</option>
            </select>
            <input
              type="number"
              name="budget"
              placeholder="Enter amount"
              className="w-2/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Deadline */}
        <div className="mb-4">
          <h2 className="text-xl mb-2">Deadline</h2>
          <input
            type="date"
            name="deadline"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Attachments */}
        <div className="mb-4">
          <h2 className="text-xl mb-2">Attachments (Optional)</h2>
          <input
            type="file"
            name="attachments"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Post Job
          </button>
        </div>
      </div>
    </div>
  );
}
