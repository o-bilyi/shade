import React, {Component} from "react";
import {Link} from "react-router-dom";
import i18n from "i18n-react";
import ReactSVG from "react-svg";
import ChangeLang from "../components/ChangeLanguage";

export default class Home extends Component {
    render() {
        return (
            <div className="wow animated fadeIn wrapper" data-wow-duration="1.5s">
                <div className="index-header">
                    <div className="logo-container">
                        <div className="logo">
                            <ReactSVG path={require("../svg/Logo_SD_shape.svg")}/>
                        </div>
                        <div className="description-logo">
                            <h1 className="title-logo">Shade Design</h1>
                            <div className="animate-text">
                                <p className="fixed-text"><i18n.span text={{ key: "realizeYourIdeas" }}/></p>
                                <ul className="change-text">
                                    <li><i18n.span text={{ key: "changeTextOne" }}/></li>
                                    <li><i18n.span text={{ key: "changeTextTwo" }}/></li>
                                    <li>shade design</li>
                                </ul>
                            </div>
                        </div>
                        <Link to="/portfolio" className="continue">
                            <i18n.span className="continue-text" text={{ key: "press-to-continue" }}/>
                        </Link>
                    </div>
                    <ChangeLang/>
                    {this.props.children}
                </div>
            </div>
        )
    }
}