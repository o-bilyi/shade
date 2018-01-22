import React, { Component } from "react";
import Form from "../components/Form";
import ReactSVG from "react-svg";

export default class Modal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showModal : false
		};
	}

	switchModal = () => {
		this.setState({
			showModal : !this.state.showModal
		});
	};

	render() {
		const toggleModal = this.state.showModal ? "feedback-modal active" : "feedback-modal";
		return (
			<div>
				<div id="feedback" className={toggleModal} role="dialog">
					<div data-wow-offset="0"  data-wow-duration=".3s" className="modal-dialog wow animated fadeInUp">
						<div className="modal-content">
							<div className="head-modal">
								<h4 className="title-modal">Shade Design</h4>
								<button onClick={this.switchModal} className="close-modal">
									<svg xmlns="http://www.w3.org/2000/svg"
										 version="1.1"
										 viewBox="0 0 371.23 371.23">
										<polygon points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23
                                       185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615"/>
									</svg>
								</button>
							</div>
							<div className="modal-body">
								<Form/>
							</div>
						</div>
					</div>
				</div>
				<button onClick={this.switchModal}>
					<ReactSVG path={require("../svg/letter.svg")}/>
				</button>
			</div>
		);
	}
}
