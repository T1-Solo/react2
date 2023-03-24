
import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App"
import {BrowserRouter} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <ReactStrictMode>
        <BrowserRouter>
        <App text="1"/>
        </BrowserRouter>
    </ReactStrictMode>
)
