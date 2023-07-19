import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import AuthProvider from "./context/authContext/AuthProvider";
import DashBoardProvider from "./context/dashboardContext/DashBoardProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <DashBoardProvider>
        <RouterProvider router={router} />
      </DashBoardProvider>
    </AuthProvider>
  </React.StrictMode>
);
