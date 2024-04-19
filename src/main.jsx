import { ChakraProvider } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import React from "react";

import theme from "./theme/index.js";
import "../src/theme/styles.css";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);