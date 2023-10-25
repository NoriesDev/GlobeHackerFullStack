import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Features from "./Pages/Features";
import Destinations from "./Pages/Destinations";
import Footer from "./components/Footer";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Destinations" element={<Destinations />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

