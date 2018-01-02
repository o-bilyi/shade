import React, {Component} from "react";
import $ from "jquery";
import SVGInline from "react-svg-inline";
import {showPopup} from "../components/ShowPopup";
import i18n from "i18n-react";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            site: "",
            email: ""
        };
    }

    componentDidMount() {
        $(".form-control").click(function () {
            $(".input-field label").removeClass("active");
            $(this).prev("label").toggleClass("active");
        });
    }

    onFieldsChange = event => {
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit = event => {
        event.preventDefault();
        let form = event.target;
        let formData = new FormData(form);
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
            $("#feedback").modal("hide");
            showPopup();
            form.reset();
            event.target.reset();
        })
        .catch(function(error) {
            console.log("Request failed", error);
        });
    };

    render() {
        return (
            <div className="form">
                <form method="post" onSubmit={this.handleSubmit}>
                    <div className="envelope">
                        <SVGInline svg={"<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" >\n" +
                        "  <image x=\"0px\" y=\"0px\" xlink:href=\"data:img/png;base64,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\"/>\n" +
                        "</svg>\n"}/>
                    </div>
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
                        <i18n.text tag="label" htmlFor="your-name" text={{ key: "more-details-e-mail" }}/>
                        <input id="your-email" value={this.state.email} onChange={this.onFieldsChange} type="email"
                               name="email" className="form-control" required/>
                    </div>
                    <div className="big-btn">
                        <button type="submit" className="more-projects_link" name="submit">
                            <i18n.p  text={{ key: "send-message" }}/>
                            <span></span>
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
