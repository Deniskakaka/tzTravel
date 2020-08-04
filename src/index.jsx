import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./store.js";
import App from "./app/App.jsx";

const rootElement = document.querySelector("#root");

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , rootElement);