import React from 'react';
import { Link } from 'react-router-dom';
export default function HeroLeft() {
  return (
    <div className="w-full flex flex-col justify-center items-start p-10 ">
      {/* Heading */}
      <div className="heading mb-8">
        <h1 className="text-white text-6xl font-semibold leading-tight">
          Welcome to Jobber: Your Gateway to Jobs and Talent
        </h1>
      </div>

      {/* Tagline with Typewriter Effect */}
      <div className="tagline mb-8">
        <p className="text-2xl text-slate-300 mr-28 typewriter">
          Find your next job or hire the best talent – all in one place.
        </p>
      </div>

      {/* Button Section */}
      <div className="buttonSection mt-8 flex gap-6">
        <Link to="login">
        <button className="h-12 w-48 bg-white text-black rounded-3xl font-medium hover:bg-gray-100 transition-colors duration-300">
          Login
        </button>
        </Link>
        <Link to="signup">
        <button className="h-12 w-48 bg-white text-black rounded-3xl font-medium hover:bg-gray-100 transition-colors duration-300">
          Signup
        </button>
        </Link>
      </div>
    </div>
  );
}
