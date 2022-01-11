import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

export default function App() 
{
  return (
    <Router>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path="/codelandia-2/" element={<Home />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </Router>
  )
}