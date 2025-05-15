import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Homepage";
import AboutPage from "./pages/A-propos";
import ContactPage from "./pages/Contact";
import ServicesPage from "./pages/Service";
import './index.css'; // Importe ton fichier de styles global

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            {/* Tu peux ajouter d'autres routes ici */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;