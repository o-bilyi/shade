import React from "react";
import {Navigation} from "./components/Navigation.component";
import {generateRoutes, ADMIN_ROUTES} from "../../core";
import {BrowserRouter as Router, Switch} from "react-router-dom";

export default class Admin extends React.Component {
	render() {
		return (
			<Router>
				<div className="admin-page">
					<h2 className="title-admin-page">Welcome to Admin Panel</h2>
					<Navigation/>
					<Switch>
						{generateRoutes(ADMIN_ROUTES)}
					</Switch>
				</div>
			</Router>
		);
	}
}
