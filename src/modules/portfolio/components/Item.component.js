import React from "react";
import PropTypes from "prop-types";
import {API_FOR_IMG} from "utilits/index";

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
						<a href={props.link}
							target="_blank"
							className="small-btn website">веб сайт</a>
						<button
							className="small-btn preview"
							onClick={() => previewProject(`${API_FOR_IMG}uploads-image/${props.previewImg}`, props.name)}
							children="зображення"/>
					</div>
				</figcaption>
				<a href={props.link} target="_blank">
					<img className="item-img" src={`${API_FOR_IMG}uploads-image/${props.img}`} alt={props.name}/>
				</a>
			</figure>
		</div>
	);
}

Item.propTypes = {
	link : PropTypes.string,
	name : PropTypes.string,
	previewImg : PropTypes.string,
	img : PropTypes.string,
};
