import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MetricProvider } from "@ysawyers/insourcing-proxy-client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MetricProvider socketUrl={"ws://127.0.0.1:5000/"} />
    <App />
  </React.StrictMode>
);

reportWebVitals();
