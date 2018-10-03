import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import FindUs from "./FindUs.component";

function FooterComponent(props) {
	return (
		<footer>
			<div className="footer-container">
				{
					props.pagesText && props.pagesText.map((item, key) => {
						return[
							<div className="left">
								<p key={key}>{item.copyrightTitle}</p>
							</div>,
							<div className="right social">
								<FindUs
									facebook={item.facebook}
									linkedin={item.linked}
								/>
							</div>
						];
					})
				}
			</div>
		</footer>
	);
}

FooterComponent.propTypes = {
	pagesText : PropTypes.array,
};

const mapStateToProps = state => {
	return {
		pagesText : state.pagesText,
	};
};

export default connect(mapStateToProps)(FooterComponent);
