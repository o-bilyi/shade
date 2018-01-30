import React, {Component} from "react";
import Preload from "../components/Preload";

export default class PreviewProject extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showModal : false,
			preview : "",
			title : "",
		 	imageStatus : false
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
				imageStatus : true,
				preview : preview.newPreview,
				title : preview.newNameProject
			});
		}
		const body = document.body;
		const html = document.querySelector("html");
		body.classList.toggle("active");
		html.classList.toggle("active");
	};

	imageLoaded = () => {
		this.setState({
			imageStatus : false
		});
	};

	render() {
		const toggleModal = this.state.showModal ? "preview-modal show" : "preview-modal";
		const {preview, title} = this.state;
		return (
			<div className={toggleModal} role="dialog">
				<div className="modal-content">
					<div className="head-modal">
						<h4 className="title-modal">{title}</h4>
						<button onClick={this.switchModal} className="close-modal">
							close
						</button>
					</div>
					<div className="modal-body">
						 <img
							 onLoad={this.imageLoaded}
							 src={preview}
							 alt={title}
						 />
						<Preload preloadShow={this.state.imageStatus}/>
					</div>
				</div>
			</div>
		);
	}
}
