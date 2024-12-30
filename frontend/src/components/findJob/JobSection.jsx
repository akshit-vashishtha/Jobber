import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import Cookies from "js-cookie";

export default function JobSection({searchQuery}) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/dashboard/findjob",
          {
            headers: {
              token: Cookies.get("token"),
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to load data");
        }
        const text = await response.text(); // Read the body as text
        if (!text) {
          throw new Error("No active jobs");
        }

        const data = JSON.parse(text); // Parse the response as JSON

        setJobs(data.job || []); // Ensure `data.job` is an array, otherwise default to empty array
      } catch (error) {
        setError(error.message || "An error occurred"); // Extract error message if it's available
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Logging jobs to check if data is being fetched properly
  console.log("Jobs:", jobs);

  const filteredJobs = jobs.filter((job) =>
    job.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return <div className="text-center text-gray-600">Loading jobs...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (filteredJobs.length === 0) {
    return <div className="text-center text-gray-600">No active jobs</div>;
  }

  return (
    <div className="h-[100%] flex flex-wrap gap-4 justify-center items-center">
      {filteredJobs.map((job, index) => (
        <JobCard
          key={index}
          jobId={job._id}
          name={job.name}
          description={job.description}
          deadline={job.deadline}
          jobType={job.category}
          salary={job.budget}
          tags={job.skills}
          postedBy = {job.userId}
        />
      ))}
    </div>
  );
}
