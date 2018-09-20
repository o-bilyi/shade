import React from "react";
import Header from "../../shared/component/Header";
import Footer from "../../shared/component/Footer";
import Item from "./components/Item.component";
import Preload from "../../shared/component/Preload";
import {Fetch, scrollTo, API} from "../../utilits/index";
import BottomMainForm from "../../shared/component/bottom-main-form";

export default class AboutUs extends React.PureComponent {
	state = {
		items : [],
	};

	componentDidMount() {
		scrollTo();
		this._getUsers();
	}

	_getUsers = () => {
		Fetch(`${API}users`).then(res => {
			if (res) {
				this.setState({
					items : res
				});
			}
		});
	};

	_getUserItems = () => {
		return this.state.items.map((item, key) => <Item {...item} key={key}/>);
	};

	render() {
		return (
			<div className="AboutUs">
				<Header/>
				{
					this.state.items.length
						? <div className="offset-section contentMobileAnimate">
							<div data-wow-duration="1.5s" className="wow animated fadeInDown title-about-container">
								<h2 className="title-page">
									<span className="crossed-out" children="про нас"/>
									{/* <span children="Команда, натхненна дизайном"/> */}
								</h2>
								{/* <p className="description" children="description"/> */}
							</div>
							<main data-wow-offset="100" data-wow-duration="1.5s" className="wow animated fadeInUp about-container">
								<section className="wow animated fadeIn user-container">
									{this._getUserItems()}
								</section>
							</main>
							<BottomMainForm/>
						</div>
						: <Preload/>
				}
				<Footer/>
			</div>
		);
	}
}
