import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const DUMMY_USER = {
  name: "Kirti Bansal",
  email: "student@portal.com",
  password: "password123",
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (email, password) => {
    if (email === DUMMY_USER.email && password === DUMMY_USER.password) {
      setUser(DUMMY_USER);
      localStorage.setItem("user", JSON.stringify(DUMMY_USER));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}