import React from "react";
import { render } from "react-dom";
import {Provider} from "react-redux";
import "./style.css";
import App from "./app/App";
import configStore from "./store/configStore";

const store = configStore();

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById("root")
);
