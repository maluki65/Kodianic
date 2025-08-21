import { useState } from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import { Home, Portfolio } from './pages';
import { motion, AnimatePresence } from 'framer-motion'


function AnimatedRoutes () {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>      
      <Routes location={location} key={location.pathname} >
        <Route path='/' element={<Home/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
      <Router>
        <motion.div
          initial = {{ opacity:0, y: 40 }}
          animate = {{ opacity:1, y: 0 }}
          transition = {{ duration: 0.9 }}
          >
            <AnimatedRoutes/>
          </motion.div>
      </Router>
  );
}

export default App
