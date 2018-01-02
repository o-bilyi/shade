import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import i18n from "i18n-react";
import ReactSVG from "react-svg";
// import { showModal } from "../components/Modal";
import FindUs from "../components/FindUs";

export default class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuShowed : false,
			toggleMenu : false
		};
	}

	componentDidMount() {
		document.addEventListener("togglePopupLan", this.removeClassMenu);
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
					<div className="header-logo">
						<ReactSVG className="header-logo-icon"
								  path={require("../svg/Logo_SD_shape.svg")}
						/>
						<span className="name-logo">Shade Design</span>
					</div>
					<nav>
						<button onClick={this.switchToggle} className={toggleMenu}> <span/></button>
						<div className={menuClass}>
							<div className="scroll-menu">
								<ul id="menu" className="menu">
									<li>
										<NavLink to="/portfolio" activeClassName="active" className="link">
											<i18n.span text={{key : "portfolio"}}/>
										</NavLink>
									</li>
									<li>
										<NavLink to="/aboutUs" activeClassName="active" className="link">
											<i18n.span text={{key : "about-us"}}/>
										</NavLink>
									</li>
									<li>
										<NavLink to="/blog" activeClassName="active" className="link">
											<i18n.span text={{key : "blog"}}/>
										</NavLink>
									</li>
									<li>
										<NavLink to="/contactUs" activeClassName="active" className="link scroll">
											<i18n.span text={{key : "contact-us"}}/>
										</NavLink>
									</li>
								</ul>
								<div className="find-us">
									<i18n.text tag="i" text={{key : "find-us-here"}}/>
									<FindUs/>
								</div>
							</div>
						</div>
					</nav>
					<div className="email-header">
						{/* <button onClick={showModal}>*/}
						{/* <ReactSVG path={require("../svg/letter.svg")}/>*/}
						{/* </button>*/}
						<button>
							<ReactSVG path={require("../svg/letter.svg")}/>
						</button>
					</div>
				</div>
			</header>
		);
	}
}
