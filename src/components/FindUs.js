import React, {Component} from "react";
import ReactSVG from "react-svg";
import PropTypes from "prop-types";

export default class FindUs extends Component {
    static propTypes = {
        language: PropTypes.string,
        facebook : PropTypes.string,
        linkedin : PropTypes.string
    };

    defaultProps = {
        facebook : "https://www.facebook.com/sasha.beluy.56",
        linkedin : "https://www.linkedin.com/in/olexander-bilyi-83156b10a"
    }
    render(){
        const {facebook,linkedin} = this.props;
        return(
            <div className="social">
                <a href={facebook} target="_blank" rel="noopener noreferrer">
                    <ReactSVG  path={require("../svg/fb.svg")}/>
                </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <ReactSVG  path={require("../svg/linkedin.svg")}/>
                </a>
            </div>
        );
    };
}