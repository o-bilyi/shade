import React from "react";
import PropTypes from "prop-types";

export default class Login extends React.Component {
	static propTypes = {
		signInWithGoogle : PropTypes.func,
		history : PropTypes.shape({
			replace : PropTypes.func,
		}),
	};

	redirectToNextPage = async() => {
		this.props.history.replace("/portfolio");
	};

	/* handleGoogleSubmit = () => {
		this.props.signInWithGoogle().then(() => this.redirectToNextPage()).catch(e => {
				if (e.code === "auth/account-exists-with-different-credential") {
					return (
						console.error(e.code, e.message)
					);
				}
				console.error(e.code, e.message);
			},
		);
	};*/

	render() {
		return (
			<div>
				<button onClick={this.handleGoogleSubmit}>Login with google</button>
			</div>
		);
	}
}
