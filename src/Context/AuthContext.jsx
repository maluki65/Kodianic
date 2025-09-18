import React, { createContext, useContext, useEffect, useState } from 'react'
import { Api } from '../utils';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // On restoring session on app reload
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await Api.get('/users/profile');
        setUserData(res.data.user);
        setIsAuthenticated(true);
      } catch (error) {
        setUserData(null);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();

  }, []);

  const login = async (email, password ) => {
    const res = await Api.post('/users/login', {email, password});
    setUserData(res.data.user);
    setIsAuthenticated(true);

    localStorage.setItem('csrfToken', res.data.csrfToken);
  };

  const signup = async (userInfo) => {
    const res = await Api.post('/users/signup', userInfo);
    setUserData(res.data.user);
    setIsAuthenticated(true);
    
    localStorage.setItem('csrfToken', res.data.csrfToken);
  };

  const logout = async () => {
    await Api.post('/users/logout');
    setUserData(null);
    setIsAuthenticated(false);

    localStorage.removeItem('csrfToken');
  };

  Api.logoutHandler = logout;

  return (
    <AuthContext.Provider 
      value={{ userData, isAuthenticated, loading, login, signup, logout }}
      >
        {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);