import { createContext } from "react";
import useMenuHandler from "../../handlers/use-menu-handler";

const initialContextValue = {
  menuHandler: () => {},
};

export const HandlerContext = createContext(initialContextValue);

const HandlerContextProvider = ({ children }) => {
  const contextValue = {
    menuHandler: useMenuHandler(),
  };

  return (
    <HandlerContext.Provider value={contextValue}>
      {children}
    </HandlerContext.Provider>
  );
};

export default HandlerContextProvider;
