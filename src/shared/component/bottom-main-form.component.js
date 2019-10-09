import FormComponent from "./Form.component";
import React from "react";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";

/**
 * @return {null}
 */
function BottomMainForm(props) {
	if (props.textsOfPages) {
		const title = props.textsOfPages.formFields.title;
		return (
			<div className="bottom-main">
				<div className="form-container">
					<h2 className="title-form" children={title}/>
					<FormComponent/>
				</div>
			</div>
		);
	}
	return null;
}

BottomMainForm.propTypes = {
	textsOfPages : PropTypes.shape({
		formFields : PropTypes.shape({
			title : PropTypes.string
		})
	})
};

const mapStateToProps = state => {
	return {
		textsOfPages : state.textsOfPages,
	};
};

export default connect(mapStateToProps)(BottomMainForm);
