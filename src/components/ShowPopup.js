import React, {Component} from "react";

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
                <span className="title-popup">Success</span>
                <span className="sub-title-popup">Feedback successful!</span>
            </div>
        );
    }
}
