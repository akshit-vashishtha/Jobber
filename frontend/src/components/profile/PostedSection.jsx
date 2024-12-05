import React, { useState } from 'react';

export default function PostedSection() {
    const [modalOpen, setModalOpen] = useState(false); // Controls the modal visibility
    const [selectedJob, setSelectedJob] = useState(null); // Holds the selected job data

    let posted = [
        {
            jobName: "Software Engineer",
            datePosted: "2024-12-01",
            applied: [
                {
                    name: "Alice Johnson",
                    userID: 1,
                    email: "alice.johnson@example.com",
                    phone: "123-456-7890",
                    whyHire: "I have 5 years of experience in software development and specialize in React and Node.js.",
                    additional: "Looking forward to contributing to impactful projects.",
                    selected: null // Initial state
                },
                {
                    name: "Bob Smith",
                    userID: 2,
                    email: "bob.smith@example.com",
                    phone: "987-654-3210",
                    whyHire: "Passionate about solving complex problems with innovative solutions.",
                    additional: "Available for immediate start.",
                    selected: null // Initial state
                }
            ]
        },
        {
            jobName: "Data Analyst",
            datePosted: "2024-11-28",
            applied: [
                {
                    name: "Charlie Brown",
                    userID: 3,
                    email: "charlie.brown@example.com",
                    phone: "555-123-4567",
                    whyHire: "Proficient in data visualization and analysis using Python and Tableau.",
                    additional: "Excited to make data-driven decisions.",
                    selected: null // Initial state
                },
                {
                    name: "Diana Prince",
                    userID: 4,
                    email: "diana.prince@example.com",
                    phone: "444-987-6543",
                    whyHire: "Strong background in statistical analysis and predictive modeling.",
                    additional: "Available for part-time or full-time roles.",
                    selected: null // Initial state
                }
            ]
        },
        {
            jobName: "UX Designer",
            datePosted: "2024-12-03",
            applied: [
                {
                    name: "Emily Davis",
                    userID: 5,
                    email: "emily.davis@example.com",
                    phone: "777-111-2222",
                    whyHire: "Skilled in creating user-friendly designs and prototypes with Figma.",
                    additional: "Open to relocation.",
                    selected: null // Initial state
                },
                {
                    name: "Frank White",
                    userID: 6,
                    email: "frank.white@example.com",
                    phone: "888-333-4444",
                    whyHire: "Experienced in conducting usability testing and design research.",
                    additional: "Looking to contribute to innovative projects.",
                    selected: null // Initial state
                }
            ]
        },
        ,
        {
            jobName: "Data Analyst",
            datePosted: "2024-11-28",
            applied: [
                {
                    name: "Charlie Brown",
                    userID: 3,
                    email: "charlie.brown@example.com",
                    phone: "555-123-4567",
                    whyHire: "Proficient in data visualization and analysis using Python and Tableau.",
                    additional: "Excited to make data-driven decisions.",
                    selected: null // Initial state
                },
                {
                    name: "Diana Prince",
                    userID: 4,
                    email: "diana.prince@example.com",
                    phone: "444-987-6543",
                    whyHire: "Strong background in statistical analysis and predictive modeling.",
                    additional: "Available for part-time or full-time roles.",
                    selected: null // Initial state
                }
            ]
        },
        {
            jobName: "UX Designer",
            datePosted: "2024-12-03",
            applied: [
                {
                    name: "Emily Davis",
                    userID: 5,
                    email: "emily.davis@example.com",
                    phone: "777-111-2222",
                    whyHire: "Skilled in creating user-friendly designs and prototypes with Figma.",
                    additional: "Open to relocation.",
                    selected: null // Initial state
                },
                {
                    name: "Frank White",
                    userID: 6,
                    email: "frank.white@example.com",
                    phone: "888-333-4444",
                    whyHire: "Experienced in conducting usability testing and design research.",
                    additional: "Looking to contribute to innovative projects.",
                    selected: null // Initial state
                }
            ]
        }
    ];

    // Function to open modal and set selected job
    const handleJobClick = (job) => {
        setSelectedJob(job);
        setModalOpen(true);
    };

    // Function to close modal
    const closeModal = () => {
        setModalOpen(false);
        setSelectedJob(null);
    };

    // Handle selection or rejection of applicants
    const handleSelectionChange = (index, status) => {
        setSelectedJob((prevJob) => {
            const updatedApplicants = [...prevJob.applied];
            updatedApplicants[index].selected = status; // Modify only the selected applicant
            return {
                ...prevJob,
                applied: updatedApplicants,
            };
        });
    };

    return (
        <div className="w-[98%] rounded-2xl p-4 flex justify-self-center justify-center mb-4">
            {/* Job Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {posted.map((job, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:bg-gray-50 w-full"
                        onClick={() => handleJobClick(job)}
                    >
                        <h2 className="text-lg font-bold text-black">{job.jobName}</h2>
                        <p className="text-sm text-gray-600">Posted on: {job.datePosted}</p>
                        <p className="text-sm text-gray-700">{job.applied.length} Applicants</p>
                    </div>
                ))}
            </div>

            {modalOpen && selectedJob && (
                <div className="fixed top-10 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center overflow-hidden ">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-2xl max-h-[90vh] overflow-y-auto relative">
                        <button
                            className="absolute top-2 right-2 text-red-600 font-bold hover:text-red-800"
                            onClick={closeModal}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-bold mb-4 text-black">
                            {selectedJob.jobName} - Applicants
                        </h2>
                        <ul>
                            {selectedJob.applied.map((applicant, index) => (
                                <li
                                    key={applicant.userID}
                                    className="border-b border-gray-300 py-4 flex flex-col gap-2"
                                >
                                    <div>
                                        <strong>Name:</strong> <span className="text-black">{applicant.name}</span>
                                    </div>
                                    <div>
                                        <strong>Email:</strong> <span className="text-black">{applicant.email}</span>
                                    </div>
                                    <div>
                                        <strong>Phone:</strong> <span className="text-black">{applicant.phone}</span>
                                    </div>
                                    <div>
                                        <strong>Why Hire:</strong> <span className="text-black">{applicant.whyHire}</span>
                                    </div>
                                    <div>
                                        <strong>Additional:</strong> <span className="text-black">{applicant.additional}</span>
                                    </div>
                                    <div>
                                        <strong>Status:</strong>{" "}
                                        <span
                                            className={`font-bold ${
                                                applicant.selected === true
                                                    ? "text-green-600"
                                                    : applicant.selected === false
                                                    ? "text-red-600"
                                                    : "text-gray-600"
                                            }`}
                                        >
                                            {applicant.selected === true
                                                ? "Selected"
                                                : applicant.selected === false
                                                ? "Rejected"
                                                : "Pending"}
                                        </span>
                                    </div>
                                    {/* Action Buttons */}
                                    <div className="flex gap-4 mt-2">
                                        <button
                                            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                                            onClick={() => handleSelectionChange(index, true)}
                                        >
                                            Select
                                        </button>
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                            onClick={() => handleSelectionChange(index, false)}
                                        >
                                            Reject
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
