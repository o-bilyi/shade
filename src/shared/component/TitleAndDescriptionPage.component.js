import React from "react";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";

/**
 * @return {null}
 */
function TitleAndDescriptionPage(props) {
	if (props.textsOfPages) {
		const pageName = props.pageName;
		const titlePage = props.textsOfPages[pageName].title;
		const subTitlePage = props.textsOfPages[pageName].subTitle;
		const description = props.textsOfPages[pageName].description;

		return (
			<div data-wow-duration="1.5s" className="wow animated fadeInDown title-page-wrap">
				<h1 className="title-page">
					<strong className="crossed-out" children={titlePage}/>
					<span children={subTitlePage}/>
				</h1>
				<p className="description" children={description}/>
			</div>
		);
	}
	return null;
}

TitleAndDescriptionPage.propTypes = {
	pageName : PropTypes.string,
	textsOfPages : PropTypes.shape({
		title : PropTypes.string,
		subTitle : PropTypes.string,
		description : PropTypes.string
	})
};

const mapStateToProps = state => {
	return {
		textsOfPages : state.textsOfPages
	};
};

export default connect(mapStateToProps)(TitleAndDescriptionPage);
