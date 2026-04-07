import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <main className="min-h-screen px-6 py-32 text-center">
      <h1 className="text-4xl font-semibold">Sampson Kojo Kpe</h1>
      <p className="mt-3 text-neutral-500">
        Backend Developer • Python • Django • APIs
      </p>
    </main>
  );
}

function About() {
  return (
    <main className="min-h-screen px-6 py-32">
      <h1 className="text-2xl font-semibold">About</h1>
    </main>
  );
}

function Contact() {
  return (
    <main className="min-h-screen px-6 py-32">
      <h1 className="text-2xl font-semibold">Contact</h1>
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}