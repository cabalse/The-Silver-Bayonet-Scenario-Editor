import { useContext } from "react";
import { HandlerContext } from "./handlercontextprovider";

const useHandlerContext = () => {
  const context = useContext(HandlerContext);

  if (context === undefined) {
    throw new Error(
      "usehandlerContext must be used within HandlerContextProvider"
    );
  }

  return context;
};

export default useHandlerContext;
