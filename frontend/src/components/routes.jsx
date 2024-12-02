// routes.jsx
import { Routes, Route } from "react-router-dom";
import Landing from "./landing/Landing"
import PostJob from "./postJob/PostJob";
import FindJob from "./findJob/FindJob";
import Signup from "./login_signup/Signup";
import Login from "./login_signup/Login";
import JobPage from "./jobPage/JobPage";
import Profile from "./profile/Profile";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/postjob" element={<PostJob />} />
      <Route path="/findjob" element={<FindJob />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/jobpage" element={<JobPage/>}/>
      <Route path="/profile" element={<Profile/>}></Route>
    </Routes>
  );
}
