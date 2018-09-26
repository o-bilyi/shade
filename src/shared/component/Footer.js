import React from "react";
import FindUs from "./FindUs";
import {connect} from "react-redux";
import PropTypes from "prop-types";

function Footer(props) {
	return (
		<footer>
			<div className="footer-container">
				<div className="left">
					{
						props.pagesText && props.pagesText.map((item, key) => {
							return <p key={key}>{item.copyrightTitle}</p>;
						})
					}
				</div>
				<div className="right social">
					<FindUs/>
				</div>
			</div>
		</footer>
	);
}

Footer.propTypes = {
	pagesText : PropTypes.array,
};

const mapStateToProps = state => {
	return {
		pagesText : state.pagesText,
	};
};

export default connect(mapStateToProps)(Footer);
