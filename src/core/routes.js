import React from "react";
import Loadable from "react-loadable";
import {Route} from "react-router-dom";
import Preload from "../shared/component/Preload.component";

export const navigationScheme = {
	home : "/",
	login : "/login",
	portfolio : "/portfolio",
	about : "/about",
	contact : "/contact",
	blog : "/blog",

	admin : {
		users : "admin/users",
		projects : "admin/projects",
		contacts : "admin/contacts",
		blog : "admin/blog",
		texts : "admin/texts"
	}
};

export const MAIN_ROUTES = [
	{
		path : navigationScheme.home,
		exact : true,
		show : false,
		component : () => import("../modules/Home.module"),
	},
	{
		path : navigationScheme.about,
		exact : true,
		show : true,
		component : () => import("../modules/about/About.module"),
	},
	{
		path : navigationScheme.portfolio,
		exact : true,
		show : true,
		component : () => import("../modules/portfolio/Portfolio.module"),
	},
	{
		path : navigationScheme.contact,
		exact : true,
		show : true,
		component : () => import("../modules/contact/Contact.module"),
	},
	{
		path : navigationScheme.blog,
		exact : true,
		show : false,
		component : () => import("../modules/blog/Blog.module"),
	},
	{
		path : navigationScheme.login,
		exact : true,
		show : true,
		component : () => import("../modules/login/Container/Login.Container"),
	},
];

export const ADMIN_ROUTES = [
	{
		path : navigationScheme.admin.users,
		exact : true,
		show : true,
		component : () => import("../modules/admin/pages/Users.module"),
	},
	{
		path : navigationScheme.projects,
		exact : true,
		show : true,
		component : () => import("../modules/admin/pages/Projects.module"),
	},
	{
		path : navigationScheme.contacts,
		exact : true,
		show : true,
		component : () => import("../modules/admin/pages/Contacts.module"),
	},
	{
		path : navigationScheme.blog,
		exact : true,
		show : true,
		component : () => import("../modules/admin/pages/Blog.module"),
	},
	{
		path : navigationScheme.texts,
		exact : true,
		show : true,
		component : () => import("../modules/admin/pages/Text.module"),
	},
];

export function generateRoutes(routes) {
	return routes.map((i, k) => {
		const component = Loadable({
			loader : i.component,
			loading : Preload,
		});
		return <Route {...i} component={component} key={k}/>;
	});
}
