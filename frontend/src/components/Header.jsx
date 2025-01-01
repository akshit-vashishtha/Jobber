import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export default function Header() {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const navigate = useNavigate();

  const handlelogout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  return (
    <>
      <nav className="bg-black">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo and Title */}
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/48/FFFFFF/external-figma-social-media-tanah-basah-glyph-tanah-basah.png"
              className="h-8"
              alt="Jobber Logo"
            />
            <span className="text-2xl font-semibold text-white">Jobber</span>
          </a>

          {/* Navbar Links */}
          <ul className="hidden md:flex flex-row space-x-8">
            <li className="relative group">
              <Link
                to="/"
                className="text-white px-3 py-2 transition-all focus:outline-none"
              >
                Home
              </Link>
              {/* Smooth underline */}
              <span className="absolute left-0 bottom-[-10px] w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <Link
                to="dashboard/findjob"
                className="text-white px-3 py-2 transition-all focus:outline-none"
              >
                Find Job
              </Link>
              {/* Smooth underline */}
              <span className="absolute left-0 bottom-[-10px] w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </li>
            <li className="relative group">
              <Link
                to="dashboard/postjob"
                className="text-white px-3 py-2 transition-all focus:outline-none"
              >
                Post Job
              </Link>
              {/* Smooth underline */}
              <span className="absolute left-0 bottom-[-10px] w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </li>
          </ul>

          {/* User Profile Section */}
          <div className="relative flex items-center" ref={dropdownRef}>
            <button
              type="button"
              className="flex text-sm bg-gray-800 rounded-full focus:outline-none"
              onClick={toggleDropdown}
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://via.placeholder.com/150"
                alt="user profile"
              />
            </button>
            {isDropdownVisible && (
              <div className="absolute right-0 mt-32 w-48 bg-white rounded-md shadow-lg dark:bg-gray-800 z-10">
                {/* Dropdown content */}

                <ul className="py-2">
                  <Link to="dashboard/profile">
                    <li>
                      <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200">
                        Profile
                      </p>
                    </li>
                  </Link>

                  <li>
                    <button
                      onClick={() => handlelogout()}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
