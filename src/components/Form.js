import React, {Component} from "react";
import {showPopup} from "../components/ShowPopup";
import i18n from "i18n-react";

const initialState = {
	user: "",
	site: "",
	email: ""
};

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onFieldsChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        let formData = new FormData(event.target);
        function status(response) {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response)
            } else {
                return Promise.reject(new Error(response.statusText))
            }
        }
        fetch("/send.php",{
            method: "post",
            body: formData
        })
        .then(status)
        .then(() => {
            showPopup();
            this.setState({
                ...initialState
            })
        })
        .catch(function(error) {
            console.warn("Request failed", error);
        });
    };

    render() {
		return (
            <form  className="form" method="post" onSubmit={this.handleSubmit}>
                    <div className="input-field max-width-input">
                        <i18n.text tag="label" htmlFor="your-name" text={{ key: "my-name-is" }}/>
                        <input id="your-name" value={this.state.user} onChange={this.onFieldsChange} type="text"
                               name="user" className="form-control" required/>
                    </div>
                    <div className="input-field">
                        <i18n.text tag="label" htmlFor="your-name" text={{ key: "i-liked" }}/>
                        <input id="your-website" value={this.state.site} onChange={this.onFieldsChange} type="text"
                               name="site" className="form-control" required/>
                    </div>
                    <div className="input-field">
                        <i18n.text tag="label" htmlFor="your-name" text={{ key: "more-details-email" }}/>
                        <input id="your-email" value={this.state.email} onChange={this.onFieldsChange} type="email"
                               name="email" className="form-control" required/>
                    </div>
                    <div className="big-btn">
                        <button type="submit" className="more-projects_link" name="submit">
                            <i18n.span  text={{ key: "send-message" }}/>
                        </button>
                    </div>
                </form>
        );
    }
}
