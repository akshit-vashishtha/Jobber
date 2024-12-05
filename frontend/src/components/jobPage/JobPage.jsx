import React from 'react';
import { useLocation } from 'react-router-dom';
import BasicInfo from './BasicInfo';
import DetailedInfo from './DetailedInfo';
import { useEffect } from 'react';
export default function JobPage() {
    useEffect(() => {
        // Scroll to the top of the page on component load
        window.scrollTo(0, 0);
        console.log("JobPage component is mounted!");
      }, []);
  const location = useLocation();
  const { name, location: jobLocation, salary, description, jobType, tags } = location.state || {};  // Destructure state

  console.log('Location state in JobPage:', location.state); // Should print the state

  return (
    <div className="h-screen w-[100%]">
      {/* Pass props to BasicInfo */}
      <BasicInfo name={name} location={jobLocation} salary={salary} />
      <DetailedInfo description={description} jobType={jobType} tags={tags}/>
    </div>
  );
}
