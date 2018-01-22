import React, {Component} from "react";
import i18n from "i18n-react";
import ReactSVG from "react-svg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomMainForm from "../components/bottom-main-form";
import FindUs from "../components/FindUs";

export default class ContactUs extends Component {
	render() {
		return (
			<div className="ContactUs">
				<Header/>
				<main className="offset-section contentMobileAnimate contact">
					<div data-wow-duration="1.5s" className="wow animated fadeInDown title-contact-container">
						<h2 className="title-page">
							<i18n.text className="crossed-out" tag="strong" text={{key : "contact-us"}}/>
							<i18n.span text={{key : "alwaysReadyToHelp"}}/>
						</h2>
					</div>
					<section data-wow-offset="100" data-wow-duration="1.5s"className="wow animated fadeInUp contact-block">
						<div className="left-block">
							<div className="mail-us">
								<div className="icon-block">
									<ReactSVG className="header-logo-icon"
											  path={require("../svg/letter.svg")}
									/>
								</div>
								<div className="phone-and-email">
									<p className="title-block">e-mail</p>
									<a className="link-block" href="mailto:shade-designs@com">shade-designs@com</a>
								</div>
							</div>
							<div className="phone-us">
								<div className="icon-block">
									<ReactSVG className="header-logo-icon"
											  path={require("../svg/phone.svg")}
									/>
								</div>
								<div className="phone-and-email">
									<p className="title-block">phone / viber / telegram</p>
									<a className="link-block" href="tel:+38 (066) 756 90 93">+38 (066) 756 90 93</a>
									<span className="seperator">/</span>
									<a className="link-block" href="tel:+38 (095) 33 97 495">+38 (095) 33 97 495</a>
								</div>
							</div>
						</div>
						<div className="right-block">
							<i18n.p className="findUsHere" text={{key : "findUsHere"}}/>
							<FindUs/>
						</div>
					</section>
				</main>
				<BottomMainForm/>
				<Footer/>
			</div>
		);
	}
}
