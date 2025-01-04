import "./App.css";
import AboutMe from "./pages/AboutMe";
import MainPortfolio from "./pages/MainPortfolio";
import AnimatedCursron from "./components/AnimatedCursor";
import ContactMe from "./pages/ContactMe";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavPage";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import WorkShop from "./pages/WorkShop";
import WorkshopDescp from "./pages/WorkshopDescp";


function App() {
  return (
    <div className="header_bg">
      {/* Shared Navbar */}
      <Navbar />
      <AnimatedCursron />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/workshop" element={<WorkShop />} />
        <Route path="/workshopdesp" element={<WorkshopDescp />} />
      </Routes>
    </div>
  );
}

export default App;
