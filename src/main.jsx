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

/*

const favoriteFonts = [
  "anka-coder",
  "anonymous-pro",
  "cm-unicode",
  "daddytimemono",
  "fairfax-hd",
  "fantasque-sans",
  "iosevka",
  "luculent",
  "sax",
  "victor-mono",
];

const fontSetting = {
  "editor.fontFamily":
    "'Anka/Coder', 'AnonymicePro Nerd Font Mono', 'CMU Typewriter Text', 'DaddyTimeMono Nerd Font Mono', 'Fairfax HD', 'FantasqueSansM Nerd Font Mono', 'Iosevka NFM', 'Luculent', 'saxMono', 'VictorMono NFM'",
};

*/
