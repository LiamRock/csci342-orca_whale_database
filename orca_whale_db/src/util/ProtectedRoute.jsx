import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, Navigate, Outlet } from 'react-router-dom';

// Component to protect routes requiring authentication
const ProtectedRoute = () => {
  // Access user state from Redux store
  const { user, loaded } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loaded && localStorage.getItem('user') === null) {
      navigate('/login', { replace: true });
    }
  }, [loaded, user, navigate]);

  // Render child routes if user exists, otherwise redirect to login
  return user ? <Outlet /> : <Navigate to ="/login" replace/>;
};

export default ProtectedRoute;


