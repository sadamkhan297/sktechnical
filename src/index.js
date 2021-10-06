import React from "react";
import ReactDOM from "react-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./Component/App"; 
// import "./index.css";
import "./Component/Style.css";
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <>
    <BrowserRouter>
         <App/>
    </BrowserRouter>
    </>

    , document.getElementById("root")
)