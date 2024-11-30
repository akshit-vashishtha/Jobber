import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRoutes from "./components/routes";

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

<<<<<<< Updated upstream
      {/* Dynamic Routes */}
      <div className={`flex-grow ${hideHeaderFooter ? "" : "pt-16"} bg-gray-50`}>
        <AppRoutes />
      </div>

      {/* Conditionally render Footer */}
      {!hideHeaderFooter && (
        <div className="bg-gray-800 text-white">
          <Footer />
        </div>
      )}
=======
      {/* Content Section */}
      {/* <div className="flex-grow pt-16 bg-gray-50">
        <FindJob />
         <Landing/>
      </div> */}
      <Login/>
        {/* <Signup/> */}
      {/* Footer
      <div className="bg-gray-800 text-white">
        <Footer />
      </div> */}
>>>>>>> Stashed changes
    </div>
  );
}
