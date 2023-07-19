import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/userAuthPages/Login";
import Register from "../pages/userAuthPages/Register";
import Dashboard from "../layout/dashboard/Dashboard";
import PrivateRoute from "./privateRoute";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
