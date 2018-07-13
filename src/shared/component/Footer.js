import React from "react";
import FindUs from "./FindUs";

export default function Footer() {
	return (
		<footer>
			<div className="footer-container">
				<div className="left">
					<p>© 2017 Shade.Design - UX\UI DESIGN & DEVELOPMENT - CHERNIVTSI - All rights reserved </p>
				</div>
				<div className="right social">
					<FindUs/>
				</div>
			</div>
		</footer>
	);
}
