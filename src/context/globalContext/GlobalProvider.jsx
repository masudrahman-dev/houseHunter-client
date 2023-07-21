import { createContext, useState } from "react";

export const GlobalContext = createContext(null);
const GlobalProvider = ({ children }) => {
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(false);

  const info = {
    isFilterBarOpen,
    setIsFilterBarOpen,
  };
  return (
    <GlobalContext.Provider value={info}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
