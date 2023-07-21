import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import AuthProvider from "./context/authContext/AuthProvider";
import DashBoardProvider from "./context/dashboardContext/DashBoardProvider";
import GlobalProvider from "./context/globalContext/GlobalProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>


    <GlobalProvider>
      <AuthProvider>
        <DashBoardProvider>
          <RouterProvider router={router} />
        </DashBoardProvider>
      </AuthProvider>
    </GlobalProvider>
  </React.StrictMode>
);
