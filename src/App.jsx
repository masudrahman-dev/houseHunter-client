import { useContext, useEffect } from "react";
import Container from "./components/container/Container";
import Navbar from "./components/shared/Navbar";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "./context/globalContext/GlobalProvider";

const App = () => {
  const { isFilterBarOpen, setIsFilterBarOpen } = useContext(GlobalContext);

  return (
    <div>
      <div
        className={` bg-slate-900 w-52 h-screen fixed transition-all transform 
        ${isFilterBarOpen ? "translate-x-0 " : " -translate-x-full"} `}
      >
        <div className="flex items-center text-red-500 justify-center">
          <button onClick={() => setIsFilterBarOpen(false)}>close</button>
        </div>
      </div>

      <Navbar />
      <div className="mt-16">
        <Container>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

export default App;
