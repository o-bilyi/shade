import React from "react";
import FormComponent from "./Form.component";
import CloseIconSVG from "../../assets/svg/close.svg";
import LetterIconSVG from "../../assets/svg/letter.svg";

export default class ModalComponent extends React.Component {
	state = {
		showModal : false,
	};

	switchModal = () => {
		this.setState({
			showModal : !this.state.showModal,
		});
		document.body.classList.toggle("active");
	};

	render() {
		const toggleModal = this.state.showModal ? "feedback-modal active" : "feedback-modal";
		return (
			<div>
				<div id="feedback" className={toggleModal} role="dialog">
					<div data-wow-offset="0" data-wow-duration=".3s" className="modal-dialog wow animated fadeInUp">
						<div className="modal-content">
							<div className="head-modal">
								<h4 className="title-modal">Shade Design</h4>
								<button onClick={this.switchModal} className="close-modal">
									<CloseIconSVG />
								</button>
							</div>
							<div className="modal-body">
								<FormComponent/>
							</div>
						</div>
					</div>
				</div>
				<button onClick={this.switchModal}>
					<LetterIconSVG />
				</button>
			</div>
		);
	}
}
