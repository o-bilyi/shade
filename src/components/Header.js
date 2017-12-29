import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import i18n from 'i18n-react';
import SVGInline from "react-svg-inline";
import {showModal} from "../components/Modal";
import FindUs from "../components/FindUs";
import ChangeLan from "../components/ChangeLanguage";

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuShowed: false,
            toggleMenu: false
        };
    }

    componentDidMount() {
        document.addEventListener('togglePopupLan',this.removeClassMenu)
    }

    removeClassMenu = () => {
        this.setState({
            menuShowed: false,
            toggleMenu: false
        });
        document.querySelector('.contentMobileAnimate').classList.remove('active');
    }

    switchToggle = () => {
        this.setState({
            menuShowed: !this.state.menuShowed,
            toggleMenu: !this.state.toggleMenu
        });
        document.querySelector('.contentMobileAnimate').classList.toggle('active');
    };

    render() {
        const menuClass = this.state.menuShowed ? "background-menu active" : "background-menu";
        const toggleMenu = this.state.menuShowed ? "toggle-menu active" : "toggle-menu";
        return (
            <header>
                <div className="header-container-width">
                    <div className="logo">
                        <Link to="portfolio">
                            <img src="/img/header/logo-small-white.png" alt="ShadeDesigns"/>
                        </Link>
                    </div>
                    <nav>
                        <a role="button" onClick={this.switchToggle} className={toggleMenu}><span> </span></a>
                        <div  className={menuClass}>
                            <div className="scroll-menu">
                                <ul id="menu" className="menu">
                                    <li>
                                        <NavLink to="/portfolio" activeClassName="active" className="link">
                                            <i18n.span text={{ key: "portfolio" }}/>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/aboutUs" activeClassName="active" className="link">
                                            <i18n.span text={{ key: "about-us" }}/>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/blog" activeClassName="active" className="link">
                                            <i18n.span text={{ key: "blog" }}/>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contactUs" activeClassName="active" className="link scroll">
                                            <i18n.span text={{ key: "contact-us" }}/>
                                        </NavLink>
                                    </li>
                                </ul>
                                <div className="find-us">
                                    <i18n.text tag="i" text={{key: "find-us-here"}}/>
                                    <FindUs/>
                                </div>
                                <div className="change-lan-mobile">
                                    <ChangeLan/>
                                </div>
                            </div>
                        </div>
                        {this.props.children}
                    </nav>
                    <div className="email-header">
                        <a role="button" onClick={showModal}>
                            <SVGInline
                                svg={"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
                                "\t viewBox=\"0 0 334.5 334.5\" style=\"enable-background:new 0 0 334.5 334.5;\" xml:space=\"preserve\">\n" +
                                "\t<path d=\"M332.797,13.699c-1.489-1.306-3.608-1.609-5.404-0.776L2.893,163.695c-1.747,0.812-2.872,2.555-2.893,4.481\n" +
                                "\ts1.067,3.693,2.797,4.542l91.833,45.068c1.684,0.827,3.692,0.64,5.196-0.484l89.287-66.734l-70.094,72.1\n" +
                                "\tc-1,1.029-1.51,2.438-1.4,3.868l6.979,90.889c0.155,2.014,1.505,3.736,3.424,4.367c0.513,0.168,1.04,0.25,1.561,0.25\n" +
                                "\tc1.429,0,2.819-0.613,3.786-1.733l48.742-56.482l60.255,28.79c1.308,0.625,2.822,0.651,4.151,0.073\n" +
                                "\tc1.329-0.579,2.341-1.705,2.775-3.087L334.27,18.956C334.864,17.066,334.285,15.005,332.797,13.699z\"/>\n" +
                                "</svg>\n"}/>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
}