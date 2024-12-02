import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./components/routes";
import JobPage from "./components/jobPage/JobPage";
import Test from "./components/Test";
export default function App() {
  const location = useLocation(); // Get the current location

  // Define routes where you don't want the Header and Footer
  const noHeaderFooterRoutes = ["/login", "/signup"];

  // Check if the current route is in the list
  const hideHeaderFooter = noHeaderFooterRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Conditionally render Header */}
      {!hideHeaderFooter && (
        <div className="header fixed top-0 w-full z-10">
          <Header />
        </div>
      )}

      {/* Dynamic routes */}
      <div className={`flex-grow ${hideHeaderFooter ? "" : "pt-16"} bg-gray-50`}>
        <AppRoutes />
        {/* <Test/> */}
        {/* <JobPage/> */}
      </div>

      {/* Conditionally render Footer */}
      {/* {!hideHeaderFooter && (
        <div className="bg-gray-800 text-white">
          <Footer />
        </div>
      )} */}

      

    </div>
  );
}
