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
		document.addEventListener("preview",this.switchModal);
	}

	switchModal = (preview) => {
		let title;
		if(typeof (preview) === "object"){
			title = preview.detail.newNameProject;
			preview = preview.detail.newPreview;
		}

		this.setState({
			showModal : !this.state.showModal,
			preview : preview,
			title : title
		});
		const body = document.querySelector("body");
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
						<img src={preview} alt={title}/>
					</div>
				</div>
			</div>
		);
	}
}
