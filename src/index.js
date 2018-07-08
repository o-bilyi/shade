import "./style.css";
import React from "react";
import App from "./app/App";
import { render } from "react-dom";
import {Provider} from "react-redux";
import configStore from "./store/configStore";

const store = configStore();

render(
	<Provider store={store}>
    <App/>
	</Provider>,
	document.getElementById("root")
);
