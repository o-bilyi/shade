import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import FindUs from "./FindUs.component";

/**
 * @return {null}
 */
function FooterComponent(props) {
	if (props.textsOfPages) {
		const {copyright, facebook, linked} = props.textsOfPages;
		return (
			<footer>
				<div className="footer-container">
					<div className="left">
						<p>{copyright}</p>
					</div>
					<div className="right social">
						<FindUs
							facebook={facebook}
							linkedin={linked}
						/>
					</div>
				</div>
			</footer>
		);
	}
	return null;
}

FooterComponent.propTypes = {
	textsOfPages : PropTypes.shape({
		copyright : PropTypes.string,
		facebook : PropTypes.string,
		linked : PropTypes.string,
	})
};

const mapStateToProps = state => {
	return {
		textsOfPages : state.textsOfPages,
	};
};

export default connect(mapStateToProps)(FooterComponent);
