import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class ChangeLanguage extends Component {
    static propTypes = {
        changeLanguage: PropTypes.func
    };

    render() {
        return (
            <div className="button-lan-container">
                <button className="button-lan active" onClick={() => this.props.changeLanguage("en")}>English</button>
                <span className="border"/>
                <button className="button-lan" onClick={() => this.props.changeLanguage("ua")}>Українська</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage(newLang) {
            dispatch({
                type: "CHANGE_LANG",
                payload: newLang
            })
        }
    }

};

export default connect(undefined, mapDispatchToProps)(ChangeLanguage);