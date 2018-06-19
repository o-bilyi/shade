import React from "react";
import {scrollTo} from '../../utilits/index';
import {Link} from "react-router-dom";
import Header from "../../shared-components/Header";
import Footer from "../../shared-components/Footer";
import FindUs from "../../shared-components/FindUs";
import BottomMainForm from "../../shared-components/bottom-main-form";

export default class ContactUs extends React.PureComponent {
	componentDidMount(){
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
									<svg className="header-logo-icon letter" xmlns="http://www.w3.org/2000/svg"
										 viewBox="0 0 79.94 56.25">
										<rect className="letter-1" x="39.85" y="-36.97" width="0.17" height="79.86"
											  transform="translate(36.97 42.9) rotate(-90)"/>
										<rect className="letter-1" x="39.85" y="-33.35" width="0.17" height="79.86"
											  transform="translate(33.35 46.52) rotate(-90)"/>
										<rect className="letter-1" x="39.85" y="13.99" width="0.17" height="79.86"
											  transform="translate(-13.99 93.85) rotate(-90)"/>
										<rect className="letter-1" x="39.85" y="10.26" width="0.17" height="79.86"
											  transform="translate(-10.26 90.13) rotate(-90)"/>
										<rect className="letter-1" x="3.16" width="0.17" height="56.25"
											  transform="translate(6.5 56.25) rotate(-180)"/>
										<rect className="letter-1" x="6.86" width="0.17" height="56.25"
											  transform="translate(13.9 56.25) rotate(-180)"/>
										<rect className="letter-1" x="20.27" y="25.69" width="0.17" height="29.57"
											  transform="translate(3.32 82.45) rotate(-131.21)"/>
										<rect className="letter-1" x="25.42" y="-0.68" width="0.17" height="42.69"
											  transform="translate(57.85 15.09) rotate(131.21)"/>
										<rect className="letter-1" x="24.09" y="1.38" width="0.17" height="45.88"
											  transform="translate(58.4 22.15) rotate(131.21)"/>
										<rect className="letter-1" x="17.87" y="23.46" width="0.17" height="29.48"
											  transform="translate(1.05 76.87) rotate(-131.21)"/>
										<path className="letter-2"
											  d="M41.37,2.87V6.67H73L41.37,34.45h0v5L51.1,31,73,50.21H41.37V54H79.94V2.87Zm34.77,45L54,28.43,76.15,9Z"/>
									</svg>
								</div>
								<div className="phone-and-email">
									<p className="title-block">e-mail</p>
									<Link className="link-block" to="mailto:shadesign.info@gmail.com">shadesign.info@gmail.com</Link>
								</div>
							</div>
							<div className="phone-us">
								<div className="icon-block">
									<svg className="header-logo-icon phone-icon" xmlns="http://www.w3.org/2000/svg"
										 viewBox="0 0 79.94 58">
										<g>
											<rect className="phone-icon-fill-1" x="36.78" y="-30.21" width="0.17"
												  height="67.23"
												  transform="translate(33.46 40.27) rotate(-90)"/>
											<rect className="phone-icon-fill-1" x="36.78" y="-26.59" width="0.17"
												  height="67.23"
												  transform="translate(29.84 43.88) rotate(-90)"/>
											<rect className="phone-icon-fill-1" x="36.78" y="20.74" width="0.17"
												  height="67.23"
												  transform="translate(-17.49 91.22) rotate(-90)"/>
											<rect className="phone-icon-fill-1" x="36.84" y="17.1" width="0.17"
												  height="67.23"
												  transform="translate(-13.79 87.64) rotate(-90)"/>
											<rect className="phone-icon-fill-1" x="6.76" width="0.17" height="14.39"
												  transform="translate(13.7 14.39) rotate(-180)"/>
											<rect className="phone-icon-fill-1" x="10.47" width="0.17" height="14.39"
												  transform="translate(21.1 14.39) rotate(-180)"/>
											<rect className="phone-icon-fill-1" x="6.76" y="44.36" width="0.17"
												  height="13.64"
												  transform="translate(13.7 102.36) rotate(-180)"/>
											<rect className="phone-icon-fill-1" x="10.47" y="44.36" width="0.17"
												  height="13.64"
												  transform="translate(21.1 102.36) rotate(-180)"/>
											<rect className="phone-icon-fill-1" x="6.68" y="18.03" width="0.17"
												  height="9.29"
												  transform="translate(13.53 45.36) rotate(-180)"/>
											<rect className="phone-icon-fill-1" x="10.38" y="18.03" width="0.17"
												  height="9.29"
												  transform="translate(20.93 45.36) rotate(-180)"/>
											<rect className="phone-icon-fill-1" x="6.76" y="31.02" width="0.17"
												  height="9.29"
												  transform="translate(13.7 71.34) rotate(-180)"/>
											<rect className="phone-icon-fill-1" x="10.47" y="31.02" width="0.17"
												  height="9.29"
												  transform="translate(21.1 71.34) rotate(-180)"/>
											<rect className="phone-icon-fill-1" x="6.12" y="21.11" width="0.17"
												  height="12.41"
												  transform="translate(-21.11 33.53) rotate(-90)"/>
											<rect className="phone-icon-fill-1" x="6.12" y="24.73" width="0.17"
												  height="12.41"
												  transform="translate(-24.73 37.14) rotate(-90)"/>
											<rect className="phone-icon-fill-1" x="6.12" y="8.21" width="0.17"
												  height="12.41"
												  transform="translate(-8.21 20.63) rotate(-90)"/>
											<rect className="phone-icon-fill-1" x="0.91" y="13.49" width="0.17"
												  height="5.39"
												  transform="translate(2 32.36) rotate(-180)"/>
											<rect className="phone-icon-fill-1" x="0.91" y="26.5" width="0.17"
												  height="5.39"
												  transform="translate(2 58.39) rotate(-180)"/>
											<rect className="phone-icon-fill-1" x="0.91" y="39.85" width="0.17"
												  height="5.39"
												  transform="translate(2 85.08) rotate(-180)"/>
											<rect className="phone-icon-fill-1" x="12.24" y="13.32" width="0.17"
												  height="5.39"
												  transform="translate(24.66 32.02) rotate(-180)"/>
											<rect className="phone-icon-fill-1" x="12.24" y="26.33" width="0.17"
												  height="5.39"
												  transform="translate(24.66 58.05) rotate(-180)"/>
											<rect className="phone-icon-fill-1" x="12.24" y="39.68" width="0.17"
												  height="5.39"
												  transform="translate(24.66 84.75) rotate(-180)"/>
											<rect className="phone-icon-fill-1" x="6.12" y="11.83" width="0.17"
												  height="12.41"
												  transform="translate(-11.83 24.24) rotate(-90)"/>
											<rect className="phone-icon-fill-1" x="6.12" y="38.07" width="0.17"
												  height="12.41"
												  transform="translate(-38.07 50.48) rotate(-90)"/>
											<rect className="phone-icon-fill-1" x="6.12" y="34.13" width="0.17"
												  height="12.41"
												  transform="translate(-34.13 46.54) rotate(-90)"/>
											<path className="phone-icon-fill-2"
												  d="M41.37,3.32V7.11H76.15V50.66H41.37v3.79H79.94V3.32Z"/>
											<path className="phone-icon-fill-3"
												  d="M60.61,35.6a1.62,1.62,0,0,1-.38,1.46l-4.31,5.07a2.66,2.66,0,0,1-.78.67,3.45,3.45,0,0,1-1,.4l-.21,0-.46.06a16.38,16.38,0,0,1-2.2,0,16.59,16.59,0,0,1-3.78-.82,31,31,0,0,1-5.17-2.29,37,37,0,0,1-6.3-4.46,38.93,38.93,0,0,1-4.5-4.32,33.41,33.41,0,0,1-3-3.9,22.29,22.29,0,0,1-1.78-3.31,18.28,18.28,0,0,1-.9-2.6,8.8,8.8,0,0,1-.29-1.74q0-.64,0-.71a3.45,3.45,0,0,1,.23-1,2.66,2.66,0,0,1,.53-.88l4.31-5.11a1.56,1.56,0,0,1,1.09-.59,1.33,1.33,0,0,1,.84.2,2.47,2.47,0,0,1,.66.6l4.4,6.86a1.73,1.73,0,0,1,.28,1.22,2.21,2.21,0,0,1-.51,1.18l-1.59,1.88a.59.59,0,0,0-.1.24.88.88,0,0,0,0,.27,6.41,6.41,0,0,0,.78,1.65,15.65,15.65,0,0,0,1.49,2,23.08,23.08,0,0,0,2.75,2.6,23.53,23.53,0,0,0,3,2.29A16.41,16.41,0,0,0,46,33.61a5.52,5.52,0,0,0,1.32.4l.45.05a.85.85,0,0,0,.23-.07.59.59,0,0,0,.22-.14L50,31.62a2.18,2.18,0,0,1,1.44-.69,1.86,1.86,0,0,1,1,.13h0l7.17,3.46A1.79,1.79,0,0,1,60.61,35.6Z"/>
											<path className="phone-icon-fill-2"
												  d="M60.62,35.6a1.79,1.79,0,0,0-1-1.09l-7.17-3.46h0a1.86,1.86,0,0,0-1-.13,2.18,2.18,0,0,0-1.44.69l-1.84,2.22A.59.59,0,0,1,48,34a.85.85,0,0,1-.23.07L47.28,34a5.52,5.52,0,0,1-1.32-.4,16.42,16.42,0,0,1-2.18-1.15,21.2,21.2,0,0,1-2.4-1.75v8.87c.33.2.66.4,1,.58a31,31,0,0,0,5.17,2.29,16.59,16.59,0,0,0,3.78.82,16.37,16.37,0,0,0,2.2,0l.46-.06.21,0a3.45,3.45,0,0,0,1-.4,2.66,2.66,0,0,0,.78-.67l4.31-5.07A1.62,1.62,0,0,0,60.62,35.6Z"/>
										</g>
									</svg>
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
