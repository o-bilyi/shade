import React, {Component} from "react";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Feedback from "../components/Modal";
import i18n from "i18n-react";

const team = [
    {
        "userImg": "/img/main/ui-ux-designer.jpg",
        "userName": "Serhii Henyk",
        "userTitlespan": "UI/UX designer",
        "userDescription": "userDescriptionDesigner",
        "userSocialFacebook": "https://www.facebook.com/sasha.beluy.56",
        "userSocialLinkedin": "https://www.linkedin.com/in/olexander-bilyi-83156b10a/",
        "userIcon": "/img/main/startup.png",
        "animateClass":"wow animated bounceInLeft user-box"
    },
    {
        "userImg": "/img/main/web-dev.jpg",
        "userName": "Olexander Bilyi",
        "userTitlespan": "Front-end-developer",
        "userDescription": "userDescriptionFrontend",
        "userSocialFacebook": "https://www.facebook.com/sasha.beluy.56",
        "userSocialLinkedin": "https://www.linkedin.com/in/olexander-bilyi-83156b10a/",
        "userIcon": "/img/main/coding.png",
        "animateClass":"wow animated bounceInRight user-box"
    }
];

export default class AboutUs extends Component {
    getUsers = (item, key) => {
        let localizationKey = "userDescription" + item.userName.replace(" ","_");
        return (
            <div className={item.animateClass} key={key}>
                <div className="user-img">
                    <img src={item.userImg} alt="text"/>
                </div>
                <div className="user-title">
                    <h2>{item.userName}</h2>
                    <span>{item.userTitlespan}</span>
                </div>
                <div className="user-description">
                    <i18n.p text={{key: localizationKey}}/>
                </div>
                <div className="user-social">
                    <a href={item.userSocialFacebook} role="button">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href={item.userSocialLinkedin} role="button">
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                </div>
                <img src={item.userIcon} alt="icon" className="user-icon"/>
            </div>
        );
    };
    render() {
        return (
            <div className="AboutUs">
                <Header/>
                <div className="contentMobileAnimate">
                    <div data-wow-duration="1.5s" className="wow animated fadeInDown title-about-container">
                        <div className="title-page">
                            <i18n.text tag="h2" text={{ key: "about-us" }}/>
                            <i18n.span text={{ key: "ourTeam" }}/>
                        </div>
                    </div>
                    <main data-wow-offset="100" data-wow-duration="1.5s" className="wow animated fadeInUp about-container">
                        <div className="container">
                            <section className="description-about">
                                <h3>
                                    <span className="thin-font">Shade</span>
                                    <span className="light-font">Designs</span>
                                    <span className="medium-font">Group</span>
                                </h3>
                                <i18n.p text={{ key: "aboutDescription" }}/>
                            </section>
                            <section className="wow animated fadeIn">
                                <div className="user-container flex-container">
                                    {team.map(this.getUsers)}
                                </div>
                                <div className="interested">
                                    <i18n.span text={{ key: "interestedInCooperation" }}/>
                                    <Link to="ContactUs">
                                        <i18n.text tag="span" className="linkContact" text={{ key: "contact-us" }}/>
                                    </Link>
                                </div>
                            </section>
                        </div>
                    </main>
                </div>
                <Footer/>
                <Feedback/>
            </div>
        );
    };
}