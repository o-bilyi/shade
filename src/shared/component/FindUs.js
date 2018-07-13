import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import FacebookIconSVG from "../../assets/svg/fb.svg";
import LinkedinIconSVG from "../../assets/svg/linkedin.svg";

export default function FindUs(props) {
	const {facebook, linkedin} = props;
	return (
		<div className="social">
			<Link to={facebook} target="_blank">
				<FacebookIconSVG />
			</Link>
			<Link to={linkedin} target="_blank">
				<LinkedinIconSVG />
			</Link>
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
