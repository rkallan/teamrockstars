import { render, hydrate } from "react-dom";
import loadable from "@loadable/component";
import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

import store from "Store";
import App from "App";

import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

import "resources/styles/default/main.scss";

const helmetContext = {};

const Application = (
    <Provider store={store}>
        <HelmetProvider context={helmetContext}>
            <App />
        </HelmetProvider>
    </Provider>
);

const applicationElement = document.getElementById("root");

if (applicationElement.hasChildNodes()) {
    // If it's an SSR, we use hydrate to get fast page loads by just
    // attaching event listeners after the initial render
    loadable.preloadReady().then(() => {
        hydrate(Application, applicationElement);
    });
} else {
    // If we're not running on the server.
    render(Application, applicationElement);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
