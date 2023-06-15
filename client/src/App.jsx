import Hero from "./components/Hero/Hero";
import { Route, Routes } from "react-router-dom";
import About from "./components/pages/About/About";
import Pricing from "./components/pages/Pricing/Pricing";
import Pagenotfound from "./components/pages/PageNotFound/PageNoteFound";
import Register from "./components/pages/AuthPages/SignIn/Register";
import Login from "./components/pages/AuthPages/Login/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NoteLandingPage from "./components/pages/NoteFunctionPages/AddNote/NoteLandingPage";
import UserProfile from "./components/pages/NoteFunctionPages/UserProfile/UserProfile";
import Favorite from "./components/pages/NoteFunctionPages/Favorite/Favorite";
import CheckUser from "./components/ProtectedRoute/CheckUser";


function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        {/* Landing Page Routes */}
        <Route path="/" element={<Hero />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<Pagenotfound />} />
        {/* Authentication Page Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* TodoApp Function Pages  */}
        <Route path="/user" element={<CheckUser />}>
          <Route path="note" element={<NoteLandingPage />} />
          <Route path="note/profile" element={<UserProfile />} />
          <Route path="note/favorites" element={<Favorite />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
