import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App"
import store from "./store"

import "core-js";
import "regenerator-runtime/runtime";

import "@assets/css/reset.scss"
import "@assets/css/layout.scss"

createRoot(
    document.getElementById("root") as HTMLElement
).render(
    <React.StrictMode>
        <Provider store={store}>
            <div id={"root-modal"} />
            <App />
        </Provider>
    </React.StrictMode >
)




