import React from "react";
import PropTypes from "prop-types";
import {notify} from "react-notify-toast";
import connect from "react-redux/es/connect/connect";

const initialState = {
	userState : "",
	siteState : "",
	emailState : "",
	error : {
		userState : null,
		siteState : null,
		emailState : null,
	},
};

const validation = {
	userState : (val) => {
		if (val.length < 2) {
			return "Не менше 2 символів!";
		}
		return null;
	},
	emailState : (val) => {
		let error = null;
		const emailValidation = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
		if (!emailValidation.test(val)) {
			error = "E-mail введений не вірно!";
		}
		return error;
	},
	siteState : (val) => {
		if (val.length < 10) {
			return "не менше 10 символів!";
		}
		return null;
	},
};

class FormComponent extends React.Component {
	static propTypes = {
		hiddenModal : PropTypes.func,
		labelNameText : PropTypes.string,
		labelSiteText : PropTypes.string,
		labelEmailText : PropTypes.string,
		buttonSubmitText : PropTypes.string,
		textsOfPages : PropTypes.shape({
			formFields : PropTypes.shape({
				email : PropTypes.string,
				name : PropTypes.string,
				site : PropTypes.string,
				button : PropTypes.string,
			})
		})
	};

	state = initialState;

	onFieldsChange = event => {
		const errorText = validation[event.target.name](event.target.value);

		this.setState({
			[event.target.name] : event.target.value,
			error : {
				...this.state.error,
				[event.target.name] : errorText,
			},
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		const inputs = {
			user : this.state.user,
			site : this.state.site,
			email : this.state.email,
		};

		function status(response) {
			if (response.ok) {
				return Promise.resolve(response);
			}
			return Promise.reject(response.statusText);
		}

		fetch("/api/sendMessage", {
			headers : {
				"Accept" : "application/json",
				"Content-Type" : "application/json",
			},
			method : "post",
			body : JSON.stringify(inputs),
		}).then(status).then(() => {
			this.setState(initialState);
			notify.show("Форма відправлена!");
		}).catch((error) => {
			notify.show("Помилка, повідомлення не відправлено!");
			console.error("Request failed", error);
		});
	};

	haveError = () => {
		let haveError = false;
		const fields = Object.keys(this.state.error);
		fields.forEach(i => {
			if (this.state.error[i] !== null || this.state[i] === "") {
				haveError = true;
			}
		});
		return haveError;
	};

	render() {
		if (this.props.textsOfPages) {
			const {userState, siteState, emailState, error} = this.state;

			const {email, name, site, button} = this.props.textsOfPages.formFields;
			return (
				<form className="form" method="post" onSubmit={this.handleSubmit}>
					<div className="input-field max-width-input">
						<label htmlFor="your-name">{name}</label>
						<input
							required
							type="text"
							id="your-name"
							name="userState"
							value={userState}
							className="form-control"
							onChange={this.onFieldsChange}
						/>
						{error.userState && <p className="error-text">{error.userState}</p>}
					</div>
					<div className="input-field">
						<label htmlFor="your-name">{site}</label>
						<input
							required
							type="text"
							name="siteState"
							id="your-website"
							value={siteState}
							className="form-control"
							onChange={this.onFieldsChange}
						/>
						{error.siteState && <p className="error-text">{error.siteState}</p>}
					</div>
					<div className="input-field">
						<label htmlFor="your-name">{email}</label>
						<input
							required
							type="email"
							id="your-email"
							name="emailState"
							value={emailState}
							className="form-control"
							onChange={this.onFieldsChange}
						/>
						{error.emailState && <p className="error-text">{error.emailState}</p>}
					</div>
					<div className="big-btn">
						<button
							type="submit"
							name="submit"
							children={button}
							disabled={this.haveError()}
							className="more-projects_link"
						/>
					</div>
				</form>
			);
		}
		return null;
	}
}

const mapStateToProps = state => {
	return {
		textsOfPages : state.textsOfPages,
	};
};

export default connect(mapStateToProps)(FormComponent);
