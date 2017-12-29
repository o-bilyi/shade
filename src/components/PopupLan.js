import React, {Component} from 'react';
import ChangeLanguage from '../components/ChangeLanguage';

export default class PopupLan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            popupLan: true
        };
    }

    componentDidMount() {
        document.addEventListener('togglePopupLan',this.togglePopupLan)
    }

    componentWillMount(){
        this.localStorageSet();
    }

    togglePopupLan = (toggle) => {
        if(typeof (toggle) === 'object'){
            toggle = toggle.detail.hiddenPopup;
        }
        this.setState({
            popupLan: toggle
        });
    }

    localStorageSet = () =>{
        if(localStorage.getItem('language')){
            this.setState({
                popupLan: false
            });
        }
    };

    render(){
        const popupLan = this.state.popupLan ? "popupLan active" : "popupLan";
        return(
            <div className={popupLan}>
                <ChangeLanguage/>
            </div>
        )
    }
}