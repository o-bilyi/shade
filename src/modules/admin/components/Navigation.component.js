import React from "react";
import {NavLink} from "react-router-dom";
import {navigationSchemeAdmin} from "../../../core";

export function Navigation() {
	return (
		<ul className="global-menu">
			<li className="logo-container">
				<a href="/"><img className="logo" src="/assets/img/logo.svg" alt="logo"/></a>
				<p className="description-logo">Dashboard</p>
			</li>
			{
				Object.keys(navigationSchemeAdmin).map(key => (
					<li className="menu-item" key={key}>
						<NavLink to={navigationSchemeAdmin[key]} className="link-menu" activeClassName="active">
							{key}
						</NavLink>
					</li>
				))
			}
		</ul>
	);
}
