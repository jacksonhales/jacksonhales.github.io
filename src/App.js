import Navbar from "./components/Global/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Resume from "./components/Pages/Resume";
import Projects from "./components/Pages/Projects";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
