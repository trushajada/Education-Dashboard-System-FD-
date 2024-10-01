// src/Context/AuthContext.js
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    role: null, // "admin", "teacher", "student"
  });

  const login = (role) => {
    setAuthState({
      isAuthenticated: true,
      role: role,
    });
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      role: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
