import React, { useState } from "react";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Use useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://jobber-server.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      console.log(data);

      if (response.ok) {
        Cookies.set("token", data.token);
        Cookies.set("name", data.user.name);
        Cookies.set("userId", data.user._id);
        console.log("Login successful!");

        // Use navigate instead of window.location.href
        navigate("/dashboard/findjob");
      } else {
        console.error(data.message);
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-[3%] bg-black">
      <div
        className="bg-cover bg-center relative h-[75%] w-[90%] rounded-2xl overflow-hidden shadow-lg sm:w-[70%] md:w-[50%] lg:w-[35%]"
        style={{ backgroundImage: "url(/loginbg.avif)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center">
          {/* Form Container */}
          <div className="w-[80%] bg-opacity-0 p-5 rounded-xl">
            <h1 className="text-white text-3xl font-bold text-center mb-8 tracking-wider uppercase">
              Enter System
            </h1>
            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
              
              {/* Login Button */}
              <button
                type="submit"
                className="w-full p-4 rounded-lg bg-gradient-to-r from-slate-950 to-slate-900 text-white 
                font-semibold uppercase tracking-wider hover:bg-gray-900 hover:to-black
                transition-all duration-300 transform hover:scale-[1.02] active:scale-100"
              >
                Access
              </button>

              {/* Not a user link */}
              <div className="text-center mt-4">
                <span className="text-white/60 text-sm mr-2">
                  Not a member?
                </span>
                <Link
                to="/signup"
                className="text-white underline hover:text-white/80 transition-colors duration-300">
                  Register
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
