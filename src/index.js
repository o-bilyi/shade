import React from "react";
import App from "./core/App";
import "./styles/index.css";
import { render } from "react-dom";
import {Provider} from "react-redux";
import configStore from "./config/store/configStore";

const store = configStore();
// store.dispatch();

render(
	<Provider store={store}>
    <App/>
	</Provider>,
	document.getElementById("root")
);
