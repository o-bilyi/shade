import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const newPreviewProject = new CustomEvent("preview");

const previewProject = (newPreview, newNameProject) => {
	newPreviewProject.newPreview = newPreview;
	newPreviewProject.newNameProject = newNameProject;
	document.dispatchEvent(newPreviewProject);
};

export default function Item(props) {

	return (
		<div className="animated fadeInUp projects" data-wow-duration="1.5s">
			<figure>
				<figcaption>
					<h2 className="title-project">{props.name}</h2>
					<div className="buttons">
						<Link to={props.link}
						      target="_blank"
						      className="small-btn website">веб сайт</Link>
						<button
							className="small-btn preview"
							onClick={() => previewProject(`/uploads-image/${props.previewImg}`, props.name)}
							children="зображення"/>
					</div>
				</figcaption>
				<Link to={props.link} target="_blank">
					<img className="item-img" src={`/uploads-image/${props.img}`} alt={props.name}/>
				</Link>
			</figure>
		</div>
	)
}

Item.propTypes = {
	link : PropTypes.string,
	name : PropTypes.string,
	previewImg : PropTypes.string,
	img : PropTypes.string
};
