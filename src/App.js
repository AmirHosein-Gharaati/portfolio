import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Project from "./components/Project";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import BgCircles from "./components/BgCircles";
import PageLoader from "./components/PageLoader";

function App() {
  return (
    <div className="main">
      <Navbar />
      <BgCircles />
      {/* <PageLoader /> */}
      <Home />
      {/* <About /> */}
      {/* <Works /> */}
      {/* <Project /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
