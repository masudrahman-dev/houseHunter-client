import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../context/authContext/useAuth";

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  const { isLoggedIn, userEmail } = useAuth();

  if (isLoggedIn) {
    return <div>Loading....</div>;
  }
  if (userEmail === null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }


  return children;
};

export default PrivateRoute;
