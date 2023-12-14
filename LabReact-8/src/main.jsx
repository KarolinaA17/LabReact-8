import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Cards from "./Cards";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <CSSReset />
      <div style={{ marginBottom: "20px" }}>
        <Header />
      </div>
      <Cards />
    </ChakraProvider>
  </React.StrictMode>
);
