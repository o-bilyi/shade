import React, {Component} from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Redirect, Route, Switch} from "react-router";

import WOW from "wowjs";
import i18n from "i18n-react";

import Home from "../views/Home";
import Portfolio from "../views/Portfolio";
import AboutUs from "../views/AboutUs";
import ContactUs from "../views/ContactUs";
import Blog from "../views/Blog";
import Preload from "../components/Preload";
// import Feedback from "../components/Modal";
import ShowPopup from "../components/ShowPopup";
import ChangeLanguage from "../components/ChangeLanguage";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: "en"
        };
        let setLanStorage = localStorage.getItem("language");
        if(setLanStorage){
            this.setLang(setLanStorage);
        }else {
            this.setLang(this.state.language);
        }
    }

    componentDidMount() {
        this.initWow();
        // this.changeLang();
        // document.addEventListener("changeLang",this.toggleLang);
    }

    // changeLang = (lan) => this.toggleLang;

    setLang = (newLan) => {
        let lang = require(`../translate/${newLan}.json`);
        i18n.setTexts(lang);
    };

    toggleLang = (lan) => {
        // if(typeof (lan) === "object"){
        //     lan = lan.detail.newLan;
        // }
        this.setLang(lan);
        this.setState({language: lan});
        localStorage.setItem("language",lan);
    };

    initWow = () =>{
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
                    {/*<Feedback/>*/}
                    <ShowPopup/>
                    <Preload/>
                    <ChangeLanguage toggleLang={this.toggleLang}/>
                </div>
            </Router>
        );
    }
}