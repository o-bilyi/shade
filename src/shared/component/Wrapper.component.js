import React from "react";
import PropTypes from "prop-types";
import Header from "./Header.component";
import BottomMainForm from "./bottom-main-form.component";
import Footer from "./Footer.component";

export default function Wrapper(props) {
	return (
		<div className={`main-wrap ${props.classNames}`}>
			<Header/>
			<main id={props.pageName} className="offset-section">
				{props.children}
				<BottomMainForm/>
			</main>
			<Footer/>
		</div>
	);
}


Wrapper.propTypes = {
	children : PropTypes.PropTypes.any,
	classNames : PropTypes.string,
	pageName : PropTypes.string,
};
