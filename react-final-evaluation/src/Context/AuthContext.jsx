import React, { createContext, useState } from "react";

export const AuthContext =  createContext();

export function AuthContextProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [token, setToken] = useState(null);
  const [emailer, setEmailer] = useState(null);

  function Logout() {
    setEmailer(null);
    setToken(null);
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        token,
        setToken,
        emailer,
        setEmailer,
        Logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
