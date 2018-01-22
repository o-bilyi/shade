import React, {Component} from "react";
import {Link} from "react-router-dom";
import ReactSVG from "react-svg";
import PropTypes from "prop-types";

export default class FindUs extends Component {
    static propTypes = {
        facebook : PropTypes.string,
        linkedin : PropTypes.string
    };

	static defaultProps = {
        facebook : "https://www.facebook.com/sasha.beluy.56",
        linkedin : "https://www.linkedin.com/in/olexander-bilyi-83156b10a"
    };

    render(){
        const {facebook,linkedin} = this.props;
        return(
            <div className="social">
                <Link  to={facebook} target="_blank">
                    <ReactSVG  path={require("../svg/fb.svg")}/>
                </Link>
                <Link  to={linkedin} target="_blank">
                    <ReactSVG  path={require("../svg/linkedin.svg")}/>
                </Link>
            </div>
        );
    };
}
