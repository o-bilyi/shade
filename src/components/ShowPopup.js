import React, {Component} from "react";
import i18n from "i18n-react";

export const showPopup = () => {
    const popup = document.getElementById("popupMessage");
    popup.classList.toggle("active");
    setTimeout(() => {
        popup.classList.toggle("active");
    }, 4500);
};

export default class ShowPopup extends Component {
    render() {
        return (
            <div id="popupMessage" className="wow animated bounceInDown">
				<i18n.span className="title-popup" text={{ key: "success" }}/>
				<i18n.span className="sub-title-popup" text={{ key: "feedback-successful" }}/>
            </div>
        );
    }
}
