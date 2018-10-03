import FormComponent from "./Form.component";
import React from "react";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";

function BottomMainForm(props) {
	return (
		<div className="bottom-main">
			<div className="form-container">
				{
					props.pagesText && props.pagesText.map((item, key) => {
						return [
							<h2 className="title-form" key={key} children={item.contactFormTitle}/>,
							<FormComponent
								key={2}
								labelNameText={item.contactFormName}
								labelSiteText={item.contactFormSite}
								labelEmailText={item.contactFormEmail}
								buttonSubmitText={item.contactFormButton}
							/>
						];
					})
				}
			</div>
		</div>
	);
}

BottomMainForm.propTypes = {
	pagesText : PropTypes.array,
};

const mapStateToProps = state => {
	return {
		pagesText : state.pagesText,
	};
};

export default connect(mapStateToProps)(BottomMainForm);
