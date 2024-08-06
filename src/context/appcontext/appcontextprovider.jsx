import { createContext, useReducer } from "react";

import initialAppState from "./initialappstate";
import appStateReducer from "./appstatereducers";

const initialContextValue = {
  appState: initialAppState,
  appStateDispatch: () => {},
};

const ApplicationContext = createContext(initialContextValue);

const AppContextprovider = ({ children }) => {
  const [state, appStateDispatch] = useReducer(
    appStateReducer,
    initialAppState
  );

  const contextValue = {
    appState: state,
    appStateDispatch: appStateDispatch,
  };

  return (
    <ApplicationContext.Provider value={contextValue}>
      {children}
    </ApplicationContext.Provider>
  );
};

export default AppContextprovider;
export { ApplicationContext };
