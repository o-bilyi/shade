import React from "react";
import PropTypes from "prop-types";
import {navigationScheme} from "../core";
import {Link, withRouter} from "react-router-dom";
import LogoSVG from "../assets/svg/Logo_SD_shape.svg";

export default withRouter(class Home extends React.Component {
	static propTypes = {
		history : PropTypes.shape({
			push : PropTypes.func
		}),
	};
	constructor(props) {
		super(props);

		this.state = {
			step : 0
		};
	}

	componentDidMount() {
		this._setState();
	}

	_setState = () => {
		setTimeout(() => {
			this.setState({
				step : this.state.step + 1
			});
		}, 2000);
	};

	transitionEnd = () => {
		const nextStep = this.state.step + 1;
		if(nextStep === 3) {
			this.props.history.push(navigationScheme.about);
		} else {
			this._setState();
		}
	};

	render() {
		const step = "step-" + this.state.step;
		return (
			<div className={"wrapper index-header " + step}>
				<div className="wow animated fadeIn logo-container">
					<div className="logo">
						<Link to="/portfolio">
							<LogoSVG/>
						</Link>
					</div>
					<div className="animate-text">
						<h1 className="fixed-text">Реалізуй свої ідеї з</h1>
						<div className="wrapper-change-text">
							<p className="change-text" onTransitionEnd={this.transitionEnd}>
								натхненням
								<br/>
								підтримкою
								<br/>
								shade design
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
});
