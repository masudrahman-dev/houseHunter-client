import { createContext, useState } from "react";

// Create a new context for the dashboard state
export const DashboardContext = createContext(null);

const DashBoardProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    // Wrap the children with the AuthContext.Provider to share the dashboard state with other components
    <DashboardContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashBoardProvider;
