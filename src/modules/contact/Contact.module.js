import React from "react";
import {Link} from "react-router-dom";
import {scrollTo} from "utilits/index";
import Header from "shared/component/Header";
import Footer from "shared/component/Footer";
import FindUs from "shared/component/FindUs";
import BottomMainForm from "shared/component/bottom-main-form";

import PhoneIconSVG from "../../assets/svg/phone.svg";
import LetterIconSVG from "../../assets/svg/letter.svg";

export default class ContactUs extends React.PureComponent {
	componentDidMount() {
		scrollTo();
	}

	render() {
		return (
			<div className="ContactUs">
				<Header/>
				<main className="offset-section contentMobileAnimate contact">
					<div data-wow-duration="1.5s" className="wow animated fadeInDown title-contact-container">
						<h2 className="title-page">
							<span className="crossed-out" children="Контакти"/>
							<span children="Завжди готові допомогти."/>
						</h2>
					</div>
					<section data-wow-offset="100" data-wow-duration="1.5s" className="wow animated fadeInUp contact-block">
						<div className="left-block">
							<div className="mail-us">
								<div className="icon-block">
									<LetterIconSVG />
								</div>
								<div className="phone-and-email">
									<p className="title-block">e-mail</p>
									<Link className="link-block" to="mailto:shadesign.info@gmail.com">shadesign.info@gmail.com</Link>
								</div>
							</div>
							<div className="phone-us">
								<div className="icon-block">
									<PhoneIconSVG />
								</div>
								<div className="phone-and-email">
									<p className="title-block">phone / viber / telegram</p>
									<Link className="link-block" to="tel:+38 (066) 756 90 93">+38 (066) 756 90 93</Link>
									<span className="seperator">/</span>
									<Link className="link-block" to="tel:+38 (095) 33 97 495">+38 (095) 33 97 495</Link>
								</div>
							</div>
						</div>
						<div className="right-block">
							<p className="findUsHere" children="ми тут:"/>
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
