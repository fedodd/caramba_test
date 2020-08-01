import React from "react";
import ReactDOM from "react-dom";
import App from "./Containers/App";
import "./styles.pcss";
import "./normalize.css";

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
