import axios from "axios";
import { useState, createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (data) => {
    console.log(data);
    axios
      .post("http://localhost:3000/api/users/login", data)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        if (response.status === 201) {
          console.log("redirect dashboard");
        }
      })
      .catch((error) => {
        // console.error("Registration error:", error.message);
        console.log(error);
      });
    setIsLoggedIn(true);
  };
  const logout = (data) => {
    console.log(data);
    axios
      .post("http://localhost:3000/api/users/login", data)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        if (response.status === 201) {
          console.log("redirect dashboard");
        }
      })
      .catch((error) => {
        // console.error("Registration error:", error.message);
        console.log(error);
      });
    setIsLoggedIn(true);
  };

  const register = (data) => {
    axios
      .post("http://localhost:3000/api/users/register", data)
      .then((response) => {
        console.log(response.status);
        console.log(response.data);
        if (response.status === 201) {
          console.log("redirect dashboard");
        }
      })
      .catch((error) => {
        // console.error("Registration error:", error.message);
        console.log(error.response.data.message);
        console.log(error.response.status);

        // todo: this alert for registration
        // Swal.fire({
        //   title: error.response.data.message,
        //   text: "Click Login button go to login page",
        //   icon: "warning",
        //   showCancelButton: true,
        //   confirmButtonColor: "#3085d6",
        //   cancelButtonColor: "#d33",
        //   confirmButtonText: "Login",
        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     // Swal.fire("Deleted!", "Your file has been deleted.", "success");
        //     if (error.response.status === 409) {
        //       console.log("redirect login page");
        //     }
        //   } else {
        //     console.log("redirect home page");
        //   }
        // });
      });
    setIsLoggedIn(true);
  };

  // const authHandlers = { isLoggedIn, login, register };
  return (
    <AuthContext.Provider value={{ isLoggedIn, login, register,logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
