import React, { useState } from 'react';
import { useAuth } from '../Context/AuthContext';

const  useLogin = () => {
  
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const loginUser = async (values) => {
    try {
      setError('');
      setIsLoading(true)
      
      await login(values.email, values.password);
      setIsLoading(false);
      return  true;
    } catch (error) {
      setError(error.response?.data?.message || "Failed to login");
      return false
    } finally {
      setIsLoading(false);
    }
  }
  return {
    loginUser,
    error,
    isLoading
  }
}

export default useLogin