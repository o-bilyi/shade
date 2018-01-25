import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import i18n from "i18n-react";
import WOW from "wowjs";

import Home from "../views/Home";
import Portfolio from "../views/Portfolio";
import AboutUs from "../views/AboutUs";
import ContactUs from "../views/ContactUs";
import Blog from "../views/Blog";
import ShowPopup from "../components/ShowPopup";

class App extends Component {
    static propTypes = {
        language: PropTypes.string
    };

    constructor(props) {
        super(props);
        const setLanStorage = localStorage.getItem("language");
        if (setLanStorage) {
            this.setLang(setLanStorage);
        } else {
            this.setLang(this.props.language);
        }
    }

    componentWillReceiveProps(newProps) {
        if (newProps.language !== this.props.language) {
            this.setLang(newProps.language);
			localStorage.setItem("language", newProps.language);
        }
    }

    setLang = (newLan) => {
        const lang = require(`../translate/${newLan}.json`);
        i18n.setTexts(lang);
    };

    componentDidMount() {
        this.initWow();
    }

    initWow = () => {
        new WOW.WOW(
            {
                boxClass: "wow",
                animateClass: "animated",
                offset: 300,
                mobile: false,
                live: false,
            }
        ).init();
    };

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/Portfolio" component={Portfolio}/>
                        <Route path="/AboutUs" component={AboutUs}/>
                        <Route path="/ContactUs" component={ContactUs}/>
                        <Route path="/Blog" component={Blog}/>
                        <Redirect path="*" to="/"/>
                    </Switch>
					<ShowPopup/>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.language
    };
};

export default connect(mapStateToProps)(App);
