import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../context/authContext/useAuth";
import useRedirect from "../../hooks/redirect/useRedirect";
import { DashboardContext } from "../../context/dashboardContext/DashBoardProvider";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { logout, setIsLoggedIn, setUserEmail } = useAuth();
  const { setIsOpen, isOpen } = useContext(DashboardContext);

  const { navigate, from } = useRedirect("/");
  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("Logout successfully.");
        setIsLoggedIn(false);
        setUserEmail(null);
        localStorage.removeItem("userEmail");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error("Logout Promise rejected:", error.message);
        // Handle the error that occurred during logout.
      });
  };

  const menuItems = (
    <ul className="md:flex md:flex-row flex flex-col gap-5">
      <li>
        <NavLink
          to="/"
          className="text-white hover:bg-gray-700 px-3 py-2 rounded"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          className="text-white hover:bg-gray-700 px-3 py-2 rounded"
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login"
          className="text-white hover:bg-gray-700 px-3 py-2 rounded"
        >
          Login
        </NavLink>
      </li>
      <li>
        <span
          className="text-white hover:bg-gray-700 px-3 py-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </span>
      </li>
    </ul>
  );
  return (
    // fixed top-0 left-0
    <nav className="  bg-gray-800 py-4 shadow-lg  w-full">
      <div className="max-w-screen-xl mx-auto px-4 ">
        <div className=" md:flex  justify-between items-center gap-5">
          <div className="hidden md:block text-center">
            <NavLink to="/" className="text-white text-2xl font-bold">
              HouseHunter
            </NavLink>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex  justify-center items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 mr-2 text-white rounded-lg cursor-pointer md:hidden"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  aria-hidden="true"
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Toggle sidebar</span>
              </button>
            </div>
            <div className="md:hidden">
              <NavLink to="/" className="text-white text-2xl font-bold">
                HouseHunter
              </NavLink>
            </div>
            <div>
              <div className="hidden md:flex  space-x-4">{menuItems}</div>

              {/* Hamburger menu for mobile */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={handleMenuToggle}
                  className="text-white focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">{menuItems}</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
