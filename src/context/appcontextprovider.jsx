import { createContext, useReducer } from "react";

import initialAppState from "./initialappstate";
import appStateReducer from "./reducers/appstatereducers";

const initialContextValue = {
  appState: initialAppState,
  appStateDispatch: () => {},
};

export const ApplicationContext = createContext(initialContextValue);

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
