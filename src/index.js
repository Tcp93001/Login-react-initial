import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import { AuthContextProvider } from './context/AuthContext';
import "./index.css";

// Ahora el context lo vamos a poner en el nodo principal de nuestra aplicación, para que
// todos los elementos de nuestro código ahora tengan acceso a la propiedad isLoggedIn

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
);

