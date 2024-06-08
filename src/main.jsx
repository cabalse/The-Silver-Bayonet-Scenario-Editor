import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app.jsx";
import AppContextprovider from "./context/appcontextprovider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContextprovider>
      <App />
    </AppContextprovider>
  </React.StrictMode>
);
