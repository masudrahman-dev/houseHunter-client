import axios from "axios";
import { useState, createContext, useEffect } from "react";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userEmail, setUserEmail] = useState(null);
  console.log("userEmail :>> ", userEmail);
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("userEmail"));
    axios
      .get(`http://localhost:3000/api/users/isLoggedIn/?email=${email}`)
      .then((res) => {
        // console.log(res.data.email.email);
        setUserEmail(email);
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoggedIn(false);
      });
  }, []);

  const login = (data) => {
    return axios.post("http://localhost:3000/api/users/login", data);
  };

  const logout = () => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  };

  const register = (data) => {
    return axios.post("http://localhost:3000/api/users/register", data);
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
