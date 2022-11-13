import "./App.css";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import LandingPage from "./pages/LandingPage";

import EditSchool from "./pages/EditUser";

import AddUserDetails from "./pages/AddUserDetails";
import CreateEvent from "./pages/CreateBlog";
import Blogs from "./pages/Blogs";

import OverView from "./pages/OverVew";
import Management from "./pages/Management";
import Logout from "./pages/Logout";
import Schools from "./pages/Schools";
import SingleBlog from "./pages/SingleBlog";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details" element={<AddUserDetails />} />
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/reset_password" element={<ResetPassword />} />
        <Route path="/landing_page" element={<LandingPage />} />
        <Route path="/" element={<OverView />} />
        <Route path="/edit_profile" element={<EditSchool />} />
        <Route path="/management" element={<Management />} />
        <Route path="/create_blog" element={<CreateEvent />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:blog_id" element={<SingleBlog />} />
        <Route path="/schools" element={<Schools />} />
      </Routes>
    </Router>
  );
}

export default App;
