import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/userAuthPages/Login";
import Register from "../pages/userAuthPages/Register";
import Dashboard from "../layout/dashboard/Dashboard";
import PrivateRoute from "./privateRoute";
import Home from "../pages/home/Home";
import CRUDForm from "../components/form/CRUDForm";
import Table from "../components/table/Table";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
        children: [
          {
            path: "addNewHouse",
            element: (
              <PrivateRoute>
                <CRUDForm />
              </PrivateRoute>
            ),
          },
          {
            path: "manageHouse",
            element: (
              <PrivateRoute>
                <Table />
              </PrivateRoute>
            ),
          },
        ],
      },

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
    ],
  },
]);

export default router;
