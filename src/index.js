import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./Containers/App";
import "./styles.pcss";

var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <App appTitle="¡Ay caramba!" />
  </Provider>,
  mountNode
);
