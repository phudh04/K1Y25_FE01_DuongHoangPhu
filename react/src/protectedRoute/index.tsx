import React from 'react';
import { Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const ProtectedRoute: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [cookies] = useCookies(['user']);
  return cookies.user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;