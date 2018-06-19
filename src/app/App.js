import WOW from "wowjs";
import React from "react";
import {Switch} from "react-router";
import ShowPopup from "../shared-components/ShowPopup";
import {generateRoutes, MAIN_ROUTES} from "../core";
import {BrowserRouter as Router} from "react-router-dom";

export default class App extends React.Component {
	componentDidMount() {
		this.initWow();
	}

	initWow = () => {
		new WOW.WOW(
			{
				boxClass : "wow",
				animateClass : "animated",
				offset : 300,
				mobile : false,
				live : false,
			}
		).init();
	};

	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						{generateRoutes(MAIN_ROUTES)}
					</Switch>
					<ShowPopup/>
				</div>
			</Router>
		);
	}
}

