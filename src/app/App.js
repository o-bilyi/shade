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

  state = {
    deviceType: 'desktop',
  };

  componentDidMount() {
    this.initWow();
    window.addEventListener('resize', this._resize, false);
  }

  componentWillMount() {
    window.removeEventListener('resize', this._resize, false);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.language !== this.props.deviceType) {
      this.setState({
        deviceType: newProps.deviceType,
      });
    }
  }

  _resize = () => {
    this._deviceWidth(document.body.clientWidth);
  };

  _deviceWidth = (width) => {
    let type;
    if (width <= 1024 && !width < 680) {
      type = "tablet";
    }
    if (width <= 680) {
      type = "mobile";
    }
    if (width > 1024) {
      type = "desktop";
    }
    this.setState({
      deviceType : type
    });
    this.props.changeDeviceType(this.state.deviceType);
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
    console.warn(this.state.deviceType);
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