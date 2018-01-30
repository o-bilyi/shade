import React, {Component} from "react";
import {showPopup} from "../components/ShowPopup";
import i18n from "i18n-react";

const initialState = {
	user : "",
	site : "",
	email : "",
	error : {
		user : null,
		site : null,
		email : null
	}
};

const validation = {
	user : (val) => {
		if (val.length < 2) {
			return "your name must be greater than 2 characters";
		}
		return null;
	},
	email : (val) => {
		let error = null;
		const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
		if (!emailValidation.test(val)) {
			error = "description must be greater than 10 characters";
		}
		return error;
	},
	site : (val) => {
		if (val.length < 10) {
			return "description must be greater than 10 characters";
		}
		return null;
	}
};

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	onFieldsChange = event => {
		const errorText = validation[event.target.name](event.target.value);

		this.setState({
			[event.target.name] : event.target.value,
			error : {
				...this.state.error,
				[event.target.name] : errorText
			}
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		const formData = new FormData(event.target);

		function status(response) {
			if (response.status >= 200 && response.status < 300) {
				return Promise.resolve(response);
			}
			return Promise.reject(new Error(response.statusText));
		}

		fetch("/send.php", {
			method : "post",
			body : formData
		})
			.then(status)
			.then(() => {
				showPopup();
				this.setState(initialState);
			})
			.catch((error) => {
				console.warn("Request failed", error);
			});
	};

	haveError = () => {
		let haveError = false;
		const fields = Object.keys(this.state.error);
		fields.forEach(i => {
			if(this.state.error[i] !== null || this.state[i] === "") {
				haveError = true;
			}
		});
		return haveError;
	};

	render() {
		const {user, site, email, error} = this.state;
		return (
			<form className="form" method="post" onSubmit={this.handleSubmit}>
				<div className="input-field max-width-input">
					<i18n.text tag="label" htmlFor="your-name" text={{key : "my-name-is"}}/>
					<input id="your-name" value={user} onChange={this.onFieldsChange} type="text"
						   required
						   name="user" className="form-control"/>
					{error.user && <p className="error-text">{error.user}</p>}
				</div>
				<div className="input-field">
					<i18n.text tag="label" htmlFor="your-name" text={{key : "i-liked"}}/>
					<input id="your-website" value={site} onChange={this.onFieldsChange} type="text"
						   required
						   name="site" className="form-control"/>
					{error.site && <p className="error-text">{error.site}</p>}
				</div>
				<div className="input-field">
					<i18n.text tag="label" htmlFor="your-name" text={{key : "more-details-email"}}/>
					<input id="your-email" value={email} onChange={this.onFieldsChange} type="email"
						   required
						   name="email" className="form-control"/>
					{error.email && <p className="error-text">{error.email}</p>}
				</div>
				<div className="big-btn">
					<button type="submit" disabled={this.haveError()} className="more-projects_link" name="submit">
						<i18n.span text={{key : "send-message"}}/>
					</button>
				</div>
			</form>
		);
	}
}
