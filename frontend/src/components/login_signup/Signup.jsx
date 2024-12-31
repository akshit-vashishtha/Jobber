import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://jobber-eosin.vercel.app/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      
      const data = await response.json();
      if (response.ok) {
        alert("Signup successful!");
        window.location.href = "/login";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-[3%] bg-black">
      <div
        className="bg-cover bg-center relative h-[75%] w-[90%] p-4 rounded-2xl overflow-hidden shadow-lg sm:w-[70%] md:w-[50%] lg:w-[35%]"
        style={{ backgroundImage: "url(./loginbg.avif)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center">
          {/* Form Container */}
          <div className="w-[80%] bg-opacity-0 p-5 rounded-xl">
            <h1 className="text-white text-3xl font-bold text-center mb-8 tracking-wider uppercase">
              Become a member
            </h1>
            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Username Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Username"
                  value={name}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full p-4 pl-5 rounded-lg bg-white bg-opacity-10 border border-white/30 text-white 
                  placeholder-gray-400 outline-none focus:border-white 
                  transition-all duration-300 tracking-wider"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-4 pl-5 rounded-lg bg-white bg-opacity-10 border border-white/30 text-white 
                  placeholder-gray-400 outline-none focus:border-white 
                  transition-all duration-300 tracking-wider"
                />
              </div>
              
              {/* Password Input */}
              <div className="relative">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-4 pl-5 rounded-lg bg-white bg-opacity-10 border border-white/30 text-white 
                  placeholder-gray-400 outline-none focus:border-white 
                  transition-all duration-300 tracking-wider"
                />
              </div>
              
              {/* Signup Button */}
              <button
                type="submit"
                className="w-full p-4 rounded-lg bg-gradient-to-r from-slate-950 to-slate-900 text-white 
                font-semibold uppercase tracking-wider hover:bg-gray-900 hover:to-black
                transition-all duration-300 transform hover:scale-[1.02] active:scale-100"
              >
                Sign Up
              </button>

              {/* Already a user link */}
              <div className="text-center mt-4">
                <span className="text-white/60 text-sm mr-2">
                  Already a member?
                </span>
                <Link
                to="/login"
                className="text-white underline hover:text-white/80 transition-colors duration-300">
                  Login
                </Link>
                  
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}