import WOW from "wowjs";
import React from "react";
import {store} from "../index";
import {Switch} from "react-router";
import {API, Fetch} from "../utilits";
import Notifications from "react-notify-toast";
import {generateRoutes, MAIN_ROUTES} from "./index";
import {BrowserRouter as Router} from "react-router-dom";
import {getAllPagesText} from "../config/actions";

export default class App extends React.PureComponent {
	state = {
		texts : null
	};

	componentDidMount() {
		this.initWow();
		this._getTextPages();
	}

	_getTextPages = () => {
		Fetch(`${API}texts`).then(res => {
			if (res) {
				this.setState({
					texts : res
				}, () => store.dispatch(getAllPagesText(this.state.texts)));
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
		console.warn("render app");
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
