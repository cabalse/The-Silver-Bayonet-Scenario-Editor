import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app.jsx";
import AppContextprovider from "./context/appcontext/appcontextprovider.jsx";
import HandlerContextProvider from "./context/handlercontext/handlercontextprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextprovider>
      <HandlerContextProvider>
        <App />
      </HandlerContextProvider>
    </AppContextprovider>
  </React.StrictMode>
);
