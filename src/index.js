import React from "react";
import App from "./core/App";
import {render} from "react-dom";
import {onResize} from "./utilits";
import "./assets/styles/index.scss";
import {Provider} from "react-redux";
import {configStore, history} from "./config/store/configStore";
import RouterService from "./shared/services/RouterService";

export const store = configStore();
new onResize(store.dispatch);

RouterService.setStore(store);
render(
	<Provider store={store}>
		<App history={history}/>
	</Provider>,
	document.getElementById("root")
);
