import React from "react";
import PropTypes from "prop-types";
import connect from "react-redux/es/connect/connect";

function TitleAndDescriptionPage(props) {
	return (
		<div data-wow-duration="1.5s" className="wow animated fadeInDown title-page-wrap">
			{
				props.pagesText && props.pagesText.map((item, key) => {
					const title = props.pageName + "Title";
					const description = props.pageName + "Description";
					return [
						<h1 className="title-page" key={key}>
							<strong className="crossed-out" children={item[title]}/>
							<span children={item["sub-title"]}/>
						</h1>,
						<p className="description" key={"key-2"} children={item[description]}/>
					];
				})
			}
		</div>
	);
}

TitleAndDescriptionPage.propTypes = {
	pageName : PropTypes.string,
	pagesText : PropTypes.array
	// titleAndDescription : PropTypes.arrayOf({
	// 	title : PropTypes.string,
	// 	"sub-title" : PropTypes.string,
	// 	description : PropTypes.string,
	// })
};

const mapStateToProps = state => {
	return {
		pagesText : state.pagesText
	};
};

export default connect(mapStateToProps)(TitleAndDescriptionPage);
