import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ApiProvider } from "./context/ApiContext.jsx";
import { SearchProvider } from "./context/SearchContext.jsx";
import { FilterProvider } from "./context/FilterContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ApiProvider>
        <SearchProvider>
          <FilterProvider>
            <App />
          </FilterProvider>
        </SearchProvider>
      </ApiProvider>
    </AuthProvider>
  </StrictMode>
);
