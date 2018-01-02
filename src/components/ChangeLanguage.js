import React, {Component} from "react";

export default class ChangeLanguage extends Component {
    constructor(props) {
        super(props);
    }

    // setLang = (newLan) => {
    //     // const changeLangEvent = new CustomEvent("changeLang",{"detail":{newLan}});
    //     // document.dispatchEvent(changeLangEvent);
    //     return newLan;
    //
    //     // const hiddenPopup = false;
    //     // const togglePopupLan  = new CustomEvent("togglePopupLan",{"detail":{hiddenPopup}});
    //     // document.dispatchEvent(togglePopupLan);
    //
    // };
    // let lan = this.props.changaLan;

    render() {
        return (
            <div className="button-lan-container">
                <button className="button-lan active" onClick={() => this.props.toggleLang("en")}>English</button>
                <span className="border"/>
                <button className="button-lan" onClick={() => this.props.toggleLang("ua")}>Українська</button>
                {this.props.children};
            </div>
        )
    }
}