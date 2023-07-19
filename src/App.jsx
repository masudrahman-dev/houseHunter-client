import Navbar from "./components/shared/Navbar";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet />
    </div>
  );
};

export default App;
