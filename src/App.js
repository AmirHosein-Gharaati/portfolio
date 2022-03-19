import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Project from "./components/Project";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import BgCircles from "./components/BgCircles";
import PageLoader from "./components/PageLoader";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  document.onreadystatechange = () => {
    if (document.readyState === "complete") setIsLoading(false);
    else setIsLoading(true);
  };

  return (
    <div className="main">
      <BrowserRouter>
        <Navbar />
        <BgCircles />
        {isLoading && <PageLoader />}
        <div className="main__content">
          <Routes>
            <Route path="/" element={<Home title="Home" />} />
            <Route path="/about" element={<About title="About" />} />
            <Route path="/contact" element={<Contact title="Contact" />} />
            <Route path="/works" element={<Works title="Works" />} />
            <Route path="/works/:id" element={<Project />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
