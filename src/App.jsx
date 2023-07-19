import Navbar from "./components/shared/Navbar";
import { Outlet } from "react-router-dom";
import FilterBar from "./layout/Main/Filterbar";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="max-w-screen-xl mx-auto  grid grid-cols-12 ">
        <div className="col-span-3">
          <FilterBar />
        </div>
        <div className="col-span-9 md:ml-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
