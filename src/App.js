import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Project from "./components/Project";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import BgCircles from "./components/BgCircles";

function App() {
  return (
    <div className="main">
      <Navbar />
      <BgCircles />
      <Home />
      {/* <About /> */}
      {/* <Works /> */}
      {/* <Project /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
