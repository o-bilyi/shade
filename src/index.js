import React from "react";
import App from "./core/App";
import "./assets/styles/index.css";
import { render } from "react-dom";
import {Provider} from "react-redux";
import { onResize } from './utilits';
import configStore from "./config/store/configStore";

const store = configStore();
new onResize(store.dispatch);

render(
	<Provider store={store}>
    <App/>
	</Provider>,
	document.getElementById("root")
);
