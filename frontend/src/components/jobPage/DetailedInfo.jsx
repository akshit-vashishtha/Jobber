import React from 'react';

export default function DetailedInfo({description, jobType, tags}) {
  const jobDetails = {
    startDate: 'December 10, 2024',
    estimatedDelivery: '6 months',
  };

  return (
    <div className="top-[45%] left-0 w-[90%] p-6 bg-gray-300 rounded-lg ml-[5%] shadow-md z-10 sm:top-[50%] md:top-[47%]">
        <h1 className="text-2xl font-bold mb-4">Job Details</h1>

        {/* Job Description */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700">{description}</p>
        </section>

        {/* Key Responsibilities */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Key Responsibilities</h2>
          <ul className="list-disc list-inside text-gray-700">
            {tags.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Start Date */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Start Date</h2>
          <p className="text-gray-700">{jobDetails.startDate}</p>
        </section>

        {/* Estimated Time of Delivery */}
        <section>
          <h2 className="text-xl font-semibold mb-2">Estimated Time of Delivery</h2>
          <p className="text-gray-700">{jobDetails.estimatedDelivery}</p>
        </section>
      </div>
  );
}
