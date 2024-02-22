import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { MaterialTailwindControllerProvider } from "@/context";
import "../public/css/tailwind.css";
import {Provider} from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> 
        <MaterialTailwindControllerProvider>
        <ChakraProvider>
          <Provider store={store}>
          <App />
          </Provider>
         </ChakraProvider>
        </MaterialTailwindControllerProvider>
  
    </BrowserRouter>
  </React.StrictMode>
);
