import React from "react";
import PropTypes from "prop-types";
import {API_FOR_IMG} from "../../../utilits/index";
import FindUs from "../../../shared/component/FindUs";

export default function Item(props) {
	return (
		<div className={`wow animated ${props.animateClass} user-box`}>
			<div className="user-head">
				<div className="user-img">
					<img src={`${API_FOR_IMG}/uploads-image/${props.img}`} alt="text"/>
				</div>
				<div className="user-title">
					<h2>{props.name}</h2>
					<span>{props.position}</span>
				</div>
			</div>
			<div className="user-body">
				<div className="user-description" children={props.description}/>
				<FindUs
					facebook={props.facebook}
					linkedin={props.linkedin}
				/>
			</div>
		</div>
	);
}
Item.propTypes = {
	img : PropTypes.string,
	name : PropTypes.string,
	position : PropTypes.string,
	description : PropTypes.string,
	animateClass : PropTypes.string,
	facebook : PropTypes.string,
	instagram : PropTypes.string,
	behance : PropTypes.string,
	dribbble : PropTypes.string,
	linkedin : PropTypes.string,
};
Item.defaultProps = {
	animateClass : "fadein",
};
