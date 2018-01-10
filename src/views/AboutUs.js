import React, {Component} from "react";
import i18n from "i18n-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FindUs from "../components/FindUs";
import Feedback from "../components/Modal";
import BottomMainForm from "../components/bottom-main-form";

const team = [
    {
        "userImg": "/img/main/ui-ux-designer.png",
        "userName": "Serhii Henyk",
        "userTitlespan": "UI/UX designer",
        "userDescription": "userDescriptionDesigner",
        "userSocialFacebook": "https://www.facebook.com/serhii.henyk",
        "userSocialLinkedin": "https://www.linkedin.com/in/serhii.henyk",
        "animateClass":"wow animated fadeInLeft user-box"
		// "userIcon": "/img/main/startup.png",
	},
    {
        "userImg": "/img/main/web-dev.png",
        "userName": "Olexander Bilyi",
        "userTitlespan": "Front-end-developer",
        "userDescription": "userDescriptionFrontend",
        "userSocialFacebook": "https://www.facebook.com/sasha.beluy.56",
        "userSocialLinkedin": "https://www.linkedin.com/in/olexander-bilyi-83156b10a/",
        "animateClass":"wow animated fadeInRight user-box"
		// "userIcon": "/img/main/coding.png",
	}
];

export default class AboutUs extends Component {
    getUsers = (item, key) => {
        let localizationKey = "userDescription" + item.userName.replace(" ","_");
        return (
            <div className={item.animateClass} key={key}>
                <div className="user-head">
                    <div className="user-img">
                        <img src={item.userImg} alt="text"/>
                    </div>
                    <div className="user-title">
                        <h2>{item.userName}</h2>
                        <span>{item.userTitlespan}</span>
                    </div>
                </div>
                <div className="user-body">
                    <div className="user-description">
                        <i18n.p text={{key: localizationKey}}/>
                    </div>
                    <FindUs
                        facebook={item.userSocialFacebook}
                        linkedin={item.userSocialLinkedin}
                    />
                </div>
            </div>
        );
    };
    render() {
        return (
            <div className="AboutUs">
                <Header/>
                <div className="offset-section contentMobileAnimate">
                    <div data-wow-duration="1.5s" className="wow animated fadeIn title-about-container">
                        <h2 className="title-page">
                            <i18n.text className="crossed-out" tag="strong" text={{ key: "about-us" }}/>
                            <i18n.span text={{ key: "teamInspired" }}/>
                        </h2>
                        <i18n.p className="description" text={{key: "aboutUsDescription"}}/>
                    </div>
                    <main data-wow-offset="100" data-wow-duration="1.5s" className="wow animated fadeInUp about-container">
                        <section className="wow animated fadeIn user-container">
                            {team.map(this.getUsers)}
                        </section>
                    </main>
					<BottomMainForm/>
                </div>
                <Footer/>
                <Feedback/>
            </div>
        );
    };
}
