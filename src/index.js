import React from "react";
import ReactDOM from "react-dom/client"; // ✅ React 18 uses createRoot
import { ChakraProvider } from "@chakra-ui/react"; // ✅ Ensure this is correct
import App from "./App";

// ✅ Ensure ChakraProvider wraps the app properly
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);