import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

export default function BasicInfo({ jobId, name, location, salary }) {
  console.log("BasicInfo" + jobId);
  const [applied, setApplied] = useState(false);
  const [modalToggle, setModalToggle] = useState(false);
  const [formData, setFormData] = useState({
    jobId: jobId,
    fullName: "",
    email: "",
    phone: "",
    reason: "",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState({});

  const handleCLick = () => {
    if (!applied) {
      setModalToggle(true);
    }
  };

  const closeModal = () => {
    setModalToggle(false);
    setErrors({}); // Reset errors on close
  };



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value, // Update state with new value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim())
      newErrors.fullName = "Full name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!formData.reason.trim()) newErrors.reason = "This field is mandatory.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Form is valid if no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:8000/dashboard/Apply", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            token: Cookies.get("token"),
          },
          body: JSON.stringify(formData), // Convert formData to JSON string
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log("Success:", data);
          setApplied(true); // Mark the job as applied
          closeModal(); // Close the modal
        } else {
          const errorData = await response.json();
          console.error("Error:", errorData);
          alert(errorData.message || "Failed to submit application.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while submitting the application.");
      }
    }
  };

  return (
    <>
      <div className="basicinfo h-[50vh] bg-black flex items-center flex-col gap-6 pt-11 relative">
        <h1 className="text-white text-5xl font-bold">{name}</h1>
        <div className="innerbasic flex justify-center gap-12">
          <div className="location flex gap-2 items-center">
            <img
              src="/locationIcon.png"
              alt="Location Icon"
              className="h-9 w-9 rounded-full bg-white"
            />
            <p className="text-white">{location}</p>
          </div>
          <div className="location flex gap-2 items-center">
            <img
              src="/moneyIcon.jpg"
              alt="Money Icon"
              className="h-9 w-9 rounded-full bg-black border-none"
            />
            <p className="text-white">{salary}</p>
          </div>
        </div>
        <div className="buttons flex gap-16">
          <Link to="/dashboard/findjob">
            <button className="bg-white text-black h-9 w-32 rounded-full hover:bg-gray-800 hover:text-white">
              See all jobs
            </button>
          </Link>
          <button
            className="bg-green-400 text-black h-9 w-32 rounded-full hover:bg-green-500"
            onClick={handleCLick}
          >
            {applied ? "Applied!" : "Apply Now"}
          </button>
        </div>
      </div>

      {/* Modal */}
      {modalToggle && (
        <div
          className="fixed top-0 left-0 w-[100vw] h-[100vh] bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white w-[80%] max-w-lg rounded-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-black text-2xl font-bold mb-4">Apply</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">Phone No</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">
                  Why Should We Hire You?
                </label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                ></textarea>
                {errors.reason && (
                  <p className="text-red-500 text-sm">{errors.reason}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700">
                  Additional Info (Optional)
                </label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
