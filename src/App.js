import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Project from "./components/Project";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import BgCircles from "./components/BgCircles";
import PageLoader from "./components/PageLoader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.onreadystatechange = () => {
      setIsLoading(false);
    };
  });

  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <BgCircles />
        {isLoading && <PageLoader />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/works" element={<Works />} />
          <Route path="/works/:id" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
