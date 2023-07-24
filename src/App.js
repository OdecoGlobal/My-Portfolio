import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

// components
import Navbar from "./components/Navbar";
import Home from "./Pages/home/Home";
import About from "./Pages/about/About";
import Projects from "./Pages/projects/Projects";
// styles
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <BrowserRouter>
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      {isOpen && <div className="overlay"></div>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
