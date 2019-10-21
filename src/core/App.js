import WOW from "wowjs";
import React from "react";
import {store} from "../index";
import Notifications from "react-notify-toast";
import {getAllPagesText} from "../config/actions";
import {generateRoutes, MAIN_ROUTES} from "./index";
import {BrowserRouter as Router, Switch} from "react-router-dom";
import {db} from "../db";
import {loginAction} from "../config/actions/login";
import {MD5} from "../config/reducers/utils";

const code = "bob";
let str = "";

export default class App extends React.PureComponent {
	componentDidMount() {
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
		str += e.key;
		if (str === code) {
			store.dispatch(loginAction({
				email : "bob",
				pass : MD5('625436')
			})).then((res) => {
				console.warn(res);
			});
		} else if (str.length > 5) {
			str.substr(1)
		}
		console.warn(str)
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
