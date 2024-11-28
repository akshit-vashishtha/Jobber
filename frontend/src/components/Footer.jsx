import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-6 bottom-0">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-2">&copy; 2024 Jobber. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="/about" className="hover:text-blue-400 transition">About Us</a>
          <a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-400 transition">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
