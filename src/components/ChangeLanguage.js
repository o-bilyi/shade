import React, {Component} from 'react';

export default class ChangeLanguage extends Component {

    setLang = (newLan) => {
        const changeLangEvent = new CustomEvent("changeLang",{"detail":{newLan}});
        document.dispatchEvent(changeLangEvent);

        const hiddenPopup = false;
        const togglePopupLan  = new CustomEvent("togglePopupLan",{"detail":{hiddenPopup}});
        document.dispatchEvent(togglePopupLan);

    };

    render(){
        return(
            <div className="button-lan">
                <p>
                    <span className="description-lan">Change lan:</span>
                    <button onClick={()=>this.setLang('en')}>En</button>
                </p>
                <p>
                    <span className="description-lan">Виберіть мову:</span>
                    <button onClick={()=>this.setLang('ua')}>Ua</button>
                </p>
            </div>
        )
    }
}