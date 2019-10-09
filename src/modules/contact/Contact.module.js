import React from "react";
import {db} from "../../db";
import {scrollTo} from "utilits/index";
import FindUs from "shared/component/FindUs.component";
import TitleAndDescriptionPage from "shared/component/TitleAndDescriptionPage.component";

import PhoneIconSVG from "assets/svg/phone.svg";
import LetterIconSVG from "assets/svg/letter.svg";
import Wrapper from "../../shared/component/Wrapper.component";
import Preload from "../../shared/component/Preload.component";

export default class ContactUs extends React.PureComponent {
	state = {
		contacts : []
	};

	componentDidMount() {
		scrollTo();
		this._getContacts();
	}

	_getContacts = () => {
		db.ref("/contacts").once("value").then(snapshot => {
			this.setState({
				contacts : snapshot.val()
			});
		});
	};

	_getContactsBody = () => {
		if (this.state.contacts) {
			const {email, phoneOne, phoneTwo, facebook, linked} = this.state.contacts;
			return (
				<section data-wow-offset="100" data-wow-duration="1.5s" className="wow animated fadeInUp contact-block">
					<div className="left-block">
						<div className="mail-us">
							<div className="icon-block">
								<LetterIconSVG/>
							</div>
							<div className="phone-and-email">
								<p className="title-block">e-mail</p>
								<a className="link-block" href={`mailto:${email}`}>{email}</a>
							</div>
						</div>
						<div className="phone-us">
							<div className="icon-block">
								<PhoneIconSVG/>
							</div>
							<div className="phone-and-email">
								<p className="title-block">phone / viber / telegram</p>
								<a className="link-block" href={`tel:${phoneOne}`}>{phoneOne}</a>
								<span className="seperator">/</span>
								<a className="link-block" href={`tel:${phoneTwo}`}>{phoneTwo}</a>
							</div>
						</div>
					</div>
					<div className="right-block">
						<p className="findUsHere" children="ми тут:"/>
						<FindUs
							facebook={facebook}
							linkedin={linked}
						/>
					</div>
				</section>
			);
		}
		return <Preload/>;
	};


	render() {
		return (
			<Wrapper pageName="contactUs" classNames="contact">
				<div className="width-container">

					{ <TitleAndDescriptionPage pageName="contactsPage"/> }

					{ this._getContactsBody() }

				</div>
			</Wrapper>
		);
	}
}
