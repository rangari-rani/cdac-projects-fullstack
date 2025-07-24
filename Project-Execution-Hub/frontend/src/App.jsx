import { useEffect } from "react";
import Auth from "./pages/Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/Auth/Action";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import ProjectDetails from "./pages/Project/ProjectDetails";
import IssueDetails from "./pages/Issue/IssueDetails";
import UpdateProjectForm from "./pages/Project/UpdateProjectForm";
import Loader from "./pages/Loader/Loader";
import AcceptInvitation from "./pages/Project/AcceptInvitation";
import Subscription from "./pages/subscription/Subscription";
import UpgradeSuccess from "./pages/subscription/UpgradeSuccess";
import { getUserSubscription } from "./redux/Subscription/Action";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  useEffect(() => {
    dispatch(getUser(auth.jwt || localStorage.getItem("jwt")));
    dispatch(getUserSubscription(auth.jwt || localStorage.getItem("jwt")))
  }, [auth.jwt]);

  return (
    <>
      
      {auth.loading ? (
  <Loader />
) : auth.user ? (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      <Route path="/project/update/:id" element={<UpdateProjectForm />} />
      <Route path="/project/:projectId/issue/:issueId" element={<IssueDetails />} />
      <Route path="/accept_invitation" element={<AcceptInvitation />} />
      <Route path="/upgrade_plan" element={<Subscription />} />
      <Route path="/upgrade_plan/success" element={<UpgradeSuccess />} />
    </Routes>

    {/* 🔻 Footer placed here */}
  <footer className="bg-white border-t border-gray-200 text-gray-700 text-sm">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-center sm:text-left">
          <p>
            Built with ❤️ by <span className="font-semibold">Rani Rangari</span>
          </p>
          <p className="text-s text-gray-800 mt-1">
            🎓 PG-DAC (CDAC) Academic Project | SoftPolynomials, Nagpur, India | 2023

          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/rangari-rani"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/rani-rangari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  </>
) : (
  <Auth />
)}

      
    </>
  );
}

export default App;
