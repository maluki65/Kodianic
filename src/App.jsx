import { useState } from 'react';
import './App.css';
import { Navigate, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Portfolio, ServicesDetails, Login, Signup, Dashboard } from './pages';
import { NotFound } from './components';
import { motion, AnimatePresence } from 'framer-motion'
import ScrollToHashElement from './components/ScrollToHashElement';
import { useAuth , AuthProvider} from './Context/AuthContext';


function AnimatedRoutes () {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  return (
    <AnimatePresence mode='wait'>      
      <Routes location={location} key={location.pathname} >
        <Route path='/' element={<Home/>} />
        <Route path='/Portfolio' element={<Portfolio/>} />
        <Route path='/service/:heading' element={<ServicesDetails/>} />
        {/*<Route path='/Signup' 
          element={!isAuthenticated ? <Signup/> : <Navigate to='/dashboard'/>} />*/}
        <Route path='/Login' 
          element={!isAuthenticated ? <Login/> : <Navigate to='/dashboard'/>} />
        <Route path='/dashboard' element={isAuthenticated ? <Dashboard/> : <Navigate to='/login'/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
      <AuthProvider>
        <Router>
          <motion.div
            initial = {{ opacity:0, y: 40 }}
            animate = {{ opacity:1, y: 0 }}
            transition = {{ duration: 0.9 }}
            >
              <ScrollToHashElement/>
              <AnimatedRoutes/>
            </motion.div>
        </Router>
      </AuthProvider>
  );
}

export default App
