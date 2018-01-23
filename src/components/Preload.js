import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Preload extends Component {

	static propTypes = {
		preloadShow : PropTypes.bool
	};

	static defaultProps = {
		preloadShow : false
	};

	// constructor(props){
	//     super(props);
	// this.state = {
	//     preloadShow : this.props.preloadShow
	// };

	// window.onload = () => {
	//     this.setState({
	//         preloadShow : false
	//     });
	// }
	// }

	render() {
		const preloadClass = this.props.preloadShow ? "preload" : "preload delete";
		return (
			<div className={preloadClass}>
                <span className="preloadText">
                    <span className="world">L</span>
                    <span className="world">o</span>
                    <span className="world">a</span>
                    <span className="world">d</span>
                    <span className="spin"/>
                    <span className="spin"/>
                    <span className="spin"/>
                </span>
			</div>
		);
	}
}
