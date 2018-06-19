import React from 'react';
import Loadable from 'react-loadable';
import {Route} from 'react-router-dom';
import Preload from '../shared-components/Preload';

export const navigationScheme = {
  home: '/',
  portfolio: '/portfolio',
  aboutUs: '/aboutUs',
	contactUs: '/contactUs',
  blog: '/blog',
};

export const MAIN_ROUTES = [
  {
    path: navigationScheme.home,
    exact: true,
    show : false,
	  component: () => import('../modules/Home.module')
  },
  {
    path: navigationScheme.portfolio,
    exact: true,
    show : true,
    component: () => import('../modules/portfolio/Portfolio.module')
  },
  {
    path: navigationScheme.aboutUs,
    exact: true,
    show : true,
    component: () => import('../modules/about-us/AboutUs')
  },
  {
    path: navigationScheme.contactUs,
    exact: true,
    show : true,
    component: () => import('../modules/contact-us/ContactUs.module')
  },
  {
    path: navigationScheme.blog,
    exact: true,
    show : false,
    component: () => import('../modules/blog/Blog.module')
  }
];

export function generateRoutes(routes) {
  return routes.map((i, k) => {
    const component = Loadable({
      loader: i.component,
      loading: Preload,
    });
    return <Route {...i} component={component} key={k}/>;
  });
}
