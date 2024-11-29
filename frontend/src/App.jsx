import Landing from "./components/landing/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FindJob from "./components/findJob/FindJob";
import Login from "./components/login_signup/Login";
import Signup from "./components/login_signup/Signup";
export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      {/* <div className="header fixed top-0 w-full z-10">
        <Header />
      </div> */}

      {/* Content Section */}
      {/* <div className="flex-grow pt-16 bg-gray-50">
        <FindJob />
         <Landing/>
      </div> */}
      {/* <Login/> */}
        <Signup/>
      {/* Footer
      <div className="bg-gray-800 text-white">
        <Footer />
      </div> */}
    </div>
  );
}
