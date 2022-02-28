import React, { useState, createContext } from 'react';

export const AuthContext = createContext();

export default AuthProvider = ({ children }) => {
  const [isLogged, setLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogged, setLogged }}>
      {children}
    </AuthContext.Provider>
  );
};
