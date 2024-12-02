import { Routes, Route } from "react-router-dom";
import PostJob from "./postJob/PostJob";
import FindJob from "./findJob/FindJob";

export default function Dashboard() {
  return (
    <Routes>
      <Route path="postjob" element={<PostJob />} />
      <Route path="findjob" element={<FindJob />} />
    </Routes>
  );
}
