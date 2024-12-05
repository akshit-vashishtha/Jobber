import React ,{useRef} from "react";
import Cookies from "js-cookie";
export default function PostJob() {
      
  const jobname = useRef();
  const jobdescription = useRef();
  const jobcategory = useRef();
  const jobskills = useRef();
  const jobbudget = useRef();
  const jobdeadline = useRef();
  const HandleSubmit = async (e)=>{
    e.preventDefault();
    const FormData = {
      name: jobname.current.value,
      description: jobdescription.current.value,
      category: jobcategory.current.value,
      skills: jobskills.current.value,
      budget: jobbudget.current.value,
      deadline: jobdeadline.current.value,
    }
    try {
      const response = await fetch("http://localhost:8000/dashboard/postjob", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          token: Cookies.get("token"),
        },
        body: JSON.stringify(FormData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Job Possted Succefully");
      } else {
        alert("Failed to post job" + data.message);
      }
    } catch (error) {
      console.error("Error posting job:", error);
      alert("An error occurred while posting the job.");
    }

  }
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
            ref={jobname}
            placeholder="Enter job title"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Job Description */}
        <div className="mb-4">
          <h2 className="text-xl mb-2">Job Description</h2>
          <textarea
            name="jobdescription"
            ref={jobdescription}
            placeholder="Describe the job in detail"
            className="w-full h-[150px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Category */}
        <div className="mb-4">
          <h2 className="text-xl mb-2">Category</h2>
          <select
            name="category"
            ref={jobcategory}
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
            ref={jobskills}
            placeholder="e.g., React, Node.js, SEO"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Budget */}
        <div className="mb-4">
          <h2 className="text-xl mb-2">Budget</h2>
          <div className="flex gap-4">
            {/* <select
              name="budgetType"
              className="w-1/3 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="fixed">Fixed Price</option>
              <option value="hourly">Hourly Rate</option>
            </select> */}
            <input
              type="number"
              name="budget"
              ref={jobbudget}
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
            ref={jobdeadline}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Attachments */}
        

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            onClick={HandleSubmit}
            className="px-6 py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Post Job
          </button>
        </div>
      </div>
    </div>
  );
}
