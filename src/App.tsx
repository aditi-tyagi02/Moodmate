import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import FacialAnalysis from './pages/FacialAnalysis';
import Chatbot from './pages/Chatbot';
import Activities from './pages/Activities';
import SelfHelp from './pages/SelfHelp';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/facial-analysis" element={<FacialAnalysis />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/self-help" element={<SelfHelp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;