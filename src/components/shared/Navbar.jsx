import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuItems = (
    <ul className="md:flex md:flex-row flex flex-col gap-5">
      <li>
        <NavLink
          to="/login"
          className="text-white hover:bg-gray-700 px-3 py-2 rounded"
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className="text-white hover:bg-gray-700 px-3 py-2 rounded"
        >
          Register
        </NavLink>
      </li>
    </ul>
  );
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <NavLink to="/" className="text-white text-xl font-bold">
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
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">{menuItems}</div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
