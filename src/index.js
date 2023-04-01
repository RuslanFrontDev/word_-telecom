import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style.scss";
import { store } from "./redux/stores";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("__next"));
root.render(
    <BrowserRouter>
      <Provider store= {store}>
         <App />
      </Provider>
    </BrowserRouter>
);
