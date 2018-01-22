import React, { Component } from "react";

export default class PreviewProject extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal : false,
			preview : "",
			title : ""
		};
	}

	componentDidMount() {
		document.addEventListener("preview", this.switchModal);
	}

	switchModal = (preview) => {
		if(this.state.showModal) {
			this.setState({
				showModal : false
			});
		} else {
			this.setState({
				showModal : true,
				preview : preview.newPreview,
				title : preview.newNameProject
			});
		}
		const body = document.body;
		body.classList.toggle("active");
	};

	render() {
		const toggleModal = this.state.showModal ? "preview-modal show" : "preview-modal";
		const {preview, title} = this.state;
		return (
			<div className={toggleModal} role="dialog">
				<div data-wow-offset="0" className="wow animated fadeIn modal-content">
					<div className="head-modal">
						<h4 className="title-modal">{title}</h4>
						<button onClick={this.switchModal} className="close-modal">
							close
						</button>
					</div>
					<div className="modal-body">
						{/* <img src={preview} alt={title} onLoad={}/>*/}
						<img src={preview} alt={title}/>
					</div>
				</div>
			</div>
		);
	}
}
