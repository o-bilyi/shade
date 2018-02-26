import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import i18n from "i18n-react";
import ReactSVG from "react-svg";
import FindUs from "../components/FindUs";
import Modal from "../components/Modal";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuShowed : false,
			toggleMenu : false
		};
	}

	removeClassMenu = () => {
		this.setState({
			menuShowed : false,
			toggleMenu : false
		});
		document.querySelector(".contentMobileAnimate").classList.remove("active");
	};

	switchToggle = () => {
		this.setState({
			menuShowed : !this.state.menuShowed,
			toggleMenu : !this.state.toggleMenu
		});
		document.querySelector(".contentMobileAnimate").classList.toggle("active");
	};

	render() {
		const menuClass = this.state.menuShowed ? "background-menu active" : "background-menu";
		const toggleMenu = this.state.menuShowed ? "toggle-menu active" : "toggle-menu";
		return (
			<header>
				<div className="header-container-width">
					<Link className="header-logo" to={"portfolio"}>
						<ReactSVG className="header-logo-icon"
								  path={require("../svg/Logo_SD_shape.svg")}
						/>
						<span className="name-logo">Shade Design</span>
					</Link>
					<nav>
						<button onClick={this.switchToggle} className={toggleMenu}> <span/></button>
						<div onClick={this.switchToggle} className={menuClass}>
							<div className="scroll-menu">
                                <ReactSVG className="menu-logo-icon"
                                          path={require("../svg/Logo_SD_shape.svg")}
                                />
								<ul className="menu">
									<li className="item-menu">
										<NavLink to="/portfolio" activeClassName="active" className="link">
											<i18n.span text={{key : "works"}}/>
										</NavLink>
									</li>
									<li className="item-menu">
										<NavLink to="/aboutUs" activeClassName="active" className="link">
											<i18n.span text={{key : "about-us"}}/>
										</NavLink>
									</li>
									<li className="item-menu">
										<NavLink to="/blog" activeClassName="active" className="link">
											<i18n.span text={{key : "blog"}}/>
										</NavLink>
									</li>
									<li className="item-menu">
										<NavLink to="/contactUs" activeClassName="active" className="link scroll">
											<i18n.span text={{key : "contact-us"}}/>
										</NavLink>
									</li>
								</ul>
								<div className="find-us">
									<FindUs/>
									<p className="copyright">
										© 2017 Shade.Design <br/>
                                        UX\UI DESIGN & DEVELOPMENT <br/>
                                        All rights reserved</p>
								</div>
							</div>
						</div>
					</nav>
					<div className="email-header">
						<Modal/>
					</div>
				</div>
			</header>
		);
	}
}
