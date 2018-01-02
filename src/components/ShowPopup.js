import React, {Component} from "react";

export const showPopup = () => {
    const popup = document.getElementById("popupMessage");
    popup.classList.toggle("active");
    setTimeout(function () {
        popup.classList.toggle("active");
    }, 4500);
};

export default class ShowPopup extends Component {
    render() {
        return (
            <div id="popupMessage">
                <span>Message sent</span>
            </div>
        );
    }
}