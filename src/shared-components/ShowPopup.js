import React from "react";

export const showPopup = () => {
    const popup = document.getElementById("popupMessage");
    popup.classList.toggle("active");
    setTimeout(() => {
        popup.classList.toggle("active");
    }, 4500);
};

export default function ShowPopup() {
	return (
		<div id="popupMessage" className="wow animated bounceInDown">
			<span className="title-popup" children="Успіх"/>
			<span className="sub-title-popup" children="Форма відправлена"/>
		</div>
	);
}

