import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { CustomThemeProvider } from "./contexts/ThemeContext.tsx";
import { I18nProvider } from "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nProvider>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </I18nProvider>
  </StrictMode>,
);
