import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Timeline from './components/Timeline';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen space-gradient">
        <div className="star-field" aria-hidden="true" />
        
        {/* Navigation */}
        <nav className="fixed w-full bg-space-dark/95 backdrop-blur-sm z-50 px-6 py-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-space font-bold text-cosmic-blue">
              Jean Turban
            </Link>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex space-x-6">
              <Link to="/portfolio/about" className="nav-link">About</Link>
              <Link to="/portfolio/timeline" className="nav-link">Timeline</Link>
              <Link to="/portfolio/skills" className="nav-link">Skills</Link>
              <Link to="/portfolio/pictures" className="nav-link">Photography</Link>
              <Link to="/portfolio/contact" className="nav-link">Contact</Link>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-space-light py-4">
              <div className="flex flex-col items-center space-y-4">
                <Link to="/portfolio/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
                <Link to="/portfolio/timeline" className="nav-link" onClick={() => setIsMenuOpen(false)}>Timeline</Link>
                <Link to="/portfolio/skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</Link>
                <Link to="/portfolio/pictures" className="nav-link" onClick={() => setIsMenuOpen(false)}>Portfolio</Link>
                <Link to="/portfolio/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/portfolio" element={<About />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/timeline" element={<Timeline />} />
          <Route path="/portfolio/skills" element={<Skills />} />
          <Route path="/portfolio/pictures" element={<Portfolio />} />
          <Route path="/portfolio/contact" element={<Contact />} />
        </Routes>

        <footer className="py-8 px-6 text-center text-gray-400 bg-space-dark/50 backdrop-blur-sm">
          <p>© 2024 Jean Turban. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;