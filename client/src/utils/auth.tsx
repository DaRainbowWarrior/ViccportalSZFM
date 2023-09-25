import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';
const AuthContext = createContext<any>({});

const AuthProvider = ({ children }:any) => {
 const [user, setUser] = useState({});
 const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (user:any) => {
    Cookies.set('J-AUTH', user.authentication.sessionToken)
    setUser(user)
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser({});
    Cookies.remove('J-AUTH');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};

export { AuthProvider, useAuth };
