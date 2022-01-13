import Navbar from "./components/Global/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Resume from "./components/Pages/Resume";
import Projects from "./components/Pages/Projects";
import Footer from "./components/Global/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-screen rounded-box m-4">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
