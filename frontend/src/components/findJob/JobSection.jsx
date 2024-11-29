import React from 'react';
import JobCard from './JobCard';
import jobs from './jobs.json'; // Assuming jobs data is stored in jobs.json file

export default function JobSection() {
  return (
    <div className="h-[100%] flex flex-wrap gap-4 justify-center items-center">
      {jobs.map((job, index) => (
        <JobCard 
          key={index} 
          role={job.role} 
          organisation={job.organisation} 
          location={job.location} 
          jobType={job.jobType} 
          salary={job.salary} 
          tags={job.tags} 
        />
      ))}
    </div>
  );
}
