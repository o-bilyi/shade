import React from "react";
import PropTypes from "prop-types";

export default function Preload(props) {
	const preloadClass = props.preloadShow ? "preload" : "preload delete";
	return (
		<div className={preloadClass}>
          <span className="preloadText">
              <span className="world">L</span>
              <span className="world">o</span>
              <span className="world">a</span>
              <span className="world">d</span>
              <span className="spin"/>
              <span className="spin"/>
              <span className="spin"/>
          </span>
		</div>
	);
}

Preload.propTypes = {
	preloadShow : PropTypes.bool
};

Preload.defaultProps = {
	preloadShow : true
};
