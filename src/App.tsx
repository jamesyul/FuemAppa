import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './src/components/common/Navbar';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Pieces from './src/pages/Pieces';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16"> {/* Espacio para evitar que el contenido se solape con la navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pieces" element={<Pieces />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;