import React, {Component} from "react";
import {showPopup} from "../components/ShowPopup";
import i18n from "i18n-react";

const initialState = {
	user : "",
	site : "",
	email : "",
	error : {
		user : {
			errorText : "",
			errorField : true
		},
		site : {
			errorText : "",
			errorField : true
		},
		email : {
			errorText : "",
			errorField : true
		}
	}
};

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}


	validateField = (event) => {
		const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		let eventName = event.name;

		if (eventName === "user") {
			if (event.value.length < 2) {
				this.setState({
					error : {
						...this.state.error,
						[eventName] : {
							errorText : "your name must be greater than 2 characters",
							errorField : true
						}
					}
				});
			}
			else {
				this.setState({
					error : {
						...this.state.error,
						[eventName] : {
							errorText : "",
							errorField : false
						}
					}
				});
			}

		} else if (eventName === "site") {
			if (event.value.length < 10) {
				this.setState({
					error : {
						...this.state.error,
						[eventName] : {
							errorText : "description must be greater than 10 characters",
							errorField : true
						}
					}
				});
			}
			else {
				this.setState({
					error : {
						...this.state.error,
						[eventName] : {
							errorText : "",
							errorField : false
						}
					}
				});
			}

		} else if (eventName === "email") {
			if (!emailValidation.test(event.value)) {
				this.setState({
					error : {
						...this.state.error,
						[eventName] : {
							errorText : "invalid email address",
							errorField : true
						}
					}
				});
			}
			else {
				this.setState({
					error : {
						...this.state.error,
						[eventName] : {
							errorText : "",
							errorField : false
						}
					}
				});
			}
		}
	};

	onFieldsChange = event => {
		this.validateField(event.target);

		this.setState({[event.target.name] : event.target.value});
	};

	handleSubmit = event => {
		event.preventDefault();
		let formData = new FormData(event.target);

		function status(response) {
			if (response.status >= 200 && response.status < 300) {
				return Promise.resolve(response);
			} else {
				return Promise.reject(new Error(response.statusText));
			}
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
			.catch(function(error) {
				console.warn("Request failed", error);
			});
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
					{error.user.errorText && <p className="error-text">{error.user.errorText}</p>}
				</div>
				<div className="input-field">
					<i18n.text tag="label" htmlFor="your-name" text={{key : "i-liked"}}/>
					<input id="your-website" value={site} onChange={this.onFieldsChange} type="text"
						   required
						   name="site" className="form-control"/>
					{error.site.errorText && <p className="error-text">{error.site.errorText}</p>}
				</div>
				<div className="input-field">
					<i18n.text tag="label" htmlFor="your-name" text={{key : "more-details-email"}}/>
					<input id="your-email" value={email} onChange={this.onFieldsChange} type="email"
						   required
						   name="email" className="form-control"/>
					{error.email.errorText && <p className="error-text">{error.email.errorText}</p>}
				</div>
				<div className="big-btn">
					<button type="submit" disabled={error.user.errorField || error.site.errorField || error.email.errorField} className="more-projects_link" name="submit">
						<i18n.span text={{key : "send-message"}}/>
					</button>
				</div>
			</form>
		);
	}
}
