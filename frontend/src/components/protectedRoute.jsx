import { Navigate } from "react-router-dom";

// Function to get the value of a specific cookie by name
function getCookie(name) {
  const cookieArr = document.cookie.split("; ");
  for (let cookie of cookieArr) {
    const [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

function ProtectedRoute({ children }) {
  const token = getCookie("token");
  return token ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
