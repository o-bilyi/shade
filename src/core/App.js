import WOW from "wowjs";
import React from "react";
import {store} from "../index";
import Notifications from "react-notify-toast";
import {getAllPagesText} from "../config/actions";
import {generateRoutes, MAIN_ROUTES} from "./index";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {db} from "../db";

export default class App extends React.PureComponent {
	componentDidMount() {
		this.initWow();
		this._getTextPages();
	}

	_getTextPages = () => {
		db.ref("/textsOfPages").once("value").then(snapshot => {
			if (snapshot) {
				store.dispatch(getAllPagesText(snapshot.val()));
			}
		});
	};

	initWow = () => {
		new WOW.WOW(
			{
				boxClass : "wow",
				animateClass : "animated",
				offset : 300,
				mobile : false,
				live : false,
			},
		).init();
	};

	render() {
		return (
			<Router>
				<div className="App">
					<Switch>
						{generateRoutes(MAIN_ROUTES)}
					</Switch>
					<Notifications/>
				</div>
			</Router>
		);
	}
}
