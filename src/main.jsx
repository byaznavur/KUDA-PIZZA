import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import "react-lazy-load-image-component/src/effects/blur.css";

import LanguageProvider from "./context/language/index.jsx";
import ProductProvider from "./context/cart/index.jsx";

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </LanguageProvider>
  </StrictMode>
);
