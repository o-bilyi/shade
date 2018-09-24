import React from "react";
import Header from "shared/component/Header";
import Footer from "shared/component/Footer";
import Item from "./components/Item.component";
import Preload from "shared/component/Preload";
import {Fetch, scrollTo, API} from "utilits/index";
import BottomMainForm from "shared/component/bottom-main-form";
import TitleAndDescriptionPage from "shared/component/TitleAndDescriptionPage.component";

export default class AboutUs extends React.PureComponent {
	state = {
		items : [],
		titleAndDescription : []
	};

	componentDidMount() {
		scrollTo();
		this._getUsers();
	}

	_getUsers = () => {
		Promise.all([
			Fetch(`${API}users`).then(res => {
				if (res) {
					this.setState({
						items : res,
					});
				}
			}),
			Fetch(`${API}users-text`).then(res => {
				if (res) {
					this.setState({
						titleAndDescription : res,
					});
				}
			})
		]);
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

							<div className="width-container">

								{
									<TitleAndDescriptionPage titleAndDescription={this.state.titleAndDescription}/>
								}

								<main data-wow-offset="100" data-wow-duration="1.5s" className="wow animated fadeInUp about-container">
									<section className="wow animated fadeIn user-container">
										{this._getUserItems()}
									</section>
								</main>

							</div>

							<BottomMainForm/>
						</div>
						: <Preload/>
				}
				<Footer/>
			</div>
		);
	}
}
