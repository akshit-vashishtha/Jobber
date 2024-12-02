import { Routes, Route } from "react-router-dom";
import Landing from "./landing/Landing";
import Signup from "./login_signup/Signup";
import Login from "./login_signup/Login";
import Dashboard from "./dashboard"; // A wrapper for protected routes
import ProtectedRoute from "./protectedRoute";
export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
