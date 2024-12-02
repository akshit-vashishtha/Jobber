import { Routes, Route } from "react-router-dom";
import PostJob from "./postJob/PostJob";
import FindJob from "./findJob/FindJob";
import JobPage from "./jobPage/JobPage";
import Profile from "./profile/Profile";
export default function Dashboard() {
  return (
    <Routes>
      <Route path="postjob" element={<PostJob />} />
      <Route path="findjob" element={<FindJob />} />
      <Route path="jobpage" element={<JobPage />} />
      <Route path="profile" element={<Profile />}/>
    </Routes>
  );
}
