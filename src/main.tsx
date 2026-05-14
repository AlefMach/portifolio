import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppThemeProvider from "./contexts/ThemeProvider";
import "./styles/variables.css";
import "./styles/themes.css";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <App />
    </AppThemeProvider>
  </React.StrictMode>
);