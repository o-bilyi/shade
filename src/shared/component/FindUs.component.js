import React from "react";
import PropTypes from "prop-types";
import FacebookIconSVG from "assets/svg/fb.svg";
import LinkedinIconSVG from "assets/svg/linkedin.svg";

export default function FindUs(props) {
	const {facebook, linkedin} = props;
	return (
		<div className="social">
			<a href={facebook} target="_blank">
				<FacebookIconSVG />
			</a>
			<a href={linkedin} target="_blank">
				<LinkedinIconSVG />
			</a>
		</div>
	);
}

FindUs.propTypes = {
	facebook : PropTypes.string,
	linkedin : PropTypes.string,
};

FindUs.defaultProps = {
	facebook : "https://www.facebook.com/sasha.beluy.56",
	linkedin : "https://www.linkedin.com/in/oleksandr-bilyi-83156b10a/",
};
