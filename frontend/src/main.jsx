import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { MaterialTailwindControllerProvider } from "@/context";
import "../public/css/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> 
        <MaterialTailwindControllerProvider>
        <ChakraProvider>
          <App />
         </ChakraProvider>
        </MaterialTailwindControllerProvider>
  
    </BrowserRouter>
  </React.StrictMode>
);
