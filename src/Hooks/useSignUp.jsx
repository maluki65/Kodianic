import React, { useState } from 'react'
import { useAuth } from '../Context/AuthContext'

const useSignUp = ()  => {

  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = async (values) => {
    if (values.password !== values.passwordConfirm) {
      setError("Passwords don't match");
      setSuccess('');
      return  false;
    }

    try {
      setError('');
      setIsLoading(true);

      await signup(values);

      setIsLoading(false);
      setSuccess('Account created successfully!');
      return  true;
    } catch (error) {
      setError(error.response?.data?.message || "Failed to create account");
      return false
    } finally {
      setIsLoading(false);
    }
  };

  return {
    registerUser,
    isLoading,
    error,
    success,
  };
};

export default useSignUp