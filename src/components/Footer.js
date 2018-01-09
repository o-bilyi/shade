import React, {Component} from "react";
import FindUs from "../components/FindUs";

export default class Footer extends Component {
    render() {
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
}