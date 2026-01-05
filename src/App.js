// import Navbar from "./components/Global/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
// import Projects from "./components/Pages/Projects";
// import Photography from "./components/Pages/Photography";
import Footer from "./components/Global/Footer";
// import Art from "./components/Pages/Art";

function App() {
  return (
    <>
      <HashRouter basename="/">
        <div className="min-h-screen w-full p-4 bg-base-300">
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path="/photography" element={<Photography />} /> */}
            {/* <Route path="/art" element={<Art />} /> */}
          </Routes>
          {/* <Footer /> */}
        </div>
      </HashRouter>
    </>
  );
}

export default App;
