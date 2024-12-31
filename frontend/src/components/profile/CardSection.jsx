import React, { useState, useEffect } from "react";
import AppliedSection from "./AppliedSection";
import PostedSection from "./PostedSection";
import Cookies from "js-cookie";

export default function CardSection() {
  const [check, setCheck] = useState("applied");
  const [posted, setPosted] = useState([]); // State to hold the posted jobs
  const [loading, setLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track error
  const [jobtrigger, setjobtrigger] = useState(false);
  useEffect(() => {
    const fetchPostedJobs = async () => {
      if (check === "posted") {
        try {
          setLoading(true);
          const response = await fetch(
            "https://jobber-server.vercel.app/dashboard/profile",
            {
              headers: {
                token: Cookies.get("token"), 
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to fetch posted jobs");
          }

          const data = await response.json();
          setPosted(data.jobs || []); 
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchPostedJobs();
  }, [check , jobtrigger]); 

  return (
    <div className="w-[97%] bg-gray-100 rounded-2xl flex-col ml-[1.5%] shadow-lg">
      <div className="buttons flex gap-5 m-[2.5%]">
        <button
          className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300"
          onClick={() => setCheck("applied")}
        >
          Applied
        </button>
        <button
          className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300"
          onClick={() => setCheck("posted")}
        >
          Posted
        </button>
      </div>

      <div className="p-4">
        {check === "applied" && <AppliedSection />}
        {check === "posted" && (
          <>
            {loading ? (
              <div className="text-center text-gray-600">
                Loading posted jobs...
              </div>
            ) : error ? (
              <div className="text-center text-red-500">Error: {error}</div>
            ) : posted.length === 0 ? (
              <div className="text-center text-gray-600">
                No posted jobs available.
              </div>
            ) : (
                    <PostedSection jobs={posted} setjobtrigger={setjobtrigger} /> // Pass the fetched posted jobs to PostedSection
            )}
          </>
        )}
      </div>
    </div>
  );
}
