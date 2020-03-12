import React from "react";
import {db} from "../../db";
import {scrollTo} from "utilits/index";
import Item from "./components/Item.component";
import Preload from "shared/component/Preload.component";
import Wrapper from "../../shared/component/Wrapper.component";
import TitleAndDescriptionPage from "shared/component/TitleAndDescriptionPage.component";

export default class AboutUs extends React.PureComponent {
	state = {
		items : [],
	};

	componentDidMount() {
		scrollTo();
		this._getUsers();
	}

	_getUsers = () => {
		db.ref("/about").once("value").then(snapshot => {
			this.setState({
				items : snapshot.val(),
			});
		});
	};

	_getUserItems = () => {
		return this.state.items.map((item, key) => <Item {...item} key={key}/>);
	};

	_getContent = () => {
		if (this.state.items.length) {
			return (
				<div className="width-container">

					{ <TitleAndDescriptionPage pageName="usersPage"/> }

					<main data-wow-offset="100" data-wow-duration="1.5s" className="wow animated fadeInUp about-container">
						<section className="wow animated fadeIn user-container">
							{this._getUserItems()}
						</section>
					</main>

				</div>
			);
		}
		return <Preload/>;
	};

	render() {
		return (
			<Wrapper pageName="contactUs" classNames="contact">
				{ this._getContent() }
			</Wrapper>
		);
	}
}
