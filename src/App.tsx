import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>

      <div className="flex flex-col min-h-screen">

        {/* TOP */}
        <Navbar />

        {/* MAIN CONTENT */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* BOTTOM */}
        <Footer />

      </div>

    </BrowserRouter>
  );
}