import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        
        document.cookie = `token=${data.token}; path=/; max-age=3600; secure; samesite=strict`;

        console.log("Login successful!");
       
        window.location.href = "/dashboard/findjob";
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
        className="bg-cover bg-center relative h-[70%] w-[30%] rounded-2xl overflow-hidden shadow-lg"
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
                <a 
                  href="#" 
                  className="text-white underline hover:text-white/80 transition-colors duration-300"
                >
                  Register
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}