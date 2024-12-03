import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import jobs from './jobs.json'; // Assuming jobs data is stored in jobs.json file

export default function JobSection() {
  const [jobs, setjobs] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:8000/dashboard/findjob");
        if (!response.ok) {
          throw new Error("failed to load data");
        }
        const data = await response.json();
        setjobs(data.job);
      } catch (error) {
        seterror(error);
      } finally {
        setloading(false);
      }
    };
    fetchdata();
  }, []);
  console.log(jobs);
  if (loading) {
    return <div className="text-center text-gray-600">Loading jobs...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="h-[100%] flex flex-wrap gap-4 justify-center items-center">
      {jobs && jobs.map((job, index) => {
        return <JobCard
          key={index}
          name={job.name}
          description={job.description}
          deadline={job.deadline}
          jobType={job.category}
          salary={job.budget}
          tags={job.skills}
        />
      })}
    </div>
  );
}
