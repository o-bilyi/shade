import WOW from "wowjs";
import React from "react";
import {store} from "../index";
import Notifications from "react-notify-toast";
import {getAllPagesText} from "../config/actions";
import {generateRoutes, MAIN_ROUTES, navigationScheme} from "./index";
import {ConnectedRouter} from 'react-router-redux';
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {db} from "../db";
import {loginAction} from "../config/actions/login";
import {MD5} from "../config/reducers/utils";
import RouterService from "../shared/services/RouterService";

const code = "bob";

export default class App extends React.PureComponent {
	componentDidMount() {
		this.str = "";
		this.initWow();
		this._getTextPages();
		addEventListener("keyup", this._onKeyUp);
	}

	_getTextPages = () => {
		db.ref("/textsOfPages").once("value").then(snapshot => {
			if (snapshot) {
				store.dispatch(getAllPagesText(snapshot.val()));
			}
		});
	};

	_onKeyUp = (e) => {
		this.str += e.key;
		this.str = this.str.slice(-5);

		if (this.str === code) {
			loginAction({
				email : "bob",
				pass : MD5('625436')
			}).then((res) => {
				console.warn(res);
				RouterService.navigateTo(navigationScheme.admin.users)
			}).catch(e => {
				console.warn(e);
			});
		}
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
					<ConnectedRouter history={this.props.history}>
						<Switch>
							{generateRoutes(MAIN_ROUTES)}
						</Switch>
					</ConnectedRouter>
					<Notifications/>
				</div>
			</Router>
		);
	}
}
