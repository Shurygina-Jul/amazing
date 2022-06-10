import React from "react";
import ReactDOM from "react-dom/client";

import App from "components/App";

import "./assets/styles/index.css";
import Test from "components/Test";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
    {/* <Test /> */}
  </React.StrictMode>,
);
