import WOW from 'wowjs';
import React from 'react';
import {Switch} from 'react-router';
import Notifications from 'react-notify-toast';
import {generateRoutes, MAIN_ROUTES} from './index';
import {BrowserRouter as Router} from 'react-router-dom';

export default class App extends React.PureComponent {
  componentDidMount() {
    this.initWow();
  }

  initWow = () => {
    new WOW.WOW(
      {
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 300,
        mobile: false,
        live: false,
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