import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './src/components/common/Navbar';
import Footer from './src/components/common/Footer';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Signup from './src/pages/Signup';
import Pieces from './src/pages/Pieces';
import Departments from './src/pages/Departments';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pieces" element={<Pieces />} />
          <Route path="/departments" element={<Departments />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;