import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function FindUs(props) {
    const {facebook,linkedin} = props;
    return(
        <div className="social">
            <Link  to={facebook} target="_blank">
				<svg className="faceBook-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.17 57.17">
					<g>
						<rect className="faceBook-icon-1" x="8" width="0.17" height="57.17"/>
						<rect className="faceBook-icon-1" x="49" width="0.17" height="57.17"/>
						<rect className="faceBook-icon-1" x="28.5" y="20.5" width="0.17" height="57.17"
							  transform="translate(-20.5 77.67) rotate(-90)"/>
						<rect className="faceBook-icon-1" x="28.5" y="-19.5" width="0.17" height="57.17"
							  transform="translate(19.5 37.68) rotate(-90)"/>
						<rect className="faceBook-icon-2" x="8" y="9" width="1" height="16.13"/>
						<rect className="faceBook-icon-2" x="15.57" y="1.44" width="1" height="16.13"
							  transform="translate(6.56 25.57) rotate(-90)"/>
						<rect className="faceBook-icon-2" x="48.09" y="33.05" width="1" height="16.13"
							  transform="translate(97.18 82.22) rotate(180)"/>
						<rect className="faceBook-icon-2" x="40.53" y="40.61" width="1" height="16.13"
							  transform="translate(89.7 7.65) rotate(90)"/>
						<path className="faceBook-icon-2"
							  d="M30.48,41.1H26v-12H23V24.95h3V22.51c0-3.38.92-5.43,4.89-5.43h3.31v4.14H32.11c-1.55,0-1.62.58-1.62,1.66v2.07H34.2l-.44,4.14H30.48Z"/>
					</g>
				</svg>
            </Link>
            <Link  to={linkedin} target="_blank">
				<svg className="linked-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 57.17 57.17">
					<g>
						<rect className="linked-icon-1" x="8" width="0.17" height="57.17"/>
						<rect className="linked-icon-1" x="49" width="0.17" height="57.17"/>
						<rect className="linked-icon-1" x="28.5" y="20.5" width="0.17" height="57.17"
							  transform="translate(-20.5 77.67) rotate(-90)"/>
						<rect className="linked-icon-1" x="28.5" y="-19.5" width="0.17" height="57.17"
							  transform="translate(19.5 37.68) rotate(-90)"/>
						<rect className="linked-icon-2" x="8" y="9" width="1" height="16.13"/>
						<rect className="linked-icon-2" x="15.57" y="1.44" width="1" height="16.13"
							  transform="translate(6.56 25.57) rotate(-90)"/>
						<rect className="linked-icon-2" x="48.09" y="33.05" width="1" height="16.13"
							  transform="translate(97.18 82.22) rotate(180)"/>
						<rect className="linked-icon-2" x="40.53" y="40.61" width="1" height="16.13"
							  transform="translate(89.7 7.65) rotate(90)"/>
						<path className="linked-icon-2"
							  d="M21.46,19.18a2.39,2.39,0,1,0,2.38,2.38A2.39,2.39,0,0,0,21.46,19.18Z"/>
						<rect className="linked-icon-2" x="19.41" y="25.76" width="4.11" height="13.24"/>
						<path className="linked-icon-2"
							  d="M34,25.43a4.32,4.32,0,0,0-3.89,2.14H30V25.76H26.1V39h4.11V32.45c0-1.73.33-3.4,2.47-3.4s2.14,2,2.14,3.51V39h4.11V31.74C38.93,28.17,38.16,25.43,34,25.43Z"/>
					</g>
				</svg>
            </Link>
        </div>
    );
}

FindUs.propTypes = {
	facebook : PropTypes.string,
	linkedin : PropTypes.string
};

FindUs.defaultProps = {
	facebook : "https://www.facebook.com/sasha.beluy.56",
	linkedin : "https://www.linkedin.com/in/oleksandr-bilyi-83156b10a/"
};
