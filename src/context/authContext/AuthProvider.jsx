import axios from "axios";
import { useState, createContext, useEffect } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("userEmail"));
    const timeoutId = setTimeout(() => {
      setUserEmail(email);
      setIsLoggedIn(false);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const login = (data) => {
    return axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/users/login`,
      data
    );
  };

  const logout = () => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  };

  const register = (data) => {
    return axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/users/register`,
      data
    );
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        register,
        logout,
        setIsLoggedIn,
        setUserEmail,
        userEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
