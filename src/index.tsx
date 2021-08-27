import React from "react";
import { hydrate, render } from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const rootElement = document.getElementById("root");
if (rootElement != null && rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById("root")
    );
}
// Call Service Worker
serviceWorkerRegistration.register()