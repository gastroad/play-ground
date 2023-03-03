import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App"

import "core-js";
import "regenerator-runtime/runtime";

import "@assets/css/reset.scss"
import "@assets/css/layout.scss"

createRoot(
    document.getElementById("root") as HTMLElement
).render(
    <React.StrictMode>
        <div id={"root-modal"} />
        <App />
    </React.StrictMode >
)




