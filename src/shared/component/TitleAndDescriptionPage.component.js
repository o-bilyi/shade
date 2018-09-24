import React from "react";
import PropTypes from "prop-types";

export default function TitleAndDescriptionPage(props) {
	return (
		<div data-wow-duration="1.5s" className="wow animated fadeInDown title-page-wrap">
			{
				props.titleAndDescription.map((item, key) => {
					return [
						<h1 className="title-page" key={key}>
							<strong className="crossed-out" children={item.title}/>
							<span children={item["sub-title"]}/>
						</h1>,
						<p className="description" key={"key-2"} children={item.description}/>
					];
				})
			}
		</div>
	);
}

TitleAndDescriptionPage.propTypes = {
	titleAndDescription : PropTypes.array
	// titleAndDescription : PropTypes.arrayOf({
	// 	title : PropTypes.string,
	// 	"sub-title" : PropTypes.string,
	// 	description : PropTypes.string,
	// })
};
