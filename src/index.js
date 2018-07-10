import React from "react";
import App from "./core/App";
import "./assets/styles/index.css";
import { render } from "react-dom";
import {Provider} from "react-redux";
import { getDeviceType } from './utilits';
import configStore from "./config/store/configStore";

const store = configStore();
store.dispatch({
  type: 'CHANGE_DEVICE_TYPE',
  payload: getDeviceType()
});

render(
	<Provider store={store}>
    <App/>
	</Provider>,
	document.getElementById("root")
);
