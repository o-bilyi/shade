import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class ChangeLanguage extends Component {
    static propTypes = {
        changeLanguage: PropTypes.func,
        language : PropTypes.string
    };

    constructor(props){
        super(props);
		const setLanStorage = localStorage.getItem("language");
		if (setLanStorage) {
			this.state = {
				language : setLanStorage
			};
			this.props.changeLanguage(setLanStorage)
		}else {
			this.state = {
				language : this.props.language
			};
        }
    };

    componentWillReceiveProps(newProps) {
        if (newProps.language !== this.props.language) {
            this.setState({
                language : newProps.language
            });
        }
    }

    render() {
        return (
            <div className={"button-lan-container " +this.state.language}>
                <button className="english button-lan" onClick={() =>
                    this.props.changeLanguage("en")}>English</button>
                <span className="border"/>
                <button className="ukraine button-lan" onClick={() =>
                    this.props.changeLanguage("ua")}>Українська</button>
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

const mapStateToProps = state => {
    return {
        language: state.language
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ChangeLanguage);
