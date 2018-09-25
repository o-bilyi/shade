import Form from "./Form";
import React from "react";
import connect from "react-redux/es/connect/connect";

function bottomMainForm(props) {
	return {
		props.pagesText && props.pagesText.map((item, key) => {
		return (
			<div className="bottom-main">
				<div className="form-container">
					<h2 className="title-form" children="Якщо вам сподобались наші роботи. Будемо на зв'язку"/>
					<Form/>
				</div>
			</div>
		)
	})
	}
}
const mapStateToProps = state => {
	return {
		pagesText : state.pagesText
	};
};

export default connect(mapStateToProps)(bottomMainForm);
