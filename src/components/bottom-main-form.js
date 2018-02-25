import React, {Component} from "react";
import Form from "./Form";
import i18n from "i18n-react";

export default class bottomMainForm extends Component {
    render(){
        return (
            <div className="bottom-main">
                <div className="form-container">
					<i18n.text className="title-form" tag="h2" text={{key : "get-in-touch"}}/>
                    <Form/>
                </div>
            </div>
        );
    }
}
