import React from "react";
import App from "./core/App";
import {render} from "react-dom";
import {onResize} from "./utilits";
import "./assets/styles/index.scss";
import {Provider} from "react-redux";
import configStore from "./config/store/configStore";

export const store = configStore();
new onResize(store.dispatch);

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById("root"),
);
