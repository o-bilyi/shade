import WOW from 'wowjs';
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch} from 'react-router';
import Notifications from 'react-notify-toast';
import {generateRoutes, MAIN_ROUTES} from '../core';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  static propTypes = {
    deviceType: PropTypes.string,
    changeDeviceType: PropTypes.func,
  };

  componentDidMount() {
    this.initWow();
    this._deviceWidth(document.body.clientWidth)
  }

  _deviceWidth = (width) => {
    let type;
    if (width > 1024) {
      type = "desktop";
    }
    if (width <= 1024 && !width < 680) {
      type = "tablet";
    }
    if (width <= 680) {
      type = "mobile";
    }
    this.props.changeDeviceType(type);
  };

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

const mapStateToProps = state => {
  return {
    deviceType: state.deviceType,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeDeviceType(newProp) {
      dispatch({
        type: 'CHANGE_DEVICE_TYPE',
        payload: newProp
      });
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(App);